import { Router } from 'express';
import { createStorySection, deleteStorySection, updateStorySection, viewStorySection } from '../controllers/drs4-youStory.controllers.js';
import { upload } from '../middlewares/multer.middlewares.js';

const router = Router();
router.route('/add').post(upload.single('story_image'),createStorySection);
router.route('/view/:id').get(viewStorySection);
router.route('/update/:id').patch(upload.single('story_image'),updateStorySection);
router.route('/delete/:id').delete(deleteStorySection);

export default router;