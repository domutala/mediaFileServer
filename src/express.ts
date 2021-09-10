import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

import routes from "./routes";

export default () => {
  const app = express();

  // config
  app.use(bodyParser.json({ limit: 52428800 }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  // routes
  app.use(routes);

  return app;
};
