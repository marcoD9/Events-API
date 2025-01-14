const express = require("express");
const getEvents = require("../services/events/getEvents.js");
const createEvent = require("../services/events/createEvent.js");
const router = express.Router();

router.get("/", (req, res) => {
  const users = getEvents();
  res.status(200).json(users);
});

router.post("/", (req, res) => {
  const {
    title,
    description,
    location,
    image,
    startTime,
    endTime,
    createdBy,
    categoryIds,
  } = req.body;
  const newEvent = createEvent(
    title,
    description,
    location,
    image,
    startTime,
    endTime,
    createdBy,
    categoryIds
  );
  res.status(201).json(newEvent);
});
/*
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
});*/

module.exports = router;
