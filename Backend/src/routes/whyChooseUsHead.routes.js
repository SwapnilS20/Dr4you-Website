import { Router } from 'express';
import { addWhyChooseUsHead, updateWhyChooseUsHead, viewWhyChooseUsHead } from '../controllers/whyChooseUsHead.js';
import { upload } from '../middlewares/multer.middlewares.js';
const router = Router();

router.route('/add').post(upload.single('doctor_image'), addWhyChooseUsHead)
router.route('/update/:id').patch(upload.single('doctor_image'), updateWhyChooseUsHead);
router.route('/view/:id').get(viewWhyChooseUsHead);


export default router;