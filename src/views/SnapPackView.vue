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
          <Layers class="w-4 h-4 text-amber-400" />
          <span
            class="text-xs text-amber-300 font-semibold tracking-wider uppercase"
            >Enterprise Case Study</span
          >
        </div>
        <h1
          class="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8"
        >
          SnapPack –
          <span class="gradient-text">End-to-End Digital Transformation:</span>
          <br class="hidden lg:inline" />
          Securing Luxury Product Media &amp; Audit Trail via Laravue
          Architecture
        </h1>

        <div
          class="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl glass mt-8"
        >
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >Role &amp; Positioning</span
            >
            <span class="text-sm font-semibold text-amber-300"
              >Technical Business Analyst / Bridge SE</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Client Profile</span>
            <span class="text-sm font-semibold text-white"
              >Christopher Guy (Luxury Furniture)</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >Core Tech Stack</span
            >
            <span class="text-sm font-semibold text-white"
              >Laravue (Laravel + Vue 3 SPA)</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Key Impact</span>
            <span class="text-sm font-semibold text-green-400"
              >95%+ Audit Search Time Reduction</span
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
                <strong>SnapPack</strong> is an enterprise-grade digital logging
                and media tracking system built from the ground up to secure the
                shipping documentation pipeline for Christopher Guy, a global
                luxury furniture designer. By digitizing camera-to-server file
                logs at shipping stations, the system acts as a single point of
                truth that links packing operators, IT verifiers, and logistics
                managers.
              </p>
              <p>
                The primary objective is to replace error-prone physical memory
                card transfers with a robust, auditable digital workflow. Every
                photo or video asset transferred is cataloged with precise
                telemetry, operator logs, and a binding digital signature to
                create an immutable audit trail.
              </p>
              <p>
                The resulting digital transformation has eliminated lost visual
                proof of product quality, protecting the company against
                fraudulent damage claims and reducing the time required to
                search and locate shipping media files from
                <strong>days to mere seconds</strong>.
              </p>
            </div>

            <!-- Highlight Stat -->
            <div
              class="mt-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6 flex items-center justify-between"
            >
              <div>
                <span
                  class="text-xs text-amber-400 block font-mono uppercase tracking-wider"
                  >Metric Highlight</span
                >
                <h3 class="text-xl font-bold text-white mt-1">
                  Audit Search Efficiency
                </h3>
              </div>
              <div class="text-right">
                <span class="text-3xl md:text-4xl font-extrabold text-amber-400"
                  >99.8%</span
                >
                <span class="text-xs text-gray-400 block"
                  >Faster documentation lookup</span
                >
              </div>
            </div>
          </section>

          <!-- SECTION 2: THE BUSINESS PROBLEM -->
          <section
            id="business-problem"
            class="scroll-mt-24"
            data-aos="fade-up"
          >
            <h2
              class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3"
            >
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              The Business Problem
            </h2>
            <p class="text-gray-300 mb-6">
              Christopher Guy's high-value exports require strict visual quality
              documentation (photos and videos) at packing stations to verify
              items are free from damage before container load-in. However,
              legacy paper-and-card workflows introduced critical operational
              vulnerabilities:
            </p>

            <div class="space-y-4">
              <!-- Bottleneck 1 -->
              <div
                class="flex gap-4 p-4 rounded-xl bg-red-950/20 border border-red-500/20"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400"
                >
                  <AlertOctagon class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">
                    Missing SD Cards &amp; Lost Media
                  </h4>
                  <p class="text-sm text-gray-400">
                    Operators had to physically transport SD cards from cameras
                    to the IT room at the end of each shift. This resulted in
                    frequent media misplacement, card damage, and unrecoverable
                    packing records.
                  </p>
                </div>
              </div>

              <!-- Bottleneck 2 -->
              <div
                class="flex gap-4 p-4 rounded-xl bg-red-950/20 border border-red-500/20"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400"
                >
                  <FileX class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">
                    Zero Audit Trail for Claim Defense
                  </h4>
                  <p class="text-sm text-gray-400">
                    Without structured timestamps, verified names of transfer
                    operators, or digital signatures, claims by international
                    cargo handlers of "pre-shipping damage" could not be
                    disproven reliably.
                  </p>
                </div>
              </div>

              <!-- Bottleneck 3 -->
              <div
                class="flex gap-4 p-4 rounded-xl bg-red-950/20 border border-red-500/20"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400"
                >
                  <RefreshCw class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">
                    Production-Logistics Desynchronization
                  </h4>
                  <p class="text-sm text-gray-400">
                    The number of items boxed on the production floor often
                    desynchronized from the actual media counts copied to
                    servers, leading to delayed audits and shipment holds.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 3: SYSTEM ARCHITECTURE & TECHNICAL INNOVATION -->
          <section id="architecture" class="scroll-mt-24" data-aos="fade-up">
            <h2
              class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3"
            >
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              Architecture &amp; Technical Innovation
            </h2>

            <div class="space-y-6 text-gray-300">
              <p>
                To resolve these bottlenecks, we designed a decoupled
                <strong>Laravue Architecture</strong>: a lightweight
                <strong>Laravel API</strong> backend paired with a
                high-performance <strong>Vue.js SPA</strong> frontend deployed
                on terminal tablets right at the packing floor.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div class="p-4 rounded-xl glass border-t-2 border-amber-500">
                  <h4 class="font-semibold text-white mb-1">
                    Decoupled Security
                  </h4>
                  <p class="text-xs text-gray-400">
                    Protects the central database from directly facing the
                    factory network terminals via stateless API auth.
                  </p>
                </div>
                <div class="p-4 rounded-xl glass border-t-2 border-amber-500">
                  <h4 class="font-semibold text-white mb-1">
                    Role-Based Gateways
                  </h4>
                  <p class="text-xs text-gray-400">
                    Restricts media log editing, approval actions, and
                    statistical views based on verified user profiles.
                  </p>
                </div>
                <div class="p-4 rounded-xl glass border-t-2 border-amber-500">
                  <h4 class="font-semibold text-white mb-1">
                    Optimized Indexing
                  </h4>
                  <p class="text-xs text-gray-400">
                    Implements relational indexing on date, department, and
                    shipper fields to retrieve logs instantly.
                  </p>
                </div>
              </div>
            </div>

            <!-- Sequence / Data Flow Diagram -->
            <div class="mt-8">
              <h3
                class="text-lg font-semibold mb-4 text-amber-400 flex items-center gap-2"
              >
                <Network class="w-4 h-4" /> Data Flow Sequence Diagram
              </h3>

              <div class="p-6 rounded-2xl glass overflow-x-auto">
                <div
                  class="min-w-[500px] flex flex-col items-stretch gap-6 font-mono text-xs text-gray-400"
                >
                  <!-- Columns Headers -->
                  <div
                    class="grid grid-cols-4 text-center font-bold text-white border-b border-white/10 pb-2"
                  >
                    <div>1. Operator Tablet</div>
                    <div>2. Vue SPA Router</div>
                    <div>3. Laravel REST API</div>
                    <div>4. Database Server</div>
                  </div>

                  <!-- Step 1 -->
                  <div class="relative grid grid-cols-4 items-center">
                    <div
                      class="text-center bg-amber-500/10 text-amber-300 py-2 rounded border border-amber-500/20"
                    >
                      Input log + Sign
                    </div>
                    <div
                      class="relative flex items-center justify-center col-span-2"
                    >
                      <div
                        class="w-full h-0.5 border-t border-dashed border-amber-500/50"
                      ></div>
                      <ArrowRight
                        class="w-3 h-3 text-amber-400 absolute right-0"
                      />
                      <span class="absolute -top-4 text-[10px] text-amber-400"
                        >1. Submits Form Payload</span
                      >
                    </div>
                    <div></div>
                  </div>

                  <!-- Step 2 -->
                  <div class="relative grid grid-cols-4 items-center">
                    <div></div>
                    <div
                      class="text-center bg-zinc-800 text-white py-2 rounded"
                    >
                      Process signature
                    </div>
                    <div
                      class="relative flex items-center justify-center col-span-2"
                    >
                      <div
                        class="w-full h-0.5 border-t border-dashed border-amber-500/50"
                      ></div>
                      <ArrowRight
                        class="w-3 h-3 text-amber-400 absolute right-0"
                      />
                      <span class="absolute -top-4 text-[10px] text-amber-400"
                        >2. HTTP POST Request</span
                      >
                    </div>
                  </div>

                  <!-- Step 3 -->
                  <div class="relative grid grid-cols-4 items-center">
                    <div class="col-span-2"></div>
                    <div
                      class="text-center bg-zinc-800 text-white py-2 rounded"
                    >
                      Validate &amp; Authorize
                    </div>
                    <div class="relative flex items-center justify-center">
                      <div
                        class="w-full h-0.5 border-t border-dashed border-amber-500/50"
                      ></div>
                      <ArrowRight
                        class="w-3 h-3 text-amber-400 absolute right-0"
                      />
                      <span class="absolute -top-4 text-[10px] text-amber-400"
                        >3. SQL Insert</span
                      >
                    </div>
                  </div>

                  <!-- Step 4 -->
                  <div class="relative grid grid-cols-4 items-center">
                    <div class="col-span-3"></div>
                    <div
                      class="text-center bg-green-500/10 text-green-300 py-2 rounded border border-green-500/20"
                    >
                      Commit Log ID
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Database ERD Placeholder / Render -->
            <div class="mt-10">
              <h3
                class="text-lg font-semibold mb-4 text-amber-400 flex items-center gap-2"
              >
                <Database class="w-4 h-4" /> Relational Database Schema (ERD)
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- User Table -->
                <div
                  class="rounded-xl glass border border-white/10 overflow-hidden"
                >
                  <div
                    class="bg-white/5 px-4 py-2 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between"
                  >
                    <span>table: users</span>
                    <span class="text-amber-400">Auth &amp; RBAC</span>
                  </div>
                  <table class="w-full font-mono text-xs">
                    <tbody>
                      <tr class="border-b border-white/5">
                        <td class="px-4 py-2 font-bold text-amber-300">id</td>
                        <td class="px-4 py-2 text-gray-500">
                          BIGINT PK AUTO_INC
                        </td>
                      </tr>
                      <tr class="border-b border-white/5">
                        <td class="px-4 py-2 text-white">name</td>
                        <td class="px-4 py-2 text-gray-500">VARCHAR(255)</td>
                      </tr>
                      <tr class="border-b border-white/5">
                        <td class="px-4 py-2 text-white">email</td>
                        <td class="px-4 py-2 text-gray-500">
                          VARCHAR(255) UNIQUE
                        </td>
                      </tr>
                      <tr class="border-b border-white/5">
                        <td class="px-4 py-2 text-white">password</td>
                        <td class="px-4 py-2 text-gray-500">VARCHAR(255)</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-white">role</td>
                        <td class="px-4 py-2 text-gray-500">
                          ENUM('admin', 'user')
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Photo Transfers Table -->
                <div
                  class="rounded-xl glass border border-white/10 overflow-hidden"
                >
                  <div
                    class="bg-white/5 px-4 py-2 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between"
                  >
                    <span>table: photo_transfers</span>
                    <span class="text-amber-400">Transactional Log</span>
                  </div>
                  <table class="w-full font-mono text-xs">
                    <tbody>
                      <tr class="border-b border-white/5">
                        <td class="px-4 py-2 font-bold text-amber-300">id</td>
                        <td class="px-4 py-2 text-gray-500">
                          BIGINT PK AUTO_INC
                        </td>
                      </tr>
                      <tr class="border-b border-white/5">
                        <td class="px-4 py-2 text-white">tanggal</td>
                        <td class="px-4 py-2 text-amber-400">DATE [INDEXED]</td>
                      </tr>
                      <tr class="border-b border-white/5">
                        <td class="px-4 py-2 text-white">nama_penyetor</td>
                        <td class="px-4 py-2 text-amber-400">
                          VARCHAR(255) [INDEX]
                        </td>
                      </tr>
                      <tr class="border-b border-white/5">
                        <td class="px-4 py-2 text-white">departemen</td>
                        <td class="px-4 py-2 text-amber-400">
                          VARCHAR(100) [INDEX]
                        </td>
                      </tr>
                      <tr class="border-b border-white/5">
                        <td class="px-4 py-2 text-white">tanda_tangan</td>
                        <td class="px-4 py-2 text-gray-500">
                          TEXT (Base64 signature)
                        </td>
                      </tr>
                      <tr class="border-b border-white/5">
                        <td class="px-4 py-2 text-white">it_approval</td>
                        <td class="px-4 py-2 text-gray-500">VARCHAR(255)</td>
                      </tr>
                      <tr class="border-b border-white/5">
                        <td class="px-4 py-2 text-white">total_foto</td>
                        <td class="px-4 py-2 text-gray-500">INT UNSIGNED</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-white">total_video</td>
                        <td class="px-4 py-2 text-gray-500">INT UNSIGNED</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 4: UI FLOW & INTERACTIVE MOCKUPS -->
          <section
            id="ui-flow"
            class="scroll-mt-24 space-y-12"
            data-aos="fade-up"
          >
            <div>
              <h2
                class="text-2xl font-bold mb-4 flex items-center gap-2 text-white border-b border-white/10 pb-3"
              >
                <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
                UI Flow &amp; Interactive Mockups
              </h2>
              <p class="text-gray-300">
                Below are real, interactive mockups built directly with CSS and
                JS simulating the user interface modules of SnapPack. Click or
                draw on the components to see how the system operates in real
                time.
              </p>
            </div>

            <!-- INTERACTIVE LOGIN MOCKUP -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <div class="flex justify-between items-center mb-6">
                <h3
                  class="text-lg font-semibold text-white flex items-center gap-2"
                >
                  <Lock class="w-5 h-5 text-amber-500" /> Module 1: Login.vue
                  (Role Authentication)
                </h3>
                <span
                  class="px-2 py-1 text-[10px] rounded bg-green-500/20 text-green-400 font-mono"
                  >Role Gate Enabled</span
                >
              </div>

              <div
                class="max-w-md mx-auto p-6 rounded-xl bg-[#0e0e0e] border border-white/5"
              >
                <h4 class="text-center text-lg font-bold mb-4 text-white">
                  SnapPack Portal
                </h4>

                <div class="space-y-4">
                  <div>
                    <label class="block text-xs text-gray-400 mb-1"
                      >Authentication Role</label
                    >
                    <div class="grid grid-cols-2 gap-2">
                      <button
                        @click="mockUserRole = 'it_staff'"
                        :class="[
                          'px-3 py-1.5 rounded text-xs transition-colors border',
                          mockUserRole === 'it_staff'
                            ? 'bg-amber-500 text-black border-amber-500 font-semibold'
                            : 'bg-transparent text-gray-400 border-white/10 hover:text-white',
                        ]"
                      >
                        IT Staff / Approver
                      </button>
                      <button
                        @click="mockUserRole = 'admin'"
                        :class="[
                          'px-3 py-1.5 rounded text-xs transition-colors border',
                          mockUserRole === 'admin'
                            ? 'bg-amber-500 text-black border-amber-500 font-semibold'
                            : 'bg-transparent text-gray-400 border-white/10 hover:text-white',
                        ]"
                      >
                        Supervisor / Admin
                      </button>
                    </div>
                  </div>

                  <div>
                    <label class="block text-xs text-gray-400 mb-1"
                      >Email Address</label
                    >
                    <input
                      type="text"
                      readonly
                      :value="
                        mockUserRole === 'it_staff'
                          ? 'it.verify@christopherguy.com'
                          : 'admin.logistics@christopherguy.com'
                      "
                      class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-gray-300 font-mono focus:outline-none"
                    />
                  </div>

                  <div>
                    <label class="block text-xs text-gray-400 mb-1"
                      >Password</label
                    >
                    <input
                      type="password"
                      value="••••••••••••"
                      readonly
                      class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-gray-300 focus:outline-none"
                    />
                  </div>

                  <button
                    @click="simulateLogin"
                    class="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-2 rounded text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <span>Authenticate Account</span>
                    <ArrowRight class="w-3.5 h-3.5" />
                  </button>

                  <div
                    v-if="loginFeedback"
                    class="text-center text-xs text-green-400 mt-2 font-mono animate-fade-in"
                  >
                    {{ loginFeedback }}
                  </div>
                </div>
              </div>
            </div>

            <!-- INTERACTIVE DASHBOARD MONITORING MOCKUP -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <div class="flex justify-between items-center mb-6">
                <h3
                  class="text-lg font-semibold text-white flex items-center gap-2"
                >
                  <LayoutDashboard class="w-5 h-5 text-amber-500" /> Module 2:
                  Dashboard.vue (Analytics)
                </h3>
                <div class="flex gap-2">
                  <span
                    class="px-2 py-1 text-[10px] rounded bg-white/5 text-gray-400 font-mono"
                    >Real-Time Sync</span
                  >
                </div>
              </div>

              <!-- Interactive Dashboard Filter -->
              <div class="mb-6 flex flex-wrap gap-2 items-center">
                <span class="text-xs text-gray-400">Filter Mock Data:</span>
                <button
                  v-for="dept in [
                    'All',
                    'Produksi',
                    'Quality Control',
                    'Warehouse',
                  ]"
                  :key="dept"
                  @click="activeDeptFilter = dept"
                  :class="[
                    'px-3 py-1 rounded text-xs transition-colors',
                    activeDeptFilter === dept
                      ? 'bg-amber-500 text-black font-semibold'
                      : 'bg-white/5 text-gray-400 hover:text-white',
                  ]"
                >
                  {{ dept }}
                </button>
              </div>

              <!-- Dashboard Widgets Grid -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <!-- Card 1 -->
                <div
                  class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl relative overflow-hidden group"
                >
                  <div
                    class="absolute top-2 right-2 text-amber-500/10 group-hover:text-amber-500/20 transition-colors"
                  >
                    <Camera class="w-12 h-12" />
                  </div>
                  <span class="text-xs text-gray-400">Total Photos Logged</span>
                  <h4 class="text-2xl font-bold text-white mt-1">
                    {{ totalMockPhotos }}
                  </h4>
                  <span class="text-[10px] text-green-400 block mt-1"
                    >+12% increase from yesterday</span
                  >
                </div>

                <!-- Card 2 -->
                <div
                  class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl relative overflow-hidden group"
                >
                  <div
                    class="absolute top-2 right-2 text-amber-500/10 group-hover:text-amber-500/20 transition-colors"
                  >
                    <Video class="w-12 h-12" />
                  </div>
                  <span class="text-xs text-gray-400">Total Videos Logged</span>
                  <h4 class="text-2xl font-bold text-white mt-1">
                    {{ totalMockVideos }}
                  </h4>
                  <span class="text-[10px] text-gray-500 block mt-1"
                    >100% cloud-uploaded</span
                  >
                </div>

                <!-- Card 3 -->
                <div
                  class="bg-[#0e0e0e] border border-white/5 p-4 rounded-xl relative overflow-hidden group"
                >
                  <div
                    class="absolute top-2 right-2 text-amber-500/10 group-hover:text-amber-500/20 transition-colors"
                  >
                    <UserCheck class="w-12 h-12" />
                  </div>
                  <span class="text-xs text-gray-400">IT Approval Ratio</span>
                  <h4 class="text-2xl font-bold text-white mt-1">100%</h4>
                  <span class="text-[10px] text-green-400 block mt-1"
                    >Zero pending logs</span
                  >
                </div>
              </div>

              <!-- CSS Dynamic Charts -->
              <div class="bg-[#0e0e0e] border border-white/5 p-5 rounded-xl">
                <h4
                  class="text-xs text-gray-400 font-bold mb-4 uppercase tracking-wider"
                >
                  Volume Transfer Share per Department
                </h4>

                <div class="space-y-3">
                  <div
                    v-for="bar in departmentShareData"
                    :key="bar.name"
                    class="space-y-1"
                  >
                    <div class="flex justify-between text-xs">
                      <span class="text-white">{{ bar.name }}</span>
                      <span class="text-amber-400 font-semibold"
                        >{{ bar.percent }}% ({{ bar.photos }} Photos)</span
                      >
                    </div>
                    <div
                      class="w-full bg-white/5 h-2 rounded-full overflow-hidden"
                    >
                      <div
                        class="bg-gradient-to-r from-amber-400 to-amber-600 h-full transition-all duration-700"
                        :style="{ width: bar.percent + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- INTERACTIVE PHOTO TRANSFERS TABLE & SIGNATURE PAD -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <div class="flex justify-between items-center mb-6">
                <h3
                  class="text-lg font-semibold text-white flex items-center gap-2"
                >
                  <PenTool class="w-5 h-5 text-amber-500" /> Module 3:
                  PhotoTransfers.vue (Signature Pad)
                </h3>
                <span
                  class="px-2 py-1 text-[10px] rounded bg-amber-500/20 text-amber-400 font-mono"
                  >Canvas Enabled</span
                >
              </div>

              <!-- Transfers Table -->
              <div
                class="overflow-x-auto rounded-xl bg-[#0e0e0e] border border-white/5 mb-6"
              >
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="bg-white/5 text-gray-400 font-mono">
                      <th class="p-3">Date</th>
                      <th class="p-3">Shipper</th>
                      <th class="p-3">Dept</th>
                      <th class="p-3">Photos</th>
                      <th class="p-3">Videos</th>
                      <th class="p-3">IT Approver</th>
                      <th class="p-3">Status</th>
                      <th class="p-3 text-center">Signature</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="log in filteredMockLogs"
                      :key="log.id"
                      class="border-b border-white/5 text-gray-300 hover:bg-white/5 transition-colors"
                    >
                      <td class="p-3">{{ log.date }}</td>
                      <td class="p-3 font-semibold text-white">
                        {{ log.shipper }}
                      </td>
                      <td class="p-3">{{ log.dept }}</td>
                      <td class="p-3 text-amber-400 font-bold">
                        {{ log.photos }}
                      </td>
                      <td class="p-3">{{ log.videos }}</td>
                      <td class="p-3 text-gray-400">{{ log.approver }}</td>
                      <td class="p-3">
                        <span
                          class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-500/10 text-green-400 border border-green-500/20"
                        >
                          Approved
                        </span>
                      </td>
                      <td class="p-3 text-center">
                        <div
                          class="inline-block bg-white/5 px-2 py-1 rounded text-[10px] text-amber-300 font-mono border border-amber-500/15"
                        >
                          [Verified Base64]
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Live Form & Signature Pad Simulator -->
              <div class="bg-[#0e0e0e] border border-white/5 p-6 rounded-xl">
                <h4
                  class="text-sm font-bold text-white mb-4 flex items-center gap-1.5"
                >
                  <PlusCircle class="w-4 h-4 text-amber-400" /> Create Real-Time
                  Transfer Log
                </h4>

                <form
                  @submit.prevent="submitMockTransfer"
                  class="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-3">
                      <div>
                        <label class="block text-xs text-gray-400 mb-1"
                          >Shipper Name</label
                        >
                        <input
                          v-model="newLog.shipper"
                          type="text"
                          required
                          placeholder="e.g. Budi Hartono"
                          class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label class="block text-xs text-gray-400 mb-1"
                          >Department</label
                        >
                        <select
                          v-model="newLog.dept"
                          class="w-full bg-white/5 border border-white/10 rounded px-3 py-1.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                        >
                          <option class="bg-neutral-900" value="Produksi">
                            Produksi
                          </option>
                          <option
                            class="bg-neutral-900"
                            value="Quality Control"
                          >
                            Quality Control
                          </option>
                          <option class="bg-neutral-900" value="Warehouse">
                            Warehouse
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                      <div>
                        <label class="block text-xs text-gray-400 mb-1"
                          >Photo Count</label
                        >
                        <input
                          v-model.number="newLog.photos"
                          type="number"
                          min="1"
                          required
                          class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label class="block text-xs text-gray-400 mb-1"
                          >Video Count</label
                        >
                        <input
                          v-model.number="newLog.videos"
                          type="number"
                          min="0"
                          required
                          class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label class="block text-xs text-gray-400 mb-1"
                        >IT Approver Name</label
                      >
                      <input
                        v-model="newLog.approver"
                        type="text"
                        required
                        placeholder="e.g. Tommy Setiawan (IT)"
                        class="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <!-- Signature Pad -->
                  <div>
                    <label
                      class="block text-xs text-gray-400 mb-1 flex justify-between"
                    >
                      <span>Operator Signature Pad (Draw Below)</span>
                      <button
                        type="button"
                        @click="clearSignature"
                        class="text-amber-400 hover:text-amber-300 text-[10px] font-mono"
                      >
                        Clear Pad
                      </button>
                    </label>

                    <div
                      class="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden h-36"
                    >
                      <canvas
                        ref="signatureCanvas"
                        class="w-full h-full cursor-crosshair touch-none"
                        @mousedown="startDrawing"
                        @mousemove="draw"
                        @mouseup="stopDrawing"
                        @mouseleave="stopDrawing"
                        @touchstart="startDrawingTouch"
                        @touchmove="drawTouch"
                        @touchend="stopDrawing"
                      ></canvas>
                      <div
                        v-if="!isSigned"
                        class="absolute inset-0 flex items-center justify-center text-gray-500 text-xs font-mono pointer-events-none"
                      >
                        [ Sign using mouse or stylus ]
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-2 rounded text-xs transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 class="w-4 h-4" />
                      <span>Verify &amp; Save Log entry</span>
                    </button>
                  </div>
                </form>

                <div
                  v-if="submissionFeedback"
                  class="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-xs text-green-400 text-center font-mono animate-fade-in"
                >
                  {{ submissionFeedback }}
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- RIGHT SIDEBAR (1 Column: Metadata & Impact Stats) -->
        <div class="space-y-8">
          <!-- Key Achievements / BA Highlights -->
          <div
            class="p-6 rounded-2xl glass border border-white/10"
            data-aos="fade-left"
          >
            <h3
              class="text-lg font-bold text-white mb-6 flex items-center gap-2"
            >
              <Sparkles class="w-5 h-5 text-amber-400" /> Business Impact
            </h3>

            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">
                    Liability Shield
                  </h4>
                  <p class="text-xs text-gray-400 mt-0.5">
                    Creates binding visual documentation verifying shipping
                    quality, protecting against cargo handlers claims.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">
                    95% Administrative Reduction
                  </h4>
                  <p class="text-xs text-gray-400 mt-0.5">
                    Eliminates physical SD card handovers, spreadsheet logging,
                    and manual verification steps.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">
                    100% Compliance
                  </h4>
                  <p class="text-xs text-gray-400 mt-0.5">
                    Ensures every box sent matches visual records in the server
                    storage database.
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
                <span class="text-white font-mono">Laravel 11 / PHP 8.3</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Frontend client</span>
                <span class="text-white font-mono"
                  >Vue 3 / Vue Router / Tailwind</span
                >
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Database layer</span>
                <span class="text-white font-mono">MariaDB / MySQL</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Auth Paradigm</span>
                <span class="text-white font-mono">Laravel Sanctum Token</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Input Module</span>
                <span class="text-white font-mono"
                  >SignaturePad (HTML5 Canvas)</span
                >
              </div>
            </div>

            <!-- Download PDF or CTA -->
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
import { ref, computed, onMounted } from "vue";
import {
  ArrowLeft,
  Layers,
  AlertOctagon,
  FileX,
  RefreshCw,
  Network,
  Database,
  ArrowRight,
  Lock,
  LayoutDashboard,
  Camera,
  Video,
  UserCheck,
  PenTool,
  PlusCircle,
  CheckCircle2,
  Sparkles,
  Check,
  Github,
} from "lucide-vue-next";

