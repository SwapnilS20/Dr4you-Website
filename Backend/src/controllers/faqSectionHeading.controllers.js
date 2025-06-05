import db from "../db/index.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const createFaqSectionHeading = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;
    
  if (!title || !description) {
    return next(new ApiError(400, "Main and Sub heading are required"));
  }

  const [result] = await db.execute(
    `INSERT INTO faq_section_heading (title, description) VALUES (?, ?)`,
    [title, description]
  );
  if (result.affectedRows === 0) {
    return next(new ApiError(500, "Failed to create FAQ section heading"));
  }
  return res
    .status(200)
    .json(new ApiResponse(200, result, "Heading added successfully"));
});

const updateFaqSectionHeading = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;
  const { id } = req.params;
  if (!id) {
    return next(new ApiError(400, "ID is required"));
  }
  const [headingResult] = await db.execute(
    `SELECT * FROM faq_section_heading WHERE id = ?`,
    [id]
  );
  if (headingResult.length === 0) {
    return next(new ApiError(404, "FAQ section heading not found"));
  }
  const existingData = headingResult[0];

  const [result] = await db.execute(
    `UPDATE faq_section_heading SET title = ?, description = ? WHERE id = ?`,
    [title || existingData.title, description || existingData.description, id]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(404, "FAQ section heading not found"));
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, result, "FAQ section Heading updated successfully")
    );
});

const viewFaqSectionHeading = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ApiError(400, "ID is required"));
  }
  const [headingResult] = await db.execute(
    `SELECT * FROM faq_section_heading WHERE id = ?`,
    [id]
  );
  if (headingResult.length === 0) {
    return next(new ApiError(404, "FAQ section heading not found"));
  }
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        headingResult[0],
        "FAQ section heading retrieved successfully"
      )
    );
});

export {
  createFaqSectionHeading,
  updateFaqSectionHeading,
  viewFaqSectionHeading,
};
