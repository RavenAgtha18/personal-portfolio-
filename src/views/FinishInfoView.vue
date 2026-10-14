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
          <Scissors class="w-4 h-4 text-amber-400" />
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
                <strong>Finish-Info</strong> – {{ t.exec.p1 }}
              </p>
              <p>
                {{ t.exec.p2 }}
              </p>
              <p>
                {{ t.exec.p3 }}
              </p>
            </div>

            <!-- Highlight Stat -->
            <div class="mt-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span class="text-xs text-amber-400 block font-mono uppercase tracking-wider">{{ t.exec.statFocus }}</span>
                <h3 class="text-lg sm:text-xl font-bold text-white mt-1">{{ t.exec.statTitle }}</h3>
              </div>
              <div class="text-left sm:text-right">
                <span class="text-2xl md:text-3xl font-extrabold text-amber-400">{{ t.exec.statHighlight }}</span>
                <span class="text-xs text-gray-400 block">{{ t.exec.statDesc }}</span>
              </div>
            </div>
          </section>

          <!-- SECTION 2: CORE OPERATIONAL & TECHNICAL PROBLEMS SOLVED -->
          <section id="problems-solved" class="scroll-mt-24" data-aos="fade-up">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3">
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              {{ t.problems.title }}
            </h2>
            
            <div class="space-y-4">
              <div
                v-for="(prob, idx) in t.problems.items"
                :key="idx"
                class="flex gap-4 p-4 rounded-xl bg-red-950/20 border border-red-500/20"
              >
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
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

            <!-- Table 1: access_controls -->
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
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-amber-300 font-bold' : 'text-white'">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-gray-500' : (col.key && col.key.includes('INDEX') ? 'text-amber-400' : 'text-gray-500')">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.purpose }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 2: new_fabric -->
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
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-amber-300 font-bold' : 'text-white'">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2 text-gray-500">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.purpose }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 3: new_fabric_barcode -->
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
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-amber-300 font-bold' : 'text-white'">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-gray-500' : (col.key && col.key.includes('MUL') ? 'text-red-400' : (col.key && col.key.includes('INDEX') ? 'text-amber-400' : 'text-gray-500'))">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.purpose }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- SECTION 4: INTERACTIVE FABRIC & CUTTING CALCULATOR SIMULATOR -->
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

            <!-- Simulator Card -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              
              <!-- Item Selector Header -->
              <div class="flex flex-wrap justify-between items-center gap-4 mb-6 border-b border-white/5 pb-4">
                <div class="flex items-center gap-3">
                  <Boxes class="w-5 h-5 text-amber-400" />
                  <div class="text-left">
                    <span class="text-[10px] text-gray-400 uppercase block">{{ t.sim.productSelector }}</span>
                    <select 
                      v-model="selectedItemName" 
                      class="bg-transparent text-white font-bold text-sm focus:outline-none"
                    >
                      <option v-for="(item, key) in furnitureItems" :key="key" :value="key" class="bg-neutral-900 text-white">
                        {{ isJapanese ? item.nameJa : item.name }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="flex items-center gap-6">
                  <div class="text-right">
                    <span class="text-[10px] text-gray-400 block uppercase">{{ t.sim.standardWidth }}</span>
                    <span class="text-xs font-mono font-bold text-white">140 cm (1.4m)</span>
                  </div>
                </div>
              </div>

              <!-- Dimensions List -->
              <div class="mb-8">
                <h4 class="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Ruler class="w-4 h-4 text-amber-500" /> {{ t.sim.woodTableTitle }}
                </h4>
                
                <div class="overflow-x-auto rounded-xl bg-[#0c0c0c] border border-white/5">
                  <table class="w-full text-left font-mono text-xs">
                    <thead>
                      <tr class="bg-white/5 text-gray-400 border-b border-white/5">
                        <th class="p-3">{{ t.sim.thComponent }}</th>
                        <th class="p-3 text-right">{{ t.sim.thLength }}</th>
                        <th class="p-3 text-right">{{ t.sim.thWidth }}</th>
                        <th class="p-3 text-right">{{ t.sim.thThickness }}</th>
                        <th class="p-3 text-right">{{ t.sim.thQty }}</th>
                        <th class="p-3">{{ t.sim.thMaterial }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr 
                        v-for="cut in activeItem.woodCuts" 
                        :key="cut.part"
                        class="border-b border-white/5 text-gray-300"
                      >
                        <td class="p-3 text-white font-semibold">{{ isJapanese ? cut.partJa : cut.part }}</td>
                        <td class="p-3 text-right">{{ cut.l }}</td>
                        <td class="p-3 text-right">{{ cut.w }}</td>
                        <td class="p-3 text-right">{{ cut.t }}</td>
                        <td class="p-3 text-right font-bold text-amber-400">x{{ cut.qty }}</td>
                        <td class="p-3 text-gray-400">{{ isJapanese ? cut.materialJa : cut.material }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Fabric Yield Calculation -->
              <div v-if="activeItem.fabricName !== 'None'" class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0e0e0e] border border-white/5 p-5 rounded-xl">
                
                <div class="space-y-4">
                  <h4 class="text-xs font-bold text-white uppercase tracking-wider">{{ t.sim.nestingTitle }}</h4>
                  
                  <div class="space-y-1">
                    <span class="text-[10px] text-gray-400 block uppercase">{{ t.sim.fabricRequired }}</span>
                    <span class="text-sm font-semibold text-white">
                      {{ isJapanese ? activeItem.fabricNameJa : activeItem.fabricName }} — <span class="text-amber-400 font-mono">{{ activeItem.requiredMeters }} {{ isJapanese ? 'メートル' : 'meters' }}</span>
                    </span>
                  </div>

                  <!-- Range Slider to adjust cut length -->
                  <div class="space-y-2">
                    <div class="flex justify-between text-xs font-mono">
                      <span class="text-gray-400">{{ t.sim.allocatedLength }}</span>
                      <strong class="text-white">{{ allocatedLength }} {{ isJapanese ? 'メートル' : 'meters' }}</strong>
                    </div>
                    <input 
                      type="range" 
                      v-model.number="allocatedLength" 
                      :min="activeItem.requiredMeters - 1" 
                      :max="activeItem.requiredMeters + 4" 
                      step="0.1" 
                      class="w-full accent-amber-500 bg-white/10 rounded-lg appearance-none h-2 cursor-pointer"
                    />
                  </div>

                  <div class="flex gap-2">
                    <button 
                      @click="optimizeLayout"
                      class="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-lg text-xs transition-all flex items-center gap-1"
                    >
                      <CheckCircle2 class="w-3.5 h-3.5" />
                      <span>{{ t.sim.btnAutoLayout }}</span>
                    </button>
                    <button 
                      @click="resetYieldLength" 
                      class="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-gray-300 font-mono"
                    >
                      {{ t.sim.btnReset }}
                    </button>
                  </div>
                </div>

                <!-- Yield Meter Graphic -->
                <div class="flex flex-col justify-center items-center p-4 border border-white/5 rounded-xl bg-black/40 text-center space-y-3">
                  <span class="text-[10px] text-gray-400 uppercase tracking-widest block">{{ t.sim.yieldRateLabel }}</span>
                  
                  <!-- Circle or Bar Gauge -->
                  <div class="relative w-full">
                    <div class="flex justify-between items-center text-xs font-mono mb-1">
                      <span :class="yieldColorClass" class="font-bold">{{ yieldStatusText }}</span>
                      <span class="text-white font-bold">{{ yieldRate }}%</span>
                    </div>
                    <div class="w-full bg-white/5 h-3.5 rounded-full overflow-hidden border border-white/5">
                      <div 
                        class="h-full rounded-full transition-all duration-500 ease-out" 
                        :class="yieldProgressColor"
                        :style="{ width: Math.min(yieldRate, 100) + '%' }"
                      ></div>
                    </div>
                  </div>

                  <p class="text-[10px] text-gray-500 leading-relaxed font-mono">
                    {{ yieldFeedbackMsg }}
                  </p>
                </div>

              </div>
              
              <div v-else class="p-6 rounded-xl bg-[#0e0e0e] border border-white/5 text-center text-gray-400 text-xs font-mono">
                {{ t.sim.woodOnlyNote }}
              </div>

            </div>
          </section>
        </div>

        <!-- RIGHT SIDEBAR (1 Column: Insights & Telemetry) -->
        <div class="space-y-8">
          
          <!-- Business Impact -->
          <div class="p-6 rounded-2xl glass border border-white/10" data-aos="fade-left">
            <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles class="w-5 h-5 text-amber-400" /> {{ isJapanese ? '業務革新・導入効果' : 'Business Impact' }}
            </h3>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">{{ t.sim.impact1Title }}</h4>
                  <p class="text-xs text-gray-400 mt-0.5">{{ t.sim.impact1Desc }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">{{ t.sim.impact2Title }}</h4>
                  <p class="text-xs text-gray-400 mt-0.5">{{ t.sim.impact2Desc }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">{{ t.sim.impact3Title }}</h4>
                  <p class="text-xs text-gray-400 mt-0.5">{{ t.sim.impact3Desc }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Key Features -->
          <div class="p-6 rounded-2xl glass border border-white/10" data-aos="fade-left" data-aos-delay="50">
            <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 class="w-5 h-5 text-amber-400" /> {{ t.features.title }}
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
            <h3 class="text-lg font-bold text-white mb-4">{{ t.telemetry.title }}</h3>
            
            <div class="space-y-3 text-xs border-b border-white/5 pb-4 mb-4">
              <div class="flex justify-between">
                <span class="text-gray-400">{{ isJapanese ? 'バックエンドAPI' : 'Backend API' }}</span>
                <span class="text-white font-mono">{{ t.telemetry.backend }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ isJapanese ? 'フロントエンド' : 'Frontend Client' }}</span>
                <span class="text-white font-mono">{{ t.telemetry.frontend }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ isJapanese ? 'データベース基盤' : 'Database Layer' }}</span>
                <span class="text-white font-mono">{{ t.telemetry.database }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ isJapanese ? 'アクセス権限制御' : 'Authorization' }}</span>
                <span class="text-white font-mono">{{ t.telemetry.auth }}</span>
              </div>
            </div>

            <a 
              href="https://github.com/RavenAgtha18"
              target="_blank"
              class="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors flex items-center justify-center gap-2 text-xs font-semibold"
            >
              <Github class="w-4 h-4" />
              <span>{{ t.telemetry.viewGithub }}</span>
            </a>
          </div>
        </div>

      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { 
  ArrowLeft, 
  Scissors, 
  Ruler, 
  Boxes, 
  AlertOctagon, 
  FileX, 
  RefreshCw, 
  Database, 
  CheckCircle2, 
  Sparkles, 
  Check, 
  BarChart3, 
  Github 
} from 'lucide-vue-next'
import { useLanguage } from '@/composables/useLanguage'
import { finishInfoI18n } from '@/locales/caseStudies/finishInfo'

const { isJapanese } = useLanguage()
const t = computed(() => (isJapanese.value ? finishInfoI18n.ja : finishInfoI18n.en))

const problemIcons = [AlertOctagon, FileX, RefreshCw, Database, BarChart3]

// localStorage Persistence Helpers
const STORAGE_KEY = 'finishinfo_simulator_state';
const loadPersistedState = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};
const persistState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    /* quota exceeded */
  }
};

