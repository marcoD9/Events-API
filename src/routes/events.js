const express = require("express");
const getEvents = require("../services/events/getEvents.js");
const createEvent = require("../services/events/createEvent.js");
const getEventById = require("../services/events/getEventById.js");
const updateEvent = require("../services/events/updateEvent.js");
const deleteEvent = require("../services/events/deleteEvent.js");
const auth = require("../middleware/auth.js");
const router = express.Router();

router.get("/", (req, res) => {
  const { title, location } = req.query;
  const events = getEvents(title, location);
  res.status(200).json(events);
});

router.post("/", auth, (req, res) => {
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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const event = getEventById(id);
  res.status(200).json(event);
});

router.put("/:id", auth, (req, res) => {
  const { id } = req.params;
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
  const updatedEvent = updateEvent(
    id,
    title,
    description,
    location,
    image,
    startTime,
    endTime,
    createdBy,
    categoryIds
  );
  res.status(200).json(updatedEvent);
});

router.delete("/:id", auth, (req, res) => {
  const { id } = req.params;
  const deletedEventId = deleteEvent(id);

  res.status(200).json({
    message: `Event with id ${deletedEventId} was deleted!`,
  });
});

module.exports = router;
