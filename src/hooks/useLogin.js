import { useMutation } from "@tanstack/react-query";
import custAxios from "../configs/axios.config";
import { toast } from "sonner";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (values) => {
      const res = await custAxios.post("/auth/login", values);

      localStorage.setItem("token", "");
      localStorage.setItem("ownerToken", "");
      localStorage.setItem("user", "");

      window.dispatchEvent(new Event('authChange'));

      return res.data;
    },

    onError: (error) => {
      toast.error("");
      throw error;
    },
  });
};
