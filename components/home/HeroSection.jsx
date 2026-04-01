import { heroContent, siteAssets } from "@/content/home-page";

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {heroContent.titleStart}
            <br />
            {heroContent.titleEnd}
          </h1>
          <p className="hero-subtitle">{heroContent.subtitle}</p>
          <div className="hero-cta">
            <a href="#pricing" className="btn-primary btn-large">
              {heroContent.ctaLabel}
            </a>
          </div>
          <div className="hero-guarantees">
            {heroContent.guarantees.map((guarantee) => (
              <p key={guarantee}>
                <span className="check-icon">&#10003;</span> {guarantee}
              </p>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <img
            src={siteAssets.heroBanner.src}
            alt={siteAssets.heroBanner.alt}
            width={siteAssets.heroBanner.width}
            height={siteAssets.heroBanner.height}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
