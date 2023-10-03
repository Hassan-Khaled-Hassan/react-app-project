import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import add from "../../images/add.png";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import useEditProduct from "../../Hooks2/Products/useEditProduct";
const AdminEditProducts = ({ value }) => {
  const { id } = useParams();
  const [
    CatID,
    BrandID,
    onChangeDesName,
    onChangeQty,
    onChangeColor,
    onChangePriceAfter,
    onChangePriceBefor,
    onChangeProdName,
    showColor,
    Category,
    Brands,
    priceAftr,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handleComplete,
    removeColor,
    onSelsectCategory,
    handleSubmit,
    onSeletBrand,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
    loading,
  ] = useEditProduct(id);
  return (
    <div>
      <Row className="justify-content-start ">
        {!loading ? (
          <Spinner
            animation="border"
            variant="primary"
            className="my-0 mx-auto"
          />
        ) : null}
        <div className="admin-content-text pb-4">
          {" "}
          تعديل المنتج - {prodName}
        </div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={5}
          />
          <input
            value={prodName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            onChange={onChangeProdName}
          />
          <textarea
            value={prodDescription}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            onChange={onChangeDesName}
          />
          <input
            value={priceBefore}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            onChange={onChangePriceBefor}
          />
          <input
            value={priceAftr}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر المنتج بعد الخصم"
            onChange={onChangePriceAfter}
          />
          <input
            value={qty}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكميه المتاحه "
            onChange={onChangeQty}
          />
          <select
            value={CatID}
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelsectCategory}
          >
            <option value="0">اختر تصنيف رئيسي ...</option>
            {Category && Category.data ? (
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

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            value={BrandID}
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
            onChange={onSeletBrand}
          >
            <option value="val">اختر ماركه ...</option>
            {Brands && Brands.data ? (
              Brands.data.map((item) => {
                return (
                  <option value={item._id} key={item._id}>
                    {item.name}
                  </option>
                );
              })
            ) : (
              <option value="val2"> لا توجد ماركه متاحه حتي الان ...</option>
            )}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors.length >= 1
              ? colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => removeColor(color)}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })
              : null}
            <img
              onClick={onChangeColor}
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={handleComplete} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {value === false ? <ToastContainer /> : null}
    </div>
  );
};

export default AdminEditProducts;
