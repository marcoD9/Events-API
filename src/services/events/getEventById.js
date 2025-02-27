import { PrismaClient } from "@prisma/client";

const getEventById = async (id) => {
  const prisma = new PrismaClient();
  const event = await prisma.event.findUnique({
    where: { id },
    include: {
      // Include categories
      categories: true,
    },
  });

  return event;
};

export default getEventById;
