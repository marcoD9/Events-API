const fs = require("fs");
const path = require("path");

const getEventById = (id) => {
  const filePath = path.join(__dirname, "..", "..", "data", "events.json");
  // Leggi il file JSON
  const jsonData = fs.readFileSync(filePath, "utf-8");
  // Parsea il JSON
  const eventsData = JSON.parse(jsonData);

  // Ottieni l'evento
  const event = eventsData.events.find((event) => event.id === id);

  if (!event) {
    throw new Error("Event not found", error);
  }

  return event;
};

module.exports = getEventById;
