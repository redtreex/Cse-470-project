const router = require("./routes");
const express = require("express");
const cors = require("cors")

const app = express();
const PORT = 3030;
app.use(cors())
app.use(express.static("./view"));

app.use("/api",router);

app.listen(PORT, () => {
    console.log("Server up!");
});