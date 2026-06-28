import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import RosterPage from "./pages/RosterPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";

import NotFoundPage from "./pages/NotFoundPage";
import RootLayout from "./components/RootLayout";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route
          path="characters/:characterSlug"
          element={<CharacterDetailsPage />}
        />
        <Route path="roster" element={<RosterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
