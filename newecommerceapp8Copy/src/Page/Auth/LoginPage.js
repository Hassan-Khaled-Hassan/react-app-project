import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from "../../images/Web_Photo_Editor.jpg";
import logo from "../../images/logo.png";

const LoginPage = () => {
    return (
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col
            sm="12"
            className="d-flex  pt-5 coloumn"
            style={{ width: "80%" }}
          >
            <div class="row border rounded-5 p-3 bg-white shadow box-area form">
              <div
                class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box p-0"
                style={{ overflow: "hidden" }}
              >
                <div class="featured-image" style={{ height: "100%" }}>
                  <img
                    src={prod1}
                    class="img-fluid"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div class="col-md-6 right-box">
                <div class="row align-items-center">
                  <div class="header-text mb-4">
                    <div className="image d-flex justify-content-center align-items-center">
                      <img
                        src={logo}
                        class="img-fluid mb-3"
                        style={{
                          width: "87px",
                          height: "90px",
                        }}
                      />
                    </div>
                    <h2>Hello,Again</h2>
                  </div>
                  <div class="input-group mb-3">
                    <input
                      placeholder="الايميل..."
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                    />
                  </div>
                  <div class="input-group mb-1">
                    <input
                      placeholder="كلمه السر..."
                      type="password"
                      className="form-control form-control-lg bg-light fs-6"
                    />
                  </div>
                  <div class="input-group my-3">
                    <button className="btn btn-lg btn-primary w-100 fs-6">
                      تسجيل الحساب
                    </button>
                  </div>
                  <label>
                    ليس لديك حساب ؟{" "}
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      <span
                        style={{ cursor: "pointer", textDecoration: "none" }}
                        className="text-danger"
                      >
                        اضغط هنا
                      </span>
                    </Link>
                  </label>
                </div>
              </div>
            </div>
          </Col>

          <label className="mx-auto my-4">
            <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                الدخول ادمن
              </span>
            </Link>

            <Link to="/user/allorders" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                الدخول مستخدم
              </span>
            </Link>
          </label>
        </Row>
      </Container>
    );
}

export default LoginPage
