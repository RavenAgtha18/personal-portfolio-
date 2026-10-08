<template>
  <div
    class="w-full rounded-2xl border transition-all duration-300 overflow-hidden font-mono text-xs select-none shadow-2xl"
    :class="isDark ? 'bg-[#09090b] border-zinc-800' : 'bg-slate-900 border-slate-700 text-slate-100 shadow-xl'"
  >
    <!-- Terminal Header Bar -->
    <div
      class="px-3 sm:px-4 py-2.5 border-b flex items-center justify-between"
      :class="isDark ? 'border-zinc-800 bg-zinc-900/90' : 'border-slate-800 bg-slate-950'"
    >
      <div class="flex items-center gap-2 min-w-0">
        <button @click="clearTerminal" class="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors flex-shrink-0" title="Clear"></button>
        <span class="w-3 h-3 rounded-full bg-amber-500/80 flex-shrink-0"></span>
        <span class="w-3 h-3 rounded-full bg-emerald-500/80 flex-shrink-0"></span>
        <span class="ml-1 sm:ml-2 text-[11px] font-bold text-zinc-400 hidden sm:inline">riki-bridge-os v2.4 (x86_64-linux)</span>
        <span class="ml-1 text-[11px] font-bold text-zinc-400 sm:hidden truncate">riki-bridge-os</span>
      </div>

      <div class="flex items-center gap-2 text-[10px] text-zinc-500 flex-shrink-0">
        <Terminal class="w-3.5 h-3.5 text-amber-500" />
        <span class="hidden sm:inline">TYPE 'help' OR CLICK COMMANDS</span>
        <span class="sm:hidden text-amber-500 font-bold">CLI</span>
      </div>
    </div>

    <!-- Quick Command Suggestions Bar -->
    <div
      class="px-3 sm:px-4 py-2 border-b flex flex-wrap items-center gap-1.5 text-[10px]"
      :class="isDark ? 'border-zinc-800/80 bg-zinc-950/60' : 'border-slate-800 bg-slate-900'"
    >
      <span class="text-zinc-500 font-semibold">Run:</span>
      <button
        v-for="cmd in availableCommands"
        :key="cmd"
        @click="executeCommand(cmd)"
        class="px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/80 text-amber-400 hover:border-amber-500 hover:text-amber-300 transition-colors active:scale-95"
      >
        {{ cmd }}
      </button>
    </div>

    <!-- Terminal Output Window -->
    <div
      ref="outputContainerRef"
      class="p-3.5 sm:p-5 h-56 sm:h-64 overflow-y-auto space-y-2 text-zinc-300 text-xs font-mono leading-relaxed"
    >
      <div v-for="(entry, idx) in history" :key="idx">
        <div v-if="entry.type === 'input'" class="flex items-center gap-2 text-amber-400">
          <span class="text-emerald-400 hidden xs:inline">guest@sysdev:~$</span>
          <span class="text-emerald-400 xs:hidden">~$</span>
          <span>{{ entry.text }}</span>
        </div>
        <div v-else-if="entry.type === 'output'" class="whitespace-pre-wrap text-zinc-300 pl-3 sm:pl-4 border-l border-zinc-800 text-[11px] sm:text-xs">
          {{ entry.text }}
        </div>
        <div v-else-if="entry.type === 'success'" class="whitespace-pre-wrap text-emerald-400 pl-3 sm:pl-4 border-l border-emerald-500/40 text-[11px] sm:text-xs">
          {{ entry.text }}
        </div>
        <div v-else-if="entry.type === 'special'" class="whitespace-pre-wrap text-amber-300 pl-3 sm:pl-4 border-l border-amber-500/40 font-bold text-[11px] sm:text-xs">
          {{ entry.text }}
        </div>
      </div>
    </div>

    <!-- Terminal Input Prompt -->
    <form
      @submit.prevent="handleInputSubmit"
      class="px-3 sm:px-4 py-2 sm:py-2.5 border-t flex items-center gap-2"
      :class="isDark ? 'border-zinc-800 bg-zinc-950' : 'border-slate-800 bg-slate-950'"
    >
      <span class="text-emerald-400 text-xs flex-shrink-0 hidden xs:inline">guest@sysdev:~$</span>
      <span class="text-emerald-400 text-xs flex-shrink-0 xs:hidden">~$</span>
      <input
        v-model="inputCommand"
        type="text"
        placeholder="type command (e.g. 'sudo hire', 'specs')..."
        class="w-full bg-transparent text-amber-300 placeholder-zinc-600 focus:outline-none text-xs font-mono min-w-0"
        autocomplete="off"
        spellcheck="false"
      />
      <button
        type="submit"
        class="px-2.5 py-1 rounded bg-amber-500 text-black font-bold text-[10px] hover:bg-amber-400 transition-colors flex-shrink-0 active:scale-95"
      >
        EXEC
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { Terminal } from 'lucide-vue-next'
import confetti from 'canvas-confetti'

const { isDark } = useTheme()

const inputCommand = ref('')
const outputContainerRef = ref(null)

const availableCommands = ['help', 'whoami', 'specs', 'telemetry', 'japan', 'sudo hire', 'clear']

const history = ref([
  {
    type: 'output',
    text: 'Welcome to Riki Andi Alfiyanto (System Developer · 2-Person Core SysDev Team) Shell.\nType "help" to list available operational commands.'
  },
  {
    type: 'input',
    text: 'whoami'
  },
  {
    type: 'output',
    text: 'Riki Andi Alfiyanto\nRole: System Developer (SysDev) · 2-Person Core Team\nCompany: PT. Harrison And Gil-Java\nDomain: Manufacturing MES, Barcode Tracking & Internal Operations\nStatus: OPEN FOR IN-HOUSE SE (社内SE) & SYSTEMS ENGINEERING ROLES'
  }
])

