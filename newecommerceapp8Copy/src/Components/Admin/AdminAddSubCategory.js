import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCreateSubCategory from '../../Hooks2/SubCategory/useCreateSubCategory';


const AdminAddSubCategory = ({ value }) => {
  const [
    Category,
    Name,
    onChangeName,
    Loading,
    IsPress,
    handleChange,
    handleSubmit,
  ] = useCreateSubCategory();
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
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            value={Name}
            onChange={onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
          />
          <select
            name="languages"
            id="lang"
            className="select mt-3 px-2 "
            onChange={handleChange}
          >
            <option value="0">اختر تصنيف رئيسي ...</option>
            {Category.data ? (
              Category.data.map((item) => {
                return (
                  <option value={item._id} key={item._id}>
                    {item.name}
                  </option>
                );
              })
            ) : (
              <option value="val2"> لا توجد تصنيفات حتي الان ...</option>
            )}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2" onClick={handleSubmit}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {value === false ? <ToastContainer /> : null}
    </div>
  );
};

export default AdminAddSubCategory
