import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SwipeableCards from './components/SwipeableCards.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/play-again', component: SwipeableCards }
]

const router = new VueRouter({
  routes: routes,
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
