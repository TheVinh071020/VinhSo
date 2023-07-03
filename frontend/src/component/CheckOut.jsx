import React from 'react'

function CheckOut() {
  return (
    <div>
      <>
        <div
          className="modal fade"
          id="add-address-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="add-address"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="add-address">
                  Add Delivery Address
                </h5>
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
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputPassword4">Delivery Area</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Delivery Area"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            <i className="icofont-ui-pointer" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="inputPassword4">Complete Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Complete Address e.g. house number, street name, landmark"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="inputPassword4">
                        Delivery Instructions
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall"
                      />
                    </div>
                    <div className="form-group mb-0 col-md-12">
                      <label htmlFor="inputPassword4">Nickname</label>
                      <div
                        className="btn-group btn-group-toggle d-flex justify-content-center"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-info active">
                          <input
                            type="radio"
                            name="options"
                            id="option1"
                            autoComplete="off"
                            defaultChecked=""
                          />{" "}
                          Home
                        </label>
                        <label className="btn btn-info">
                          <input
                            type="radio"
                            name="options"
                            id="option2"
                            autoComplete="off"
                          />{" "}
                          Work
                        </label>
                        <label className="btn btn-info">
                          <input
                            type="radio"
                            name="options"
                            id="option3"
                            autoComplete="off"
                          />{" "}
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn d-flex w-50 text-center justify-content-center btn-outline-primary"
                  data-dismiss="modal"
                >
                  CANCEL
                </button>
                <button
                  type="button"
                  className="btn d-flex w-50 text-center justify-content-center btn-primary"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
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
        <section className="offer-dedicated-body mt-4 mb-4 pt-2 pb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="offer-dedicated-body-left">
                  <div className="bg-white rounded shadow-sm p-4">
                    <h4 className="mb-1">Thanh toán đơn hàng</h4>
                  </div>
                  <div className="pt-2" />
                  <div className="bg-white rounded shadow-sm p-4 mb-4">
                    <h4 className="mb-1">Chọn địa chỉ giao hàng</h4>
                    {/* <h6 class="mb-3 text-black-50">Multiple addresses in this location</h6> */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="bg-white card addresses-item mb-4 border border-success">
                          <div className="gold-members p-4">
                            <div className="media">
                              <div className="mr-3">
                                <i className="icofont-ui-home icofont-3x" />
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1 text-black">Nhà</h6>
                                <p className="text-black">
                                  Tòa Nhà Botanica, 104 Phổ Quang, P. 2, Tân
                                  Bình, TP. HCM
                                </p>
                                <p className="mb-0 text-black font-weight-bold">
                                  <a
                                    className="btn btn-sm btn-success mr-2"
                                    href="#"
                                  >
                                    {" "}
                                    Giao tới địa chỉ này
                                  </a>
                                  <span>30MIN</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bg-white card addresses-item mb-4">
                          <div className="gold-members p-4">
                            <div className="media">
                              <div className="mr-3">
                                <i className="icofont-briefcase icofont-3x" />
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1 text-secondary">Work</h6>
                                <p>
                                  107/50A Đường Số 11, P. 11, Gò Vấp, TP. HCM
                                </p>
                                <p className="mb-0 text-black font-weight-bold">
                                  <a
                                    className="btn btn-sm btn-secondary mr-2"
                                    href="#"
                                  >
                                    {" "}
                                    Giao ngay
                                  </a>
                                  <span>40MIN</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="bg-white card addresses-item">
                          <div className="gold-members p-4">
                            <div className="media">
                              <div className="mr-3">
                                <i className="icofont-location-pin icofont-3x" />
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1 text-secondary">Other</h6>
                                <p>
                                  100 Thạch Thị Thanh, P. Tân Định, Quận 1, TP.
                                  HCM
                                </p>
                                <p className="mb-0 text-black font-weight-bold">
                                  <a
                                    className="btn btn-sm btn-secondary mr-2"
                                    href="#"
                                  >
                                    {" "}
                                    Giao ngay
                                  </a>
                                  <span>45MIN</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bg-white card addresses-item">
                          <div className="gold-members p-4">
                            <div className="media">
                              <div className="mr-3">
                                <i className="icofont-location-pin icofont-3x" />
                              </div>
                              <div className="media-body">
                                <h6 className="mb-1 text-secondary">Other</h6>
                                <p>Địa chỉ giao hàng mới</p>
                                <p className="mb-0 text-black font-weight-bold">
                                  <a
                                    data-toggle="modal"
                                    data-target="#add-address-modal"
                                    className="btn btn-sm btn-primary mr-2"
                                    href="#"
                                  >
                                    {" "}
                                    Thêm địa chỉ giao hàng mới
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2" />
                  <div className="bg-white rounded shadow-sm p-4 osahan-payment">
                    <h4 className="mb-1">Phương thức thanh toán</h4>
                    <h6 className="mb-3 text-black-50">
                      Thanh toán khi nhận hàng
                    </h6>
                    <div className="row">
                      <div className="col-sm-4 pr-0">
                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link active"
                            id="v-pills-cash-tab"
                            data-toggle="pill"
                            href="#v-pills-cash"
                            role="tab"
                            aria-controls="v-pills-cash"
                            aria-selected="false"
                          >
                            <i class="fa-solid fa-money-bill"></i> COD
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-home-tab"
                            data-toggle="pill"
                            href="#v-pills-home"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                          >
                            <i class="fa-solid fa-credit-card"></i> Credit/Debit
                            Cards
                          </a>
                          <a
                            className="nav-link"
                            id="v-pills-settings-tab"
                            data-toggle="pill"
                            href="#v-pills-settings"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                          >
                            <i class="fa-solid fa-building-columns"></i>{" "}
                            Netbanking
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-8 pl-0">
                        <div
                          className="tab-content h-100"
                          id="v-pills-tabContent"
                        >
                          <div
                            className="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                          >
                            <form>
                              <div className="form-row">
                                <div className="form-group col-md-12">
                                  <label>Ghi chú cho cửa hàng</label>
                                  <textarea
                                    rows={5}
                                    className="form-control"
                                    placeholder="Cửa hàng nên lưu ý..."
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="form-group col-md-12">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customCheck1"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="customCheck1"
                                    >
                                      Securely save this card for a faster
                                      checkout next time.
                                    </label>
                                  </div>
                                </div>
                                <div className="form-group col-md-12 mb-0">
                                  <a
                                    href="thanks.html"
                                    className="btn btn-success btn-block btn-lg"
                                  >
                                    Thanh toán 535.000
                                    <i className="icofont-long-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
                  <div className="d-flex mb-4 osahan-cart-item-profile">
                    <img
                      className="img-fluid mr-3 rounded-pill"
                      alt="osahan"
                      src="img/2.jpg"
                    />
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-white">
                        Bánh Tráng Cuốn Thịt Heo Hoàng Bèo
                      </h6>
                      <p className="mb-0 text-white">
                        <i className="icofont-location-pin" /> 40 Duy Tân, Quận
                        Cầu Giấy, Hà Nội
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded shadow-sm mb-2">
                    <div className="gold-members p-2 border-bottom">
                      <p className="text-gray mb-0 float-right ml-2">60.000</p>
                      <span className="count-number float-right">
                        <button className="btn btn-outline-secondary  btn-sm left dec">
                          {" "}
                          <i className="icofont-minus" />{" "}
                        </button>
                        <input
                          className="count-number-input"
                          type="text"
                          defaultValue={1}
                          readOnly=""
                        />
                        <button className="btn btn-outline-secondary btn-sm right inc">
                          {" "}
                          <i className="icofont-plus" />{" "}
                        </button>
                      </span>
                      <div className="media">
                        <div className="mr-2">
                          <i className="icofont-ui-press text-danger food-item" />
                        </div>
                        <div className="media-body">
                          <p className="mt-1 mb-0 text-black">Thịt nướng</p>
                        </div>
                      </div>
                    </div>
                    <div className="gold-members p-2 border-bottom">
                      <p className="text-gray mb-0 float-right ml-2">15.000</p>
                      <span className="count-number float-right">
                        <button className="btn btn-outline-secondary  btn-sm left dec">
                          {" "}
                          <i className="icofont-minus" />{" "}
                        </button>
                        <input
                          className="count-number-input"
                          type="text"
                          defaultValue={1}
                          readOnly=""
                        />
                        <button className="btn btn-outline-secondary btn-sm right inc">
                          {" "}
                          <i className="icofont-plus" />{" "}
                        </button>
                      </span>
                      <div className="media">
                        <div className="mr-2">
                          <i className="icofont-ui-press text-success food-item" />
                        </div>
                        <div className="media-body">
                          <p className="mt-1 mb-0 text-black">Thêm thịt</p>
                        </div>
                      </div>
                    </div>
                    <div className="gold-members p-2 border-bottom">
                      <p className="text-gray mb-0 float-right ml-2">60.000</p>
                      <span className="count-number float-right">
                        <button className="btn btn-outline-secondary  btn-sm left dec">
                          {" "}
                          <i className="icofont-minus" />{" "}
                        </button>
                        <input
                          className="count-number-input"
                          type="text"
                          defaultValue={1}
                          readOnly=""
                        />
                        <button className="btn btn-outline-secondary btn-sm right inc">
                          {" "}
                          <i className="icofont-plus" />{" "}
                        </button>
                      </span>
                      <div className="media">
                        <div className="mr-2">
                          <i className="icofont-ui-press text-success food-item" />
                        </div>
                        <div className="media-body">
                          <p className="mt-1 mb-0 text-black">Thịt luộc</p>
                        </div>
                      </div>
                    </div>
                    <div className="gold-members p-2 border-bottom">
                      <p className="text-gray mb-0 float-right ml-2">20.000</p>
                      <span className="count-number float-right">
                        <button className="btn btn-outline-secondary  btn-sm left dec">
                          {" "}
                          <i className="icofont-minus" />{" "}
                        </button>
                        <input
                          className="count-number-input"
                          type="text"
                          defaultValue={1}
                          readOnly=""
                        />
                        <button className="btn btn-outline-secondary btn-sm right inc">
                          {" "}
                          <i className="icofont-plus" />{" "}
                        </button>
                      </span>
                      <div className="media">
                        <div className="mr-2">
                          <i className="icofont-ui-press text-success food-item" />
                        </div>
                        <div className="media-body">
                          <p className="mt-1 mb-0 text-black">Bánh đa</p>
                        </div>
                      </div>
                    </div>
                    <div className="gold-members p-2 border-bottom">
                      <p className="text-gray mb-0 float-right ml-2">15.000</p>
                      <span className="count-number float-right">
                        <button className="btn btn-outline-secondary  btn-sm left dec">
                          {" "}
                          <i className="icofont-minus" />{" "}
                        </button>
                        <input
                          className="count-number-input"
                          type="text"
                          defaultValue={1}
                          readOnly=""
                        />
                        <button className="btn btn-outline-secondary btn-sm right inc">
                          {" "}
                          <i className="icofont-plus" />{" "}
                        </button>
                      </span>
                      <div className="media">
                        <div className="mr-2">
                          <i className="icofont-ui-press text-danger food-item" />
                        </div>
                        <div className="media-body">
                          <p className="mt-1 mb-0 text-black">
                            Coca chai 330ml
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 bg-white rounded p-2 clearfix">
                    <div className="input-group input-group-sm mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mã giảm giá"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary"
                          type="button"
                          id="button-addon2"
                        >
                          <i className="icofont-sale-discount" /> APPLY
                        </button>
                      </div>
                    </div>
                    <div className="input-group mb-0">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icofont-comment" />
                        </span>
                      </div>
                      <textarea
                        className="form-control"
                        placeholder="Cửa hàng cần chú ý..."
                        aria-label="With textarea"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="mb-2 bg-white rounded p-2 clearfix">
                    <p className="mb-1">
                      Tổng tiền hàng{" "}
                      <span className="float-right text-dark">330.000</span>
                    </p>
                    <p className="mb-1">
                      Mã giảm giá{" "}
                      <span className="float-right text-dark">25.000</span>
                    </p>
                    <p className="mb-1">
                      Phí dịch vụ{" "}
                      <span
                        className="text-info"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Total discount breakup"
                      >
                        <i className="icofont-info-circle" />
                      </span>{" "}
                      <span className="float-right text-dark">15.000</span>
                    </p>
                    <p className="mb-1">
                      Phí vận chuyển{" "}
                      <span
                        className="text-info"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Total discount breakup"
                      >
                        <i className="icofont-info-circle" />
                      </span>{" "}
                      <span className="float-right text-dark">20.000</span>
                    </p>
                    <p className="mb-1 text-success">
                      Tổng giảm giá
                      <span className="float-right text-success">34.000</span>
                    </p>
                    <hr />
                    <h6 className="font-weight-bold mb-0">
                      Tổng thanh toán{" "}
                      <span className="float-right">325.000</span>
                    </h6>
                  </div>
                  <a
                    href="thanks.html"
                    className="btn btn-success btn-block btn-lg"
                  >
                    Thanh toán 325.000
                    <i className="icofont-long-arrow-right" />
                  </a>
                </div>
                <div className="pt-2" />
                {/* <div class="alert alert-success" role="alert">
                  You have saved <strong>$1,884</strong> on the bill
              </div> */}
                <div className="pt-2" />
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

export default CheckOut