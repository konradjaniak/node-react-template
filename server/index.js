const path = require('path');
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

// Enable CORS for all endpoints
app.use(cors());

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({
        data: Date.now(),
        message: "Message from backend",
    });
});

if (process.env.NODE_ENV === "production") {
    // Have Node serve the files for our built React app
    app.use(express.static(path.resolve(__dirname, "../client/build")));
    
    // All other GET requests not handled before will return our React app
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
