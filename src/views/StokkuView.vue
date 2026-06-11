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
          <Boxes class="w-4 h-4 text-amber-400" />
          <span class="text-xs text-amber-300 font-semibold tracking-wider uppercase font-mono">Enterprise Case Study</span>
        </div>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
          Stokku – <span class="gradient-text">Inventory Intelligence:</span> <br class="hidden lg:inline"/>
          Material Lifecycle Control &amp; Automated Procurement Trigger Engine
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl glass mt-8">
          <div>
            <span class="text-xs text-gray-400 block mb-1">Role &amp; Positioning</span>
            <span class="text-sm font-semibold text-amber-300">Technical BA / Full-stack Developer</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Domain Focus</span>
            <span class="text-sm font-semibold text-white">Warehouse / Material Lifecycle</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Core Tech Stack</span>
            <span class="text-sm font-semibold text-white">Laravel REST API + Vue 3 SPA</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Key Impact</span>
            <span class="text-sm font-semibold text-green-400">100% Expiry Prevention &amp; Zero Bottlenecks</span>
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
                <strong>Stokku</strong> is an enterprise-grade material lifecycle and stock control system designed to govern factory floor raw materials. By logging primary storage shelves and nested secondary coordinates in a structured JSON database structure, the application guarantees that materials are traced precisely from the moment they enter the receiving dock until they are checked out to assembly lines.
              </p>
              <p>
                The backend automates material expiration tracking using individual batch date tables (`material_expired_dates`). It acts as an early warning gateway, prompting operators with visual warnings and notification emails when items approach expiry, mitigating industrial waste and safety non-compliance.
              </p>
              <p>
                Through its integrated Material Request module, floor personnel can log digital requisitions that check real-time stock levels, check user permissions, and instantly alert purchasing units when quantities fall below safety thresholds. This eliminates supply chain lags and manual logging errors entirely.
              </p>
            </div>

            <!-- Highlight Stat -->
            <div class="mt-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <span class="text-xs text-amber-400 block font-mono uppercase tracking-wider">Operational Success</span>
                <h3 class="text-xl font-bold text-white mt-1">Material Waste Eliminated</h3>
              </div>
              <div class="text-right">
                <span class="text-3xl md:text-4xl font-extrabold text-amber-400">100%</span>
                <span class="text-xs text-gray-400 block">Digital compliance log &amp; shelf-life tracking</span>
              </div>
            </div>
          </section>

          <!-- SECTION 2: THE TECHNICAL & OPERATIONAL CHALLENGES SOLVED -->
          <section id="problems-solved" class="scroll-mt-24" data-aos="fade-up">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3">
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              Technical &amp; Operational Challenges Solved
            </h2>
            
            <div class="space-y-6">
              <!-- Challenge 1 -->
              <div class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <CalendarDays class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">The Expiration &amp; Waste Hazard</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Tracking fluid chemical compounds, adhesives, or temperature-sensitive fabrics manually on paper led to expired materials sitting undetected on back shelves. By building a relational lookup database linking each incoming batch to a strict `expired_date`, Stokku notifies staff months in advance, enforcing a First-Expiry-First-Out (FEFO) material routing logic.
                  </p>
                </div>
              </div>

              <!-- Challenge 2 -->
              <div class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <BellRing class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Procurement Communication &amp; Stock Lags</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Production stoppages occur when raw materials run out unexpectedly due to delays in reporting low stock to the procurement office. Stokku resolves this with a database-backed low-stock alert engine. When stock levels drop below the warning threshold, an automated trigger queues digital Material Requests to alert purchasing agents immediately.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 3: DATABASE MAPPING & SCHEMA -->
          <section id="database-schema" class="scroll-mt-24" data-aos="fade-up">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3">
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              Database Schema &amp; Access Controls
            </h2>
            <p class="text-gray-300 mb-6">
              The database structure links raw materials, expiration batch trackers, and digital Material Requests. It stores primary rack locations while nesting secondary storage slots using JSON properties to prevent redundant rows.
            </p>

            <!-- Table 1: materials -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>1. Table: materials</span>
                <span class="text-amber-400">Material Stock Registry</span>
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
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id</td><td class="px-4 py-2 text-gray-400">BIGINT(20) UNSIGNED</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Primary key for material record.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">item_number</td><td class="px-4 py-2 text-gray-400">VARCHAR(255)</td><td class="px-4 py-2 text-amber-400">INDEX</td><td class="px-4 py-2 text-gray-400">Unique manufacturer code / SKU identifier.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">rak</td><td class="px-4 py-2 text-gray-400">VARCHAR(255)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Primary physical rack location string.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">additional_raks</td><td class="px-4 py-2 text-gray-400">JSON</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Secondary rack location coordinates array.</td></tr>
                    <tr><td class="px-4 py-2 text-white">expired_date</td><td class="px-4 py-2 text-gray-400">DATETIME</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Expiration threshold of the latest batch.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 2: material_expired_dates -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>2. Table: material_expired_dates</span>
                <span class="text-amber-400">Expiration Trackers</span>
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
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id</td><td class="px-4 py-2 text-gray-400">BIGINT(20) UNSIGNED</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique batch key.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">material_id</td><td class="px-4 py-2 text-gray-400">BIGINT(20) UNSIGNED</td><td class="px-4 py-2 text-red-400">MUL (FK materials.id)</td><td class="px-4 py-2 text-gray-400">Links to the core material registry.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">expired_date</td><td class="px-4 py-2 text-gray-400">DATETIME</td><td class="px-4 py-2 text-amber-400">INDEX</td><td class="px-4 py-2 text-gray-400">Expiration date for this specific batch.</td></tr>
                    <tr><td class="px-4 py-2 text-white">qty</td><td class="px-4 py-2 text-gray-400">INT(11)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Stock amount associated with this expiration.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 3: mr_items -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>3. Table: mr_items</span>
                <span class="text-amber-400">Material Requests Logs</span>
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
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id</td><td class="px-4 py-2 text-gray-400">BIGINT(20) UNSIGNED</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique request row ID.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">mr_code</td><td class="px-4 py-2 text-gray-400">VARCHAR(255)</td><td class="px-4 py-2 text-amber-400">INDEX</td><td class="px-4 py-2 text-gray-400">Request code grouping items in one session.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">item_code</td><td class="px-4 py-2 text-gray-400">VARCHAR(100)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">References the SKU (item_number) requested.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">qty</td><td class="px-4 py-2 text-gray-400">DECIMAL(10,2)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Observed quantity requested.</td></tr>
                    <tr><td class="px-4 py-2 text-white">id_status</td><td class="px-4 py-2 text-gray-400">INT(11)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Reconciliation state (e.g. 3 = Pending, 1 = Issued).</td></tr>
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
                Material Request &amp; Expiry Monitor Simulator
              </h2>
              <p class="text-gray-300">
                Simulate raw material shelf-life and stock levels. Click the "Material Request" button to issue stock to the production floor, or adjust stock levels to test how the system reactively triggers warning badges based on expiry boundaries and safety thresholds.
              </p>
            </div>

            <!-- Simulator Widget -->
            <div class="p-6 rounded-2xl glass border border-white/10 space-y-6">
              
              <!-- Header -->
              <div class="flex justify-between items-center border-b border-white/5 pb-4">
                <h4 class="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <Wrench class="w-4 h-4 text-amber-500" /> Active Stock &amp; Shelf-Life Telemetry
                </h4>
                <button @click="resetSimulator" class="text-amber-400 hover:text-amber-300 text-xs font-mono flex items-center gap-1">
                  <RefreshCw class="w-3.5 h-3.5" />
                  <span>Reset Stock</span>
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
                        <h5 class="text-sm font-semibold text-white mt-1">{{ mat.name }}</h5>
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
                        {{ mat.stockLevel === 'Critical' ? 'CRITICAL ALERT' : mat.stockLevel === 'Warning' ? 'EXPIRED WARNING' : 'HEALTHY' }}
                      </span>
                    </div>

                    <div class="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-white/5">
                      <div>
                        <span class="text-gray-400 block text-[10px]">Rack Location</span>
                        <span class="text-white">{{ mat.rack }}</span>
                      </div>
                      <div>
                        <span class="text-gray-400 block text-[10px]">Stock Quantity</span>
                        <span class="text-white">{{ mat.qty }} {{ mat.unit }}</span>
                      </div>
                      <div>
                        <span class="text-gray-400 block text-[10px]">Expiry Date</span>
                        <span :class="mat.isExpired ? 'text-red-400 font-bold' : 'text-gray-400'">
                          {{ mat.expiryDate }}
                        </span>
                      </div>
                      <div>
                        <span class="text-gray-400 block text-[10px]">Threshold Limit</span>
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
                      <span>Request 5 {{ mat.unit }}</span>
                    </button>
                    <button 
                      @click="addMaterialStock(mat)"
                      class="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all flex items-center justify-center"
                    >
                      + Stock
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
                      LOW STOCK/EXPIRY ACTION REQUIRED
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
                  <FileCheck class="w-4 h-4 text-amber-500" /> Active Material Requests (`mr_items` &amp; `mr_verification`)
                </h3>
                
                <div class="overflow-x-auto rounded-xl bg-[#0e0e0e] border border-white/5">
                  <table class="w-full text-left border-collapse text-[10px] font-mono">
                    <thead>
                      <tr class="bg-white/5 text-gray-400 border-b border-white/5">
                        <th class="p-2.5">MR Code</th>
                        <th class="p-2.5">Item Code</th>
                        <th class="p-2.5">Item Name</th>
                        <th class="p-2.5">Qty Req</th>
                        <th class="p-2.5">Shelf Location</th>
                        <th class="p-2.5">Status</th>
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
                        <td class="p-2.5 text-gray-400">{{ log.name }}</td>
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
                            {{ log.status }}
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
              <Sparkles class="w-5 h-5 text-amber-400" /> Key Features
            </h3>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">Batched Expiration Control</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Relational tracking of individual incoming batches (`material_expired_dates`) ensures expiration compliance.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">Nested Aisle JSON Mappings</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Leverages JSON fields (`additional_raks`) in MySQL to map auxiliary warehousing locations dynamically.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">Inter-Department Request Bridge</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Synchronizes material issuances on floor operations directly with procurement purchase queues.</p>
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
                <span class="text-white font-mono">Laravel 10 / PHP 8.2</span>
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
                <span class="text-gray-400">Notification Channels</span>
                <span class="text-white font-mono">SMTP Email triggers</span>
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
  Boxes,
  BellRing,
  CalendarDays,
  FileCheck,
  Wrench,
  Check,
  Github,
  RefreshCw,
  Sparkles
} from 'lucide-vue-next'

