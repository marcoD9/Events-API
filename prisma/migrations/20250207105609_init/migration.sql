/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the `_CategoryToEvent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToEvent" DROP CONSTRAINT "_CategoryToEvent_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToEvent" DROP CONSTRAINT "_CategoryToEvent_B_fkey";

-- DropIndex
DROP INDEX "Event_createdBy_idx";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "createdBy",
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CategoryToEvent";

-- CreateTable
CREATE TABLE "_EventToCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EventToCategory_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_EventToCategory_B_index" ON "_EventToCategory"("B");

-- CreateIndex
CREATE INDEX "Event_userId_idx" ON "Event"("userId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToCategory" ADD CONSTRAINT "_EventToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToCategory" ADD CONSTRAINT "_EventToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
