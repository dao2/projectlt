// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  'common/styles/index.styl'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
import VueLazyLoad from 'vue-lazyload';
import store from './store';
Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.use(ElementUI)
// Vue.use(MessageBox);
// Vue.use(VueLazyLoad,{
//   loading:require('common/image/default.png')
// })

Vue.use(MintUI, {
  lazyload: {
    preLoad: 1.3,
    error: '',
    loading:require('common/image/default.png')
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