// Mock database representation
const materialsList = ref([
  { id: 1, sku: 'CG-MAT-102', name: 'Premium Veneer Glue (temperature-sensitive)', qty: 15, unit: 'kg', threshold: 20, rack: 'RAK-A1-03', expiryDate: '2026-09-12', isExpired: false, stockLevel: 'Warning' },
  { id: 2, sku: 'CG-MAT-105', name: 'Clear Polyurethane Finish Coating', qty: 6, unit: 'L', threshold: 10, rack: 'RAK-B2-01', expiryDate: '2026-05-10', isExpired: true, stockLevel: 'Critical' },
  { id: 3, sku: 'CG-MAT-108', name: 'Cotton Back Padding (Premium Foam)', qty: 85, unit: 'm', threshold: 30, rack: 'RAK-C1-05', expiryDate: '2027-04-18', isExpired: false, stockLevel: 'Healthy' },
  { id: 4, sku: 'CG-MAT-111', name: 'Golden Leaf Foil Trims', qty: 42, unit: 'sheets', threshold: 25, rack: 'RAK-D2-11', expiryDate: '2028-11-05', isExpired: false, stockLevel: 'Healthy' }
])

// Simulated logs table
const requestLogs = ref([
  { id: 301, mrCode: 'MR-2026-0001', sku: 'CG-MAT-108', name: 'Cotton Back Padding', qty: 15, unit: 'm', rack: 'RAK-C1-05', status: 'Approved' },
  { id: 302, mrCode: 'MR-2026-0002', sku: 'CG-MAT-102', name: 'Premium Veneer Glue', qty: 5, unit: 'kg', rack: 'RAK-A1-03', status: 'Pending' }
])

