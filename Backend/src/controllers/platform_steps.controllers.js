import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import db from "../db/index.js";

const addPlatformStep = asyncHandler(async (req, res, next) => {
  const { title, description, sequence } = req.body;

  // Validate input fields
  if (!title || !description || !sequence) {
    return next(
      new ApiError(400, "Title, description, and sequence are required.")
    );
  }

  // Validate and find existing heading (assuming static ID = 1 for now)
  const [headingRows] = await db.execute(
    "SELECT id FROM platform_steps_heading WHERE id = 1"
  );

  if (headingRows.length === 0) {
    return next(new ApiError(404, "Platform steps heading not found."));
  }

  const headingId = headingRows[0].id;

  // Insert new platform step
  const [result] = await db.execute(
    `INSERT INTO platform_steps_items 
      (platform_heading_id, title, description, sequence) 
     VALUES (?, ?, ?, ?)`,
    [headingId, title, description, sequence]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(400, "Failed to create platform step."));
  }

  // Success response
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        id: result.insertId,
        platform_heading_id: headingId,
        title,
        description,
        sequence: parseInt(sequence),
      },
      "Platform step created successfully."
    )
  );
});

const updatePlatformStep = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { title, description, sequence } = req.body;
    
  if (!id) {
    return next(new ApiError(400, "Platform step ID is required."));
  }
  const [platformStep] = await db.execute(
    "SELECT * FROM platform_steps_items WHERE id = ?",
    [id]
  );
  const step = platformStep[0];
  if (!step) {
    return next(new ApiError(404, "Platform step not found."));
  }
  // Update platform step
  const [result] = await db.execute(
    `UPDATE platform_steps_items 
     SET title = ?, description = ?, sequence = ? 
     WHERE id = ?`,
    [
      title || step.title,
      description || step.description,
      sequence || step.sequence,
      id,
    ]
  );

  if (result.affectedRows === 0) {
    return next(
      new ApiError(404, "Platform step not found or no changes made.")
    );
  }

  // Success response
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { id: parseInt(id), title, description, sequence: parseInt(sequence) },
        "Platform step updated successfully."
      )
    );
});

const viewPlatformSteps = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (id) {
    // Validate and find specific platform step
    const [rows] = await db.execute(
      "SELECT * FROM platform_steps_items WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      return next(new ApiError(404, "Platform step not found."));
    }

    // Success response for single step
    return res
      .status(200)
      .json(
        new ApiResponse(200, rows[0], "Platform step retrieved successfully.")
      );
  }

  const [rows] = await db.execute(
    "SELECT * FROM platform_steps_items ORDER BY sequence"
  );

  if (rows.length === 0) {
    return next(new ApiError(404, "No platform steps found."));
  }

  // Success response
  return res
    .status(200)
    .json(new ApiResponse(200, rows, "Platform steps retrieved successfully."));
});

const deletePlatformStep = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(new ApiError(400, "Platform step ID is required."));
  }

  // Validate and find existing platform step
  const [existingRows] = await db.execute(
    "SELECT * FROM platform_steps_items WHERE id = ?",
    [id]
  );

  if (existingRows.length === 0) {
    return next(new ApiError(404, "Platform step not found."));
  }

  // Delete platform step
  const [result] = await db.execute(
    "DELETE FROM platform_steps_items WHERE id = ?",
    [id]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(500, "Failed to delete platform step."));
  }

  // Success response
  return res.status(200).json(
    new ApiResponse(200, {}, "Platform step deleted successfully.")
  );
}); 

export { addPlatformStep, updatePlatformStep, viewPlatformSteps ,deletePlatformStep};
