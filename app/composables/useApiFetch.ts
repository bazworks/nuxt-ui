import type { UseFetchOptions } from "#app";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export function useApiFetch<T>(
  url: string,
  options: UseFetchOptions<ApiResponse<T>> = {}
) {
  const ui = useUiStore();
  const config = useRuntimeConfig();
  const token = useCookie("access_token");

  const { data, pending, error } = useFetch<ApiResponse<T>>(url, {
    baseURL: config.public.API_BASE_URL,
    headers: token.value ? { Authorization: `Bearer ${token.value}` } : {},
    ...options,
    transform: (response) => {
      if (!response.success) {
        return { ...response, success: false };
      }
      return response;
    },
  });

  // Handle loading state
  watch(pending, (val) => {
    ui.setLoading(val);
  });

  // Initial loading state
  ui.setLoading(pending.value);

  return {
    data: computed(() => data.value?.data ?? null),
    success: computed(() => data.value?.success ?? false),
    message: computed(() => data.value?.message ?? ""),
    errors: computed(() => data.value?.errors ?? []),
    pending,
    error,
  };
}
