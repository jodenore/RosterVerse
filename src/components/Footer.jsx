import Container from "react-bootstrap/Container";
import { Crown } from "lucide-react";
import { Link } from "react-router";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container className="site-footer-inner">
        <div className="site-footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">
                <Crown size={18} aria-hidden="true" />
              </span>
              <span>Rosterverse</span>
            </Link>

            <p className="footer-description">
              Recruit across every universe. Spend wisely. Build the roster
              nobody else would dare to draft.
            </p>
          </div>

          <nav className="footer-navigation" aria-label="Footer navigation">
            <p className="footer-navigation-title">Explore</p>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Character shop</Link>
              </li>
              <li>
                <Link to="/roster">My roster</Link>
              </li>
            </ul>
          </nav>

          {/* <div className="footer-note">
            <Zap size={20} fill="currentColor" aria-hidden="true" />
            <p>
              Credits are limited.
              <strong>Legendary choices are not.</strong>
            </p>
          </div> */}
        </div>

        <div className="site-footer-bottom">
          <p>© {currentYear} Rosterverse. Built for impossible lineups.</p>
          <p>Every universe. One roster.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
