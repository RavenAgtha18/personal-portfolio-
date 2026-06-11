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
          <Scissors class="w-4 h-4 text-amber-400" />
          <span class="text-xs text-amber-300 font-semibold tracking-wider uppercase font-mono">Enterprise Case Study</span>
        </div>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
          Finish-Info – <span class="gradient-text">Material Optimization Engine:</span> <br class="hidden lg:inline"/>
          Automated Fabric &amp; Cutting List Management
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl glass mt-8">
          <div>
            <span class="text-xs text-gray-400 block mb-1">Role &amp; positioning</span>
            <span class="text-sm font-semibold text-amber-300">Technical BA / Full-stack Developer</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Domain Focus</span>
            <span class="text-sm font-semibold text-white">MES / Material Optimization</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Core Tech Stack</span>
            <span class="text-sm font-semibold text-white">Laravel REST API + Vue 3 SPA</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Key Impact</span>
            <span class="text-sm font-semibold text-green-400">Zero Raw Material Waste &amp; Precision Logs</span>
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
                <strong>Finish-Info</strong> is an enterprise-grade material control and pre-assembly management system built to digitize the textile and wood cutting workflows for luxury furniture manufacturing. By centralizing fabric roll allocations, cutting lists, and part dimensions, the system eliminates traditional errors related to outdated paper blueprints.
              </p>
              <p>
                The platform operates as a secure gateway for production workers, reading files from local directories and filtering access rights based on the terminal's IP address. This network-level control prevents sensitive proprietary design specifications and cutting layout dimensions from leaking outside the factory floor.
              </p>
              <p>
                By moving material calculations and nesting specifications into a reactive digital interface, Finish-Info ensures maximum fabric roll yield rates, optimizes raw wood cutting sequences, and eliminates costly material waste.
              </p>
            </div>

            <!-- Highlight Stat -->
            <div class="mt-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <span class="text-xs text-amber-400 block font-mono uppercase tracking-wider">Operational Success</span>
                <h3 class="text-xl font-bold text-white mt-1">Material Scrap Minimization</h3>
              </div>
              <div class="text-right">
                <span class="text-3xl md:text-4xl font-extrabold text-amber-400">100%</span>
                <span class="text-xs text-gray-400 block">Precision on cutting allocation</span>
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
                  <Scissors class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">High-Value Material Waste &amp; Scrap</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Upholstering high-end furniture involves using expensive textiles and leather. Without automated yield calculations and precise dimension blueprints, cutting operators often cut excessive lengths from rolls, leaving massive amounts of un-reusable scrap. Finish-Info digitizes the nesting rules to maximize the surface area utilization per roll.
                  </p>
                </div>
              </div>

              <!-- Problem 2 -->
              <div class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <AlertTriangle class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Blueprint Desynchronization &amp; Dimension Leakage</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Operators relying on printed cutting sheets frequently cut components using outdated engineering specs, leading to mismatched joints during final assembly. Additionally, printing blueprints risks design piracy. Finish-Info serves PDF assets dynamically to tablets with access restrictions locked to local department IP ranges.
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
              The application uses a relational schema containing user access logs, network address controls, and raw fabric specifications to enforce strict access rules on the assembly line.
            </p>

            <!-- Table 1: access_controls -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>1. Table: access_controls</span>
                <span class="text-amber-400">IP Filtering &amp; Security</span>
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
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id</td><td class="px-4 py-2 text-gray-400">BIGINT(20) UNSIGNED</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique identifier for network control.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">ip_address</td><td class="px-4 py-2 text-gray-400">VARCHAR(45)</td><td class="px-4 py-2 text-amber-400">INDEX</td><td class="px-4 py-2 text-gray-400">Target terminal IP allowed to read blueprints.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">department</td><td class="px-4 py-2 text-gray-400">VARCHAR(100)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Production, QC, or warehouse area logs.</td></tr>
                    <tr><td class="px-4 py-2 text-white">status</td><td class="px-4 py-2 text-gray-400">ENUM('active', 'inactive')</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">IP permission state.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 2: new_fabric -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>2. Table: new_fabric</span>
                <span class="text-amber-400">Fabric Catalog</span>
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
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">new_fabric_id</td><td class="px-4 py-2 text-gray-400">BIGINT(20)</td><td class="px-4 py-2 text-gray-500">PRI</td><td class="px-4 py-2 text-gray-400">Unique fabric ID.</td></tr>
                    <tr><td class="px-4 py-2 text-white">fabric_name</td><td class="px-4 py-2 text-gray-400">VARCHAR(255)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Commercial name of fabric (e.g. Velvet Emerald).</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 3: new_fabric_barcode -->
            <div class="mb-6 rounded-xl glass border border-white/10 overflow-hidden">
              <div class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between">
                <span>3. Table: new_fabric_barcode</span>
                <span class="text-amber-400">Roll Telemetry</span>
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
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-amber-300">id</td><td class="px-4 py-2 text-gray-400">BIGINT(20)</td><td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td><td class="px-4 py-2 text-gray-400">Unique identifier.</td></tr>
                    <tr class="border-b border-white/5"><td class="px-4 py-2 text-white">new_fabric_id</td><td class="px-4 py-2 text-gray-400">BIGINT(20)</td><td class="px-4 py-2 text-red-400">MUL (FK new_fabric.id)</td><td class="px-4 py-2 text-gray-400">Links roll to fabric catalog.</td></tr>
                    <tr><td class="px-4 py-2 text-white">barcode</td><td class="px-4 py-2 text-gray-400">VARCHAR(255)</td><td class="px-4 py-2 text-gray-500">--</td><td class="px-4 py-2 text-gray-400">Barcode attached to the specific roll.</td></tr>
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
                Interactive Fabric &amp; Cutting List Simulator
              </h2>
              <p class="text-gray-300">
                Select a luxury furniture item to load its automated cutting dimensions blueprint. Adjust the length of fabric cut from the roll to run a real-time yield rate optimization calculation.
              </p>
            </div>

            <!-- Simulator Card -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              
              <!-- Item Selector Header -->
              <div class="flex flex-wrap justify-between items-center gap-4 mb-6 border-b border-white/5 pb-4">
                <div class="flex items-center gap-3">
                  <Boxes class="w-5 h-5 text-amber-400" />
                  <div class="text-left">
                    <span class="text-[10px] text-gray-400 uppercase block">Product Selector</span>
                    <select 
                      v-model="selectedItemName" 
                      class="bg-transparent text-white font-bold text-sm focus:outline-none"
                    >
                      <option v-for="(item, key) in furnitureItems" :key="key" :value="key" class="bg-neutral-900 text-white">
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="flex items-center gap-6">
                  <div class="text-right">
                    <span class="text-[10px] text-gray-400 block uppercase">Fabric Standard Width</span>
                    <span class="text-xs font-mono font-bold text-white">140 cm (1.4m)</span>
                  </div>
                </div>
              </div>

              <!-- Dimensions List -->
              <div class="mb-8">
                <h4 class="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Ruler class="w-4 h-4 text-amber-500" /> Wood Frame Cutting Specifications
                </h4>
                
                <div class="overflow-x-auto rounded-xl bg-[#0c0c0c] border border-white/5">
                  <table class="w-full text-left font-mono text-xs">
                    <thead>
                      <tr class="bg-white/5 text-gray-400 border-b border-white/5">
                        <th class="p-3">Component</th>
                        <th class="p-3 text-right">Length (cm)</th>
                        <th class="p-3 text-right">Width (cm)</th>
                        <th class="p-3 text-right">Thickness (cm)</th>
                        <th class="p-3 text-right">Quantity</th>
                        <th class="p-3">Material</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr 
                        v-for="cut in activeItem.woodCuts" 
                        :key="cut.part"
                        class="border-b border-white/5 text-gray-300"
                      >
                        <td class="p-3 text-white font-semibold">{{ cut.part }}</td>
                        <td class="p-3 text-right">{{ cut.l }}</td>
                        <td class="p-3 text-right">{{ cut.w }}</td>
                        <td class="p-3 text-right">{{ cut.t }}</td>
                        <td class="p-3 text-right font-bold text-amber-400">x{{ cut.qty }}</td>
                        <td class="p-3 text-gray-400">{{ cut.material }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Fabric Yield Calculation -->
              <div v-if="activeItem.fabricName !== 'None'" class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0e0e0e] border border-white/5 p-5 rounded-xl">
                
                <div class="space-y-4">
                  <h4 class="text-xs font-bold text-white uppercase tracking-wider">Fabric Nesting Optimizer</h4>
                  
                  <div class="space-y-1">
                    <span class="text-[10px] text-gray-400 block uppercase">Fabric Required for Pattern</span>
                    <span class="text-sm font-semibold text-white">
                      {{ activeItem.fabricName }} — <span class="text-amber-400 font-mono">{{ activeItem.requiredMeters }} meters</span>
                    </span>
                  </div>

                  <!-- Range Slider to adjust cut length -->
                  <div class="space-y-2">
                    <div class="flex justify-between text-xs font-mono">
                      <span class="text-gray-400">Allocated Cut Length:</span>
                      <strong class="text-white">{{ allocatedLength }} meters</strong>
                    </div>
                    <input 
                      type="range" 
                      v-model.number="allocatedLength" 
                      :min="activeItem.requiredMeters - 1" 
                      :max="activeItem.requiredMeters + 4" 
                      step="0.1" 
                      class="w-full accent-amber-500 bg-white/10 rounded-lg appearance-none h-2"
                    />
                  </div>

                  <div class="flex gap-2">
                    <button 
                      @click="optimizeLayout"
                      class="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-lg text-xs transition-all flex items-center gap-1"
                    >
                      <CheckCircle2 class="w-3.5 h-3.5" />
                      <span>Nesting Auto-Layout</span>
                    </button>
                    <button 
                      @click="resetYieldLength" 
                      class="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-gray-300 font-mono"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <!-- Yield Meter Graphic -->
                <div class="flex flex-col justify-center items-center p-4 border border-white/5 rounded-xl bg-black/40 text-center space-y-3">
                  <span class="text-[10px] text-gray-400 uppercase tracking-widest block">Material Yield Rate</span>
                  
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
                * Selected item (CG Modern Dining Table) requires wood-only cuts and is upholstery-free. Fabric yield calculations omitted.
              </div>

            </div>
          </section>
        </div>

        <!-- RIGHT SIDEBAR (1 Column: Insights & Telemetry) -->
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
                  <h4 class="text-sm font-semibold text-white">Directory-File Integration</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Scans local system storage data folders directly, avoiding database duplication for large engineering documents.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">Nesting Yield Analytics</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Calculates optimal cutting lists from fabric rolls and wood pieces to reduce raw scrap overhead.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">IP-Fenced Gateways</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Restricts display access to sensitive cutting dimension records to registered factory floor terminals.</p>
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
                <span class="text-white font-mono">Laravel 11 / PHP 8.2</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Frontend Client</span>
                <span class="text-white font-mono">Vue 3 / Blade Views</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Database Layer</span>
                <span class="text-white font-mono">MySQL 8 / InnoDB</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Authorization</span>
                <span class="text-white font-mono">IP Address Filter table</span>
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
  Scissors, 
  Ruler, 
  Boxes,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Check,
  Github
} from 'lucide-vue-next'

