import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import db from "../db/index.js";
const addHeroSection = asyncHandler(async (req, res, next) => {
    const {
    tagline_line1,
    tagline_line2,
    description,
    appointment_btn_text,
    emergency_label,
    emergency_contact,
    expert_specialists_count,
    patients_served_count,
    medical_services_count,
    testimonial,
    happy_customers_count,
    happy_customers_rating
  } = req.body;
  
  // Validate all required fields
  if (
    !tagline_line1 ||
    !tagline_line2 ||
    !description ||
    !appointment_btn_text ||
    !emergency_label ||
    !emergency_contact ||
    !expert_specialists_count ||
    !patients_served_count ||
    !medical_services_count ||
    !testimonial ||
    !happy_customers_count ||
    !happy_customers_rating
  ) {
    return next(new ApiError(400, "All fields are required."));
  }

  // Handle uploaded file (doctor image)
  const doctorImage = req.file?.path;
  if (!doctorImage) {
    return next(new ApiError(400, "Doctor image is required."));
  }
   const originalName = path.basename(doctorImage);
  // Insert into the database
  const [result] = await db.execute(
    `INSERT INTO hero_section 
    (
      tagline_line1, tagline_line2, description,
      appointment_btn_text, emergency_label, emergency_contact,
      expert_specialists_count, patients_served_count, medical_services_count,
      testimonial, happy_customers_count, happy_customers_rating, doctor_image
    ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      tagline_line1,
      tagline_line2,
      description,
      appointment_btn_text,
      emergency_label,
      emergency_contact,
      expert_specialists_count,
      patients_served_count,
      medical_services_count,
      testimonial,
      happy_customers_count,
      happy_customers_rating,
      originalName // just the filename
    ]
  );

  return res
    .status(200)
    .json(new ApiResponse(200, result, "Hero Section Created Successfully"));
});

const updateHeroSection = asyncHandler(async (req, res, next) => {
  const {
    tagline_line1,
    tagline_line2,
    description,
    appointment_btn_text,
    emergency_label,
    emergency_contact,
    expert_specialists_count,
    patients_served_count,
    medical_services_count,
    testimonial,
    happy_customers_count,
    happy_customers_rating,
    uploadType
  } = req.body;

  const { id } = req.params;
  if (!id) return next(new ApiError(400, "ID is required for update."));

  // Fetch existing record to get old image filename (if any)
  const [existingRows] = await db.execute("SELECT * FROM hero_section WHERE id = ?", [id]);
  if (existingRows.length === 0) return next(new ApiError(404, "Hero section not found."));

  const existingData = existingRows[0];

  // Handle file upload
  let doctorImage = existingData.doctor_image; // Default to old image
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  if (req.file) {    
    // Remove old image from server
    const oldImagePath = path.join(__dirname, "../../public", "uploads",uploadType, doctorImage);

    if (fs.existsSync(oldImagePath)) {      
      fs.unlinkSync(oldImagePath);
      doctorImage = req.file?.path;
      doctorImage = path.basename(doctorImage); // e.g., 1234567890-doctor.png
    }  
    else {  
      return next(new ApiError(404, "Old doctor image file not found."));
    }
  }


  // Update database
   const [result] = await db.execute(
    `UPDATE hero_section SET
      tagline_line1 = ?, tagline_line2 = ?, description = ?,
      appointment_btn_text = ?, emergency_label = ?, emergency_contact = ?,
      expert_specialists_count = ?, patients_served_count = ?, medical_services_count = ?,
      testimonial = ?, happy_customers_count = ?, happy_customers_rating = ?,
      doctor_image = ?
    WHERE id = ?`,
    [
      tagline_line1 || existingData.taglline_line1,
      tagline_line2 || existingData.taglline_line2,
      description || existingData.description,
      appointment_btn_text || existingData.appointment_btn_text,
      emergency_label || existingData.emergency_label,
      emergency_contact || existingData.emergency_contact,
      expert_specialists_count || existingData.expert_specialists_count,
      patients_served_count || existingData.patients_served_count,
      medical_services_count || existingData.medical_services_count,
      testimonial || existingData.testimonial,
      happy_customers_count || existingData.happy_customers_count,
      happy_customers_rating || existingData.happy_customers_rating,
      doctorImage || existingData.doctor_image,
      id,
    ]
  );
  if (result.affectedRows === 0) {
    return next(new ApiError(400, "HeroSection not found or no changes made."));
  }
  return res
    .status(200)
    .json(new ApiResponse(200, result, "Hero Section Updated Successfully"));
});

const viewHeroSection = asyncHandler(async (req, res, next) => {
  // Fetch existing record
  const [hero_section] = await db.execute("SELECT * FROM hero_section WHERE id = 1");
  if (hero_section.length === 0) return next(new ApiError(404, "Hero section not found."));

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    const doctor_image = path.join(__dirname, "../../public", "uploads","HeroSection", hero_section[0].doctor_image);
     if (!fs.existsSync(doctor_image)) {
        return next(new ApiError(404, "Doctor image file not found."));
      }
  return res
    .status(200)
    .json(new ApiResponse(200, hero_section[0], "Hero Section Fetched Successfully"));
});

const deleteHeroSection = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new ApiError(400, "ID is required for deletion."));

  // Fetch existing record to get old image filename (if any)
  const [existingRows] = await db.execute("SELECT * FROM hero_section WHERE id = ?", [id]);
  if (existingRows.length === 0) return next(new ApiError(404, "Hero section not found."));

  const existingData = existingRows[0];

  // Remove old image from server
  const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
  const oldImagePath = path.join(__dirname, "../../public", "uploads","HeroSection", existingData.doctor_image);
  if (fs.existsSync(oldImagePath)) {
    fs.unlinkSync(oldImagePath);
  }

  // Delete from database
  const [result] = await db.execute("TRUNCATE TABLE hero_section;");
 
  return res
    .status(200)
    .json(new ApiResponse(200, result, "Hero Section Deleted Successfully"));
});

export {
    addHeroSection,
    viewHeroSection, // Uncomment if you have a view function
    updateHeroSection, // Uncomment if you have an update function
    deleteHeroSection // Uncomment if you have a delete function
}