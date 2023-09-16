const Ticker = require("../models/ticker");
const axios = require("axios");

module.exports.putTickers = async (req, res) => {
    try {
        const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
        const api_data = response.data;

        const data = Object.values(api_data).slice(0, 10);

        await Ticker.deleteMany({});

        await Ticker.insertMany(data);

        res.json({
            message: "First 10 data items fetched and replaced in MongoDB",
            success: true,
        });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ error: "An error occurred while fetching and replacing data" });
    }
};

module.exports.getTickers = async (req, res) => {
    try {
        const tickers = await Ticker.find({});
        res.status(200).json({ tickers, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching data" });
    }
};
