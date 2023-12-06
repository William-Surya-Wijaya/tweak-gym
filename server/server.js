const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/controller/routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: "false",
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

// Start the server
const port = 3100;
app.listen(port, () => {
  console.log(`>> Server is running on http://localhost:${port}`);
});
