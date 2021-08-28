import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div>
        <div className="filter-result">{this.props.count}</div>
        <div className="filter-sort">
          {" "}
          Order <select></select>
        </div>
        <div className="filter-size">
          Filter
          <select>
            <option value="">All</option>
            <option value="">All</option>
            <option value="">All</option>
            <option value="">All</option>
            <option value="">All</option>
            <option value="">All</option>
            <option value="">All</option>
          </select>
        </div>
      </div>
    );
  }
}
