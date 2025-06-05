import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import db from "../db/index.js";

const allowedTypes = ["general", "services", "doctors", "blogs"];

const addFaqItem = asyncHandler(async (req, res, next) => {
  const { type, question, answer, is_active, sequence } = req.body;

  // Validation
  if (!is_active || !type || !question || !answer) {
    return next(new ApiError(400, "All fields except sequence are required."));
  }

  if (!allowedTypes.includes(type)) {
    return next(
      new ApiError(
        400,
        `Invalid type. Allowed types are: ${allowedTypes.join(", ")}`
      )
    );
  }

  // Check if heading exists
  const [headingRows] = await db.execute(
    "SELECT id FROM faq_section_heading WHERE id = 1"
  );
  if (headingRows.length === 0) {
    return next(new ApiError(404, "FAQ section heading not found."));
  }
  const heading_id = headingRows[0].id;
  // Insert
  const [result] = await db.execute(
    `INSERT INTO faq_items (heading_id, type, question, answer, is_active, sequence) VALUES (?, ?, ?, ?, ?)`,
    [heading_id, type, question, answer, is_active, sequence || 0]
  );

  if (result.affectedRows === 0) {
    return next(new ApiError(400, "Failed to create FAQ item."));
  }
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        id: result.insertId,
        heading_id,
        type,
        question,
        answer,
        is_active,
        sequence: sequence || 0,
      },
      "FAQ item created successfully."
    )
  );
});

const updateFaqItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { question, answer, type, sequence, is_active } = req.body;

  if (!id) {
    return next(new ApiError(400, "FAQ item ID is required."));
  }
  const [existing] = await db.execute("SELECT * FROM faq_items WHERE id = ?", [
    id,
  ]);
  if (existing.length === 0) {
    return next(new ApiError(404, "FAQ item not found."));
  }
  const faq = existing[0];

  if (type && !allowedTypes.includes(type)) {
    return next(
      new ApiError(
        400,
        `Invalid type. Allowed types are: ${allowedTypes.join(", ")}`
      )
    );
  }

  const [result] = await db.execute(
    `UPDATE faq_items SET type = ?, question = ?, answer = ?, is_active = ?, sequence = ?  WHERE id = ?`,
    [
      type || faq.type,
      question || faq.question,
      answer || faq.answer,
      is_active || faq.is_active,
      sequence ?? faq.sequence,
      id,
    ]
  );
  if (result.affectedRows === 0) {
    return next(new ApiError(404, "FAQ item not found or no changes made."));
  }
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        id: parseInt(id),
        type: type || faq.type,
        question: question || faq.question,
        answer: answer || faq.answer,
        is_active: is_active ?? faq.is_active,
        sequence: sequence ?? faq.sequence,
      },
      "FAQ item updated successfully."
    )
  );
});

const viewFaqItems = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { type } = req.query;
  if (id) {
    const [rows] = await db.execute("SELECT * FROM faq_items WHERE id = ?", [
      id,
    ]);
    if (rows.length === 0)
      return next(new ApiError(404, "FAQ item not found."));
    return res
      .status(200)
      .json(new ApiResponse(200, rows[0], "FAQ item retrieved successfully."));
  }
  if (type) {
    [rows] = await db.execute(
      "SELECT * FROM faq_items WHERE type = ? ORDER BY sequence ASC",
      [type]
    );
  } else {
    [rows] = await db.execute(
      "SELECT * FROM faq_items ORDER BY type ASC, sequence ASC"
    );
  }
  return res
    .status(200)
    .json(new ApiResponse(200, rows, "All FAQ items retrieved."));
});

const deleteFaqItem = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ApiError(400, "FAQ item ID is required."));
  }
  const [existing] = await db.execute("SELECT * FROM faq_items WHERE id = ?", [
    id,
  ]);
  if (existing.length === 0) {
    return next(new ApiError(404, "FAQ item not found."));
  }
  const [result] = await db.execute("DELETE FROM faq_items WHERE id = ?", [id]);
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "FAQ item deleted successfully."));
});

export { addFaqItem, updateFaqItem, viewFaqItems, deleteFaqItem };
