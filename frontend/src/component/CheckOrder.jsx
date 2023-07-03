import React from "react";

function CheckOrder() {
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
        <section className="section pt-4 pb-4 osahan-account-page">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="osahan-account-page-left shadow-sm rounded bg-white h-100">
                  <div className="border-bottom p-4">
                    <div className="osahan-user text-center">
                      <div className="osahan-user-media">
                        <img
                          className="mb-3 rounded-pill shadow-sm mt-1"
                          src="img/user/4.png"
                          alt="gurdeep singh osahan"
                        />
                        <div className="osahan-user-media-body">
                          <h6 className="mb-2">Nguyễn Văn A</h6>
                          <p className="mb-1">+91 85680-79956</p>
                          <p>
                            <a
                              href="https://thaotrinh.info/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="6f060e02001c0e070e012f08020e0603410c0002"
                            >
                              [email&nbsp;protected]
                            </a>
                          </p>
                          <p className="mb-0 text-black font-weight-bold">
                            <a
                              className="text-primary mr-3"
                              data-toggle="modal"
                              data-target="#edit-profile-modal"
                              href="#"
                            >
                              <i className="icofont-ui-edit" /> Sửa
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="orders-tab"
                        data-toggle="tab"
                        href="#orders"
                        role="tab"
                        aria-controls="orders"
                        aria-selected="true"
                      >
                        <i class="fa-solid fa-cart-shopping"></i>
                        Đơn hàng của bạn
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="favourites-tab"
                        data-toggle="tab"
                        href="#favourites"
                        role="tab"
                        aria-controls="favourites"
                        aria-selected="false"
                      >
                        <i class="fa-solid fa-heart"></i>
                        Yêu thích
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="addresses-tab"
                        data-toggle="tab"
                        href="#addresses"
                        role="tab"
                        aria-controls="addresses"
                        aria-selected="false"
                      >
                        <i class="fa-solid fa-location-dot"></i>
                        Địa chỉ giao hàng
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="osahan-account-page-right rounded shadow-sm bg-white p-4 h-100">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="orders"
                      role="tabpanel"
                      aria-labelledby="orders-tab"
                    >
                      <h4 className="font-weight-bold mt-0 mb-4">
                        Lịch sử mua hàng
                      </h4>
                      <div className="bg-white card mb-4 order-list shadow-sm">
                        <div className="gold-members p-4">
                          <a href="#"></a>
                          <div className="media">
                            <a href="#">
                              <img
                                className="mr-4"
                                src="img/3.jpg"
                                alt="Generic placeholder image"
                              />
                            </a>
                            <div className="media-body">
                              <a href="#">
                                <span className="float-right text-info">
                                  Delivered on Mon, Nov 12, 7:18 PM{" "}
                                  <i className="icofont-check-circled text-success" />
                                </span>
                              </a>
                              <h6 className="mb-2">
                                <a href="#"></a>
                                <a href="detail.html" className="text-black">
                                  Gus's World Famous Fried Chicken
                                </a>
                              </h6>
                              <p className="text-gray mb-1">
                                <i className="icofont-location-arrow" /> 730 S
                                Mendenhall Rd, Memphis, TN 38117, USA
                              </p>
                              <p className="text-gray mb-3">
                                <i className="icofont-list" /> ORDER
                                #25102589748{" "}
                                <i className="icofont-clock-time ml-2" /> Mon,
                                Nov 12, 6:26 PM
                              </p>
                              <p className="text-dark">
                                Veg Masala Roll x 1, Veg Burger x 1, Veg Penne
                                Pasta in Red Sauce x 1
                              </p>
                              <hr />
                              <div className="float-right">
                                <a
                                  className="btn btn-sm btn-outline-primary"
                                  href="#"
                                >
                                  <i className="icofont-headphone-alt" /> HELP
                                </a>
                                <a
                                  className="btn btn-sm btn-primary"
                                  href="detail.html"
                                >
                                  <i className="icofont-refresh" /> REORDER
                                </a>
                              </div>
                              <p className="mb-0 text-black text-primary pt-2">
                                <span className="text-black font-weight-bold">
                                  {" "}
                                  Total Paid:
                                </span>{" "}
                                $300
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white card mb-4 order-list shadow-sm">
                        <div className="gold-members p-4">
                          <a href="#"></a>
                          <div className="media">
                            <a href="#">
                              <img
                                className="mr-4"
                                src="img/4.jpg"
                                alt="Generic placeholder image"
                              />
                            </a>
                            <div className="media-body">
                              <a href="#">
                                <span className="float-right text-info">
                                  Delivered on Mon, Nov 12, 7:18 PM{" "}
                                  <i className="icofont-check-circled text-success" />
                                </span>
                              </a>
                              <h6 className="mb-2">
                                <a href="#"></a>
                                <a href="detail.html" className="text-black">
                                  Jimmy's Famous American Tavern
                                </a>
                              </h6>
                              <p className="text-gray mb-1">
                                <i className="icofont-location-arrow" />
                                1733 Ocean Ave, Santa Monica, CA 90401, USA
                              </p>
                              <p className="text-gray mb-3">
                                <i className="icofont-list" /> ORDER
                                #25102589748{" "}
                                <i className="icofont-clock-time ml-2" /> Mon,
                                Nov 12, 6:26 PM
                              </p>
                              <p className="text-dark">
                                Veg Masala Roll x 5, Veg Burger x 1, Veg Penne
                                Pasta in Red Sauce x 1
                              </p>
                              <hr />
                              <div className="float-right">
                                <a
                                  className="btn btn-sm btn-outline-primary"
                                  href="#"
                                >
                                  <i className="icofont-headphone-alt" /> HELP
                                </a>
                                <a
                                  className="btn btn-sm btn-primary"
                                  href="detail.html"
                                >
                                  <i className="icofont-refresh" /> REORDER
                                </a>
                              </div>
                              <p className="mb-0 text-black text-primary pt-2">
                                <span className="text-black font-weight-bold">
                                  {" "}
                                  Total Paid:
                                </span>{" "}
                                $500
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white card  order-list shadow-sm">
                        <div className="gold-members p-4">
                          <a href="#"></a>
                          <div className="media">
                            <a href="#">
                              <img
                                className="mr-4"
                                src="img/5.jpg"
                                alt="Generic placeholder image"
                              />
                            </a>
                            <div className="media-body">
                              <a href="#">
                                <span className="float-right text-info">
                                  Delivered on Mon, Nov 12, 7:18 PM{" "}
                                  <i className="icofont-check-circled text-success" />
                                </span>
                              </a>
                              <h6 className="mb-2">
                                <a href="#"></a>
                                <a href="detail.html" className="text-black">
                                  The Famous Restaurant
                                </a>
                              </h6>
                              <p className="text-gray mb-1">
                                <i className="icofont-location-arrow" /> 953 S
                                Main St, Centerville, OH 45459, USA
                              </p>
                              <p className="text-gray mb-3">
                                <i className="icofont-list" /> ORDER
                                #25102589748{" "}
                                <i className="icofont-clock-time ml-2" /> Mon,
                                Nov 12, 6:26 PM
                              </p>
                              <p className="text-dark">
                                Veg Masala Roll x 5, Veg Penne Pasta in Red
                                Sauce x 1
                              </p>
                              <hr />
                              <div className="float-right">
                                <a
                                  className="btn btn-sm btn-outline-primary"
                                  href="#"
                                >
                                  <i className="icofont-headphone-alt" /> HELP
                                </a>
                                <a
                                  className="btn btn-sm btn-primary"
                                  href="detail.html"
                                >
                                  <i className="icofont-refresh" /> REORDER
                                </a>
                              </div>
                              <p className="mb-0 text-black text-primary pt-2">
                                <span className="text-black font-weight-bold">
                                  {" "}
                                  Total Paid:
                                </span>{" "}
                                $420
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="offers"
                      role="tabpanel"
                      aria-labelledby="offers-tab"
                    >
                      <h4 className="font-weight-bold mt-0 mb-4">Offers</h4>
                      <div className="row mb-4 pb-2">
                        <div className="col-md-6">
                          <div className="card offer-card shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title">
                                <img src="img/bank/1.png" /> OSAHANEAT50
                              </h5>
                              <h6 className="card-subtitle mb-2 text-block">
                                Get 50% OFF on your first osahan eat order
                              </h6>
                              <p className="card-text">
                                Use code OSAHANEAT50 &amp; get 50% off on your
                                first osahan order on Website and Mobile site.
                                Maximum discount: $200
                              </p>
                              <a href="#" className="card-link">
                                COPY CODE
                              </a>
                              <a href="#" className="card-link">
                                KNOW MORE
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card offer-card shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title">
                                <img src="img/bank/2.png" /> EAT730
                              </h5>
                              <h6 className="card-subtitle mb-2 text-block">
                                Get 50% OFF on your first osahan eat order
                              </h6>
                              <p className="card-text">
                                Use code EAT730 &amp; get 50% off on your first
                                osahan order on Website and Mobile site. Maximum
                                discount: $600
                              </p>
                              <a href="#" className="card-link">
                                COPY CODE
                              </a>
                              <a href="#" className="card-link">
                                KNOW MORE
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4 pb-2">
                        <div className="col-md-6">
                          <div className="card offer-card shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title">
                                <img src="img/bank/3.png" /> SAHAN50
                              </h5>
                              <h6 className="card-subtitle mb-2 text-block">
                                Get 50% OFF on your first osahan eat order
                              </h6>
                              <p className="card-text">
                                Use code SAHAN50 &amp; get 50% off on your first
                                osahan order on Website and Mobile site. Maximum
                                discount: $200
                              </p>
                              <a href="#" className="card-link">
                                COPY CODE
                              </a>
                              <a href="#" className="card-link">
                                KNOW MORE
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card offer-card shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title">
                                <img src="img/bank/4.png" /> GURDEEP50
                              </h5>
                              <h6 className="card-subtitle mb-2 text-block">
                                Get 50% OFF on your first osahan eat order
                              </h6>
                              <p className="card-text">
                                Use code GURDEEP50 &amp; get 50% off on your
                                first osahan order on Website and Mobile site.
                                Maximum discount: $600
                              </p>
                              <a href="#" className="card-link">
                                COPY CODE
                              </a>
                              <a href="#" className="card-link">
                                KNOW MORE
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card offer-card shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title">
                                <img src="img/bank/1.png" /> OSAHANEAT50
                              </h5>
                              <h6 className="card-subtitle mb-2 text-block">
                                Get 50% OFF on your first osahan eat order
                              </h6>
                              <p className="card-text">
                                Use code OSAHANEAT50 &amp; get 50% off on your
                                first osahan order on Website and Mobile site.
                                Maximum discount: $200
                              </p>
                              <a href="#" className="card-link">
                                COPY CODE
                              </a>
                              <a href="#" className="card-link">
                                KNOW MORE
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card offer-card shadow-sm">
                            <div className="card-body">
                              <h5 className="card-title">
                                <img src="img/bank/2.png" /> EAT730
                              </h5>
                              <h6 className="card-subtitle mb-2 text-block">
                                Get 50% OFF on your first osahan eat order
                              </h6>
                              <p className="card-text">
                                Use code EAT730 &amp; get 50% off on your first
                                osahan order on Website and Mobile site. Maximum
                                discount: $600
                              </p>
                              <a href="#" className="card-link">
                                COPY CODE
                              </a>
                              <a href="#" className="card-link">
                                KNOW MORE
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="favourites"
                      role="tabpanel"
                      aria-labelledby="favourites-tab"
                    >
                      <h4 className="font-weight-bold mt-0 mb-4">Favourites</h4>
                      <div className="row">
                        <div className="col-md-4 col-sm-6 mb-4 pb-2">
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              <div className="star position-absolute">
                                <span className="badge badge-success">
                                  <i className="icofont-star" /> 3.1 (300+)
                                </span>
                              </div>
                              <div className="favourite-heart text-danger position-absolute">
                                <a href="detail.html">
                                  <i className="icofont-heart" />
                                </a>
                              </div>
                              <div className="member-plan position-absolute">
                                <span className="badge badge-dark">
                                  Promoted
                                </span>
                              </div>
                              <a href="detail.html">
                                <img
                                  src="img/list/4.png"
                                  className="img-fluid item-img"
                                />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1">
                                  <a href="detail.html" className="text-black">
                                    Famous Dave's Bar-B-Que
                                  </a>
                                </h6>
                                <p className="text-gray mb-3">
                                  Vegetarian • Indian • Pure veg
                                </p>
                                <p className="text-gray mb-3 time">
                                  <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                    <i className="icofont-wall-clock" /> 15–30
                                    min
                                  </span>{" "}
                                  <span className="float-right text-black-50">
                                    {" "}
                                    $350 FOR TWO
                                  </span>
                                </p>
                              </div>
                              <div className="list-card-badge">
                                <span className="badge badge-danger">
                                  OFFER
                                </span>{" "}
                                <small> Use Coupon OSAHAN50</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 pb-2">
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              <div className="star position-absolute">
                                <span className="badge badge-success">
                                  <i className="icofont-star" /> 3.1 (300+)
                                </span>
                              </div>
                              <div className="favourite-heart text-danger position-absolute">
                                <a href="detail.html">
                                  <i className="icofont-heart" />
                                </a>
                              </div>
                              <div className="member-plan position-absolute">
                                <span className="badge badge-dark">
                                  Promoted
                                </span>
                              </div>
                              <a href="detail.html">
                                <img
                                  src="img/list/5.png"
                                  className="img-fluid item-img"
                                />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1">
                                  <a href="detail.html" className="text-black">
                                    Thai Famous Cuisine
                                  </a>
                                </h6>
                                <p className="text-gray mb-3">
                                  North Indian • Indian • Pure veg
                                </p>
                                <p className="text-gray mb-3 time">
                                  <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                    <i className="icofont-wall-clock" /> 30–35
                                    min
                                  </span>{" "}
                                  <span className="float-right text-black-50">
                                    {" "}
                                    $250 FOR TWO
                                  </span>
                                </p>
                              </div>
                              <div className="list-card-badge">
                                <span className="badge badge-success">
                                  OFFER
                                </span>{" "}
                                <small>65% off</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 pb-2">
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              <div className="star position-absolute">
                                <span className="badge badge-success">
                                  <i className="icofont-star" /> 3.1 (300+)
                                </span>
                              </div>
                              <div className="favourite-heart text-danger position-absolute">
                                <a href="detail.html">
                                  <i className="icofont-heart" />
                                </a>
                              </div>
                              <div className="member-plan position-absolute">
                                <span className="badge badge-dark">
                                  Promoted
                                </span>
                              </div>
                              <a href="detail.html">
                                <img
                                  src="img/list/6.png"
                                  className="img-fluid item-img"
                                />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1">
                                  <a href="detail.html" className="text-black">
                                    The osahan Restaurant
                                  </a>
                                </h6>
                                <p className="text-gray mb-3">
                                  North • Hamburgers • Pure veg
                                </p>
                                <p className="text-gray mb-3 time">
                                  <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                    <i className="icofont-wall-clock" /> 15–25
                                    min
                                  </span>{" "}
                                  <span className="float-right text-black-50">
                                    {" "}
                                    $500 FOR TWO
                                  </span>
                                </p>
                              </div>
                              <div className="list-card-badge">
                                <span className="badge badge-danger">
                                  OFFER
                                </span>{" "}
                                <small>65% OSAHAN50</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 pb-2">
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              <div className="star position-absolute">
                                <span className="badge badge-success">
                                  <i className="icofont-star" /> 3.1 (300+)
                                </span>
                              </div>
                              <div className="favourite-heart text-danger position-absolute">
                                <a href="detail.html">
                                  <i className="icofont-heart" />
                                </a>
                              </div>
                              <div className="member-plan position-absolute">
                                <span className="badge badge-dark">
                                  Promoted
                                </span>
                              </div>
                              <a href="detail.html">
                                <img
                                  src="img/list/7.png"
                                  className="img-fluid item-img"
                                />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1">
                                  <a href="detail.html" className="text-black">
                                    Stan's Restaurant
                                  </a>
                                </h6>
                                <p className="text-gray mb-3">
                                  North Indian • Indian • Pure veg
                                </p>
                                <p className="text-gray mb-3 time">
                                  <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                    <i className="icofont-wall-clock" /> 15–25
                                    min
                                  </span>{" "}
                                  <span className="float-right text-black-50">
                                    {" "}
                                    $250 FOR TWO
                                  </span>
                                </p>
                              </div>
                              <div className="list-card-badge">
                                <span className="badge badge-danger">
                                  OFFER
                                </span>{" "}
                                <small>65% Coupon OSAHAN50</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 pb-2">
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              <div className="star position-absolute">
                                <span className="badge badge-success">
                                  <i className="icofont-star" /> 3.1 (300+)
                                </span>
                              </div>
                              <div className="favourite-heart text-danger position-absolute">
                                <a href="detail.html">
                                  <i className="icofont-heart" />
                                </a>
                              </div>
                              <div className="member-plan position-absolute">
                                <span className="badge badge-dark">
                                  Promoted
                                </span>
                              </div>
                              <a href="detail.html">
                                <img
                                  src="img/list/8.png"
                                  className="img-fluid item-img"
                                />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1">
                                  <a href="detail.html" className="text-black">
                                    Polo Lounge
                                  </a>
                                </h6>
                                <p className="text-gray mb-3">
                                  North Indian • Indian • Pure veg
                                </p>
                                <p className="text-gray mb-3 time">
                                  <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                    <i className="icofont-wall-clock" /> 15–25
                                    min
                                  </span>{" "}
                                  <span className="float-right text-black-50">
                                    {" "}
                                    $250 FOR TWO
                                  </span>
                                </p>
                              </div>
                              <div className="list-card-badge">
                                <span className="badge badge-danger">
                                  OFFER
                                </span>{" "}
                                <small> Coupon OSAHAN50</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 pb-2">
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              <div className="star position-absolute">
                                <span className="badge badge-success">
                                  <i className="icofont-star" /> 3.1 (300+)
                                </span>
                              </div>
                              <div className="favourite-heart text-danger position-absolute">
                                <a href="detail.html">
                                  <i className="icofont-heart" />
                                </a>
                              </div>
                              <div className="member-plan position-absolute">
                                <span className="badge badge-dark">
                                  Promoted
                                </span>
                              </div>
                              <a href="detail.html">
                                <img
                                  src="img/list/9.png"
                                  className="img-fluid item-img"
                                />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1">
                                  <a href="detail.html" className="text-black">
                                    Jack Fry's
                                  </a>
                                </h6>
                                <p className="text-gray mb-3">
                                  North Indian • Indian • Pure veg
                                </p>
                                <p className="text-gray mb-3 time">
                                  <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                    <i className="icofont-wall-clock" /> 15–25
                                    min
                                  </span>{" "}
                                  <span className="float-right text-black-50">
                                    {" "}
                                    $250 FOR TWO
                                  </span>
                                </p>
                              </div>
                              <div className="list-card-badge">
                                <span className="badge badge-danger">
                                  OFFER
                                </span>{" "}
                                <small>65% </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 text-center load-more">
                          <button
                            className="btn btn-primary"
                            type="button"
                            disabled=""
                          >
                            <span
                              className="spinner-grow spinner-grow-sm"
                              role="status"
                              aria-hidden="true"
                            />
                            Loading...
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="payments"
                      role="tabpanel"
                      aria-labelledby="payments-tab"
                    >
                      <h4 className="font-weight-bold mt-0 mb-4">Payments</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="bg-white card payments-item mb-4 shadow-sm">
                            <div className="gold-members p-4">
                              <a href="#"></a>
                              <div className="media">
                                <a href="#">
                                  <img
                                    className="mr-3"
                                    src="img/bank/1.png"
                                    alt="Generic placeholder image"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h6 className="mb-1">6070-XXXXXXXX-0666</h6>
                                    <p>VALID TILL 10/2025</p>
                                  </a>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a href="#"></a>
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-white card payments-item mb-4 shadow-sm">
                            <div className="gold-members p-4">
                              <a href="#"></a>
                              <div className="media">
                                <a href="#">
                                  <img
                                    className="mr-3"
                                    src="img/bank/2.png"
                                    alt="Generic placeholder image"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h6 className="mb-1">6070-XXXXXXXX-0666</h6>
                                    <p>VALID TILL 10/2025</p>
                                  </a>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a href="#"></a>
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-2 pb-2">
                        <div className="col-md-6">
                          <div className="bg-white card payments-item mb-4 shadow-sm">
                            <div className="gold-members p-4">
                              <a href="#"></a>
                              <div className="media">
                                <a href="#">
                                  <img
                                    className="mr-3"
                                    src="img/bank/3.png"
                                    alt="Generic placeholder image"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h6 className="mb-1">6070-XXXXXXXX-0666</h6>
                                    <p>VALID TILL 10/2025</p>
                                  </a>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a href="#"></a>
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-white card payments-item mb-4 shadow-sm">
                            <div className="gold-members p-4">
                              <a href="#"></a>
                              <div className="media">
                                <a href="#">
                                  <img
                                    className="mr-3"
                                    src="img/bank/4.png"
                                    alt="Generic placeholder image"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h6 className="mb-1">6070-XXXXXXXX-0666</h6>
                                    <p>VALID TILL 10/2025</p>
                                  </a>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a href="#"></a>
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="bg-white card payments-item mb-4 shadow-sm">
                            <div className="gold-members p-4">
                              <a href="#"></a>
                              <div className="media">
                                <a href="#">
                                  <img
                                    className="mr-3"
                                    src="img/bank/5.png"
                                    alt="Generic placeholder image"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h6 className="mb-1">6070-XXXXXXXX-0666</h6>
                                    <p>VALID TILL 10/2025</p>
                                  </a>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a href="#"></a>
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-white card payments-item mb-4 shadow-sm">
                            <div className="gold-members p-4">
                              <a href="#"></a>
                              <div className="media">
                                <a href="#">
                                  <img
                                    className="mr-3"
                                    src="img/bank/6.png"
                                    alt="Generic placeholder image"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h6 className="mb-1">6070-XXXXXXXX-0666</h6>
                                    <p>VALID TILL 10/2025</p>
                                  </a>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a href="#"></a>
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-md-6">
                          <div className="bg-white card payments-item shadow-sm">
                            <div className="gold-members p-4">
                              <a href="#"></a>
                              <div className="media">
                                <a href="#">
                                  <img
                                    className="mr-3"
                                    src="img/bank/1.png"
                                    alt="Generic placeholder image"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h6 className="mb-1">6070-XXXXXXXX-0666</h6>
                                    <p className="text-black">
                                      VALID TILL 10/2025
                                    </p>
                                  </a>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a href="#"></a>
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-white card payments-item shadow-sm">
                            <div className="gold-members p-4">
                              <a href="#"></a>
                              <div className="media">
                                <a href="#">
                                  <img
                                    className="mr-3"
                                    src="img/bank/2.png"
                                    alt="Generic placeholder image"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h6 className="mb-1">6070-XXXXXXXX-0666</h6>
                                    <p>VALID TILL 10/2025</p>
                                  </a>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a href="#"></a>
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="addresses"
                      role="tabpanel"
                      aria-labelledby="addresses-tab"
                    >
                      <h4 className="font-weight-bold mt-0 mb-4">
                        Manage Addresses
                      </h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="bg-white card addresses-item mb-4 border border-primary shadow">
                            <div className="gold-members p-4">
                              <div className="media">
                                <div className="mr-3">
                                  <i className="icofont-ui-home icofont-3x" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1 text-secondary">Home</h6>
                                  <p className="text-black">
                                    Osahan House, Jawaddi Kalan, Ludhiana,
                                    Punjab 141002, India
                                  </p>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a
                                      className="text-primary mr-3"
                                      data-toggle="modal"
                                      data-target="#add-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-edit" /> EDIT
                                    </a>{" "}
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-white card addresses-item mb-4 shadow-sm">
                            <div className="gold-members p-4">
                              <div className="media">
                                <div className="mr-3">
                                  <i className="icofont-briefcase icofont-3x" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">Work</h6>
                                  <p>
                                    NCC, Model Town Rd, Pritm Nagar, Model Town,
                                    Ludhiana, Punjab 141002, India
                                  </p>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a
                                      className="text-primary mr-3"
                                      data-toggle="modal"
                                      data-target="#add-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-edit" /> EDIT
                                    </a>{" "}
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-2 pb-2">
                        <div className="col-md-6">
                          <div className="bg-white card addresses-item mb-4  shadow-sm">
                            <div className="gold-members p-4">
                              <div className="media">
                                <div className="mr-3">
                                  <i className="icofont-location-pin icofont-3x" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">Other</h6>
                                  <p>
                                    Delhi Bypass Rd, Jawaddi Taksal, Ludhiana,
                                    Punjab 141002, India
                                  </p>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a
                                      className="text-primary mr-3"
                                      data-toggle="modal"
                                      data-target="#add-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-edit" /> EDIT
                                    </a>{" "}
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-white card addresses-item mb-4  shadow-sm">
                            <div className="gold-members p-4">
                              <div className="media">
                                <div className="mr-3">
                                  <i className="icofont-location-pin icofont-3x" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">Other</h6>
                                  <p>
                                    MT, Model Town Rd, Pritm Nagar, Model Town,
                                    Ludhiana, Punjab 141002, India
                                  </p>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a
                                      className="text-primary mr-3"
                                      data-toggle="modal"
                                      data-target="#add-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-edit" /> EDIT
                                    </a>{" "}
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="bg-white card addresses-item shadow-sm">
                            <div className="gold-members p-4">
                              <div className="media">
                                <div className="mr-3">
                                  <i className="icofont-location-pin icofont-3x" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">Other</h6>
                                  <p>
                                    GNE Rd, Jawaddi Taksal, Ludhiana, Punjab
                                    141002, India
                                  </p>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a
                                      className="text-primary mr-3"
                                      data-toggle="modal"
                                      data-target="#add-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-edit" /> EDIT
                                    </a>{" "}
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-white card addresses-item shadow-sm">
                            <div className="gold-members p-4">
                              <div className="media">
                                <div className="mr-3">
                                  <i className="icofont-location-pin icofont-3x" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">Other</h6>
                                  <p>
                                    GTTT, Model Town Rd, Pritm Nagar, Model
                                    Town, Ludhiana, Punjab 141002, India
                                  </p>
                                  <p className="mb-0 text-black font-weight-bold">
                                    <a
                                      className="text-primary mr-3"
                                      data-toggle="modal"
                                      data-target="#add-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-edit" /> EDIT
                                    </a>{" "}
                                    <a
                                      className="text-danger"
                                      data-toggle="modal"
                                      data-target="#delete-address-modal"
                                      href="#"
                                    >
                                      <i className="icofont-ui-delete" /> DELETE
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default CheckOrder;
