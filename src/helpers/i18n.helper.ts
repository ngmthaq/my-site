import { APP_CONSTANTS } from "@/configs";
import { AppHelper } from "./app.helper";

export class I18nHelper {
  static persistLanguage(language: string) {
    AppHelper.persist(APP_CONSTANTS.storageKeys.i18n, language);
  }

  static retrieveLanguage() {
    return AppHelper.retrieve<string>(APP_CONSTANTS.storageKeys.i18n);
  }
}
