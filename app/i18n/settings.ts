import { Namespace, SupportedLocales } from "."

export const fallbackLng = 'en'
export const languages = [fallbackLng, 'es']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (lng: SupportedLocales = fallbackLng, ns: Namespace = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
