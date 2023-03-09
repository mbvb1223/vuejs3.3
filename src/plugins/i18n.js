import { createI18n } from 'vue-i18n'

import vnMessage from '@/locales/vi.json'
import enMessage from '@/locales/en.json'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    vi: vnMessage,
    en: enMessage,
  }
})
