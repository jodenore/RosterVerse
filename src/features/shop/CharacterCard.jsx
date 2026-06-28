import { useState } from "react";
import Button from "react-bootstrap/Button";
import { ImageOff, Zap } from "lucide-react";
import { Link } from "react-router";

import "./CharacterCard.css";
import RatingStars from "../../components/RatingStars";

const CharacterCard = ({ character, onAddToCart }) => {
  const coverImage = character.images[0];
  const [failedImage, setFailedImage] = useState(null);

  // return false if first character image exists
  const imageUnavailable = !coverImage || failedImage === coverImage;

  const formattedPrice = new Intl.NumberFormat("en-us").format(
    character.priceCredits,
  );

  return (
    <article className={`character-card character-card--${character.rarity}`}>
      <Link
        to={`/characters/${character.slug}`}
        className="character-card-media"
      >
        {imageUnavailable ? (
          <div
            className="character-image-placeholder"
            role="img"
            aria-label={`${character.name} artwork unavailable`}
          >
            <ImageOff size={32} aria-hidden="true" />
            <span>{character.name}</span>
          </div>
        ) : (
          <img
            src={coverImage}
            alt={character.name}
            className="character-card-image"
            loading="lazy"
            onError={() => setFailedImage(coverImage)}
          />
        )}

        <span className="character-rarity">{character.rarity}</span>

        <span className="character-rating">
          <RatingStars rating={character.starRating} />
        </span>
      </Link>

      <div className="character-card-body">
        <p className="character-category">{character.category}</p>

        <h3 className="character-name">
          <Link to={`/characters/${character.slug}`}>{character.name}</Link>
        </h3>

        <p className="character-universe">{character.universe}</p>

        <p className="character-skill">{character.specialSkill.name}</p>

        <div className="character-card-footer">
          <p className="character-price">
            <Zap size={15} aria-hidden="true" />
            <span>{formattedPrice}</span>
          </p>

          <Button
            type="button"
            className="character-add-btn"
            onClick={() => onAddToCart(character.id)}
          >
            Quick Add
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CharacterCard;
