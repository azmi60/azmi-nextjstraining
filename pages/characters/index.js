import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("/api/characters")
      .then((res) => res.json())
      .then(setCharacters);
  }, []);

  return (
    <Layout>
      <h1 className={styles.title}>Avatar List</h1>

      <p className={styles.description}></p>

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
    </Layout>
  );
}

function Card({ _id, name, affiliation, photoUrl }) {
  return (
    <Link href={`/characters/id/${_id}`} className={styles.card}>
      {/* <div */}
      {/*   style={{ position: "relative", width: "100%", paddingBottom: "70%" }} */}
      {/* > */}
      {/*   <Image */}
      {/*     loader={() => photoUrl} */}
      {/*     src={photoUrl} */}
      {/*     alt={name} */}
      {/*     layout="fill" */}
      {/*     objectFit="contain" */}
      {/*     sizes="260px" */}
      {/*   /> */}
      {/* </div> */}
      <Image
        loader={() => photoUrl}
        src={photoUrl}
        alt={name}
        width={240}
        height={240}
      />
      <h2>{name}</h2>
      <p>{affiliation}</p>
    </Link>
  );
}
