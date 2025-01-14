const fs = require("fs");
const path = require("path");

const updateEvent = (
  id,
  title,
  description,
  location,
  image,
  startTime,
  endTime,
  createdBy,
  categoryIds
) => {
  const filePath = path.join(__dirname, "..", "..", "data", "events.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const eventsData = JSON.parse(jsonData);
  const event = eventsData.events.find((event) => event.id === id);

  if (!event) {
    throw new Error("Event not found", error);
  }

  event.title = event.title ?? title;
  event.description = event.description ?? description;
  event.location = event.location ?? location;
  event.image = event.image ?? image;
  event.startTime = event.startTime ?? startTime;
  event.endTime = event.endTime ?? endTime;
  event.createdBy = event.createdBy ?? createdBy;
  event.categoryIds = event.categoryIds ?? categoryIds;

  return event;
};

module.exports = updateEvent;
