import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Media } from "../db/entities/Media";
import { errorSender } from "../utils/errorSender";

import * as fs from "fs";
import { BASE_URI } from "../utils/variables";

export default async (req: Request, res: Response) => {
  try {
    let media: Media;

    if (req.body.id === "defaultLogo") {
      media = await getRepository(Media)
        .createQueryBuilder("media")
        .where("media.name = 'defaultLogo'")
        .getOne();
    } else {
      media = await getRepository(Media)
        .createQueryBuilder("media")
        .where("media.id = :mediaId", { mediaId: req.query.mediaId })
        .getOne();
    }

    if (!media) {
      return res.send("");
    }

    // const range = req.headers.range;
    // if (!range) {
    //   res.status(400).send("Requires Range header");
    // }

    const path = `${BASE_URI}MEDIAS/${media.path}`;
    const size = fs.statSync(path).size;

    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = 0; //Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, size - 1);

    // Create headers
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Type": media.type,
    };

    res.writeHead(200, headers);

    const dataStream = fs.createReadStream(path, { start, end });
    dataStream.pipe(res);
  } catch (error) {
    errorSender(error, res);
  }
};
