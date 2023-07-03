import React from "react";

function Thanks() {
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light osahan-nav shadow-sm">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img alt="logo" src="img/logo.png" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="home.html">
                    Trang chủ <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="home.html">
                    Đăng ký <span className="sr-only" />
                  </a>
                </li>
                <li className="nav-item dropdown dropdown-cart">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-shopping-basket" /> Giỏ hàng
                    <span className="badge badge-success">5</span>
                  </a>
                  <div className="dropdown-menu dropdown-cart-top p-0 dropdown-menu-right shadow-sm border-0">
                    <div className="dropdown-cart-top-body border-top p-4">
                      <p className="mb-2">
                        <i className="icofont-ui-press text-danger food-item" />{" "}
                        Chicken Tikka Sub 12" (30 cm) x 1{" "}
                        <span className="float-right text-secondary">
                          314.000
                        </span>
                      </p>
                      <p className="mb-2">
                        <i className="icofont-ui-press text-success food-item" />{" "}
                        Corn &amp; Peas Salad x 1{" "}
                        <span className="float-right text-secondary">
                          209.000
                        </span>
                      </p>
                      <p className="mb-2">
                        <i className="icofont-ui-press text-success food-item" />{" "}
                        Veg Seekh Sub 6" (15 cm) x 1{" "}
                        <span className="float-right text-secondary">
                          133.000
                        </span>
                      </p>
                      <p className="mb-2">
                        <i className="icofont-ui-press text-danger food-item" />{" "}
                        Chicken Tikka Sub 12" (30 cm) x 1{" "}
                        <span className="float-right text-secondary">
                          314.000
                        </span>
                      </p>
                      <p className="mb-2">
                        <i className="icofont-ui-press text-danger food-item" />{" "}
                        Corn &amp; Peas Salad x 1{" "}
                        <span className="float-right text-secondary">
                          209.000
                        </span>
                      </p>
                    </div>
                    <div className="dropdown-cart-top-footer border-top p-4">
                      <p className="mb-0 font-weight-bold text-secondary">
                        Tổng tiền{" "}
                        <span className="float-right text-dark">499.000</span>
                      </p>
                      {/* <small class="text-info">Extra charges may apply</small> */}
                    </div>
                    <div className="dropdown-cart-top-footer border-top p-2">
                      <a
                        className="btn btn-success btn-block btn-lg"
                        href="checkout.html"
                      >
                        {" "}
                        Thanh toán
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="section pt-5 pb-5 osahan-not-found-page">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center pt-5 pb-5">
                <img
                  className="img-fluid mb-5"
                  src="img/thanks.png"
                  alt={404}
                />
                <h1 className="mt-2 mb-2 text-success">Thành công!</h1>
                <p className="mb-5">Bạn đã thực hiện đặt hàng thành công</p>
                <a className="btn btn-primary btn-lg" href="orders.html#orders">
                  Xem chi tiết đơn hàng :)
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section pt-5 pb-5 text-center bg-white">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h5 className="m-0">
                  Bạn có cửa hàng?{" "}
                  <a href="login.html">
                    Gia nhập với chúng tôi cùng cung cấp sản phẩm tốt nhất cho
                    khách hàng
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="footer pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-12 col-sm-12">
                <h6 className="mb-3">Đăng ký nhận thông tin khi có giảm giá</h6>
                <form className="newsletter-form mb-1">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Email của bạn"
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <button type="button" className="btn btn-primary">
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </form>
                <p>
                  <a className="text-info" href="register.html">
                    Đăng ký
                  </a>{" "}
                  để nhận<a href="offers.html"> hàng ngàn ưu đãi khác</a>
                </p>
                <div className="app">
                  <p className="mb-2">DOWNLOAD APP</p>
                  <a href="#">
                    <img className="img-fluid" src="img/google.png" />
                  </a>
                  <a href="#">
                    <img className="img-fluid" src="img/apple.png" />
                  </a>
                </div>
              </div>
              <div className="col-md-1 col-sm-6 mobile-none"></div>
              <div className="col-md-2 col-6 col-sm-4">
                <h6 className="mb-3">Về chúng tôi</h6>
                <ul>
                  <li>
                    <a href="#">Thông tin liên hệ</a>
                  </li>
                  <li>
                    <a href="#">Văn hóa doanh nghiệp</a>
                  </li>
                  <li>
                    <a href="#">Tầm nhìn - Sứ mệnh</a>
                  </li>
                  <li>
                    <a href="#">Tuyển dụng</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-6 col-sm-4">
                <h6 className="mb-3">Dành cho cửa hàng</h6>
                <ul>
                  <li>
                    <a href="#">Hỗ trợ kỹ thuật</a>
                  </li>
                  <li>
                    <a href="#">Hỗ trợ bán hàng</a>
                  </li>
                  <li>
                    <a href="#">Góp ý</a>
                  </li>
                  <li>
                    <a href="#">Khiếu nại</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 m-none col-4 col-sm-4">
                <h6 className="mb-3">Khách hàng</h6>
                <ul>
                  <li>
                    <a href="#">Bảo vệ quyền lợi người tiêu dùng</a>
                  </li>
                  <li>
                    <a href="#">Chăm sóc khách hàng</a>
                  </li>
                  <li>
                    <a href="#">Khiếu nại</a>
                  </li>
                  <li>
                    <a href="#">Góp ý</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-bottom-search pt-5 pb-5 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <p className="text-black">Từ khóa phổ biến</p>
                <div className="search-links">
                  <a href="#">Gà rán</a> | <a href="#">Nem chua rán</a> |{" "}
                  <a href="#">Pizza</a> | <a href="#">Highland</a> |{" "}
                  <a href="#">Starbuck</a> | <a href="#">Bánh bèo</a> |{" "}
                  <a href="#">Tôm alaska</a> | <a href="#">Tôm hoàng đế</a> |{" "}
                  <a href="#">Gà rán</a> | <a href="#">Nem chua rán</a> |{" "}
                  <a href="#">Pizza</a> | <a href="#">Highland</a> |{" "}
                  <a href="#">Starbuck</a> | <a href="#">Bánh bèo</a> |{" "}
                  <a href="#">Tôm alaska</a> | <a href="#">Tôm hoàng đế</a> |
                  <a href="#">Gà rán</a> | <a href="#">Nem chua rán</a> |{" "}
                  <a href="#">Pizza</a> | <a href="#">Highland</a> |{" "}
                  <a href="#">Starbuck</a> | <a href="#">Bánh bèo</a> |{" "}
                  <a href="#">Tôm alaska</a> | <a href="#">Tôm hoàng đế</a> |
                  <a href="#">Gà rán</a> | <a href="#">Nem chua rán</a> |{" "}
                  <a href="#">Pizza</a> | <a href="#">Highland</a> |{" "}
                  <a href="#">Starbuck</a> | <a href="#">Bánh bèo</a> |{" "}
                  <a href="#">Tôm alaska</a> | <a href="#">Tôm hoàng đế</a> |
                  <a href="#">Gà rán</a> | <a href="#">Nem chua rán</a> |{" "}
                  <a href="#">Pizza</a> | <a href="#">Highland</a> |{" "}
                  <a href="#">Starbuck</a> | <a href="#">Bánh bèo</a> |{" "}
                  <a href="#">Tôm alaska</a> | <a href="#">Tôm hoàng đế</a> |
                  <a href="#">Gà rán</a> | <a href="#">Nem chua rán</a> |{" "}
                  <a href="#">Pizza</a> | <a href="#">Highland</a> |{" "}
                  <a href="#">Starbuck</a> | <a href="#">Bánh bèo</a> |{" "}
                  <a href="#">Tôm alaska</a> | <a href="#">Tôm hoàng đế</a>
                </div>
                <p className="mt-4 text-black">Danh mục món ăn</p>
                <div className="search-links">
                  <a href="#">Fast Food</a> | <a href="#">Chinese</a> |{" "}
                  <a href="#">Street Food</a> | <a href="#">Continental</a> |{" "}
                  <a href="#">Mithai</a> | <a href="#">Cafe</a> |{" "}
                  <a href="#">South Indian</a> | <a href="#">Punjabi Food</a> |{" "}
                  <a href="#">Fast Food</a> | <a href="#">Chinese</a> |{" "}
                  <a href="#">Street Food</a> | <a href="#">Continental</a> |{" "}
                  <a href="#">Mithai</a> | <a href="#">Cafe</a> |{" "}
                  <a href="#">South Indian</a> | <a href="#">Punjabi Food</a>
                  <a href="#">Fast Food</a> | <a href="#">Chinese</a> |{" "}
                  <a href="#">Street Food</a> | <a href="#">Continental</a> |{" "}
                  <a href="#">Mithai</a> | <a href="#">Cafe</a> |{" "}
                  <a href="#">South Indian</a> | <a href="#">Punjabi Food</a> |{" "}
                  <a href="#">Fast Food</a> | <a href="#">Chinese</a> |{" "}
                  <a href="#">Street Food</a> | <a href="#">Continental</a> |{" "}
                  <a href="#">Mithai</a> | <a href="#">Cafe</a> |{" "}
                  <a href="#">South Indian</a> | <a href="#">Punjabi Food</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="pt-4 pb-4 text-center">
          <div className="container">
            <p className="mt-0 mb-0">
              © Copyright 2020 thaotrinhminh@gmail.com. All Rights Reserved
            </p>
            <small className="mt-0 mb-0">
              {" "}
              Made with <i className="fas fa-heart heart-icon text-danger" /> by
              <a
                className="text-danger"
                target="_blank"
                href="http://thaotrinh.info"
              >
                thaotrinh.info
              </a>
            </small>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Thanks;
