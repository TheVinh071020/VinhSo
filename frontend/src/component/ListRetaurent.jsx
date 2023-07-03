import React from "react";

function ListRetaurent() {
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
        <section className="breadcrumb-osahan pt-5 pb-5 bg-dark position-relative text-center">
          <h1 className="text-white">Offers Near You</h1>
          <h6 className="text-white-50">
            Best deals at your favourite restaurants
          </h6>
        </section>
        <section className="section pt-5 pb-5 products-listing">
          <div className="container">
            <div className="row d-none-m">
              <div className="col-md-12">
                <div className="dropdown float-right">
                  <a
                    className="btn btn-outline-info dropdown-toggle btn-sm border-white-btn"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by: <span className="text-theme">Distance</span>{" "}
                    &nbsp;&nbsp;
                  </a>
                  <div className="dropdown-menu dropdown-menu-right shadow-sm border-0 ">
                    <a className="dropdown-item" href="#">
                      Distance
                    </a>
                    <a className="dropdown-item" href="#">
                      No Of Offers
                    </a>
                    <a className="dropdown-item" href="#">
                      Rating
                    </a>
                  </div>
                </div>
                <h4 className="font-weight-bold mt-0 mb-3">
                  OFFERS <small className="h6 mb-0 ml-2">299 restaurants</small>
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="filters shadow-sm rounded bg-white mb-4">
                  <div className="filters-header border-bottom pl-4 pr-4 pt-3 pb-3">
                    <h5 className="m-0">Filter By</h5>
                  </div>
                  <div className="filters-body">
                    <div id="accordion">
                      <div className="filters-card border-bottom p-4">
                        <div className="filters-card-header" id="headingOne">
                          <h6 className="mb-0">
                            <a
                              href="#"
                              className="btn-link"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Location{" "}
                              <i className="icofont-arrow-down float-right" />
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="filters-card-body card-shop-filters">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb1"
                              >
                                Ludhiana Junction{" "}
                                <small className="text-black-50">230</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb2"
                              >
                                Model Town{" "}
                                <small className="text-black-50">95</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb3"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb3"
                              >
                                Civil Lines{" "}
                                <small className="text-black-50">35</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb4"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb4"
                              >
                                Dugri{" "}
                                <small className="text-black-50">46</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb5"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb5"
                              >
                                PAU <small className="text-black-50">20</small>
                              </label>
                            </div>
                            <div className="mt-2">
                              <a href="#" className="link">
                                See all
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="filters-card border-bottom p-4">
                        <div className="filters-card-header" id="headingTwo">
                          <h6 className="mb-0">
                            <a
                              href="#"
                              className="btn-link"
                              data-toggle="collapse"
                              data-target="#collapsetwo"
                              aria-expanded="true"
                              aria-controls="collapsetwo"
                            >
                              All cuisines
                              <i className="icofont-arrow-down float-right" />
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapsetwo"
                          className="collapse show"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="filters-card-body card-shop-filters">
                            <form className="filters-search mb-3">
                              <div className="form-group">
                                <i className="icofont-search" />
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Start typing to search..."
                                />
                              </div>
                            </form>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb6"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb6"
                              >
                                American{" "}
                                <small className="text-black-50">156</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb7"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb7"
                              >
                                Pizza{" "}
                                <small className="text-black-50">120</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb8"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb8"
                              >
                                Healthy{" "}
                                <small className="text-black-50">130</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb9"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb9"
                              >
                                Vegetarian{" "}
                                <small className="text-black-50">120</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb10"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb10"
                              >
                                {" "}
                                Chinese{" "}
                                <small className="text-black-50">111</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb11"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb11"
                              >
                                {" "}
                                Hamburgers{" "}
                                <small className="text-black-50">95</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb12"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb12"
                              >
                                {" "}
                                Dessert{" "}
                                <small className="text-black-50">50</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb13"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb13"
                              >
                                {" "}
                                Chicken{" "}
                                <small className="text-black-50">32</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb14"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb14"
                              >
                                {" "}
                                Indian{" "}
                                <small className="text-black-50">156</small>
                              </label>
                            </div>
                            <div className="mt-2">
                              <a href="#" className="link">
                                See all
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="filters-card border-bottom p-4">
                        <div
                          className="filters-card-header"
                          id="headingCategory"
                        >
                          <h6 className="mb-0">
                            <a
                              href="#"
                              className="btn-link"
                              data-toggle="collapse"
                              data-target="#collapseFeature"
                              aria-expanded="true"
                              aria-controls="collapseFeature"
                            >
                              Feature{" "}
                              <i className="icofont-arrow-down float-right" />
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapseFeature"
                          className="collapse"
                          aria-labelledby="headingCategory"
                          data-parent="#accordion"
                        >
                          <div className="filters-card-body card-shop-filters">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb15"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb15"
                              >
                                Free Delivery{" "}
                                <small className="text-black-50">156</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb26"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb26"
                              >
                                Coupons{" "}
                                <small className="text-black-50">120</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb37"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb37"
                              >
                                Open Now [1:31am]{" "}
                                <small className="text-black-50">85</small>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="filters-card border-bottom p-4">
                        <div className="filters-card-header" id="headingOffer">
                          <h6 className="mb-0">
                            <a
                              href="#"
                              className="btn-link"
                              data-toggle="collapse"
                              data-target="#collapseOffer"
                              aria-expanded="true"
                              aria-controls="collapseOffer"
                            >
                              Delivery time{" "}
                              <i className="icofont-arrow-down float-right" />
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapseOffer"
                          className="collapse"
                          aria-labelledby="headingOffer"
                          data-parent="#accordion"
                        >
                          <div className="filters-card-body card-shop-filters">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb19"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb19"
                              >
                                Any Time{" "}
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb20"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb20"
                              >
                                25 min
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb36"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb36"
                              >
                                30 min
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb47"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb47"
                              >
                                40 min
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb58"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb58"
                              >
                                50 min
                              </label>
                            </div>
                            <div className="mt-2">
                              <a href="#" className="link">
                                See all
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="filters-card p-4">
                        <div
                          className="filters-card-header"
                          id="headingCategory"
                        >
                          <h6 className="mb-0">
                            <a
                              href="#"
                              className="btn-link"
                              data-toggle="collapse"
                              data-target="#collapseCategory"
                              aria-expanded="true"
                              aria-controls="collapseCategory"
                            >
                              Category{" "}
                              <i className="icofont-arrow-down float-right" />
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapseCategory"
                          className="collapse"
                          aria-labelledby="headingCategory"
                          data-parent="#accordion"
                        >
                          <div className="filters-card-body card-shop-filters">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb15"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb15"
                              >
                                Delivery{" "}
                                <small className="text-black-50">156</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb26"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb26"
                              >
                                Dine-out{" "}
                                <small className="text-black-50">120</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb37"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb37"
                              >
                                Cafés<small className="text-black-50">85</small>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filters pt-2">
                  <div className="filters-body rounded shadow-sm bg-white">
                    <div className="filters-card p-4">
                      <div>
                        <div className="filters-card-body card-shop-filters pt-0">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio1"
                              name="customRadio"
                              className="custom-control-input"
                              defaultChecked=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio1"
                            >
                              Gold Partner
                            </label>
                          </div>
                          <div className="custom-control custom-radio mt-1 mb-1">
                            <input
                              type="radio"
                              id="customRadio2"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio2"
                            >
                              Order Food Online
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio3"
                              name="customRadio"
                              className="custom-control-input"
                              defaultChecked=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio3"
                            >
                              Osahan Eat
                            </label>
                          </div>
                          <hr />
                          <small className="text-success">
                            Use code OSAHAN50 to get 50% OFF (up to $30) on
                            first 5 orders. T&amp;Cs apply.
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
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
                          <span className="badge badge-dark">Promoted</span>
                        </div>
                        <a href="detail.html">
                          <img
                            src="img/list/1.png"
                            className="img-fluid item-img"
                          />
                        </a>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <a href="detail.html" className="text-black">
                              World Famous
                            </a>
                          </h6>
                          <p className="text-gray mb-3">
                            North Indian • American • Pure veg
                          </p>
                          <p className="text-gray mb-3 time">
                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                              <i className="icofont-wall-clock" /> 20–25 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $250 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-success">OFFER</span>{" "}
                          <small>65% off | Use Coupon OSAHAN50</small>
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
                          <span className="badge badge-dark">Promoted</span>
                        </div>
                        <a href="detail.html">
                          <img
                            src="img/list/2.png"
                            className="img-fluid item-img"
                          />
                        </a>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <a href="detail.html" className="text-black">
                              Famous Food
                            </a>
                          </h6>
                          <p className="text-gray mb-3">
                            North Indian • Indian • Pure veg
                          </p>
                          <p className="text-gray mb-3 time">
                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                              <i className="icofont-wall-clock" /> 15–25 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $250 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-danger">OFFER</span>{" "}
                          <small>65% off | Use Coupon OSAHAN50</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4 pb-2">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <div className="star position-absolute">
                          <span className="badge badge-warning">
                            <i className="icofont-star" /> 3.1 (300+)
                          </span>
                        </div>
                        <div className="favourite-heart text-danger position-absolute">
                          <a href="detail.html">
                            <i className="icofont-heart" />
                          </a>
                        </div>
                        <div className="member-plan position-absolute">
                          <span className="badge badge-dark">Promoted</span>
                        </div>
                        <a href="detail.html">
                          <img
                            src="img/list/3.png"
                            className="img-fluid item-img"
                          />
                        </a>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <a href="detail.html" className="text-black">
                              Bite Me Sandwiches
                            </a>
                          </h6>
                          <p className="text-gray mb-3">
                            North Indian • Indian • Pure veg
                          </p>
                          <p className="text-gray mb-3 time">
                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                              <i className="icofont-wall-clock" /> 15–25 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $100 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-danger">OFFER</span>{" "}
                          <small>65% off | Use Coupon OSAHAN50</small>
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
                          <span className="badge badge-dark">Promoted</span>
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
                              <i className="icofont-wall-clock" /> 15–30 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $350 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-danger">OFFER</span>{" "}
                          <small>65% off | Use Coupon OSAHAN50</small>
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
                          <span className="badge badge-dark">Promoted</span>
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
                              <i className="icofont-wall-clock" /> 30–35 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $250 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-success">OFFER</span>{" "}
                          <small>65% off | Use Coupon OSAHAN50</small>
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
                          <span className="badge badge-danger">Promoted</span>
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
                              <i className="icofont-wall-clock" /> 15–25 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $500 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-danger">OFFER</span>{" "}
                          <small>65% off | Use Coupon OSAHAN50</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4 pb-2">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div className="list-card-image">
                        <div className="star position-absolute">
                          <span className="badge badge-warning">
                            <i className="icofont-star" /> 3.1 (300+)
                          </span>
                        </div>
                        <div className="favourite-heart text-danger position-absolute">
                          <a href="detail.html">
                            <i className="icofont-heart" />
                          </a>
                        </div>
                        <div className="member-plan position-absolute">
                          <span className="badge badge-dark">Promoted</span>
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
                              <i className="icofont-wall-clock" /> 15–25 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $250 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-danger">OFFER</span>{" "}
                          <small>65% off | Use Coupon OSAHAN50</small>
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
                          <span className="badge badge-dark">Promoted</span>
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
                              <i className="icofont-wall-clock" /> 15–25 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $250 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-danger">OFFER</span>{" "}
                          <small>65% off | Use Coupon OSAHAN50</small>
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
                          <span className="badge badge-dark">Promoted</span>
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
                              <i className="icofont-wall-clock" /> 15–25 min
                            </span>{" "}
                            <span className="float-right text-black-50">
                              {" "}
                              $250 FOR TWO
                            </span>
                          </p>
                        </div>
                        <div className="list-card-badge">
                          <span className="badge badge-danger">OFFER</span>{" "}
                          <small>65% off | Use Coupon OSAHAN50</small>
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

export default ListRetaurent;
