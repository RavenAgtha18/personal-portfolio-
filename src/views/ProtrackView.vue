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
        <ArrowLeft
          class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
        />
        <span>{{ t.backToWork }}</span>
      </router-link>
    </div>

    <!-- Main Container -->
    <article class="max-w-6xl mx-auto">
      <!-- HERO HEADER -->
      <header class="mb-12 sm:mb-16 text-center md:text-left" data-aos="fade-up">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-amber mb-5 sm:mb-6"
        >
          <Cpu class="w-4 h-4 text-amber-400" />
          <span
            class="text-xs text-amber-300 font-semibold tracking-wider uppercase font-mono"
            >{{ t.badge }}</span
          >
        </div>
        <h1
          class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 sm:mb-8"
        >
          {{ t.hero.titlePrefix }}
          <span class="gradient-text">{{ t.hero.titleHighlight }}</span>
          <br class="hidden lg:inline" />
          {{ t.hero.titleSuffix }}
        </h1>

        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl glass mt-6 sm:mt-8"
        >
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >{{ t.hero.roleLabel }}</span
            >
            <span class="text-sm font-semibold text-amber-300"
              >{{ t.hero.roleValue }}</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">{{ t.hero.facilityLabel }}</span>
            <span class="text-sm font-semibold text-white"
              >{{ t.hero.facilityValue }}</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">{{ t.hero.dbModelLabel }}</span>
            <span class="text-sm font-semibold text-white"
              >{{ t.hero.dbModelValue }}</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >{{ t.hero.capabilityLabel }}</span
            >
            <span class="text-sm font-semibold text-green-400"
              >{{ t.hero.capabilityValue }}</span
            >
          </div>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- MAIN CONTENT (Left 2 Columns) -->
        <div class="lg:col-span-2 space-y-16">
          <!-- SECTION 1: HERO & EXECUTIVE SUMMARY -->
          <section
            id="executive-summary"
            class="scroll-mt-24"
            data-aos="fade-up"
          >
            <h2
              class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3"
            >
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              {{ t.exec.title }}
            </h2>
            <div class="space-y-4 text-gray-300 leading-relaxed text-base">
              <p>
                <strong>Protrack System</strong> – {{ t.exec.p1 }}
              </p>
              <p>
                {{ t.exec.p2 }}
              </p>
              <p>
                {{ t.exec.p3 }}
              </p>
            </div>

            <!-- Quantitative Impact Card -->
            <div
              class="mt-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6 flex items-center justify-between"
            >
              <div>
                <span
                  class="text-xs text-amber-400 block font-mono uppercase tracking-wider"
                  >{{ t.exec.statFocus }}</span
                >
                <h3 class="text-xl font-bold text-white mt-1">
                  {{ t.exec.statTitle }}
                </h3>
              </div>
              <div class="text-right">
                <span class="text-2xl md:text-3xl font-extrabold text-amber-400"
                  >{{ t.exec.statHighlight }}</span
                >
                <span class="text-xs text-gray-400 block"
                  >{{ t.exec.statDesc }}</span
                >
              </div>
            </div>
          </section>

          <!-- SECTION 2: OPERATIONAL PROBLEMS SOLVED -->
          <section id="problems-solved" class="scroll-mt-24" data-aos="fade-up">
            <h2
              class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3"
            >
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              {{ t.problems.title }}
            </h2>
            <p class="text-gray-300 mb-6">
              {{ t.problems.intro }}
            </p>

            <div class="space-y-4">
              <div
                v-for="(prob, idx) in t.problems.items"
                :key="idx"
                class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400"
                >
                  <component :is="problemIcons[idx % problemIcons.length]" class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">
                    {{ prob.title }}
                  </h4>
                  <p class="text-sm text-gray-400">
                    {{ prob.desc }}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 3: DIRECT DATABASE MAPPING & PIPELINE ARCHITECTURE -->
          <section id="database-schema" class="scroll-mt-24" data-aos="fade-up">
            <h2
              class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3"
            >
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              {{ t.schema.title }}
            </h2>

            <p class="text-gray-300 mb-6">
              {{ t.schema.intro }}
            </p>

            <!-- Table 1: route_cards -->
            <div
              class="mb-6 rounded-xl glass border border-white/10 overflow-hidden"
            >
              <div
                class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between"
              >
                <span>{{ t.schema.table1Title }}</span>
                <span class="text-amber-400">{{ t.schema.table1Tag }}</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr
                      class="bg-black/35 text-gray-400 border-b border-white/5"
                    >
                      <th class="px-4 py-2">Column Name</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Key</th>
                      <th class="px-4 py-2">{{ isJapanese ? '用途・機能' : 'Purpose' }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="col in t.schema.table1Cols"
                      :key="col.name"
                      class="border-b border-white/5"
                    >
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-amber-300' : 'text-white'">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-gray-500' : (col.key && col.key.includes('MUL') ? 'text-red-400' : 'text-gray-500')">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.purpose }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 2: trans_track -->
            <div
              class="mb-6 rounded-xl glass border border-white/10 overflow-hidden"
            >
              <div
                class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between"
              >
                <span>{{ t.schema.table2Title }}</span>
                <span class="text-amber-400">{{ t.schema.table2Tag }}</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr
                      class="bg-black/35 text-gray-400 border-b border-white/5"
                    >
                      <th class="px-4 py-2">Column Name</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Key</th>
                      <th class="px-4 py-2">{{ isJapanese ? '用途・機能' : 'Purpose' }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="col in t.schema.table2Cols"
                      :key="col.name"
                      class="border-b border-white/5"
                    >
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-amber-300' : 'text-white'">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-gray-500' : (col.key && col.key.includes('MUL') ? 'text-red-400' : 'text-gray-500')">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.purpose }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 3: locations -->
            <div
              v-if="t.schema.table3Title"
              class="mb-6 rounded-xl glass border border-white/10 overflow-hidden"
            >
              <div
                class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between"
              >
                <span>{{ t.schema.table3Title }}</span>
                <span class="text-amber-400">{{ t.schema.table3Tag }}</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr
                      class="bg-black/35 text-gray-400 border-b border-white/5"
                    >
                      <th class="px-4 py-2">Column Name</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Key</th>
                      <th class="px-4 py-2">{{ isJapanese ? '用途・機能' : 'Purpose' }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="col in t.schema.table3Cols"
                      :key="col.name"
                      class="border-b border-white/5"
                    >
                      <td class="px-4 py-2" :class="col.key && col.key.includes('PRI') ? 'text-amber-300' : 'text-white'">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2 text-gray-500">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.purpose }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- CSS Production Pipeline Flow -->
            <div class="mt-8">
              <h3
                class="text-lg font-semibold mb-4 text-amber-400 flex items-center gap-2"
              >
                <Network class="w-4 h-4" /> {{ t.sim.pipelineTitle }}
              </h3>

              <div class="grid grid-cols-2 md:grid-cols-7 gap-4">
                <div
                  v-for="(loc, idx) in pipelineStations"
                  :key="loc.code"
                  class="p-3 rounded-xl border relative text-center flex flex-col justify-between"
                  :class="
                    idx === activeStepIndex
                      ? 'bg-amber-500/10 border-amber-500/30'
                      : 'glass border-white/10'
                  "
                >
                  <span
                    class="text-[9px] font-mono text-amber-400 block font-bold mb-1"
                    >STATION 0{{ idx + 1 }}</span
                  >
                  <div class="my-1 text-base font-black text-white font-mono">
                    {{ loc.code }}
                  </div>
                  <div class="text-[9px] text-gray-400 leading-tight">
                    {{ isJapanese ? loc.nameJa : loc.name }}
                  </div>

                  <!-- Connector Arrow (Desktop) -->
                  <div
                    v-if="idx < 6"
                    class="hidden md:block absolute top-1/2 -right-2.5 -translate-y-1/2 z-10"
                  >
                    <ChevronRight class="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 4: INTERACTIVE PRODUCTION SIMULATOR -->
          <section
            id="simulator"
            class="scroll-mt-24 space-y-8"
            data-aos="fade-up"
          >
            <div>
              <h2
                class="text-2xl font-bold mb-4 flex items-center gap-2 text-white border-b border-white/10 pb-3"
              >
                <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
                {{ t.sim.title }}
              </h2>
              <p class="text-gray-300">
                {{ t.sim.desc }}
              </p>
            </div>

            <!-- SIMULATOR CORE WIDGET -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <div class="flex justify-between items-center mb-6">
                <div class="flex items-center gap-2">
                  <PlayCircle class="w-5 h-5 text-amber-400" />
                  <span
                    class="text-sm font-bold text-white uppercase tracking-wider font-mono"
                    >{{ isJapanese ? 'リアルタイム・ロット操作' : 'Live Batch Controller' }}</span
                  >
                </div>
                <div class="flex items-center gap-2">
                  <span
                    class="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"
                  ></span>
                  <span class="text-xs text-green-400 font-mono"
                    >{{ isJapanese ? 'シミュレーション稼働中' : 'Sim Active' }}</span
                  >
                </div>
              </div>

              <!-- Metrics Widgets -->
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
                <div class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl">
                  <span class="text-[10px] text-gray-400 block uppercase"
                    >{{ isJapanese ? 'ロット番号' : 'Batch Code' }}</span
                  >
                  <span class="text-sm font-bold text-white font-mono">{{
                    activeBatch.barcode
                  }}</span>
                </div>
                <div class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl">
                  <span class="text-[10px] text-gray-400 block uppercase"
                    >{{ isJapanese ? '現在工程' : 'Current WIP Station' }}</span
                  >
                  <span class="text-sm font-bold text-amber-400 font-mono">{{
                    activeBatch.location
                  }}</span>
                </div>
                <div class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl">
                  <span class="text-[10px] text-gray-400 block uppercase"
                    >{{ t.sim.agingDays }}</span
                  >
                  <span
                    class="text-sm font-bold font-mono"
                    :class="activeBatch.agingDays >= 4.0 ? 'text-red-400' : 'text-emerald-400'"
                  >
                    {{ activeBatch.agingDays || '1.8' }}d
                    <span class="text-[10px] font-normal text-gray-400 block">{{ (activeBatch.agingDays || 1.8) >= 4.0 ? (isJapanese ? 'ボトルネック検知' : 'Bottleneck Flag') : (isJapanese ? 'SLA基準内 (<5日)' : 'Within SLA (<5d)') }}</span>
                  </span>
                </div>
                <div class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl">
                  <span class="text-[10px] text-gray-400 block uppercase"
                    >{{ t.sim.batchStatus }}</span
                  >
                  <span class="text-sm font-bold text-white font-mono">{{
                    activeBatch.state
                  }}</span>
                </div>
                <div class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl">
                  <span class="text-[10px] text-gray-400 block uppercase"
                    >{{ isJapanese ? 'トランザクション' : 'Log Records' }}</span
                  >
                  <span class="text-sm font-bold text-green-400 font-mono"
                    >{{ mockTransactions.length }} {{ isJapanese ? '件' : 'Inserts' }}</span
                  >
                </div>
              </div>

              <!-- Interactive Stepper -->
              <div
                class="p-6 rounded-xl bg-black/40 border border-white/5 mb-8 overflow-x-auto"
              >
                <div
                  class="flex justify-between items-center min-w-[500px] relative px-4"
                >
                  <!-- Stepper Background Line -->
                  <div
                    class="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-white/5"
                  ></div>
                  <!-- Stepper Active Highlight Line -->
                  <div
                    class="absolute left-6 top-1/2 -translate-y-1/2 h-1 bg-amber-500 transition-all duration-500"
                    :style="{ width: activeStepPercentage + '%' }"
                  ></div>

                  <!-- Step Nodes -->
                  <div
                    v-for="(node, idx) in pipelineStations"
                    :key="node.code"
                    class="relative flex flex-col items-center z-10 cursor-pointer"
                    @click="jumpToStep(idx)"
                  >
                    <div
                      class="w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs border transition-all duration-300"
                      :class="[
                        idx < activeStepIndex
                          ? 'bg-amber-500 text-black border-amber-500'
                          : '',
                        idx === activeStepIndex
                          ? 'bg-black text-amber-400 border-amber-400 scale-110 ring-2 ring-amber-500/50'
                          : '',
                        idx > activeStepIndex
                          ? 'bg-zinc-900 text-gray-500 border-white/10'
                          : '',
                      ]"
                    >
                      <Check v-if="idx < activeStepIndex" class="w-4 h-4" />
                      <span v-else>{{ node.code }}</span>
                    </div>
                    <span
                      class="text-[10px] mt-2 font-semibold transition-colors"
                      :class="
                        idx === activeStepIndex
                          ? 'text-amber-400 font-bold'
                          : 'text-gray-500'
                      "
                    >
                      {{ isJapanese ? node.nameJa : node.name }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Control Actions -->
              <div
                class="flex flex-wrap gap-4 items-center justify-between border-t border-white/5 pt-6"
              >
                <div class="flex gap-2">
                  <button
                    @click="resetSimulator"
                    class="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white border border-white/10 transition-colors"
                  >
                    {{ t.sim.btnReset }}
                  </button>
                  <button
                    @click="simulateReject"
                    :disabled="
                      activeStepIndex === 6 || activeBatch.state === 'REJECTED'
                    "
                    class="px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-xs text-red-400 border border-red-500/20 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    {{ t.sim.btnReject }}
                  </button>
                </div>

                <button
                  @click="advanceBatch"
                  :disabled="activeStepIndex === 6"
                  class="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold transition-all disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5"
                >
                  <span>{{ t.sim.btnAdvance }}</span>
                  <ArrowRight class="w-4 h-4" />
                </button>
              </div>
            </div>

            <!-- SIMULATED TRANSACTION LOG TABLE (trans_track simulation) -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <h3
                class="text-sm font-bold text-white mb-4 uppercase tracking-wider font-mono flex items-center gap-2"
              >
                <Database class="w-4 h-4 text-amber-500" />
                {{ t.sim.logTitle }}
              </h3>

              <div
                class="overflow-x-auto rounded-xl bg-[#0e0e0e] border border-white/5"
              >
                <table
                  class="w-full text-left border-collapse text-[11px] font-mono"
                >
                  <thead>
                    <tr
                      class="bg-white/5 text-gray-400 border-b border-white/5"
                    >
                      <th class="p-3">{{ t.sim.thId }}</th>
                      <th class="p-3">{{ t.sim.thBarcode }}</th>
                      <th class="p-3">{{ t.sim.thStation }}</th>
                      <th class="p-3">{{ t.sim.thPrev }}</th>
                      <th class="p-3">{{ t.sim.thStatus }}</th>
                      <th class="p-3">{{ t.sim.thOperator }}</th>
                      <th class="p-3">{{ t.sim.thTimestamp }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="tx in mockTransactions"
                      :key="tx.id"
                      class="border-b border-white/5 text-gray-300 hover:bg-white/5 transition-colors animate-fade-in"
                    >
                      <td class="p-3 text-amber-500 font-bold">
                        TX-00{{ tx.id }}
                      </td>
                      <td class="p-3 text-white">{{ tx.barcode }}</td>
                      <td class="p-3 font-semibold">{{ tx.location }}</td>
                      <td class="p-3 text-gray-500">
                        {{ tx.prevLoc || "NULL" }}
                      </td>
                      <td class="p-3">
                        <span
                          class="px-2 py-0.5 rounded-full text-[9px] font-bold"
                          :class="[
                            tx.status === 'OK'
                              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                              : '',
                            tx.status === 'REJECTED'
                              ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                              : '',
                          ]"
                        >
                          {{ tx.status }}
                        </span>
                      </td>
                      <td class="p-3 text-gray-400">{{ tx.nik }}</td>
                      <td class="p-3 text-gray-500">{{ tx.time }}</td>
                    </tr>
                    <tr v-if="mockTransactions.length === 0">
                      <td
                        colspan="7"
                        class="p-8 text-center text-gray-500 italic"
                      >
                        {{ isJapanese ? 'トランザクションが記録されていません。「次工程へ進める」をクリックしてください。' : 'No transactions captured. Click "Scan & Advance Batch" above.' }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        <!-- RIGHT SIDEBAR (1 Column: Metrics & BA Takeaways) -->
        <div class="space-y-8">
          <!-- BA Takeaways -->
          <div
            class="p-6 rounded-2xl glass border border-white/10"
            data-aos="fade-left"
          >
            <h3
              class="text-lg font-bold text-white mb-6 flex items-center gap-2"
            >
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
                  <h4 class="text-sm font-semibold text-white">
                    {{ item.title }}
                  </h4>
                  <p class="text-xs text-gray-400 mt-0.5">
                    {{ item.desc }}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Project Metadata -->
          <div
            class="p-6 rounded-2xl glass border border-white/10"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h3 class="text-lg font-bold text-white mb-4">{{ t.telemetry.title }}</h3>

            <div class="space-y-3 text-xs border-b border-white/5 pb-4 mb-4">
              <div class="flex justify-between">
                <span class="text-gray-400">{{ isJapanese ? 'バックエンド基盤' : 'Backend Engine' }}</span>
                <span class="text-white font-mono">{{ t.telemetry.backend }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ isJapanese ? 'フロントエンド' : 'Frontend UI' }}</span>
                <span class="text-white font-mono">{{ t.telemetry.frontend }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ isJapanese ? 'データベース' : 'Database' }}</span>
                <span class="text-white font-mono">{{ t.telemetry.database }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ isJapanese ? '現場端末機器' : 'Hardware Fleet' }}</span>
                <span class="text-white font-mono">{{ t.telemetry.hardware }}</span>
              </div>
            </div>

            <!-- GitHub link -->
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
import { ref, computed } from "vue";
import {
  ArrowLeft,
  Cpu,
  EyeOff,
  Database,
  Compass,
  Clock,
  Network,
  ChevronRight,
  PlayCircle,
  Check,
  ArrowRight,
  Sparkles,
  Github,
} from "lucide-vue-next";
import { useLanguage } from "@/composables/useLanguage";
import { protrackI18n } from "@/locales/caseStudies/protrack";

const { isJapanese } = useLanguage();
const t = computed(() => (isJapanese.value ? protrackI18n.ja : protrackI18n.en));

const problemIcons = [EyeOff, Database, Compass, Clock];

// LocalStorage Persistence
const STORAGE_KEY = "protrack_sim_state";
const loadSimState = () => {
  try {
    const d = localStorage.getItem(STORAGE_KEY);
    return d ? JSON.parse(d) : null;
  } catch (e) {
    return null;
  }
};
const saveSimState = () => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        stepIdx: activeStepIndex.value,
        batch: activeBatch.value,
        txns: mockTransactions.value,
      }),
    );
  } catch (e) {
    /* quota exceeded */
  }
};