// Mock Data for Luxury Furniture Items
const furnitureItems = {
  sofa: {
    name: 'Christopher Guy Signature Sofa',
    fabricName: 'Velvet Emerald',
    requiredMeters: 8.5,
    woodCuts: [
      { part: 'Main Backrest Frame', l: 180, w: 45, t: 4, qty: 1, material: 'Premium Mahogany' },
      { part: 'Bottom Seat Base Beams', l: 200, w: 15, t: 5, qty: 2, material: 'Premium Mahogany' },
      { part: 'Curved Armrest Blocks', l: 80, w: 30, t: 6, qty: 2, material: 'Premium Mahogany' },
      { part: 'Support Leg Corner Blocks', l: 15, w: 15, t: 8, qty: 4, material: 'Mahogany Block' }
    ]
  },
  loungeChair: {
    name: 'CG Luxury Lounge Chair',
    fabricName: 'CG Classic Linen',
    requiredMeters: 4.2,
    woodCuts: [
      { part: 'Curved Backrest Staves', l: 90, w: 60, t: 3, qty: 1, material: 'Solid Teakwood' },
      { part: 'Saddle Seat Panel', l: 65, w: 60, t: 4, qty: 1, material: 'Solid Teakwood' },
      { part: 'Tapered Support Legs', l: 45, w: 8, t: 8, qty: 4, material: 'Solid Teakwood' }
    ]
  },
  diningTable: {
    name: 'CG Modern Dining Table',
    fabricName: 'None',
    requiredMeters: 0,
    woodCuts: [
      { part: 'Slab Top Panel', l: 220, w: 100, t: 4, qty: 1, material: 'Prime Grade Teak' },
      { part: 'Under-top Supporting Rails', l: 190, w: 10, t: 5, qty: 2, material: 'Prime Grade Teak' },
      { part: 'Heavy Dining Table Legs', l: 75, w: 12, t: 12, qty: 4, material: 'Solid Teak Pillar' }
    ]
  }
}

