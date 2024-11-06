import { useAuthStore } from '@/store/auth';

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();
  if (to.name == 'auth-signin') {
    if (!authStore.profile?.token) {
      return;
    } else {
      return navigateTo({
        name: 'index',
      });
    }
  }
  return;
});
