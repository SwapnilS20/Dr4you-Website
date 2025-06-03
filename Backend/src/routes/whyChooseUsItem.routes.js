import { Router } from 'express';
import { addWhyChooseUsItem, deleteWhyChooseUsItem, updateWhyChooseUsItem, viewWhyChooseUsItems } from '../controllers/whyChooseUsItems.controllers.js';
import { upload } from '../middlewares/multer.middlewares.js';

const router = Router();

router.route('/add').post(upload.single('icon_image'), addWhyChooseUsItem);
router.route('/update/:id').patch(upload.single('icon_image'), updateWhyChooseUsItem);
router.route('/view/:id').get(viewWhyChooseUsItems);
router.route('/view').get(viewWhyChooseUsItems);
router.route('/delete/:id').delete(deleteWhyChooseUsItem);

export default router;