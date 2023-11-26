const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/controller/routes");

const app = express();

const staticPathPublic = path.resolve("public");

app.set("view engine", "ejs");
app.use(cors());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.static(staticPathPublic));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`>> Server is running on http://localhost:${port}`);
});
