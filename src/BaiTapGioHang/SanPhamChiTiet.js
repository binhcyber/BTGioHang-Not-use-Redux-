import React, { Component } from "react";

export default class SanPhamChiTiet extends Component {
  render() {
    let { thumbnail_url, name, price } = this.props.sanPhamChiTiet;
    return (
      <div className="row ">
        <div className="col-6">
          <img
            style={{ width: "300px" }}
            className="card-img-top"
            src={thumbnail_url}
            alt={name}
          />
        </div>
        <div className="card-body col-6">
          <h4 className="card-title">{name}</h4>
          <p className="text-danger font-weight-bold">
            {price.toLocaleString()} {"VND"}
          </p>
        </div>
      </div>
    );
  }
}
