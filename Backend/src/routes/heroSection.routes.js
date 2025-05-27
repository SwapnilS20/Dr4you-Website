import { Router } from "express";
import { addHeroSection, deleteHeroSection, updateHeroSection, viewHeroSection } from "../controllers/heroSection.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";


const router = Router();

router.route('/add').post(upload.single('doctorImage') ,addHeroSection);
router.route('/update/:id').patch(upload.single('doctorImage'),updateHeroSection);  
router.route('/view/:id').get(viewHeroSection);
router.route('/delete/:id').delete(deleteHeroSection);

export default router;