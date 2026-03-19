import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/menu", async (req, res) => {
  try {
    const restaurantId = req.query.id;

    if (!restaurantId) {
      return res.status(400).json({
        error: "Restaurant ID is required"
      });
    }

    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8467&lng=80.9462&restaurantId=${restaurantId}`;

    console.log("Fetching:", url);

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
        "Accept": "application/json",
        "Referer": "https://www.swiggy.com/",
        "Origin": "https://www.swiggy.com"
      }
    });

    const data = await response.json();

    res.json(data);

  } catch (error) {
    console.log("FULL ERROR:", error.message);

    res.status(500).json({
      error: "Failed to fetch Swiggy data"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});