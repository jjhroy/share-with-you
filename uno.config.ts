import { defineConfig, presetUno, presetTypography } from 'unocss';
import presetTagify from '@unocss/preset-tagify';
export default defineConfig({
  presets: [presetUno(), presetTypography(), presetTagify],
  shortcuts: {
    'flex-in-row': 'flex flex-row justify-start items-center',
    'flex-in-sb': 'flex flex-row justify-between items-center',
    'flex-in-col': 'flex flex-col justify-start',
    'flex-in-box': 'flex flex-col justify-center items-center',
  },
});
