import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import path from "path";
import fs from "fs";
import db from "../db/index.js";
import { ApiError } from "../utils/ApiError.js";
import { fileURLToPath } from "url";

const updateHeader = asyncHandler(async (req, res, next) => {
  const { page1, page2, page3, page4, page5, page6, btntext, uploadType } = req.body;

  // Validate all fields
  if (!page1 || !page2 || !page3 || !page4 || !page5 || !page6 || !btntext || !uploadType) {
    return next(new ApiError(400, "All fields are required."));
  }
  const { id } = req.params;
  if (!id) return next(new ApiError(400, "ID is required for update."));

  // Fetch existing record to get old image filename (if any)
  const [existingRows] = await db.execute("SELECT * FROM header WHERE id = ?", [
    id,
  ]);
  if (existingRows.length === 0)
    return next(new ApiError(404, "Hero section not found."));

  const existingData = existingRows[0];

  // Handle file upload
  let logoImage = existingData.logo; // Default to old image
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  if (req.file) {
    // Remove old image from server
    const oldImagePath = path.join(
      __dirname,
      "../../public",
      "uploads",
      uploadType,
      logoImage
    );
    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath);
      // File must be uploaded
      logoImage = req.file?.path;
      // Extract original filename
      logoImage = path.basename(logoImage); // e.g., 1234567890-logo.png
    } else {
      return next(new ApiError(404, "Old logo file not found."));
    }
  }

  // Save new filename in DB
  const [result] = await db.execute(
    `UPDATE header 
     SET logo = ?, page1 = ?, page2 = ?, page3 = ?, page4 = ?, page5 = ?, page6 = ?, btntext = ?
     WHERE id = 1`,
    [logoImage, page1, page2, page3, page4, page5, page6, btntext]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(400, "Header not found or no changes made."));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, result, "Header Updated Successfully"));
});

const viewHeader = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new ApiError(400, "ID is required for view."));
  const [header] = await db.execute("SELECT * FROM header WHERE id = ?", [id]);
  if (header.length === 0) {
    return next(new ApiError(404, "Header not found."));
  }
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const logoPath = path.join(
    __dirname,
    "../../public",
    "uploads",
    "Header",
    header[0].logo
  );

  if (!fs.existsSync(logoPath)) {
    return next(new ApiError(404, "Logo file not found."));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, header[0], "Header fetched successfully"));
});

export { updateHeader, viewHeader };
