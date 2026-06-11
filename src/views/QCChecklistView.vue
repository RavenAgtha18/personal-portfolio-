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
        <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Projects</span>
      </router-link>
    </div>

    <!-- Main Container -->
    <article class="max-w-6xl mx-auto">
      
      <!-- HERO HEADER -->
      <header class="mb-16 text-center md:text-left" data-aos="fade-up">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-amber mb-6">
          <ShieldCheck class="w-4 h-4 text-amber-400" />
          <span class="text-xs text-amber-300 font-semibold tracking-wider uppercase font-mono">Enterprise Case Study</span>
        </div>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
          QCChecklist – <span class="gradient-text">Enterprise Quality Gate:</span> <br class="hidden lg:inline"/>
          Automated Inspection &amp; Defect Tracking Engine
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl glass mt-8">
          <div>
            <span class="text-xs text-gray-400 block mb-1">Role &amp; Positioning</span>
            <span class="text-sm font-semibold text-amber-300">Technical BA / Full-stack Developer</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Domain Focus</span>
            <span class="text-sm font-semibold text-white">Quality Assurance / MES Gateways</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Core Tech Stack</span>
            <span class="text-sm font-semibold text-white">Laravel REST API + Vue 3 SPA</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Key Impact</span>
            <span class="text-sm font-semibold text-green-400">Zero Defect Slippage &amp; Compliance Logs</span>
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
              Executive Summary
            </h2>
            <div class="space-y-4 text-gray-300 leading-relaxed text-base">
              <p>
                <strong>QCChecklist-Quality</strong> is a shop-floor compliance and quality audit system developed to enforce product standards in luxury furniture manufacturing. By digitizing finished-product inspection checklists, the system acts as a mandatory validation gate that items must pass before getting approved for packaging and container loading.
              </p>
              <p>
                The backend governs inspection parameters dynamically based on the product category, logging results in a structured JSON schema. It replaces subjective, human-biased paper inspection checklists with a strict digital audit trail that links verified inspectors, barcodes, locations, and defect photo logs.
              </p>
              <p>
                By connecting final product approvals to real-time database locks, the application prevents unverified or defective batches from leaking into shipments, saving thousands of dollars in international rework and claims overhead.
              </p>
            </div>

            <!-- Highlight Stat -->
            <div class="mt-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <span class="text-xs text-amber-400 block font-mono uppercase tracking-wider">Operational Success</span>
                <h3 class="text-xl font-bold text-white mt-1">Defect Slippage Prevention</h3>
              </div>
              <div class="text-right">
                <span class="text-3xl md:text-4xl font-extrabold text-amber-400">100%</span>
                <span class="text-xs text-gray-400 block">Digital compliance compliance log</span>
              </div>
            </div>
          </section>

          <!-- SECTION 2: CORE OPERATIONAL & TECHNICAL PROBLEMS SOLVED -->
          <section id="problems-solved" class="scroll-mt-24" data-aos="fade-up">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3">
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              Operational &amp; Technical Problems Solved
            </h2>
            
            <div class="space-y-6">
              <!-- Problem 1 -->
              <div class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <ClipboardCheck class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Subjective &amp; Untraceable Paper Checklist Logs</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Paper-based checklists allow operators to brush over specific parameters or check them off post-facto. This results in defects like wood cracks, uneven paint thickness, or wobble escaping to packaging. QCChecklist requires verified users to commit inputs step-by-step, logging timestamped metrics directly to the ledger database.
                  </p>
                </div>
              </div>

              <!-- Problem 2 -->
              <div class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <AlertTriangle class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Lack of Blockage Feedback Loop for Rework</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Traditional QC audits do not lock downstream logistics. If a defect is found, packing stations might box the item anyway because they are unaware of the status. QCChecklist enforces state blocks at the database level: a failed checklist immediately locks the barcode status, throwing visual warnings at subsequent terminals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 3: DATABASE MAPPING & SCHEMA -->
          <section id="database-schema" class="scroll-mt-24" data-aos="fade-up">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3">
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              Database Schema &amp; Audit Logs
            </h2>
            <p class="text-gray-300 mb-6">
              The database structure links checklists, dynamic result values, and defect logs in a relational schema, supporting JSON structures to store multi-point check compliance reports.
            </p>

            <!-- Table 1: verified_product -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>1. Table: verified_product</span>
                <span class="text-amber-400">Audit Events</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr class="bg-black/35 text-gray-400 border-b border-white/5">
                      <th class="px-4 py-2">Column Name</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Key</th>
                      <th class="px-4 py-2">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id</td><td class="px-4 py-2 text-gray-400">BIGINT(20) UNSIGNED</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique identifier for audit session.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">barcode</td><td class="px-4 py-2 text-gray-400">VARCHAR(255)</td><td class="px-4 py-2 text-amber-400">INDEX</td><td class="px-4 py-2 text-gray-400">Barcode tag of physical inspected item.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">status</td><td class="px-4 py-2 text-gray-400">TINYINT(4)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">State flag (e.g. 1 = Approved, 2 = Blocked/Rework).</td></tr>
                    <tr><td class="px-4 py-2 text-white">inspection_date</td><td class="px-4 py-2 text-gray-400">TIMESTAMP</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Audit session committed timestamp.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 2: result_value -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>2. Table: result_value</span>
                <span class="text-amber-400">Checklist Values &amp; JSON</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr class="bg-black/35 text-gray-400 border-b border-white/5">
                      <th class="px-4 py-2">Column Name</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Key</th>
                      <th class="px-4 py-2">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id</td><td class="px-4 py-2 text-gray-400">BIGINT(20) UNSIGNED</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique value row ID.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">id_verified_product</td><td class="px-4 py-2 text-gray-400">BIGINT(20) UNSIGNED</td><td class="px-4 py-2 text-red-400">MUL (FK verified_product.id)</td><td class="px-4 py-2 text-gray-400">Linked audit log reference.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">subchecklist</td><td class="px-4 py-2 text-gray-400">JSON</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Stores list of checklist points (e.g. Dimensions, Wobble).</td></tr>
                    <tr><td class="px-4 py-2 text-white">value</td><td class="px-4 py-2 text-gray-400">JSON</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Stores dynamic results array (e.g. Pass, Fail, Rework).</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 3: defect_categories -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>3. Table: defect_categories</span>
                <span class="text-amber-400">Defect Lookup Master</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr class="bg-black/35 text-gray-400 border-b border-white/5">
                      <th class="px-4 py-2">Column Name</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Key</th>
                      <th class="px-4 py-2">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id</td><td class="px-4 py-2 text-gray-400">BIGINT(20) UNSIGNED</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique defect type reference.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">code</td><td class="px-4 py-2 text-gray-400">VARCHAR(255)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Unique catalog code (e.g. DEF-001).</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">name</td><td class="px-4 py-2 text-gray-400">VARCHAR(255)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Defect description (e.g. Varnish Blistering).</td></tr>
                    <tr><td class="px-4 py-2 text-white">image_1 ... 6</td><td class="px-4 py-2 text-gray-400">VARCHAR(255)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Paths to uploaded photos showing the defect.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- SECTION 4: INTERACTIVE COMPLIANCE INSPECTOR SIMULATOR -->
          <section id="simulator" class="scroll-mt-24 space-y-8" data-aos="fade-up">
            <div>
              <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-white border-b border-white/10 pb-3">
                <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
                Interactive Compliance Inspector Simulator
              </h2>
              <p class="text-gray-300">
                Simulate finished product quality checks. Enter a product barcode, verify each checkpoint parameter, and log inspection events. If any parameters fail, the status will shift to Rework, blocking the packaging pipeline.
              </p>
            </div>

            <!-- Simulator Widget -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              
              <!-- Telemetry Header -->
              <div class="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div class="flex items-center gap-4">
                  <Activity class="w-5 h-5 text-amber-400" />
                  <div class="text-left">
                    <span class="text-[10px] text-gray-400 block uppercase">Product Tag Barcode</span>
                    <input 
                      v-model="productBarcode" 
                      type="text" 
                      class="bg-transparent text-white font-mono font-bold text-sm border-b border-white/20 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div class="text-right">
                  <button @click="resetInspector" class="text-amber-400 hover:text-amber-300 text-xs font-mono flex items-center gap-1">
                    <RefreshCw class="w-3.5 h-3.5" />
                    <span>Reset Inspector</span>
                  </button>
                </div>
              </div>

              <!-- Checklist Form -->
              <div class="space-y-4 mb-6">
                <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-2">Shop-Floor Compliance Checkpoints</h4>
                
                <div 
                  v-for="point in checkpoints" 
                  :key="point.id"
                  class="p-4 rounded-xl border transition-all duration-300"
                  :class="point.status === 'Pass' ? 'bg-[#0f1d13]/40 border-green-500/20' : point.status === 'Fail' ? 'bg-[#291113]/40 border-red-500/20' : 'bg-white/5 border-white/5'"
                >
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1 max-w-lg">
                      <span class="text-[9px] uppercase px-1.5 py-0.5 rounded font-mono font-bold" :class="point.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-300'">
                        {{ point.priority }} Priority
                      </span>
                      <h5 class="text-sm font-semibold text-white">{{ point.name }}</h5>
                      <p class="text-xs text-gray-400 leading-relaxed">{{ point.description }}</p>
                    </div>

                    <!-- Radio choice -->
                    <div class="flex gap-2">
                      <button 
                        @click="point.status = 'Pass'"
                        :class="[
                          'px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border flex items-center gap-1',
                          point.status === 'Pass' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                            : 'bg-transparent text-gray-500 border-white/10 hover:text-gray-300'
                        ]"
                      >
                        <CheckCircle2 class="w-3.5 h-3.5" />
                        <span>Pass</span>
                      </button>

                      <button 
                        @click="point.status = 'Fail'"
                        :class="[
                          'px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border flex items-center gap-1',
                          point.status === 'Fail' 
                            ? 'bg-red-500/20 text-red-400 border-red-500/30' 
                            : 'bg-transparent text-gray-500 border-white/10 hover:text-gray-300'
                        ]"
                      >
                        <XCircle class="w-3.5 h-3.5" />
                        <span>Fail</span>
                      </button>
                    </div>
                  </div>

                  <!-- Defect Category Selector if Failed -->
                  <div v-if="point.status === 'Fail'" class="mt-4 pt-4 border-t border-red-500/10 space-y-3 animate-fade-in">
                    <div>
                      <label class="block text-[10px] text-gray-400 uppercase mb-1">Select Defect Category</label>
                      <select 
                        v-model="point.defectCategory"
                        class="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:border-red-400 focus:outline-none"
                      >
                        <option value="DEF-001: Structural Wobble" class="bg-neutral-900">DEF-001: Structural Wobble</option>
                        <option value="DEF-002: Paint Blemish / Scratch" class="bg-neutral-900">DEF-002: Paint Blemish / Scratch</option>
                        <option value="DEF-003: Dimensional Deviation" class="bg-neutral-900">DEF-003: Dimensional Deviation</option>
                        <option value="DEF-004: Missing Accessories" class="bg-neutral-900">DEF-004: Missing Accessories</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Warning Box & Save Log Button -->
              <div class="space-y-4">
                <div 
                  class="p-4 rounded-xl border flex items-center gap-4 text-left justify-between"
                  :class="isAnyFailed ? 'bg-red-500/10 border-red-500/20 text-red-400 animate-pulse-slow' : 'bg-green-500/10 border-green-500/20 text-green-400'"
                >
                  <div class="flex items-center gap-3">
                    <XCircle v-if="isAnyFailed" class="w-6 h-6 flex-shrink-0" />
                    <CheckCircle2 v-else class="w-6 h-6 flex-shrink-0" />
                    <div>
                      <strong class="text-sm font-bold uppercase tracking-wider block">
                        STATUS: {{ isAnyFailed ? 'BLOCKED / SEND TO REWORK' : 'APPROVED / READY FOR PACKAGING' }}
                      </strong>
                      <span class="text-xs text-gray-400 font-mono">
                        {{ isAnyFailed ? `Blocked due to ${failedCount} compliance failures.` : 'All specifications pass QA requirements.' }}
                      </span>
                    </div>
                  </div>
                  <div class="text-right font-mono text-[10px] text-gray-500 hidden md:block">
                    Collation: JSON Schema
                  </div>
                </div>

                <button 
                  @click="commitAuditLog"
                  class="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <ClipboardCheck class="w-4 h-4" />
                  <span>Commit Quality Gate Log Entry</span>
                </button>
              </div>

            </div>

            <!-- SIMULATED INSPECTION EVENT LOGS -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider font-mono flex items-center gap-2">
                <Database class="w-4 h-4 text-amber-500" /> Simulated `verified_product` Audit Logs
              </h3>
              
              <div class="overflow-x-auto rounded-xl bg-[#0e0e0e] border border-white/5">
                <table class="w-full text-left border-collapse text-[11px] font-mono">
                  <thead>
                    <tr class="bg-white/5 text-gray-400 border-b border-white/5">
                      <th class="p-3">Audit id</th>
                      <th class="p-3">Product Barcode</th>
                      <th class="p-3">Compliance Value</th>
                      <th class="p-3">Failures</th>
                      <th class="p-3">QA Status</th>
                      <th class="p-3">Audited Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr 
                      v-for="log in auditLogs" 
                      :key="log.id" 
                      class="border-b border-white/5 text-gray-300 hover:bg-white/5 transition-colors animate-fade-in"
                    >
                      <td class="p-3 text-amber-500 font-bold">#AUDIT-{{ log.id }}</td>
                      <td class="p-3 text-white font-bold">{{ log.barcode }}</td>
                      <td class="p-3 text-gray-400 max-w-[200px] truncate" :title="log.value">
                        {{ log.value }}
                      </td>
                      <td class="p-3 text-center" :class="log.failures > 0 ? 'text-red-400 font-bold' : 'text-gray-500'">
                        {{ log.failures }}
                      </td>
                      <td class="p-3">
                        <span 
                          class="px-2 py-0.5 rounded-full text-[9px] font-bold border"
                          :class="log.status === 'Approved' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'"
                        >
                          {{ log.status }}
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

        <!-- RIGHT SIDEBAR (1 Column: Insights & Specs) -->
        <div class="space-y-8">
          
          <!-- Key Achievements -->
          <div class="p-6 rounded-2xl glass border border-white/10" data-aos="fade-left">
            <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles class="w-5 h-5 text-amber-400" /> Key Features
            </h3>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">Dynamic JSON Schema</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Utilizes native JSON columns in MariaDB/MySQL to log dynamic compliance subchecklists without static schemas.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">Rework Gate Locking</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Enforces physical blockages on shop terminals, preventing failed barcodes from entering packaging.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">Comprehensive Defect Logs</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Maintains defect lookup structures logging photos and category codes for post-manufacture rework audits.</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Project Specs -->
          <div class="p-6 rounded-2xl glass border border-white/10" data-aos="fade-left" data-aos-delay="100">
            <h3 class="text-lg font-bold text-white mb-4">Project Telemetry</h3>
            
            <div class="space-y-3 text-xs border-b border-white/5 pb-4 mb-4">
              <div class="flex justify-between">
                <span class="text-gray-400">Backend API</span>
                <span class="text-white font-mono">Laravel 9 / PHP 8.1</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Frontend Client</span>
                <span class="text-white font-mono">Vue 3 / Axios / Tailwind</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Database Layer</span>
                <span class="text-white font-mono">MySQL 8 / InnoDB</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Logs Format</span>
                <span class="text-white font-mono">JSON Column Values</span>
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
import { ref, computed } from 'vue'
import { 
  ArrowLeft, 
  ShieldCheck, 
  ClipboardCheck, 
  XCircle, 
  CheckCircle2, 
  Activity, 
  Database,
  AlertTriangle,
  Sparkles,
  Check,
  Github,
  RefreshCw
} from 'lucide-vue-next'

