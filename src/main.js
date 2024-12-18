import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from "primevue/config";
import { definePreset } from '@primevue/themes';
import Aura from "@primevue/themes/aura";
import ToastService from 'primevue/toastservice';




import App from './App.vue'
import router from './router'

const app = createApp(App)

const FindhubPreset = definePreset(Aura, {
  semantic: {
      primary: {
          50: '{green.50}',
          100: '{green.100}',
          200: '{green.200}',
          300: '{green.300}',
          400: '{green.400}',
          500: '{green.500}',
          600: '{green.600}',
          700: '{green.700}',
          800: '{green.800}',
          900: '{green.900}',
          950: '{green.950}'
      }
  }
});


app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: FindhubPreset,
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false,
    },
    ripple: true,
    inputVariant: "outlined",
  },
  
});

app.use(router)
app.use(ToastService)
app.mount('#app')
