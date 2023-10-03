import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Hooks2/useNotification";
import avatar from "../../images/avatar.png";
import { CreateBrand } from "../../redux/actions/BrandAction";
const useAddBrand = () => {
  const [Img, setState] = useState(avatar);
  const [Name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [IsPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  // save image which user select it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setState(URL.createObjectURL(event.target.files[0]));

      setSelectedFile(event.target.files[0]);
    }
  };

  const state = useSelector((state) => state.AllBrands.Category);
  // save data in database
  const addBrand = async (event) => {
    event.preventDefault();
    if (Name === "" || selectedFile === null) {
      notify("توجد مشكله ما لديك", "warning");
      return;
    }
    //form data
    const formData = new FormData();
    formData.append("name", Name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIsPress(true);
    await dispatch(CreateBrand(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (Loading === false) {
      setName("");
      setState(avatar);
      setSelectedFile(null);
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (state.status === 201) {
        notify("تمت عمليه الاضافه بنجاح", "success");
      } else {
        notify("توجد مشكله ما لديك", "error");
      }
    }
  }, [Loading]);

  return [Img, Name, Loading, IsPress, onImageChange, addBrand, onChangeName];
};

export default useAddBrand;
