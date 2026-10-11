const fa = "۰۱۲۳۴۵۶۷۸۹";

export const toFa = (n: number | string) => String(n).replace(/\d/g, (d) => fa[+d]);

export const formatPrice = (n: number) => toFa(n.toLocaleString("en-US")) + " تومان";
