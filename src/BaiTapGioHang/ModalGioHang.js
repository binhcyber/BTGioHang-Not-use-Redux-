import React, { Component } from "react";

export default class ModalGioHang extends Component {
  renderModal = () => {
    return this.props.modalGioHang.map((sp, index) => {
      return (
        <tr>
          <td>{sp.sku}</td>
          <td>
            <img
              style={{ width: "150px" }}
              src={sp.thumbnail_url}
              alt={sp.name}
            />
          </td>
          <td>{sp.name}</td>
          <td className="row">
            <button
              onClick={() => {
                this.props.handletangGiamSoLuong(sp.sku, true);
              }}
              className="btn btn-primary"
            >
              +
            </button>
            {sp.soLuong}
            <button
              onClick={() => {
                this.props.handletangGiamSoLuong(sp.sku, false);
              }}
              className="btn btn-primary"
            >
              -
            </button>
          </td>
          <td className="text-danger">
            {sp.price.toLocaleString()} {"VND"}
          </td>
          <td className="text-danger">
            {(sp.soLuong * sp.price).toLocaleString()} {"VND"}
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleXoaGioHang(sp.sku);
              }}
              className="btn btn-danger"
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            style={{ margin: "0", paddingLeft: "30px" }}
            className="modal-dialog"
            role="document"
          >
            <div style={{ width: "250%" }} className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table class="table">
                  <thead>
                    <tr>
                      <td>Mã sản phẩm</td>
                      <td>Hình Ảnh</td>
                      <td>Tên Sản phẩm</td>
                      <td>Số lượng</td>
                      <td>Đơn giá</td>
                      <td>Thành tiền</td>
                    </tr>
                  </thead>
                  <tbody>{this.renderModal()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4}></td>
                      <td>Tổng tiền </td>
                      <td className="text-danger font-weight-bold">
                        {this.props.modalGioHang
                          .reduce((tongTien, sp) => {
                            return (tongTien += sp.soLuong * sp.price);
                          }, 0)
                          .toLocaleString()}{" "}
                        VND
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
