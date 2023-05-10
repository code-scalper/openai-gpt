import Router from "next/router";

import qs from "qs";
import axiosLib from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "/";
const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? "";

const axios: any = axiosLib;
interface FetchData {
  url: string;
  method: string;
  params: any;
}
export const $_lib_fetchData = async (
  url = "",
  method = "get",
  params = {}
) => {
  if (axios.defaults.baseURL === undefined) {
    setBasicAxiosSetting();
  }

  const res: any = await axios[method](`${API_URL}${url}`, params).catch(
    (err: any) => {
      // error handler need
      console.log(err, "err");
    }
  );
  if (res != null && res.status === 200) {
    // do pre handler
    console.log(url, res);
    console.table(res.data);
  }
  return res;
};

export const setBasicAxiosSetting = () => {
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Authorization"] = `Bearer ${OPENAI_API_KEY}`;

  axios.defaults.baseURL = API_URL;
  // axios.defaults.withCredentials = true;
  axios.defaults.paramsSerializer = {
    encode: (params: any) => {
      console.log(params, "params");
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  };
  console.log("axios base setting 🤟");
  axios.interceptors.request.use(
    function (config: any) {
      return config;
    },
    async function (error: any) {
      return await Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    function (response: any) {
      return response;
    },
    async function (error: any) {
      console.log(error, "error", error.message, { error });
      const { status, refreshPass, config } = error.response;
      // response.data.message 로 변경
      if (status === 401) {
        // const res = await reIssue();
        // if (res.status === 200) {
        //   return await axios(config);
        // } else {
        //   Router.push({ pathname: "/login", query: { status } });
        // }
      }
      console.log(`Error${status} => ${config.url}`);
      return await Promise.reject(error);
    }
  );
};
