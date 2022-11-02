import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.css";

export default function CharacterPage() {
  const router = useRouter();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (!router.isReady) return;

    fetch(`/api/characters/${router.query.id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [router.isReady]);

  return (
    character && (
      <>
        <h1 className={styles.title}>{character.name}</h1>
        <Image
          loader={() => character.photoUrl}
          src={character.photoUrl}
          alt={character.name}
          width={300}
          height={300}
        />
        <p className={styles.description}>{character.affiliation}</p>
      </>
    )
  );
}
