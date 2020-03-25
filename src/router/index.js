import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import TopNav from '../components/TopNav.vue'
import gsjj from '../components/about/gsjj.vue'
import aboutNav from '../components/about/aboutNav.vue'
import zjtd from '../components/about/zjtd.vue'
import zzry from '../components/about/zzry.vue'
import qywh from '../components/about/qywh.vue'
import serviceNav from '../components/service/serviceNav.vue'
import newsNav from '../components/news/newsNav.vue'
import news2 from '../components/news/news2.vue'
import news1 from '../components/news/news1.vue'
import content from '../components/content/content.vue'
import caseNav from '../components/case/caseNav.vue'
import legalSearch from '../components/legal/legalSearch.vue'
import legalDetail from '../components/legal/legalDetail.vue'

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
             { path: '/legalDetail', component: legalDetail }, 
             { path: '/legalSearch', component: legalSearch }, 
             { path: '/caseNav', component: caseNav }, 
             { path: '/content', component: content }, 
             {
               path: '/newsNav',
               component: newsNav,
               redirect: '/news2',
               children: [
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
