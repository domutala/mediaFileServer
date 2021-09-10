import * as express from "express";
import * as controllers from "../controllers";


const router = express.Router();
router.get("/getStream", controllers.getStream);
router.post("/sendNotification", controllers.sendNotification);

export default router;
