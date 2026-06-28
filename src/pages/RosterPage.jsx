import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Shield, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

import RosterList from "../features/roster/RosterList";
import {
  getRosterCharacters,
  selectRosterCount,
} from "../features/roster/rosterSlice";
// import "./RosterPage.css";

const RosterPage = () => {
  const rosterCharacters = useSelector(getRosterCharacters);
  const rosterCount = useSelector(selectRosterCount);
  const rosterIsEmpty = rosterCharacters.length === 0;

  return (
    <section className="roster-page">
      <Container>
        <header className="roster-page-header">
          <div>
            <p className="roster-page-kicker">Your collection</p>
            <h1 className="roster-page-title" id="roster-page-title">
              My Roster
            </h1>
            <p className="roster-page-description">
              Every character you recruit appears here with their current
              quantity and roster ability.
            </p>
          </div>

          {!rosterIsEmpty && (
            <p className="roster-page-count">
              <Shield size={18} />
              <strong>{rosterCount}</strong>
              recruited
            </p>
          )}
        </header>

        {rosterIsEmpty ? (
          <div className="roster-empty">
            <Users size={38} />
            <h2>Your roster is waiting</h2>
            <p>Recruit a character from the shop to begin your lineup.</p>

            <Button as={Link} to="/shop" className="roster-shop-btn">
              Explore characters
            </Button>
          </div>
        ) : (
          <RosterList rosterCharacters={rosterCharacters} />
        )}
      </Container>
    </section>
  );
};

export default RosterPage;
