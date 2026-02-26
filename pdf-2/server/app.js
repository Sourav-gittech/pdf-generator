require("dotenv").config();
const express = require("express");
const cors = require("cors");

const studentRouter = require("./app/routes/studentRoute");
const dbConnect = require("./app/config/dbConfig");

const port = 4000;

const app = express();

dbConnect();

app.use(cors());
app.use(express.json());
app.use('/student/details', studentRouter);

app.listen(port, () => {
    console.log("Server is running on port", port);
})