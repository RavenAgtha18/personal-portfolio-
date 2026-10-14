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
          <Wallet class="w-4 h-4 text-amber-400" />
          <span
            class="text-xs text-amber-300 font-semibold tracking-wider uppercase"
            >{{ t.badge }}</span
          >
        </div>
        <h1
          class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 sm:mb-8"
        >
          {{ t.hero.titlePrefix }} <span class="gradient-text">{{ t.hero.titleHighlight }}</span>
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
            <span class="text-xs text-gray-400 block mb-1">{{ t.hero.domainLabel }}</span>
            <span class="text-sm font-semibold text-white"
              >{{ t.hero.domainValue }}</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >{{ t.hero.archLabel }}</span
            >
            <span class="text-sm font-semibold text-white"
              >{{ t.hero.archValue }}</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >{{ t.hero.featuresLabel }}</span
            >
            <span class="text-sm font-semibold text-green-400"
              >{{ t.hero.featuresValue }}</span
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
              <p>{{ t.exec.p1 }}</p>
              <p>{{ t.exec.p2 }}</p>
              <p>{{ t.exec.p3 }}</p>
            </div>
          </section>

          <!-- SECTION 2: CORE FINANCIAL & TECHNICAL PROBLEMS SOLVED -->
          <section id="problems-solved" class="scroll-mt-24" data-aos="fade-up">
            <h2
              class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3"
            >
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              {{ t.problems.title }}
            </h2>

            <div class="space-y-6">
              <div
                v-for="(item, idx) in t.problems.items"
                :key="idx"
                class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400"
                >
                  <component
                    :is="idx === 0 ? TrendingUp : idx === 1 ? AlertTriangle : RefreshCw"
                    class="w-5 h-5"
                  />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">
                    {{ item.title }}
                  </h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 3: DATABASE SCHEMA & TRANSACTIONAL ARCHITECTURE -->
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

            <!-- Table 1: budget_category -->
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
                      <th class="px-4 py-2">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="col in t.schema.table1Cols"
                      :key="col.name"
                      class="border-b border-white/5"
                    >
                      <td class="px-4 py-2 text-amber-300 font-medium">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2 text-gray-500">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">
                        {{ col.purpose }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 2: budget_allocations -->
            <div
              class="mb-6 rounded-xl glass border border-white/10 overflow-hidden"
            >
              <div
                class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between"
              >
                <span>{{ t.schema.table2Title }}</span>
                <span class="text-amber-400"
                  >{{ t.schema.table2Tag }}</span
                >
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
                      <th class="px-4 py-2">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="col in t.schema.table2Cols"
                      :key="col.name"
                      class="border-b border-white/5"
                    >
                      <td class="px-4 py-2 text-amber-300 font-medium">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2 text-gray-500">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">
                        {{ col.purpose }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 3: realization -->
            <div
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
                      <th class="px-4 py-2">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="col in t.schema.table3Cols"
                      :key="col.name"
                      class="border-b border-white/5"
                    >
                      <td class="px-4 py-2 text-amber-300 font-medium">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2 text-gray-500">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">
                        {{ col.purpose }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- ACID and Transaction Integrity Details -->
            <div
              class="p-4 rounded-xl bg-zinc-950 border border-white/5 text-sm space-y-3"
            >
              <h4 class="font-bold text-white flex items-center gap-2">
                <Database class="w-4 h-4 text-amber-400" /> {{ t.schema.acidTitle }}
              </h4>
              <p class="text-xs text-gray-400 leading-relaxed">
                {{ t.schema.acidDesc }}
              </p>
              <ul class="list-disc pl-4 text-xs text-gray-400 space-y-1">
                <li>
                  {{ t.schema.acid1 }}
                </li>
                <li>
                  {{ t.schema.acid2 }}
                </li>
              </ul>
            </div>
          </section>

          <!-- SECTION 4: INTERACTIVE EXPENSE & BUDGET SIMULATOR -->
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

            <div class="p-6 rounded-2xl glass border border-white/10">
              <div class="flex justify-between items-center mb-6">
                <h3
                  class="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2"
                >
                  <PiggyBank class="w-4 h-4 text-amber-400" /> {{ t.sim.controllerTitle }}
                </h3>
                <button
                  @click="resetBudgetSimulator"
                  class="text-amber-400 hover:text-amber-300 text-xs font-mono"
                >
                  {{ t.sim.btnReset }}
                </button>
              </div>

              <!-- General Budget Stats -->
              <div class="grid grid-cols-3 gap-4 mb-8">
                <div
                  class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl text-center"
                >
                  <span class="text-[10px] text-gray-400 block uppercase"
                    >{{ t.sim.statLimit }}</span
                  >
                  <span class="text-base font-bold text-white font-mono"
                    >${{ formatMoney(totalBudgetLimit) }}</span
                  >
                </div>
                <div
                  class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl text-center"
                >
                  <span class="text-[10px] text-gray-400 block uppercase"
                    >{{ t.sim.statSpent }}</span
                  >
                  <span class="text-base font-bold text-amber-400 font-mono"
                    >${{ formatMoney(totalExpensesSpent) }}</span
                  >
                </div>
                <div
                  class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl text-center"
                >
                  <span class="text-[10px] text-gray-400 block uppercase"
                    >{{ t.sim.statAvailable }}</span
                  >
                  <span
                    class="text-base font-bold font-mono"
                    :class="
                      availableBalance >= 0 ? 'text-green-400' : 'text-red-400'
                    "
                  >
                    ${{ formatMoney(availableBalance) }}
                  </span>
                </div>
              </div>

              <!-- Category Meters -->
              <div class="space-y-5 mb-8">
                <div
                  v-for="cat in budgetMetersComputed"
                  :key="cat.name"
                  class="space-y-1.5"
                >
                  <div class="flex justify-between text-xs font-mono">
                    <span
                      class="text-white font-bold flex items-center gap-1.5"
                    >
                      <span
                        class="w-2.5 h-2.5 rounded-full"
                        :class="cat.colorClass"
                      ></span>
                      {{ getCategoryLabel(cat.name) }}
                    </span>
                    <span class="text-gray-400">
                      {{ isJapanese ? '消化額:' : 'Spent:' }}
                      <strong class="text-white"
                        >${{ formatMoney(cat.spent) }}</strong
                      >
                      / ${{ formatMoney(cat.limit) }} ({{ cat.percent }}%)
                    </span>
                  </div>

                  <!-- Dynamic Progress Bar -->
                  <div
                    class="w-full bg-white/5 h-3 rounded-full overflow-hidden border border-white/5 relative"
                  >
                    <div
                      class="h-full rounded-full transition-all duration-500 ease-out"
                      :class="getProgressColor(cat.percent)"
                      :style="{ width: Math.min(cat.percent, 100) + '%' }"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Input Form -->
              <div class="bg-[#0e0e0e] border border-white/5 p-5 rounded-xl">
                <h4
                  class="text-xs font-bold text-white uppercase tracking-wider mb-4"
                >
                  {{ t.sim.formTitle }}
                </h4>

                <form
                  @submit.prevent="addExpense"
                  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end"
                >
                  <div>
                    <label
                      class="block text-[10px] text-gray-400 uppercase mb-1"
                      >{{ t.sim.labelCurrency }}</label
                    >
                    <select
                      v-model="newExpense.currency"
                      class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option value="USD" class="bg-neutral-900">USD ($ base 1.0)</option>
                      <option value="JPY" class="bg-neutral-900">JPY (¥ 150 = $1)</option>
                      <option value="IDR" class="bg-neutral-900">IDR (Rp 16k = $1)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      class="block text-[10px] text-gray-400 uppercase mb-1"
                      >{{ t.sim.labelAmount }} ({{ newExpense.currency }})</label
                    >
                    <input
                      v-model.number="newExpense.rawAmount"
                      type="number"
                      min="1"
                      required
                      class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                    />
                    <span class="text-[10px] text-amber-400 font-mono block mt-1">
                      ≈ ${{ formatMoney(convertedBaseAmount) }} USD
                    </span>
                  </div>

                  <div>
                    <label
                      class="block text-[10px] text-gray-400 uppercase mb-1"
                      >{{ t.sim.labelCategory }}</label
                    >
                    <select
                      v-model="newExpense.category"
                      class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option
                        v-for="cat in budgetMeters"
                        :key="cat.name"
                        :value="cat.name"
                        class="bg-neutral-900"
                      >
                        {{ getCategoryLabel(cat.name) }}
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    class="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-2 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5 h-[34px]"
                  >
                    <CheckCircle2 class="w-4 h-4" />
                    <span>{{ t.sim.btnCommit }}</span>
                  </button>
                </form>

                <div
                  v-if="overrunAlert"
                  class="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400 text-center font-mono animate-fade-in"
                >
                  {{ overrunAlert }}
                </div>
              </div>
            </div>

            <!-- SIMULATED TRANSACTION LOGS -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <h3
                class="text-sm font-bold text-white mb-4 uppercase tracking-wider font-mono flex items-center gap-2"
              >
                <Database class="w-4 h-4 text-amber-500" /> {{ t.sim.sqlLogsTitle }}
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
                      <th class="p-3">{{ t.sim.thCategory }}</th>
                      <th class="p-3">{{ t.sim.thAmount }}</th>
                      <th class="p-3">{{ t.sim.thSupplier }}</th>
                      <th class="p-3">{{ t.sim.thStatus }}</th>
                      <th class="p-3">{{ t.sim.thTimestamp }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="log in realizationLogs"
                      :key="log.id"
                      class="border-b border-white/5 text-gray-300 hover:bg-white/5 transition-colors animate-fade-in"
                    >
                      <td class="p-3 text-amber-500 font-bold">
                        #REAL-{{ log.id }}
                      </td>
                      <td class="p-3 text-white">{{ getCategoryLabel(log.category) }}</td>
                      <td class="p-3 text-amber-400 font-bold">
                        ${{ formatMoney(log.amount) }}
                        <span v-if="log.currencyNote" class="text-[9px] text-gray-400 block font-normal font-sans">{{ log.currencyNote }}</span>
                      </td>
                      <td class="p-3">{{ log.supplier }}</td>
                      <td class="p-3">
                        <span
                          class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-green-500/10 text-green-400 border border-green-500/20"
                        >
                          {{ t.sim.statusCommitted }}
                        </span>
                      </td>
                      <td class="p-3 text-gray-500">{{ log.time }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        <!-- RIGHT SIDEBAR (1 Column: Insights & Stats) -->
        <div class="space-y-8">
          <!-- Key Achievements -->
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
                v-for="(feat, fIdx) in t.features.items"
                :key="fIdx"
                class="flex items-start gap-3"
              >
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">
                    {{ feat.title }}
                  </h4>
                  <p class="text-xs text-gray-400 mt-0.5">
                    {{ feat.desc }}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Project Specs -->
          <div
            class="p-6 rounded-2xl glass border border-white/10"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h3 class="text-lg font-bold text-white mb-4">{{ t.features.telemetryTitle }}</h3>

            <div class="space-y-3 text-xs border-b border-white/5 pb-4 mb-4">
              <div class="flex justify-between">
                <span class="text-gray-400">{{ t.features.backend }}</span>
                <span class="text-white font-mono">Laravel 10 / PHP 8.2</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ t.features.frontend }}</span>
                <span class="text-white font-mono"
                  >Vue 3 / Axios / Tailwind</span
                >
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ t.features.database }}</span>
                <span class="text-white font-mono">MySQL / InnoDB</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ t.features.locking }}</span>
                <span class="text-white font-mono"
                  >Pessimistic lockForUpdate()</span
                >
              </div>
            </div>

            <a
              href="https://github.com/RavenAgtha18"
              target="_blank"
              class="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors flex items-center justify-center gap-2 text-xs font-semibold"
            >
              <Github class="w-4 h-4" />
              <span>{{ t.features.btnGithub }}</span>
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
  Wallet,
  TrendingUp,
  AlertTriangle,
  Database,
  PiggyBank,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  Check,
  Github,
} from "lucide-vue-next";
import { useLanguage } from "@/composables/useLanguage";
import { finwiseI18n } from "@/locales/caseStudies/finwise";