const persistedSim = loadSimState();

// Pipeline Stations Configuration
const pipelineStations = [
  { code: "MCH", name: "Machinery", nameJa: "木取り・機械加工" },
  { code: "ASSY", name: "Assembling", nameJa: "組立・構造接合" },
  { code: "CRV", name: "Carving & Sanding", nameJa: "彫刻・木地研磨" },
  { code: "FIN", name: "Finishing", nameJa: "塗装・乾燥硬化" },
  { code: "UPH", name: "Upholstery", nameJa: "張子・ファブリック" },
  { code: "PACK", name: "Packing", nameJa: "検品・梱包保管" },
  { code: "SHP", name: "Shipped", nameJa: "コンテナ積込出荷" },
];

// Simulator Reactive State
const activeStepIndex = ref(persistedSim?.stepIdx || 0);
const activeBatch = ref(
  persistedSim?.batch || {
    barcode: "20-0617-B-0012",
    location: "MCH",
    state: "PROCESSING",
    agingDays: 1.8,
  },
);

const mockTransactions = ref(
  persistedSim?.txns || [
    {
      id: 1,
      barcode: "20-0617-B-0012",
      location: "MCH",
      prevLoc: null,
      status: "OK",
      nik: "OP-4011",
      time: new Date().toLocaleTimeString(),
    },
  ],
);

