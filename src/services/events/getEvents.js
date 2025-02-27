import { PrismaClient } from "@prisma/client";

const getEvents = async (title, location) => {
  const prisma = new PrismaClient();
  const events = await prisma.event.findMany({
    where: {
      title: title ? title : undefined,
      location: location ? location : undefined,
    },
    include: {
      // Include categories
      categories: true,
    },
  });
  return events;
};

export default getEvents;
