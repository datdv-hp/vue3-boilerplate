import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify, type IconAliases } from 'vuetify';
import { aliases as defaultAliases, mdi } from 'vuetify/iconsets/mdi';
import './styles/index.scss';
import { lightTheme } from './themes';

const aliases: IconAliases = {
  ...defaultAliases
};

const Vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      lightTheme
    }
  }
});

export default Vuetify;
