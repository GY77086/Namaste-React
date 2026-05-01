const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
app.use(express.json());
// Restaurant list
app.get("/api/restaurants", async (req, res) => 
{
    try 
    {
        const { lat, lng } = req.query;
        const response = await axios.get
        (`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
            {
                headers: 
                {
                    "Content-Type": "application/json",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                },
            }
        );
        res.json(response.data);
    }
    catch (error) 
    {
        console.error(error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Restaurant menu
app.get("/api/menu/:restId", async (req, res) => 
{
    try
    {
        const { restId } = req.params;
        const { lat, lng } = req.query;
        const response = await axios.get
        (
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat || "26.4783732"}&lng=${lng || "80.3542791"}&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`,
            {
                headers: 
                {
                    "Content-Type": "application/json",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                },
            }
        );
        res.json(response.data);
    }
    catch (error) 
    {
        console.error(error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(5000, () => 
{
    console.log("Server running on port 5000");
});
