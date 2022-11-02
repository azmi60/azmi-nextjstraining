import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Card from "../../components/Card"

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("/api/characters")
      .then((res) => res.json())
      .then(setCharacters);
  }, []);

  return (
    <>
      <h1 className={styles.title}>Avatar List</h1>

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
