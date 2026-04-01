import { providerSection } from "@/content/home-page";

export default function ProviderSection() {
  return (
    <section className="provider-section" id="provider">
      <div className="section-container">
        <div className="provider-grid">
          <div className="provider-text">
            <h2 className="provider-title">
              {providerSection.titleStart}
              <br />
              {providerSection.titleEnd}
            </h2>
            <p className="provider-desc">{providerSection.description}</p>
          </div>
          <div className="provider-features">
            <div className="features-box">
              <ul className="feature-list">
                {providerSection.features.map((feature) => (
                  <li key={feature}>
                    <i className="fas fa-caret-square-right" aria-hidden="true"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
