interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export default defineNuxtPlugin(() => {
  const accessToken = useCookie("access_token");
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.API_BASE_URL,
    onRequest({ options }) {
      if (accessToken.value) {
        options.headers = new Headers({
          ...options.headers,
          Authorization: `Bearer ${accessToken.value}`,
        });
      }
    },
    onResponse({ response }) {
      if (!response._data?.success) {
        response._data = { ...response._data, success: false };
      }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        navigateTo("/login");
      }
    },
  });

  return {
    provide: {
      api: <T>(url: string, options = {}) => api<ApiResponse<T>>(url, options),
    },
  };
});