const alertMessage = computed(() => {
  const expiredNames = materialsList.value.filter(m => m.isExpired).map(m => m.name)
  const lowStockNames = materialsList.value.filter(m => !m.isExpired && m.qty < m.threshold).map(m => m.name)
  
  let msg = ''
  if (expiredNames.length > 0) {
    msg += `Expired materials detected: ${expiredNames.join(', ')}. `
  }
  if (lowStockNames.length > 0) {
    msg += `Low stock thresholds breached for: ${lowStockNames.join(', ')}. Auto procurement queued.`
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
    { id: 1, sku: 'CG-MAT-102', name: 'Premium Veneer Glue (temperature-sensitive)', qty: 15, unit: 'kg', threshold: 20, rack: 'RAK-A1-03', expiryDate: '2026-09-12', isExpired: false, stockLevel: 'Warning' },
    { id: 2, sku: 'CG-MAT-105', name: 'Clear Polyurethane Finish Coating', qty: 6, unit: 'L', threshold: 10, rack: 'RAK-B2-01', expiryDate: '2026-05-10', isExpired: true, stockLevel: 'Critical' },
    { id: 3, sku: 'CG-MAT-108', name: 'Cotton Back Padding (Premium Foam)', qty: 85, unit: 'm', threshold: 30, rack: 'RAK-C1-05', expiryDate: '2027-04-18', isExpired: false, stockLevel: 'Healthy' },
    { id: 4, sku: 'CG-MAT-111', name: 'Golden Leaf Foil Trims', qty: 42, unit: 'sheets', threshold: 25, rack: 'RAK-D2-11', expiryDate: '2028-11-05', isExpired: false, stockLevel: 'Healthy' }
  ]
  requestLogs.value = [
    { id: 301, mrCode: 'MR-2026-0001', sku: 'CG-MAT-108', name: 'Cotton Back Padding', qty: 15, unit: 'm', rack: 'RAK-C1-05', status: 'Approved' },
    { id: 302, mrCode: 'MR-2026-0002', sku: 'CG-MAT-102', name: 'Premium Veneer Glue', qty: 5, unit: 'kg', rack: 'RAK-A1-03', status: 'Pending' }
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