const { isJapanese } = useLanguage();
const t = computed(() => (isJapanese.value ? finwiseI18n.ja : finwiseI18n.en));

// Category label localization map
const categoryLabelsJa = {
  "Operational & Materials": "業務運用・資材費",
  "Logistics & Shipping": "物流・配送費",
  "Facility & Tools": "設備・工具備品",
  "Marketing & Material": "マーケティング・販促",
};

const getCategoryLabel = (name) => {
  return isJapanese.value && categoryLabelsJa[name] ? categoryLabelsJa[name] : name;
};

// LocalStorage Persistence
const STORAGE_KEY = "finwise_budget_state";
const loadState = () => {
  try {
    const d = localStorage.getItem(STORAGE_KEY);
    return d ? JSON.parse(d) : null;
  } catch (e) {
    return null;
  }
};
const saveState = () => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        meters: budgetMeters.value,
        logs: realizationLogs.value,
      }),
    );
  } catch (e) {
    /* quota exceeded */
  }
};

const persisted = loadState();

// Mock Budget Categories State
const budgetMeters = ref(
  persisted?.meters || [
    {
      name: "Operational & Materials",
      limit: 25000,
      spent: 14500,
      colorClass: "bg-amber-400",
    },
    {
      name: "Logistics & Shipping",
      limit: 10000,
      spent: 8500,
      colorClass: "bg-blue-400",
    },
    {
      name: "Facility & Tools",
      limit: 8000,
      spent: 4000,
      colorClass: "bg-green-400",
    },
    {
      name: "Marketing & Material",
      limit: 5000,
      spent: 4900,
      colorClass: "bg-purple-400",
    },
  ],
);

