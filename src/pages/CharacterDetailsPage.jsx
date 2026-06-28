import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router";
import { characters } from "../data/characters";
import NotFoundPage from "./NotFoundPage";
import CharacterOverview from "../features/characters/CharacterOverview";
import { ArrowLeft } from "lucide-react";
import CharacterGallery from "../features/characters/CharacterGallery";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import "./CharacterDetails.css";
const CharacterDetailsPage = () => {
  const { characterSlug } = useParams();
  const dispatch = useDispatch();
  // Find Character using params iD

  const character = characters.find(
    (character) => character.slug === characterSlug,
  );

  if (!character) {
    return <NotFoundPage />;
  }

  function handleAddToCart(characterId) {
    dispatch(addToCart(characterId));
  }

  return (
    <section className="character-details-page">
      <Container>
        <Link to={"/shop"} className="character-back-link">
          <ArrowLeft size={18} aria-hidden="true" />
          Back to shop
        </Link>

        <div className="character-details-layout">
          {character.images[0] && (
            <CharacterGallery
              images={character.images}
              characterName={character.name}
            />
          )}

          <CharacterOverview
            character={character}
            onAddToCart={handleAddToCart}
          />
        </div>
      </Container>
    </section>
  );
};
export default CharacterDetailsPage;
