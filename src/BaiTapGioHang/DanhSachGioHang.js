import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DanhSachGioHang extends Component {
  render() {
    return (
      <div className="row">
        {this.props.DanhSachDienThoai.map((dt, index) => {
          if (index < 3) {
            return (
              <SanPham
                handleThemGioHang={this.props.handleThemGioHang}
                handleXemChiTiet={this.props.handleXemChiTiet}
                dt={dt}
              />
            );
          }
        })}
      </div>
    );
  }
}
