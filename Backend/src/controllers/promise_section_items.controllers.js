import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import db from "../db/index.js";

const createPromiseSection = asyncHandler(async (req, res, next) => {
  const { title, description, sequence } = req.body;

  // Validate input fields
  if (!title || !description || !sequence) {
    return next(new ApiError(400, "Title, description, and sequence are required."));
  }

  // Validate and find existing heading (assuming static ID = 1 for now)
  const [headingRows] = await db.execute(
    "SELECT id FROM promise_section_heading WHERE id = 1"
  );

  if (headingRows.length === 0) {
    return next(new ApiError(404, "Promise section heading not found."));
  }

  const headingId = headingRows[0].id;

  const iconImage = req.file?.filename; // Sanitize just the filename
  // Validate file upload
  if (!iconImage) {
    return next(new ApiError(400, "Promise icon image is required."));
  }
  
  // Insert new promise item
  const [result] = await db.execute(
    `INSERT INTO promise_section_items 
      (promise_heading_id, title, description, icon_image, sequence) 
     VALUES (?, ?, ?, ?, ?)`,
    [headingId, title, description, iconImage, sequence]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(500, "Failed to create promise item."));
  }

  // Success response
  return res.status(200).json(
    new ApiResponse(200, {
      id: result.insertId,
      promise_heading_id: headingId,
      title,
      description,
      icon_image: iconImage,
      sequence: parseInt(sequence)
    }, "Promise item created successfully.")
  );
});

const updatePromiseSection = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { title, description, sequence ,uploadType} = req.body;

  // Validate and find existing promise item
  const [existingRows] = await db.execute(
    "SELECT * FROM promise_section_items WHERE id = ?",
    [id]
  );

  if (existingRows.length === 0) {
    return next(new ApiError(404, "Promise item not found."));
  }

  const existingData = existingRows[0];
  let iconImage = existingData.icon_image;

  // Handle file upload
  if (req.file) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const oldImagePath = path.join(__dirname, "../../public", "uploads", uploadType, existingData.icon_image);

    // Delete old image if it exists
    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath);
    }
    
    iconImage = req.file.filename; // Sanitize just the filename
  }

  // Update promise item
  const [result] = await db.execute(
    `UPDATE promise_section_items 
     SET title = ?, description = ?, icon_image = ?, sequence = ? 
     WHERE id = ?`,
    [title || existingData.title, description || existingData.description, iconImage || existingData.icon_image, sequence || existingData.sequence, id]
  );
  
  if (result.affectedRows === 0) {
    return next(new ApiError(500, "Failed to update promise item."));
  }

  // Success response
  return res.status(200).json(
    new ApiResponse(200, {
      id,
      title,
      description,
      icon_image: iconImage,
      sequence: parseInt(sequence)
    }, "Promise item updated successfully.")
  );
});

const viewPromiseSection = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  // If ID is provided, fetch specific promise item
  if (id) {
    const [rows] = await db.execute(
      "SELECT * FROM promise_section_items WHERE id = ?",
      [id]
    );
    

    if (rows.length === 0) {
      return next(new ApiError(404, "Promise item not found."));
    }
    

    return res.status(200).json(
      new ApiResponse(200, rows[0], "Promise item retrieved successfully.")
    );
  }

  const [rows] = await db.execute(
    "SELECT * FROM promise_section_items ORDER BY sequence"
  );

  if (rows.length === 0) {
    return next(new ApiError(404, "No promise items found."));
  }

  return res.status(200).json(
    new ApiResponse(200, rows, "Promise items retrieved successfully.")
  );
}); 

const deletePromiseSection = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  // Validate and find existing promise item
  const [existingRows] = await db.execute(
    "SELECT * FROM promise_section_items WHERE id = ?",
    [id]
  );

  if (existingRows.length === 0) {
    return next(new ApiError(404, "Promise item not found."));
  }

  const existingData = existingRows[0];
  const iconImage = existingData.icon_image;

  // Delete the promise item
  const [result] = await db.execute(
    "DELETE FROM promise_section_items WHERE id = ?",
    [id]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(500, "Failed to delete promise item."));
  }

  // Delete the image file if it exists
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const imagePath = path.join(__dirname, "../../public", "uploads", "PromiseSection", iconImage);

  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }

  return res.status(200).json(
    new ApiResponse(200, null, "Promise item deleted successfully.")
  );
});

export { 
  createPromiseSection,
  updatePromiseSection,
  viewPromiseSection,
  deletePromiseSection
}