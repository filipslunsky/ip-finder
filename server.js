const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});

app.use(cors());

app.get('/workaround-api/:ipAddress', async(req, res) => {
    const { ipAddress } = req.params;
    console.log(ipAddress);

    try {
        const response = await fetch(`http://ip-api.com/json/${ipAddress}?fields=61439`);
        if (!response.ok) {
            res.status(404).json({error: 'requested data not found'});
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: 'failed to fetch the data'});
    }
});

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});
