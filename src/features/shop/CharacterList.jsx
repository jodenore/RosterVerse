import CharacterCard from "./CharacterCard";
import "./CharacterList.css";

const CharacterList = ({ characters, onAddToCart }) => {
  const renderCharacterList = () => {
    if (characters.length === 0) {
      return (
        <p className="character-list-empty">
          No Characters match your current filters.
        </p>
      );
    }

    return (
      <ul className="character-list" aria-label="Available characters">
        {characters.map((character) => (
          <li className="character-list-item" key={character.id}>
            <CharacterCard character={character} onAddToCart={onAddToCart} />
          </li>
        ))}
      </ul>
    );
  };

  return renderCharacterList();
};
export default CharacterList;
