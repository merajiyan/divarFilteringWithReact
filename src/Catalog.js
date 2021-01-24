import { useState, useEffect, Component } from "react";
import json from "./data.json";
import PostCard from "./PostCard";
import SortBy from "./SortBy";
import Filters from "./Filters";
import styles from "./Catalog.module.css";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = { tableDataCount: 10, apiData: json };
  }

  doEffectThings = (props) => {
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
      // if (
      //   (props.match.params.field && props.match.params.field === "all") ||
      //   !props.match.params.field
      // ) {
      if (!props.match.params.field || props.match.params.field === "all") {
        this.setState({ apiData: newData });
      } else {
        this.setState({
          apiData: newData.sort((a, b) => (a[query1] > b[query1] ? 1 : -1)),
        });
      }
      console.log("1");
      // } else {
      //   console.log("2");
      //   this.setState({
      //     apiData: json.sort((a, b) => (a[query1] > b[query1] ? 1 : -1)),
      //   });
      // }
    } else {
      console.log("3", query1);
      this.setState({
        apiData: json.sort((a, b) => (a[query1] > b[query1] ? 1 : -1)),
      });
    }
  };

  componentDidMount() {
    this.doEffectThings(this.props);
  }

  componentDidUpdate(nextProps, nextStates) {
    if (nextProps.match.params !== this.props.match.params) {
      this.doEffectThings(this.props);
    }
  }
  render() {
    return (
      <>
        <SortBy match={this.props.match} />
        <Filters match={this.props.match} />
        <div className={styles.container}>
          {this.state.apiData
            .slice(0, this.state.tableDataCount)
            .map((item) => (
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
}

export default Catalog;
