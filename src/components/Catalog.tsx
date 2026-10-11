import { useMemo, useState } from "react";
import { categories, products, type CategoryKey } from "../data";
import { toFa } from "../lib";
import ProductCard from "./ProductCard";

// 12 divides evenly into 2, 3, and 4 columns, so the first page never leaves an orphan row.
const LIMIT = 12;

export default function Catalog() {
  const [cat, setCat] = useState<CategoryKey | "all">("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"default" | "asc" | "desc">("default");
  const [showAll, setShowAll] = useState(false);

  const list = useMemo(() => {
    let l = products.filter((p) => (cat === "all" ? true : p.category === cat));
    const needle = q.trim().toLowerCase();
    if (needle) l = l.filter((p) => p.title.toLowerCase().includes(needle));
    if (sort !== "default") {
      l = [...l].sort((a, b) => {
        const av = a.price ?? Infinity;
        const bv = b.price ?? Infinity;
        return sort === "asc" ? av - bv : bv - av;
      });
    }
    return l;
  }, [cat, q, sort]);

  const visible = showAll || q || cat !== "all" ? list : list.slice(0, LIMIT);

  return (
    <section className="section" id="products">
      <div className="container">
        <header className="section-head">
          <div>
            <h2>محصولات آتریا</h2>
            <p>انواع ال ای دی، منبع تغذیه، فلاشر و لوازم دیجیتال با ارسال به سراسر کشور</p>
          </div>
        </header>

        <div className="toolbar">
          <div className="chips" role="tablist" aria-label="دسته‌بندی محصولات">
            <button role="tab" aria-selected={cat === "all"} className={cat === "all" ? "on" : ""} onClick={() => setCat("all")}>
              همه <em>{toFa(products.length)}</em>
            </button>
            {categories.map((c) => (
              <button key={c.key} role="tab" aria-selected={cat === c.key} className={cat === c.key ? "on" : ""} onClick={() => setCat(c.key)}>
                {c.title.replace("انواع ", "")} <em>{toFa(products.filter((p) => p.category === c.key).length)}</em>
              </button>
            ))}
          </div>
          <div className="tools">
            <label className="search">
              <span className="sr-only">جستجو در محصولات</span>
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="جستجوی محصول…" type="search" />
            </label>
            <label className="select">
              <span className="sr-only">مرتب‌سازی</span>
              <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)}>
                <option value="default">مرتب‌سازی پیشفرض</option>
                <option value="asc">ارزان‌ترین</option>
                <option value="desc">گران‌ترین</option>
              </select>
            </label>
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="empty">محصولی با این مشخصات پیدا نشد.</p>
        ) : (
          <div className="grid" aria-live="polite">
            {visible.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        )}

        {!showAll && !q && cat === "all" && list.length > visible.length && (
          <div className="more">
            <button className="btn btn-outline" onClick={() => setShowAll(true)}>
              نمایش همه {toFa(list.length)} محصول
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
