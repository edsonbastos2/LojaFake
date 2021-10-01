import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Loading from '@/components/Loading.vue'
import 'animate.css'


const Vue = createApp(App)

Vue.component("Loading", Loading)
Vue.use(store)
Vue.use(router)
Vue.mount("#app");