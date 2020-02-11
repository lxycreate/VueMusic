import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router"
import "@/router/permission"
import store from "@/store"
import "normalize.css/normalize.css"
import VueLazyLoad from 'vue-lazyload'

import {
  Input, Menu, MenuItem, Carousel, CarouselItem, Button, Drawer, Tabs,
  TabPane, Scrollbar, Pagination, Message, Tag, Collapse, CollapseItem,
  Table, TableColumn
} from 'element-ui';
Vue.config.productionTip = false

Vue.use(Input);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Scrollbar);
Vue.use(Pagination);
Vue.use(Tag);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.prototype.$message = Message;
Vue.use(VueLazyLoad)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
