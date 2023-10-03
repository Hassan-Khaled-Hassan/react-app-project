import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from "../../images/Web_Photo_Editor.jpg";
import logo from "../../images/logo.png";
import useSignupHook from '../../Hooks2/Authuntication/useSignupHook';
import { ToastContainer } from 'react-toastify';
const RegisterPage = () => {
    const [
      name,
      email,
      phone,
      password,
      confirmPassword,
      loading,
      onChangeName,
      onChangeEmail,
      onChangePhone,
      onChangePassword,
      onChangeConfirmPassword,
      OnSubmit,
    ] = useSignupHook();
    return (
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col
            sm="12"
            className="d-flex flex-column  pt-5 coloumn "
            style={{ width: "80%" }}
          >
            <div className="row border rounded-5 p-3 bg-white shadow box-area form">
              <div
                className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box p-0"
                style={{ overflow: "hidden" }}
              >
                <div className="featured-image" style={{ height: "100%" }}>
                  <img
                    src={prod1}
                    className="img-fluid"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className="col-md-6 right-box">
                <div className="row align-items-center">
                  <div className="header-text mb-4">
                    <div className="image d-flex justify-content-center align-items-center">
                      <img
                        src={logo}
                        className="img-fluid mb-3"
                        style={{
                          width: "87px",
                          height: "90px",
                        }}
                      />
                    </div>
                    <h2>Hello,Again</h2>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      value={name}
                      onChange={onChangeName}
                      placeholder="اسم المستخدم..."
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      value={email}
                      onChange={onChangeEmail}
                      placeholder="الايميل..."
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      value={phone}
                      onChange={onChangePhone}
                      placeholder="رقم الهاتف  ..."
                      type="phone"
                      className="form-control form-control-lg bg-light fs-6"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      value={password}
                      onChange={onChangePassword}
                      placeholder="كلمه السر..."
                      type="password"
                      className="form-control form-control-lg bg-light fs-6"
                    />
                  </div>
                  <div className="input-group mb-1">
                    <input
                      value={confirmPassword}
                      onChange={onChangeConfirmPassword}
                      placeholder="تأكيد كلمة السر ..."
                      type="password"
                      className="form-control form-control-lg bg-light fs-6"
                    />
                  </div>
                  <div className="input-group my-3">
                    <button
                      onClick={OnSubmit}
                      className="btn btn-lg btn-primary w-100 fs-6"
                    >
                      تسجيل الحساب
                    </button>
                  </div>
                  <label>
                    لديك حساب بالفعل؟{" "}
                    <Link to="/login" style={{ textDecoration: "none" }}>
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
        </Row>
        <ToastContainer />
      </Container>
    );
}

export default RegisterPage
