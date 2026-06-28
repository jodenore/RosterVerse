import { characters } from "./characters";

// Categories currently supported by the shop.
const categories = [
  ...new Set(characters.map((character) => character.category)),
];
export const categoryOptions = [
  { value: "all", label: "All categories" },
  ...categories.map((category) => ({ value: category, label: category })),
];

// Roles currently supported by the shop.

const roles = [...new Set(characters.map((character) => character.role))];

export const roleOptions = [
  { value: "all", label: "All roles" },
  ...roles.map((role) => ({ value: role, label: role })),
];

// Universes currently supported by the shop.

const universes = [
  ...new Set(characters.map((character) => character.universe)),
];
export const universeOptions = [
  { value: "all", label: "All universes" },
  ...universes.map((universe) => {
    return { value: universe, label: universe };
  }),
];

export const sortOptions = [
  { value: "starRating", label: "Star rating" },
  { value: "skillScore", label: "Skill" },
  { value: "silliness", label: "Silliness" },
  { value: "seriousness", label: "Seriousness" },
];
