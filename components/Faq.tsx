const faqs = [
  ["How quickly will we see results?", "Paid campaigns can move within weeks. SEO and brand work compound over a few months. We agree on leading indicators in week one so progress is visible early."],
  ["Do you work with small businesses?", "Yes. Most of our clients are growing businesses that need a clear, focused plan rather than a huge retainer."],
  ["What does a project cost?", "It depends on scope. After a short discovery call we send a fixed proposal so there are no surprises."],
  ["Who owns the accounts and assets?", "You do. Ad accounts, analytics, domains and creative files stay in your name from day one."],
];

export default function Faq() {
  return (
    <section id="faq" className="tfi-section bg-paper">
      <div className="wrap">
        <div className="tfi-grid-2">
          <div className="tfi-reveal">
            <p className="tfi-eyebrow">FAQ</p>
            <h2 style={{ marginTop: ".75rem" }}>Questions we hear first</h2>
          </div>
          <div className="tfi-faq tfi-reveal">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
