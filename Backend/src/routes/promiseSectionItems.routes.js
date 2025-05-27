import { Router } from "express";
import { createPromiseSection, deletePromiseSection, updatePromiseSection, viewPromiseSection } from "../controllers/promise_section_items.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router.route('/add').post(upload.single('icon_image'),createPromiseSection);
router.route('/update/:id').patch(upload.single('icon_image'),updatePromiseSection);
router.route('/view/:id').get(viewPromiseSection);
router.route('/view').get(viewPromiseSection);
router.route('/delete/:id').delete(deletePromiseSection);

export default router;