import { Router } from 'express';
import { createPlatformHead, updatePlatformHead, viewPlatformHead } from '../controllers/platform_head.controllers.js';
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router.route('/add').post(upload.single('image') , createPlatformHead);
router.route('/update/:id').patch(upload.single('image') , updatePlatformHead);
router.route('/view/:id').get(viewPlatformHead);
// router.route('/delete/:id').delete(deletePlatformHead); // Assuming you have a delete function
export default router;