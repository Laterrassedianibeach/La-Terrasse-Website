import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, SiteHeader } from "../../_components/SiteChrome";
import { articles, getAllArticles, getArticle } from "../articles";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};

  const image = new URL(article.image, "https://laterrasse.co.ke").toString();
  return {
    title: `${article.title} | La Terrasse Diani Beach`,
    description: article.summary,
    alternates: { canonical: `/journal/${article.slug}` },
    openGraph: { title: article.title, description: article.summary, type: "article", images: [{ url: image, alt: article.imageAlt }] },
    twitter: { card: "summary_large_image", title: article.title, description: article.summary, images: [image] },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const allArticles = await getAllArticles();
  const related = allArticles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return <main>
    <SiteHeader />
    <article className="article-page">
      <header className="article-hero">
        <img src={article.image} alt={article.imageAlt} />
        <div className="article-hero-shade" />
        <div className="shell article-hero-copy">
          <a className="article-back" href="/journal">← Journal</a>
          <p className="eyebrow">The Journal · {article.date}</p>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
        </div>
      </header>

      <div className="shell article-layout">
        <aside className="article-aside">
          <span>La Terrasse</span>
          <p>Diani Beach<br />Kenya</p>
          <a className="text-link dark-link" href="/journal">All stories →</a>
        </aside>
        <div className="article-body">
          <p className="article-lead">{article.introduction}</p>
          {article.sections.map((section) => <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>)}
        </div>
      </div>
    </article>

    <section className="related-stories">
      <div className="shell">
        <div className="related-heading"><p className="eyebrow">Continue reading</p><h2>More from<br /><em>the house.</em></h2></div>
        <div className="related-grid">
          {related.map((item) => <a href={`/journal/${item.slug}`} key={item.slug}>
            <img src={item.image} alt={item.imageAlt} />
            <small>{item.date}</small>
            <h3>{item.title}</h3>
            <span className="text-link dark-link">Read the story →</span>
          </a>)}
        </div>
      </div>
    </section>
    <Footer />
  </main>;
}
