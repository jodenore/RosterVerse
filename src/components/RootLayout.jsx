import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />
      <main className="main-section">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
export default RootLayout;
