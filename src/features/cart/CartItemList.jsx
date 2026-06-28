import { ShoppingCart } from "lucide-react";
import CartItem from "./CartItem";

const CartItemList = ({ items, onIncrease, onDecrease, onRemove }) => {
  const renderItemList = () => {
    if (items.length === 0) {
      return (
        <div className="cart-panel-content">
          <div className="cart-empty">
            <ShoppingCart size={30} />
            <p>Your cart is empty.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="cart-panel-content">
        <ul className="cart-items">
          {items.map((item) => (
            <CartItem
              item={item}
              key={item.character.id}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))}
        </ul>
      </div>
    );
  };

  return renderItemList();
};
export default CartItemList;
