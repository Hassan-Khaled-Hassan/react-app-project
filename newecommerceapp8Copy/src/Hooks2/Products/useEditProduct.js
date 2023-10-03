import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBrands } from "../../redux/actions/BrandAction";
import { GetCategories } from "../../redux/actions/CategoryAction";
import notify from "../useNotification";
import { GetSubCategoriesOnCategory } from "../../redux/actions/SubCategoryAction";
import {
  GetSpecificProduct,
  UpdateProduct,
  createProduct,
} from "../../redux/actions/ProductAction";

const useEditProduct = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      await dispatch(GetSpecificProduct(id));
      await dispatch(GetCategories());
      await dispatch(GetBrands());
    };
    run();
  }, []);
  const item = useSelector((state) => state.allProduct.oneProduct);
  const Category = useSelector((state) => state.AllCategory.Category);
  const SubCategory = useSelector((state) => state.SubCategory.SubCategory);
  const Brands = useSelector((state) => state.AllBrands.Category);

  const onSelect = (selectedList) => {
    setSeletedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSeletedSubID(selectedList);
  };
  //   --------------------------------------------
  //values images products
  const [images, setImages] = useState([]);
  //values state
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAftr, setPriceAftr] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [CatID, setCatID] = useState("0");
  const [BrandID, SetBrandID] = useState("0");
  const [subCatID, setSubCatID] = useState([]);
  const [seletedSubID, setSeletedSubID] = useState([]);
  const [loading, setLoading] = useState(true);
    const [options, setOptions] = useState([]);
  // to show the react color when i click
  //to show hide color picker
  const [showColor, setShowColor] = useState(false);
  //to store all pick color
  const [colors, setColors] = useState([]);
  // console.log(SelectedSubCatID);
  useEffect(() => {
    if (item && item.data) {
      setImages(item.data.images);
      setProdName(item.data.title);
      setProdDescription(item.data.description);
      setPriceBefore(item.data.price);
      setQty(item.data.quantity);
      setCatID(item.data.category);
      SetBrandID(item.data.brand);
      setColors(item.data.availableColors);
    }
  }, [item]);
  console.log(images);
  //   -------------------------------------------------------------
  const onSelsectCategory = async (e) => {
    setCatID(e.target.value);
  };
    const onSeletBrand = (e) => {
      SetBrandID(e.target.value);
    };
  useEffect(() => {
    if (CatID != 0) {
      const runing = async () => {
        await dispatch(GetSubCategoriesOnCategory(CatID));
      };
      runing();
    }
  }, [CatID]);
  useEffect(() => {
    if (SubCategory.data) {

      setOptions(SubCategory.data);
    }
  }, [SubCategory]);
  // this function to add new color
  const handleComplete = (e) => {
    setColors([...colors, e.hex]);
    setShowColor(!showColor);
  };
  const removeColor = (color) => {
    const newArray = colors.filter((e) => e !== color);
    setColors(newArray);
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
  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };
  // ======================================================
  //to change name state
  const onChangeProdName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };
  //to change name state
  const onChangeDesName = (event) => {
    event.persist();
    setProdDescription(event.target.value);
  };
  //to change name state
  const onChangePriceBefor = (event) => {
    event.persist();
    setPriceBefore(event.target.value);
  };
  //to change name state
  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAftr(event.target.value);
  }; //to change name state
  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };
  const onChangeColor = (event) => {
    event.persist();
    setShowColor(!showColor);
  };
  // -----------------------onSubmit------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      prodName === "" ||
      prodDescription === "" ||
      images.length <= 0 ||
      CatID === 0 ||
      priceBefore === 0 ||
      qty === 0 
    ) {
      notify("برجاء اكمال تلك البيانات", "warning");
      return;
    }
    // if (Priceoff > Price) {
    //   notify("برجاء ادخال قيم صحيحه للسعر قبل الخصم و بعده  ", "errror");
    //   return;
    // }
    let imgCover;
    if (images[0].length <= 1000) {
      // so this image is url
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }
    let itemImages = [];
    //convert array of base 64 image to file
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => itemImages.push(val));
      } else {
        itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });
    console.log(itemImages);
    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);

    formData.append("category", CatID);
    formData.append("brand", BrandID);
  
    colors.map((color) => formData.append("availableColors", color));
    seletedSubID.map((item) => formData.append("subcategory", item._id));
    console.log(itemImages);
    console.log(imgCover);
    setTimeout(() => {
      formData.append("imageCover", imgCover);
      itemImages.map((item) => formData.append("images", item));
    }, 1000);


    //before data is saved and created
    setTimeout(async () => {
      setLoading(true);
      await dispatch(UpdateProduct(id, formData));
      setLoading(false);
    }, 1000);
    console.log(formData);
  };
  //get create meesage
  const EditedProduct = useSelector(
    (state) => state.allProduct.UpdateOneProduct
  );
  console.log(EditedProduct);
   useEffect(() => {
     console.log(loading);
     if (loading === false) {
            setProdName("");
           setProdDescription("");
           setImages([]);
      setPriceBefore("السعر قبل الخصم");
      setPriceAftr("السعر بعد الخصم");
      setQty("الكمية المتاحة");
           setCatID("0");
           SetBrandID(0);
           setColors([]);
           setTimeout(() => setLoading(true), 800);
       console.log(EditedProduct);
       if (EditedProduct) {
         if (EditedProduct.status === 200) {
           notify("تم التعديل بنجاح", "success");
         } else {
           notify("هناك مشكله", "error");
         }
       }
     }
   }, [loading]);
  return [
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
  ];
};
export default useEditProduct;
