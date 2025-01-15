const fs = require("fs");
const path = require("path");

const getEvents = (title, location) => {
  // Risolve il percorso a partire dalla cartella 'src/services/events/'
  const filePath = path.join(__dirname, "..", "..", "data", "events.json");
  // Leggi il file JSON
  const jsonData = fs.readFileSync(filePath, "utf-8");
  // Parsea il JSON
  const eventsData = JSON.parse(jsonData);
  // Ottieni gli Eventi
  return eventsData.events.filter((event) => {
    return (
      (!title || event.title === title) &&
      (!location || event.location === location)
    );
  });
};

module.exports = getEvents;
