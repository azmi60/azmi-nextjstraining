import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

export default function Home() {
  const { name } = useRouter().query;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(
      `https://last-airbender-api.herokuapp.com/api/v1/characters?name=${name}`
    )
      .then((res) => res.json())
      .then(([character]) => setCharacter(character));
  }, []);

  return (
    character && (
      <div>
        <h1 className={styles.title}>{character.name}</h1>
        <Image
          loader={() => character.photoUrl}
          src={character.photoUrl}
          alt={character.name}
          width={300}
          height={300}
        />
        <h2>Affiliation:</h2>
        <p className={styles.description}>{character.affiliation}</p>
        <h2>Enemies:</h2>
        <ul>
          {character.enemies.map((enemy) => (
            <li>{enemy}</li>
          ))}
        </ul>
      </div>
    )
  );
}
