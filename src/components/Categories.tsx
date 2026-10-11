import { categories, products } from "../data";
import { toFa } from "../lib";

export default function Categories() {
  return (
    <section className="section tint" id="categories">
      <div className="container">
        <header className="section-head">
          <div>
            <h2>دسته‌بندی محصولات</h2>
            <p>سریع‌تر به محصول مورد نظرتان برسید</p>
          </div>
        </header>
        <div className="cat-grid">
          {categories.map((c) => {
            const items = products.filter((p) => p.category === c.key);
            return (
              <a key={c.key} className="cat" href={c.url} target="_blank" rel="noreferrer" style={{ ["--tone" as string]: c.tone }}>
                <span className="cat-img">
                  <img src={items[0].image} alt="" loading="lazy" referrerPolicy="no-referrer" />
                </span>
                <span className="cat-text">
                  <strong>{c.title}</strong>
                  <small>{toFa(items.length)} محصول · مشاهده محصولات ‹</small>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
