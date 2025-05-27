import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import path from "path";
import db from "../db/index.js";
import { fileURLToPath } from "url";
import fs from "fs";

const createWelcomeBannerSection = asyncHandler(async (req, res,next) => {
    // Validate request body
    const { heading,description,placeholder_text,btn_text } = req.body;
    if (!heading || !description || !placeholder_text || !btn_text) {
        return next( new ApiError(400, "All fields are required"));
    }
    const welcome_image = req.file?.path;
    if (!welcome_image) {
        return next(new ApiError(400, "Welcome image is required"));
    }
    const originalName = path.basename(welcome_image);

    // Insert into the database 
    const [result] = await db.execute(
        `INSERT INTO welcome_banner_section 
        (heading, description, placeholder_text, btn_text, welcome_image)
        VALUES (?, ?, ?, ?, ?)`,
        [
            heading,
            description,
            placeholder_text,
            btn_text,
            originalName
        ]
    )
    console.log(result);
    
    if(result.affectedRows === 0) {
        return next(new ApiError(500, "Failed to create welcome banner section"));
    }
    return res.
        status(200).
        json(
            new ApiResponse(200,result, "Welcome Banner Section Created Successfully")
        )
});

const updateWelcomeBannerSection = asyncHandler(async (req, res,next) => {
    const { heading,description,placeholder_text,btn_text,uploadType } = req.body;
    const { id } = req.params;
    if(!id) {
        return next(new ApiError(400, "ID is required for update"));
    }
    const [existingRows] = await db.execute(
        `SELECT * FROM welcome_banner_section WHERE id = ?`,
        [id]
    )
    
    
  if (existingRows.length === 0) return next(new ApiError(404, "Welcome section not found."));

    const existingData = existingRows[0];
    let welcome_image = existingData.welcome_image;
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    if(req.file){
        const oldImagePath = path.join(__dirname, "../../public", "uploads",uploadType, existingData.welcome_image);
        if(fs.existsSync(oldImagePath)){
            fs.unlinkSync(oldImagePath);
            welcome_image = req.file?.path;
            welcome_image = path.basename(welcome_image);
        }
        else{
            return next(new ApiError(404, "Image not found"));
        }
    }

    const [result] = await db.execute(
        `UPDATE welcome_banner_section 
        SET heading = ?, description = ?, placeholder_text = ?, btn_text = ?, welcome_image = ?
        WHERE id = ?`,
        [
            heading || existingData.heading,
            description || existingData.description,
            placeholder_text || existingData.placeholder_text,
            btn_text || existingData.btn_text,
            welcome_image || existingData.welcome_image,
            id
        ]
    )
    if(result.affectedRows === 0) {
        return next(new ApiError(500, "Failed to update welcome banner section"));
    }
    return res.
        status(200).
        json(
            new ApiResponse(200,result, "Welcome Banner Section Updated Successfully")
        )
});

const viewWelcomeBannerSection = asyncHandler(async (req, res,next) => {
    const { id } = req.params;
    if(!id) {
        return next(new ApiError(400, "ID is required for view"));
    }
    const [welcome_section] = await db.execute(
        `SELECT * FROM welcome_banner_section WHERE id = ?`,
        [id]
    )
    if(welcome_section.length === 0) {
        return next(new ApiError(404, "No welcome banner section found"));
    }
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
        
    const welcome_image = path.join(__dirname, "../../public", "uploads","WelcomeBanner", welcome_section[0].welcome_image);
    if (!fs.existsSync(welcome_image)) {
        return next(new ApiError(404, "Welcome image file not found."));
    }
    return res.
        status(200).
        json(
            new ApiResponse(200,welcome_section[0], "Welcome Banner Section Fetched Successfully")
        )
});

const deleteWelcomeBannerSection = asyncHandler(async (req, res,next) => {
    const { id } = req.params;
    if(!id) {
        return next(new ApiError(400, "ID is required for delete"));
    }
    const [existingRows] = await db.execute(
        `SELECT * FROM welcome_banner_section WHERE id = ?`,
        [id]
    )
    
  if (existingRows.length === 0) return next(new ApiError(404, "Welcome section not found."));

    const existingData = existingRows[0];
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    const oldImagePath = path.join(__dirname, "../../public", "uploads", "WelcomeBanner", existingData.welcome_image);
    if(fs.existsSync(oldImagePath)){
        fs.unlinkSync(oldImagePath);
    }
    
    const [result] = await db.execute(
        `TRUNCATE TABLE welcome_banner_section;`
    )
    return res.
        status(200).
        json(
            new ApiResponse(200,result, "Welcome Banner Section Deleted Successfully")
        )
});

export { createWelcomeBannerSection , updateWelcomeBannerSection , viewWelcomeBannerSection , deleteWelcomeBannerSection };