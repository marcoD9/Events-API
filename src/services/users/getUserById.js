const fs = require("fs");
const path = require("path");

const getUserById = (id) => {
  const filePath = path.join(__dirname, "..", "..", "data", "users.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const usersData = JSON.parse(jsonData);

  const user = usersData.users.find((user) => user.id === id);

  if (!user) {
    throw new Error("User not found", error);
  }
  return user;
};

module.exports = getUserById;
