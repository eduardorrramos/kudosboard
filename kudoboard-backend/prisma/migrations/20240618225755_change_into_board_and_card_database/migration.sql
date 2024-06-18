-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "boardId" INTEGER;

-- CreateTable
CREATE TABLE "Board" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Board_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE SET NULL ON UPDATE CASCADE;
