import type { App } from 'vue';
import pinia from './pinia';
import router from './vue-router';
import vuetify from './vuetify';
import i18n from './vue-i18n';

export const initPlugins = (app: App) => {
  i18n.install(app);
  app.use(pinia);
  app.use(router);
  app.use(vuetify);
};
