import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue'
import router from './router'
import storeLike from './store.js';
import './registerServiceWorker'
import VueOnsen from 'vue-onsenui'; 
import CustomToolbar from './partials/CustomToolbar.vue';
import Vuex from 'vuex';
import AppNavigator from './AppNavigator.vue';

Vue.config.productionTip = false
Vue.use(VueOnsen);
Vue.use(Vuex);

Vue.component('custom-toolbar', CustomToolbar);
Vue.config.productionTip = false

new Vue({
  router,
  store: new Vuex.Store(storeLike),
  beforeCreate() {
    // Shortcut for Material Design
    Vue.prototype.md = this.$ons.platform.isAndroid();

    // Set iPhoneX flag based on URL
    if (window.location.search.match(/iphonex/i)) {
      document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
      document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
    }

  },
  render: h => h(AppNavigator),
}).$mount('#app')
