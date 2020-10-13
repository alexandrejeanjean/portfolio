/* Simple server to serve on heroku */
const path = require("path");
const helmet = require("helmet");
const express = require("express");
const sslRedirect = require("heroku-ssl-redirect").default;
const app = express();
app.use(helmet());

const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 3000;

app.use(sslRedirect());
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});
