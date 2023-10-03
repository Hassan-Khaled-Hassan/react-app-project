import BaseURL from "../api/BaseUrl";
//"api/v1/categories"
const useGetData = async (url,params)=>{
     const res = await BaseURL.get(url,params);

     return res.data
}
export default useGetData;
