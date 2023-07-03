import React from "react";

function DetailRestaurent() {
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
        <section className="restaurant-detailed-banner">
          <div className="text-center">
            <img
              className="img-fluid cover"
              src="img/mall-dedicated-banner.png"
            />
          </div>
          <div className="restaurant-detailed-header">
            <div className="container">
              <div className="row d-flex align-items-end">
                <div className="col-md-8">
                  <div className="restaurant-detailed-header-left">
                    <img
                      className="img-fluid mr-3 float-left"
                      alt="osahan"
                      src="img/1.jpg"
                    />
                    <h2 className="text-white">
                      Bánh Tráng Cuốn Thịt Heo Hoàng Bèo
                    </h2>
                    <p className="text-white mb-1">
                      <i /> 40 Duy Tân, Quận Cầu Giấy, Hà Nội{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="restaurant-detailed-header-right text-right">
                    <button className="btn btn-success" type="button">
                      <i className="icofont-clock-time" /> Giao hàng: 25–35 min
                    </button>
                    <h6 className="text-white mb-0 restaurant-detailed-ratings">
                      <span className="generator-bg rounded text-white">
                        <i className="icofont-star" /> 3.1
                      </span>{" "}
                      23 Ratings <i className="ml-3 icofont-speech-comments" />{" "}
                      91 reviews
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="offer-dedicated-nav bg-white border-top-0 shadow-sm">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="nav" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-order-online-tab"
                      data-toggle="pill"
                      href="#pills-order-online"
                      role="tab"
                      aria-controls="pills-order-online"
                      aria-selected="true"
                    >
                      Đặt món
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-restaurant-info-tab"
                      data-toggle="pill"
                      href="#pills-restaurant-info"
                      role="tab"
                      aria-controls="pills-restaurant-info"
                      aria-selected="false"
                    >
                      Thông tin nhà hàng
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-gallery-tab"
                      data-toggle="pill"
                      href="#pills-gallery"
                      role="tab"
                      aria-controls="pills-gallery"
                      aria-selected="false"
                    >
                      Thư viện ảnh
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-reviews-tab"
                      data-toggle="pill"
                      href="#pills-reviews"
                      role="tab"
                      aria-controls="pills-reviews"
                      aria-selected="false"
                    >
                      Đánh giá &amp; Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="offer-dedicated-body-left">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-order-online"
                      role="tabpanel"
                      aria-labelledby="pills-order-online-tab"
                    >
                      <div id="#menu" className="row">
                        {/* <h5 class="mb-4 mt-3 col-md-12">Bán chạy</h5> */}
                        <div className="col-md-4 col-sm-6 mb-4">
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              {/* <div class="star position-absolute"><span class="badge badge-success"><i
                                                      class="icofont-star"></i> 3.1 (300+)</span></div> */}
                              <div className="favourite-heart text-danger position-absolute">
                                <a href="#">
                                  <i className="icofont-heart" />
                                </a>
                              </div>
                              <div className="member-plan position-absolute">
                                <span className="badge badge-dark">
                                  Promoted
                                </span>
                              </div>
                              <a href="#">
                                <img
                                  src="img/list/7.png"
                                  className="img-fluid item-img"
                                />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1">
                                  <a href="#" className="text-black">
                                    Gafood - Gà Ủ Muối
                                  </a>
                                </h6>
                                <p className="text-gray mb-2">Bạch Mai</p>
                                <p className="text-gray time mb-0">
                                  <a
                                    className="btn btn-link btn-sm text-black"
                                    href="#"
                                  >
                                    30.000{" "}
                                    <span className="badge badge-success">
                                      5% Giảm
                                    </span>
                                  </a>{" "}
                                  <span className="float-right">
                                    <a
                                      className="btn btn-outline-secondary btn-sm"
                                      href="#"
                                    >
                                      Mua ngay
                                    </a>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              {/* <div class="star position-absolute"><span class="badge badge-success"><i
                                                      class="icofont-star"></i> 3.1 (300+)</span></div> */}
                              <div className="favourite-heart text-danger position-absolute">
                                <a href="#">
                                  <i className="icofont-heart" />
                                </a>
                              </div>
                              <div className="member-plan position-absolute">
                                <span className="badge badge-dark">
                                  Promoted
                                </span>
                              </div>
                              <a href="#">
                                <img
                                  src="img/list/8.png"
                                  className="img-fluid item-img"
                                />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1">
                                  <a href="#" className="text-black">
                                    Trà Sữa - Đường 18
                                  </a>
                                </h6>
                                <p className="text-gray mb-2">
                                  P. Mộ Lao, Hà Đông, Hà Nội
                                </p>
                                <p className="text-gray time mb-0">
                                  <a
                                    className="btn btn-link btn-sm text-black"
                                    href="#"
                                  >
                                    5.000{" "}
                                    <span className="badge badge-primary">
                                      Giảm
                                    </span>
                                  </a>{" "}
                                  <span className="float-right">
                                    <a
                                      className="btn btn-outline-secondary btn-sm"
                                      href="#"
                                    >
                                      Mua ngay
                                    </a>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              {/* <div class="star position-absolute"><span class="badge badge-success"><i
                                                      class="icofont-star"></i> 3.1 (300+)</span></div> */}
                              <div className="favourite-heart text-danger position-absolute">
                                <a href="#">
                                  <i className="icofont-heart" />
                                </a>
                              </div>
                              <div className="member-plan position-absolute">
                                <span className="badge badge-dark">
                                  Promoted
                                </span>
                              </div>
                              <a href="#">
                                <img
                                  src="img/list/9.png"
                                  className="img-fluid item-img"
                                />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1">
                                  <a href="#" className="text-black">
                                    Nem Chua Rán
                                  </a>
                                </h6>
                                <p className="text-gray mb-2">
                                  P. Bồ Đề, Long Biên, Hà Nội
                                </p>
                                <p className="text-gray time mb-0">
                                  <a
                                    className="btn btn-link btn-sm text-black"
                                    href="#"
                                  >
                                    50.000{" "}
                                    <span className="badge badge-info">
                                      Giảm
                                    </span>
                                  </a>{" "}
                                  <span className="float-right">
                                    <a
                                      className="btn btn-outline-secondary btn-sm"
                                      href="#"
                                    >
                                      Mua ngay{" "}
                                    </a>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <h5 className="mb-4 mt-3 col-md-12">
                          Starters{" "}
                          <small className="h6 text-black-50">3 ITEMS</small>
                        </h5>
                        <div className="col-md-12">
                          <div className="bg-white rounded border shadow-sm mb-4">
                            <div className="menu-list p-3 border-bottom container">
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
                              <div className="media containerfood">
                                <img
                                  className="mr-3 rounded-pill"
                                  src="img/5.jpg"
                                  alt="Generic placeholder image"
                                />
                                <div className="media-body ">
                                  <h6 className="mb-1">Chả Nấm Tươi</h6>
                                  <p className="text-gray mb-0">
                                    150.000 (1kg)
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="menu-list p-3 border-bottom">
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
                              <div className="media containerfood">
                                <img
                                  className="mr-3 rounded-pill"
                                  src="img/2.jpg"
                                  alt="Generic placeholder image"
                                />
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    Chả Cốm Non Ước Lễ{" "}
                                    <span className="badge badge-danger">
                                      BESTSELLER
                                    </span>
                                  </h6>
                                  <p className="text-gray mb-0">60.000/1kg</p>
                                </div>
                              </div>
                            </div>
                            <div className="menu-list p-3">
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
                              <div className="media containerfood">
                                <img
                                  className="mr-3 rounded-pill"
                                  src="img/3.jpg"
                                  alt="Generic placeholder image"
                                />
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    Chả Mỡ Phố Cổ
                                    <span className="badge badge-success">
                                      Siêu giảm giá
                                    </span>
                                  </h6>
                                  <p className="text-gray mb-0">45.000/1kg</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-gallery"
                      role="tabpanel"
                      aria-labelledby="pills-gallery-tab"
                    >
                      <div
                        id="gallery"
                        className="bg-white rounded shadow-sm p-4 mb-4"
                      >
                        <div className="restaurant-slider-main position-relative homepage-great-deals-carousel">
                          <div className="owl-carousel owl-theme homepage-ad">
                            <div className="item">
                              <img
                                className="img-fluid"
                                src="img/gallery/1.png"
                              />
                            </div>
                            <div className="item">
                              <img
                                className="img-fluid"
                                src="img/gallery/2.png"
                              />
                            </div>
                            <div className="item">
                              <img
                                className="img-fluid"
                                src="img/gallery/3.png"
                              />
                            </div>
                            <div className="item">
                              <img
                                className="img-fluid"
                                src="img/gallery/1.png"
                              />
                            </div>
                            <div className="item">
                              <img
                                className="img-fluid"
                                src="img/gallery/2.png"
                              />
                            </div>
                            <div className="item">
                              <img
                                className="img-fluid"
                                src="img/gallery/3.png"
                              />
                            </div>
                          </div>
                          <div className="position-absolute restaurant-slider-pics bg-dark text-white">
                            2 of 14 Photos
                          </div>
                          <div className="position-absolute restaurant-slider-view-all">
                            <button
                              type="button"
                              className="btn btn-light bg-white"
                            >
                              See all Photos
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-restaurant-info"
                      role="tabpanel"
                      aria-labelledby="pills-restaurant-info-tab"
                    >
                      <div
                        id="restaurant-info"
                        className="bg-white rounded shadow-sm p-4 mb-4"
                      >
                        <div className="address-map float-right ml-5">
                          <div className="mapouter">
                            <div className="gmap_canvas">
                              <iframe
                                width={300}
                                height={170}
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=9&ie=UTF8&iwloc=&output=embed"
                                frameBorder={0}
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                              />
                            </div>
                          </div>
                        </div>
                        <h5 className="mb-4">Restaurant Info</h5>
                        <p className="mb-3">
                          Jagjit Nagar, Near Railway Crossing,
                          <br /> Near Model Town, Ludhiana, PUNJAB
                        </p>
                        <p className="mb-2 text-black">
                          <i className="icofont-phone-circle text-primary mr-2" />
                          +91 01234-56789, +91 01234-56789
                        </p>
                        <p className="mb-2 text-black">
                          <i className="icofont-email text-primary mr-2" />{" "}
                          <a
                            href="https://thaotrinh.info/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="97fef6faf8e4f6fff6f9d7f0faf6fefbb9f4f8fa"
                          >
                            [email&nbsp;protected]
                          </a>
                          ,
                          <a
                            href="https://thaotrinh.info/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="a6c9d5c7cec7c8c3c7d2e6c1cbc7cfca88c5c9cb"
                          >
                            [email&nbsp;protected]
                          </a>
                        </p>
                        <p className="mb-2 text-black">
                          <i className="icofont-clock-time text-primary mr-2" />
                          Today 11am – 5pm, 6pm – 11pm
                          <span className="badge badge-success">
                            {" "}
                            OPEN NOW{" "}
                          </span>
                        </p>
                        <hr className="clearfix" />
                        <p className="text-black mb-0">
                          You can also check the 3D view by using our menue map
                          clicking here &nbsp;&nbsp;&nbsp;{" "}
                          <a className="text-info font-weight-bold" href="#">
                            Venue Map
                          </a>
                        </p>
                        <hr className="clearfix" />
                        <h5 className="mt-4 mb-4">More Info</h5>
                        <p className="mb-3">
                          Dal Makhani, Panneer Butter Masala, Kadhai Paneer,
                          Raita, Veg Thali, Laccha Paratha, Butter Naan
                        </p>
                        <div className="border-btn-main mb-4">
                          <a className="border-btn text-success mr-2" href="#">
                            <i className="icofont-check-circled" /> Breakfast
                          </a>
                          <a className="border-btn text-danger mr-2" href="#">
                            <i className="icofont-close-circled" /> No Alcohol
                            Available
                          </a>
                          <a className="border-btn text-success mr-2" href="#">
                            <i className="icofont-check-circled" /> Vegetarian
                            Only
                          </a>
                          <a className="border-btn text-success mr-2" href="#">
                            <i className="icofont-check-circled" /> Indoor
                            Seating
                          </a>
                          <a className="border-btn text-success mr-2" href="#">
                            <i className="icofont-check-circled" /> Breakfast
                          </a>
                          <a className="border-btn text-danger mr-2" href="#">
                            <i className="icofont-close-circled" /> No Alcohol
                            Available
                          </a>
                          <a className="border-btn text-success mr-2" href="#">
                            <i className="icofont-check-circled" /> Vegetarian
                            Only
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-reviews"
                      role="tabpanel"
                      aria-labelledby="pills-reviews-tab"
                    >
                      <div
                        id="ratings-and-reviews"
                        className="bg-white rounded shadow-sm p-4 mb-4 clearfix restaurant-detailed-star-rating"
                      >
                        <span className="star-rating float-right">
                          <a href="#">
                            <i className="icofont-ui-rating icofont-2x active" />
                          </a>
                          <a href="#">
                            <i className="icofont-ui-rating icofont-2x active" />
                          </a>
                          <a href="#">
                            <i className="icofont-ui-rating icofont-2x active" />
                          </a>
                          <a href="#">
                            <i className="icofont-ui-rating icofont-2x active" />
                          </a>
                          <a href="#">
                            <i className="icofont-ui-rating icofont-2x" />
                          </a>
                        </span>
                        <h5 className="mb-0 pt-1">Rate this Place</h5>
                      </div>
                      <div className="bg-white rounded shadow-sm p-4 mb-4 clearfix graph-star-rating">
                        <h5 className="mb-0 mb-4">Ratings and Reviews</h5>
                        <div className="graph-star-rating-header">
                          <div className="star-rating">
                            <a href="#">
                              <i className="icofont-ui-rating active" />
                            </a>
                            <a href="#">
                              <i className="icofont-ui-rating active" />
                            </a>
                            <a href="#">
                              <i className="icofont-ui-rating active" />
                            </a>
                            <a href="#">
                              <i className="icofont-ui-rating active" />
                            </a>
                            <a href="#">
                              <i className="icofont-ui-rating" />
                            </a>{" "}
                            <b className="text-black ml-2">334</b>
                          </div>
                          <p className="text-black mb-4 mt-2">
                            Rated 3.5 out of 5
                          </p>
                        </div>
                        <div className="graph-star-rating-body">
                          <div className="rating-list">
                            <div className="rating-list-left text-black">
                              5 Star
                            </div>
                            <div className="rating-list-center">
                              <div className="progress">
                                <div
                                  style={{ width: "56%" }}
                                  aria-valuemax={5}
                                  aria-valuemin={0}
                                  aria-valuenow={5}
                                  role="progressbar"
                                  className="progress-bar bg-primary"
                                >
                                  <span className="sr-only">
                                    80% Complete (danger)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="rating-list-right text-black">
                              56%
                            </div>
                          </div>
                          <div className="rating-list">
                            <div className="rating-list-left text-black">
                              4 Star
                            </div>
                            <div className="rating-list-center">
                              <div className="progress">
                                <div
                                  style={{ width: "23%" }}
                                  aria-valuemax={5}
                                  aria-valuemin={0}
                                  aria-valuenow={5}
                                  role="progressbar"
                                  className="progress-bar bg-primary"
                                >
                                  <span className="sr-only">
                                    80% Complete (danger)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="rating-list-right text-black">
                              23%
                            </div>
                          </div>
                          <div className="rating-list">
                            <div className="rating-list-left text-black">
                              3 Star
                            </div>
                            <div className="rating-list-center">
                              <div className="progress">
                                <div
                                  style={{ width: "11%" }}
                                  aria-valuemax={5}
                                  aria-valuemin={0}
                                  aria-valuenow={5}
                                  role="progressbar"
                                  className="progress-bar bg-primary"
                                >
                                  <span className="sr-only">
                                    80% Complete (danger)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="rating-list-right text-black">
                              11%
                            </div>
                          </div>
                          <div className="rating-list">
                            <div className="rating-list-left text-black">
                              2 Star
                            </div>
                            <div className="rating-list-center">
                              <div className="progress">
                                <div
                                  style={{ width: "2%" }}
                                  aria-valuemax={5}
                                  aria-valuemin={0}
                                  aria-valuenow={5}
                                  role="progressbar"
                                  className="progress-bar bg-primary"
                                >
                                  <span className="sr-only">
                                    80% Complete (danger)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="rating-list-right text-black">
                              02%
                            </div>
                          </div>
                        </div>
                        <div className="graph-star-rating-footer text-center mt-3 mb-3">
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                          >
                            Rate and Review
                          </button>
                        </div>
                      </div>
                      <div className="bg-white rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews">
                        <a
                          href="#"
                          className="btn btn-outline-primary btn-sm float-right"
                        >
                          Top Rated
                        </a>
                        <h5 className="mb-1">All Ratings and Reviews</h5>
                        <div className="reviews-members pt-4 pb-4">
                          <div className="media">
                            <a href="#">
                              <img
                                alt="Generic placeholder image"
                                src="img/user/1.png"
                                className="mr-3 rounded-pill"
                              />
                            </a>
                            <div className="media-body">
                              <div className="reviews-members-header">
                                <span className="star-rating float-right">
                                  <a href="#">
                                    <i className="icofont-ui-rating active" />
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-rating active" />
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-rating active" />
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-rating active" />
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-rating" />
                                  </a>
                                </span>
                                <h6 className="mb-1">
                                  <a className="text-black" href="#">
                                    Singh Osahan
                                  </a>
                                </h6>
                                <p className="text-gray">Tue, 20 Mar 2020</p>
                              </div>
                              <div className="reviews-members-body">
                                <p>
                                  Contrary to popular belief, Lorem Ipsum is not
                                  simply random text. It has roots in a piece of
                                  classical Latin literature from 45 BC, making
                                  it over 2000 years old. Richard McClintock, a
                                  Latin professor at Hampden-Sydney College in
                                  Virginia, looked up one of the more obscure
                                  Latin words, consectetur, from a Lorem Ipsum
                                  passage, and going through the cites of the
                                  word in classical literature, discovered the
                                  undoubtable source. Lorem Ipsum comes from
                                  sections{" "}
                                </p>
                              </div>
                              <div className="reviews-members-footer">
                                <a className="total-like" href="#">
                                  <i className="icofont-thumbs-up" />
                                  856M
                                </a>{" "}
                                <a className="total-like" href="#">
                                  <i className="icofont-thumbs-down" /> 158K
                                </a>
                                <span
                                  className="total-like-user-main ml-2"
                                  dir="rtl"
                                >
                                  <a
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Gurdeep Osahan"
                                    href="#"
                                  >
                                    <img
                                      alt="Generic placeholder image"
                                      src="img/user/5.png"
                                      className="total-like-user rounded-pill"
                                    />
                                  </a>
                                  <a
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Gurdeep Singh"
                                    href="#"
                                  >
                                    <img
                                      alt="Generic placeholder image"
                                      src="img/user/2.png"
                                      className="total-like-user rounded-pill"
                                    />
                                  </a>
                                  <a
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Askbootstrap"
                                    href="#"
                                  >
                                    <img
                                      alt="Generic placeholder image"
                                      src="img/user/3.png"
                                      className="total-like-user rounded-pill"
                                    />
                                  </a>
                                  <a
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Osahan"
                                    href="#"
                                  >
                                    <img
                                      alt="Generic placeholder image"
                                      src="img/user/4.png"
                                      className="total-like-user rounded-pill"
                                    />
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="reviews-members pt-4 pb-4">
                          <div className="media">
                            <a href="#">
                              <img
                                alt="Generic placeholder image"
                                src="img/user/6.png"
                                className="mr-3 rounded-pill"
                              />
                            </a>
                            <div className="media-body">
                              <div className="reviews-members-header">
                                <span className="star-rating float-right">
                                  <a href="#">
                                    <i className="icofont-ui-rating active" />
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-rating active" />
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-rating active" />
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-rating active" />
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-rating" />
                                  </a>
                                </span>
                                <h6 className="mb-1">
                                  <a className="text-black" href="#">
                                    Gurdeep Singh
                                  </a>
                                </h6>
                                <p className="text-gray">Tue, 20 Mar 2020</p>
                              </div>
                              <div className="reviews-members-body">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                  as opposed to using 'Content here, content
                                  here', making it look like readable English.
                                </p>
                              </div>
                              <div className="reviews-members-footer">
                                <a className="total-like" href="#">
                                  <i className="icofont-thumbs-up" />
                                  88K
                                </a>{" "}
                                <a className="total-like" href="#">
                                  <i className="icofont-thumbs-down" /> 1K
                                </a>
                                <span
                                  className="total-like-user-main ml-2"
                                  dir="rtl"
                                >
                                  <a
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Gurdeep Osahan"
                                    href="#"
                                  >
                                    <img
                                      alt="Generic placeholder image"
                                      src="img/user/5.png"
                                      className="total-like-user rounded-pill"
                                    />
                                  </a>
                                  <a
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Gurdeep Singh"
                                    href="#"
                                  >
                                    <img
                                      alt="Generic placeholder image"
                                      src="img/user/2.png"
                                      className="total-like-user rounded-pill"
                                    />
                                  </a>
                                  <a
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Askbootstrap"
                                    href="#"
                                  >
                                    <img
                                      alt="Generic placeholder image"
                                      src="img/user/3.png"
                                      className="total-like-user rounded-pill"
                                    />
                                  </a>
                                  <a
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Osahan"
                                    href="#"
                                  >
                                    <img
                                      alt="Generic placeholder image"
                                      src="img/user/4.png"
                                      className="total-like-user rounded-pill"
                                    />
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <a
                          className="text-center w-100 d-block mt-4 font-weight-bold"
                          href="#"
                        >
                          See All Reviews
                        </a>
                      </div>
                      <div className="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
                        <h5 className="mb-4">Leave Comment</h5>
                        <p className="mb-2">Rate the Place</p>
                        <div className="mb-4">
                          <span className="star-rating">
                            <a href="#">
                              <i className="icofont-ui-rating icofont-2x" />
                            </a>
                            <a href="#">
                              <i className="icofont-ui-rating icofont-2x" />
                            </a>
                            <a href="#">
                              <i className="icofont-ui-rating icofont-2x" />
                            </a>
                            <a href="#">
                              <i className="icofont-ui-rating icofont-2x" />
                            </a>
                            <a href="#">
                              <i className="icofont-ui-rating icofont-2x" />
                            </a>
                          </span>
                        </div>
                        <form>
                          <div className="form-group">
                            <label>Your Comment</label>
                            <textarea
                              className="form-control"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group">
                            <button
                              className="btn btn-primary btn-sm"
                              type="button"
                            >
                              {" "}
                              Submit Comment
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pb-2">
                  <div className="bg-white rounded shadow-sm text-white mb-4 p-4 clearfix restaurant-detailed-earn-pts card-icon-overlap containerfood">
                    <div>
                      <img
                        className="img-fluid float-left mr-3"
                        src="img/earn-score-icon.png"
                      />
                    </div>
                    <div>
                      <h6 className="pt-0 text-primary mb-1 font-weight-bold">
                        VSATTP
                      </h6>
                      <p className="mb-0">
                        Nhà hàng chứng nhận đảm bảo vệ sinh an toàn thực phẩm
                      </p>
                      <div className="icon-overlap">
                        <i className="icofont-sale-discount" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
                  <h5 className="mb-1 text-white">Đặt hàng ngay</h5>
                  <p className="mb-4 text-white">5 sản phẩm</p>
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
                    <img
                      className="img-fluid float-left"
                      src="img/wallet-icon.png"
                    />
                    <h6 className="font-weight-bold text-right mb-2">
                      Tổng đơn: <span className="text-danger">235.000</span> vnđ
                    </h6>
                    <h6 className="font-weight-bold text-right mb-2">
                      Giảm giá: <span className="text-danger">30.000</span> vnđ
                    </h6>
                    <h6 className="font-weight-bold text-right mb-2">
                      Thanh toán: <span className="text-danger">205.000</span>{" "}
                      vnđ
                    </h6>
                    {/* <p class="seven-color mb-1 text-right">Extra charges may apply</p> */}
                    <p className="text-black mb-0 text-right">
                      Tiết kiệm 30.000 vnđ
                    </p>
                  </div>
                  <a
                    href="checkout.html"
                    className="btn btn-success btn-block btn-lg"
                  >
                    Checkout <i className="icofont-long-arrow-right" />
                  </a>
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
                  Operate food store or restaurants?{" "}
                  <a href="login.html">Work With Us</a>
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="footer pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-12 col-sm-12">
                <h6 className="mb-3">Subscribe to our Newsletter</h6>
                <form className="newsletter-form mb-1">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Please enter your email"
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <button type="button" className="btn btn-primary">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
                <p>
                  <a className="text-info" href="register.html">
                    Register now
                  </a>{" "}
                  to get updates on <a href="offers.html">Offers and Coupons</a>
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
              <div className="col-md-2 col-4 col-sm-4">
                <h6 className="mb-3">About OE</h6>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Culture</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-4 col-sm-4">
                <h6 className="mb-3">For Foodies</h6>
                <ul>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Developers</a>
                  </li>
                  <li>
                    <a href="#">Blogger Help</a>
                  </li>
                  <li>
                    <a href="#">Verified Users</a>
                  </li>
                  <li>
                    <a href="#">Code of Conduct</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-4 col-sm-4">
                <h6 className="mb-3">For Restaurants</h6>
                <ul>
                  <li>
                    <a href="#">Advertise</a>
                  </li>
                  <li>
                    <a href="#">Add a Restaurant</a>
                  </li>
                  <li>
                    <a href="#">Claim your Listing</a>
                  </li>
                  <li>
                    <a href="#">For Businesses</a>
                  </li>
                  <li>
                    <a href="#">Owner Guidelines</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-bottom-search pt-5 pb-5 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="text-black">POPULAR COUNTRIES</p>
                <div className="search-links">
                  <a href="#">Australia</a> | <a href="#">Brasil</a> |{" "}
                  <a href="#">Canada</a> | <a href="#">Chile</a> |{" "}
                  <a href="#">Czech Republic</a> | <a href="#">India</a> |{" "}
                  <a href="#">Indonesia</a> | <a href="#">Ireland</a> |{" "}
                  <a href="#">New Zealand</a> | <a href="#">United Kingdom</a> |{" "}
                  <a href="#">Turkey</a> | <a href="#">Philippines</a> |{" "}
                  <a href="#">Sri Lanka</a> | <a href="#">Australia</a> |{" "}
                  <a href="#">Brasil</a> | <a href="#">Canada</a> |{" "}
                  <a href="#">Chile</a> | <a href="#">Czech Republic</a> |{" "}
                  <a href="#">India</a> | <a href="#">Indonesia</a> |{" "}
                  <a href="#">Ireland</a> | <a href="#">New Zealand</a> |{" "}
                  <a href="#">United Kingdom</a> | <a href="#">Turkey</a> |{" "}
                  <a href="#">Philippines</a> | <a href="#">Sri Lanka</a>
                  <a href="#">Australia</a> | <a href="#">Brasil</a> |{" "}
                  <a href="#">Canada</a> | <a href="#">Chile</a> |{" "}
                  <a href="#">Czech Republic</a> | <a href="#">India</a> |{" "}
                  <a href="#">Indonesia</a> | <a href="#">Ireland</a> |
                  <a href="#">New Zealand</a> | <a href="#">United Kingdom</a> |{" "}
                  <a href="#">Turkey</a> | <a href="#">Philippines</a> |{" "}
                  <a href="#">Sri Lanka</a> | <a href="#">Australia</a> |{" "}
                  <a href="#">Brasil</a> | <a href="#">Canada</a> |{" "}
                  <a href="#">Chile</a> | <a href="#">Czech Republic</a> |{" "}
                  <a href="#">India</a> | <a href="#">Indonesia</a> |{" "}
                  <a href="#">Ireland</a> |<a href="#">New Zealand</a> |{" "}
                  <a href="#">United Kingdom</a> | <a href="#">Turkey</a> |{" "}
                  <a href="#">Philippines</a> | <a href="#">Sri Lanka</a>
                </div>
                <p className="mt-4 text-black">POPULAR FOOD</p>
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
              © Copyright 2020 Osahan Eat. All Rights Reserved
            </p>
            <small className="mt-0 mb-0">
              {" "}
              Made with <i className="fas fa-heart heart-icon text-danger" /> by
              <a className="text-danger" target="_blank" href="#">
                Gurdeep Osahan
              </a>{" "}
              -{" "}
              <a
                className="text-primary"
                target="_blank"
                href="https://thaotrinh.info/"
              >
                Ask Bootstrap
              </a>
            </small>
          </div>
        </footer>
      </>
    </div>
  );
}

export default DetailRestaurent;
