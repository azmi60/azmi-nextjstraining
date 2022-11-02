import styles from "../styles/components/Card.module.css";
import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "../src/store";

export default function Card({ _id, name, affiliation, photoUrl }) {
  return (
    <div className={styles.card}>
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
      <div className={styles['bottom-area']}>
        <FavoriteButton id={_id} />
      </div>
    </div>
  );
}

function FavoriteButton({ id }) {
  const { ids, add, remove } = useFavorites();
  const added = ids.includes(id);
  const handleClick = () => (!added ? add(id) : remove(id));

  return (
    <button
      type="button"
      onClick={handleClick}
      className={added && styles.added}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
      </svg>
    </button>
  );
}
