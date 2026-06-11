import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
        meta: { title: 'Home' }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
        meta: { title: 'About' }
      },
      {
        path: 'portfolio',
        name: 'portfolio',
        component: () => import('@/views/PortfolioView.vue'),
        meta: { title: 'Portfolio' }
      },
      {
        path: 'portfolio/snappack',
        name: 'snappack-case-study',
        component: () => import('@/views/SnapPackView.vue'),
        meta: { title: 'SnapPack Case Study' }
      },
      {
        path: 'portfolio/protrack',
        name: 'protrack-case-study',
        component: () => import('@/views/ProtrackView.vue'),
        meta: { title: 'Protrack Case Study' }
      },
      {
        path: 'portfolio/finwise',
        name: 'finwise-case-study',
        component: () => import('@/views/FinWiseView.vue'),
        meta: { title: 'FinWise Case Study' }
      },
      {
        path: 'portfolio/nihongo',
        name: 'nihongo-case-study',
        component: () => import('@/views/NihongoView.vue'),
        meta: { title: 'Nihongo App Case Study' }
      },
      {
        path: 'portfolio/finish-info',
        name: 'finish-info-case-study',
        component: () => import('@/views/FinishInfoView.vue'),
        meta: { title: 'Finish Info Case Study' }
      },
      {
        path: 'portfolio/qcchecklist',
        name: 'qcchecklist-case-study',
        component: () => import('@/views/QCChecklistView.vue'),
        meta: { title: 'QC Checklist Case Study' }
      },
      {
        path: 'portfolio/proscan',
        name: 'proscan-case-study',
        component: () => import('@/views/ProScanView.vue'),
        meta: { title: 'ProScan Case Study' }
      },
      {
        path: 'portfolio/stokku',
        name: 'stokku-case-study',
        component: () => import('@/views/StokkuView.vue'),
        meta: { title: 'Stokku Case Study' }
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import('@/views/BlogView.vue'),
        meta: { title: 'Blog' }
      },
      {
        path: 'read/:slug/:id',
        name: 'articleDetail',
        component: () => import('@/views/ArticleView.vue'),
        meta: { title: 'Article' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || 'Rikiandi'} - Riki Andi Alfiyanto`
  next()
})

export default router
