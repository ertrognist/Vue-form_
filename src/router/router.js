import {createRouter, createWebHistory} from "vue-router";
import Main from '../components/MainPage.vue';
// eslint-disable-next-line 
import TablePage from '../components/TablePage.vue'

const routes = [
{
    path: '/',
    name: 'Main',
    component: Main,
},

{
    path: '/table',
    name: 'Heade',
    component: TablePage,
}
];

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes,
});

export default router;
