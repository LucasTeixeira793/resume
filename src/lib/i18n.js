export const LANG_ROUTES = {
  pt: '/pt-BR',
  en: '/',
};

export function getAlternateLang(lang) {
  return lang === 'pt' ? 'en' : 'pt';
}

export function getLangToggleLabel(lang) {
  return lang === 'pt' ? 'Switch to English' : 'Mudar para Português';
}

export function getHtmlLang(lang) {
  return lang === 'pt' ? 'pt-BR' : 'en';
}
