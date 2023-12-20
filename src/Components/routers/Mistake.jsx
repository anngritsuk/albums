import { NavLink } from "react-router-dom";
import styles from "./Mistake.module.css"; 

export default function Error() {
  return (
    <div className={styles.pageError}>
      <div className={styles.firstLine}>404</div>
      <div className={styles.secondLine}>Страница не найдена</div>
      <div className={styles.thirdLine} style={{ display: "flex", gap: "1rem" }}>
        Перейти на страницу
        <NavLink className={styles.link} to="/users">
          Пользователи
        </NavLink>
      </div>
    </div>
  );
}
