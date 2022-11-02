import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

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
    </>
  );
}

function Card({ _id, name, affiliation, photoUrl }) {
  return (
    <div className={`${styles.card} card`}>
      <Link href={`/characters/id/${_id}`}>
        <Image
          loader={() => photoUrl}
          src={photoUrl}
          alt={name}
          width={240}
          height={240}
        />
      </Link>
      <h2>{name}</h2>
      <p>{affiliation}</p>
      <div className="bottom-area">
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
          </svg>
        </button>
      </div>
      <style jsx>
        {`
          .card {
            min-height: 30rem;
            display: flex;
            flex-direction: column;
          }

          .card:hover {
            color: inherit;
            border-color: inherit;
          }

          h2,
          p {
            cursor: default;
          }

          .bottom-area {
            flex-grow: 1;
            display: flex;
            align-items: flex-end;
          }

          .bottom-area button {
            background-color: transparent;
            border-style: none;
            cursor: pointer;
          }

          .bottom-area svg {
            width: 2rem;
            height: 2rem;
          }
        `}
      </style>
    </div>
  );
}
