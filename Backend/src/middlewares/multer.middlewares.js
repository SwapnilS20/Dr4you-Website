import multer from 'multer';
import path from 'path';
import fs from 'fs';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Folder name is determined by the uploadType field in the request body
    const folderName = req.body.uploadType || "General"; // default to General

    const dir = path.join("public", "uploads", folderName);
    
    // Create the folder if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.replace(/\s+/g, "-");
    cb(null, fileName);
  },
});

export const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 }})