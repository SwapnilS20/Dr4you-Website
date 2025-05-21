import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import { updateHeader, viewHeader } from "../controllers/header.controllers.js";


const router = Router();

router.route('/update/:id').patch(upload.single('logo'),updateHeader)
router.route('/view').get(viewHeader)

export default router;