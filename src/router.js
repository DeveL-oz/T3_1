import { createRouter, createWebHistory } from 'vue-router';
import Success from './views/Success.vue';
import Form from './views/Form.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [

    { name: 'success', path: '/success', component: Success },
    { name: 'form', path: '/', component: Form },

  ],

});
