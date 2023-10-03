import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCategories } from "../../redux/actions/CategoryAction";
import notify from "../useNotification";
import { CreateSubCategory } from "../../redux/actions/SubCategoryAction";
// get a state of category from redux


const useCreateSubCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warn");
      return;
    }
    dispatch(GetCategories());
  }, []);

  //on change the value of drop down
  const handleChange = (e) => {
    SetID(e.target.value);
  };
  const [ID, SetID] = useState("0");
  const [Name, SetName] = useState("");
  const [Loading, setLoading] = useState(true);
  const [IsPress, setIsPress] = useState(false);
  const Category = useSelector((state) => state.AllCategory.Category);
  const SubCategory = useSelector((state) => state.SubCategory.SubCategory);
  const onChangeName = (e) => {
    e.persist();
    SetName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      notify("هناك مشكله في الاتصال بالانترنت", "warning");
      return;
    }
    if (ID === "0") {
      notify("اختر تصنيف رئيسي ", "warning");
      return;
    }
    if (Name === "") {
      notify("ادخل تصنيف فرعي جديد", "warning");
      return;
    }
    // before data is saved and created
    setLoading(true);
    setIsPress(true);
    // ehen data is created
    await dispatch(CreateSubCategory({ name: Name, category: ID }));
    //  after data is saved and created
    setLoading(false);
  };
  useEffect(() => {
    if (Loading === false) {
      SetName("");
      SetID("0");
      setTimeout(() => setIsPress(false), 800);
      console.log(SubCategory);
      if (SubCategory.data) {
        notify("تم ادحال تلك البيانات  بنجاح ", "success");
      } else if (
        SubCategory === "errorAxiosError: Request failed with status code 400"
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
    Name,
    onChangeName,
    Loading,
    IsPress,
    handleChange,
    handleSubmit,
  ];
};

export default useCreateSubCategory
