import API from "..";
import { ILetter } from "../app";

export const LetterApi = async (body: ILetter) => {
    return await API.post("letter", body)
}