import { useState } from "react";
import { ImageOff, Sparkles } from "lucide-react";
import { Link } from "react-router";

import RatingStars from "../../components/RatingStars";
import "./RosterCard.css";

const RosterCard = ({ character, quantity }) => {
  const coverImage = character.images[0];
  const [failedImage, setFailedImage] = useState(false);
  const formattedRole = character.role.replaceAll("-", " ");
  const imageUnavailable = !coverImage || failedImage;

  return (
    <article className={`roster-card roster-card--${character.rarity}`}>
      <Link to={`/characters/${character.slug}`} className="roster-card-media">
        {imageUnavailable ? (
          <span className="roster-card-placeholder" role="img">
            <ImageOff size={32} />
          </span>
        ) : (
          <img
            src={coverImage}
            alt={character.name}
            className="roster-card-image"
            loading="lazy"
            onError={() => setFailedImage(true)}
          />
        )}

        <span className="roster-card-rarity">{character.rarity}</span>
        <span className="roster-card-quantity">×{quantity}</span>
      </Link>

      <div className="roster-card-body">
        <p className="roster-card-role">
          {character.category} · {formattedRole}
        </p>

        <h2 className="roster-card-name">
          <Link to={`/characters/${character.slug}`}>{character.name}</Link>
        </h2>

        <p className="roster-card-universe">{character.universe}</p>

        <div className="roster-card-rating">
          <RatingStars rating={character.starRating} />
          <span>{character.starRating}</span>
        </div>

        <div className="roster-card-skill">
          <Sparkles size={17} />
          <div>
            <p>{character.specialSkill.name}</p>
            <span>{character.specialSkill.description}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RosterCard;
