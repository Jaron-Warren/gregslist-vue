import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import Home from '../pages/Home.vue'
import CarsView from '../pages/CarsView.vue'
import JobsView from '../pages/JobsView.vue'
import HousesView from '../pages/HousesView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/CarsView',
    name: 'CarsView',
    component: CarsView
  },{
    path: '/JobsView',
    name: 'JobsView',
    component: JobsView
  },{
    path: '/HousesView',
    name: 'HousesView',
    component: HousesView
  },{
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
