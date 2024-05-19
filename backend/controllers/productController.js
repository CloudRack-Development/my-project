const axios = require('axios');

exports.getProducts = async (req, res) => {
    try {
        const response = await axios.get('https://dev.sellix.io/v1/products', {
            headers: {
                'Authorization': `Bearer ${process.env.SELLIX_API_KEY}`
            }
        });
        res.json(response.data.data.products);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getProduct = async (req, res) => {
    try {
        const response = await axios.get(`https://dev.sellix.io/v1/products/${req.params.id}`, {
            headers: {
                'Authorization': `Bearer ${process.env.SELLIX_API_KEY}`
            }
        });
        res.json(response.data.data.product);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
