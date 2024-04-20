import Vue from 'vue';
import VueRouter from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from '@/plugins';
import CoffeeProducts from './components/CoffeeProducts.vue';

// Sử dụng VueRouter
Vue.use(VueRouter);

// Định nghĩa routes
const routes = [
  { path: '/coffee', component: CoffeeProducts },
  // Các tuyến đường khác nếu cần
];

// Tạo router instance
const router = new VueRouter({
  routes,
  mode: 'history' // Để loại bỏ ký tự hash (#) trong URL
});

// Tạo và cấu hình ứng dụng Vue
const app = createApp(App);
registerPlugins(app);
app.use(router); // Sử dụng Vue Router
app.mount('#app');
