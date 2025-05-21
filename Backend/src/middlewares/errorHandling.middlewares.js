import fs from "fs";

export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // 🧹 CLEANUP: Delete single uploaded file (e.g., upload.single())
    if (req.file && req.file.path && fs.existsSync(req.file.path)) {
        fs.unlink(req.file.path, (fsErr) => {
            if (fsErr) {
                console.error("Error deleting file:", fsErr);
            } else {
                console.log("Cleaned up uploaded file:", req.file.path);
            }
        });
    }

    // 🧹 CLEANUP: Delete multiple files (e.g., upload.array())
    if (req.files && Array.isArray(req.files)) {
        req.files.forEach((file) => {
            if (file.path && fs.existsSync(file.path)) {
                fs.unlink(file.path, (fsErr) => {
                    if (fsErr) {
                        console.error("Error deleting file:", fsErr);
                    } else {
                        console.log("Cleaned up uploaded file:", file.path);
                    }
                });
            }
        });
    }

    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        errors: err.errors || [],
    });
};
