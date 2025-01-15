const fs = require("fs");
const path = require("path");

const updateUser = (id, username, password, name, image) => {
  const filePath = path.join(__dirname, "..", "..", "data", "users.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const usersData = JSON.parse(jsonData);
  const user = usersData.users.find((user) => user.id === id);

  if (!user) {
    return null;
  }

  user.username = username ?? user.username;
  user.password = password ?? user.password;
  user.name = name ?? user.name;
  user.image = image ?? user.image;
  return user;
};

module.exports = updateUser;
