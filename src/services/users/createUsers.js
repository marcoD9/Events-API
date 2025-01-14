const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const createUsers = (username, password, name, image) => {
  const filePath = path.join(__dirname, "..", "..", "data", "users.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const usersData = JSON.parse(jsonData);
  // Crea un nuovo utente
  const newUser = {
    id: uuid(),
    username,
    password,
    name,
    image,
  };

  // Aggiunge il nuovo utente ai dati esistenti
  usersData.users.push(newUser);

  // Scrive i dati aggiornati nel file
  fs.writeFileSync(filePath, JSON.stringify(usersData, null, 2), "utf-8");

  return newUser;
};

module.exports = createUsers;
