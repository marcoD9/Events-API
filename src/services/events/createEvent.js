const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const createEvent = (
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
  // Crea un nuovo evento
  const newEvent = {
    id: uuid(),
    title,
    description,
    location,
    image,
    startTime,
    endTime,
    createdBy,
    categoryIds,
  };

  // Aggiunge il nuovo evento ai dati esistenti
  eventsData.events.push(newEvent);

  // Scrive i dati aggiornati nel file
  fs.writeFileSync(filePath, JSON.stringify(eventsData, null, 2), "utf-8");

  return newEvent;
};

module.exports = createEvent;
