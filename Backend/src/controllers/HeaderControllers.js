
import {asyncHandler} from"../utils/asyncHandler.js";
import {ApiResponse} from "../utils/ApiResponse.js";

import db from "../db/index.js";
import {ApiError} from "../utils/ApiError.js";

const updateHeader = asyncHandler(async (req, res, next) => {
  const { page1, page2, page3, page4, page5, page6, btntext } = req.body;

  // Check if all required fields are present
  if (!page1 || !page2 || !page3 || !page4 || !page5 || !page6 || !btntext) {
    return next(new ApiError(400, "All fields are required."));
  }
  const logoLocalPath = req.file?.path;
  if (!logoLocalPath) {
    return next(
      new ApiError(401, "Logo is missing. Please upload a logo image.")
    );
  }
  const logo = path.basename(logoLocalPath); // only filename, e.g., "logo.png"

  // Update database
  const [result] = await db.execute(
    `UPDATE header 
     SET logo = ?, page1 = ?, page2 = ?, page3 = ?, page4 = ?, page5 = ?, page6 = ?, btntext = ?
     WHERE id = 1`,
    [logo, page1, page2, page3, page4, page5, page6, btntext]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(400, "Header not found or no changes made."));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, result, "Header Updated Successfully"));
});

export { updateHeader };
