CREATE TABLE platform_steps_heading (
    id INT AUTO_INCREMENT PRIMARY KEY,
    main_heading VARCHAR(255) NOT NULL,       -- e.g., "How our platform works"
    description TEXT NOT NULL,	              -- e.g., "Navigating your healthcare journey..."
    image varchar(255) NOT NULL
);



CREATE TABLE platform_steps_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    platform_heading_id INT NOT NULL,         -- FK to platform_steps_heading(id)
    title VARCHAR(255) NOT NULL,              -- e.g., "Create Your Profile"
    description TEXT NOT NULL,                -- e.g., "Sign up and fill in your medical history securely."
    sequence INT NOT NULL,                    -- e.g., 1, 2, 3 for ordering
    FOREIGN KEY (platform_heading_id) REFERENCES platform_steps_heading(id) ON DELETE CASCADE
);