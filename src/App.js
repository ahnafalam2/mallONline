import "./App.css";
import styles from "./Image.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import landingimage from "./Components/Assets/LandingImage.png";
import explore from "./Components/Assets/Explore.png";
import { Button, Navbar, Container, Row, Col } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <article className={styles.article}>
        <img className={styles.image} src={landingimage} alt="background" />
        <h1 className={styles.header} id="textt">
          YOUR ONE STOP <br /> SHOP <br />
          FOR BUYING <br />
          WHAT YOU NEED
        </h1>
        <button>
          <img className={styles.header} src={explore} id="explore" />
        </button>
      </article>

      {/* <article className="landingImage">
        <img src={landingimage}></img>
        <h1 className="landingText">
          YOUR ONE STOP <br /> SHOP <br /> FOR BUYING <br /> WHAT YOU NEED
        </h1>
      </article> */}
    </div>
  );
}

export default App;
