import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();
  if (to.name == 'auth-signin') {
    if (!authStore?.token) {
      return;
    } else {
      return navigateTo({
        name: 'index',
      });
    }
  }
  return;
});