// Mock Barcode Tag
const productBarcode = ref('CG-SOFA-9012')

// Mock Checkpoints state
const checkpoints = ref([
  { id: 1, name: 'Dimensions & Fit Tolerances', description: 'Check if outer height, width, and depth parameters are within +/- 2mm.', priority: 'High', status: 'Pass', defectCategory: 'DEF-001: Structural Wobble' },
  { id: 2, name: 'Surface Paint & Polish Finish', description: 'Ensure wood varnish or fabric upholstery shows zero blemishes, scratches, or uneven coat.', priority: 'High', status: 'Pass', defectCategory: 'DEF-002: Paint Blemish / Scratch' },
  { id: 3, name: 'Structural Stability & Wobble', description: 'Confirm joints, support legs, and screws are securely attached with zero wobble under pressure.', priority: 'High', status: 'Pass', defectCategory: 'DEF-001: Structural Wobble' },
  { id: 4, name: 'Hardware Accessories & Trims', description: 'Verify drawer glides, hinges, metal caps, and decorative pins are fully installed.', priority: 'Medium', status: 'Pass', defectCategory: 'DEF-004: Missing Accessories' }
])

// Computed Properties for Simulator
const failedCount = computed(() => {
  return checkpoints.value.filter(p => p.status === 'Fail').length
})

