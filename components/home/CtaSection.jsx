import { ctaSection } from "@/content/home-page";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-bg-overlay"></div>
      <div className="section-container">
        <h2 className="cta-title">{ctaSection.title}</h2>
        <p className="cta-subtitle">{ctaSection.subtitle}</p>
        <div className="spacer-30"></div>
        <a href="#pricing" className="btn-outline-white btn-large">
          {ctaSection.ctaLabel}
        </a>
      </div>
    </section>
  );
}
