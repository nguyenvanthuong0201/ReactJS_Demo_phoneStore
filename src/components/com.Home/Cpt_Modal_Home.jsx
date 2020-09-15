import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Paper from "@material-ui/core/Paper";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import TextField from "@material-ui/core/TextField";
import PhoneIcon from "@material-ui/icons/Phone";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import * as Message from "../../constants/Messages";


class Cpt_Modal_Home extends Component {
  showRating = (rating) => {
    let result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(<StarIcon key={i} />);
    }
    for (let j = 1; j <= 5 - rating; j++) {
      result.push(<StarBorderIcon key={j+5} />);
    }
    return result;
  };
  onAddToCart = (product) => {
    console.log(product);
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CARD_SUCCESS);
  };
  render() {
    let { product, } = this.props;
    return (
      <DialogContent dividers>
        <Paper elevation={3} className="ModalImgPage">
          <img src={product.img} alt="" />
          <hr />
          <div className="assess">{this.showRating(product.rating)}</div>
        </Paper>
        <Paper elevation={3} className="ModalInformationPage">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 colLeft">
                <img src="img/bannerModal.jpg" alt="banner1" />
                <img src="img/bannerModal1.jpg" alt="banner2" />
                <div className="costProductModal">
                  <div className="sale">{product.sale.toLocaleString()} ₫</div>
                  <div className="costModal">
                    <span className="costModalSpan">
                      {product.cost.toLocaleString()} {product.cost ? "₫" : ""}
                    </span>
                  </div>
                  <div className="installmentModal">
                    <p className="textInstallmentModal">
                      {product.installment === true ? "Trả góp 0%" : ""}
                    </p>
                  </div>
                </div>
                <div className="buttonBuy">
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    className="btn btn-danger float-left buttonBuyLeft"
                    onClick={() => this.onAddToCart(product)}
                  >
                    <ShoppingCartIcon />
                    <div className="contentCard">
                      Mua ngay <br />
                      Giao hàng tận nơi
                    </div>
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    className="btn btn-danger float-right buttonBuyRight"
                  >
                    <RecentActorsIcon />
                    <div className="contentCard">
                      Mua trả góp <br /> xet duyệt online
                    </div>
                  </Button>
                </div>
                <div className="RegistrationModal">
                  <TextField
                    id="outlined-basic"
                    label="Tư vấn qua số điện thoại"
                    variant="outlined"
                    type="number"
                    className="textFieldModal"
                  />
                  <Button
                    variant="contained"
                    size="medium"
                    className="btn btn-danger buttonRegistration"
                  >
                    <PhoneIcon /> Đăng ký
                  </Button>
                </div>
              </div>
              <div className="col-sm-5 cardModal">
                <div className="card border-secondary">
                  <div className="card-body bodyModal">
                    <h6 className="card-title">CỬA HÀNG CAM KẾT</h6>
                    <hr />
                    <p className="card-text textModal">
                      Bảo hành phần cứng trọn đời khi mua iPhone cũ (chỉ tiết)
                    </p>
                    <p className="card-text textModal">
                      Tất cả iPhone cũ|TBH bán ra đều cam kết máy đẹp – Nguyên
                      bản – tất cả iPhone cũ|TBH đều đã được mở máy kiểm tra
                      zin. Khách hàng có thể mở máy tại shop để check
                    </p>
                  </div>
                </div>
                <div className="card border-secondary">
                  <div className="card-body bodyModal">
                    <h6 className="card-title">HỆ THỐNG CỬA HÀNG</h6>
                    <hr />
                    <p className="card-text textModal">
                      111 Trần Đăng Ninh, Cầu Giấy, Hà Nội (09.7673.2468)
                    </p>
                    <p className="card-text textModal">
                      446 Xã Đàn, Đống Đa, Hà Nội (096.111.2468)
                    </p>
                    <p className="card-text textModal">
                      118 Thái hà, Đống Đa, Hà Nội (096.424.2468)
                    </p>
                  </div>
                </div>
                <div className="card border-secondary">
                  <div className="card-body bodyModal">
                    <h6 className="card-title">ƯU ĐÃI TRẢ GÓP</h6>
                    <hr />
                    <p className="card-text textModal">
                      Hỗ trợ trả góp các ngân hàng trả góp HD SaiSon, MB
                      MCredit, Fe Credit
                    </p>
                    <p className="card-text textModal">
                      Chỉ cần bằng lái xe & chứng minh thư
                    </p>
                    <p className="card-text textModal">
                      Trả trước 20% nhận máy sau 15 phút
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </DialogContent>
    );
  }
}

export default Cpt_Modal_Home;
