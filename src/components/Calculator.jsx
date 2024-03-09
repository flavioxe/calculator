import { useState } from "react";
import styles from "./Calculator.module.scss";

export function Caulculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  function handleChangeFirstNumber(e) {
    setFirstNumber(Number(e.target.value));
  }

  function handleChangeSecondNumber(e) {
    setSecondNumber(Number(e.target.value));
  }

  function handleSum() {
    setResult(firstNumber + secondNumber);
  }

  function handleMinus() {
    setResult(firstNumber - secondNumber);
  }

  function handleMultiplication() {
    setResult(firstNumber * secondNumber);
  }

  function handleDivide() {
    setResult(firstNumber / secondNumber);
  }

  return (
    <>
      <section className={`${styles.inputWrapper} d-flex align-items-center`}>
        <aside className="d-flex flex-column">
          <label className={styles.inputText}>Type the first number:</label>
          <input
            type="number"
            placeholder="Type here"
            value={firstNumber}
            onChange={handleChangeFirstNumber}
          />
        </aside>

        <aside className="d-flex flex-column">
          <label className={styles.inputText}>Type the second number:</label>
          <input
            type="number"
            placeholder="Type here"
            value={secondNumber}
            onChange={handleChangeSecondNumber}
          />
        </aside>
      </section>

      <section
        className={`${styles.operatorsWrapper} d-flex flex-column align-items-center`}
      >
        <p className={styles.inputText}>Choose the operation:</p>

        <main className={`${styles.buttonsWrapper} d-flex align-items-center`}>
          <button onClick={handleSum}>+</button>
          <button onClick={handleMinus}>-</button>
          <button onClick={handleMultiplication}>*</button>
          <button onClick={handleDivide}>/</button>
        </main>
      </section>

      <h4 className={styles.resultText}>The result is: {result}</h4>
    </>
  );
}
