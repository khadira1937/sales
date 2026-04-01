import { footerContent, siteAssets } from "@/content/home-page";

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col footer-logo-col">
            <img
              src={siteAssets.logo.src}
              alt={siteAssets.logo.alt}
              width={siteAssets.logo.width}
              height={siteAssets.logo.height}
              loading="lazy"
            />
            <p className="footer-text">
              <strong>Brand Description:</strong> {footerContent.brandDescription}
            </p>
          </div>
          <div className="footer-col">
            <p className="footer-text">
              <strong>Address:</strong> {footerContent.address}
            </p>
          </div>
          <div className="footer-col">
            <p className="footer-text">
              <strong>Email:</strong> {footerContent.email}
            </p>
            <p className="footer-text">
              <strong>Phone:</strong> {footerContent.phone}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
