import { NavLink } from "react-router-dom";
import "./style.css";

export default function Error() {
  return (
    <div className="page-error">
      <div className="first-line">404</div>
      <div className="second-line">Страница не найдена</div>
      <div className="third-line" style={{ display: "flex", gap: "1rem" }}>
        Перейти на страницу
        <NavLink id="link" to="/users">
          Пользователи
        </NavLink>
      </div>
    </div>
  );
}
