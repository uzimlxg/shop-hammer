import Vue from 'vue'
import Router from 'vue-router'

import MainComponent from '@/pages/Main';
import ItemComponent from '@/pages/Item';
import LoginComponent from '@/pages/Login';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainComponent
        },
        {
            path: '/item/:id',
            name: 'item',
            component: ItemComponent
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent
        }
    ]
})
