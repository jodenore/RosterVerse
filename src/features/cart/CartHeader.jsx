import Button from "react-bootstrap/Button";
import { X } from "lucide-react";
import { Dialog } from "radix-ui";

const CartHeader = ({ cartCount }) => {
  // prefix character label
  const characterLabel = cartCount === 1 ? "character" : "characters";

  return (
    <header className="cart-panel-header">
      <div className="cart-panel-heading">
        <Dialog.Title className="cart-panel-title">Your Cart</Dialog.Title>

        <Dialog.Description className="cart-panel-description">
          {cartCount} {characterLabel} selected
        </Dialog.Description>
      </div>

      <Dialog.Close asChild>
        <Button
          type="button"
          variant="link"
          className="cart-close-btn"
          aria-label="Close cart"
        >
          <X size={20} aria-hidden="true" />
        </Button>
      </Dialog.Close>
    </header>
  );
};
export default CartHeader;
