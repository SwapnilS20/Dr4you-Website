CREATE TABLE hero_section (
    id INT AUTO_INCREMENT PRIMARY KEY,

    tagline_line1 VARCHAR(255) NOT NULL,            -- "Connecting You to Experts."
    tagline_line2 VARCHAR(255) NOT NULL,             -- "Anytime, Anywhere."
    description TEXT NOT NULL,                     -- Main paragraph

    appointment_btn_text VARCHAR(30) NOT NULL,     -- "Book an Appointment" (20 is OK, 30 is safer)
    emergency_label VARCHAR(30) NOT NULL,          -- "Emergency" or similar (20 is OK)
    emergency_contact VARCHAR(20) NOT NULL,        -- "+91 8655910652"

    expert_specialists_count VARCHAR(10) NOT NULL, -- e.g., "60+"
    patients_served_count VARCHAR(10) NOT NULL,    -- e.g., "500+"
    medical_services_count VARCHAR(10) NOT NULL,   -- e.g., "22+"

    testimonial TEXT NOT NULL,                     -- Testimonial quote
    happy_customers_count VARCHAR(10) NOT NULL,    -- e.g., "2400+"
    happy_customers_rating FLOAT NOT NULL,         -- e.g., 4.7

    doctor_image VARCHAR(100) NOT NULL             -- File name or relative path
);
