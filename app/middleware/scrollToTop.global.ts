export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== from.path) {
    setTimeout(() => {
      $('#main-layout')?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 0);
  }
});
