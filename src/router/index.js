import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../components/Index.vue'
import TopNav from '../components/TopNav.vue'

// const TopNav = () => import(/* webpackChunkName: "TopNav_Index" */ '../components/TopNav.vue')
// const Index = () => import(/* webpackChunkName: "TopNav_Index" */ '../components/Index.vue')

import gsjj from '../components/about/gsjj.vue'
import aboutNav from '../components/about/aboutNav.vue'
import zjtd from '../components/about/zjtd.vue'
import zzry from '../components/about/zzry.vue'
import qywh from '../components/about/qywh.vue'

// const aboutNav = () => import(/* webpackChunkName: "about" */ '../components/about/aboutNav.vue')
// const gsjj = () => import(/* webpackChunkName: "about" */ '../components/about/gsjj.vue')
// const zjtd = () => import(/* webpackChunkName: "about" */ '../components/about/zjtd.vue')
// const zzry = () => import(/* webpackChunkName: "about" */ '../components/about/zzry.vue')
// const qywh = () => import(/* webpackChunkName: "about" */ '../components/about/qywh.vue')

import serviceNav from '../components/service/serviceNav.vue'

// const serviceNav = () => import(/* webpackChunkName: "serviceNav" */ '../components/service/serviceNav.vue')

import newsNav from '../components/news/newsNav.vue'
import news2 from '../components/news/news2.vue'
import news1 from '../components/news/news1.vue'
import newsDetail2 from '../components/news/newsDetail2.vue'
import newsDetail1 from '../components/news/newsDetail1.vue'

// const newsNav = () => import(/* webpackChunkName: "news" */ '../components/news/newsNav.vue')
// const news2 = () => import(/* webpackChunkName: "news" */ '../components/news/news2.vue')
// const news1 = () => import(/* webpackChunkName: "news" */ '../components/news/news1.vue')
// const newsDetail2 = () => import(/* webpackChunkName: "news" */ '../components/news/newsDetail2.vue')
// const newsDetail1 = () => import(/* webpackChunkName: "news" */ '../components/news/newsDetail1.vue')

import content from '../components/content/content.vue'

// const content = () => import(/* webpackChunkName: "content" */ '../components/content/content.vue')

import caseNav from '../components/case/caseNav.vue'
import projectDetail from '../components/case/projectDetail.vue'

// const caseNav = () => import(/* webpackChunkName: "case" */ '../components/case/caseNav.vue')
// const projectDetail = () => import(/* webpackChunkName: "case" */ '../components/case/projectDetail.vue')

// import legalSearch from '../components/legal/legalSearch.vue'
// import legalDetail from '../components/legal/legalDetail.vue'

const legalSearch = () => import(/* webpackChunkName: "legal" */ '../components/legal/legalSearch.vue')
const legalDetail = () => import(/* webpackChunkName: "legal" */ '../components/legal/legalDetail.vue')

Vue.use(VueRouter)

const routes = [
{
path: '/', redirect: '/topNav'
},
{
  path: '/topNav', 
  component: TopNav, 
  redirect: '/index', 
  children: [
             { path: '/projectDetail', component: projectDetail }, 
             { path: '/legalDetail', component: legalDetail }, 
             { path: '/legalSearch', component: legalSearch }, 
             { path: '/caseNav', component: caseNav }, 
             { path: '/content', component: content }, 
             {
               path: '/newsNav',
               component: newsNav,
               redirect: '/news2',
               children: [
                { path: '/newsDetail1', component: newsDetail1 },
                { path: '/newsDetail2', component: newsDetail2 },
                { path: '/news2', component: news2 }, 
                { path: '/news1', component: news1 }
               ]
             }, 
             { 
               path: '/serviceNav', 
               component: serviceNav
             }, 
             { path: '/index', component: Index }, 
             { 
               path: '/aboutNav', 
               redirect: '/gsjj', 
               component: aboutNav, 
               children: [
                          { path: '/gsjj', component: gsjj }, 
                          { path: '/zjtd', component: zjtd }, 
                          { path: '/zzry', component: zzry }, 
                          { path: '/qywh', component: qywh }
                         ] 
              }
            ]
}
]

const router = new VueRouter({
routes
})

export default router
