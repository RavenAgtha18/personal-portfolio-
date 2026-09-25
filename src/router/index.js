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
          title: 'Riki Andi Alfiyanto — Bridge SE & Technical Business Analyst',
          description: 'High-caliber Bridge SE & Technical BA architecting end-to-end industrial automation across Japanese manufacturing standards.',
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
        meta: {
          title: 'About | Riki Andi Alfiyanto',
          description: 'Professional background, certifications, and technical competencies.',
        }
      },
      {
        path: 'portfolio',
        name: 'portfolio',
        component: () => import('@/views/PortfolioView.vue'),
        meta: {
          title: 'Project Intelligence | Riki Andi Alfiyanto',
          description: 'Enterprise case studies and project analytics across manufacturing, fintech, and localization domains.',
        }
      },
      {
        path: 'portfolio/snappack',
        name: 'snappack-case-study',
        component: () => import('@/views/SnapPackView.vue'),
        meta: {
          title: 'SnapPack Case Study | Riki Andi Alfiyanto',
          description: 'Digital transformation of luxury furniture shipping documentation with 95% audit search time reduction.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/protrack',
        name: 'protrack-case-study',
        component: () => import('@/views/ProtrackView.vue'),
        meta: {
          title: 'Protrack Case Study | Riki Andi Alfiyanto',
          description: 'Real-time production line tracking system achieving 100% WIP visibility across manufacturing floors.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/finwise',
        name: 'finwise-case-study',
        component: () => import('@/views/FinWiseView.vue'),
        meta: {
          title: 'FinWise Case Study | Riki Andi Alfiyanto',
          description: 'Smart personal budgeting engine with real-time financial intelligence and 100% overrun prevention.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/nihongo',
        name: 'nihongo-case-study',
        component: () => import('@/views/NihongoView.vue'),
        meta: {
          title: 'Nihongo-App Case Study | Riki Andi Alfiyanto',
          description: 'JFT-Basic A2 Japanese language accelerated practice system with SRS-driven vocabulary retention.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/finish-info',
        name: 'finish-info-case-study',
        component: () => import('@/views/FinishInfoView.vue'),
        meta: {
          title: 'Finish-Info Case Study | Riki Andi Alfiyanto',
          description: 'Fabric and cutting list management system optimizing raw material yield in premium furniture production.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/qcchecklist',
        name: 'qcchecklist-case-study',
        component: () => import('@/views/QCChecklistView.vue'),
        meta: {
          title: 'QC Checklist Case Study | Riki Andi Alfiyanto',
          description: 'Quality standardization and final product inspection system ensuring zero defects before shipping.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/proscan',
        name: 'proscan-case-study',
        component: () => import('@/views/ProScanView.vue'),
        meta: {
          title: 'ProScan Case Study | Riki Andi Alfiyanto',
          description: 'Inventory audit and stock opname system with real-time barcode verification and zero-error logging.',
          isCaseStudy: true,
        }
      },
      {
        path: 'portfolio/stokku',
        name: 'stokku-case-study',
        component: () => import('@/views/StokkuView.vue'),
        meta: {
          title: 'Stokku Case Study | Riki Andi Alfiyanto',
          description: 'Stock control management system with expiration monitoring, low-stock alerts, and warehouse zoning.',
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
  document.title = to.meta.title || 'Riki Andi Alfiyanto - Bridge SE & Technical BA'
  
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
