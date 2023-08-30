import { useQuery } from "@tanstack/react-query";

import { getSettings } from "../../services/apiSettings";

export function useSetting() {
  const {
    isLoading,
    error,
    data: setting,
  } = useQuery({
    queryKey: "settings",
    queryFn: getSettings,
  });
  return { isLoading, error, setting };
}
