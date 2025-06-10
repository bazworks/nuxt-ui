interface LoginResponse {
  access: string;
  refresh: string;
}

export function useAuth<T extends LoginResponse = LoginResponse>() {
  const accessToken = useCookie("access_token");
  const refreshToken = useCookie("refresh_token");
  const ui = useUiStore();

  const login = async (
    loginUrl: string,
    credentials: Record<string, unknown>
  ) => {
    ui.setLoading(true);
    try {
      const { data, success, errors } = await useApi()<T>(loginUrl, {
        method: "POST",
        body: credentials,
      });
      if (success && data) {
        accessToken.value = data.access;
        refreshToken.value = data.refresh;
        return true;
      } else {
        showErrorToast(errors);
        return false;
      }
    } catch (err: unknown) {
      showErrorToast(err instanceof Error ? err.message : "Unknown error");
      return false;
    } finally {
      ui.setLoading(false);
    }
  };

  const logout = () => {
    accessToken.value = null;
    refreshToken.value = null;
    navigateTo("/examples/login");
  };

  const isAuthenticated = computed(() => !!accessToken.value);

  return { login, logout, isAuthenticated };
}

function showErrorToast(res: string[] | string | undefined) {
  if (import.meta.client) {
    if (Array.isArray(res) && res.length > 0) {
      res.forEach((error: string) => {
        useToast().add({
          title: "Error",
          description: error,
          color: "error",
        });
      });
    } else {
      useToast().add({
        title: "Error",
        description: (res as string) || "Unexpected error",
        color: "error",
      });
    }
  }
}
