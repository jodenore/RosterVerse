import Button from "react-bootstrap/Button";
import { ShoppingCart, Zap } from "lucide-react";

import RatingStars from "../../components/RatingStars";
import "./CharacterOverview.css";

const CharacterOverview = ({ character, onAddToCart }) => {
  return (
    <div className="character-overview">
      {/* info on selected avatars category and rarity*/}
      <header className="character-overview-header">
        <div className="character-labels">
          <span className="character-category">{character.category}</span>
          <span className={`character-rarity is-${character.rarity}`}>
            {character.rarity}
          </span>
        </div>

        <h1 className="character-details-name">{character.name}</h1>
        <p className="character-universe">{character.universe}</p>

        <RatingStars rating={character.starRating} size={18} />
      </header>

      {/* Background on said character */}
      <p className="character-description">{character.description}</p>

      {/* FM like Stats */}
      <dl className="character-stats">
        <div className="character-stat">
          <dt>Skill</dt>
          <dd>{character.skillScore}</dd>
        </div>

        <div className="character-stat">
          <dt>Silliness</dt>
          <dd>{character.silliness}</dd>
        </div>

        <div className="character-stat">
          <dt>Seriousness</dt>
          <dd>{character.seriousness}</dd>
        </div>
      </dl>

      {/* Roster ability */}
      <section className="character-skill">
        <p className="character-skill-label">Special skill</p>
        <h2 className="character-skill-name">{character.specialSkill.name}</h2>
        <p className="character-skill-description">
          {character.specialSkill.description}
        </p>
      </section>

      <div className="character-purchase">
        <p className="character-price">
          <Zap size={18} fill="currentColor" aria-hidden="true" />
          {character.priceCredits.toLocaleString()} CR
        </p>

        <Button
          type="button"
          className="character-cart-btn"
          onClick={() => onAddToCart(character.id)}
        >
          <ShoppingCart size={18} aria-hidden="true" />
          Add to cart
        </Button>
      </div>
    </div>
  );
};
export default CharacterOverview;
