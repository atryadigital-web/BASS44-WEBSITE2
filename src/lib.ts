export const LOGO_URL = "https://www.atrya.ir/wp-content/uploads/2019/08/atrya-logo2-min.png";

const fa = "۰۱۲۳۴۵۶۷۸۹";

export const toFa = (n: number | string) => String(n).replace(/\d/g, (d) => fa[+d]);

export const formatPrice = (n: number) => toFa(n.toLocaleString("en-US")) + " تومان";
