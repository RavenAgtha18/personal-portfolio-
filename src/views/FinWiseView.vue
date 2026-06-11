<template>
  <div class="relative min-h-screen pt-24 pb-20 px-6 overflow-hidden">
    <!-- Background Accents -->
    <div class="fixed inset-0 -z-10 gradient-mesh opacity-70"></div>
    <div class="fixed inset-0 -z-10 grid-pattern opacity-30"></div>

    <!-- Top Nav / Back Button -->
    <div class="max-w-7xl mx-auto mb-10" data-aos="fade-down">
      <router-link
        to="/portfolio"
        class="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors group text-sm font-medium"
      >
        <ArrowLeft
          class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
        />
        <span>Back to Projects</span>
      </router-link>
    </div>

    <!-- Main Container -->
    <article class="max-w-6xl mx-auto">
      <!-- HERO HEADER -->
      <header class="mb-16 text-center md:text-left" data-aos="fade-up">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-amber mb-6"
        >
          <Wallet class="w-4 h-4 text-amber-400" />
          <span
            class="text-xs text-amber-300 font-semibold tracking-wider uppercase"
            >FinTech Case Study</span
          >
        </div>
        <h1
          class="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8"
        >
          FinWise – <span class="gradient-text">Smart Personal Budgeting</span>
          <br class="hidden lg:inline" />
          &amp; Real-Time Financial Intelligence Engine
        </h1>

        <div
          class="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl glass mt-8"
        >
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >Role &amp; Scope</span
            >
            <span class="text-sm font-semibold text-amber-300"
              >Technical BA / Full-stack Developer</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Domain Focus</span>
            <span class="text-sm font-semibold text-white"
              >FinTech / Personal Asset Management</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >Core Architecture</span
            >
            <span class="text-sm font-semibold text-white"
              >Laravel REST API + Vue 3 SPA</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >Financial Integrity</span
            >
            <span class="text-sm font-semibold text-green-400"
              >100% Data Accuracy &amp; Overrun Prevention</span
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
              Executive Summary
            </h2>
            <div class="space-y-4 text-gray-300 leading-relaxed text-base">
              <p>
                <strong>FinWise</strong> is a personal asset, budgeting, and
                transaction tracking platform designed to optimize individual
                liquidity and analyze monthly spending behaviors. By
                centralizing cash movements, internal transfers, and supplier
                realizations, the system creates a comprehensive log of all
                financial flows.
              </p>
              <p>
                The backend acts as a strict validation gateway, evaluating
                incoming expense requests against parent categories and granular
                monthly sub-category budget limits. The frontend client provides
                real-time financial tracking widgets, allowing users to
                visualize budget utilization metrics dynamically.
              </p>
              <p>
                By shifting expense verification directly to the transaction
                entry point, FinWise prevents budget overruns, eliminates ledger
                desynchronization across multi-currency accounts, and delivers
                instant financial reporting transparency.
              </p>
            </div>
          </section>

          <!-- SECTION 2: CORE FINANCIAL & TECHNICAL PROBLEMS SOLVED -->
          <section id="problems-solved" class="scroll-mt-24" data-aos="fade-up">
            <h2
              class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3"
            >
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              Operational &amp; Technical Problems Solved
            </h2>

            <div class="space-y-6">
              <!-- Problem 1 -->
              <div
                class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400"
                >
                  <TrendingUp class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">
                    Asymmetric Expense Tracking &amp; Data Leakage
                  </h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Users often log fluid transactional records (e.g. transfers,
                    partial vendor payments) across multiple accounts without a
                    centralized double-entry validation system. This leads to
                    balance mismatch leaks. FinWise enforces structural ledger
                    matching by linking allocations (`budget_allocations`) with
                    actual payouts (`realization`).
                  </p>
                </div>
              </div>

              <!-- Problem 2 -->
              <div
                class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400"
                >
                  <AlertTriangle class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">
                    Silent Budget Overrun &amp; Missing Verification Gateways
                  </h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Traditional expense apps log transactions post-facto,
                    alerting users only after a budget category has already been
                    breached. FinWise incorporates an active middleware
                    validator at the database request layer, evaluating
                    transaction amount limits against remaining allocated
                    buffers before executing commit operations.
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
              Database Schema &amp; Transactional Integrity
            </h2>
            <p class="text-gray-300 mb-6">
              The database schema uses a highly structured relational
              transaction model. To prevent balance inconsistencies during
              concurrent writes, FinWise utilizes strict
              <strong>database-level transaction locks (ACID compliance)</strong
              >.
            </p>

            <!-- Table 1: budget_category -->
            <div
              class="mb-6 rounded-xl glass border border-white/10 overflow-hidden"
            >
              <div
                class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between"
              >
                <span>1. Table: budget_category</span>
                <span class="text-amber-400">Parent Category Budgets</span>
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
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-amber-300">id</td>
                      <td class="px-4 py-2 text-gray-400">BIGINT(20)</td>
                      <td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td>
                      <td class="px-4 py-2 text-gray-400">
                        Unique identifier for the parent budget.
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">total_budget</td>
                      <td class="px-4 py-2 text-gray-400">DECIMAL(22,2)</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        Total parent category spending limit amount.
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 text-white">category_materials</td>
                      <td class="px-4 py-2 text-gray-400">VARCHAR(225)</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        Group identifier (e.g. Operational, Raw Materials).
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
                <span>2. Table: budget_allocations</span>
                <span class="text-amber-400"
                  >Granular Limits &amp; Transfers</span
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
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-amber-300">id</td>
                      <td class="px-4 py-2 text-gray-400">BIGINT(20)</td>
                      <td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td>
                      <td class="px-4 py-2 text-gray-400">
                        Unique identifier for sub-allocations.
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">category_item</td>
                      <td class="px-4 py-2 text-gray-400">VARCHAR(225)</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        Specific item/expense category name.
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">allocated_budget</td>
                      <td class="px-4 py-2 text-gray-400">DECIMAL(22,2)</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        Base budget limit allocated to this category.
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 text-white">transfer_1 ... 5</td>
                      <td class="px-4 py-2 text-gray-400">DECIMAL(22,2)</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        Logs adjustments and topups transferred in/out.
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
                <span>3. Table: realization</span>
                <span class="text-amber-400">Actual Outflow Transactions</span>
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
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-amber-300">id</td>
                      <td class="px-4 py-2 text-gray-400">BIGINT(20)</td>
                      <td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td>
                      <td class="px-4 py-2 text-gray-400">
                        Unique payment transaction ID.
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">supplier</td>
                      <td class="px-4 py-2 text-gray-400">VARCHAR(225)</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        Recipient supplier/merchant name.
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">amount</td>
                      <td class="px-4 py-2 text-gray-400">DECIMAL(22,2)</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        Transactional cash amount paid.
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 text-white">category_materials</td>
                      <td class="px-4 py-2 text-gray-400">VARCHAR(225)</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        Linked spending category for budget validation.
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
                <Database class="w-4 h-4 text-amber-400" /> Arithmetic Integrity
                (ACID Operations)
              </h4>
              <p class="text-xs text-gray-400 leading-relaxed">
                To guarantee ledger balance consistency, FinWise utilizes
                Laravel's database-level transactions:
              </p>
              <ul class="list-disc pl-4 text-xs text-gray-400 space-y-1">
                <li>
                  <strong>Atomic Commits</strong>: Ledger insertions into the
                  <code class="text-amber-300">realization</code> table are
                  bundled together with update queries on
                  <code class="text-amber-300">budget_allocations</code> inside
                  an SQL transaction block.
                </li>
                <li>
                  <strong>Pessimistic Locking</strong>: Uses
                  <code class="text-amber-300">sharedLock()</code> and
                  <code class="text-amber-300">lockForUpdate()</code> during
                  write calculations to prevent multi-device race conditions.
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
                Interactive Expense &amp; Budget Simulator
              </h2>
              <p class="text-gray-300">
                Test the real-time budget depletion mechanism. Add custom mock
                expenses to the categories below. Observe the reactive budget
                meters and how they change color from green to red when overrun
                thresholds are crossed.
              </p>
            </div>

            <div class="p-6 rounded-2xl glass border border-white/10">
              <div class="flex justify-between items-center mb-6">
                <h3
                  class="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2"
                >
                  <PiggyBank class="w-4 h-4 text-amber-400" /> Live Budget
                  Controller
                </h3>
                <button
                  @click="resetBudgetSimulator"
                  class="text-amber-400 hover:text-amber-300 text-xs font-mono"
                >
                  Reset Budgets
                </button>
              </div>

              <!-- General Budget Stats -->
              <div class="grid grid-cols-3 gap-4 mb-8">
                <div
                  class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl text-center"
                >
                  <span class="text-[10px] text-gray-400 block uppercase"
                    >Total Limit</span
                  >
                  <span class="text-base font-bold text-white font-mono"
                    >${{ formatMoney(totalBudgetLimit) }}</span
                  >
                </div>
                <div
                  class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl text-center"
                >
                  <span class="text-[10px] text-gray-400 block uppercase"
                    >Spent So Far</span
                  >
                  <span class="text-base font-bold text-amber-400 font-mono"
                    >${{ formatMoney(totalExpensesSpent) }}</span
                  >
                </div>
                <div
                  class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl text-center"
                >
                  <span class="text-[10px] text-gray-400 block uppercase"
                    >Available Bal</span
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
                      {{ cat.name }}
                    </span>
                    <span class="text-gray-400">
                      Spent:
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
                  Log Real-Time Expense Entry
                </h4>

                <form
                  @submit.prevent="addExpense"
                  class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
                >
                  <div>
                    <label
                      class="block text-[10px] text-gray-400 uppercase mb-1"
                      >Expense Amount ($)</label
                    >
                    <input
                      v-model.number="newExpense.amount"
                      type="number"
                      min="1"
                      required
                      class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      class="block text-[10px] text-gray-400 uppercase mb-1"
                      >Spend Category</label
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
                        {{ cat.name }}
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    class="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-2 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 class="w-4 h-4" />
                    <span>Commit Outflow</span>
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
                <Database class="w-4 h-4 text-amber-500" /> Simulated
                `realization` SQL Logs
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
                      <th class="p-3">id</th>
                      <th class="p-3">category_materials</th>
                      <th class="p-3">amount</th>
                      <th class="p-3">supplier</th>
                      <th class="p-3">status</th>
                      <th class="p-3">timestamp</th>
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
                      <td class="p-3 text-white">{{ log.category }}</td>
                      <td class="p-3 text-amber-400 font-bold">
                        ${{ formatMoney(log.amount) }}
                      </td>
                      <td class="p-3">{{ log.supplier }}</td>
                      <td class="p-3">
                        <span
                          class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-green-500/10 text-green-400 border border-green-500/20"
                        >
                          Committed
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
              <Sparkles class="w-5 h-5 text-amber-400" /> Key Features
            </h3>

            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">
                    ACID transactional logs
                  </h4>
                  <p class="text-xs text-gray-400 mt-0.5">
                    Enforces atomic commits between budget categories,
                    allocations, and realization tables.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">
                    Dynamic allocation logs
                  </h4>
                  <p class="text-xs text-gray-400 mt-0.5">
                    Tracks manual allocation shifting events through dedicated
                    SQL columns (`transfer_1` to `transfer_5`).
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">
                    Real-Time limit monitoring
                  </h4>
                  <p class="text-xs text-gray-400 mt-0.5">
                    Prevents category budget overrun events before SQL database
                    execution commits.
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
            <h3 class="text-lg font-bold text-white mb-4">Project Telemetry</h3>

            <div class="space-y-3 text-xs border-b border-white/5 pb-4 mb-4">
              <div class="flex justify-between">
                <span class="text-gray-400">Backend API</span>
                <span class="text-white font-mono">Laravel 10 / PHP 8.2</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Frontend Client</span>
                <span class="text-white font-mono"
                  >Vue 3 / Axios / Tailwind</span
                >
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Database Layer</span>
                <span class="text-white font-mono">MySQL / InnoDB</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Locking Strategy</span>
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
              <span>Explore GitHub Repository</span>
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
  Sparkles,
  Check,
  Github,
} from "lucide-vue-next";

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

// New Expense Form State
const newExpense = ref({
  amount: 200,
  category: "Operational & Materials",
});

const overrunAlert = ref("");
const realizationLogs = ref(
  persisted?.logs || [
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

  // Overrun checks
  const futureSpent = category.spent + newExpense.value.amount;
  if (futureSpent > category.limit) {
    overrunAlert.value = `Warning: This transaction of $${newExpense.value.amount} will cause an overrun on category [${category.name}] budget limit!`;
  }

  // Deduct/Add to spent
  category.spent += newExpense.value.amount;

  // Add realization log
  realizationLogs.value.unshift({
    id: realizationLogs.value.length + 401,
    category: category.name,
    amount: newExpense.value.amount,
    supplier: getRandomSupplier(category.name),
    time: new Date().toTimeString().split(" ")[0],
  });

  // Persist state
  saveState();

  // Reset Input
  newExpense.value.amount = 200;
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
