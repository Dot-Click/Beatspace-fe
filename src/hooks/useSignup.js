import { useMutation } from "@tanstack/react-query";
import custAxios from "../configs/axios.config";
import { toast } from "sonner";

const isValidJWT = (token) => {
  if (!token) return false;
  const parts = token.split(".");
  return parts.length === 3;
};

export const useSignup = () => {
  return useMutation({
    mutationFn: async (values) => {
      const res = await custAxios.post("/auth/register", {
        name: values.fullName,
        email: values.email,
        password: values.password,
        provider: "local",
      });

      if (res.data && res.data.data && res.data.data.token) {
        const token = res.data.data.token;
        localStorage.setItem("token", token);
        if (!isValidJWT(token)) {
        }
      } else {
      }

      return res.data;
    },

    onError: (error) => {
      toast.error(error.response.data.message);
      throw error;
    },
  });
};