// LocalStorage Persistence Helpers
const STORAGE_KEY_LOGS = "snappack_mock_logs";
const loadPersistedLogs = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY_LOGS);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};
const persistLogs = (logs) => {
  try {
    localStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(logs));
  } catch (e) {
    /* quota exceeded */
  }
};

// Mock Authentication State
const mockUserRole = ref("it_staff");
const loginFeedback = ref("");
const simulateLogin = () => {
  loginFeedback.value = "Authenticating...";
  setTimeout(() => {
    loginFeedback.value = `Access Granted as ${
      mockUserRole.value === "it_staff" ? "IT Approver" : "Supervisor Admin"
    }!`;
  }, 600);
};

// Mock Dashboard Filtering & Dynamic Stats
const activeDeptFilter = ref("All");

const mockLogs = ref(
  loadPersistedLogs() || [
    {
      id: 1,
      date: "2026-06-08",
      shipper: "Sugeng Wardoyo",
      dept: "Produksi",
      photos: 12,
      videos: 2,
      approver: "Tommy Setiawan (IT)",
    },
    {
      id: 2,
      date: "2026-06-08",
      shipper: "Indra Hermawan",
      dept: "Quality Control",
      photos: 8,
      videos: 0,
      approver: "Riki Andi (IT)",
    },
    {
      id: 3,
      date: "2026-06-07",
      shipper: "Budi Susanto",
      dept: "Warehouse",
      photos: 15,
      videos: 4,
      approver: "Tommy Setiawan (IT)",
    },
    {
      id: 4,
      date: "2026-06-07",
      shipper: "Siti Rahma",
      dept: "Produksi",
      photos: 24,
      videos: 1,
      approver: "Riki Andi (IT)",
    },
    {
      id: 5,
      date: "2026-06-06",
      shipper: "Agus Salim",
      dept: "Quality Control",
      photos: 6,
      videos: 0,
      approver: "Tommy Setiawan (IT)",
    },
  ],
);

