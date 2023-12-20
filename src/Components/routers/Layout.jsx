import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.page}>
      <header className={styles.headerLayout} >
        <NavLink
          to="/albums"
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          Albums
        </NavLink>
        <NavLink
          to="/users"
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          Users
        </NavLink>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <hr></hr>
        <div className={styles.creater}>Created by: Gritsuk Anna</div>
        <div className={styles.bsu}>BSU 2023</div>
      </footer>
    </div>
  );
}
