import Button from "react-bootstrap/Button";
import { Trash2, Zap } from "lucide-react";

const CartSummary = ({ total, canAfford, isEmpty, onClear, onCheckout }) => {
  const formattedTotal = new Intl.NumberFormat("en-us").format(total);

  return (
    <footer className="cart-panel-footer">
      <div className="cart-total">
        <span>Total</span>

        <strong>
          <Zap size={16} aria-hidden="true" />
          {formattedTotal}
        </strong>
      </div>

      {!canAfford && (
        <p className="cart-warning" role="alert">
          You do not have enough credits for this cart.
        </p>
      )}

      {/* Purchase */}
      <Button
        type="button"
        className="cart-checkout-btn"
        disabled={isEmpty || !canAfford}
        onClick={onCheckout}
      >
        Complete Checkout
      </Button>

      <Button
        type="button"
        variant="outline-secondary"
        className="cart-clear-btn"
        disabled={isEmpty}
        onClick={onClear}
      >
        <Trash2 size={16} aria-hidden="true" />
        Clear cart
      </Button>
    </footer>
  );
};
export default CartSummary;
