import { Response } from "express";

export function errorSender(
  error: any,
  res: Response<any, Record<string, any>>
) {
  // console.log(error);

  if (error.text) {
    res.status(400).json({ error: true, message: error.text });
  } else {
    res.status(400).json({
      error: true,
      message: "unknowError.",
    });
  }
}
