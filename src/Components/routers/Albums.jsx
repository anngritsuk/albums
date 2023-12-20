import { useCallback } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import img from "./img/img.jpg";
import styles from "./Albums.module.css";
export const loader = async () => {
  const albums = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  ).then((r) => r.json());
  return { albums };
};

export default function Albums() {
  const navigate = useNavigate();
  
  const goToPhoto = useCallback(
    (id) => {
      return () => navigate(`/album/${id}`);
    },
    [navigate]
  );

  const { albums } = useLoaderData();
  
  return (
    <div className={styles.pageAlbums}>
      {albums.map((photo) => (
        <div key={photo.id} onClick={goToPhoto(photo.id)} className={styles.albumItem}>
          <img src={img} className={styles.imgPhoto} alt="Album cover" />
          {photo.title}
        </div>
      ))}
    </div>
  );
}
