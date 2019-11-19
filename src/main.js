import Vue from 'vue'
import App from './views/Home'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
