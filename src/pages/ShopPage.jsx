import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../features/cart/cartSlice";
import CharacterList from "../features/shop/CharacterList";
import { selectVisibleCharacters } from "../features/shop/shopSlice";
import "./ShopPage.css";
import ShopFilters from "../features/shop/ShopFilters";

function ShopPage() {
  const dispatch = useDispatch();
  const visibleCharacters = useSelector(selectVisibleCharacters);

  function handleAddToCart(characterId) {
    dispatch(addToCart(characterId));
  }

  return (
    <section className="shop-page">
      <Container>
        <header className="shop-header">
          <p className="shop-kicker">Spend wisely</p>
          <h1 className="shop-title" id="shop-title">
            The Shop
          </h1>
          <p className="shop-description">
            Collect characters from across every universe and build your
            impossible roster.
          </p>
        </header>
        <ShopFilters />

        <CharacterList
          characters={visibleCharacters}
          onAddToCart={handleAddToCart}
        />
      </Container>
    </section>
  );
}

export default ShopPage;
