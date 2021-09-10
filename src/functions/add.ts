import * as fs from 'fs';
import { Media } from '../db/entities/Media';
import tokenGenerator from '../utils/tokenGenerator';
import { BASE_URI, REGEX_IMAGE } from '../utils/variables';

export default async (data: string, name?: string,) => {
  if (!REGEX_IMAGE.test(data)) {
    throw { text: "Le média que vous voulez enregistEr n'est pas valide." };
  }

  const media = new Media();
  media.type = data.split(';')[0].split(':')[1];
  media.path = `${tokenGenerator()}.${media.type.split('/')[1]}`;
  media.name = name || media.path;

  await media.save();
  fs.writeFileSync(`${BASE_URI}MEDIAS/${media.path}`, data.split(',')[1], 'base64');

  return media;
};
