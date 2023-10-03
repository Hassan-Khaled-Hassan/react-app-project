import BaseURL from "../api/BaseUrl";
//"api/v1/categories"
const useDeleteData = async (url, params) => {
  const res = await BaseURL.delete(url, params);
  console.log(params);
  return res.data;
};
export default useDeleteData;
