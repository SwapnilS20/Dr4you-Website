import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { fileURLToPath } from "url";

import path from "path";
import fs from "fs";
import db from "../db/index.js";

const addWhyChooseUsItem = asyncHandler(async (req, res, next) => {
  const { title, description, sequence } = req.body;

  // Validate input fields
  if (!title || !description || !sequence) {
    return next(
      new ApiError(400, "Title, description, and sequence are required.")
    );
  }

  // Validate and find existing heading (assuming static ID = 1 for now)
  const [headingRows] = await db.execute(
    "SELECT id FROM why_choose_us_heading WHERE id = 1"
  );

  if (headingRows.length === 0) {
    return next(new ApiError(404, "Why choose us heading not found."));
  }

  const headingId = headingRows[0].id;

  const iconImage = req.file?.filename; // Sanitize just the filename
  // Validate file upload
  if (!iconImage) {
    return next(new ApiError(400, "Why choose us icon image is required."));
  }

  // Insert new why choose us item
  const [result] = await db.execute(
    `INSERT INTO why_choose_us_items 
        (heading_id, title, description, icon_image, sequence) 
         VALUES (?, ?, ?, ?, ?)`,
    [headingId, title, description, iconImage, sequence]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(500, "Failed to create why choose us item."));
  }

  // Success response
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        id: result.insertId,
        why_choose_us_heading_id: headingId,
        title,
        description,
        icon_image: iconImage,
        sequence: parseInt(sequence),
      },
      "Why choose us item created successfully."
    )
  );
});

const updateWhyChooseUsItem = asyncHandler(async (req, res, next) => {
  const { title, description, sequence ,uploadType} = req.body;
  const { id } = req.params;

  if (!id) {
    return next(new ApiError(400, "ID is required."));
  }

  // Check if item exists
  const [itemRows] = await db.execute(
    "SELECT * FROM why_choose_us_items WHERE id = ?",
    [id]
  );

  if (itemRows.length === 0) {
    return next(new ApiError(404, "Why choose us item not found."));
  }

  let iconImage = itemRows[0].icon_image; // Sanitize just the filename

  if (req.file) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const oldImagePath = path.join(
      __dirname,
      "../../public",
      "uploads",
      uploadType,
      itemRows[0].icon_image
    );
 
    // Delete old image if it exists
    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath);
    }

    iconImage = req.file.filename; // Sanitize just the filename
  }
  // Update item in the database
  const [result] = await db.execute(
    `UPDATE why_choose_us_items 
         SET title = ?, description = ?, icon_image = ?, sequence = ? 
         WHERE id = ?`,
    [
      title || itemRows[0].title,
      description || itemRows[0].description,
      iconImage || itemRows[0].icon_image,
      sequence || itemRows[0].sequence,
      id,
    ]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(500, "Failed to update why choose us item."));
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        id,
        title,
        description,
        icon_image: iconImage || itemRows[0].icon_image,
        sequence: parseInt(sequence),
      },
      "Why choose us item updated successfully."
    )
  );
});

const deleteWhyChooseUsItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(new ApiError(400, "ID is required."));
  }

  // Check if item exists
  const [itemRows] = await db.execute(
    "SELECT * FROM why_choose_us_items WHERE id = ?",
    [id]
  );

  if (itemRows.length === 0) {
    return next(new ApiError(404, "Why choose us item not found."));
  }

  const iconImage = itemRows[0].icon_image; // Sanitize just the filename

  // Delete item from the database
  const [result] = await db.execute(
    "DELETE FROM why_choose_us_items WHERE id = ?",
    [id]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(500, "Failed to delete why choose us item."));
  }

  // Delete image file if it exists
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const oldImagePath = path.join(
    __dirname,
    "../../public",
    "uploads",
    "WhyChooseUs",
    iconImage
  );

  if (fs.existsSync(oldImagePath)) {
    fs.unlinkSync(oldImagePath);
  }

  return res.status(200).json(
    new ApiResponse(200, {}, "Why choose us item deleted successfully.")
  );
});

const viewWhyChooseUsItems = asyncHandler(async (req, res, next) => {
     const { id } = req.params;
  // If ID is provided, fetch specific promise item
  if (id) {
    const [rows] = await db.execute(
      "SELECT * FROM why_choose_us_items WHERE id = ? ORDER BY sequence",
      [id]
    );
    
    if (rows.length === 0) {
      return next(new ApiError(404, "WhyChooseUs item not found."));
    }
    
    return res.status(200).json(
      new ApiResponse(200, rows[0], "WhyChooseUs item retrieved successfully.")
    );
  }
  const [items] = await db.execute(
    `SELECT * FROM why_choose_us_items ORDER BY sequence ASC`
  );

  if (items.length === 0) {
    return next(new ApiError(404, "No why choose us items found."));
  }

  return res.status(200).json(
    new ApiResponse(200, items, "Why choose us items retrieved successfully.")
  );
});

export {
  addWhyChooseUsItem,
  updateWhyChooseUsItem,
  deleteWhyChooseUsItem,
  viewWhyChooseUsItems,
};