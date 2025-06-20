import Logo from "./Logo.jsx";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <Footer />
    </div>
  );
}
