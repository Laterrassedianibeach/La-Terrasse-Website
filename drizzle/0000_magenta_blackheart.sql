CREATE TABLE `journal_articles` (
	`slug` text PRIMARY KEY NOT NULL,
	`published_at` text NOT NULL,
	`display_date` text NOT NULL,
	`title` text NOT NULL,
	`summary` text NOT NULL,
	`image` text NOT NULL,
	`image_alt` text NOT NULL,
	`introduction` text NOT NULL,
	`sections_json` text NOT NULL,
	`status` text DEFAULT 'published' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
