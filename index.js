const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Provider } = require("react-redux");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mavinash422:gfcz0io0dke50Xmb@cluster0.cj5pp.mongodb.net/analysisData?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((e) => {
    console.error(e);
  });

const schema = mongoose.Schema({
  userId: {
    type: String,
  },
  ip: {
    type: String,
  },
});
const model = mongoose.model("ips", schema);

const getClientIp = (req) => {
  return (
    req.ip || req.connection.remoteAddress || req.headers["x-forwarded-for"]
  );
};

app.get("/", (req, res) => {
  res.send("Hiii");
});

// app.get("/", async (req, res) => {
//   const userId = req.query.userId;
//   const ip = getClientIp(req);
//   console.log(typeof userId);

//   await model.create({ userId: userId.toString(), ip });
//   console.log(`User ID: ${userId}, IP: ${ip}`);

//   res.send("Success!");
// });

app.listen(5001, () => console.log(`Server listening on port ${5001}`));
