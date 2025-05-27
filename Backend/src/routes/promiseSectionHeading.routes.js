import { Router } from 'express';
import { createPromiseSectionHeading, updatePromiseSectionHeading, viewPromiseSectionHeading } from '../controllers/promise_section_head.controllers.js';
const router = Router();

router.route('/add').post(createPromiseSectionHeading);
router.route('/update/:id').patch(updatePromiseSectionHeading);
router.route('/view/:id').get(viewPromiseSectionHeading);

export default router;