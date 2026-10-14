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
          <Scan class="w-4 h-4 text-amber-400" />
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
                <strong>ProScan</strong> – {{ t.exec.p1 }}
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

          <!-- SECTION 2: THE CORE OPERATIONAL & TECHNICAL PROBLEMS SOLVED -->
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

            <!-- Table 1: stock_opname_period -->
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

            <!-- Table 2: stock_opname_data_sfg -->
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

            <!-- Table 3: master_item_sfg -->
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
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-gray-500' : (col.key && col.key.includes('INDEX') || col.key && col.key.includes('UNI') ? 'text-amber-400' : 'text-gray-500')">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.purpose }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- SECTION 4: INTERACTIVE STOCK OPNAME SIMULATOR -->
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
            <div class="p-6 rounded-2xl glass border border-white/10">
              
              <!-- Telemetry Header -->
              <div class="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div class="flex items-center gap-4">
                  <PackageCheck class="w-5 h-5 text-amber-400" />
                  <div class="text-left">
                    <span class="text-[10px] text-gray-400 block uppercase">{{ t.sim.selectBarcode }}</span>
                    <select 
                      v-model="selectedItemBarcode"
                      class="bg-transparent text-white font-mono font-bold text-sm border-b border-white/20 focus:border-amber-400 focus:outline-none py-1 cursor-pointer"
                    >
                      <option 
                        v-for="item in itemRegistry" 
                        :key="item.barcode" 
                        :value="item.barcode"
                        class="bg-neutral-900 text-white"
                      >
                        {{ item.barcode }} - {{ isJapanese ? item.descJa : item.desc }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="text-right">
                  <button @click="resetSimulator" class="text-amber-400 hover:text-amber-300 text-xs font-mono flex items-center gap-1">
                    <RefreshCw class="w-3.5 h-3.5" />
                    <span>{{ t.sim.resetBtn }}</span>
                  </button>
                </div>
              </div>

              <!-- Input Form Grid -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <!-- System Registered Aisle -->
                <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span class="text-[10px] text-gray-400 block uppercase">{{ t.sim.registeredAisle }}</span>
                  <div class="text-sm font-semibold text-white font-mono flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    {{ selectedItem.registeredAisle }}
                  </div>
                </div>

                <!-- System ERP Quantity -->
                <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span class="text-[10px] text-gray-400 block uppercase">{{ t.sim.erpStock }}</span>
                  <div class="text-sm font-semibold text-white font-mono">
                    {{ selectedItem.systemStock }} {{ isJapanese ? '点' : 'units' }}
                  </div>
                </div>

                <!-- Location Scanner Matcher -->
                <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <label class="text-[10px] text-gray-400 block uppercase">{{ t.sim.scannedAisle }}</label>
                  <select 
                    v-model="scannedAisle"
                    class="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-white focus:border-amber-400 focus:outline-none font-mono"
                  >
                    <option value="AISLE-A1" class="bg-neutral-900">AISLE-A1</option>
                    <option value="AISLE-A2" class="bg-neutral-900">AISLE-A2</option>
                    <option value="AISLE-B1" class="bg-neutral-900">AISLE-B1</option>
                    <option value="AISLE-B2" class="bg-neutral-900">AISLE-B2</option>
                  </select>
                </div>
              </div>

              <!-- Audit Input & Delta Calculator -->
              <div class="p-4 rounded-xl bg-neutral-950/20 border border-white/10 mb-6 space-y-4">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div class="space-y-1">
                    <h5 class="text-sm font-bold text-white">{{ t.sim.shelfCount }}</h5>
                    <p class="text-xs text-gray-400">{{ t.sim.shelfCountDesc }}</p>
                  </div>
                  
                  <div class="flex items-center gap-3">
                    <button 
                      @click="adjustPhysicalCount(-5)"
                      class="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center font-bold text-white text-sm"
                    >
                      -5
                    </button>
                    <input 
                      v-model.number="physicalCount" 
                      type="number"
                      min="0"
                      class="w-20 text-center bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 font-mono font-bold text-white focus:border-amber-400 focus:outline-none"
                    />
                    <button 
                      @click="adjustPhysicalCount(5)"
                      class="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center font-bold text-white text-sm"
                    >
                      +5
                    </button>
                  </div>
                </div>

                <!-- Delta Math Reconciler -->
                <div class="border-t border-white/5 pt-4 grid grid-cols-3 text-center text-xs font-mono">
                  <div>
                    <span class="text-gray-400 block mb-1">{{ t.sim.systemCount }}</span>
                    <span class="text-white font-bold">{{ selectedItem.systemStock }}</span>
                  </div>
                  <div>
                    <span class="text-gray-400 block mb-1">{{ t.sim.physicalCount }}</span>
                    <span class="text-amber-400 font-bold">{{ physicalCount }}</span>
                  </div>
                  <div>
                    <span class="text-gray-400 block mb-1">{{ t.sim.varianceDelta }}</span>
                    <span 
                      class="font-bold font-mono"
                      :class="varianceDelta === 0 ? 'text-green-400' : 'text-red-400'"
                    >
                      {{ varianceDelta > 0 ? '+' : '' }}{{ varianceDelta }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Warning Box & Save Log Button -->
              <div class="space-y-4">
                <div 
                  class="p-4 rounded-xl border flex items-center gap-4 text-left justify-between"
                  :class="[
                    varianceDelta === 0 && locationMatches 
                      ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                      : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                  ]"
                >
                  <div class="flex items-center gap-3">
                    <AlertTriangle v-if="varianceDelta !== 0 || !locationMatches" class="w-6 h-6 flex-shrink-0" />
                    <PackageCheck v-else class="w-6 h-6 flex-shrink-0" />
                    <div>
                      <strong class="text-sm font-bold uppercase tracking-wider block">
                        {{ varianceDelta === 0 && locationMatches ? (isJapanese ? '差異なし / 正常照合完了' : 'RECONCILED / ZERO VARIANCE') : (isJapanese ? '在庫調整伝票自動起票トリガー' : 'STOCK ADJUSTMENT LOG TRIGGERED') }}
                      </strong>
                      <span class="text-xs text-gray-400 font-mono">
                        {{ getStatusDetailsMessage }}
                      </span>
                    </div>
                  </div>
                  <div class="text-right font-mono text-[10px] text-gray-500 hidden md:block">
                    {{ locationMatches ? t.sim.matchYes : t.sim.matchNo }}
                  </div>
                </div>

                <button 
                  @click="commitStockLog"
                  class="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Scan class="w-4 h-4" />
                  <span>{{ t.sim.commitBtn }}</span>
                </button>
              </div>

            </div>

            <!-- SIMULATED TRANSACTIONAL ADJUSTMENT LOGS -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider font-mono flex items-center gap-2">
                <History class="w-4 h-4 text-amber-500" /> {{ t.sim.logTitle }}
              </h3>
              
              <div class="overflow-x-auto rounded-xl bg-[#0e0e0e] border border-white/5">
                <table class="w-full text-left border-collapse text-[11px] font-mono">
                  <thead>
                    <tr class="bg-white/5 text-gray-400 border-b border-white/5">
                      <th class="p-3">{{ t.sim.thId }}</th>
                      <th class="p-3">{{ t.sim.thBarcode }}</th>
                      <th class="p-3">{{ t.sim.thRegAisle }}</th>
                      <th class="p-3">{{ t.sim.thScanAisle }}</th>
                      <th class="p-3">{{ t.sim.thErpQty }}</th>
                      <th class="p-3">{{ t.sim.thPhysQty }}</th>
                      <th class="p-3">{{ t.sim.thVariance }}</th>
                      <th class="p-3">{{ t.sim.thStatus }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr 
                      v-for="log in opnameLogs" 
                      :key="log.id" 
                      class="border-b border-white/5 text-gray-300 hover:bg-white/5 transition-colors animate-fade-in"
                    >
                      <td class="p-3 text-amber-500 font-bold">#OPNAME-{{ log.id }}</td>
                      <td class="p-3 text-white font-bold">{{ log.barcode }}</td>
                      <td class="p-3 text-gray-400">{{ log.registeredAisle }}</td>
                      <td class="p-3 text-gray-400">{{ log.scannedAisle }}</td>
                      <td class="p-3 text-gray-400 text-center">{{ log.systemStock }}</td>
                      <td class="p-3 text-white text-center font-bold">{{ log.physicalCount }}</td>
                      <td class="p-3 text-center" :class="log.variance !== 0 ? 'text-red-400 font-bold' : 'text-green-400 font-bold'">
                        {{ log.variance > 0 ? '+' : '' }}{{ log.variance }}
                      </td>
                      <td class="p-3">
                        <span 
                          class="px-2 py-0.5 rounded-full text-[9px] font-bold border"
                          :class="[
                            log.variance === 0 && log.locationMatch 
                              ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                              : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          ]"
                        >
                          {{ log.variance === 0 && log.locationMatch ? (isJapanese ? '正常照合' : 'Match') : (isJapanese ? '差異調整' : 'Adjusted') }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                <span class="text-gray-400">{{ isJapanese ? 'インデックス方式' : 'Index Types' }}</span>
                <span class="text-white font-mono">{{ t.telemetry.indexTypes }}</span>
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
import { ref, computed, watch } from 'vue'
import { 
  ArrowLeft, 
  Scan, 
  PackageCheck, 
  AlertTriangle, 
  History, 
  Check, 
  Github, 
  RefreshCw, 
  Sparkles 
} from 'lucide-vue-next'
import { useLanguage } from '@/composables/useLanguage'
import { proscanI18n } from '@/locales/caseStudies/proscan'

const { isJapanese } = useLanguage()
const t = computed(() => (isJapanese.value ? proscanI18n.ja : proscanI18n.en))

const problemIcons = [AlertTriangle, Scan]

// Mock Data registries
const itemRegistry = [
  { barcode: 'CG-SFG-2001', desc: 'Luxury Wooden Legs (Mahogany)', descJa: '高級マホガニー製家具脚パーツ', systemStock: 45, registeredAisle: 'AISLE-A1' },
  { barcode: 'CG-SFG-2002', desc: 'Sofa Cushion Padding (Foam)', descJa: '高反発ソファクッション芯材', systemStock: 120, registeredAisle: 'AISLE-A2' },
  { barcode: 'CG-SFG-2003', desc: 'Gilded Frame Accents (Gold Leaf)', descJa: '金箔装飾額縁アクセント材', systemStock: 15, registeredAisle: 'AISLE-B1' },
  { barcode: 'CG-SFG-2004', desc: 'Velvet Fabric Rolls (Navy Blue)', descJa: '特注ベルベットファブリック原反（紺）', systemStock: 80, registeredAisle: 'AISLE-B2' }
]

// State variables for Simulator
const selectedItemBarcode = ref('CG-SFG-2001')
const scannedAisle = ref('AISLE-A1')
const physicalCount = ref(45)

const selectedItem = computed(() => {
  return itemRegistry.find(item => item.barcode === selectedItemBarcode.value) || itemRegistry[0]
})

// Synced defaults when item changes
watch(selectedItemBarcode, (newBarcode) => {
  const item = itemRegistry.find(i => i.barcode === newBarcode)
  if (item) {
    scannedAisle.value = item.registeredAisle
    physicalCount.value = item.systemStock
  }
})

// Variance calculation
const varianceDelta = computed(() => {
  return physicalCount.value - selectedItem.value.systemStock
})

const locationMatches = computed(() => {
  return scannedAisle.value === selectedItem.value.registeredAisle
})

const getStatusDetailsMessage = computed(() => {
  if (varianceDelta.value === 0 && locationMatches.value) {
    return isJapanese.value
      ? '全バーコードスキャン情報が基幹ERP台帳と100%一致しました。'
      : 'All barcode scanning details reconcile perfectly with ERP records.'
  }
  const varianceMsg = varianceDelta.value !== 0 
    ? (isJapanese.value 
        ? `${varianceDelta.value > 0 ? '+' : ''}${varianceDelta.value} 点の数量差異を検知。`
        : `Variance of ${varianceDelta.value > 0 ? '+' : ''}${varianceDelta.value} units detected.`)
    : ''
  const locationMsg = !locationMatches.value 
    ? (isJapanese.value 
        ? `保管棚番の不一致（スキャン: ${scannedAisle.value} vs 台帳登録: ${selectedItem.value.registeredAisle}）。`
        : `Aisle mismatch (Scanned: ${scannedAisle.value} vs Registered: ${selectedItem.value.registeredAisle}).`)
    : ''
  return isJapanese.value
    ? `不整合を記録: ${varianceMsg} ${locationMsg} 調整伝票を自動起票します。`
    : `Discrepancy logged: ${varianceMsg} ${locationMsg} Creating DB adjustments.`.trim()
})

// Simulated logs table
const opnameLogs = ref([
  { id: 9501, barcode: 'CG-SFG-2001', registeredAisle: 'AISLE-A1', scannedAisle: 'AISLE-A1', systemStock: 45, physicalCount: 45, variance: 0, locationMatch: true },
  { id: 9502, barcode: 'CG-SFG-2002', registeredAisle: 'AISLE-A2', scannedAisle: 'AISLE-B1', systemStock: 120, physicalCount: 112, variance: -8, locationMatch: false }
])

const adjustPhysicalCount = (val) => {
  const newVal = physicalCount.value + val
  physicalCount.value = newVal < 0 ? 0 : newVal
}

const commitStockLog = () => {
  opnameLogs.value.unshift({
    id: opnameLogs.value.length + 9501,
    barcode: selectedItemBarcode.value,
    registeredAisle: selectedItem.value.registeredAisle,
    scannedAisle: scannedAisle.value,
    systemStock: selectedItem.value.systemStock,
    physicalCount: physicalCount.value,
    variance: varianceDelta.value,
    locationMatch: locationMatches.value
  })

  // Auto pick next barcode to simulate scanning workflow
  const currentIndex = itemRegistry.findIndex(i => i.barcode === selectedItemBarcode.value)
  const nextIndex = (currentIndex + 1) % itemRegistry.length
  selectedItemBarcode.value = itemRegistry[nextIndex].barcode
}

const resetSimulator = () => {
  selectedItemBarcode.value = 'CG-SFG-2001'
  scannedAisle.value = 'AISLE-A1'
  physicalCount.value = 45
  opnameLogs.value = [
    { id: 9501, barcode: 'CG-SFG-2001', registeredAisle: 'AISLE-A1', scannedAisle: 'AISLE-A1', systemStock: 45, physicalCount: 45, variance: 0, locationMatch: true },
    { id: 9502, barcode: 'CG-SFG-2002', registeredAisle: 'AISLE-A2', scannedAisle: 'AISLE-B1', systemStock: 120, physicalCount: 112, variance: -8, locationMatch: false }
  ]
}
</script>

<style scoped>
/* Custom gradients and layout parameters */
.gradient-mesh {
  background:
    radial-gradient(at 20% 30%, rgba(245, 158, 11, 0.07) 0px, transparent 55%),
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
</style>
