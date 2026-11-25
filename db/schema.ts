import { index, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const journalArticles = sqliteTable("journal_articles", {
  slug: text("slug").primaryKey(),
  publishedAt: text("published_at").notNull(),
  displayDate: text("display_date").notNull(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  image: text("image").notNull(),
  imageAlt: text("image_alt").notNull(),
  introduction: text("introduction").notNull(),
  sectionsJson: text("sections_json").notNull(),
  status: text("status").notNull().default("published"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
}, (table) => [
  index("idx_journal_articles_status_published_at").on(table.status, table.publishedAt),
]);
