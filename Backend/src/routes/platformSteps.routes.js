import { Router } from "express";
import { addPlatformStep, deletePlatformStep, updatePlatformStep, viewPlatformSteps } from "../controllers/platform_steps.controllers.js";

const router = Router();

router.route('/add').post(addPlatformStep);
router.route('/update/:id').patch(updatePlatformStep);
router.route('/view/:id').get(viewPlatformSteps); // Assuming this is for viewing all steps
router.route('/view').get(viewPlatformSteps); // Assuming this is for viewing all steps
router.route('/delete/:id').delete(deletePlatformStep); // Assuming this is for deleting a step

export default router;