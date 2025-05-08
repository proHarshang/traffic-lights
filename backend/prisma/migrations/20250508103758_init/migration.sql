-- CreateTable
CREATE TABLE "SignalConfig" (
    "id" TEXT NOT NULL,
    "intersectionType" TEXT NOT NULL,
    "config" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SignalConfig_pkey" PRIMARY KEY ("id")
);
