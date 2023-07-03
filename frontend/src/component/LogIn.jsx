import React from "react";

function LogIn() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto pl-5 pr-5">
                    <h3 className="login-heading mb-4">Wellcome back!</h3>
                    <form>
                      <div className="form-label-group">
                        <input
                          type="email"
                          id="inputEmail"
                          className="form-control"
                          placeholder="Email address"
                        />
                        <label htmlFor="inputEmail">Email</label>
                      </div>
                      <div className="form-label-group">
                        <input
                          type="password"
                          id="inputPassword"
                          className="form-control"
                          placeholder="Password"
                        />
                        <label htmlFor="inputPassword">Password</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          Nhớ mật khẩu
                        </label>
                      </div>
                      <a
                        href="index.html"
                        className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                      >
                        Đăng nhập
                      </a>
                      <div className="text-center pt-3">
                        Bạn chưa có tài khoản?{" "}
                        <a className="font-weight-bold" href="register.html">
                          Đăng ký ngay
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