const selectedItemName = ref('sofa')
const activeItem = computed(() => furnitureItems[selectedItemName.value])

// Interactive Yield State
const allocatedLength = ref(8.5)

// Watch item changes to adjust initial allocated length
watch(selectedItemName, (newVal) => {
  allocatedLength.value = furnitureItems[newVal].requiredMeters
})

const yieldRate = computed(() => {
  if (activeItem.value.fabricName === 'None') return 0
  const req = activeItem.value.requiredMeters
  const alloc = allocatedLength.value
  
  if (alloc <= 0) return 0
  
  // Calculate relative yield efficiency
  if (alloc < req) {
    // Insufficient fabric allocation
    const ratio = (alloc / req) * 100
    return Math.round(ratio * 0.7) // Heavily penalize insufficient layouts
  } else {
    // Normal to wasteful layouts
    const diff = alloc - req
    const efficiency = 100 - (diff / req) * 100
    return Math.max(Math.round(efficiency), 0)
  }
})

const yieldStatusText = computed(() => {
  const y = yieldRate.value
  if (allocatedLength.value < activeItem.value.requiredMeters) return 'INSUFFICIENT MATERIAL'
  if (y >= 85) return 'OPTIMAL RETENTION'
  if (y >= 70) return 'SUB-OPTIMAL LAYOUT'
  return 'EXCESS MATERIAL WASTE'
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
    return `⚠️ Insufficient material length! You need at least ${diff} meters more to cover this furniture pattern.`
  }
  
  const y = yieldRate.value
  if (y >= 85) {
    return '✅ Nesting pattern fits perfectly. Cutting scraps are kept within factory standard allowance.'
  }
  if (y >= 70) {
    return '⚠️ Fabric layout is somewhat inefficient. Consider adjusting the nesting rows to save material.'
  }
  return '❌ High fabric wastage! The current cut length results in massive unusable scrap pieces.'
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
