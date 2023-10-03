import React  from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';

import add from '../../images/add.png';
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';
import useAddProduct from '../../Hooks2/Products/useAddProduct';
const AdminAddProducts = ({ value }) => {
  const [
    Category,
    Brands,
    SelectedColor,
    Loading,
    IsPress,
    options,
    showColor,
    images,
    Name,
    Desc,
    Price,
    Priceoff,
    qty,
    onSelect,
    onRemove,
    handleSubmit,
    handleComplete,
    removeColor,
    onSelsectCategory,
    onChangedName,
    onChangePrice,
    onChangePriceoff,
    onChangeQty,
    onChangeColor,
    onChangeDesc,
    setImages,
    setBrandID,
  ] = useAddProduct();
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
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
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
            value={Name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            onChange={onChangedName}
          />
          <textarea
            value={Desc}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            onChange={onChangeDesc}
          />
          <input
            value={Price <= 0 ? "السعر قبل الخصم" : Price}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            onChange={onChangePrice}
          />
          <input
            value={Priceoff <= 0 ? "سعر المنتج بعد الخصم" : Priceoff}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر المنتج بعد الخصم"
            onChange={onChangePriceoff}
          />
          <input
            value={qty <= 0 ? "الكميه المتاحه " : qty}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكميه المتاحه "
            onChange={onChangeQty}
          />
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelsectCategory}
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
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
            onChange={(e) => setBrandID(e.target.value)}
          >
            <option value="val">اختر ماركه ...</option>
            {Brands.data ? (
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
            {SelectedColor.length >= 1
              ? SelectedColor.map((color, index) => {
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

export default AdminAddProducts
