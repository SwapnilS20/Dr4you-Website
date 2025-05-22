CREATE TABLE drs4you_story_section (
    id INT AUTO_INCREMENT PRIMARY KEY,

    main_heading VARCHAR(255) NOT NULL,            -- e.g., "Drs-4you’s Story"
    sub_heading VARCHAR(255) NOT NULL,             -- e.g., "Get to know us"
    description TEXT NOT NULL,                     -- The full paragraph about the story
    button_text VARCHAR(50) NOT NULL,              -- e.g., "Learn more about us"
    story_image VARCHAR(100) NOT NULL           -- e.g., "story-doctor.png"
);
