/*
  Warnings:

  - You are about to drop the column `title` on the `Card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "title",
ALTER COLUMN "author" DROP NOT NULL;
