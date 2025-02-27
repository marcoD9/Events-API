/*
  Warnings:

  - You are about to drop the `_EventToCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_userId_fkey";

-- DropForeignKey
ALTER TABLE "_EventToCategory" DROP CONSTRAINT "_EventToCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToCategory" DROP CONSTRAINT "_EventToCategory_B_fkey";

-- DropTable
DROP TABLE "_EventToCategory";

-- CreateTable
CREATE TABLE "_CategoryToEvent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CategoryToEvent_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CategoryToEvent_B_index" ON "_CategoryToEvent"("B");
