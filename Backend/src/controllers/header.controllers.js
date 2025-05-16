import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import path from "path";
import fs from "fs";
import db from "../db/index.js";
import { ApiError } from "../utils/ApiError.js";
import { fileURLToPath } from "url";

const updateHeader = asyncHandler(async (req, res, next) => {
  const { page1, page2, page3, page4, page5, page6, btntext } = req.body;

  // Validate all fields
  if (!page1 || !page2 || !page3 || !page4 || !page5 || !page6 || !btntext) {
    return next(new ApiError(400, "All fields are required."));
  }

  // File must be uploaded
  const logoLocalPath = req.file?.path;
  if (!logoLocalPath) {
    return next(new ApiError(401, "Logo is missing. Please upload a logo image."));
  }

  // Extract original filename
  const originalName = path.basename(logoLocalPath); // e.g., 1234567890-logo.png
  const ext = path.extname(originalName);            // .png
  const uploadsDir = path.dirname(logoLocalPath);

  const newFileName = `1-${originalName}`; // since id is fixed as 1
  const newPath = path.join(uploadsDir, newFileName);

  // Rename the file to include ID
  fs.renameSync(logoLocalPath, newPath);

  // Save new filename in DB
  const [result] = await db.execute(
    `UPDATE header 
     SET logo = ?, page1 = ?, page2 = ?, page3 = ?, page4 = ?, page5 = ?, page6 = ?, btntext = ?
     WHERE id = 1`,
    [newFileName, page1, page2, page3, page4, page5, page6, btntext]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(400, "Header not found or no changes made."));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, result, "Header Updated Successfully"));
});

const viewHeader = asyncHandler(async (req, res, next) => {
  const [header] = await db.execute("SELECT * FROM header WHERE id = 1");
  if (header.length === 0) {
    return next(new ApiError(404, "Header not found."));
  }
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  const logoPath = path.join(__dirname, "../../public", "uploads","Header", header[0].logo);
  console.log(logoPath);
  
  if (!fs.existsSync(logoPath)) {
    return next(new ApiError(404, "Logo file not found."));
  }

  return res.status(200).json(new ApiResponse(200, header[0], "Header fetched successfully"));
} );

export { updateHeader , viewHeader };
