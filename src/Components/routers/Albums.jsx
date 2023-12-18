import { useCallback } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import img from "./img/img.jpg";
import "./style.css";

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
    <div className="page-albums">
      {albums.map((photo) => (
        <div key={photo.id} onClick={goToPhoto(photo.id)}>
          <img src={img} className="img-photo"></img>
          {photo.title}
        </div>
      ))}
    </div>
  );
}
