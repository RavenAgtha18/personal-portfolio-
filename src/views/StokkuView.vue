<template>
  <div class="relative min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
    <!-- Background Accents -->
    <div class="fixed inset-0 -z-10 gradient-mesh opacity-70"></div>
    <div class="fixed inset-0 -z-10 grid-pattern opacity-30"></div>
    
    <!-- Top Nav / Back Button -->
    <div class="max-w-7xl mx-auto mb-8 sm:mb-10" data-aos="fade-down">
      <router-link
        to="/work"
        class="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors group text-sm font-medium"
      >
        <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>{{ t.backToWork }}</span>
      </router-link>
    </div>

    <!-- Main Container -->
    <article class="max-w-6xl mx-auto">
      
      <!-- HERO HEADER -->
      <header class="mb-12 sm:mb-16 text-center md:text-left" data-aos="fade-up">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-amber mb-5 sm:mb-6">
          <Boxes class="w-4 h-4 text-amber-400" />
          <span class="text-xs text-amber-300 font-semibold tracking-wider uppercase font-mono">{{ t.badge }}</span>
        </div>
        <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 sm:mb-8">
          {{ t.hero.titlePrefix }} <span class="gradient-text">{{ t.hero.titleHighlight }}</span> <br class="hidden lg:inline"/>
          {{ t.hero.titleSuffix }}
        </h1>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl glass mt-6 sm:mt-8">
          <div>
            <span class="text-xs text-gray-400 block mb-1">{{ t.hero.roleLabel }}</span>
            <span class="text-sm font-semibold text-amber-300">{{ t.hero.roleValue }}</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">{{ t.hero.facilityLabel }}</span>
            <span class="text-sm font-semibold text-white">{{ t.hero.facilityValue }}</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">{{ t.hero.stackLabel }}</span>
            <span class="text-sm font-semibold text-white">{{ t.hero.stackValue }}</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">{{ t.hero.capabilityLabel }}</span>
            <span class="text-sm font-semibold text-green-400">{{ t.hero.capabilityValue }}</span>
          </div>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <!-- MAIN CONTENT (Left 2 Columns) -->
        <div class="lg:col-span-2 space-y-16">
          
          <!-- SECTION 1: HERO & EXECUTIVE SUMMARY -->
          <section id="executive-summary" class="scroll-mt-24" data-aos="fade-up">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3">
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              {{ t.exec.title }}
            </h2>
            <div class="space-y-4 text-gray-300 leading-relaxed text-base">
              <p>
                <strong>Stokku</strong> – {{ t.exec.p1 }}
              </p>
              <p>
                {{ t.exec.p2 }}
              </p>
              <p>
                {{ t.exec.p3 }}
              </p>
            </div>

            <!-- Highlight Stat -->
            <div class="mt-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <span class="text-xs text-amber-400 block font-mono uppercase tracking-wider">{{ t.exec.statFocus }}</span>
                <h3 class="text-xl font-bold text-white mt-1">{{ t.exec.statTitle }}</h3>
              </div>
              <div class="text-right">
                <span class="text-2xl md:text-3xl font-extrabold text-amber-400">{{ t.exec.statHighlight }}</span>
                <span class="text-xs text-gray-400 block">{{ t.exec.statDesc }}</span>
              </div>
            </div>
          </section>

          <!-- SECTION 2: THE TECHNICAL & OPERATIONAL CHALLENGES SOLVED -->
          <section id="problems-solved" class="scroll-mt-24" data-aos="fade-up">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3">
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              {{ t.problems.title }}
            </h2>
            
            <div class="space-y-6">
              <div
                v-for="(prob, idx) in t.problems.items"
                :key="idx"
                class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10"
              >
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <component :is="problemIcons[idx % problemIcons.length]" class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">{{ prob.title }}</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    {{ prob.desc }}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 3: DATABASE MAPPING & SCHEMA -->
          <section id="database-schema" class="scroll-mt-24" data-aos="fade-up">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3">
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              {{ t.schema.title }}
            </h2>
            <p class="text-gray-300 mb-6">
              {{ t.schema.intro }}
            </p>

            <!-- Table 1: materials -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>{{ t.schema.table1Title }}</span>
                <span class="text-amber-400">{{ t.schema.table1Tag }}</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr class="bg-black/35 text-gray-400 border-b border-white/5">
                      <th class="px-4 py-2">Column Name</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Key</th>
                      <th class="px-4 py-2">{{ isJapanese ? '用途・機能' : 'Purpose' }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="col in t.schema.table1Cols" :key="col.name" class="border-b border-white/5">
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-amber-300' : 'text-white'">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-gray-500' : (col.key && col.key.includes('INDEX') ? 'text-amber-400' : 'text-gray-500')">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.purpose }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 2: material_expired_dates -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>{{ t.schema.table2Title }}</span>
                <span class="text-amber-400">{{ t.schema.table2Tag }}</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr class="bg-black/35 text-gray-400 border-b border-white/5">
                      <th class="px-4 py-2">Column Name</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Key</th>
                      <th class="px-4 py-2">{{ isJapanese ? '用途・機能' : 'Purpose' }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="col in t.schema.table2Cols" :key="col.name" class="border-b border-white/5">
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-amber-300' : 'text-white'">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-gray-500' : (col.key && col.key.includes('MUL') ? 'text-red-400' : (col.key && col.key.includes('INDEX') ? 'text-amber-400' : 'text-gray-500'))">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.purpose }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 3: mr_items -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>{{ t.schema.table3Title }}</span>
                <span class="text-amber-400">{{ t.schema.table3Tag }}</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr class="bg-black/35 text-gray-400 border-b border-white/5">
                      <th class="px-4 py-2">Column Name</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Key</th>
                      <th class="px-4 py-2">{{ isJapanese ? '用途・機能' : 'Purpose' }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="col in t.schema.table3Cols" :key="col.name" class="border-b border-white/5">
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-amber-300' : 'text-white'">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-gray-500' : (col.key && col.key.includes('INDEX') ? 'text-amber-400' : 'text-gray-500')">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.purpose }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- SECTION 4: INTERACTIVE MATERIAL CONTROL SIMULATOR -->
          <section id="simulator" class="scroll-mt-24 space-y-8" data-aos="fade-up">
            <div>
              <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-white border-b border-white/10 pb-3">
                <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
                {{ t.sim.title }}
              </h2>
              <p class="text-gray-300">
                {{ t.sim.desc }}
              </p>
            </div>

            <!-- Simulator Widget -->
            <div class="p-6 rounded-2xl glass border border-white/10 space-y-6">
              
              <!-- Header -->
              <div class="flex justify-between items-center border-b border-white/5 pb-4">
                <h4 class="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <Wrench class="w-4 h-4 text-amber-500" /> {{ t.sim.widgetTitle }}
                </h4>
                <button @click="resetSimulator" class="text-amber-400 hover:text-amber-300 text-xs font-mono flex items-center gap-1">
                  <RefreshCw class="w-3.5 h-3.5" />
                  <span>{{ t.sim.resetStock }}</span>
                </button>
              </div>

              <!-- Materials Table Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  v-for="mat in materialsList" 
                  :key="mat.id"
                  class="p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between"
                  :class="[
                    mat.stockLevel === 'Critical' 
                      ? 'bg-red-500/10 border-red-500/20 text-red-400' 
                      : mat.stockLevel === 'Warning' 
                      ? 'bg-amber-500/10 border-amber-500/20 text-amber-300' 
                      : 'bg-white/5 border-white/5'
                  ]"
                >
                  <div class="space-y-2">
                    <div class="flex justify-between items-start">
                      <div>
                        <span class="text-[9px] uppercase px-1.5 py-0.5 rounded font-mono font-bold bg-white/10 text-white">
                          {{ mat.sku }}
                        </span>
                        <h5 class="text-sm font-semibold text-white mt-1">{{ isJapanese ? mat.nameJa : mat.name }}</h5>
                      </div>
                      <!-- Status Badge -->
                      <span 
                        class="px-2 py-0.5 rounded-full text-[9px] font-bold border animate-pulse-slow"
                        :class="[
                          mat.stockLevel === 'Critical' 
                            ? 'bg-red-500/20 text-red-400 border-red-500/30' 
                            : mat.stockLevel === 'Warning' 
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' 
                            : 'bg-green-500/20 text-green-400 border-green-500/30'
                        ]"
                      >
                        {{ mat.stockLevel === 'Critical' ? t.sim.badgeCritical : (mat.stockLevel === 'Warning' ? t.sim.badgeWarning : t.sim.badgeHealthy) }}
                      </span>
                    </div>

                    <div class="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-white/5">
                      <div>
                        <span class="text-gray-400 block text-[10px]">{{ t.sim.rackLoc }}</span>
                        <span class="text-white">{{ mat.rack }}</span>
                      </div>
                      <div>
                        <span class="text-gray-400 block text-[10px]">{{ t.sim.stockQty }}</span>
                        <span class="text-white">{{ mat.qty }} {{ mat.unit }}</span>
                      </div>
                      <div>
                        <span class="text-gray-400 block text-[10px]">{{ t.sim.expiryDate }}</span>
                        <span :class="mat.isExpired ? 'text-red-400 font-bold' : 'text-gray-400'">
                          {{ mat.expiryDate }}
                        </span>
                      </div>
                      <div>
                        <span class="text-gray-400 block text-[10px]">{{ t.sim.thresholdLimit }}</span>
                        <span class="text-gray-400">{{ mat.threshold }} {{ mat.unit }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Actions inside card -->
                  <div class="mt-4 pt-4 border-t border-white/5 flex gap-2">
                    <button 
                      @click="requestMaterial(mat)"
                      :disabled="mat.qty === 0"
                      class="flex-1 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:bg-neutral-800 disabled:text-neutral-500 text-black font-bold text-xs transition-all flex items-center justify-center gap-1"
                    >
                      <FileCheck class="w-3.5 h-3.5" />
                      <span>{{ isJapanese ? `出庫申請 (5 ${mat.unit})` : `Request 5 ${mat.unit}` }}</span>
                    </button>
                    <button 
                      @click="addMaterialStock(mat)"
                      class="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all flex items-center justify-center"
                    >
                      {{ t.sim.addStockBtn }}
                    </button>
                  </div>
                </div>
              </div>

              <!-- Warning Box & Request Confirmation -->
              <div 
                v-if="activeAlert"
                class="p-4 rounded-xl border flex items-center gap-4 text-left justify-between bg-red-500/10 border-red-500/20 text-red-400 animate-pulse"
              >
                <div class="flex items-center gap-3">
                  <BellRing class="w-6 h-6 flex-shrink-0" />
                  <div>
                    <strong class="text-sm font-bold uppercase tracking-wider block">
                      {{ t.sim.alertRequired }}
                    </strong>
                    <span class="text-xs text-gray-400 font-mono">
                      {{ alertMessage }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- SIMULATED MR REQUISITION LIST -->
              <div class="pt-4 border-t border-white/10">
                <h3 class="text-xs font-bold text-white mb-3 uppercase tracking-wider font-mono flex items-center gap-2">
                  <FileCheck class="w-4 h-4 text-amber-500" /> {{ t.sim.mrLogsTitle }}
                </h3>
                
                <div class="overflow-x-auto rounded-xl bg-[#0e0e0e] border border-white/5">
                  <table class="w-full text-left border-collapse text-[10px] font-mono">
                    <thead>
                      <tr class="bg-white/5 text-gray-400 border-b border-white/5">
                        <th class="p-2.5">{{ t.sim.thCode }}</th>
                        <th class="p-2.5">{{ t.sim.thItemCode }}</th>
                        <th class="p-2.5">{{ t.sim.thItemName }}</th>
                        <th class="p-2.5">{{ t.sim.thQty }}</th>
                        <th class="p-2.5">{{ t.sim.thShelf }}</th>
                        <th class="p-2.5">{{ t.sim.thStatus }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr 
                        v-for="log in requestLogs" 
                        :key="log.id" 
                        class="border-b border-white/5 text-gray-300 hover:bg-white/5 transition-colors animate-fade-in"
                      >
                        <td class="p-2.5 text-amber-500 font-bold">{{ log.mrCode }}</td>
                        <td class="p-2.5 text-white font-bold">{{ log.sku }}</td>
                        <td class="p-2.5 text-gray-400">{{ isJapanese ? log.nameJa : log.name }}</td>
                        <td class="p-2.5 text-center font-bold">{{ log.qty }} {{ log.unit }}</td>
                        <td class="p-2.5 text-gray-500 font-bold">{{ log.rack }}</td>
                        <td class="p-2.5">
                          <span 
                            class="px-2 py-0.5 rounded-full text-[8px] font-bold border"
                            :class="[
                              log.status === 'Approved' 
                                ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            ]"
                          >
                            {{ log.status === 'Approved' ? (isJapanese ? '承認済' : 'Approved') : (isJapanese ? '承認待ち' : 'Pending') }}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </section>
        </div>

        <!-- RIGHT SIDEBAR (1 Column: Insights & Specs) -->
        <div class="space-y-8">
          
          <!-- Key Achievements -->
          <div class="p-6 rounded-2xl glass border border-white/10" data-aos="fade-left">
            <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles class="w-5 h-5 text-amber-400" /> {{ t.features.title }}
            </h3>
            
            <ul class="space-y-4">
              <li
                v-for="(item, idx) in t.features.items"
                :key="idx"
                class="flex items-start gap-3"
              >
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">{{ item.title }}</h4>
                  <p class="text-xs text-gray-400 mt-0.5">{{ item.desc }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Project Specs -->
          <div class="p-6 rounded-2xl glass border border-white/10" data-aos="fade-left" data-aos-delay="100">
            <h3 class="text-lg font-bold text-white mb-4">{{ isJapanese ? 'プロジェクト諸元' : 'Project Telemetry' }}</h3>
            
            <div class="space-y-3 text-xs border-b border-white/5 pb-4 mb-4">
              <div class="flex justify-between">
                <span class="text-gray-400">{{ isJapanese ? 'バックエンドAPI' : 'Backend API' }}</span>
                <span class="text-white font-mono">Laravel 10 / PHP 8.2</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ isJapanese ? 'フロントエンド' : 'Frontend Client' }}</span>
                <span class="text-white font-mono">Vue 3 / Tailwind CSS</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ isJapanese ? 'データベース基盤' : 'Database Layer' }}</span>
                <span class="text-white font-mono">MySQL 8 / InnoDB</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ isJapanese ? '通知プロトコル' : 'Notification Channels' }}</span>
                <span class="text-white font-mono">{{ isJapanese ? 'SMTPメール自動発報' : 'SMTP Email triggers' }}</span>
              </div>
            </div>

            <a 
              href="https://github.com/RavenAgtha18"
              target="_blank"
              class="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors flex items-center justify-center gap-2 text-xs font-semibold"
            >
              <Github class="w-4 h-4" />
              <span>{{ isJapanese ? 'GitHubリポジトリを確認' : 'Explore GitHub Repository' }}</span>
            </a>
          </div>
        </div>

      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  ArrowLeft, 
  Boxes, 
  BellRing, 
  CalendarDays, 
  FileCheck, 
  Wrench, 
  Check, 
  Trash2, 
  Github, 
  RefreshCw, 
  Sparkles 
} from 'lucide-vue-next'
import { useLanguage } from '@/composables/useLanguage'
import { stokkuI18n } from '@/locales/caseStudies/stokku'

