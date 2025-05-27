CREATE TABLE promise_section_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    promise_heading_id INT NOT NULL,          -- Foreign key to promise_section_heading
    title VARCHAR(255) NOT NULL,              -- e.g., "Flexible Appointments"
    description TEXT NOT NULL,                -- e.g., "We offer same-day appointments..."
    icon_image VARCHAR(255) NOT NULL,         -- Filename/path of the icon
    sequence INT NOT NULL,
    FOREIGN KEY (promise_heading_id) REFERENCES promise_section_heading(id) ON DELETE CASCADE
);