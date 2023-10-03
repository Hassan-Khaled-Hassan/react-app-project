import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAddCategory from "../../Hooks2/Category/useAddCategory";
const AdminAddCategory = ({ value }) => {
  const [
    Img,
    Name,
    Loading,
    IsPress,
    onImageChange,
    addCategory,
    onChangeName,
  ] = useAddCategory();
  return (
    <div>
      <Row className="justify-content-start ">
        {IsPress ? (
          Loading ? (
            <Spinner
              animation="border"
              variant="primary"
              className="my-0 mx-auto"
            />
          ) : (
            <h2>تم الانتهاء ...</h2>
          )
        ) : null}
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label for="upload-photo">
              <img
                src={Img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>

          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
            onChange={onChangeName}
            value={Name}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={addCategory} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {value === false ? <ToastContainer /> : null}
    </div>
  );
};

export default AdminAddCategory;