const { isJapanese } = useLanguage()
const t = computed(() => (isJapanese.value ? stokkuI18n.ja : stokkuI18n.en))

const problemIcons = [CalendarDays, BellRing, Trash2]

// Mock database representation
const materialsList = ref([
  { id: 1, sku: 'CG-MAT-102', name: 'Premium Veneer Glue (temperature-sensitive)', nameJa: '高耐久木工用ツキ板接着剤（温度管理品）', qty: 15, unit: 'kg', threshold: 20, rack: 'RAK-A1-03', expiryDate: '2026-09-12', isExpired: false, stockLevel: 'Warning' },
  { id: 2, sku: 'CG-MAT-105', name: 'Clear Polyurethane Finish Coating', nameJa: 'クリアウレタン系トップコート塗料', qty: 6, unit: 'L', threshold: 10, rack: 'RAK-B2-01', expiryDate: '2026-05-10', isExpired: true, stockLevel: 'Critical' },
  { id: 3, sku: 'CG-MAT-108', name: 'Cotton Back Padding (Premium Foam)', nameJa: '高密度ウレタンバッククッション材', qty: 85, unit: 'm', threshold: 30, rack: 'RAK-C1-05', expiryDate: '2027-04-18', isExpired: false, stockLevel: 'Healthy' },
  { id: 4, sku: 'CG-MAT-111', name: 'Golden Leaf Foil Trims', nameJa: '高級金箔装飾トリムシート', qty: 42, unit: 'sheets', threshold: 25, rack: 'RAK-D2-11', expiryDate: '2028-11-05', isExpired: false, stockLevel: 'Healthy' }
])

