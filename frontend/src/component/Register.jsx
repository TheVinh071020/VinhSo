import React from "react";

function Register() {
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
                    <h3 className="login-heading mb-4">
                      Đăng ký thành viên nhận ngay ưu đãi!
                    </h3>
                    <form>
                      <div className="form-label-group">
                        <input
                          type="email"
                          id="inputEmail"
                          className="form-control"
                          placeholder="Email address"
                        />
                        <label htmlFor="inputEmail">Email address</label>
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
                      <div className="form-label-group">
                        <input
                          type="password"
                          id="inputPassword"
                          className="form-control"
                          placeholder="Password"
                        />
                        <label htmlFor="inputPassword">Password</label>
                      </div>
                      <a
                        href="index.html"
                        className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                      >
                        Đăng nhập
                      </a>
                      <div className="text-center pt-3">
                        Bạn đã có tài khoản?{" "}
                        <a className="font-weight-bold" href="login.html">
                          Đăng nhập ngay
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

export default Register;