const activeStepPercentage = computed(() => {
  return (activeStepIndex.value / 6) * 100;
});

const advanceBatch = () => {
  if (activeStepIndex.value === 6) return;

  const prevIdx = activeStepIndex.value;
  activeStepIndex.value++;

  const activeStation = pipelineStations[activeStepIndex.value];
  activeBatch.value.location = activeStation.code;
  activeBatch.value.state =
    activeStepIndex.value === 6 ? "COMPLETED" : "PROCESSING";
  activeBatch.value.agingDays = +(
    Number(activeBatch.value.agingDays || 1.8) + 0.6
  ).toFixed(1);

  // Append transaction log
  mockTransactions.value.unshift({
    id: mockTransactions.value.length + 1,
    barcode: activeBatch.value.barcode,
    location: activeStation.code,
    prevLoc: pipelineStations[prevIdx].code,
    status: "OK",
    nik: `OP-40${10 + activeStepIndex.value}`,
    time: new Date().toLocaleTimeString(),
  });
  saveSimState();
};

const simulateReject = () => {
  if (activeStepIndex.value === 6 || activeBatch.value.state === "REJECTED")
    return;

  activeBatch.value.state = "REJECTED";
  activeBatch.value.agingDays = +(
    Number(activeBatch.value.agingDays || 1.8) + 2.8
  ).toFixed(1);

  // Append reject transaction log
  mockTransactions.value.unshift({
    id: mockTransactions.value.length + 1,
    barcode: activeBatch.value.barcode,
    location: pipelineStations[activeStepIndex.value].code,
    prevLoc: null,
    status: "REJECTED",
    nik: `QC-7092`,
    time: new Date().toLocaleTimeString(),
  });
  saveSimState();
};

