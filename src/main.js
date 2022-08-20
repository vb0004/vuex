import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/dist/css/tabler.min.css';
import './assets/dist/css/tabler-flags.min.css';
import './assets/dist/css/tabler-payments.min.css';
import './assets/dist/css/tabler-vendors.min.css';
import './assets/dist/css/demo.min.css';

const apps = createApp(App);
apps.use(store);
apps.use(router);
apps.mount('#app');
