import Button from "react-bootstrap/Button";
import { RotateCcw } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import ShopSelect from "./ShopSelect";
import {
  resetShopControls,
  selectShopFilters,
  selectShopSortBy,
  setCategoryFilter,
  setRoleFilter,
  setSortBy,
  setUniverseFilter,
} from "./shopSlice";
import "./ShopFilters.css";
import {
  categoryOptions,
  roleOptions,
  sortOptions,
  universeOptions,
} from "../../data/shopOptions";

const ShopFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectShopFilters);
  const sortBy = useSelector(selectShopSortBy);

  // Check whether the form has been changed or not
  const hasActiveControls =
    Object.values(filters).some((value) => value !== "all") ||
    sortBy !== "starRating";

  return (
    <div className="shop-controls">
      {/* Filter characters by category. */}
      <ShopSelect
        controlId="category-filter"
        label="Category"
        value={filters.category}
        options={categoryOptions}
        onChange={(value) => dispatch(setCategoryFilter(value))}
      />

      {/* Filter characters by role. */}
      <ShopSelect
        controlId="role-filter"
        label="Role"
        value={filters.role}
        options={roleOptions}
        onChange={(value) => dispatch(setRoleFilter(value))}
      />

      {/* Filter characters by universe. */}
      <ShopSelect
        controlId="universe-filter"
        label="Universe"
        value={filters.universe}
        options={universeOptions}
        onChange={(value) => dispatch(setUniverseFilter(value))}
      />

      {/* Sort the resulting character list. */}
      <ShopSelect
        controlId="shop-sort"
        label="Sort by"
        value={sortBy}
        options={sortOptions}
        onChange={(value) => dispatch(setSortBy(value))}
      />
      {/* Restore all controls to their defaults. */}
      <Button
        type="button"
        variant="outline-secondary"
        className="shop-reset-btn"
        disabled={!hasActiveControls}
        onClick={() => dispatch(resetShopControls())}
      >
        <RotateCcw size={16} aria-hidden="true" />
        Reset
      </Button>
    </div>
  );
};

export default ShopFilters;
