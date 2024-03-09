import { Caulculator } from "./components/Calculator";

import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <section
        className={`${styles.wrapper} container d-flex flex-column align-items-center justify-content-center`}
      >
        <h1 className={styles.title}>Simple Calculator</h1>
        <Caulculator />
      </section>
    </>
  );
}

export default App;
