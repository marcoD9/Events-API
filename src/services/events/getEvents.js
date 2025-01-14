const fs = require("fs");
const path = require("path");

const getEvents = () => {
  // Risolve il percorso a partire dalla cartella 'src/services/events/'
  const filePath = path.join(__dirname, "..", "..", "data", "events.json");

  // Leggi il file JSON
  const jsonData = fs.readFileSync(filePath, "utf-8");

  // Parsea il JSON
  const eventsData = JSON.parse(jsonData);

  // Ottieni gli Eventi
  let events = eventsData.events;

  return events;
};

module.exports = getEvents;
