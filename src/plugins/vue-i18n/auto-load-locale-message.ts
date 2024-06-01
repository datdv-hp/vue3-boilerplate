import { SupportLanguage } from '@/common/constants/common.constant';

const locales: Record<string, any> = {};
const langs = Object.values(SupportLanguage);
const localeFiles = import.meta.glob<{ default: Record<string, object> }>(
  ['@/modules/**/locale/*/*.ts', '@/common/locale/*/*.ts', '@/plugins/yup/locale/*/*.ts'],
  { eager: true }
);

/**
 * Convert locale file name to camelCase
 * if it is kebab-case or contain dot '.'
 *
 * Ex:
 * - abc-def.en.ts => abcDef
 * - abc.def.en.ts => abcDef
 *
 */
function camelCase(str: string) {
  return str
    ?.replace(new RegExp(String.raw`\.(${langs.join('|')})\.ts$`), '')
    ?.replace(/(\.|-)./g, (_match) => _match?.slice(-1)?.toUpperCase());
}

for (const path in localeFiles) {
  const paths = path.split('/');
  const length = paths.length;
  const lang = paths[length - 2];
  const module = paths[length - 4];
  const matchedName = camelCase(paths[length - 1]);
  if (lang) {
    locales[lang] ??= {};
    locales[lang][module] ??= {};
    locales[lang][module][matchedName] ??= {};
    locales[lang][module][matchedName] = localeFiles[path].default;
  }
}

export default locales;
