import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    onSuccess: () => {
      toast.success(
        "Account created successfully! Please Verify account from user's email"
      );
    },
  });
  return { signup, isLoading };
}

