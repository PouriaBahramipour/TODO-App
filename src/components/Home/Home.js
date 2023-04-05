import React from "react";
import Card from "../UI/Card";
import HomeImage from "./HomeImage";
import styles from "./Home.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <Card>
      <div className={styles.home}>
        <div>
          <HomeImage />
        </div>
        <div>
          <p>There’s no task here!</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPlus} size="1x" color="#1B91FB" />
          <a href="/">Create new task</a>
        </div>
      </div>
    </Card>
  );
};
export default Home;