// Simulated logs table
const requestLogs = ref([
  { id: 301, mrCode: 'MR-2026-0001', sku: 'CG-MAT-108', name: 'Cotton Back Padding', nameJa: '高密度ウレタンバッククッション材', qty: 15, unit: 'm', rack: 'RAK-C1-05', status: 'Approved' },
  { id: 302, mrCode: 'MR-2026-0002', sku: 'CG-MAT-102', name: 'Premium Veneer Glue', nameJa: '高耐久木工用ツキ板接着剤', qty: 5, unit: 'kg', rack: 'RAK-A1-03', status: 'Pending' }
])

const alertMessage = computed(() => {
  const expiredNames = materialsList.value.filter(m => m.isExpired).map(m => isJapanese.value ? m.nameJa : m.name)
  const lowStockNames = materialsList.value.filter(m => !m.isExpired && m.qty < m.threshold).map(m => isJapanese.value ? m.nameJa : m.name)
  
  let msg = ''
  if (expiredNames.length > 0) {
    msg += isJapanese.value ? `期限切れ材料を検知: ${expiredNames.join('、')}。` : `Expired materials detected: ${expiredNames.join(', ')}. `
  }
  if (lowStockNames.length > 0) {
    msg += isJapanese.value ? `安全在庫閾値を下回りました: ${lowStockNames.join('、')}。自動購買アラートをキューに追加しました。` : `Low stock thresholds breached for: ${lowStockNames.join(', ')}. Auto procurement queued.`
  }
  return msg.trim()
})

