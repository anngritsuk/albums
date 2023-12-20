import { useCallback, Suspense } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import styles from "./Users.module.css"
export const loader = async () => {
  const users = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (r) => r.json()
  );
  return { users };
};

export default function Users() {
  const navigate = useNavigate();
  const goToUser = useCallback(
    (id) => () => navigate(`/users/${id}`),
    [navigate]
  );

  const { users } = useLoaderData();

  return (
    <Suspense fallback={<div className={styles.pageUser}>Loading...</div>}>
      <div className={styles.pageUsers}>
        {users.map((user) => (
          <div key={user.id} onClick={goToUser(user.id)}>
            {user.name}
          </div>
        ))}
      </div>
    </Suspense>
  );
}