const isAnyFailed = computed(() => {
  return failedCount.value > 0
})

// Simulated Verified Logs database
const auditLogs = ref([
  { id: 801, barcode: 'CG-CHAIR-4401', value: '{"dimensions":"Pass","paint":"Pass","stability":"Pass","hardware":"Pass"}', failures: 0, status: 'Approved', time: '11:14:02' },
  { id: 802, barcode: 'CG-TABLE-1102', value: '{"dimensions":"Pass","paint":"Fail: Scratch","stability":"Pass","hardware":"Pass"}', failures: 1, status: 'Rework', time: '10:45:15' },
  { id: 803, barcode: 'CG-SOFA-8890', value: '{"dimensions":"Pass","paint":"Pass","stability":"Pass","hardware":"Pass"}', failures: 0, status: 'Approved', time: '09:05:33' }
])

const commitAuditLog = () => {
  const status = isAnyFailed.value ? 'Rework' : 'Approved'
  
  // Build dynamic JSON simulation value
  const resultsObj = {}
  checkpoints.value.forEach(p => {
    const key = p.name.split(' ')[0].toLowerCase()
    resultsObj[key] = p.status === 'Fail' ? `Fail: ${p.defectCategory.split(': ')[1]}` : 'Pass'
  })
  
  auditLogs.value.unshift({
    id: auditLogs.value.length + 801,
    barcode: productBarcode.value,
    value: JSON.stringify(resultsObj),
    failures: failedCount.value,
    status: status,
    time: new Date().toTimeString().split(' ')[0]
  })
  
  // Generate a new mock barcode for next scan
  const newNum = Math.floor(1000 + Math.random() * 9000)
  productBarcode.value = `CG-PROD-${newNum}`
  
  // Reset checklist choices
  checkpoints.value.forEach(p => {
    p.status = 'Pass'
  })
}