const filteredMockLogs = computed(() => {
  if (activeDeptFilter.value === "All") return mockLogs.value;
  return mockLogs.value.filter((log) => log.dept === activeDeptFilter.value);
});

const totalMockPhotos = computed(() => {
  return filteredMockLogs.value.reduce((acc, log) => acc + log.photos, 0);
});

const totalMockVideos = computed(() => {
  return filteredMockLogs.value.reduce((acc, log) => acc + log.videos, 0);
});

const departmentShareData = computed(() => {
  const depts = ["Produksi", "Quality Control", "Warehouse"];
  const items = filteredMockLogs.value;
  const total = items.reduce((acc, log) => acc + log.photos, 0);

  if (total === 0)
    return depts.map((d) => ({ name: d, percent: 0, photos: 0 }));

  return depts.map((d) => {
    const photos = items
      .filter((log) => log.dept === d)
      .reduce((acc, log) => acc + log.photos, 0);
    const percent = Math.round((photos / total) * 100);
    return { name: d, percent, photos };
  });
});

// Mock Form and Signature Pad Drawing Code
const newLog = ref({
  shipper: "",
  dept: "Produksi",
  photos: 6,
  videos: 0,
  approver: "Tommy Setiawan (IT)",
});

const signatureCanvas = ref(null);
const isDrawing = ref(false);
const isSigned = ref(false);
const submissionFeedback = ref("");
let ctx = null;

