import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router";

import { characters } from "../data/characters";
import "./HomePage.css";

const HomePage = () => {
  const featuredCharacter =
    characters.find(
      (character) => character.slug === "shai-gilgeous-alexander",
    ) ?? characters[0];

  return (
    <div className="home-page">
      <section className="home-hero">
        <img
          src={featuredCharacter.images[0]}
          alt={`${featuredCharacter.name} featured roster pick`}
          className="home-hero-image"
        />

        <Container className="home-hero-inner">
          <div className="home-hero-content">
            <h1 className="home-hero-title" id="home-hero-title">
              Build your impossible roster.
            </h1>

            <p className="home-hero-copy">
              Draft legends, heroes, villains, and rising stars from across
              every world. Build bold combinations and create a roster that
              could never exist anywhere else.
            </p>

            <div className="home-hero-actions">
              <Button as={Link} to="/shop" className="home-hero-primary">
                Explore the shop
                <ArrowRight size={18} />
              </Button>

              <Button
                as={Link}
                to="/roster"
                variant="outline-light"
                className="home-hero-secondary"
              >
                <Users size={18} a />
                View my roster
              </Button>
            </div>

            {/* <ul className="home-hero-stats">
              <li>
                <strong>{characters.length}</strong>
                <span>characters</span>
              </li>
              <li>
                <strong>5</strong>
                <span>worlds collide</span>
              </li>
              <li>
                <strong>
                  <Zap size={17} fill="currentColor" />
                  CR
                </strong>
                <span>strategy matters</span>
              </li>
            </ul> */}
          </div>
        </Container>

        {/* <p className="home-hero-featured">
          Featured pick
          <strong>{featuredCharacter.name}</strong>
          <span>{featuredCharacter.specialSkill.name}</span>
        </p> */}
      </section>
    </div>
  );
};

export default HomePage;
