import styles from "./SingleSortBy.module.css";

function SingleSortBy(props) {
  return (
    <div
      className={styles.filter}
      style={{
        backgroundColor: props.isOn ? "#a62626" : "#fff",
        color: props.isOn ? "#fff" : "#a62626",
      }}
      onClick={() => props.onClick(props.sortBy)}
    >
      {props.sortBy}
    </div>
  );
}

export default SingleSortBy;
