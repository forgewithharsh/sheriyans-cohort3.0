import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div>
      <ToastContainer position="top-right" theme="dark" />
      <Navbar />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default MainLayout;
