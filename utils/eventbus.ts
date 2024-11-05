// @ts-ignore
import mitt from 'mitt';

// @ts-ignore
const emitter = mitt();

export default {
  // @ts-ignore
  $on: (...args) => emitter.on(...args),
  // @ts-ignore
  $once: (...args) => emitter.once(...args),
  // @ts-ignore
  $off: (...args) => emitter.off(...args),
  // @ts-ignore
  $emit: (...args) => emitter.emit(...args),
};
