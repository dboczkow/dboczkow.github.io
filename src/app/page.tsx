import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>
            Site is under construction <code>🚧</code>.
          </li>
        </ol>

      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
