import { onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";
import { I18nHelper } from "@/helpers";

export function useBeforeMountApp() {
  const i18n = useI18n();

  function setLanguage() {
    const language = I18nHelper.retrieveLanguage();
    if (language) i18n.locale.value = language;
    else I18nHelper.persistLanguage(i18n.locale.value);
  }

  onBeforeMount(() => {
    setLanguage();
  });
}
