import React, { Component } from "react";

class Cpt_Footer extends Component {
  render() {
    return (
      <div className="backgroundFooter">
        <div className="container footer">
          <div className="row">
            <div className="col-sm-3">
              <h6>THÔNG TIN HỖ TRỢ</h6>
              <hr />
              <a href="#">Chính sách bảo hành Bảo hành</a> <br />
              <a href="#">Xiaomi chính hãng Chính</a>
              <br />
              <a href="#">sách mua hàng Online</a>
              <br />
              <a href="#">Mua hàng trả góp</a>
              <br />
              <a href="#">Chính sách bảo mật thông tin khách hàng</a>
            </div>
            <div className="col-sm-3">
              <h6>THÔNG TIN LIÊN LẠC</h6>
              <hr />
              <a href="#">Hotline bán hàng:</a> <br />
              <a href="#">
                <b>0966.06.2468</b>{" "}
              </a>
              <br />
              <a href="#">
                <b>1900.633.471</b>(Bấm phím 1)
              </a>
              <br />
              <a href="#">Hotline bảo hành, kỹ thuật:</a>
              <br />
              <a href="#">
                <b>1900.633.471</b> (Bấm phím 2)
              </a>
              <a href="#">Hotline hỗ trợ phần mềm:</a>
              <a href="#">
                <b>096.282.4422</b>
              </a>
            </div>
            <div className="col-sm-3">
              <h6>KHU VỰC MIỀN BẮC</h6>
              <hr />
              <a href="#">111 Trần Đăng Ninh, Cầu Giấy, Hà Nội:</a> <br />
              <a href="#">
                <b>0966.06.2468</b>
              </a>
              <br />
              <a href="#">
                446 Xã Đàn, Đống Đa, Hà Nội: <b>096.111.2468</b>
              </a>
              <br />
              <a href="#">
                118 Thái hà, Đống Đa, Hà Nội: <b>096.424.2468</b>
              </a>
            </div>
            <div className="col-sm-3">
              <h6>KHU VỰC MIỀN NAM</h6>
              <hr />
              <a href="#">379 Hoàng Văn Thụ, P2, Q.Tân Bình, HCM:</a> <br />
              <a href="#">
                <b>0984.768.260 | 028.66.845.057</b>
              </a>
              <br />
              <a href="#">290 Hoàng Văn Thụ, P4, Q.Tân Bình, HCM:</a>
              <br />
              <a href="#">
                <b>0968.371.357</b>
              </a>
              <br />
              <a href="#">466 Quang Trung, P.10, Q.Gò Vấp, HCM:</a>
              <a href="#">
                <b>082.639.2468</b>
              </a>
              <a href="#">76 Gò Dầu, P.Tân Quý, Q.Tân Phú:</a> <br />
              <a href="#">
                <b>0866.577.357</b>
              </a>
            </div>
          </div>
          <div className="row justify-content-center"></div>
        </div>
        <div className="copyRight">
          <p>
            © 2019 - Công ty TNHH & XNK ClickBuy. GPKD số 0106081880 do Sở KH &
            ĐT TP Hà Nội cấp ngày 10/01/2013
          </p>
        </div>
      </div>
    );
  }
}

export default Cpt_Footer;
