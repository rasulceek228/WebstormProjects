import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings.js";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: UpdateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: (newSettings) => updateSettingApi(newSettings),
    onSuccess: () => {
      toast.success("Settings were updated successfully!");

      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { UpdateSetting, isUpdating };
}
