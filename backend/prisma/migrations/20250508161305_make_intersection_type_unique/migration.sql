/*
  Warnings:

  - A unique constraint covering the columns `[intersectionType]` on the table `SignalConfig` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SignalConfig_intersectionType_key" ON "SignalConfig"("intersectionType");
