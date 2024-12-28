import type { PrimeVueConfiguration } from "primevue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

export const themeOptions: PrimeVueConfiguration = {
  theme: {
    preset: Aura,
  },
};

export const theme = PrimeVue;
