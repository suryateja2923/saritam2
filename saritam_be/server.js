const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
require("dotenv").config()
const router = require("./routes/eventRegRouter")



const app = express();

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
const port = process.env.PORT;

app.use("/saritam", router)

app.use((req, res) => {
    res.status(404).json({ message: "page not found" })
})

app.listen(port, () => {
    try {
        console.log(`server running successfully at ${port}`);
    } catch (error) {
        console.log({
            message: "error while running the server",
            error: error.message
        });
    }
})