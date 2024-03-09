import { useState } from "react";
import { Caulculator } from "./components/Calculator";

import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section
        className={`${styles.wrapper} container d-flex flex-column align-items-center justify-content-center`}
      >
        <h1 className={styles.title}>Simple Caulculator</h1>
        <Caulculator />

        <div className="">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
