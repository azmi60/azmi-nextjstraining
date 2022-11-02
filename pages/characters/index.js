import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Card from "../../components/Card";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/characters")
      .then((res) => res.json())
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1 className={styles.title}>Avatar List</h1>
      <div className={styles.grid}>
        {loading && <LoadingSkeleton />}
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

function LoadingSkeleton() {
  return (
    <>
      <div
        className="pulse-card"
        style={{
          width: "18.75rem",
          height: "20rem",
          margin: "1rem",
        }}
      />
      <div
        className="pulse-card"
        style={{
          width: "18.75rem",
          height: "20rem",
          margin: "1rem",
        }}
      />
    </>
  );
}
