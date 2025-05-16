import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import { updateHeader } from "../controllers/HeaderControllers.js";


const router = Router();

router.route('/update').patch(upload.single('logo'),updateHeader)

export default router;