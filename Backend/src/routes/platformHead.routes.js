import { Router } from 'express';
import { createPlatformHead, updatePlatformHead } from '../controllers/platform_head.controllers.js';
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router.route('/add').post(upload.single('image') , createPlatformHead);
router.route('/update/:id').patch(upload.single('image') , updatePlatformHead);

export default router;