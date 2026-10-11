import { useEffect, useState } from "react";
import { contact, heroArticles } from "../data";
import { toFa } from "../lib";

const INTERVAL = 7000;

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = heroArticles.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), INTERVAL);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="welcome">
          <p>به فروشگاه آنلاین تجهیزات روشنایی آتریا الکترونیک خوش آمدید</p>
          <a className="btn btn-ghost" href={contact.telegram} target="_blank" rel="noreferrer">
            <TelegramIcon /> برای مشاهده تخفیفات ویژه وارد کانال تلگرام آتریا شوید.
          </a>
        </div>

        <div
          className="slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="مقالات ویژه"
        >
          {heroArticles.map((a, idx) => (
            <article
              key={a.title}
              className={"slide" + (idx === i ? " active" : "")}
              style={{ backgroundImage: `url("${a.image}")` }}
              aria-hidden={idx !== i}
            >
              <div className="slide-shade" />
              <div className="slide-body">
                <span className="chip">مقاله ویژه</span>
                <h2>
                  <a href={a.url} target="_blank" rel="noreferrer" tabIndex={idx === i ? 0 : -1}>
                    {a.title}
                  </a>
                </h2>
                <p>{a.excerpt}</p>
                <a className="btn btn-primary" href={a.url} target="_blank" rel="noreferrer" tabIndex={idx === i ? 0 : -1}>
                  بیشتر بخوانید
                </a>
              </div>
            </article>
          ))}

          <button className="arrow prev" aria-label="اسلاید قبلی" onClick={() => setI((i - 1 + n) % n)}>
            ›
          </button>
          <button className="arrow next" aria-label="اسلاید بعدی" onClick={() => setI((i + 1) % n)}>
            ‹
          </button>

          <div className="dots" role="tablist">
            {heroArticles.map((a, idx) => (
              <button
                key={a.title}
                role="tab"
                aria-selected={idx === i}
                aria-label={`اسلاید ${toFa(idx + 1)}`}
                className={idx === i ? "on" : ""}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
          {!paused && <div className="progress" key={i} style={{ animationDuration: `${INTERVAL}ms` }} />}
        </div>
      </div>
    </section>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.7-7.9c.4-.3-.1-.5-.6-.2L6.5 13.9 1.9 12.4c-1-.3-1-1 .2-1.5L20.1 3.9c.8-.3 1.6.2 1.8.4z" />
    </svg>
  );
}
