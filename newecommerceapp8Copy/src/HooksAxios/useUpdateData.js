import BaseURL from "../api/BaseUrl";
export const useUpdateDataWithImg = async (url, params) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const res = await BaseURL.put(url, params, config);
  console.log(res.status);

  return res;
};

export const useUpdateData = async (url, params) => {
  const res = await BaseURL.post(url, params);

  return res.data;
};
