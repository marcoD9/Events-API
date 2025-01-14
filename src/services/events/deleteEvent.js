const fs = require("fs");
const path = require("path");

const deleteEvent = (id) => {
  const filePath = path.join(__dirname, "..", "..", "data", "events.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const eventsData = JSON.parse(jsonData);
  const index = eventsData.events.findIndex((event) => event.id === id);

  if (index === -1) {
    throw new Error("User not found", error);
  }

  eventsData.events.splice(index, 1);
  return id;
};

module.exports = deleteEvent;
