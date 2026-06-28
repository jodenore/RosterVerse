import { useState } from "react";
import Button from "react-bootstrap/Button";
import { ImageOff, Minus, Plus, Trash2, Zap } from "lucide-react";

const CartItem = ({ item, onDecrease, onIncrease, onRemove }) => {
  // destructuring
  const { character, quantity, subtotal } = item;
  const coverImage = character.images[0];
  const [failedImage, setFailedImage] = useState(null);

  // show placeholder if artwork is not available
  const imageUnavailable = !coverImage || failedImage === coverImage;

  // turn cart total to be readable credit value.
  const formattedSubtotal = new Intl.NumberFormat("en-US").format(subtotal);

  return (
    <li className="cart-item">
      <div className="cart-item-media">
        {imageUnavailable ? (
          <ImageOff size={24} aria-label="Artwork unavailable" />
        ) : (
          <img
            src={coverImage}
            alt={character.name}
            className="cart-item-image"
            onError={() => setFailedImage(coverImage)}
          />
        )}
      </div>
      <div className="cart-item-copy">
        <p className="cart-item-name">{character.name}</p>
        <p className="cart-item-rarity">{character.rarity}</p>
        <p className="cart-item-subtotal">
          <Zap size={14} aria-hidden="true" />
          <span>{formattedSubtotal}</span>
        </p>
      </div>

      <div
        className="cart-item-quantity"
        aria-label={`${character.name} quantity`}
      >
        <Button
          type="button"
          variant="outline-secondary"
          className="cart-quantity-btn"
          aria-label={`Remove one ${character.name}`}
          onClick={() => onDecrease(character.id)}
        >
          <Minus size={14} aria-hidden="true" />
        </Button>

        <span className="cart-quantity-value">{quantity}</span>

        <Button
          type="button"
          variant="outline-secondary"
          className="cart-quantity-btn"
          aria-label={`Add another ${character.name}`}
          onClick={() => onIncrease(character.id)}
        >
          <Plus size={14} aria-hidden="true" />
        </Button>
        {/* Remove Item */}
        <Button
          type="button"
          variant="link"
          className="cart-remove-btn"
          aria-label={`Remove ${character.name} from cart`}
          onClick={() => onRemove(character.id)}
        >
          <Trash2 size={17} aria-hidden="true" />
        </Button>
      </div>
    </li>
  );
};
export default CartItem;
