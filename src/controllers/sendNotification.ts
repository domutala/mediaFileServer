import { Request, Response } from "express";
import { socket } from "../io";
import { errorSender } from "../utils/errorSender";

export default async (req: Request, res: Response) => {
  try {
    socket.to(req.body.param0).emit('notification', req.body.param1);

    res.json();
  } catch (error) {
    console.log(error);

    errorSender(error, res);
  }
};
