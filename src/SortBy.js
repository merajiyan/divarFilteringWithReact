import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import styles from "./SortBy.module.css";
import SingleSortBy from "./SingleSortBy";

function SortBy(props) {
  const [active, setActive] = useState(props.match.params.field);
  const history = useHistory();

  function handleClick(name) {
    setActive(name);
    history.push(
      `/${name}/${
        props.match.params.name ? props.match.params.name + "/" : ""
      }${props.match.params.title ? props.match.params.title + "/" : ""}${
        props.match.params.fieldOf ? props.match.params.fieldOf + "/" : ""
      }`
    );
  }

  return (
    <section className={styles.filterContainer}>
      <div className={styles.filterContainerInner}>
        <SingleSortBy
          onClick={handleClick}
          isOn={active === "name"}
          sortBy="name"
        />
        <SingleSortBy
          onClick={handleClick}
          isOn={active === "title"}
          sortBy="title"
        />
        <SingleSortBy
          onClick={handleClick}
          isOn={active === "date"}
          sortBy="date"
        />
        <SingleSortBy
          onClick={handleClick}
          isOn={active === "field"}
          sortBy="field"
        />
        <SingleSortBy
          onClick={handleClick}
          isOn={active === "old_value"}
          sortBy="old_value"
        />
        <SingleSortBy
          onClick={handleClick}
          isOn={active === "new_value"}
          sortBy="new_value"
        />
      </div>
    </section>
  );
}

export default SortBy;
