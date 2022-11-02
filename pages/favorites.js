import { useEffect, useState } from "react";
import Card from "../components/Card";
import styles from "@/styles/Home.module.css";
import { useFavorites } from "../src/store";

export default function Favorite() {
  const [characters, setCharacters] = useState([]);
  const ids = useFavorites((state) => state.ids);

  useEffect(() => {
    async function getCharacters() {
      const res = await fetch("/api/characters");
      const list = await res.json();
      return list.filter(({ _id }) => ids.includes(_id));
    }
    getCharacters().then(setCharacters);
  }, []);

  return (
    <>
      <h1 className={styles.title}>My favorites</h1>

      <div className={styles.grid}>
        {characters.map(({ _id, name, affiliation, photoUrl }) => (
          <Card
            _id={_id}
            name={name}
            affiliation={affiliation}
            photoUrl={photoUrl}
          />
        ))}
      </div>
    </>
  );
}
