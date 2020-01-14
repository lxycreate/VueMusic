import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import "normalize.css/normalize.css";
import { Input,Menu } from "ant-design-vue";
Vue.config.productionTip = false

Vue.component(Input.Search.name, Input.Search);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item)

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
