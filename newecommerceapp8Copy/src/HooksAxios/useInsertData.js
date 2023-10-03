import BaseURL from "../api/BaseUrl";
//"api/v1/categories"
export const useInsertData = async (url, params) => {
  const res = await BaseURL.post(url, params);
    
  return res.data;
};

export const useInsertDataWithImg = async (url, params) => {
  const config={
    headers : {"Content-Type" : "multipart/form-data"}
  }
  const res = await BaseURL.post(url, params, config);
  console.log(res.status);

  return res;
};

