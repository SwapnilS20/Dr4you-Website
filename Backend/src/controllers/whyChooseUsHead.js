import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { fileURLToPath } from "url";

import path from "path";
import fs from "fs";
import db from "../db/index.js";

const addWhyChooseUsHead = asyncHandler(async (req, res, next) => {
  const {
    label,
    heading_main,
    heading_highlight,
    on_image_text,
  } = req.body;

  // Validate all required fields
  if (
    !label ||
    !heading_main ||
    !heading_highlight ||
    !on_image_text
  ) {
    return next(new ApiError(400, "All fields are required."));
  }

  // Handle uploaded file (why choose us head image)
  const whyChooseUsDoctorImage = req.file?.filename;
  if (!whyChooseUsDoctorImage) {
    return next(new ApiError(400, "Why choose us head image is required."));
  }

  // Insert into the database
  const [result] = await db.execute(
    `INSERT INTO why_choose_us_heading
        (label, heading_main, heading_highlight, doctor_image, on_image_text) 
        VALUES (?, ?, ?, ?, ?)`,
    [
      label,
      heading_main,
      heading_highlight,
      whyChooseUsDoctorImage,
      on_image_text,
    ]
  );
  if (result.affectedRows === 0) {
    return next(new ApiError(500, "Failed to create why choose us head."));
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        id: result.insertId,
        label,
        heading_main,
        heading_highlight,
        on_image_text,
        whyChooseUsDoctorImage,
      },
      "Why choose us head created successfully."
    )
  );
});

const updateWhyChooseUsHead = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ApiError(400, "ID is required."));
  }
  const {
    label,
    heading_main,
    heading_highlight,
    on_image_text,
    uploadType,
  } = req.body;

  const [whyChooseUsHead] = await db.execute(
    `SELECT * FROM why_choose_us_heading WHERE id = ?`,
    [id]
  );
  if (whyChooseUsHead.length === 0) {
    return next(new ApiError(404, "Why choose us head not found."));
  }
  const existingWhyChooseUsHead = whyChooseUsHead[0];
  let whyChooseUsDoctorImage = existingWhyChooseUsHead.doctor_image;

  // Handle uploaded file (why choose us head image)
  if (req.file) {
    // If a new file is uploade
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const oldImagePath = path.join(
      __dirname,
      "../../public",
      "uploads",
      uploadType,
      whyChooseUsDoctorImage
    );
    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath);
    }
  }
  whyChooseUsDoctorImage = req.file?.filename || whyChooseUsDoctorImage;
  // Update in the database
  const [result] = await db.execute(
    `UPDATE why_choose_us_heading 
        SET label = ?, heading_main = ?, heading_highlight = ?, doctor_image = ? ,on_image_text = ?
        WHERE id = ?`,
    [
      label || existingWhyChooseUsHead.label,
      heading_main || existingWhyChooseUsHead.heading_main,
      heading_highlight || existingWhyChooseUsHead.heading_highlight,
      whyChooseUsDoctorImage || existingWhyChooseUsHead.doctor_image,
      on_image_text || existingWhyChooseUsHead.on_image_text,
      id,
    ]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(500, "Failed to update why choose us head."));
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        id,
        label ,
        heading_main,
        heading_highlight,
        on_image_text,
        whyChooseUsDoctorImage,
      },
      "Why choose us head updated successfully."
    )
  );
});

const viewWhyChooseUsHead = asyncHandler(async (req, res, next) => {
    const {id} = req.params;
    if (!id) {
        return next(new ApiError(400, "ID is required."));
    }
    const [why_choose_us_head] = await db.execute(
        `SELECT * FROM why_choose_us_heading WHERE id = ?`,
        [id]
    );
    if (why_choose_us_head.length === 0) {
        return next(new ApiError(404, "Why choose us head not found."));
    }
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const imagePath = path.join(
        __dirname,
        "../../public",
        "uploads",
        "WhyChooseUs",
        why_choose_us_head[0].doctor_image
    );
    if (!fs.existsSync(imagePath)) {
        return next(new ApiError(404, "Image not found."));
    }   
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                ...why_choose_us_head[0],
                doctor_image: why_choose_us_head[0].doctor_image,
            },
            "Why choose us head retrieved successfully."
        )
    );
});

export { addWhyChooseUsHead, updateWhyChooseUsHead ,viewWhyChooseUsHead};
