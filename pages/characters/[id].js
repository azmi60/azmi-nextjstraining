import Image from "next/image";
import styles from "@/styles/Home.module.css";

export async function getStaticPaths() {
  const res = await fetch(
    "https://last-airbender-api.herokuapp.com/api/v1/characters/avatar"
  );
  const characters = await res.json();
  const paths = characters.map(({ _id: id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${params.id}`
  );
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
}

export default function Home({ character }) {
  return (
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
  );
}
