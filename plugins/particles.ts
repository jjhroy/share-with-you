import Particles from '@tsparticles/vue3';
import { loadSlim } from '@tsparticles/slim';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Particles, {
    init: async (engine: any) => {
      await loadSlim(engine);
    },
  });
});
