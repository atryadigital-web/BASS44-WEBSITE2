type Props = { light?: boolean; size?: number };

/** Atrya Electronic logo: orange sun-ray burst over the "آتریا" wordmark. */
export default function Logo({ light = false, size = 56 }: Props) {
  const text = light ? "#ffffff" : "#1f2937";
  const rays = Array.from({ length: 13 }, (_, i) => {
    const a = (-80 + i * (160 / 12)) * (Math.PI / 180);
    const long = i % 2 === 0;
    const r1 = 22;
    const r2 = long ? 38 : 31;
    return (
      <line
        key={i}
        x1={50 + r1 * Math.sin(a)}
        y1={46 - r1 * Math.cos(a)}
        x2={50 + r2 * Math.sin(a)}
        y2={46 - r2 * Math.cos(a)}
        stroke="#ff4500"
        strokeWidth={long ? 3.2 : 2.4}
        strokeLinecap="round"
      />
    );
  });
  return (
    <span className="logo" style={{ height: size }} aria-label="آتریا الکترونیک">
      <svg viewBox="0 0 100 100" height={size} width={size} role="img" aria-hidden="true">
        {rays}
        <text x="50" y="74" textAnchor="middle" fontSize="27" fontWeight="800" fill={text} fontFamily="Vazirmatn, sans-serif">
          آتریا
        </text>
        <text x="50" y="92" textAnchor="middle" fontSize="11.5" fontWeight="600" fill={text} fontFamily="Vazirmatn, sans-serif">
          الکترونیک
        </text>
      </svg>
    </span>
  );
}
