import { useState, useEffect } from "react";
import json from "./data.json";
import PostCard from "./PostCard";
import SortBy from "./SortBy";
import Filters from "./Filters";
import styles from "./Catalog.module.css";

function Catalog(props) {
  const [tableDataCount, setTableDataCount] = useState(10);
  const [apiData, setApiData] = useState(json);

  function addMoreRows() {
    setTableDataCount(tableDataCount + 10);
  }
  useEffect(() => {
    console.log("reRender", props.match.params.field);
    let query1 = "";
    if (props.match.params.field) {
      query1 = props.match.params.field;
    }

    let newData = [];
    if (props.match.params.name && props.match.params.name !== "all") {
      newData = json.filter((e) =>
        e.name.toLowerCase().includes(props.match.params.name.toLowerCase())
      );
    }

    if (props.match.params.title && props.match.params.title !== "all") {
      newData = newData.filter((e) =>
        e.title.toLowerCase().includes(props.match.params.title.toLowerCase())
      );
    }

    if (props.match.params.fieldOf && props.match.params.fieldOf !== "all") {
      newData = newData.filter((e) =>
        e.field.toLowerCase().includes(props.match.params.fieldOf.toLowerCase())
      );
    }

    if (
      (props.match.params.name && props.match.params.name !== "all") ||
      (props.match.params.title && props.match.params.title !== "all") ||
      (props.match.params.fieldOf && props.match.params.fieldOf !== "all")
    ) {
      if (
        (props.match.params.field && props.match.params.field === "all") ||
        !props.match.params.field
      ) {
        setApiData(newData);
        console.log("1");
      } else {
        console.log("2");
        setApiData(json.sort((a, b) => (a[query1] > b[query1] ? 1 : -1)));
      }
    } else {
      console.log("3", query1);
      setApiData(json.sort((a, b) => (a[query1] > b[query1] ? 1 : -1)));
    }
    // debugger;
  }, [props.match.params]);

  return (
    <>
      <SortBy match={props.match} />
      <Filters />
      <div className={styles.container}>
        {apiData.slice(0, tableDataCount).map((item) => (
          <PostCard
            id={item.id}
            name={item.name}
            date={item.date}
            title={item.title}
            field={item.field}
            old_value={item.old_value}
            new_value={item.new_value}
          />
        ))}
        {/* <h3>ستاره دارها</h3>
        {data.slice(0, tableDataCount).map((item) => (
          <PostCard
            id={item.id}
            name={item.name}
            date={item.date}
            title={item.title}
            field={item.field}
            old_value={item.old_value}
            new_value={item.new_value}
          />
        ))} */}
      </div>
    </>
  );
}

export default Catalog;
