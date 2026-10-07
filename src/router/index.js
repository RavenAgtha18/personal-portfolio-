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
        meta: {
          title: 'Riki Andi Alfiyanto | Software Developer',
          description: 'Software Developer focused on understanding business requirements and translating operational needs into practical systems.',
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
        meta: {
          title: 'About | Riki Andi Alfiyanto',
          description: 'Professional background, systems engineering approach, and technical competencies.',
        }
      },
      {
        path: 'portfolio',
        alias: ['work'],
        name: 'portfolio',
        component: () => import('@/views/PortfolioView.vue'),
        meta: {
          title: 'Work & Systems | Riki Andi Alfiyanto',
          description: 'Documented internal manufacturing systems, financial applications, and practical software solutions.',
        }
      },
      {
        path: 'portfolio/snappack',
        alias: ['work/snappack'],
        name: 'snappack-case-study',
        component: () => import('@/views/SnapPackView.vue'),
        meta: {
          title: 'SnapPack Case Study | Riki Andi Alfiyanto',
          description: 'Digital transformation of furniture shipping documentation with camera-to-server media logging and digital signatures.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/protrack',
        alias: ['work/protrack'],
        name: 'protrack-case-study',
        component: () => import('@/views/ProtrackView.vue'),
        meta: {
          title: 'Protrack Case Study | Riki Andi Alfiyanto',
          description: 'Real-time production line tracking system for work-in-progress visibility and Aging Day tracking across manufacturing floors.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/finwise',
        alias: ['work/finwise'],
        name: 'finwise-case-study',
        component: () => import('@/views/FinWiseView.vue'),
        meta: {
          title: 'FinWise Case Study | Riki Andi Alfiyanto',
          description: 'Financial management engine with category budget limits, liquidity analytics, and currency conversion.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/nihongo',
        alias: ['work/nihongo'],
        name: 'nihongo-case-study',
        component: () => import('@/views/NihongoView.vue'),
        meta: {
          title: 'Nihongo-App Case Study | Riki Andi Alfiyanto',
          description: 'Japanese language practice application with multi-script learning data and SRS-driven vocabulary drills.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/finish-info',
        alias: ['work/finish-info'],
        name: 'finish-info-case-study',
        component: () => import('@/views/FinishInfoView.vue'),
        meta: {
          title: 'Finish-Info Case Study | Riki Andi Alfiyanto',
          description: 'Fabric and cutting list management system optimizing raw material nesting and monthly output reporting.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/qcchecklist',
        alias: ['work/qcchecklist', 'work/qc'],
        name: 'qcchecklist-case-study',
        component: () => import('@/views/QCChecklistView.vue'),
        meta: {
          title: 'QC Checklist Case Study | Riki Andi Alfiyanto',
          description: 'Quality standardization and final product inspection system with structured verification gates.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/proscan',
        alias: ['work/proscan'],
        name: 'proscan-case-study',
        component: () => import('@/views/ProScanView.vue'),
        meta: {
          title: 'ProScan Case Study | Riki Andi Alfiyanto',
          description: 'Inventory audit and stock opname system with real-time barcode verification and variance adjustments.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/stokku',
        alias: ['work/stokku'],
        name: 'stokku-case-study',
        component: () => import('@/views/StokkuView.vue'),
        meta: {
          title: 'Stokku Case Study | Riki Andi Alfiyanto',
          description: 'Stock control system with batch expiration monitoring, disposal management, low-stock alerts, and warehouse zoning.',
          isCaseStudy: true,
        }
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import('@/views/BlogView.vue'),
        meta: {
          title: 'Blog | Riki Andi Alfiyanto',
          description: 'Technical articles and engineering insights.',
        }
      },
      {
        path: 'read/:slug/:id',
        name: 'articleDetail',
        component: () => import('@/views/ArticleView.vue'),
        meta: {
          title: 'Article | Riki Andi Alfiyanto',
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Riki Andi Alfiyanto - System Developer (SysDev) · MES & Shop-Floor Systems'
  
  // Update meta description for SEO
  const descTag = document.querySelector('meta[name="description"]')
  if (descTag && to.meta.description) {
    descTag.setAttribute('content', to.meta.description)
  }
  
  next()
})

router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})

export default router
