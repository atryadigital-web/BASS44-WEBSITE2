import { useState } from "react";

// Original badges and verification links from https://www.atrya.ir/.
// The certificates belong to that domain, not to the development preview.
const ENAMAD_URL = "https://trustseal.enamad.ir/?id=366005&Code=ycIiplhHsUkjcIiH5dzJ";
const ENAMAD_IMAGE_URL = "https://trustseal.enamad.ir/logo.aspx?id=366005&Code=ycIiplhHsUkjcIiH5dzJ";

export default function TrustBadges() {
  const [enamadLoaded, setEnamadLoaded] = useState(false);

  return (
    <div className="f-trust" aria-label="نمادهای سایت اصلی آتریا">
      <a className="f-trust-badge" href={ENAMAD_URL} target="_blank" rel="noopener noreferrer" referrerPolicy="origin" aria-label="مشاهده اینماد سایت آتریا">
        <img src={ENAMAD_IMAGE_URL} alt="نماد اعتماد الکترونیکی آتریا" referrerPolicy="origin" width={100} height={110} style={{ display: enamadLoaded ? undefined : "none" }} onLoad={() => setEnamadLoaded(true)} onError={() => setEnamadLoaded(false)} />
        {!enamadLoaded && <span className="f-trust-pending">مشاهده نماد اصلی</span>}
        <span>استعلام اینماد</span>
      </a>
      <a className="f-trust-badge" href="https://www.zarinpal.com/trustPage/www.atrya.ir" target="_blank" rel="noopener noreferrer" aria-label="مشاهده نشان زرین‌پال سایت آتریا">
        <img src="/zarinpal-trust.png" alt="دروازه پرداخت معتبر زرین‌پال" width={60} height={85} />
        <span>زرین‌پال</span>
      </a>
    </div>
  );
}
