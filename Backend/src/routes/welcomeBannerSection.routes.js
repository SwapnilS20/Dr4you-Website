import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import { createWelcomeBannerSection , deleteWelcomeBannerSection, updateWelcomeBannerSection, viewWelcomeBannerSection} from "../controllers/welcomeBannerSection.controllers.js";

const router = Router();

router.route('/add').post(upload.single('welcome_image'),createWelcomeBannerSection);
router.route('/update/:id').patch(upload.single('welcome_image'),updateWelcomeBannerSection);
router.route('/view/:id').get(viewWelcomeBannerSection);
router.route('/delete/:id').delete(deleteWelcomeBannerSection);

export default router;