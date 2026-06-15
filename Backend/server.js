// 1. Your original working restaurant list endpoint
app.get('/api/restaurants', async (req, res) => {
    const lat = req.query.lat || '26.4750346';
    const lng = req.query.lng || '80.3532749';

    try {
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

// ✅ 2. ADD THIS NEW ENDPOINT FOR THE MENU CONTROLLER BELOW THE FIRST ONE
app.get('/api/menu', async (req, res) => {
    const resId = req.query.resId;
    if (!resId) {
        return res.status(400).json({ error: 'Restaurant ID (resId) is required' });
    }

    const lat = '26.4750346'; 
    const lng = '80.3532749';

    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`,
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
        console.error(`Error fetching menu for restaurant ${resId}:`, error);
        res.status(500).json({ error: 'Failed to fetch menu data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
