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
          <Cpu class="w-4 h-4 text-amber-400" />
          <span class="text-xs text-amber-300 font-semibold tracking-wider uppercase">Technical Business Analyst Case Study</span>
        </div>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
          Protrack System – <span class="gradient-text">Real-Time Production Tracking</span> <br class="hidden lg:inline"/>
          &amp; Workflow Visibility Engine
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl glass mt-8">
          <div>
            <span class="text-xs text-gray-400 block mb-1">Architecture Strategy</span>
            <span class="text-sm font-semibold text-amber-300">Bridge SE / Database Analyst</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Client Profile</span>
            <span class="text-sm font-semibold text-white">Export Manufacturing Plants</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Database Model</span>
            <span class="text-sm font-semibold text-white">Relational SQL Tracking Schema</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Operation Efficiency</span>
            <span class="text-sm font-semibold text-green-400">100% Real-Time WIP Visibility</span>
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
                <strong>Protrack System</strong> is an industrial workflow orchestration engine developed to resolve operational blindspots in high-volume, multi-stage manufacturing floors. By monitoring physical batch lifecycles through custom barcode scans at designated work center stations, it provides management with real-time Work-in-Progress (WIP) visibility.
              </p>
              <p>
                The system maps physical travelers to digital database entities called <em>Route Cards</em>, recording every department handoff (from Machinery, Assembling, Carving, Finishing, to Upholstery and Packing). It serves as a central reporting dashboard that bridges production line activity and warehouse logistics.
              </p>
              <p>
                Through transaction logging and station routing validations, Protrack enables factory supervisors to immediately detect operational bottlenecks, evaluate operator output, and estimate ship-date target completion times accurately.
              </p>
            </div>
          </section>

          <!-- SECTION 2: OPERATIONAL PROBLEMS SOLVED -->
          <section id="problems-solved" class="scroll-mt-24" data-aos="fade-up">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3">
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              Operational Problems Solved
            </h2>
            <p class="text-gray-300 mb-6">
              Before Protrack was implemented, factory management relied on manual spreadsheets and end-of-week reports. This resulted in several critical failure modes:
            </p>
            
            <div class="space-y-4">
              <!-- Problem 1 -->
              <div class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <EyeOff class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">The "Black Box" Floor Blindspot</h4>
                  <p class="text-sm text-gray-400">
                    Once raw materials entered the machinery station, their status was unknown until finished goods arrived at packing days later. Protrack eliminates this by forcing operators to scan barcodes at every intermediate station.
                  </p>
                </div>
              </div>

              <!-- Problem 2 -->
              <div class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Database class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Manual Spreadsheet Lag &amp; Errors</h4>
                  <p class="text-sm text-gray-400">
                    Production counts and WIP reporting used to lag by 24–48 hours due to manual data entry. Protrack replaced this with real-time MySQL database transactions (`trans_track`) fired directly from scanning tablets.
                  </p>
                </div>
              </div>

              <!-- Problem 3 -->
              <div class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Compass class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Untracked Reject Cycles &amp; Lost Cost Attribution</h4>
                  <p class="text-sm text-gray-400">
                    Items rejected during QC inspection were frequently set aside for rework without logging. Protrack's database schema maps reject statuses (`reject_id`, `loc_before_reject`) to calculate rework costs and identify repeating failure points.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 3: DIRECT DATABASE MAPPING & PIPELINE ARCHITECTURE -->
          <section id="database-schema" class="scroll-mt-24" data-aos="fade-up">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3">
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              Database Schema &amp; Pipeline Architecture
            </h2>
            
            <p class="text-gray-300 mb-6">
              The structural integrity of Protrack relies on a normalized MySQL database schema designed for speed, fast indexing, and detailed history tracking. Here is the relational schema parsed from the live database inspection:
            </p>

            <!-- Table 1: route_cards -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>1. Table: route_cards</span>
                <span class="text-amber-400">Core Batch Entity</span>
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
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id_route_card</td><td class="px-4 py-2 text-gray-400">BIGINT(20)</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique identifier for the traveler card.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">barcode</td><td class="px-4 py-2 text-gray-400">VARCHAR(25)</td><td class="px-4 py-2 text-gray-500">MUL (Indexed)</td><td class="px-4 py-2 text-gray-400">Scannable unique code (e.g. 20-0617-B-0012).</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">product_code</td><td class="px-4 py-2 text-gray-400">VARCHAR(20)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Reference item code being processed.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">qty</td><td class="px-4 py-2 text-gray-400">FLOAT</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Volume quantity in the batch traveler.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">process_loc</td><td class="px-4 py-2 text-gray-400">VARCHAR(50)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Physical location active pointer.</td></tr>
                    <tr><td class="px-4 py-2 text-white">prod_stat</td><td class="px-4 py-2 text-gray-400">VARCHAR(15)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Current status code of the batch card.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 2: trans_track -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>2. Table: trans_track</span>
                <span class="text-amber-400">Transaction Event Log</span>
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
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id_trans_track</td><td class="px-4 py-2 text-gray-400">BIGINT(20)</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique transaction ID.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">id_route_card</td><td class="px-4 py-2 text-gray-400">BIGINT(20)</td><td class="px-4 py-2 text-gray-500">MUL (FK)</td><td class="px-4 py-2 text-gray-400">References parent route_cards.id_route_card.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">track_date</td><td class="px-4 py-2 text-gray-400">DATETIME</td><td class="px-4 py-2 text-gray-500">MUL (Indexed)</td><td class="px-4 py-2 text-gray-400">Precise timestamp of the scan transaction.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">location_id</td><td class="px-4 py-2 text-gray-400">INT(11)</td><td class="px-4 py-2 text-gray-500">MUL (FK)</td><td class="px-4 py-2 text-gray-400">Physical station location where scanned.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">prev_location</td><td class="px-4 py-2 text-gray-400">INT(11)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Workstation code prior to this transaction.</td></tr>
                    <tr><td class="px-4 py-2 text-white">user_id</td><td class="px-4 py-2 text-gray-400">INT(11) UNSIGNED</td><td class="px-4 py-2 text-gray-500">MUL (FK)</td><td class="px-4 py-2 text-gray-400">The authorized system user executing the scan.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 3: locations -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>3. Table: locations</span>
                <span class="text-amber-400">Workstation Reference</span>
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
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id_location</td><td class="px-4 py-2 text-gray-400">INT(11)</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique location ID.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">location_short_name</td><td class="px-4 py-2 text-gray-400">VARCHAR(5)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">3-letter code (e.g. MCH, FIN, UPH).</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">location_name</td><td class="px-4 py-2 text-gray-400">VARCHAR(150)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Descriptive location name (e.g. MACHINING).</td></tr>
                    <tr><td class="px-4 py-2 text-white">is_active</td><td class="px-4 py-2 text-gray-400">TINYINT(1)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Boolean active/inactive status flag.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- CSS Production Pipeline Flow -->
            <div class="mt-8">
              <h3 class="text-lg font-semibold mb-4 text-amber-400 flex items-center gap-2">
                <Network class="w-4 h-4" /> Production Pipeline Flow
              </h3>
              
              <div class="grid grid-cols-2 md:grid-cols-7 gap-4">
                <div v-for="(loc, idx) in pipelineStations" :key="loc.code" class="p-3 rounded-xl border relative text-center flex flex-col justify-between" :class="idx === 0 ? 'bg-amber-500/10 border-amber-500/30' : 'glass border-white/10'">
                  <span class="text-[9px] font-mono text-amber-400 block font-bold mb-1">STATION 0{{ idx + 1 }}</span>
                  <div class="my-1 text-base font-black text-white font-mono">{{ loc.code }}</div>
                  <div class="text-[9px] text-gray-400 leading-tight">{{ loc.name }}</div>
                  
                  <!-- Connector Arrow (Desktop) -->
                  <div v-if="idx < 6" class="hidden md:block absolute top-1/2 -right-2.5 -translate-y-1/2 z-10">
                    <ChevronRight class="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 4: INTERACTIVE PRODUCTION SIMULATOR -->
          <section id="simulator" class="scroll-mt-24 space-y-8" data-aos="fade-up">
            <div>
              <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-white border-b border-white/10 pb-3">
                <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
                Interactive Production Simulator
              </h2>
              <p class="text-gray-300">
                Simulate Protrack's core batch traveler mechanism. Click the advance buttons to trigger a mock batch's progress. Notice how the metrics and transaction log table react in real-time.
              </p>
            </div>

            <!-- SIMULATOR CORE WIDGET -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <div class="flex justify-between items-center mb-6">
                <div class="flex items-center gap-2">
                  <PlayCircle class="w-5 h-5 text-amber-400" />
                  <span class="text-sm font-bold text-white uppercase tracking-wider font-mono">Live Batch Controller</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
                  <span class="text-xs text-green-400 font-mono">Sim Active</span>
                </div>
              </div>

              <!-- Metrics Widgets -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl">
                  <span class="text-[10px] text-gray-400 block uppercase">Batch Code</span>
                  <span class="text-sm font-bold text-white font-mono">{{ activeBatch.barcode }}</span>
                </div>
                <div class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl">
                  <span class="text-[10px] text-gray-400 block uppercase">Current WIP Station</span>
                  <span class="text-sm font-bold text-amber-400 font-mono">{{ activeBatch.location }}</span>
                </div>
                <div class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl">
                  <span class="text-[10px] text-gray-400 block uppercase">Process State</span>
                  <span class="text-sm font-bold text-white font-mono">{{ activeBatch.state }}</span>
                </div>
                <div class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl">
                  <span class="text-[10px] text-gray-400 block uppercase">Log Records</span>
                  <span class="text-sm font-bold text-green-400 font-mono">{{ mockTransactions.length }} Inserts</span>
                </div>
              </div>

              <!-- Interactive Stepper -->
              <div class="p-6 rounded-xl bg-black/40 border border-white/5 mb-8 overflow-x-auto">
                <div class="flex justify-between items-center min-w-[500px] relative px-4">
                  <!-- Stepper Background Line -->
                  <div class="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-white/5"></div>
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
                        idx < activeStepIndex ? 'bg-amber-500 text-black border-amber-500' : '',
                        idx === activeStepIndex ? 'bg-black text-amber-400 border-amber-400 scale-110 ring-2 ring-amber-500/50' : '',
                        idx > activeStepIndex ? 'bg-zinc-900 text-gray-500 border-white/10' : ''
                      ]"
                    >
                      <Check v-if="idx < activeStepIndex" class="w-4 h-4" />
                      <span v-else>{{ node.code }}</span>
                    </div>
                    <span 
                      class="text-[10px] mt-2 font-semibold transition-colors"
                      :class="idx === activeStepIndex ? 'text-amber-400 font-bold' : 'text-gray-500'"
                    >
                      {{ node.name }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Control Actions -->
              <div class="flex flex-wrap gap-4 items-center justify-between border-t border-white/5 pt-6">
                <div class="flex gap-2">
                  <button 
                    @click="resetSimulator" 
                    class="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white border border-white/10 transition-colors"
                  >
                    Reset Batch
                  </button>
                  <button 
                    @click="simulateReject" 
                    :disabled="activeStepIndex === 6 || activeBatch.state === 'REJECTED'"
                    class="px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-xs text-red-400 border border-red-500/20 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    Simulate Reject Event
                  </button>
                </div>
                
                <button 
                  @click="advanceBatch" 
                  :disabled="activeStepIndex === 6"
                  class="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold transition-all disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5"
                >
                  <span>Scan &amp; Advance Batch</span>
                  <ArrowRight class="w-4 h-4" />
                </button>
              </div>
            </div>

            <!-- SIMULATED TRANSACTION LOG TABLE (trans_track simulation) -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider font-mono flex items-center gap-2">
                <Database class="w-4 h-4 text-amber-500" /> Simulated `trans_track` SQL INSERT Logs
              </h3>
              
              <div class="overflow-x-auto rounded-xl bg-[#0e0e0e] border border-white/5">
                <table class="w-full text-left border-collapse text-[11px] font-mono">
                  <thead>
                    <tr class="bg-white/5 text-gray-400 border-b border-white/5">
                      <th class="p-3">id_trans_track</th>
                      <th class="p-3">barcode</th>
                      <th class="p-3">location_id</th>
                      <th class="p-3">prev_loc</th>
                      <th class="p-3">status</th>
                      <th class="p-3">operator_nik</th>
                      <th class="p-3">timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr 
                      v-for="tx in mockTransactions" 
                      :key="tx.id" 
                      class="border-b border-white/5 text-gray-300 hover:bg-white/5 transition-colors animate-fade-in"
                    >
                      <td class="p-3 text-amber-500 font-bold">TX-00{{ tx.id }}</td>
                      <td class="p-3 text-white">{{ tx.barcode }}</td>
                      <td class="p-3 font-semibold">{{ tx.location }}</td>
                      <td class="p-3 text-gray-500">{{ tx.prevLoc || 'NULL' }}</td>
                      <td class="p-3">
                        <span 
                          class="px-2 py-0.5 rounded-full text-[9px] font-bold"
                          :class="[
                            tx.status === 'OK' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : '',
                            tx.status === 'REJECTED' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : ''
                          ]"
                        >
                          {{ tx.status }}
                        </span>
                      </td>
                      <td class="p-3 text-gray-400">{{ tx.nik }}</td>
                      <td class="p-3 text-gray-500">{{ tx.time }}</td>
                    </tr>
                    <tr v-if="mockTransactions.length === 0">
                      <td colspan="7" class="p-8 text-center text-gray-500 italic">No transactions captured. Click "Scan &amp; Advance Batch" above.</td>
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
          <div class="p-6 rounded-2xl glass border border-white/10" data-aos="fade-left">
            <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles class="w-5 h-5 text-amber-400" /> BA Takeaways
            </h3>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">Full WIP Auditability</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Captures operator details (NIK) and accurate time telemetry at every station handoff, reducing process friction.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">Station Loop Validation</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Enforces sequence validation at the database layer (e.g. preventing a batch from skipping from Assembling to Packing directly).</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">Defect Loop Isolation</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Automates routing adjustments for rejected items, logging locations to isolate problematic machinery and patterns.</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Project Metadata -->
          <div class="p-6 rounded-2xl glass border border-white/10" data-aos="fade-left" data-aos-delay="100">
            <h3 class="text-lg font-bold text-white mb-4">Project Telemetry</h3>
            
            <div class="space-y-3 text-xs border-b border-white/5 pb-4 mb-4">
              <div class="flex justify-between">
                <span class="text-gray-400">Database Engine</span>
                <span class="text-white font-mono">MySQL / MariaDB</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Primary Key Mapping</span>
                <span class="text-white font-mono">id_route_card (BIGINT)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Data Logs Schema</span>
                <span class="text-white font-mono">trans_track (BIGINT)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Unique Index Keys</span>
                <span class="text-white font-mono">barcode, location_id</span>
              </div>
            </div>

            <!-- GitHub link -->
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
  Cpu, 
  EyeOff, 
  Database, 
  Compass, 
  Network, 
  ChevronRight,
  PlayCircle,
  Check,
  ArrowRight,
  Sparkles,
  Github
} from 'lucide-vue-next'

