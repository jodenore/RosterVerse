import RosterCard from "./RosterCard";

const RosterList = ({ rosterCharacters }) => {
  return (
    <ul className="roster-list" aria-label="Recruited characters">
      {rosterCharacters.map(({ character, quantity }) => (
        <li className="roster-list-item" key={character.id}>
          <RosterCard character={character} quantity={quantity} />
        </li>
      ))}
    </ul>
  );
};

export default RosterList;
