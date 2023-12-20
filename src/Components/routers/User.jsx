import { Suspense } from "react";
import { Await, useLoaderData, Link } from "react-router-dom";
import img from "./img/img.jpg";
import styles from "./User.module.css"; 
export const loader = ({ params: { id } }) => {
  const userPromise = new Promise((resolve) => {
    setTimeout(async () => {
      const getUser = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      ).then((r) => r.json());

      const getAlbum = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${id}`
      ).then((r) => r.json());

      const users = [getUser, getAlbum];
      resolve(users);
    }, 10);
  });

  return { userPromise };
};

export default function User() {
  const { userPromise } = useLoaderData();

  return (
    <Suspense fallback={<div className={styles.pageUser}>Loading...</div>}>
      <Await resolve={userPromise}>
        {(users) => {
          return (
            <div className={styles.pageUser}>
              <div>
                <div className={styles.nameUser}>{users[0].name}</div>
                <div>Username: {users[0].username}</div>
                <div>Email: {users[0].email}</div>
                <div>Phone: {users[0].phone}</div>
                <div>Site: {users[0].website}</div>
              </div>
              <div>
                <div className={styles.albumUser}>Albums</div>
                {users[1].map((album) => (
                  <Link
                    key={album.id}
                    className={styles.albumsUser}
                    to={`/album/${album.id}`}
                  >
                    <div>
                      <img src={img} className={styles.imgPhoto} alt="Album cover" />
                      {album.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}
