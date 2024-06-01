import i18n from '@/plugins/vue-i18n';

export function isValidJSON(str: string) {
  try {
    const object = JSON.parse(str);
    if (object && typeof object === 'object') return true;
    return false;
  } catch (error) {
    return false;
  }
}

export function isStringify<T>(obj: T | Record<string, unknown>): boolean {
  try {
    JSON.stringify(obj);
  } catch (e) {
    return false;
  }
  return true;
}

export function translateYupError(
  yupError: { i18nKey: string; params?: Record<string, string> } | string
): string {
  console.log(yupError);
  if (typeof yupError === 'string') {
    return i18n.global.t(yupError);
  }
  if (!yupError?.i18nKey) return '';
  return i18n.global.t(yupError?.i18nKey, { ...(yupError?.params || {}) });
}
