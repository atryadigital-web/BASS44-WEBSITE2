import { blogPosts } from "../data";

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <header className="section-head">
          <div>
            <h2>جدیدترین مقالات</h2>
            <p>نکات و آموزش‌های نورپردازی و الکترونیک</p>
          </div>
          <a className="link-more" href="https://www.atrya.ir/category/%d9%88%d8%a8%d9%84%d8%a7%da%af/" target="_blank" rel="noreferrer">
            همه مقالات ‹
          </a>
        </header>
        <div className="blog-grid">
          {blogPosts.map((b) => (
            <article key={b.title} className="post">
              <a className="post-media" href={b.url} target="_blank" rel="noreferrer" aria-label={b.title}>
                <img src={b.image} alt={b.title} loading="lazy" referrerPolicy="no-referrer" />
              </a>
              <div className="post-body">
                <div className="meta">
                  <span>{b.date}</span>
                  <i aria-hidden="true">|</i>
                  <a href="https://www.atrya.ir/category/%d9%88%d8%a8%d9%84%d8%a7%da%af/" target="_blank" rel="noreferrer">
                    وبلاگ
                  </a>
                </div>
                <h3>
                  <a href={b.url} target="_blank" rel="noreferrer">
                    {b.title}
                  </a>
                </h3>
                <p>{b.excerpt}</p>
                <a className="read" href={b.url} target="_blank" rel="noreferrer">
                  بیشتر بخوانید ‹
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
