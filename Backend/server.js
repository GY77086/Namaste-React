const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so your frontend can talk to this backend
app.use(cors({
    origin: '*' // Replace '*' with your deployed frontend URL later (e.g., 'https://your-app.netlify.app')
}));

// Proxy endpoint for Swiggy restaurants
app.get('/api/restaurants', async (req, res) => {
    const lat = req.query.lat || '26.449923';
    const lng = req.query.lng || '80.331873';

    try {
        // Dynamic import for node-fetch since you are using CommonJS require
        const fetch = (await import('node-fetch')).default;

        const response = await fetch(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
            {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
                }
            }
        );

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching from Swiggy:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