// Mock Data for Luxury Furniture Items
const furnitureItems = {
  sofa: {
    name: 'Signature Chesterfield Sofa',
    nameJa: 'シグネチャー・チェスターフィールドソファ',
    fabricName: 'Velvet Emerald',
    fabricNameJa: 'エメラルド・ベルベット',
    requiredMeters: 8.5,
    woodCuts: [
      { part: 'Main Backrest Frame', partJa: 'メイン背もたれフレーム', l: 180, w: 45, t: 4, qty: 1, material: 'Premium Mahogany', materialJa: '最高級マホガニー' },
      { part: 'Bottom Seat Base Beams', partJa: '座面構造支持梁', l: 200, w: 15, t: 5, qty: 2, material: 'Premium Mahogany', materialJa: '最高級マホガニー' },
      { part: 'Curved Armrest Blocks', partJa: '曲線アームレスト芯材', l: 80, w: 30, t: 6, qty: 2, material: 'Premium Mahogany', materialJa: '最高級マホガニー' },
      { part: 'Support Leg Corner Blocks', partJa: '脚部補強コーナーブロック', l: 15, w: 15, t: 8, qty: 4, material: 'Mahogany Block', materialJa: 'マホガニーブロック' }
    ]
  },
  loungeChair: {
    name: 'Signature Lounge Chair',
    nameJa: 'シグネチャー・ラウンジチェア',
    fabricName: 'CG Classic Linen',
    fabricNameJa: 'CGクラシック・リネン',
    requiredMeters: 4.2,
    woodCuts: [
      { part: 'Curved Backrest Staves', partJa: '背もたれ湾曲リブ材', l: 90, w: 60, t: 3, qty: 1, material: 'Solid Teakwood', materialJa: '無垢チーク材' },
      { part: 'Saddle Seat Panel', partJa: 'サドル座面構造パネル', l: 65, w: 60, t: 4, qty: 1, material: 'Solid Teakwood', materialJa: '無垢チーク材' },
      { part: 'Tapered Support Legs', partJa: 'テーパー脚支柱', l: 45, w: 8, t: 8, qty: 4, material: 'Solid Teakwood', materialJa: '無垢チーク材' }
    ]
  },
  diningTable: {
    name: 'CG Modern Dining Table',
    nameJa: 'CGモダン・無垢ダイニングテーブル',
    fabricName: 'None',
    fabricNameJa: 'なし（木工品）',
    requiredMeters: 0,
    woodCuts: [
      { part: 'Slab Top Panel', partJa: '無垢天板スラブパネル', l: 220, w: 100, t: 4, qty: 1, material: 'Prime Grade Teak', materialJa: '特級チーク材' },
      { part: 'Under-top Supporting Rails', partJa: '天板下補強幕板', l: 190, w: 10, t: 5, qty: 2, material: 'Prime Grade Teak', materialJa: '特級チーク材' },
      { part: 'Heavy Dining Table Legs', partJa: '角脚メインピラー', l: 75, w: 12, t: 12, qty: 4, material: 'Solid Teak Pillar', materialJa: 'チーク無垢柱材' }
    ]
  }
}

