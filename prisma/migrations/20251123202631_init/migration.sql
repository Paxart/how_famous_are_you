-- CreateTable
CREATE TABLE "Score" (
    "id" TEXT NOT NULL,
    "triviaId" TEXT NOT NULL,
    "fid" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "username" TEXT,
    "displayName" TEXT,
    "pfpUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Score_triviaId_idx" ON "Score"("triviaId");

-- CreateIndex
CREATE UNIQUE INDEX "Score_triviaId_fid_key" ON "Score"("triviaId", "fid");
