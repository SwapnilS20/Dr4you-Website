CREATE TABLE welcome_banner_section (
    id INT AUTO_INCREMENT PRIMARY KEY,

    heading VARCHAR(255) NOT NULL,         -- e.g., "Start Your Health Journey with Drs-4you.com"
    description TEXT NOT NULL,             -- Full paragraph under the heading
    
    placeholder_text VARCHAR(100) NOT NULL, -- e.g., "Enter Your Phone Number"
    btn_text VARCHAR(20) NOT NULL,       -- e.g., "Submit"
    
    welcome_image VARCHAR(100) NOT NULL    -- e.g., "journey-image.png"
);
