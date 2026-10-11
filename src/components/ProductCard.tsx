import { useState } from "react";
import type { Product } from "../data";
import { useCart } from "../cart";
import { formatPrice, toFa } from "../lib";

export default function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const [broken, setBroken] = useState(false);
  const discount = p.oldPrice && p.price ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;

  const onAdd = () => {
    add(p);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article className="card">
      <a className="card-media" href={p.url} target="_blank" rel="noreferrer" aria-label={p.title}>
        {discount > 0 && <span className="badge-sale">تخفیف! {toFa(discount)}٪</span>}
        {broken ? (
          <span className="img-fallback">آتریا</span>
        ) : (
          <img src={p.image} alt={p.title} loading="lazy" onError={() => setBroken(true)} referrerPolicy="no-referrer" />
        )}
      </a>
      <div className="card-body">
        <h3 className="card-title">
          <a href={p.url} target="_blank" rel="noreferrer">
            {p.title}
          </a>
        </h3>
        {p.rating ? (
          <div className="rating" aria-label={`امتیاز ${toFa(p.rating.toFixed(2))} از ۵`}>
            <span className="stars" style={{ ["--r" as string]: `${(p.rating / 5) * 100}%` }} aria-hidden="true">
              ★★★★★
            </span>
            <span className="rating-num">{toFa(p.rating.toFixed(2))}</span>
          </div>
        ) : null}
        <div className="card-foot">
          <div className="price">
            {p.price ? (
              <>
                {p.oldPrice && <del>{formatPrice(p.oldPrice)}</del>}
                <strong>{formatPrice(p.price)}</strong>
              </>
            ) : (
              <span className="call">استعلام قیمت</span>
            )}
          </div>
          {p.price ? (
            <button className={"btn btn-primary btn-sm" + (added ? " done" : "")} onClick={onAdd}>
              {added ? "افزوده شد ✓" : "افزودن به سبد"}
            </button>
          ) : (
            <a className="btn btn-outline btn-sm" href={p.url} target="_blank" rel="noreferrer">
              مشاهده
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
