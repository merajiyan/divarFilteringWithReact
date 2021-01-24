import { useState, useEffect } from "react";
import styles from "./PostCard.module.css";
import logo from "./logo.svg";

function PostCard(props) {
  const [star, setStar] = useState(false);

  useEffect(() => {
    if (!!!localStorage.getItem("stars")) {
      localStorage.setItem("stars", JSON.stringify([]));
    }
    const item = JSON.parse(localStorage.getItem("stars"));
    // console.log(props.id);
    if (item.indexOf(props.id) >= 0) {
      // console.log(true);
      setStar(true);
    }
  }, [props]);

  function checkStar() {
    const item = JSON.parse(localStorage.getItem("stars"));
    if (item && item.indexOf(props.id) >= 0) {
      //   item.splice(item.indexOf(props.id), 1);
      const newItem = item.splice(item.indexOf(props.id), 1);
      localStorage.setItem("stars", JSON.stringify([...item]));
      setStar(false);
    } else {
      localStorage.setItem("stars", JSON.stringify([...item, props.id]));
      setStar(true);
    }
  }

  return (
    <section className={styles.card} onClick={checkStar}>
      <div className={styles.cardInner}>
        <div>
          <h2>{props.title}</h2>
          <h3>{props.name}</h3>
          <h4>{props.date}</h4>
          <h5>{props.field}</h5>
          <h6>{props.old_value}</h6>
          {/* new_value={item.new_value} */}
        </div>
        <div>
          <img src={logo} /> {star && "*"}
        </div>
      </div>
    </section>
  );
}

export default PostCard;
