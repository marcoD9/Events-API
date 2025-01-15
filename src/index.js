// Require this first!
require("./instrument");
// Now require other modules
require("dotenv/config");
const express = require("express");
const Sentry = require("@sentry/node");
const usersRouter = require("./routes/users.js");
const eventsRouter = require("./routes/events.js");
const categoriesRouter = require("./routes/categories.js");
const loginRouter = require("./routes/login.js");
const log = require("./middleware/logMiddleware.js");

const app = express();
// Global middleware
app.use(express.json());
app.use(log);
// Add your routes, etc.
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/users", usersRouter);
app.use("/events", eventsRouter);
app.use("/categories", categoriesRouter);
app.use("/login", loginRouter);

// Add this after all routes,
// but before any and other error-handling middlewares are defined
Sentry.setupExpressErrorHandler(app);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
