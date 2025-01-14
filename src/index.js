// Require this first!
require("./instrument");
// Now require other modules
const express = require("express");
const Sentry = require("@sentry/node");
const usersRouter = require("./routes/users.js");
const eventsRouter = require("./routes/events.js");

const app = express();
app.use(express.json());
// Add your routes, etc.
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/users", usersRouter);
app.use("/events", eventsRouter);
// Add this after all routes,
// but before any and other error-handling middlewares are defined
Sentry.setupExpressErrorHandler(app);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
