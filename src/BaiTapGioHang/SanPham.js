import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { thumbnail_url, name } = this.props.dt;
    return (
      <div className="col-4">
        <div className="card">
          <img
            style={{ width: "350px" }}
            className="card-img-top"
            src={thumbnail_url}
            alt={name}
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">Text</p>
            <button
              onClick={() => {
                this.props.handleXemChiTiet(this.props.dt);
              }}
              className="btn btn-success"
            >
              Xem Chi Tiết
            </button>
            <button
              onClick={() => {
                this.props.handleThemGioHang(this.props.dt);
              }}
              className="btn btn-danger"
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
