const express = require(`express`);
const connect = require("./Configs/db");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5000;

const urlController = require("./Controllers/url.controller");
const redirectController = require("./Controllers/redirect.controller");

app.use("/", redirectController);
app.use("/api/url", urlController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`port is listening on ${PORT}`);
  } catch (err) {
    console.log("err", err);
  }
});
