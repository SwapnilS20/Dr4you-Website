CREATE TABLE why_choose_us_heading (
    id INT AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(255) NOT NULL,            -- e.g., "Why choose us"
    heading_main VARCHAR(255) NOT NULL,     -- e.g., "Why Pick Us for"
    heading_highlight VARCHAR(255),         -- e.g., "Your Healthcare"
    on_image_text TEXT ,        -- e.g., "We are committed to providing..."
    doctor_image VARCHAR(255)              -- e.g., "doctor.png"
);


CREATE TABLE why_choose_us_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    heading_id INT NOT NULL,                     -- FK to why_choose_us_heading(id)
    title VARCHAR(255) NOT NULL,                 -- e.g., "More Experience"
    description TEXT NOT NULL,                   -- e.g., "We offer a range..."
    icon_image VARCHAR(255),                     -- e.g., "experience-icon.svg"
    FOREIGN KEY (heading_id) REFERENCES why_choose_us_heading(id) ON DELETE CASCADE
);
