-- CreateTable
CREATE TABLE "LetterHead" (
    "id" TEXT NOT NULL,
    "logo" TEXT,
    "company_name" TEXT,
    "phone_number" TEXT,
    "email" TEXT,
    "address" TEXT,

    CONSTRAINT "LetterHead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Statement" (
    "id" TEXT NOT NULL,
    "referance_number" TEXT,
    "attachment" TEXT,
    "subject" TEXT,

    CONSTRAINT "Statement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecipientAddress" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "addres" TEXT,

    CONSTRAINT "RecipientAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "opening" TEXT,
    "content" TEXT,
    "closing" TEXT,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Signature" (
    "id" TEXT NOT NULL,
    "city_name" TEXT,
    "logo" TEXT,
    "date" TIMESTAMP(3),
    "name" TEXT,

    CONSTRAINT "Signature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LetterTemplate1" (
    "id" TEXT NOT NULL,
    "letterHeadId" TEXT,
    "statementId" TEXT,
    "recipientAddressId" TEXT,
    "contentId" TEXT,
    "signatureId" TEXT,

    CONSTRAINT "LetterTemplate1_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LetterHead_id_key" ON "LetterHead"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Statement_id_key" ON "Statement"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RecipientAddress_id_key" ON "RecipientAddress"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Content_id_key" ON "Content"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Signature_id_key" ON "Signature"("id");

-- CreateIndex
CREATE UNIQUE INDEX "LetterTemplate1_id_key" ON "LetterTemplate1"("id");

-- AddForeignKey
ALTER TABLE "LetterTemplate1" ADD CONSTRAINT "LetterTemplate1_letterHeadId_fkey" FOREIGN KEY ("letterHeadId") REFERENCES "LetterHead"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LetterTemplate1" ADD CONSTRAINT "LetterTemplate1_statementId_fkey" FOREIGN KEY ("statementId") REFERENCES "Statement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LetterTemplate1" ADD CONSTRAINT "LetterTemplate1_recipientAddressId_fkey" FOREIGN KEY ("recipientAddressId") REFERENCES "RecipientAddress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LetterTemplate1" ADD CONSTRAINT "LetterTemplate1_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LetterTemplate1" ADD CONSTRAINT "LetterTemplate1_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "Signature"("id") ON DELETE SET NULL ON UPDATE CASCADE;
