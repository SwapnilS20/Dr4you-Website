import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import path from "path";
import db from "../db/index.js";
import { fileURLToPath } from "url";
import fs from "fs";

const createStorySection = asyncHandler(async (req, res, next) => {
    const { main_heading, sub_heading, description, button_text } = req.body;
   
    if (!main_heading || !sub_heading || !description || !button_text) {
        return next(new ApiError(400, "All fields are required"));
    }
    const story_image = req.file?.path;
    if (!story_image) {
        return next(new ApiError(400, "Story image is required"));
    }
    const originalName = path.basename(story_image);
  
    const [result] = await db.execute(
        `INSERT INTO drs4you_story_section 
        (main_heading, sub_heading, description, button_text, story_image)
        VALUES (?, ?, ?, ?, ?)`,
        [main_heading, sub_heading, description, button_text, originalName]
    );

    if (result.affectedRows === 0) {
        return next(new ApiError(500, "Failed to create story section"));
    }
    return res.status(200).json(new ApiResponse(200, result, "Story section created successfully"));
});

const updateStorySection = asyncHandler(async (req, res, next) => {
    const { main_heading, sub_heading, description, button_text, uploadType } = req.body;
    const { id } = req.params;
    if (!id) {
        return next(new ApiError(400, "ID is required for update"));
    }

    const [existingRows] = await db.execute(
        `SELECT * FROM drs4you_story_section WHERE id = ?`,
        [id]
    );

    if (existingRows.length === 0) {
        return next(new ApiError(404, "Story section not found"));
    }

    const existingData = existingRows[0];
    let story_image = existingData.story_image;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    if (req.file) {
        const oldImagePath = path.join(__dirname, "../../public", "uploads", uploadType, existingData.story_image);
        if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
        }
        story_image = path.basename(req.file?.path);
    }

    const [result] = await db.execute(
        `UPDATE drs4you_story_section 
        SET main_heading = ?, sub_heading = ?, description = ?, button_text = ?, story_image = ? 
        WHERE id = ?`,
        [
            main_heading || existingData.main_heading,
            sub_heading || existingData.sub_heading,
            description || existingData.description,
            button_text || existingData.button_text,
            story_image || existingData.story_image,
            id
        ]
    );

    if (result.affectedRows === 0) {
        return next(new ApiError(500, "Failed to update story section"));
    }
    return res.status(200).json(new ApiResponse(200, result, "Story section updated successfully"));
});

const viewStorySection = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return next(new ApiError(400, "ID is required for view"));
    }

    const [StorySection] = await db.execute(
        `SELECT * FROM drs4you_story_section WHERE id = ?`,
        [id]
    );

    if (StorySection.length === 0) {
        return next(new ApiError(404, "No story section found"));
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
            
    const story_image = path.join(__dirname, "../../public", "uploads","Drs4youStory", StorySection[0].story_image);
    if (!fs.existsSync(story_image)) {
        return next(new ApiError(404, "Story image file not found."));
    }
    return res.status(200).json(new ApiResponse(200, StorySection[0], "Story section fetched successfully"));
});

const deleteStorySection = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return next(new ApiError(400, "ID is required for delete"));
    }

    const [existingRows] = await db.execute(
        `SELECT * FROM drs4you_story_section WHERE id = ?`,
        [id]
    );

    if (existingRows.length === 0) {
        return next(new ApiError(404, "Story section not found"));
    }

    const existingData = existingRows[0];
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const oldImagePath = path.join(__dirname, "../../public", "uploads", "Drs4youStory", existingData.story_image);
    if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
    }

    const [result] = await db.execute(
        `TRUNCATE TABLE drs4you_story_section;`
    );

    return res.status(200).json(new ApiResponse(200, result, "Story section deleted successfully"));
});

export { createStorySection, updateStorySection, viewStorySection, deleteStorySection };
