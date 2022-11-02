import styles from "@/styles/components/Card.module.css";

export default function Hello() {
  return (
    <div className={styles.card}>
      <span>Welcome</span>
      <div>Hello from here!</div>
    </div>
  );
}
