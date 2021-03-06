// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import fastClick from "fastclick";
import App from "./App";
import router from "./router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "babel-polyfill";
import "style/reset.css";
import "style/border.css";
import "style/iconfont.css";
import "swiper/swiper-bundle.css";
import store from "./store";

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});

// 路由就是根据网址不同，返回不同内容给用户
