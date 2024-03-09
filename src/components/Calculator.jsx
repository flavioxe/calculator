import styles from "./Calculator.module.scss";

export function Caulculator() {
  return (
    <>
      <section className={`${styles.inputWrapper} d-flex align-items-center`}>
        <aside>
          <p className={styles.inputText}>Type the first number:</p>
          <input type="number" placeholder="Type here" />
        </aside>

        <aside>
          <p className={styles.inputText}>Type the second number:</p>
          <input type="number" placeholder="Type here" />
        </aside>
      </section>

      <h4 className={styles.resultText}>The result is:</h4>
    </>
  );
}
