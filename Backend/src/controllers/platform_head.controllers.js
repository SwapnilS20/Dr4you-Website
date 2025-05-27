import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { fileURLToPath } from "url";

import path from "path";
import fs from "fs";
import db from "../db/index.js";

const createPlatformHead = asyncHandler(async (req, res, next) => {
  const { main_heading, description } = req.body;
  
  // Validate all required fields
  if (!main_heading || !description) {
    return next(new ApiError(400, "All fields are required."));
  }

  // Handle uploaded file (platform head image)
  const platformHeadImage = req.file?.filename;
  if (!platformHeadImage) {
    return next(new ApiError(400, "Platform head image is required."));
  }

  // Insert into the database
  const [result] = await db.execute(
    `INSERT INTO platform_steps_heading
         (main_heading, description, image) 
         VALUES (?, ?, ?)`,
    [main_heading, description, platformHeadImage]
  );
  if (result.affectedRows === 0) {
    return next(new ApiError(500, "Failed to create platform head."));
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        id: result.insertId,
        main_heading,
        description,
        platformHeadImage,
      },
      "Promise item created successfully."
    )
  );
});

const updatePlatformHead = asyncHandler(async (req, res, next) => {
  const { main_heading, description ,uploadType} = req.body;
  const { id } = req.params;
  if (!id) {
    return next(new ApiError(400, "ID is required."));
  }
  const [headingResult] = await db.execute(
    `SELECT * FROM platform_steps_heading WHERE id = ?`,
    [id]
  );
  if (headingResult.length === 0) {
    return next(new ApiError(404, "Platform head not found."));
  }
  const existingData = headingResult[0];

  // Handle uploaded file (platform head image)
  let platformHeadImage = existingData.image;
  if (req.file) {
    // If a new file is uploaded, delete the old one
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const oldImagePath = path.join(
      __dirname,
      "../../public",
      "uploads",
      uploadType,
      existingData.image
    );
    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath);
    }
    platformHeadImage = req.file?.filename; // Use the new image filename
  }
  // Update in the database
  const [result] = await db.execute(
    `UPDATE platform_steps_heading 
         SET main_heading = ?, description = ?, image = ? 
         WHERE id = ?`,
    [
      main_heading || existingData.main_heading,
      description || existingData.description,
      platformHeadImage || existingData.image,
      id,
    ]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(404, "Platform head not found."));
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        id,
        main_heading,
        description,
        platformHeadImage,
      },
      "Platform head updated successfully."
    )
  );
});

const viewPlatformHead = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ApiError(400, "ID is required."));
  }

  const [result] = await db.execute(
    `SELECT * FROM platform_steps_heading WHERE id = ?`,
    [id]
  );
  if (result.length === 0) {
    return next(new ApiError(404, "Platform head not found."));
  }
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const platformImage = path.join(__dirname, "../../public", "uploads","PlatformWork", result[0].image);
    if (!fs.existsSync(platformImage)) {
          return next(new ApiError(404, "Platform image file not found."));
    }

  return res.status(200).json(
    new ApiResponse(200, result[0], "Platform head retrieved successfully.")
  );
});

// const deletePlatformHead = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   if (!id) {
//     return next(new ApiError(400, "ID is required."));
//   }

//   const [platform_head] = await db.execute(
//     `SELECT * FROM platform_steps_heading WHERE id = ?`,
//     [id]
//   );
//   if (platform_head.affectedRows === 0) {
//     return next(new ApiError(404, "Platform head not found."));
//   }

//   // Optionally delete the image file
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = path.dirname(__filename);
//   const imagePath = path.join(__dirname, "../../public", "uploads", "PlatformWork", platform_head[0].image);
//   if (fs.existsSync(imagePath)) {
//     fs.unlinkSync(imagePath);
//   }

//   const [result] = await db.execute("TRUNCATE TABLE platform_steps_heading;");


//   return res.status(200).json(
//     new ApiResponse(200, result, "Platform head deleted successfully.")
//   );
// });

export { createPlatformHead ,updatePlatformHead, viewPlatformHead };
