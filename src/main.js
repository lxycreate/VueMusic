import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import store from "@/store";
import "normalize.css/normalize.css";
import { Input, Menu, Icon } from "ant-design-vue";
Vue.config.productionTip = false

Vue.component(Input.Search.name, Input.Search);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Icon.name, Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
