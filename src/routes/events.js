import { Router } from "express";
import getEvents from "../services/events/getEvents.js";
import createEvent from "../services/events/createEvent.js";
import getEventById from "../services/events/getEventById.js";
import deleteEventById from "../services/events/deleteEventById.js";
import updateEventById from "../services/events/updateEventById.js";
import auth from "../middleware/auth.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import validateFields from "../middleware/validateMiddleware.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { title, location } = req.query;
    const events = await getEvents(title, location);
    res.json(events);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  auth,
  validateFields([
    "title",
    "description",
    "location",
    "image",
    "startTime",
    "endTime",
    "createdBy",
    "categoryIds",
  ]),
  async (req, res, next) => {
    try {
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
      const newEvent = await createEvent(
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
    } catch (error) {
      next(error);
    }
  }
);

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await getEventById(id);

    if (!event) {
      res.status(404).json({ message: `Event with id ${id} not found` });
    } else {
      res.status(200).json(event);
    }
  } catch (error) {
    next(error);
  }
  notFoundErrorHandler;
});

router.delete("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await deleteEventById(id);

    if (event) {
      res.status(200).send({
        message: `Event with id ${id} successfully deleted`,
        event,
      });
    } else {
      res.status(404).json({
        message: `Event with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
  notFoundErrorHandler;
});

router.put("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      location,
      image,
      startTime,
      endTime,
      createdBy,
      categoryIds,
    } = req.body;
    const event = await updateEventById(id, {
      name,
      description,
      location,
      image,
      startTime,
      endTime,
      createdBy,
      categoryIds,
    });

    if (event) {
      res.status(200).send({
        message: `Event with id ${id} successfully updated`,
        event,
      });
    } else {
      res.status(404).json({
        message: `Event with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
  notFoundErrorHandler;
});

router.patch("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const event = await updateEventById(id, updateData);
    if (event) {
      res.status(200).send({
        message: `Event with id ${id} successfully updated`,
        event,
      });
    } else {
      res.status(404).json({
        message: `Event with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
  notFoundErrorHandler;
});

export default router;
