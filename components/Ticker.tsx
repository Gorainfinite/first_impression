const items = ["SEO", "Paid media", "Social", "Brand identity", "Web design", "Content", "Email & CRM", "Analytics"];

/** Pure-CSS marquee (replaces the JS-cloned ticker from main.js). */
export default function Ticker() {
  const text = items.join("  ✦  ") + "  ✦  ";
  return (
    <div className="tfi-ticker bg-signal on-signal" aria-label={`Services: ${items.join(", ")}`}>
      <p className="tfi-ticker__track" aria-hidden="true">{text}</p>
      <p className="tfi-ticker__track" aria-hidden="true">{text}</p>
    </div>
  );
}
