import Button from "react-bootstrap/Button";
import { Dialog } from "radix-ui";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  clearCart,
  decreaseCartQuantity,
  removeFromCart,
  selectCartCount,
  selectCartEntries,
  selectCartItems,
  selectCartTotal,
} from "./cartSlice";
import "./Cart.css";
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";
import {
  purchaseCharacters,
  selectAvailableCredits,
} from "../roster/rosterSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartEntries = useSelector(selectCartEntries);
  const availableCredits = useSelector(selectAvailableCredits);

  const cartIsEmpty = cartItems.length === 0;
  const canAffordCart = cartTotal <= availableCredits;

  function handleCheckout() {
    if (cartIsEmpty || !canAffordCart) return;

    dispatch(
      purchaseCharacters({
        entries: cartEntries,
        total: cartTotal,
      }),
    );

    dispatch(clearCart());
  }

  // increase quantity of character in cart
  function handleIncrease(characterId) {
    dispatch(addToCart(characterId));
  }

  // decrease quantity of character in cart
  function handleDecrease(characterId) {
    dispatch(decreaseCartQuantity(characterId));
  }

  // Remove character from cart
  function handleRemove(characterId) {
    dispatch(removeFromCart(characterId));
  }

  function handleClear() {
    dispatch(clearCart());
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          type="button"
          variant="outline-secondary"
          className="cart-trigger"
          aria-label="Open cart"
        >
          <ShoppingCart size={18} aria-hidden="true" />
          <span className="cart-count">{cartCount}</span>
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="cart-overlay" />

        <Dialog.Content className="cart-panel">
          <CartHeader cartCount={cartCount} />

          <CartItemList
            items={cartItems}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
          />

          <CartSummary
            total={cartTotal}
            canAfford={canAffordCart}
            isEmpty={cartIsEmpty}
            onClear={handleClear}
            onCheckout={handleCheckout}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default Cart;
