import { createInstance, TFunction, i18n as I18nInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

export type SupportedLocales = 'en' | 'es';
export type Namespace = string | string[];

const initI18next = async (lng: SupportedLocales, ns: Namespace): Promise<I18nInstance> => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: SupportedLocales, namespace: Namespace) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(
  lng: SupportedLocales,
  ns: Namespace,
  options: { keyPrefix?: string } = {}
): Promise<{ t: TFunction; i18n: I18nInstance }> {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance,
  };
}

//Configuración de i18n
const i18nConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'] as SupportedLocales[],
  },
};

export default i18nConfig;
