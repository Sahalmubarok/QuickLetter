import { ILetterTemplate } from "../../types/app";
import * as letterService from "../services/letterService";

export const getAll = async (req: any, res: any) => {
  try {
    const result = await letterService.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);

    res.status(400).json(error);
  }
};

export const getById = async (req: any, res: any) => {
  try {
    const result = await letterService.getById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const create = async (req: any, res: any) => {
  try {
    const payload: ILetterTemplate = {
      letterHead: {
        address_letterHead: req.body.letterHead,
        company_name: req.body.company_name,
        email: req.body.email,
        logo: req.body.logo,
        phone_number: req.body.phone_number,
      },
      content: {
        closing: req.body.closing,
        content: req.body.content,
        opening: req.body.opening,
      },
      signature: {
        city_name: req.body.city_name,
        date: req.body.date,
        name_signature: req.body.name_signature,
      },
      statement: {
        attachment: req.body.attachment,
        referance_number: req.body.referance_number,
        subject: req.body.subject,
      },
      recipentAddress: {
        address_recipent: req.body.address_recipent,
        name_recipent: req.body.name_recipent,
      },
    };
    console.log(payload);

    const result = await letterService.create(payload);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