const selectedItemName = ref('sofa')
const activeItem = computed(() => furnitureItems[selectedItemName.value])

// Interactive Yield State (restored from localStorage on mount)
const allocatedLength = ref(8.5)

onMounted(() => {
  const saved = loadPersistedState();
  if (saved) {
    if (saved.selectedItemName && furnitureItems[saved.selectedItemName]) {
      selectedItemName.value = saved.selectedItemName;
    }
    if (typeof saved.allocatedLength === 'number') {
      allocatedLength.value = saved.allocatedLength;
    }
  }
});

watch(selectedItemName, (newVal) => {
  allocatedLength.value = furnitureItems[newVal].requiredMeters
  persistState({ selectedItemName: newVal, allocatedLength: allocatedLength.value });
})

watch(allocatedLength, () => {
  persistState({ selectedItemName: selectedItemName.value, allocatedLength: allocatedLength.value });
})

const yieldRate = computed(() => {
  if (activeItem.value.fabricName === 'None') return 0
  const req = activeItem.value.requiredMeters
  const alloc = allocatedLength.value
  
  if (alloc <= 0) return 0
  
  if (alloc < req) {
    const ratio = (alloc / req) * 100
    return Math.round(ratio * 0.7)
  } else {
    const diff = alloc - req
    const efficiency = 100 - (diff / req) * 100
    return Math.max(Math.round(efficiency), 0)
  }
})