const budgetMetersComputed = computed(() => {
  return budgetMeters.value.map((cat) => {
    const percent = Math.round((cat.spent / cat.limit) * 100);
    return { ...cat, percent };
  });
});

const totalBudgetLimit = computed(() => {
  return budgetMeters.value.reduce((acc, cat) => acc + cat.limit, 0);
});

const totalExpensesSpent = computed(() => {
  return budgetMeters.value.reduce((acc, cat) => acc + cat.spent, 0);
});

const availableBalance = computed(() => {
  return totalBudgetLimit.value - totalExpensesSpent.value;
});

// Currency conversion rates
const exchangeRates = {
  USD: 1,
  JPY: 150,
  IDR: 16000,
};

// New Expense Form State
const newExpense = ref({
  currency: "USD",
  rawAmount: 200,
  category: "Operational & Materials",
});

const convertedBaseAmount = computed(() => {
  const rate = exchangeRates[newExpense.value.currency] || 1;
  const raw = Number(newExpense.value.rawAmount) || 0;
  return Math.round(raw / rate);
});

const overrunAlert = ref("");
const realizationLogs = ref(
  persisted?.logs || [
    {
      id: 401,
      category: "Operational & Materials",
      amount: 3500,
      currencyNote: null,
      supplier: "Mitra Kayu Sejahtera",
      time: "10:14:25",
    },
    {
      id: 402,
      category: "Logistics & Shipping",
      amount: 1200,
      currencyNote: null,
      supplier: "Jasa Kargo Logistics",
      time: "09:44:12",
    },
    {
      id: 403,
      category: "Marketing & Material",
      amount: 500,
      currencyNote: null,
      supplier: "Global Printing Sol",
      time: "09:05:03",
    },
  ],
);

