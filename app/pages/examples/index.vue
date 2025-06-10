<template>
  <Suspense>
    <template #default>
      <div class="flex flex-col gap-8 p-8">
        <div class="p-4 mb-2">Logged In: {{ useAuth().isAuthenticated }}</div>
        <h2 class="text-lg font-semibold text-success">API Fetch Tests</h2>

        <UButton @click="fetchWithApiPlugin">Fetch via $api plugin</UButton>

        <div v-if="userViaComposable">
          <h3 class="font-bold">
            useApiFetch Result (called in script directly):
          </h3>
          <pre>{{ userViaComposable }}</pre>
        </div>

        <div v-if="userViaApiPlugin">
          <h3 class="font-bold">$api Result:</h3>
          <pre>{{ userViaApiPlugin }}</pre>
        </div>

        <div v-if="errorMsg" class="text-red-500">{{ errorMsg }}</div>

        <div class="mt-4">
          <UButton @click="logout">Logout</UButton>
        </div>
      </div>
    </template>
    <template #fallback>
      <div class="p-8">Loading...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
interface ProfileData {
  id: number;
  name: string;
  // add other profile fields as needed
}

const userViaComposable = ref<ProfileData | null>(null);
const userViaApiPlugin = ref<ProfileData | null>(null);
const errorMsg = ref("");

// Test useApiFetch (with loader, error handling, cookie)
const fetchWithComposable = async () => {
  const { data, success, errors } = await useApiFetch<ProfileData>("/profile/");
  if (success.value) {
    userViaComposable.value = data.value;
  } else {
    errorMsg.value = errors.value.join(",");
  }
};

// Test $api plugin wrapper
const fetchWithApiPlugin = async () => {
  try {
    const { success, data, errors } = await useApi()<ProfileData>("/profile/");
    if (success && data) {
      userViaApiPlugin.value = data;
    } else {
      errorMsg.value = errors?.join(",") || "Unknown error";
    }
  } catch (err: unknown) {
    console.error("Error in fetchWithApiPlugin:", err);
  }
};

const logout = () => {
  useAuth().logout();
};

fetchWithComposable();
</script>
