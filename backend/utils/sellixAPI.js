const axios = require('axios');

const sellixAPI = axios.create({
    baseURL: 'https://dev.sellix.io/v1',
    headers: {
        'Authorization': `Bearer ${process.env.SELLIX_API_KEY}`
    }
});

module.exports = sellixAPI;
