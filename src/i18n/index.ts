import { createI18n } from "vue-i18n";
import vi from "./lang/vi.json";

export type I18nMessageSchema = typeof vi;
export type I18nAvailableLocales = "vi";

export const locale = "vi";
export const fallbackLocale = "vi";
export const messages = { vi };

export const i18n = createI18n<[I18nMessageSchema], I18nAvailableLocales>({
  locale: locale,
  fallbackLocale: fallbackLocale,
  messages: messages,
  legacy: false,
});