// Pipeline Stations Configuration
const pipelineStations = [
  { code: 'MCH', name: 'Machinery' },
  { code: 'ASSY', name: 'Assembling' },
  { code: 'CRV', name: 'Carving & Sanding' },
  { code: 'FIN', name: 'Finishing' },
  { code: 'UPH', name: 'Upholstery' },
  { code: 'PACK', name: 'Packing' },
  { code: 'SHP', name: 'Shipped' }
]

// Simulator Reactive State
const activeStepIndex = ref(0)
const activeBatch = ref({
  barcode: '20-0617-B-0012',
  location: 'MCH',
  state: 'PROCESSING'
})

const mockTransactions = ref([
  {
    id: 1,
    barcode: '20-0617-B-0012',
    location: 'MCH',
    prevLoc: null,
    status: 'OK',
    nik: 'OP-4011',
    time: new Date().toLocaleTimeString()
  }
])

const activeStepPercentage = computed(() => {
  return (activeStepIndex.value / 6) * 100
})

const advanceBatch = () => {
  if (activeStepIndex.value === 6) return
  
  const prevIdx = activeStepIndex.value
  activeStepIndex.value++
  
  const activeStation = pipelineStations[activeStepIndex.value]
  activeBatch.value.location = activeStation.code
  activeBatch.value.state = activeStepIndex.value === 6 ? 'COMPLETED' : 'PROCESSING'
  
  // Append transaction log
  mockTransactions.value.unshift({
    id: mockTransactions.value.length + 1,
    barcode: activeBatch.value.barcode,
    location: activeStation.code,
    prevLoc: pipelineStations[prevIdx].code,
    status: 'OK',
    nik: `OP-40${10 + activeStepIndex.value}`,
    time: new Date().toLocaleTimeString()
  })
}

