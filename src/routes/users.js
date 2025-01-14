const express = require("express");
const getUsers = require("../services/users/getUsers.js");
const createUsers = require("../services/users/createUsers.js");
const getUserById = require("../services/users/getUserById.js");
const updateUser = require("../services/users/updateUser.js");
const deleteUser = require("../services/users/deleteUser.js");

const router = express.Router();

router.get("/", (req, res) => {
  const users = getUsers();
  res.status(200).json(users);
});

router.post("/", (req, res) => {
  const { username, password, name, image } = req.body;
  const newUser = createUsers(username, password, name, image);
  res.status(201).json(newUser);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = getUserById(id);
  res.status(200).json(user);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { username, password, name, image } = req.body;
  const updatedUser = updateUser(id, username, password, name, image);
  res.status(200).json(updatedUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deletedUserId = deleteUser(id);

  res.status(200).json({
    message: `User with id ${deletedUserId} was deleted!`,
  });
});

module.exports = router;
