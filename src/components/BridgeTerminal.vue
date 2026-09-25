<template>
  <div
    class="w-full rounded-2xl border transition-all duration-300 overflow-hidden font-mono text-xs select-none shadow-2xl"
    :class="isDark ? 'bg-[#09090b] border-zinc-800' : 'bg-slate-900 border-slate-700 text-slate-100 shadow-xl'"
  >
    <!-- Terminal Header Bar -->
    <div
      class="px-4 py-2.5 border-b flex items-center justify-between"
      :class="isDark ? 'border-zinc-800 bg-zinc-900/90' : 'border-slate-800 bg-slate-950'"
    >
      <div class="flex items-center gap-2">
        <button @click="clearTerminal" class="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" title="Clear"></button>
        <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
        <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
        <span class="ml-2 text-[11px] font-bold text-zinc-400">riki-bridge-os v2.4 (x86_64-industrial-linux)</span>
      </div>

      <div class="flex items-center gap-2 text-[10px] text-zinc-500">
        <Terminal class="w-3.5 h-3.5 text-amber-500" />
        <span class="hidden sm:inline">TYPE 'help' OR CLICK COMMANDS</span>
      </div>
    </div>

    <!-- Quick Command Suggestions Bar -->
    <div
      class="px-4 py-2 border-b flex flex-wrap items-center gap-1.5 text-[10px]"
      :class="isDark ? 'border-zinc-800/80 bg-zinc-950/60' : 'border-slate-800 bg-slate-900'"
    >
      <span class="text-zinc-500">Quick run:</span>
      <button
        v-for="cmd in availableCommands"
        :key="cmd"
        @click="executeCommand(cmd)"
        class="px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/80 text-amber-400 hover:border-amber-500 hover:text-amber-300 transition-colors"
      >
        {{ cmd }}
      </button>
    </div>

    <!-- Terminal Output Window -->
    <div
      ref="outputContainerRef"
      class="p-4 sm:p-5 h-64 overflow-y-auto space-y-2 text-zinc-300 text-xs font-mono leading-relaxed"
    >
      <div v-for="(entry, idx) in history" :key="idx">
        <div v-if="entry.type === 'input'" class="flex items-center gap-2 text-amber-400">
          <span class="text-emerald-400">guest@bridge-se:~$</span>
          <span>{{ entry.text }}</span>
        </div>
        <div v-else-if="entry.type === 'output'" class="whitespace-pre-wrap text-zinc-300 pl-4 border-l border-zinc-800">
          {{ entry.text }}
        </div>
        <div v-else-if="entry.type === 'success'" class="whitespace-pre-wrap text-emerald-400 pl-4 border-l border-emerald-500/40">
          {{ entry.text }}
        </div>
        <div v-else-if="entry.type === 'special'" class="whitespace-pre-wrap text-amber-300 pl-4 border-l border-amber-500/40 font-bold">
          {{ entry.text }}
        </div>
      </div>
    </div>

    <!-- Terminal Input Prompt -->
    <form
      @submit.prevent="handleInputSubmit"
      class="px-4 py-2.5 border-t flex items-center gap-2"
      :class="isDark ? 'border-zinc-800 bg-zinc-950' : 'border-slate-800 bg-slate-950'"
    >
      <span class="text-emerald-400 text-xs flex-shrink-0">guest@bridge-se:~$</span>
      <input
        v-model="inputCommand"
        type="text"
        placeholder="type command (e.g. 'sudo hire', 'specs', 'telemetry')..."
        class="w-full bg-transparent text-amber-300 placeholder-zinc-600 focus:outline-none text-xs font-mono"
        autocomplete="off"
        spellcheck="false"
      />
      <button
        type="submit"
        class="px-2.5 py-1 rounded bg-amber-500 text-black font-bold text-[10px] hover:bg-amber-400 transition-colors flex-shrink-0"
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
    text: 'Welcome to Riki Andi Alfiyanto (Bridge SE / Technical BA) Interactive Shell.\nType "help" to list available operational commands.'
  },
  {
    type: 'input',
    text: 'whoami'
  },
  {
    type: 'output',
    text: 'Riki Andi Alfiyanto\nRole: Bridge Software Engineer & Senior Technical Business Analyst\nDomain: Industrial Manufacturing, MES Automation, Barcode Logistics & Bilingual Systems (ID/JP)\nStatus: AVAILABLE FOR HIGH-IMPACT ENTERPRISE INITIATIVES'
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
  telemetry   - Stream real-time simulated shop-floor telemetry
  japan       - Japanese bilingual capability (JFT-Basic A2, Monozukuri)
  projects    - List flagship enterprise case studies
  sudo hire   - Trigger celebratory recruiter protocol + direct contact
  clear       - Wipe the current terminal session`
      })
      break

    case 'whoami':
      history.value.push({
        type: 'output',
        text: `Riki Andi Alfiyanto
● Bridge Software Engineer & Technical Business Analyst
● Core Philosophy: Bridging physical shop-floor realities with resilient software architecture.
● Location: Semarang, Indonesia (Serving Global & Japanese Clients)`
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
[0.04s] STATUS: 200 OK · Shipping locked · Variance 0% · Floor cleared.`
      })
      break

    case 'japan':
      history.value.push({
        type: 'output',
        text: `JAPANESE BILINGUAL & TECHNICAL BA PROFICIENCY:
  ● Language: JFT-Basic A2 (Certified & Active Daily SRS Practice)
  ● Cultural Mindset: Monozukuri (匠の技, dedication to craftsmanship) & Kaizen (5S, continuous waste reduction)
  ● Capability: Translating complex Japanese stakeholder requirements into concrete technical database schemas and user stories.`
      })
      break

    case 'projects':
      history.value.push({
        type: 'output',
        text: `FLAGSHIP CASE STUDIES:
  1. SnapPack   - Luxury furniture shipping verification (-95% audit search time)
  2. Protrack   - Real-time WIP production line tracking (100% floor visibility)
  3. ISP SMR    - High-volume internet service provider operational portal
  4. ProScan    - Barcode stock opname with zero recording discrepancy
  5. QC Gate    - Defect tolerance checkpoint system
  6. Stokku     - Chemical expiration & rack locator control system`
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
