-- CreateTable
CREATE TABLE "tracker_user" (
    "id" SERIAL NOT NULL,
    "publicId" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "tracker_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "publicId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isComplete" BOOLEAN NOT NULL,
    "assignyId" INTEGER NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tracker_user_publicId_key" ON "tracker_user"("publicId");

-- CreateIndex
CREATE UNIQUE INDEX "tracker_user_email_key" ON "tracker_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "task_publicId_key" ON "task"("publicId");

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_assignyId_fkey" FOREIGN KEY ("assignyId") REFERENCES "tracker_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