const resetInspector = () => {
  productBarcode.value = 'CG-SOFA-9012'
  checkpoints.value.forEach(p => {
    p.status = 'Pass'
  })
  auditLogs.value = [
    { id: 801, barcode: 'CG-CHAIR-4401', value: '{"dimensions":"Pass","paint":"Pass","stability":"Pass","hardware":"Pass"}', failures: 0, status: 'Approved', time: '11:14:02' },
    { id: 802, barcode: 'CG-TABLE-1102', value: '{"dimensions":"Pass","paint":"Fail: Scratch","stability":"Pass","hardware":"Pass"}', failures: 1, status: 'Rework', time: '10:45:15' },
    { id: 803, barcode: 'CG-SOFA-8890', value: '{"dimensions":"Pass","paint":"Pass","stability":"Pass","hardware":"Pass"}', failures: 0, status: 'Approved', time: '09:05:33' }
  ]
}
</script>

<style scoped>
/* Gradient meshes and visual patterns */
.gradient-mesh {
  background:
    radial-gradient(at 10% 30%, rgba(245, 158, 11, 0.07) 0px, transparent 55%),
    radial-gradient(at 80% 90%, rgba(251, 191, 36, 0.04) 0px, transparent 50%),
    radial-gradient(at 40% 10%, rgba(217, 119, 6, 0.05) 0px, transparent 55%);
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .8; }
}
</style>
