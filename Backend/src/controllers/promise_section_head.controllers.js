import db from "../db/index.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const createPromiseSectionHeading = asyncHandler(async (req, res, next) => {
  const { main_heading, sub_heading } = req.body;
  
  if (!main_heading || !sub_heading) {
    return next(new ApiError(400, "Main and Sub heading are required"));
  }

  const [result] = await db.execute(
    `INSERT INTO promise_section_heading (main_heading, sub_heading) VALUES (?, ?)`,
    [main_heading, sub_heading]
  );
  if (result.affectedRows === 0) {
    return next(new ApiError(500, "Failed to create promise section heading"));
  }
  return res
    .status(200)
    .json(new ApiResponse(200, result, "Heading added successfully"));
});

const updatePromiseSectionHeading = asyncHandler(async (req, res, next) => {
  const { main_heading, sub_heading } = req.body;
  const { id } = req.params;
  if (!id) {
    return next(new ApiError(400, "ID is required"));
  }
  const [headingResult] = await db.execute(
    `SELECT * FROM promise_section_heading WHERE id = ?`,
    [id]   
  );
  if (headingResult.length === 0) {
    return next(new ApiError(404, "Promise section heading not found"));
  }
  const existingData = headingResult[0];

  const [result] = await db.execute(
    `UPDATE promise_section_heading SET main_heading = ?, sub_heading = ? WHERE id = ?`,
    [
      main_heading || existingData.main_heading,
      sub_heading || existingData.sub_heading,
      id,
    ]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(404, "Promise section heading not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, result, "Promise section Heading updated successfully"));
});

const viewPromiseSectionHeading = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ApiError(400, "ID is required"));
  }
  const [result] = await db.execute(`SELECT * FROM promise_section_heading WHERE id = ?`, [id]);
  if (result.length === 0) {
    return next(new ApiError(404, "Promise section heading not found"));
  }
  return res
    .status(200)
    .json(new ApiResponse(200, result[0], "Promise section heading fetched successfully"));
});

export { createPromiseSectionHeading, updatePromiseSectionHeading ,viewPromiseSectionHeading};