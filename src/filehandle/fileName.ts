import { Request } from "express";

export const fileName = async (req: Request) => {
  // const protocol=req.protocol
  // const host=req.get('host')
  const fileDir = "/uploads";
  const fileName = req.file?.filename;

  const generatedFilePath = `${fileDir}/${fileName}`;
  return generatedFilePath;
};
