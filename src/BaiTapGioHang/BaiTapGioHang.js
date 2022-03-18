import React, { Component } from "react";
import DanhSachGioHang from "./DanhSachGioHang";
import ModalGioHang from "./ModalGioHang";
import SanPhamChiTiet from "./SanPhamChiTiet";
import { dataBaiTapGioHang } from "./Data";
export default class BaiTapGioHang extends Component {
  state = {
    DanhSachDienThoai: dataBaiTapGioHang,
    SanPhamChiTiet: dataBaiTapGioHang[0],
    modalGioHang: [],
  };
  handleXemChiTiet = (value) => {
    this.setState({
      SanPhamChiTiet: value,
    });
  };

  handleThemGioHang = (value) => {
    let newModalGioHang = [...this.state.modalGioHang];
    let index = newModalGioHang.findIndex((sp) => sp.sku === value.sku);
    console.log(index);
    if (index === -1) {
      let SoLuong = { ...value, soLuong: 1 };
      newModalGioHang.push(SoLuong);
    } else {
      newModalGioHang[index].soLuong += 1;
    }
    this.setState({
      modalGioHang: newModalGioHang,
    });
    console.log(newModalGioHang);
  };
  handleXoaGioHang = (value) => {
    let newModalGioHang = [...this.state.modalGioHang];
    let index = newModalGioHang.findIndex((sp) => sp.sku === value);
    console.log(index);
    if (index !== -1) {
      newModalGioHang.splice(index, 1);
    }
    this.setState({
      modalGioHang: newModalGioHang,
    });
  };
  handletangGiamSoLuong = (maSP, tangGiam) => {
    //tangGiam là true thì tăng số lượng và ngược lại
    let newModalGioHang = [...this.state.modalGioHang];
    let index = newModalGioHang.findIndex((sp) => sp.sku === maSP);
    if (tangGiam) {
      newModalGioHang[index].soLuong += 1;
    } else {
      if (newModalGioHang[index].soLuong > 1) {
        newModalGioHang[index].soLuong -= 1;
      }
    }
    this.setState({
      modalGioHang: newModalGioHang,
    });
  };

  render() {
    let tongGioHang = this.state.modalGioHang.reduce((tongsl, sp) => {
      return (tongsl += sp.soLuong);
    }, 0);
    return (
      <div className="container">
        {/* <h1>Bài tập giỏ hàng</h1> */}
        <div>
          <span
            className="text-danger font-weight-bold"
            data-toggle="modal"
            data-target="#modelId"
            style={{ cursor: "pointer" }}
          >
            Giỏ hàng ({tongGioHang})
          </span>
        </div>
        <ModalGioHang
          handleXoaGioHang={this.handleXoaGioHang}
          handletangGiamSoLuong={this.handletangGiamSoLuong}
          modalGioHang={this.state.modalGioHang}
        />
        <DanhSachGioHang
          handleXemChiTiet={this.handleXemChiTiet}
          handleThemGioHang={this.handleThemGioHang}
          DanhSachDienThoai={this.state.DanhSachDienThoai}
        />
        <SanPhamChiTiet sanPhamChiTiet={this.state.SanPhamChiTiet} />
      </div>
    );
  }
}
