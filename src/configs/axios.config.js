import axios from "axios";
export const baseURL = "";

const custAxios = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const isValidJWT = (token) => {
  return true;
};

export const attachToken = () => {
  const user = {};
  const isTeamMember = false;
  const token = "";

  if (token) {
    const bearerToken = token;
    custAxios.defaults.headers.common["Authorization"] = bearerToken;
    if (!isValidJWT(token)) {
    }
  } else {
  }
};

export const attachTokenWithFormAxios = () => {
  const token = "";
  if (token) {
    const bearerToken = token;
    formAxios.defaults.headers.common["Authorization"] = bearerToken;
  }
};

export const formAxios = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

export default custAxios;
