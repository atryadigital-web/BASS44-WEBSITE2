const U = "https://www.atrya.ir/wp-content/uploads/";
const P = "https://www.atrya.ir/product/";
const C = "https://www.atrya.ir/product-category/";

export type Product = {
  id: string;
  title: string;
  image: string;
  price?: number; // toman
  oldPrice?: number;
  rating?: number;
  url: string;
  category: CategoryKey;
};

export type CategoryKey = "strip" | "flasher" | "oval" | "power" | "digital" | "led";

export const categories: { key: CategoryKey; title: string; url: string; tone: string }[] = [
  { key: "strip", title: "انواع ال ای دی های نواری", url: C + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%86%d9%88%d8%a7%d8%b1%db%8c/", tone: "#ff4500" },
  { key: "flasher", title: "انواع فلاشر ها", url: C + "%d9%81%d9%84%d8%a7%d8%b4%d8%b1/", tone: "#f59e0b" },
  { key: "oval", title: "انواع ال ای دی اوال", url: C + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c/%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a7%d9%88%d8%a7%d9%84-%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c/", tone: "#2f5fd8" },
  { key: "power", title: "انواع منبع تغذیه", url: C + "%d9%85%d9%86%d8%a8%d8%b9-%d8%aa%d8%ba%d8%b0%db%8c%d9%87/", tone: "#10b981" },
  { key: "digital", title: "لوازم دیجیتال", url: C + "%d9%84%d9%88%d8%a7%d8%b2%d9%85-%d8%af%db%8c%d8%ac%db%8c%d8%aa%d8%a7%d9%84/", tone: "#8b5cf6" },
  { key: "led", title: "انواع ال ای دی", url: C + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c/", tone: "#ec4899" },
];

export const products: Product[] = [
  // ---- ال ای دی نواری
  { id: "s1", category: "strip", title: "ال ای دی نواری 220 ولت 3014 تک لاین", image: U + "2019/08/220V-LED-Strip-Light-SMD-3014-1line-300x300.jpg", price: 10000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%86%d9%88%d8%a7%d8%b1%db%8c-220-%d9%88%d9%84%d8%aa-3014-%d8%aa%da%a9-%d9%84%d8%a7%db%8c%d9%86/" },
  { id: "s2", category: "strip", title: "ال ای دی نواری 220 ولت 3014 دو لاین", image: U + "2019/08/220V-LED-Strip-Light-SMD-3014-2line-300x300.jpg", price: 13000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%86%d9%88%d8%a7%d8%b1%db%8c-220-%d9%88%d9%84%d8%aa-3014-%d8%af%d9%88-%d9%84%d8%a7%db%8c%d9%86/" },
  { id: "s3", category: "strip", title: "ال ای دی نواری 220 ولت 5730", image: U + "2019/08/220V-5730-LED-Strip-300x300.jpg", url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%86%d9%88%d8%a7%d8%b1%db%8c-220-%d9%88%d9%84%d8%aa-5730/" },
  { id: "s4", category: "strip", title: "ال ای دی نواری 12 ولت 5050", image: U + "2019/08/12V-SMD-5050-LED-Strip-white-300x300.jpg", rating: 5, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%86%d9%88%d8%a7%d8%b1%db%8c-12-%d9%88%d9%84%d8%aa-5050/" },
  { id: "s5", category: "strip", title: "ال ای دی نواری 5050 آی سی دار تراکم 30", image: U + "2019/08/LED-Strip-with-IC-60led-per-meter--300x300.jpg", price: 35000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%86%d9%88%d8%a7%d8%b1%db%8c-5050-%d8%a2%db%8c-%d8%b3%db%8c-%d8%af%d8%a7%d8%b1-%d8%aa%d8%b1%d8%a7%da%a9%d9%85-30/" },
  { id: "s6", category: "strip", title: "ال ای دی نواری 5050 آی سی دار تراکم 60", image: U + "2019/08/LED-Strip-with-IC-60led-per-meter--300x300.jpg", price: 75000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%86%d9%88%d8%a7%d8%b1%db%8c-5050-%d8%a2%db%8c-%d8%b3%db%8c-%d8%af%d8%a7%d8%b1-%d8%aa%d8%b1%d8%a7%da%a9%d9%85-60/" },

  // ---- فلاشر
  { id: "f1", category: "flasher", title: "فلاشر 2 کانال", image: U + "2019/08/%D9%81%D9%84%D8%A7%D8%B4%D8%B1-2-%DA%A9%D8%A7%D9%86%D8%A7%D9%84-300x300.jpg", price: 360000, url: P + "%d9%81%d9%84%d8%a7%d8%b4%d8%b1-2-%da%a9%d8%a7%d9%86%d8%a7%d9%84/" },
  { id: "f2", category: "flasher", title: "فلاشر 3 کانال", image: U + "2019/08/%D9%81%D9%84%D8%A7%D8%B4%D8%B1-3-%DA%A9%D8%A7%D9%86%D8%A7%D9%84-300x300.jpg", price: 380000, url: P + "%d9%81%d9%84%d8%a7%d8%b4%d8%b1-3-%da%a9%d8%a7%d9%86%d8%a7%d9%84/" },
  { id: "f3", category: "flasher", title: "فلاشر 4 کانال", image: U + "2019/08/%D9%81%D9%84%D8%A7%D8%B4%D8%B1-4-%DA%A9%D8%A7%D9%86%D8%A7%D9%84-300x300.jpg", price: 400000, url: P + "%d9%81%d9%84%d8%a7%d8%b4%d8%b1-4-%da%a9%d8%a7%d9%86%d8%a7%d9%84/" },
  { id: "f4", category: "flasher", title: "فلاشر 8 کانال", image: U + "2019/08/%D9%81%D9%84%D8%A7%D8%B4%D8%B1-8-%DA%A9%D8%A7%D9%86%D8%A7%D9%84-300x300.jpg", price: 650000, url: P + "%d9%81%d9%84%d8%a7%d8%b4%d8%b1-8-%da%a9%d8%a7%d9%86%d8%a7%d9%84/" },
  { id: "f5", category: "flasher", title: "فلاشر 10 کانال", image: U + "2019/08/%D9%81%D9%84%D8%A7%D8%B4%D8%B1-12-%DA%A9%D8%A7%D9%86%D8%A7%D9%84-300x300.jpg", price: 1400000, url: P + "%d9%81%d9%84%d8%a7%d8%b4%d8%b1-10-%da%a9%d8%a7%d9%86%d8%a7%d9%84/" },
  { id: "f6", category: "flasher", title: "فلاشر 12 کانال", image: U + "2019/08/%D9%81%D9%84%D8%A7%D8%B4%D8%B1-12-%DA%A9%D8%A7%D9%86%D8%A7%D9%84-300x300.jpg", price: 1500000, url: P + "%d9%81%d9%84%d8%a7%d8%b4%d8%b1-12-%da%a9%d8%a7%d9%86%d8%a7%d9%84/" },

  // ---- ال ای دی اوال
  { id: "o1", category: "oval", title: "ال ای دی اوال آبی ONYX", image: U + "2019/08/oval-led-blue-pack-300x300.jpg", price: 1800000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a7%d9%88%d8%a7%d9%84-%d8%a2%d8%a8%db%8c/" },
  { id: "o2", category: "oval", title: "ال ای دی اوال آفتابی برند ONYX", image: U + "2025/03/unnamed-4-300x300.jpg", price: 1900000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a7%d9%88%d8%a7%d9%84-%d8%a2%d9%81%d8%aa%d8%a7%d8%a8%db%8c-onyx/" },
  { id: "o3", category: "oval", title: "ال ای دی اوال زرد انبه ای ONYX", image: U + "2019/08/oval-led-yellow-pack-300x300.jpg", price: 1900000, oldPrice: 2000000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a7%d9%88%d8%a7%d9%84-%d8%b2%d8%b1%d8%af-%d8%a7%d9%86%d8%a8%d9%87-%d8%a7%db%8c-onyx/" },
  { id: "o4", category: "oval", title: "ال ای دی اوال سبز ONYX", image: U + "2019/10/%D8%A7%D9%88%D8%A7%D9%84-%D8%B3%D8%A8%D8%B21-300x300.jpg", price: 1800000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a7%d9%88%d8%a7%d9%84-%d8%b3%d8%a8%d8%b2/" },
  { id: "o5", category: "oval", title: "ال ای دی اوال سفید ONYX", image: U + "2019/08/oval-led-white-pack-300x300.jpg", price: 550000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a7%d9%88%d8%a7%d9%84-%d8%b3%d9%81%db%8c%d8%af/" },
  { id: "o6", category: "oval", title: "ال ای دی اوال صورتی ONYX", image: U + "2019/10/%D8%A7%D9%88%D8%A7%D9%84-%D8%B5%D9%88%D8%B1%D8%AA%DB%8C-300x300.jpg", price: 1800000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a7%d9%88%d8%a7%d9%84-%d8%b5%d9%88%d8%b1%d8%aa%db%8c/" },
  { id: "o7", category: "oval", title: "ال ای دی اوال فیروزه ای ONYX", image: U + "2019/10/onyx-led-e1572214310184-300x300.jpeg", price: 2000000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a7%d9%88%d8%a7%d9%84-%d9%81%db%8c%d8%b1%d9%88%d8%b2%d9%87-%d8%a7%db%8c/" },
  { id: "o8", category: "oval", title: "ال ای دی اوال قرمز ONYX", image: U + "2019/10/%D8%A7%D9%88%D8%A7%D9%84-%D9%82%D8%B1%D9%85%D8%B2-1-300x300.jpg", price: 1900000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a7%d9%88%d8%a7%d9%84-%d9%82%d8%b1%d9%85%d8%b2%d8%8c-%d8%aa%d8%a7%d8%a8%d9%84%d9%88-%d8%b3%d8%a7%d8%b2%db%8c%d8%8c-%d9%86%d9%88%d8%b1%d9%be%d8%b1%d8%af%d8%a7/" },

  // ---- منبع تغذیه
  { id: "p1", category: "power", title: "آداپتور بین راهی پلاستیکی 12 ولت 2 آمپر", image: U + "2024/02/WhatsApp-Image-2024-02-20-at-11.58.09_fb84b980-300x300.jpg", price: 295000, url: P + "%d8%a2%d8%af%d8%a7%d9%be%d8%aa%d9%88%d8%b1-%d9%be%d9%84%d8%a7%d8%b3%d8%aa%db%8c%da%a9%db%8c-2-%d8%a2%d9%85%d9%be%d8%b1%d8%8c-%d8%a2%d8%af%d8%a7%d9%be%d8%aa%d9%88%d8%b1-12-%d9%88%d9%84%d8%aa-2-%d8%a2/" },
  { id: "p2", category: "power", title: "آداپتور بین راهی پلاستیکی 12 ولت 5 آمپر", image: U + "2019/08/NIK_0465cx-1-300x300.jpg", price: 850000, url: P + "%d8%a2%d8%af%d8%a7%d9%be%d8%aa%d9%88%d8%b1-%d9%be%d9%84%d8%a7%d8%b3%d8%aa%db%8c%da%a9%db%8c-5-%d8%a2%d9%85%d9%be%d8%b1%d8%8c-%d9%85%d9%86%d8%a8%d8%b9-%d8%aa%d8%ba%d8%b0%db%8c%d9%87-5-%d8%a2%d9%85/" },
  { id: "p3", category: "power", title: "آداپتور بین راهی پلاستیکی 12 ولت 6 آمپر با کابل", image: U + "2019/10/12v-6a-300x300.jpg", price: 950000, url: P + "%d8%a8%d9%87%d8%aa%d8%b1%db%8c%d9%86-%d8%a2%d8%af%d8%a7%d9%be%d8%aa%d9%88%d8%b1-%d8%a8%db%8c%d9%86-%d8%b1%d8%a7%d9%87%db%8c-%d9%be%d9%84%d8%a7%d8%b3%d8%aa%db%8c%da%a9%db%8c-12-%d9%88%d9%84%d8%aa-6/" },
  { id: "p4", category: "power", title: "پاور سوئیچینگ 24 ولت 10 آمپر بدون فن ONYX", image: U + "2023/12/dd1db4fceed8560af7659048a380827bb4f60877_1702718707.jpg", price: 2400000, url: P + "%d9%be%d8%a7%d9%88%d8%b1%d8%b3%d9%88%db%8c%db%8c%da%86%db%8c%d9%86%da%af-24-%d9%88%d9%84%d8%aa-10-%d8%a7%d9%85%d9%be%d8%b1-%d8%a8%d8%af%d9%88%d9%86-%d9%81%d9%86-onyx/" },
  { id: "p5", category: "power", title: "پاور Mean Well DRP-480-24", image: U + "2025/03/a453736c-1fe6-4fb4-82a2-46165281e5e011-300x300.jpg", price: 10000000, url: P + "%d9%be%d8%a7%d9%88%d8%b1-mean-well-drp-480-24/" },
  { id: "p6", category: "power", title: "پاور سوئیچینگ 12 ولت 5 آمپر ONYX", image: U + "2024/06/12v5a1-300x300.jpg", price: 250000, url: P + "%d9%be%d8%a7%d9%88%d8%b1-%d8%b3%d9%88%d8%a6%da%86%db%8c%d9%86%da%af-12-%d9%88%d9%84%d8%aa-5-%d8%a2%d9%85%d9%be%d8%b1-%d9%85%d9%86%d8%a8%d8%b9-%d8%aa%d8%ba%d8%b0%db%8c%d9%87-12-%d9%88%d9%84%d8%aa-5/" },
  { id: "p7", category: "power", title: "پاور سوئیچینگ فلزی صنعتی 12 ولت 10 آمپر", image: U + "2019/10/12v-10a-300x300.jpg", price: 1500000, url: P + "%d9%be%d8%a7%d9%88%d8%b1-%d8%b3%d9%88%d8%a6%db%8c%da%86%db%8c%d9%86%da%af-12-%d9%88%d9%84%d8%aa-10-%d8%a2%d9%85%d9%be%d8%b1%d8%8c-%d9%85%d9%86%d8%a8%d8%b9-%d8%aa%d8%ba%d8%b0%db%8c%d9%87-%d8%b3%d9%88/" },
  { id: "p8", category: "power", title: "پاور سوئیچینگ فلزی صنعتی فن دار 12 ولت 20 آمپر", image: U + "2019/10/12v-20a-whit-fan-300x300.jpg", price: 2000000, url: P + "%d9%be%d8%a7%d9%88%d8%b1-%d8%b3%d9%88%d8%a6%db%8c%da%86%db%8c%d9%86%da%af-%d9%81%d9%84%d8%b2%db%8c-%d8%b5%d9%86%d8%b9%d8%aa%db%8c-%d9%81%d9%86-%d8%af%d8%a7%d8%b1-12%d9%88%d9%84%d8%aa-20-%d8%a2%d9%85/" },
  { id: "p9", category: "power", title: "پاور سوئیچینگ 24 ولت 20 آمپر فن دار برند ONYX", image: U + "2023/12/unnamed-4-300x300.jpg", price: 5000000, rating: 4, url: P + "%d8%a8%d9%87%d8%aa%d8%b1%db%8c%d9%86-%d9%be%d8%a7%d9%88%d8%b1%d8%b3%d9%88%d8%a6%da%86%db%8c%d9%86%da%af-24-%d9%88%d9%84%d8%aa-20-%d8%a7%d9%85%d9%be%d8%b1-%d9%81%d9%86-%d8%af%d8%a7%d8%b1-%d8%aa%d8%b1/" },
  { id: "p10", category: "power", title: "منبع تغذیه 12 ولت اسلیم 33 آمپر 400 وات", image: U + "2025/11/unnamed-5-300x300.jpg", price: 2500000, url: P + "%d8%a8%d9%87%d8%aa%d8%b1%db%8c%d9%86-%d9%be%d8%a7%d9%88%d8%b1-%d8%a7%d8%b3%d9%84%db%8c%d9%85-12%d9%88%d9%84%d8%aa-400-%d9%88%d8%a7%d8%aa-onyx/" },
  { id: "p11", category: "power", title: "منبع تغذیه آزمایشگاهی 32V-3A بتا", image: U + "2024/11/WhatsApp-Image-2024-09-22-at-16.04.33_d660ca44-300x300.jpg", price: 5400000, url: P + "%d9%85%d9%86%d8%a8%d8%b9-%d8%aa%d8%ba%d8%b0%db%8c%d9%87-%d8%a2%d8%b2%d9%85%d8%a7%db%8c%d8%b4%da%af%d8%a7%d9%87%db%8c-32v-3a-%d8%a8%d8%aa%d8%a7/" },
  { id: "p12", category: "power", title: "منبع تغذیه آزمایشگاهی مدل 32V-5A بتا", image: U + "2024/11/%D9%85%D9%86%D8%A8%D8%B9-%D8%AA%D8%BA%D8%B0%DB%8C%D9%87-32v-5a-300x300.jpg", price: 5800000, url: P + "%d9%85%d9%86%d8%a8%d8%b9-%d8%aa%d8%ba%d8%b0%db%8c%d9%87-%d8%a2%d8%b2%d9%85%d8%a7%db%8c%d8%b4%da%af%d8%a7%d9%87%db%8c-%d9%85%d8%af%d9%84-32v-5a/" },

  // ---- لوازم دیجیتال
  { id: "d1", category: "digital", title: "ال ای دی انگشتی پیکسلی", image: U + "2019/08/LED-pixel-module-3--300x300.jpg", price: 9800, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a7%d9%86%da%af%d8%b4%d8%aa%db%8c-%d9%be%db%8c%da%a9%d8%b3%d9%84%db%8c/" },
  { id: "d2", category: "digital", title: "ال ای دی پیکسل دایره ایی (پوینت لایت)", image: U + "2019/09/point-pixel-web.jpg", price: 75000, rating: 4.5, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%be%db%8c%da%a9%d8%b3%d9%84-%d8%af%d8%a7%db%8c%d8%b1%d9%87-%d8%a7%db%8c%db%8c-%d9%be%d9%88%db%8c%d9%86%d8%aa-%d9%84%d8%a7%db%8c%d8%aa/" },
  { id: "d3", category: "digital", title: "درایور 1-3 وات بدون پوشش", image: U + "2019/09/driver3-1-web-300x300.jpg", price: 40000, url: P + "%d8%af%d8%b1%d8%a7%db%8c%d9%88%d8%b1-1-3-%d9%88%d8%a7%d8%aa-%d8%a8%d8%af%d9%88%d9%86-%d9%be%d9%88%d8%b4%d8%b4/" },
  { id: "d4", category: "digital", title: "درایور 4000 پیکسل T4000ac", image: U + "2019/08/4000-pixel-LED-driver-t4000-300x300.jpg", price: 850000, url: P + "%d8%af%d8%b1%d8%a7%db%8c%d9%88%d8%b1-4000-%d9%be%db%8c%da%a9%d8%b3%d9%84-t4000ac/" },
  { id: "d5", category: "digital", title: "درایور 8000 پیکسل T8000ac", image: U + "2019/08/8000-pixel-LED-driver-t8000-300x300.jpg", price: 650000, url: P + "%d8%af%d8%b1%d8%a7%db%8c%d9%88%d8%b1-8000-%d9%be%db%8c%da%a9%d8%b3%d9%84-t8000ac/" },
  { id: "d6", category: "digital", title: "درایور پیکسلی 2048 پیکسل آدامسی", image: U + "2019/08/2048-pixel-driver-adamsi--300x300.jpg", price: 150000, url: P + "%d8%af%d8%b1%d8%a7%db%8c%d9%88%d8%b1-%d9%be%db%8c%da%a9%d8%b3%d9%84%db%8c-2048-%d9%be%db%8c%da%a9%d8%b3%d9%84-%d8%a2%d8%af%d8%a7%d9%85%d8%b3%db%8c/" },

  // ---- ال ای دی
  { id: "l1", category: "led", title: "ال ای دی بلوکی SMD 5050 RGB", image: U + "2019/08/led-module-5730-rgb-300x300.jpg", url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a8%d9%84%d9%88%da%a9%db%8c-smd-5730/" },
  { id: "l2", category: "led", title: "ال ای دی بلوکی SMD 5054 آفتابی", image: U + "2019/12/SMD-5054-sun-e1576243810792-300x300.jpeg", price: 6000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a8%d9%84%d9%88%da%a9%db%8c-smd-5054-%d8%a2%d9%81%d8%aa%d8%a7%d8%a8%db%8c/" },
  { id: "l3", category: "led", title: "ال ای دی بلوکی SMD 5054 زرد یا انبر", image: U + "2019/12/SMD-5054-yellow-e1576244017498-300x300.jpeg", price: 5500, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a8%d9%84%d9%88%da%a9%db%8c-smd-5054-%d8%b2%d8%b1%d8%af/" },
  { id: "l4", category: "led", title: "ال ای دی بلوکی SMD 5054 سفید", image: U + "2019/12/SMD-5054-white-e1576244573657-300x300.jpeg", price: 5500, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a8%d9%84%d9%88%da%a9%db%8c-smd-5054-%d8%b3%d9%81%db%8c%d8%af/" },
  { id: "l5", category: "led", title: "ال ای دی بلوکی SMD 5054 قرمز", image: U + "2019/11/SMD-5054-red-e1576243617518-300x300.jpeg", price: 5000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%a8%d9%84%d9%88%da%a9%db%8c-smd-5054/" },
  { id: "l6", category: "led", title: "ال ای دی پنج میلیمتری", image: U + "2019/08/5mm-IR-white-transmitter-led-300x300.jpg", url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%81%d8%b1%d8%b3%d8%aa%d9%86%d8%af%d9%87/" },
  { id: "l7", category: "led", title: "ال ای دی شاخه ای 12 ولت 4014", image: U + "2019/08/4014-rigid-led-12v-300x300.jpg", price: 22000, url: P + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%b4%d8%a7%d8%ae%d9%87-%d8%a7%db%8c-12-%d9%88%d9%84%d8%aa-4014/" },
];

const A = "https://www.atrya.ir/";

export type Article = {
  title: string;
  excerpt: string;
  date?: string;
  image: string; // large, used in slider/blog
  url: string;
};

export const heroArticles: Article[] = [
  {
    title: "مکان های مناسب برای نورپردازی با ال ای دی نواری :",
    excerpt: "از ال ای دی نواری به دلیل انعطاف و مصرف کم آن میتوان در نورپردازی پله ها، سقف، کابینت آشپزخانه، فروشگاه ها و بوفه ها استفاده کرد و از مزایای آن از جمله دفع حرارت ناچیز بهره برد.",
    image: U + "2021/08/led-strip-.jpg",
    url: A + "%d9%86%d9%88%d8%b1%d9%be%d8%b1%d8%af%d8%a7%d8%b2%db%8c-%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%86%d9%88%d8%a7%d8%b1%db%8c/",
  },
  {
    title: "ایده های جالب با ال ای دی نواری",
    excerpt: "نوار های ال ای دی به دلیل انعطاف پذیری، کم مصرف بودن و ایمن بودن بسیار محبوب اند. از جاهایی که میتوانیم از آن ها استفاده کنیم نور پردازی خانه، نورپردازی ماشین ها، نورپردازی پشت تلویزیون، نورپردازی کریسمس و نورپردازی استیج است.",
    image: U + "2020/05/interesting-idea-with-led-strip-web.jpg",
    url: A + "%d8%a7%db%8c%d8%af%d9%87-%d9%87%d8%a7%db%8c-%d8%ac%d8%a7%d9%84%d8%a8-%d8%a8%d8%a7-%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%86%d9%88%d8%a7%d8%b1%db%8c/",
  },
  {
    title: "ال ای دی نواری و تبلیغات",
    excerpt: "ال ای ها به دلیل مصرف کم و پوشش دادن انواع طراحی ها برای تابلو های تبلیغاتی بسیار مناسبند. همچنین از آن ها میتوان برای نورپردازی فضاهای بزرگ، دیزاین دوچرخه، مهمانی ها و آینه نیز استفاده کرد.",
    image: U + "2020/07/NYC.-Various-Outdoor.jpg",
    url: A + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%86%d9%88%d8%a7%d8%b1%db%8c-%d9%88-%d8%aa%d8%a8%d9%84%db%8c%d8%ba%d8%a7%d8%aa/",
  },
  {
    title: "همه چیز درباره تکنولوژی الکتریسیته بیسیم (Wireless Electricity)",
    excerpt: "اواخر قرن نوزدهم برای اولین بار نیکلا تسلا از الکتریسیته بی سیم استفاده کرد و آن را به آزمایش گذاشت اما در آن زمان اجرای همه گیر آن پرهزینه بود. امروزه با وجود علم ما به عملی بودن این تکنولوژی استفاده چندانی از آن نشده بود تا اینکه شرکت WiTricity از سال 2005 شروع به کار در این زمینه کرد.",
    image: U + "2020/05/1a1fb87757978c919095dc8c5ea8ece0-e1591559089533.jpg",
    url: A + "%d9%87%d9%85%d9%87-%da%86%db%8c%d8%b2-%d8%af%d8%b1%d8%a8%d8%a7%d8%b1%d9%87-%d8%aa%da%a9%d9%86%d9%88%d9%84%d9%88%da%98%db%8c-%d8%a7%d9%84%da%a9%d8%aa%d8%b1%db%8c%d8%b3%db%8c%d8%aa%d9%87-%d8%a8%db%8c/",
  },
  {
    title: "الکترونیک قابل حمل و پی سی بی",
    excerpt: "برخلاف گذشته که وسایل الکترونیکی ابعاد بزرگی حتی به اندازه ی یک اتاق داشتند. امروزه الکترونیک به درون جیب های ما راه یافته و هر روز کار آمد تر و کوچک تر در ساعت های ما تلفن های همراه ما و دیگر وسایل ضروری روزمره مان راه یافته اند. در اینجا در مورد انواع برد های PCB و نقش شان در تحولات این روزها میخوانیم.",
    image: U + "2020/05/640.jpg",
    url: A + "%d8%a7%d9%84%da%a9%d8%aa%d8%b1%d9%88%d9%86%db%8c%da%a9-%d9%82%d8%a7%d8%a8%d9%84-%d8%ad%d9%85%d9%84-%d9%88-pcb/",
  },
];

export const blogPosts: Article[] = [
  {
    title: "دمای رنگ نور : خریداری لامپ هایی با نور گرم یا نور سرد؟",
    date: "خرداد 2, 1399",
    excerpt: "لامپ ها با درجه حرارت رنگی مختلف اهداف مختلفی دارند. در اینجا به دمای رنگ نور مورد نیاز خود میرسید. هنگام تعویض لامپ...",
    image: U + "2020/04/2d0c952266d39a3240b599664e02e0ae-1080x675.jpg",
    url: A + "%d8%af%d9%85%d8%a7%db%8c-%d8%b1%d9%86%da%af-%d9%86%d9%88%d8%b1-%d8%ae%d8%b1%db%8c%d8%af%d8%a7%d8%b1%db%8c-%d9%84%d8%a7%d9%85%d9%be-%d9%87%d8%a7%db%8c%db%8c-%d8%a8%d8%a7-%d9%86%d9%88%d8%b1-%da%af/",
  },
  {
    title: "نورپردازی ال ای دی و تأثیر آن بر رشد گیاهان، باغداران و جهان",
    date: "اردیبهشت 31, 1399",
    excerpt: "با اینکه ممکن است سرمایه گذاری اولیه پرهزینه به نظر برسد ،اما مطمئناً مزایای استفاده از نورپردازی ال ای دی برای رشد...",
    image: U + "2020/05/interesting-idea-with-led-strip-web-1080x675.jpg",
    url: A + "%d9%86%d9%88%d8%b1%d9%be%d8%b1%d8%af%d8%a7%d8%b2%db%8c-%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d8%aa%d8%a3%d8%ab%db%8c%d8%b1-%d8%a8%d8%b1-%d8%b1%d8%b4%d8%af-%da%af%db%8c%d8%a7%d9%87%d8%a7%d9%86/",
  },
  {
    title: "دیود تابش نور ارگانیک : آنچه شما باید در مورد این فناوری بدانید.",
    date: "اردیبهشت 30, 1399",
    excerpt: "OLED یا دیود تابش نور ارگانیک مانند یک LED ، یک دستگاه نیمه هادی جامد است که طول آن 100 تا 500 نانومتر یا 200 برابر...",
    image: U + "2020/05/640-1080x675.jpg",
    url: A + "%d8%af%db%8c%d9%88%d8%af-%d8%aa%d8%a7%d8%a8%d8%b4-%d9%86%d9%88%d8%b1-%d8%a7%d8%b1%da%af%d8%a7%d9%86%db%8c%da%a9-%d8%a2%d9%86%da%86%d9%87-%d8%b4%d9%85%d8%a7-%d8%a8%d8%a7%db%8c%d8%af-%d8%af%d8%b1/",
  },
];

export const contact = {
  phones: [
    { label: "۰۲۱-۶۶۷۶۶۰۲۲", href: "tel:+982166766022" },
    { label: "۰۲۱-۶۶۷۶۶۲۳۵", href: "tel:+982166766235" },
    { label: "۰۹۱۲۶۷۰۹۶۱۸", href: "tel:+989126709618" },
  ],
  telegram: "https://t.me/GostareshSanatRad",
  site: "https://www.atrya.ir/",
};

export const navLinks = [
  { title: "ال ای دی", href: C + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c/" },
  { title: "ال ای دی بلوکی SMD", href: C + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c/" },
  { title: "ال ای دی شاخه ای", href: C + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c/" },
  { title: "ال ای دی نواری", href: C + "%d8%a7%d9%84-%d8%a7%db%8c-%d8%af%db%8c-%d9%86%d9%88%d8%a7%d8%b1%db%8c/" },
  { title: "منبع تغذیه", href: C + "%d9%85%d9%86%d8%a8%d8%b9-%d8%aa%d8%ba%d8%b0%db%8c%d9%87/" },
  { title: "درایور RGB", href: C + "%d9%84%d9%88%d8%a7%d8%b2%d9%85-%d8%af%db%8c%d8%ac%db%8c%d8%aa%d8%a7%d9%84/" },
  { title: "لوازم دیجیتال", href: C + "%d9%84%d9%88%d8%a7%d8%b2%d9%85-%d8%af%db%8c%d8%ac%db%8c%d8%aa%d8%a7%d9%84/" },
  { title: "فلاشر", href: C + "%d9%81%d9%84%d8%a7%d8%b4%d8%b1/" },
];

export const topLinks = [
  { title: "صفحه نخست", href: "https://www.atrya.ir/" },
  { title: "وبلاگ", href: "https://www.atrya.ir/category/%d9%88%d8%a8%d9%84%d8%a7%da%af/" },
  { title: "سوالات متداول", href: "https://www.atrya.ir/faq/" },
  { title: "پیگیری سفارشات", href: "https://www.atrya.ir/order-tracking/" },
  { title: "حساب کاربری", href: "https://www.atrya.ir/my-account/" },
];
