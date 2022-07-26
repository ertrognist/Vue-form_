import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex'
import router from './router/router'
import store from './store/'
import './index.css'
// import VueTailwind from 'vue-tailwind'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles' // Global CSS has to be imported
import { createVuetify } from 'vuetify'

// createApp(App).mount('#app')

const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
app.use(store)

const vuetify = createVuetify({
  components,
  directives,
})

app.use(vuetify)

app.mount('#app')