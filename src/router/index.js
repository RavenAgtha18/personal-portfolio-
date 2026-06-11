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
        meta: { title: 'Home | Riki Andi Alfiyanto' }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
        meta: { title: 'About | Riki Andi Alfiyanto' }
      },
      {
        path: 'portfolio',
        name: 'portfolio',
        component: () => import('@/views/PortfolioView.vue'),
        meta: { title: 'Project Intelligence | Riki Andi Alfiyanto' }
      },
      {
        path: 'portfolio/snappack',
        name: 'snappack-case-study',
        component: () => import('@/views/SnapPackView.vue'),
        meta: { title: 'SnapPack Case Study | Riki Andi Alfiyanto' }
      },
      {
        path: 'portfolio/protrack',
        name: 'protrack-case-study',
        component: () => import('@/views/ProtrackView.vue'),
        meta: { title: 'Protrack Case Study | Riki Andi Alfiyanto' }
      },
      {
        path: 'portfolio/finwise',
        name: 'finwise-case-study',
        component: () => import('@/views/FinWiseView.vue'),
        meta: { title: 'FinWise Case Study | Riki Andi Alfiyanto' }
      },
      {
        path: 'portfolio/nihongo',
        name: 'nihongo-case-study',
        component: () => import('@/views/NihongoView.vue'),
        meta: { title: 'Nihongo-App Case Study | Riki Andi Alfiyanto' }
      },
      {
        path: 'portfolio/finish-info',
        name: 'finish-info-case-study',
        component: () => import('@/views/FinishInfoView.vue'),
        meta: { title: 'Finish-Info Case Study | Riki Andi Alfiyanto' }
      },
      {
        path: 'portfolio/qcchecklist',
        name: 'qcchecklist-case-study',
        component: () => import('@/views/QCChecklistView.vue'),
        meta: { title: 'QC Checklist Case Study | Riki Andi Alfiyanto' }
      },
      {
        path: 'portfolio/proscan',
        name: 'proscan-case-study',
        component: () => import('@/views/ProScanView.vue'),
        meta: { title: 'ProScan Case Study | Riki Andi Alfiyanto' }
      },
      {
        path: 'portfolio/stokku',
        name: 'stokku-case-study',
        component: () => import('@/views/StokkuView.vue'),
        meta: { title: 'Stokku Case Study | Riki Andi Alfiyanto' }
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import('@/views/BlogView.vue'),
        meta: { title: 'Blog | Riki Andi Alfiyanto' }
      },
      {
        path: 'read/:slug/:id',
        name: 'articleDetail',
        component: () => import('@/views/ArticleView.vue'),
        meta: { title: 'Article | Riki Andi Alfiyanto' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Riki Andi Alfiyanto - Bridge SE & Technical BA'
  next()
})

router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})

export default router
