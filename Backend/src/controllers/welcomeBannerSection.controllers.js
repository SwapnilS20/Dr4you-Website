import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

const createWelcomeBannerSection = asyncHandler(async (req, res) => {
    // Validate request body
    const { heading,description,placeholder_text,btn_text } = req.body;
    if (!heading || !description || !placeholder_text || !btn_text) {
        throw new ApiError(400, "All fields are required");
    }
    
});

export { createWelcomeBannerSection };