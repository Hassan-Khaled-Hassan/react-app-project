import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetBrands } from '../../redux/actions/BrandAction';
import { GetCategories } from '../../redux/actions/CategoryAction';
import notify from '../useNotification';
import { GetSubCategoriesOnCategory } from '../../redux/actions/SubCategoryAction';
import { createProduct } from '../../redux/actions/ProductAction';

const useAddProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warn");
      return;
    }
    dispatch(GetCategories());
    dispatch(GetBrands());
  }, []);
  // values of images using MultiImageInput
  const [images, setImages] = useState([]);
  // use state to sat the name
  const [Name, setName] = useState("");
  // use state to sat the description
  const [Desc, setDesc] = useState("");
  // use state to sat the price
  const [Price, setPrice] = useState(0);
  // use state to sat the price after offer
  const [Priceoff, setPriceoff] = useState(0);
  // use state to sat the price after offer
  const [qty, setQty] = useState(0);
  // use state to sat the price after offer
  const [CatID, setCatID] = useState("");
  // use state to sat the price after offer
  const [BrandID, setBrandID] = useState("");
  // use state to sat the price after offer
  const [SubCatID, setSubCatID] = useState([]);
  // use state to sat the price after offer
  const [SelectedSubCatID, setSelectedSubID] = useState([]);
  // to show the react color when i click
  const [showColor, setshowColor] = useState(false);
  const [SelectedColor, setSelectedColor] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [IsPress, setIsPress] = useState(false);
  const Category = useSelector((state) => state.AllCategory.Category);
  const SubCategory = useSelector((state) => state.SubCategory.SubCategory);
  const Brands = useSelector((state) => state.AllBrands.Category);
  const Products = useSelector((state) => state.allProduct.Product);
  //   -------------------------------------------------------------
  const onSelect = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  // console.log(SelectedSubCatID);
  const [options, setoptions] = useState([]);
  //   --------------------------------------------
  const onSelsectCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(GetSubCategoriesOnCategory(e.target.value));
    }
    setCatID(e.target.value);
  };
  useEffect(() => {
    if (CatID !== 0) {
      if (SubCategory.data) {
        setoptions(SubCategory.data);
      }
    }
  }, [CatID]);
  // this function to add new color
  const handleComplete = (e) => {
    setSelectedColor([...SelectedColor, e.hex]);
    setshowColor(!showColor);
  };
  const removeColor = (color) => {
    const newArray = SelectedColor.filter((e) => e !== color);
    setSelectedColor(newArray);
  };
  // ====================================================================
  // -------------function to change the image from base64 to file to send it  لان دا احد عيوب ال library اللي استخدمنها علشان نختار الصور
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
  // ======================================================
  //to change name state
  const onChangedName = (event) => {
    event.persist();
    setName(event.target.value);
  };
  //to change name state
  const onChangeDesc = (event) => {
    event.persist();
    setDesc(event.target.value);
  };
  //to change name state
  const onChangePrice = (event) => {
    event.persist();
    setPrice(event.target.value);
  };
  //to change name state
  const onChangePriceoff = (event) => {
    event.persist();
    setPriceoff(event.target.value);
  }; //to change name state
  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };
  const onChangeColor = (event) => {
    event.persist();
    setshowColor(!showColor);
  };
  // -----------------------onSubmit------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      Name === "" ||
      Desc === "" ||
      images.length <= 0 ||
      CatID === 0 ||
      Price === 0 ||
      qty === 0 ||
      SelectedSubCatID.length <= 0
    ) {
      notify("برجاء اكمال تلك البيانات", "warning");
      return;
    }
    if(Priceoff > Price){
      notify("برجاء ادخال قيم صحيحه للسعر قبل الخصم و بعده  ", "errror");
      return;
    }
    const IMGCover = dataURLtoFile(images[0], Math.random() + ".png");
    const formData = new FormData();
    formData.append("title", Name);
    formData.append("description", Desc);
    formData.append("price", Price);
    formData.append("quantity", qty);
    formData.append("imageCover", IMGCover);
    formData.append("category", CatID);
    formData.append("brand", BrandID);
    if (SelectedColor.length >= 1) {
      SelectedColor.map((color) => {
        formData.append("availableColors", color);
      });
    }
    if (SelectedSubCatID.length >= 1) {
      SelectedSubCatID.map((item) => formData.append("subcategory", item._id));
    }
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );

    itemImages.map((item) => formData.append("images", item));
    //before data is saved and created
    setLoading(true);
    setIsPress(true);
    // --------------------------------
    await dispatch(createProduct(formData));
    setLoading(false);
  };
  console.log(options);
  useEffect(() => {
    if (Loading === false) {
      setName("");
      setDesc("");
      setImages([]);
    setPrice(0);
    setPriceoff(0);
    setQty(0);
      setCatID("0");
      setBrandID("");
      setSelectedSubID([]);
      setTimeout(() => setIsPress(false), 800);
      console.log(Products);
      if (Products.status) {
        notify("تم ادحال تلك البيانات  بنجاح ", "success");
      } else if (
        Products === "errorAxiosError: Request failed with status code 400"
      ) {
        notify("تم ادحال تلك البيانات من قبل ", "warning");
        dispatch(GetCategories());
      } else {
        notify("هناك مشكله في ادخال البيانات ", "error");
      }
      setLoading(true);
    }
  }, [Loading]);
  return [
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
  ];
}

export default useAddProduct