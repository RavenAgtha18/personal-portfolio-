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
          <Scan class="w-4 h-4 text-amber-400" />
          <span class="text-xs text-amber-300 font-semibold tracking-wider uppercase font-mono">Enterprise Case Study</span>
        </div>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
          ProScan – <span class="gradient-text">Inventory Intelligence:</span> <br class="hidden lg:inline"/>
          Real-Time Stock Opname &amp; Barcode Verification Engine
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl glass mt-8">
          <div>
            <span class="text-xs text-gray-400 block mb-1">Role &amp; Positioning</span>
            <span class="text-sm font-semibold text-amber-300">Technical BA / Full-stack Developer</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Domain Focus</span>
            <span class="text-sm font-semibold text-white">Inventory Control / WMS</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Core Tech Stack</span>
            <span class="text-sm font-semibold text-white">Laravel REST API + Vue 3 SPA</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Key Impact</span>
            <span class="text-sm font-semibold text-green-400">100% Stock Variance Elimination</span>
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
                <strong>ProScan</strong> is a high-performance inventory verification and stock opname auditing application built to digitize warehouse logging. The system enables real-time physical-to-database barcode scanning on the factory floor, matching current inventory logs directly against active stock periods.
              </p>
              <p>
                The application replaces paper-based tally sheets with a lightning-fast verification engine. By executing transactional lookup indexing on barcodes and physical location IDs, operators can perform high-speed scans that automatically reconcile discrepancies between physical counts and system-of-record ERP ledgers.
              </p>
              <p>
                By linking physical stock takes to automated adjustment triggers, ProScan cuts down manual stock recount times from days to hours, ensuring complete traceability and eliminating phantom stock variance in heavy manufacturing pipelines.
              </p>
            </div>

            <!-- Highlight Stat -->
            <div class="mt-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <span class="text-xs text-amber-400 block font-mono uppercase tracking-wider">Audit Efficiency</span>
                <h3 class="text-xl font-bold text-white mt-1">Manual Variance Reconciled</h3>
              </div>
              <div class="text-right">
                <span class="text-3xl md:text-4xl font-extrabold text-amber-400">Zero Error</span>
                <span class="text-xs text-gray-400 block">100% digital stock opname logs</span>
              </div>
            </div>
          </section>

          <!-- SECTION 2: THE CORE OPERATIONAL & TECHNICAL PROBLEMS SOLVED -->
          <section id="problems-solved" class="scroll-mt-24" data-aos="fade-up">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3">
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              Operational &amp; Technical Problems Solved
            </h2>
            
            <div class="space-y-6">
              <!-- Problem 1 -->
              <div class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <AlertTriangle class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Inventory Discrepancy &amp; Shrinkage (Phantom Stock)</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Relying on manual spreadsheets or weekly paper audits creates massive data lags. Physical items get relocated, consumed, or damaged without timely records, leading to "phantom stock" where the system shows item availability that does not exist in reality. ProScan enforces real-time mobile scans against current active periods, logging exact timestamps.
                  </p>
                </div>
              </div>

              <!-- Problem 2 -->
              <div class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Scan class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Mismatched Barcode Routing &amp; Inventory Mappings</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Without scanning validation, warehouse operators easily log incorrect item quantities, wrong categories, or deposit goods in wrong bins. ProScan resolves this by performing real-time barcode-to-location verification (`match_location`), ensuring that items scanned in the physical aisles immediately trigger matching coordinates in the central database.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 3: DATABASE MAPPING & SCHEMA -->
          <section id="database-schema" class="scroll-mt-24" data-aos="fade-up">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3">
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              Database Schema &amp; Transactional Logs
            </h2>
            <p class="text-gray-300 mb-6">
              The schema relies on transactional indexing on barcode, SKU, and location fields. This design guarantees quick query execution during peak inventory audit shifts when hundreds of operators are scanning items simultaneously.
            </p>

            <!-- Table 1: stock_opname_period -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>1. Table: stock_opname_period</span>
                <span class="text-amber-400">Audit Sessions</span>
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
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id_period</td><td class="px-4 py-2 text-gray-400">BIGINT(20) UNSIGNED</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique period identifier.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">active</td><td class="px-4 py-2 text-gray-400">TINYINT(4)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Active flag (e.g. 1 = Active, 0 = Inactive).</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">code_stock_opname</td><td class="px-4 py-2 text-gray-400">VARCHAR(50)</td><td class="px-4 py-2 text-amber-400">INDEX</td><td class="px-4 py-2 text-gray-400">Custom identifier for the audit session.</td></tr>
                    <tr><td class="px-4 py-2 text-white">start_date / end_date</td><td class="px-4 py-2 text-gray-400">TIMESTAMP</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Beginning and end boundary timestamps.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 2: stock_opname_data_sfg -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>2. Table: stock_opname_data_sfg</span>
                <span class="text-amber-400">Physical Stock Scans</span>
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
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id_stock_opname_sfg</td><td class="px-4 py-2 text-gray-400">BIGINT(20) UNSIGNED</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique scan record ID.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">code_stock_opname</td><td class="px-4 py-2 text-gray-400">VARCHAR(25)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Foreign code mapping to active period.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">barcode</td><td class="px-4 py-2 text-gray-400">VARCHAR(40)</td><td class="px-4 py-2 text-amber-400">INDEX</td><td class="px-4 py-2 text-gray-400">Scanned barcode of physical item.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">data_location_id</td><td class="px-4 py-2 text-gray-400">VARCHAR(25)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Registered ERP location short name.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">scan_location_id</td><td class="px-4 py-2 text-gray-400">VARCHAR(25)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Location short name where scan took place.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">match_location</td><td class="px-4 py-2 text-gray-400">TINYINT(4)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">1 if location matches ERP record; 0 if not.</td></tr>
                    <tr><td class="px-4 py-2 text-white">amount</td><td class="px-4 py-2 text-gray-400">BIGINT(20)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Physical scanned quantity count.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 3: master_item_sfg -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>3. Table: master_item_sfg</span>
                <span class="text-amber-400">ERP Item Master Registry</span>
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
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id_item_sfg</td><td class="px-4 py-2 text-gray-400">BIGINT(20) UNSIGNED</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique item entity database ID.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">barcode</td><td class="px-4 py-2 text-gray-400">VARCHAR(40)</td><td class="px-4 py-2 text-amber-400">UNI</td><td class="px-4 py-2 text-gray-400">Unique barcode mapped to physical SKU tag.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">item_desc</td><td class="px-4 py-2 text-gray-400">VARCHAR(25)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Product code / tag.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">location_short_name</td><td class="px-4 py-2 text-gray-400">VARCHAR(20)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Registered warehouse aisle/bin identifier.</td></tr>
                    <tr><td class="px-4 py-2 text-white">scanned</td><td class="px-4 py-2 text-gray-400">TINYINT(4)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Reconciliation state flag (1 = Scanned, 0 = Pending).</td></tr>
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
                Interactive Stock Opname Simulator
              </h2>
              <p class="text-gray-300">
                Simulate warehouse physical count audits. Select an item registry profile, input the physical count quantity observed on the warehouse shelf, and select the aisle location coordinates. The engine instantly computes delta stock variances and creates adjustment log entries.
              </p>
            </div>

            <!-- Simulator Widget -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              
              <!-- Telemetry Header -->
              <div class="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div class="flex items-center gap-4">
                  <PackageCheck class="w-5 h-5 text-amber-400" />
                  <div class="text-left">
                    <span class="text-[10px] text-gray-400 block uppercase">Selected Barcode / Item</span>
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
                        {{ item.barcode }} - {{ item.desc }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="text-right">
                  <button @click="resetSimulator" class="text-amber-400 hover:text-amber-300 text-xs font-mono flex items-center gap-1">
                    <RefreshCw class="w-3.5 h-3.5" />
                    <span>Reset Simulator</span>
                  </button>
                </div>
              </div>

              <!-- Input Form Grid -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <!-- System Registered Aisle -->
                <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span class="text-[10px] text-gray-400 block uppercase">Registered Aisle</span>
                  <div class="text-sm font-semibold text-white font-mono flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    {{ selectedItem.registeredAisle }}
                  </div>
                </div>

                <!-- System ERP Quantity -->
                <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span class="text-[10px] text-gray-400 block uppercase">ERP System Stock</span>
                  <div class="text-sm font-semibold text-white font-mono">
                    {{ selectedItem.systemStock }} units
                  </div>
                </div>

                <!-- Location Scanner Matcher -->
                <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <label class="text-[10px] text-gray-400 block uppercase">Scanned Aisle</label>
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
                    <h5 class="text-sm font-bold text-white">Physical Shelf Count Entry</h5>
                    <p class="text-xs text-gray-400">Input quantity observed during audit scanning.</p>
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
                    <span class="text-gray-400 block mb-1">System Count</span>
                    <span class="text-white font-bold">{{ selectedItem.systemStock }}</span>
                  </div>
                  <div>
                    <span class="text-gray-400 block mb-1">Physical Count</span>
                    <span class="text-amber-400 font-bold">{{ physicalCount }}</span>
                  </div>
                  <div>
                    <span class="text-gray-400 block mb-1">Variance Delta</span>
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
                        {{ varianceDelta === 0 && locationMatches ? 'RECONCILED / ZERO VARIANCE' : 'STOCK ADJUSTMENT LOG TRIGGERED' }}
                      </strong>
                      <span class="text-xs text-gray-400 font-mono">
                        {{ getStatusDetailsMessage }}
                      </span>
                    </div>
                  </div>
                  <div class="text-right font-mono text-[10px] text-gray-500 hidden md:block">
                    Match Location: {{ locationMatches ? 'YES' : 'NO' }}
                  </div>
                </div>

                <button 
                  @click="commitStockLog"
                  class="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Scan class="w-4 h-4" />
                  <span>Commit Inventory Log &amp; Sync ERP</span>
                </button>
              </div>

            </div>

            <!-- SIMULATED TRANSACTIONAL ADJUSTMENT LOGS -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider font-mono flex items-center gap-2">
                <History class="w-4 h-4 text-amber-500" /> Audit Transaction Logs (`stock_opname_data_sfg`)
              </h3>
              
              <div class="overflow-x-auto rounded-xl bg-[#0e0e0e] border border-white/5">
                <table class="w-full text-left border-collapse text-[11px] font-mono">
                  <thead>
                    <tr class="bg-white/5 text-gray-400 border-b border-white/5">
                      <th class="p-3">Opname id</th>
                      <th class="p-3">Item Barcode</th>
                      <th class="p-3">Registered Aisle</th>
                      <th class="p-3">Scanned Aisle</th>
                      <th class="p-3">ERP Quantity</th>
                      <th class="p-3">Physical Scanned</th>
                      <th class="p-3">Variance</th>
                      <th class="p-3">Status</th>
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
                          {{ log.variance === 0 && log.locationMatch ? 'Match' : 'Adjusted' }}
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
              <Sparkles class="w-5 h-5 text-amber-400" /> Key Architecture
            </h3>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">High-Speed Indexing</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Optimized B-Tree indexes on `barcode` columns to ensure instant scans during large-scale audit intervals.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">Location Match Verification</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Automates structural location checks (`match_location`) to prevent items from being stored in wrong shelves.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">Dynamic Period Locking</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Isolates adjustments to active auditing periods (`stock_opname_period`) preventing historical record manipulation.</p>
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
                <span class="text-white font-mono">Vue 3 / Tailwind CSS</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Database Layer</span>
                <span class="text-white font-mono">MySQL 8 / InnoDB</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Index Types</span>
                <span class="text-white font-mono">B-Tree Indexes</span>
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

// Mock Data registries
const itemRegistry = [
  { barcode: 'CG-SFG-2001', desc: 'Luxury Wooden Legs (Mahogany)', systemStock: 45, registeredAisle: 'AISLE-A1' },
  { barcode: 'CG-SFG-2002', desc: 'Sofa Cushion Padding (Foam)', systemStock: 120, registeredAisle: 'AISLE-A2' },
  { barcode: 'CG-SFG-2003', desc: 'Gilded Frame Accents (Gold Leaf)', systemStock: 15, registeredAisle: 'AISLE-B1' },
  { barcode: 'CG-SFG-2004', desc: 'Velvet Fabric Rolls (Navy Blue)', systemStock: 80, registeredAisle: 'AISLE-B2' }
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
    return 'All barcode scanning details reconcile perfectly with ERP records.'
  }
  const varianceMsg = varianceDelta.value !== 0 
    ? `Variance of ${varianceDelta.value > 0 ? '+' : ''}${varianceDelta.value} units detected.` 
    : ''
  const locationMsg = !locationMatches.value 
    ? `Aisle mismatch (Scanned: ${scannedAisle.value} vs Registered: ${selectedItem.value.registeredAisle}).` 
    : ''
  return `Discrepancy logged: ${varianceMsg} ${locationMsg} Creating DB adjustments.`.trim()
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