const jumpToStep = (idx) => {
  activeStepIndex.value = idx;
  const activeStation = pipelineStations[idx];
  activeBatch.value.location = activeStation.code;
  activeBatch.value.state = idx === 6 ? "COMPLETED" : "PROCESSING";
  activeBatch.value.agingDays = +(0.8 + idx * 0.7).toFixed(1);

  mockTransactions.value.unshift({
    id: mockTransactions.value.length + 1,
    barcode: activeBatch.value.barcode,
    location: activeStation.code,
    prevLoc: "MANUAL_JUMP",
    status: "OK",
    nik: "SPV-9011",
    time: new Date().toLocaleTimeString(),
  });
};

const resetSimulator = () => {
  activeStepIndex.value = 0;
  activeBatch.value = {
    barcode: `20-0617-B-00${Math.floor(Math.random() * 90) + 10}`,
    location: "MCH",
    state: "PROCESSING",
    agingDays: 0.8,
  };
  mockTransactions.value = [
    {
      id: 1,
      barcode: activeBatch.value.barcode,
      location: "MCH",
      prevLoc: null,
      status: "OK",
      nik: "OP-4011",
      time: new Date().toLocaleTimeString(),
    },
  ];
  saveSimState();
};
</script>

<style scoped>
/* Fade in animation keyframe */
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gradient-mesh {
  background: radial-gradient(
      at 40% 20%,
      rgba(251, 191, 36, 0.08) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, rgba(245, 158, 11, 0.05) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(251, 191, 36, 0.05) 0px, transparent 50%);
}
</style>
