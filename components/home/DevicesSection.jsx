import { devicesSection, siteAssets } from "@/content/home-page";

export default function DevicesSection() {
  return (
    <section className="devices-section" id="devices">
      <div className="section-container">
        <div className="devices-grid">
          <div className="devices-images">
            <div className="devices-media-stage">
              <img
                src={siteAssets.devicesMain.src}
                alt={siteAssets.devicesMain.alt}
                width={siteAssets.devicesMain.width}
                height={siteAssets.devicesMain.height}
                loading="lazy"
                className="devices-img-main"
              />
            </div>
            <div className="devices-logos-strip">
              <img
                src={siteAssets.devicesLogos.src}
                alt={siteAssets.devicesLogos.alt}
                width={siteAssets.devicesLogos.width}
                height={siteAssets.devicesLogos.height}
                loading="lazy"
                className="devices-logos-image"
              />
            </div>
          </div>
          <div className="devices-text">
            <h2 className="devices-title">
              {devicesSection.title}
              <br />
              <span className="devices-accent">{devicesSection.accent}</span>
            </h2>
            <div className="spacer-20"></div>
            <p className="devices-desc">{devicesSection.description}</p>
            <div className="spacer-30"></div>
            <a href="#faq" className="btn-primary btn-large">
              {devicesSection.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
