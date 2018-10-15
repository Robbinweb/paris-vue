import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Photos from '@/components/Photos'
import Movie from '@/components/Movie'
import Product from '@/components/Product'
import Pdetails from '@/components/Photos-details'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',component: Index},
    {path: '/Index',component: Index},
    {path: '/Photos',component: Photos},
    {path: '/Movie',component: Movie},
    {path: '/Product',component: Product},
    { path: '/Pdetails/:pid', component: Pdetails },
  ]
})
