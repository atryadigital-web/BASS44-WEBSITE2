import { categories, contact } from "../data";
import { PhoneIcon } from "./Header";
import ContactForm from "./ContactForm";
import TrustBadges from "./TrustBadges";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="f-brand">
          <a className="f-logo" href={contact.site} target="_blank" rel="noreferrer" aria-label="آتریا الکترونیک">
            <img src="/atrya-site-footer-logo.png" alt="لوگوی آتریا الکترونیک" width={130} height={130} />
          </a>
          <p>فروشگاه آنلاین تجهیزات روشنایی آتریا الکترونیک؛ ال ای دی، منبع تغذیه، فلاشر و لوازم دیجیتال با کیفیت و قیمت مناسب.</p>
          <a className="btn btn-primary" href={contact.telegram} target="_blank" rel="noreferrer">
            کانال تلگرام آتریا
          </a>
          <TrustBadges />
        </div>

        <div>
          <h4>دسته‌بندی‌ها</h4>
          <ul>
            {categories.map((c) => (
              <li key={c.key}>
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>تماس با ما</h4>
          <ul className="phones">
            {contact.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href}>
                  <PhoneIcon /> <span dir="ltr">{p.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="muted">
            وب‌سایت:{" "}
            <a href={contact.site} target="_blank" rel="noreferrer">
              atrya.ir
            </a>
          </p>
          <ContactForm />
        </div>
      </div>
      <div className="copy">
        <div className="container copy-inner">
          <span>© {new Date().getFullYear().toLocaleString("fa-IR", { useGrouping: false })} کلیه حقوق برای آتریا الکترونیک محفوظ است.</span>
          <span className="credit">طراحی شده توسط آتریا الکترونیک</span>
        </div>
      </div>
    </footer>
  );
}
