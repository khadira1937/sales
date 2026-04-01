import { whyUsSection } from "@/content/home-page";

export default function WhyUsSection() {
  return (
    <section className="why-us-section" id="why-us">
      <div className="section-container">
        <h2 className="section-title white">{whyUsSection.title}</h2>
        <div className="spacer-50"></div>
        <div className="features-grid">
          {whyUsSection.features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`} aria-hidden="true"></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
