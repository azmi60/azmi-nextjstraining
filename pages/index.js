import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

const Hello = dynamic(() => import("@/components/Hello"), {
  loading: () => (
    <div
      className="pulse"
      style={{
        marginTop: "1rem",
        width: "100%",
        height: "20rem",
        backgroundColor: "#111",
        borderRadius: "1rem",
      }}
    />
  ),
  ssr: false,
});

export async function getStaticProps() {
  const res = await fetch(
    "https://last-airbender-api.herokuapp.com/api/v1/characters/avatar"
  );
  const characters = await res.json();

  return {
    props: {
      characters,
    },
  };
}

export default function Home({ characters }) {
  const [reqHello, setReqHello] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "4rem",
          minHeight: "60vh",
        }}
      >
        <section style={{ gridColumn: 2 }}>
          <h1 className={styles.title}>Avatar List</h1>

          {/* {characters.length === 0 && <LoadingSkeleton />} */}

          <ul className="list">
            {characters.map(({ _id, name }) => (
              <li key={_id}>
                <Link href={`/characters/${name}`}>{name}</Link>
              </li>
            ))}

            <style jsx>{`
              .list {
                list-style-type: none;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                padding: 0px;
                text-align: center;
              }
            `}</style>
          </ul>
        </section>

        <div>
          <button onClick={() => setReqHello((b) => !b)}>Request Hello</button>
          {reqHello ? <Hello /> : null}
        </div>
      </div>
    </>
  );
}

function LoadingSkeleton() {
  return (
    <div className="container">
      {new Array(5).fill(null).map((_, i) => (
        <div
          style={{
            backgroundColor: "#222",
            width: "14rem",
            height: "1.4rem",
            borderRadius: "9999px",
          }}
          className="pulse"
          key={i}
        />
      ))}
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            margin-top: 2rem;
          }
        `}
      </style>
    </div>
  );
}