const getProgressColor = (percent) => {
  if (percent >= 100) return "bg-red-500";
  if (percent >= 85) return "bg-orange-500";
  if (percent >= 70) return "bg-amber-500";
  return "bg-green-500";
};

const addExpense = () => {
  overrunAlert.value = "";

  const category = budgetMeters.value.find(
    (cat) => cat.name === newExpense.value.category,
  );
  if (!category) return;

  const baseAmount = Math.max(1, convertedBaseAmount.value);

  // Overrun checks
  const futureSpent = category.spent + baseAmount;
  if (futureSpent > category.limit) {
    overrunAlert.value = isJapanese.value
      ? `警告: この ${newExpense.value.currency} 取引（換算 $${baseAmount} USD）により、カテゴリ [${getCategoryLabel(category.name)}] の予算枠を超過します！`
      : `Warning: This transaction of $${baseAmount} USD will cause an overrun on category [${category.name}] budget limit!`;
  }

  // Deduct/Add to spent
  category.spent += baseAmount;

  // Add realization log
  realizationLogs.value.unshift({
    id: realizationLogs.value.length + 401,
    category: category.name,
    amount: baseAmount,
    currencyNote:
      newExpense.value.currency !== "USD"
        ? `${Number(newExpense.value.rawAmount).toLocaleString()} ${newExpense.value.currency} ${isJapanese.value ? '換算済' : 'converted'}`
        : null,
    supplier: getRandomSupplier(category.name),
    time: new Date().toTimeString().split(" ")[0],
  });

  // Persist state
  saveState();

  // Reset Input
  newExpense.value.rawAmount =
    newExpense.value.currency === "IDR"
      ? 1600000
      : newExpense.value.currency === "JPY"
        ? 15000
        : 100;
};