const yieldStatusText = computed(() => {
  const y = yieldRate.value
  if (allocatedLength.value < activeItem.value.requiredMeters) {
    return isJapanese.value ? '生地不足（裁断不可）' : 'INSUFFICIENT MATERIAL'
  }
  if (y >= 85) return isJapanese.value ? '最適歩留まり（高効率）' : 'OPTIMAL RETENTION'
  if (y >= 70) return isJapanese.value ? '準最適（軽微な余剰あり）' : 'SUB-OPTIMAL LAYOUT'
  return isJapanese.value ? '過剰廃棄（不経済な木取り）' : 'EXCESS MATERIAL WASTE'
})

const yieldColorClass = computed(() => {
  const y = yieldRate.value
  if (allocatedLength.value < activeItem.value.requiredMeters) return 'text-red-500'
  if (y >= 85) return 'text-green-400'
  if (y >= 70) return 'text-orange-400'
  return 'text-red-400 font-bold'
})

const yieldProgressColor = computed(() => {
  const y = yieldRate.value
  if (allocatedLength.value < activeItem.value.requiredMeters) return 'bg-red-600'
  if (y >= 85) return 'bg-green-500'
  if (y >= 70) return 'bg-orange-500'
  return 'bg-red-500'
})

const yieldFeedbackMsg = computed(() => {
  if (allocatedLength.value < activeItem.value.requiredMeters) {
    const diff = (activeItem.value.requiredMeters - allocatedLength.value).toFixed(1)
    return isJapanese.value
      ? `⚠️ 生地長が不足しています！この家具の木取りにはあと ${diff} メートル必要です。`
      : `⚠️ Insufficient material length! You need at least ${diff} meters more to cover this furniture pattern.`
  }
  
  const y = yieldRate.value
  if (y >= 85) {
    return isJapanese.value
      ? '✅ 裁断ネスティングが最適に収まっています。端材ロスは工場基準内に抑えられています。'
      : '✅ Nesting pattern fits perfectly. Cutting scraps are kept within factory standard allowance.'
  }
  if (y >= 70) {
    return isJapanese.value
      ? '⚠️ やや余剰が発生しています。ネスティング配列を微調整することで材料費を削減できます。'
      : '⚠️ Fabric layout is somewhat inefficient. Consider adjusting the nesting rows to save material.'
  }
  return isJapanese.value
    ? '❌ 端材ロスが過大です！現在の切り出し長さでは再利用困難な廃棄スクラップが大量に発生します。'
    : '❌ High fabric wastage! The current cut length results in massive unusable scrap pieces.'
})

const optimizeLayout = () => {
  allocatedLength.value = activeItem.value.requiredMeters
}

const resetYieldLength = () => {
  allocatedLength.value = activeItem.value.requiredMeters
}
</script>

<style scoped>
/* Gradient meshes and patterns */
.gradient-mesh {
  background:
    radial-gradient(at 30% 20%, rgba(245, 158, 11, 0.08) 0px, transparent 55%),
    radial-gradient(at 70% 80%, rgba(251, 191, 36, 0.04) 0px, transparent 50%),
    radial-gradient(at 10% 90%, rgba(217, 119, 6, 0.06) 0px, transparent 50%);
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
