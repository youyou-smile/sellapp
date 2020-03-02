import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import store from './store'

// vant组件
import { Icon } from 'vant';
import { Rate } from 'vant';

import 'vant/lib/index.css';
import 'view-design/dist/styles/iview.css';
import './assets/styles/reset.css';
import './assets/styles/common.css';


Vue.use(ViewUI);
Vue.config.productionTip = false

// vant组件
Vue.use(Icon);
Vue.use(Rate);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
