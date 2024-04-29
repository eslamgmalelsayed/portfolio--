import { createI18n } from 'vue-i18n'
import ar from './ar.js';
import en from './en.js';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'ar',
    messages: {
      ar: {...ar},
      en: {...en}
    }
})

export default i18n