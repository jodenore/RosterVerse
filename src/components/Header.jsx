import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { Crown, Moon, Zap } from "lucide-react";
import "./Header.css";
import Cart from "../features/cart/Cart";
const Header = () => {
  const availableCredits = useSelector(
    (state) => state.roster.availableCredits,
  );

  // format credits for transactions
  const formattedCredits = new Intl.NumberFormat("en-us").format(
    availableCredits,
  );

  return (
    <header className="site-header">
      <Navbar expand="lg" className="site-navbar">
        <Container className="site-header-inner">
          <Navbar.Brand as={NavLink} to="/" className="site-logo">
            <span className="site-logo-mark">
              <Crown size={18} />
            </span>
            <span>RosterVerse</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="primary-navigation">
            <Nav className="site-navigation">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/shop">
                Shop
              </Nav.Link>

              <Nav.Link as={NavLink} to="/roster">
                My Roster
              </Nav.Link>
            </Nav>

            <div className="header-actions">
              <div className="credit-balance">
                <Zap size={16} aria-hidden="true" />
                <span>{formattedCredits} CR</span>
              </div>

              <Cart />

              <Button
                type="button"
                variant="outline-secondary"
                className="theme-toggle"
                aria-label="Switch to dark mode"
              >
                <Moon size={18} aria-hidden="true" />
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
