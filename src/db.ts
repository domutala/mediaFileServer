import { createConnection } from "typeorm";

export default async () => {
  try {
    return await createConnection();
  } catch (error) {
    console.log(error.message);
  }
};
