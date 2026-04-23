import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer id="footer" className="footer-container" aria-label="Site footer">
        {/* Section: Links */}
        <section className="footer-links">
          <div className="footer-inner-container">
            {/* Grid row */}
            <div className="footer-row">
              {/* Grid column */}
              <div className="footer-column">
                <h6 className="footer-heading">
                  <i className="fas fa-gem footer-icon"></i>Elegante Bespoke
                </h6>
                <p className="footer-description">
                  Fitted bespoke carpentry, media walls, fitted furniture, and Venetian plaster
                  finishes for homes and businesses.
                </p>
              </div>
  
              {/* Grid column */}
              <div className="footer-column">
                <h6 className="footer-heading">Services</h6>
                <p>
                  <Link to="/services" className="footer-link">Media walls</Link>
                </p>
                <p>
                  <Link to="/services" className="footer-link">Bespoke carpentry</Link>
                </p>
                <p>
                  <Link to="/services" className="footer-link">Fitted furniture</Link>
                </p>
              </div>
  
              {/* Grid column */}
              <div className="footer-column">
                <h6 className="footer-heading">Contact</h6>
                <p><i className="fas fa-home footer-icon"></i> Nottingham, England</p>
                <a className="footer-link" href="mailto:elegantefinishes@outlook.com" aria-label="Email Elegante Bespoke">
                  <i className="fas fa-envelope footer-icon"></i> elegantefinishes@outlook.com
                </a>
                <p><i className="fas fa-phone footer-icon"></i> 07954 176 362</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Social Media and Copyright */}
        <div className="footer-bottom">
          <section className="footer-social-media">
            <a className="social-btn" href="https://www.facebook.com/george.nicholson.7921" target="_blank" rel="noreferrer" role="button" aria-label="Visit Elegante Bespoke on Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="social-btn" href="https://www.instagram.com/xgeorgenicholson/" target="_blank" rel="noreferrer" role="button" aria-label="Visit Elegante Bespoke on Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <div className="social-text">
              <span>Get connected with us on social networks:</span>
            </div>
          </section>
        </div>
      </footer>
    );
  };
  
  export default Footer;
