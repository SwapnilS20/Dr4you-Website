CREATE TABLE faq_section_heading (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,           -- e.g., "Frequently Asked Questions"
    description TEXT                      -- e.g., "Get answers to your most common questions..."
);




CREATE TABLE faq_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    heading_id INT NOT NULL,
    type ENUM('general', 'services', 'doctors', 'blogs') NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    sequence INT DEFAULT 0,
    FOREIGN KEY (heading_id) REFERENCES faq_section_heading(id) ON DELETE CASCADE
);
