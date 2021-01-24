import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Filters.module.css";

// import styles from "./SortBy.module.css";
// import SingleSortBy from "./SingleSortBy";

function SortBy(props) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [fieldOf, setFieldOf] = useState("");
  const history = useHistory();

  function handleInput(input, id) {
    if (id === "name") {
      setName(input);
      if (input === "") {
        console.log(props.match.params.title, "ahaw!", input);
        history.push(
          `/${
            props.match.params.field ? props.match.params.field : "all"
          }/all/${
            props.match.params.title ? props.match.params.title + "/" : "all/"
          }${props.match.params.fieldOf ? props.match.params.fieldOf : "all"}`
        );
      } else {
        history.push(
          `/${props.match.params.field ? props.match.params.field : "all"}/${
            input + "/"
          }${
            props.match.params.title ? props.match.params.title + "/" : "all/"
          }${props.match.params.fieldOf ? props.match.params.fieldOf : "all"}`
        );
      }
    } else if (id === "title") {
      setTitle(input);
      if (input === "") {
        history.push(
          `/${props.match.params.field ? props.match.params.field : "all"}/${
            props.match.params.name ? props.match.params.name + "/" : "all/"
          }all/${
            props.match.params.fieldOf
              ? props.match.params.fieldOf + "/"
              : "all"
          }`
        );
      } else {
        history.push(
          `/${props.match.params.field ? props.match.params.field : "all"}/${
            props.match.params.name ? props.match.params.name + "/" : "all/"
          }${input}/${
            props.match.params.fieldOf ? props.match.params.fieldOf : "all"
          }`
        );
      }
    } else if (id === "fieldOf") {
      setFieldOf(input);
      if (input === "") {
        history.push(
          `/${props.match.params.field ? props.match.params.field : "all"}/${
            props.match.params.name ? props.match.params.name + "/" : "all/"
          }${
            props.match.params.title ? props.match.params.title + "/" : "all/"
          }all/`
        );
      } else {
        history.push(
          `/${props.match.params.field ? props.match.params.field : "all"}/${
            props.match.params.name ? props.match.params.name + "/" : "all/"
          }${
            props.match.params.title ? props.match.params.title + "/" : "all/"
          }${input}`
        );
      }
    }
  }

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          value={name}
          id="name"
          onChange={(e) => handleInput(e.target.value, e.target.id)}
          placeholder="name"
        />
        <input
          type="text"
          value={title}
          id="title"
          placeholder="title"
          onChange={(e) => handleInput(e.target.value, e.target.id)}
        />
        <input
          type="text"
          value={fieldOf}
          id="fieldOf"
          placeholder="field"
          onChange={(e) => handleInput(e.target.value, e.target.id)}
        />
      </div>
    </>
  );
}

export default SortBy;