const simulateReject = () => {
  if (activeStepIndex.value === 6 || activeBatch.value.state === 'REJECTED') return
  
  activeBatch.value.state = 'REJECTED'
  
  // Append reject transaction log
  mockTransactions.value.unshift({
    id: mockTransactions.value.length + 1,
    barcode: activeBatch.value.barcode,
    location: pipelineStations[activeStepIndex.value].code,
    prevLoc: null,
    status: 'REJECTED',
    nik: `QC-7092`,
    time: new Date().toLocaleTimeString()
  })
}

const jumpToStep = (idx) => {
  activeStepIndex.value = idx
  const activeStation = pipelineStations[idx]
  activeBatch.value.location = activeStation.code
  activeBatch.value.state = idx === 6 ? 'COMPLETED' : 'PROCESSING'
  
  mockTransactions.value.unshift({
    id: mockTransactions.value.length + 1,
    barcode: activeBatch.value.barcode,
    location: activeStation.code,
    prevLoc: 'MANUAL_JUMP',
    status: 'OK',
    nik: 'SPV-9011',
    time: new Date().toLocaleTimeString()
  })
}

const resetSimulator = () => {
  activeStepIndex.value = 0
  activeBatch.value = {
    barcode: `20-0617-B-00${Math.floor(Math.random() * 90) + 10}`,
    location: 'MCH',
    state: 'PROCESSING'
  }
  mockTransactions.value = [
    {
      id: 1,
      barcode: activeBatch.value.barcode,
      location: 'MCH',
      prevLoc: null,
      status: 'OK',
      nik: 'OP-4011',
      time: new Date().toLocaleTimeString()
    }
  ]
}
</script>

<style scoped>
/* Fade in animation keyframe */
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

.gradient-mesh {
  background:
    radial-gradient(at 40% 20%, rgba(251, 191, 36, 0.08) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(245, 158, 11, 0.05) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(251, 191, 36, 0.05) 0px, transparent 50%);
}
</style>