const scrollToBottom = async () => {
  await nextTick()
  if (outputContainerRef.value) {
    outputContainerRef.value.scrollTop = outputContainerRef.value.scrollHeight
  }
}

const clearTerminal = () => {
  history.value = [
    {
      type: 'output',
      text: 'Console cleared. Type "help" for command directory.'
    }
  ]
}

const executeCommand = (cmd) => {
  const clean = cmd.trim().toLowerCase()
  history.value.push({ type: 'input', text: cmd })

  switch (clean) {
    case 'help':
      history.value.push({
        type: 'output',
        text: `AVAILABLE COMMANDS:
  whoami      - Identity and professional executive summary
  specs       - Technical architecture and industrial stack specifications
  telemetry   - Stream simulated shop-floor scanner events
  japan       - Japanese language capability (JFT-Basic A2, Monozukuri mindset)
  projects    - List flagship manufacturing and internal systems
  sudo hire   - Trigger direct WhatsApp & email contact options
  clear       - Wipe the current terminal session`
      })
      break

    case 'whoami':
      history.value.push({
        type: 'output',
        text: `Riki Andi Alfiyanto
● System Developer (SysDev) at PT. Harrison And Gil-Java
● Structure: 2-Person Core SysDev Division (Direct frontline ownership across factory operations)
● Target Path: In-House Systems Engineer (社内SE) / Technical Systems Specialist
● Core Focus: Understanding frontline operational bottlenecks and translating them into robust, usable internal systems.
● Certification: JFT-Basic A2 & Actively Preparing for Fundamental IT Engineer Exam (基本情報技術者試験)
● Location: Semarang, Indonesia (Open for In-House Systems Engineering & Japan-bound Career Paths)`
      })
      break

    case 'specs':
      history.value.push({
        type: 'output',
        text: `SYSTEM SPECIFICATIONS:
  Tier 1 Physical: Zebra TC26 Android Barcode Imagers, Honeywell HF680, Brother Industrial Printers
  Tier 2 Middleware: PHP 8.x / Laravel, Node.js, Python, RESTful Webhooks, ACID Isolation Gate
  Tier 3 Enterprise: MariaDB Replicated Clusters, PostgreSQL, Tailored MES Dashboards
  Frontend Stack: Vue 3, Three.js 3D WebGL, Tailwind CSS, GSAP Motion, Canvas Engine`
      })
      break

    case 'telemetry':
      history.value.push({
        type: 'special',
        text: `STREAMING REAL-TIME ASSEMBLY LINE TELEMETRY:
[0.01s] EDGE: Zebra TC26 Handheld #SN-8924 scanned pallet CG-LUX-8924
[0.02s] GATEWAY: Validating checksum against shipping manifest... PASS
[0.03s] MIDDLEWARE: ACID Transaction committed to MariaDB cluster.
[0.04s] STATUS: 200 OK · Shipping locked · Audit record created · Floor cleared.`
      })
      break

    case 'japan':
      history.value.push({
        type: 'output',
        text: `JAPANESE BILINGUAL & SYSDEV PROFICIENCY:
  ● Language: JFT-Basic A2 (Certified & Active Daily SRS Practice)
  ● IT Standard: In active preparation for Fundamental Information Technology Engineer Examination (基本情報技術者試験 - FE Exam)
  ● Cultural Mindset: Monozukuri (匠の技, dedication to craftsmanship) & Kaizen (5S, continuous waste reduction)
  ● Capability: Translating complex stakeholder requirements into concrete technical database schemas and user stories.`
      })
      break

    case 'projects':
      history.value.push({
        type: 'output',
        text: `PRODUCTION SYSTEMS CATALOG (PT. HARRISON AND GIL-JAVA · 2-PERSON SYSDEV TEAM):
  1. SnapPack       - Export shipping verification, digital touch signatures & EUDR compliance
  2. Protrack       - Real-time shop-floor WIP tracking & dynamic aging calculations
  3. Stokku         - Warehouse inventory control, FEFO chemical routing & 2-tier rack zoning
  4. finish-info    - Cutting list optimization, fabric nesting yield & monthly output reporting
  5. QC Checklist   - Shop-floor quality inspection gateway & defect classification logs
  6. ProScan        - Barcode stock opname audits & ERP ledger variance reconciliation
  7. Toolin         - Factory equipment requisition & multi-tier department approvals
  8. Doc Control    - ISO/SOP document management & multi-version audit history`
      })
      break

    case 'sudo hire':
    case 'hire':
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#10b981', '#3b82f6', '#ffffff']
      })
      history.value.push({
        type: 'special',
        text: `🎉 EXCELLENT DECISION! DIRECT RECRUITMENT PROTOCOL ENGAGED:
------------------------------------------------------------
WhatsApp: +62 851-7518-0821
Email:    rikiandialfiyanto@gmail.com
LinkedIn: linkedin.com/in/riki-andi-alfiyanto
Resume:   /cv_rikiandi.pdf
------------------------------------------------------------
Ready to elevate your engineering team and bridge business needs.`
      })
      break

    case 'clear':
      clearTerminal()
      return

    default:
      history.value.push({
        type: 'output',
        text: `bash: ${clean}: command not found. Type "help" for a list of valid commands.`
      })
  }

  scrollToBottom()
}

const handleInputSubmit = () => {
  if (!inputCommand.value.trim()) return
  executeCommand(inputCommand.value)
  inputCommand.value = ''
}

onMounted(() => {
  scrollToBottom()
})
</script>