const initCanvas = () => {
  const canvas = signatureCanvas.value;
  if (!canvas) return;

  // Set physical display scale mapping
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#f59e0b"; // amber-500
  ctx.lineWidth = 2.5;
  ctx.lineCap = "round";
};

onMounted(() => {
  initCanvas();
  window.addEventListener("resize", initCanvas);
});

const startDrawing = (e) => {
  isDrawing.value = true;
  isSigned.value = true;
  ctx.beginPath();
  const rect = signatureCanvas.value.getBoundingClientRect();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
};

const draw = (e) => {
  if (!isDrawing.value) return;
  const rect = signatureCanvas.value.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  ctx.stroke();
};

const startDrawingTouch = (e) => {
  isDrawing.value = true;
  isSigned.value = true;
  ctx.beginPath();
  const rect = signatureCanvas.value.getBoundingClientRect();
  const touch = e.touches[0];
  ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
};

const drawTouch = (e) => {
  if (!isDrawing.value) return;
  const rect = signatureCanvas.value.getBoundingClientRect();
  const touch = e.touches[0];
  ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
  ctx.stroke();
};

const stopDrawing = () => {
  isDrawing.value = false;
};

const clearSignature = () => {
  if (!ctx) return;
  ctx.clearRect(
    0,
    0,
    signatureCanvas.value.width,
    signatureCanvas.value.height,
  );
  isSigned.value = false;
  submissionFeedback.value = "";
};

const submitMockTransfer = () => {
  if (!isSigned.value) {
    submissionFeedback.value =
      "Error: Draw operator signature before submitting.";
    return;
  }

  const today = new Date().toISOString().split("T")[0];

  // Add to head of mock logs
  mockLogs.value.unshift({
    id: Date.now(),
    date: today,
    shipper: newLog.value.shipper,
    dept: newLog.value.dept,
    photos: newLog.value.photos,
    videos: newLog.value.videos,
    approver: newLog.value.approver,
  });

  // Persist to localStorage
  persistLogs(mockLogs.value);

  submissionFeedback.value =
    "Success: Photo transfer log created, signature saved as base64 asset in SQL database!";

  // Reset Form
  newLog.value.shipper = "";
  newLog.value.photos = 6;
  newLog.value.videos = 0;
  clearSignature();
};
</script>

<style scoped>
/* Page transition and fade keyframes */
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
