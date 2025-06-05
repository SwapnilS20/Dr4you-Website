import { Router } from 'express';
import { createFaqSectionHeading, updateFaqSectionHeading, viewFaqSectionHeading } from '../controllers/faqSectionHeading.controllers.js';

const router = Router();

router.route('/add').post(createFaqSectionHeading);
router.route('/update/:id').patch(updateFaqSectionHeading);
router.route('/view/:id').get(viewFaqSectionHeading);


export default router;