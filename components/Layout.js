import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/Layout.module.css'

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/">Homepage</Link>
        </li>
        <li>
          <Link href="/characters">Characters</Link>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}

export default Layout;
