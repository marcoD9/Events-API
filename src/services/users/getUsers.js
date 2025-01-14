const fs = require("fs");
const path = require("path");

const getUsers = () => {
  // Risolve il percorso a partire dalla cartella 'src/services/users/'
  const filePath = path.join(__dirname, "..", "..", "data", "users.json");

  // Leggi il file JSON
  const jsonData = fs.readFileSync(filePath, "utf-8");

  // Parsea il JSON
  const usersData = JSON.parse(jsonData);

  // Ottieni gli utenti
  let users = usersData.users;

  return users;
};

module.exports = getUsers;