const activeAlert = computed(() => {
  return alertMessage.value.length > 0
})

const requestMaterial = (mat) => {
  if (mat.qty >= 5) {
    mat.qty -= 5
    updateStockLevel(mat)
    
    // Add to request logs
    requestLogs.value.unshift({
      id: requestLogs.value.length + 301,
      mrCode: `MR-2026-000${requestLogs.value.length + 3}`,
      sku: mat.sku,
      name: mat.name,
      nameJa: mat.nameJa,
      qty: 5,
      unit: mat.unit,
      rack: mat.rack,
      status: 'Pending'
    })
  }
}

const addMaterialStock = (mat) => {
  mat.qty += 15
  updateStockLevel(mat)
}

const updateStockLevel = (mat) => {
  if (mat.isExpired) {
    mat.stockLevel = 'Critical'
  } else if (mat.qty < mat.threshold) {
    mat.stockLevel = 'Critical'
  } else if (mat.qty < mat.threshold * 1.5) {
    mat.stockLevel = 'Warning'
  } else {
    mat.stockLevel = 'Healthy'
  }
}

const resetSimulator = () => {
  materialsList.value = [
    { id: 1, sku: 'CG-MAT-102', name: 'Premium Veneer Glue (temperature-sensitive)', nameJa: '高耐久木工用ツキ板接着剤（温度管理品）', qty: 15, unit: 'kg', threshold: 20, rack: 'RAK-A1-03', expiryDate: '2026-09-12', isExpired: false, stockLevel: 'Warning' },
    { id: 2, sku: 'CG-MAT-105', name: 'Clear Polyurethane Finish Coating', nameJa: 'クリアウレタン系トップコート塗料', qty: 6, unit: 'L', threshold: 10, rack: 'RAK-B2-01', expiryDate: '2026-05-10', isExpired: true, stockLevel: 'Critical' },
    { id: 3, sku: 'CG-MAT-108', name: 'Cotton Back Padding (Premium Foam)', nameJa: '高密度ウレタンバッククッション材', qty: 85, unit: 'm', threshold: 30, rack: 'RAK-C1-05', expiryDate: '2027-04-18', isExpired: false, stockLevel: 'Healthy' },
    { id: 4, sku: 'CG-MAT-111', name: 'Golden Leaf Foil Trims', nameJa: '高級金箔装飾トリムシート', qty: 42, unit: 'sheets', threshold: 25, rack: 'RAK-D2-11', expiryDate: '2028-11-05', isExpired: false, stockLevel: 'Healthy' }
  ]
  requestLogs.value = [
    { id: 301, mrCode: 'MR-2026-0001', sku: 'CG-MAT-108', name: 'Cotton Back Padding', nameJa: '高密度ウレタンバッククッション材', qty: 15, unit: 'm', rack: 'RAK-C1-05', status: 'Approved' },
    { id: 302, mrCode: 'MR-2026-0002', sku: 'CG-MAT-102', name: 'Premium Veneer Glue', nameJa: '高耐久木工用ツキ板接着剤', qty: 5, unit: 'kg', rack: 'RAK-A1-03', status: 'Pending' }
  ]
}
</script>

<style scoped>
/* Gradients mesh background accents */
.gradient-mesh {
  background:
    radial-gradient(at 10% 20%, rgba(245, 158, 11, 0.06) 0px, transparent 55%),
    radial-gradient(at 80% 80%, rgba(251, 191, 36, 0.04) 0px, transparent 50%),
    radial-gradient(at 50% 10%, rgba(217, 119, 6, 0.05) 0px, transparent 55%);
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-pulse-slow {
  animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .7; }
}
</style>