const getRandomSupplier = (category) => {
  const suppliers = {
    "Operational & Materials": [
      "Mitra Kayu Sejahtera",
      "CG Finishing Supply",
      "FurniFab Indah",
    ],
    "Logistics & Shipping": [
      "Jasa Kargo Logistics",
      "Meratus Shipping Line",
      "Indo Cargo Hub",
    ],
    "Facility & Tools": [
      "Graha Tools Mandiri",
      "Teknik Perkakas Raya",
      "Kawan Abadi Tools",
    ],
    "Marketing & Material": [
      "Global Printing Sol",
      "Agensi Kreatif Muda",
      "Mitra Pameran CG",
    ],
  };
  const list = suppliers[category] || ["Vendor Partner"];
  return list[Math.floor(Math.random() * list.length)];
};

const formatMoney = (val) => {
  return Number(val).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

const resetBudgetSimulator = () => {
  budgetMeters.value = [
    {
      name: "Operational & Materials",
      limit: 25000,
      spent: 14500,
      colorClass: "bg-amber-400",
    },
    {
      name: "Logistics & Shipping",
      limit: 10000,
      spent: 8500,
      colorClass: "bg-blue-400",
    },
    {
      name: "Facility & Tools",
      limit: 8000,
      spent: 4000,
      colorClass: "bg-green-400",
    },
    {
      name: "Marketing & Material",
      limit: 5000,
      spent: 4900,
      colorClass: "bg-purple-400",
    },
  ];
  overrunAlert.value = "";
  realizationLogs.value = [
    {
      id: 401,
      category: "Operational & Materials",
      amount: 3500,
      supplier: "Mitra Kayu Sejahtera",
      time: "10:14:25",
    },
    {
      id: 402,
      category: "Logistics & Shipping",
      amount: 1200,
      supplier: "Jasa Kargo Logistics",
      time: "09:44:12",
    },
    {
      id: 403,
      category: "Marketing & Material",
      amount: 500,
      supplier: "Global Printing Sol",
      time: "09:05:03",
    },
  ];
  saveState();
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
