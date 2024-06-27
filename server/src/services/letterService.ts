import { ILetterTemplate } from "../../types/app";
import prisma from "../db";

export const getAll = async () => {
  return await prisma.letterTemplate1.findMany({
    select: {
      id: true,
      letterHead: true,
      content: true,
      signature: true,
      statement: true,
      recipentAddress: true,
    },
  });
};

export const getById = async (id: string) => {
  return await prisma.letterTemplate1.findUnique({
    where: {
      id,
    },
    include: {
      letterHead: true,
      content: true,
      signature: true,
      statement: true,
      recipentAddress: true,
    }
  });
};

export const create = async (payload: ILetterTemplate) => {
  try {
    const letterHead = await prisma.letterHead.create({
      data: {
        address: payload.letterHead.address_letterHead,
        company_name: payload.letterHead.company_name,
        email: payload.letterHead.email,
        logo: payload.letterHead.logo,
        phone_number: payload.letterHead.phone_number,
      },
    });

    const statement = await prisma.statement.create({
      data: {
        ...payload.statement,
      },
    });

    const content = await prisma.content.create({
      data: {
        ...payload.content,
      },
    });

    const signature = await prisma.signature.create({
      data: {
        city_name: payload.signature.city_name,
        date: payload.signature.date,
        name: payload.signature.name_signature,
      },
    });

    const recipentAddress = await prisma.recipientAddress.create({
      data: {
        addres: payload.recipentAddress.address_recipent,
        name: payload.recipentAddress.name_recipent,
      },
    });

    return await prisma.letterTemplate1.create({
      data: {
        letterHeadId: letterHead.id,
        statementId: statement.id,
        contentId: content.id,
        signatureId: signature.id,
        recipientAddressId: recipentAddress.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
