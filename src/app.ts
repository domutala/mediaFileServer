import db from "./db";
import server from "./server";

(async () => {
  await db();
  server({});
})();
