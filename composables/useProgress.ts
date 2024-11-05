import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

export function useProgress() {
  function start() {
    if (window?.document) {
      NProgress.start();
    }
  }
  function stop() {
    if (window?.document) {
      NProgress.done();
    }
  }
  return {
    start,
    stop,
  };
}
