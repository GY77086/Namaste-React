// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Enable CORS so your frontend can talk to this backend
// app.use(cors({
//     origin: '*' // Replace '*' with your deployed frontend URL later (e.g., 'https://your-app.netlify.app')
// }));

// // Proxy endpoint for Swiggy restaurants
// app.get('/api/restaurants', async (req, res) => {
//     const lat = req.query.lat || '26.449923';
//     const lng = req.query.lng || '80.331873';

//     try {
//         // Dynamic import for node-fetch since you are using CommonJS require
//         const fetch = (await import('node-fetch')).default;

//         const response = await fetch(
//             `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
//             {
//                 headers: {
//                     'Accept': 'application/json',
//                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
//                 }
//             }
//         );

//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error('Error fetching from Swiggy:', error);
//         res.status(500).json({ error: 'Failed to fetch data' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });




// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors({
//     origin: '*' 
// }));

// // 1. Your original working restaurant list endpoint
// app.get('/api/restaurants', async (req, res) => {
//     const lat = req.query.lat || '26.4750346';
//     const lng = req.query.lng || '80.3532749';

//     try {
//         const fetch = (await import('node-fetch')).default;
//         const response = await fetch(
//             `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
//             {
//                 headers: {
//                     'Accept': 'application/json',
//                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
//                 }
//             }
//         );
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error('Error fetching from Swiggy:', error);
//         res.status(500).json({ error: 'Failed to fetch data' });
//     }
// });

// // ✅ 2. ADD THIS NEW ENDPOINT FOR THE MENU CONTROLLER BELOW THE FIRST ONE
// app.get('/api/menu', async (req, res) => {
//     const resId = req.query.resId;
//     if (!resId) {
//         return res.status(400).json({ error: 'Restaurant ID (resId) is required' });
//     }

//     const lat = '26.4750346'; 
//     const lng = '80.3532749';

//     try {
//         const fetch = (await import('node-fetch')).default;
//         const response = await fetch(
//             `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`,
//             {
//                 headers: {
//                     'Accept': 'application/json',
//                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
//                 }
//             }
//         );
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error(`Error fetching menu for restaurant ${resId}:`, error);
//         res.status(500).json({ error: 'Failed to fetch menu data' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors({
//     origin: '*' 
// }));

// // 1. Original working restaurant list endpoint
// app.get('/api/restaurants', async (req, res) => {
//     const lat = req.query.lat || '26.4750346';
//     const lng = req.query.lng || '80.3532749';

//     try {
//         const fetch = (await import('node-fetch')).default;
//         const response = await fetch(
//             `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
//             {
//                 headers: {
//                     'Accept': 'application/json',
//                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
//                 }
//             }
//         );
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error('Error fetching from Swiggy:', error);
//         res.status(500).json({ error: 'Failed to fetch data' });
//     }
// });

// // ✅ 2. UPDATED MENU ENDPOINT WITH BYPASS HEADERS
// app.get('/api/menu', async (req, res) => {
//     const resId = req.query.resId;
//     if (!resId) {
//         return res.status(400).json({ error: 'Restaurant ID (resId) is required' });
//     }

//     // Using exact matching coordinates to ensure regional permission alignment
//     const lat = req.query.lat || '26.4750346'; 
//     const lng = req.query.lng || '80.3532749';

//     try {
//         const fetch = (await import('node-fetch')).default;
//         const response = await fetch(
//             `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`,
//             {
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Accept-Language': 'en-US,en;q=0.9',
//                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
//                     'Referer': 'https://www.swiggy.com/',
//                     'Origin': 'https://www.swiggy.com'
//                 }
//             }
//         );

//         // If Swiggy returns a bad status code (like 403 or 500), catch it explicitly
//         if (!response.ok) {
//             throw new Error(`Swiggy API responded with status code: ${response.status}`);
//         }

//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error(`Error fetching menu for restaurant ${resId}:`, error);
//         res.status(500).json({ 
//             error: 'Failed to fetch menu data',
//             details: error.message 
//         });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors({
//     origin: '*' 
// }));

// // 1. Original working restaurant list endpoint
// app.get('/api/restaurants', async (req, res) => {
//     const lat = req.query.lat || '26.4750346';
//     const lng = req.query.lng || '80.3532749';

//     try {
//         const fetch = (await import('node-fetch')).default;
//         const response = await fetch(
//             `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
//             {
//                 headers: {
//                     'Accept': 'application/json',
//                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
//                 }
//             }
//         );
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error('Error fetching from Swiggy:', error);
//         res.status(500).json({ error: 'Failed to fetch data' });
//     }
// });

// // ✅ 2. UPDATED MENU ENDPOINT ACCEPTING DYNAMIC COORDINATES & PARAMS
// app.get('/api/menu', async (req, res) => {
//     const resId = req.query.resId;
//     if (!resId) {
//         return res.status(400).json({ error: 'Restaurant ID (resId) is required' });
//     }

//     // Capture dynamic lat/lng passed from frontend, default to Kanban baseline if missing
//     const lat = req.query.lat || '26.4750346'; 
//     const lng = req.query.lng || '80.3532749';

//     try {
//         const fetch = (await import('node-fetch')).default;
        
//         // Assembled to exactly match Swiggy's required browser engine query string layout
//         const targetUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
        
//         const response = await fetch(
//             targetUrl,
//             {
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Accept-Language': 'en-US,en;q=0.9',
//                     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
//                     'Referer': 'https://www.swiggy.com/',
//                     'Origin': 'https://www.swiggy.com'
//                 }
//             }
//         );

//         if (!response.ok) {
//             throw new Error(`Swiggy API responded with status code: ${response.status}`);
//         }

//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error(`Error fetching menu for restaurant ${resId}:`, error);
//         res.status(500).json({ 
//             error: 'Failed to fetch menu data',
//             details: error.message 
//         });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: '*' 
}));

// 1. Working restaurant list endpoint
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

// ✅ 2. SECURED MENU ENDPOINT WITH HARDENED BROWSER HEADERS
app.get('/api/menu', async (req, res) => {
    const resId = req.query.resId;
    if (!resId) {
        return res.status(400).json({ error: 'Restaurant ID (resId) is required' });
    }

    const lat = req.query.lat || '26.4750346'; 
    const lng = req.query.lng || '80.3532749';

    try {
        const fetch = (await import('node-fetch')).default;
        const targetUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`;
        
        console.log(`Forwarding menu proxy request for restaurant ID: ${resId}`);

        const response = await fetch(
            targetUrl,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.9',
                    // Hardened User-Agent footprint mimicking a real Chrome window environment
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                    'Referer': 'https://www.swiggy.com/',
                    'Origin': 'https://www.swiggy.com'
                }
            }
        );

        // If Swiggy returns a bad status code, log the context instead of crashing silently
        if (!response.ok) {
            const errBody = await response.text();
            console.error(`Swiggy API Error response body: ${errBody}`);
            throw new Error(`Swiggy answered with an invalid network status code: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(`Error fetching menu for restaurant ${resId}:`, error.message);
        res.status(500).json({ 
            error: 'Failed to fetch menu data',
            details: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});