const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routers/userRoute");
const HttpError = require("./models/error");

const app = express();
app.use(bodyParser.json());
app.use("/user", userRouter);

app.listen(5000);
