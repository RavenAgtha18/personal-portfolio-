<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-hidden"
        @click.self="closeModal"
      >
        <!-- Modal Container -->
        <div
          class="relative w-full max-w-6xl h-[92vh] flex flex-col rounded-2xl border border-zinc-800 bg-[#0d0d0d] shadow-2xl text-zinc-100 overflow-hidden"
        >
          <!-- Top Action Bar -->
          <header
            class="px-4 sm:px-6 py-3.5 border-b border-zinc-800 bg-zinc-950 flex flex-wrap items-center justify-between gap-3 shrink-0"
          >
            <!-- Title -->
            <div class="flex items-center gap-2.5">
              <div
                class="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400"
              >
                <FileText class="w-4 h-4" />
              </div>
              <div>
                <h3 class="text-sm font-bold text-white flex items-center gap-2 font-mono">
                  <span>職務経歴書 (Shokumu Keirekisho)</span>
                  <span
                    class="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30"
                  >
                    A4・2枚厳守規格
                  </span>
                </h3>
                <p class="text-[11px] text-zinc-400">
                  日系IT企業・製造DX向け Bridge SE / Technical BA 標準様式
                </p>
              </div>
            </div>

            <!-- Export Actions -->
            <div class="flex items-center gap-2">
              <!-- Page View Selector (Mobile/Desktop) -->
              <div class="inline-flex rounded-lg border border-zinc-800 bg-zinc-900 p-0.5 text-xs font-mono">
                <button
                  @click="activePage = 'all'"
                  :class="[
                    'px-2.5 py-1 rounded-md transition-colors hidden md:inline-block',
                    activePage === 'all'
                      ? 'bg-amber-500 text-black font-bold'
                      : 'text-zinc-400 hover:text-white',
                  ]"
                >
                  見開き (2P)
                </button>
                <button
                  @click="activePage = 1"
                  :class="[
                    'px-2.5 py-1 rounded-md transition-colors',
                    activePage === 1
                      ? 'bg-amber-500 text-black font-bold'
                      : 'text-zinc-400 hover:text-white',
                  ]"
                >
                  1枚目
                </button>
                <button
                  @click="activePage = 2"
                  :class="[
                    'px-2.5 py-1 rounded-md transition-colors',
                    activePage === 2
                      ? 'bg-amber-500 text-black font-bold'
                      : 'text-zinc-400 hover:text-white',
                  ]"
                >
                  2枚目
                </button>
              </div>

              <!-- Word Export Button -->
              <button
                @click="downloadWord"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-md transition-all hover:scale-105 active:scale-95"
                title="Microsoft Word (.doc) 形式でダウンロード"
              >
                <FileDown class="w-3.5 h-3.5" />
                <span class="hidden sm:inline">Word保存</span>
                <span class="sm:hidden">Word</span>
              </button>

              <!-- Print / Save as PDF Button -->
              <button
                @click="printDocument"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-mono text-xs font-bold shadow-md transition-all hover:scale-105 active:scale-95"
                title="ブラウザ印刷ダイアログから「PDFとして保存」を実行"
              >
                <Printer class="w-3.5 h-3.5" />
                <span class="hidden sm:inline">PDF保存 / 印刷</span>
                <span class="sm:hidden">PDF</span>
              </button>

              <!-- Copy Text Button -->
              <button
                @click="copyMarkdown"
                class="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                :title="copied ? 'コピー完了！' : 'テキストをコピー'"
              >
                <Check v-if="copied" class="w-4 h-4 text-emerald-400" />
                <Copy v-else class="w-4 h-4" />
              </button>

              <!-- Close Button -->
              <button
                @click="closeModal"
                class="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors ml-1"
                aria-label="Close Modal"
              >
                <X class="w-4 h-4" />
              </button>
            </div>
          </header>

          <!-- Notification Toast -->
          <Transition name="fade">
            <div
              v-if="toastMsg"
              class="absolute top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-1.5 rounded-full bg-emerald-500/90 text-black font-mono text-xs font-bold shadow-lg flex items-center gap-1.5 animate-bounce"
            >
              <CheckCircle2 class="w-4 h-4" />
              <span>{{ toastMsg }}</span>
            </div>
          </Transition>

          <!-- Document Viewer Area (Scrollable Preview Canvas) -->
          <div
            ref="previewContainer"
            class="flex-1 overflow-y-auto p-4 sm:p-6 bg-zinc-900/90 flex justify-center items-start print-root"
          >
            <div
              class="w-full flex flex-col md:flex-row gap-6 justify-center items-center md:items-start"
              :class="{
                'md:flex-col items-center': activePage !== 'all',
              }"
            >
              <!-- PAGE 1 (A4 Sheet Canvas) -->
              <div
                v-show="activePage === 'all' || activePage === 1"
                class="a4-sheet bg-white text-zinc-900 shadow-2xl rounded-sm p-7 sm:p-9 relative shrink-0 border border-zinc-300"
              >
                <div class="sheet-watermark-tag hidden sm:block">A4 - PAGE 1 / 2</div>

                <!-- Page 1 Header -->
                <div class="text-right text-[11px] text-zinc-600 mb-1">
                  {{ docData.header.currentDate }}
                </div>
                <div class="text-right text-xs mb-3">
                  <div class="text-zinc-600 text-[10px] tracking-widest">氏名</div>
                  <div class="text-base font-bold text-zinc-900 tracking-wide font-serif">
                    {{ docData.header.nameKanji }}
                  </div>
                  <div class="text-[10px] text-zinc-500 font-mono">
                    {{ docData.header.nameRomaji }} · {{ docData.header.targetRole }}
                  </div>
                </div>

                <h1
                  class="text-xl font-bold text-center tracking-[0.3em] font-serif border-b-2 border-zinc-900 pb-2 mb-4"
                >
                  {{ docData.header.title }}
                </h1>

                <!-- 1. 職務要約 -->
                <section class="mb-3.5">
                  <h2 class="text-xs font-bold text-zinc-900 border-b border-zinc-800 pb-0.5 mb-1.5 font-serif">
                    【1. 職務要約】
                  </h2>
                  <p class="text-[11.5px] leading-relaxed text-zinc-800 text-justify indent-3">
                    {{ docData.summary }}
                  </p>
                </section>

                <!-- 2. 活かせる経験・知識・技術 -->
                <section class="mb-3.5">
                  <h2 class="text-xs font-bold text-zinc-900 border-b border-zinc-800 pb-0.5 mb-1.5 font-serif">
                    【2. 活かせる経験・知識・技術】
                  </h2>
                  <table class="w-full text-[11px] border-collapse border border-zinc-400 mb-1.5">
                    <tbody>
                      <tr v-for="cat in docData.competencies" :key="cat.category">
                        <th
                          class="w-1/4 bg-zinc-100 border border-zinc-400 p-1.5 text-left font-bold text-[10.5px] align-top text-zinc-800"
                        >
                          {{ cat.category }}
                        </th>
                        <td class="border border-zinc-400 p-1.5 text-zinc-800 align-top">
                          <ul class="list-disc list-inside space-y-0.5">
                            <li v-for="skill in cat.skills" :key="skill" class="leading-snug">
                              {{ skill }}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <th class="bg-zinc-100 border border-zinc-400 p-1.5 text-left font-bold text-[10.5px] align-top text-zinc-800">
                          保有資格・認定
                        </th>
                        <td class="border border-zinc-400 p-1.5 text-zinc-800 align-top">
                          <ul class="list-disc list-inside space-y-0.5">
                            <li v-for="cert in docData.header.certifications" :key="cert.name">
                              <strong>{{ cert.name }}</strong> ({{ cert.date }})
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>

                <!-- 3. 職務経歴詳細 (会社概要) -->
                <section class="mb-3.5">
                  <h2 class="text-xs font-bold text-zinc-900 border-b border-zinc-800 pb-0.5 mb-1.5 font-serif">
                    【3. 職務経歴詳細】
                  </h2>
                  <table class="w-full text-[10.5px] border-collapse border border-zinc-400 mb-2">
                    <tbody>
                      <tr>
                        <th class="w-1/6 bg-zinc-100 border border-zinc-400 p-1 text-left font-bold text-zinc-800">
                          勤務期間
                        </th>
                        <td class="border border-zinc-400 p-1 text-zinc-800 font-bold">
                          {{ docData.company.period }}（現職）
                        </td>
                        <th class="w-1/6 bg-zinc-100 border border-zinc-400 p-1 text-left font-bold text-zinc-800">
                          会社名
                        </th>
                        <td class="border border-zinc-400 p-1 text-zinc-800 font-bold">
                          {{ docData.company.name }}（{{ docData.company.capital }}）
                        </td>
                      </tr>
                      <tr>
                        <th class="bg-zinc-100 border border-zinc-400 p-1 text-left font-bold text-zinc-800">
                          所属・職種
                        </th>
                        <td class="border border-zinc-400 p-1 text-zinc-800">
                          {{ docData.company.department }} / {{ docData.company.position }}（{{ docData.company.employmentType }}・2名体制）
                        </td>
                        <th class="bg-zinc-100 border border-zinc-400 p-1 text-left font-bold text-zinc-800">
                          事業内容
                        </th>
                        <td class="border border-zinc-400 p-1 text-zinc-800">
                          {{ docData.company.businessType }}（従業員数 {{ docData.company.employees }}）
                        </td>
                      </tr>
                      <tr>
                        <th class="bg-zinc-100 border border-zinc-400 p-1 text-left font-bold text-zinc-800">
                          前職・経歴
                        </th>
                        <td colspan="3" class="border border-zinc-400 p-1 text-zinc-800 text-[10px]">
                          <div class="flex items-center justify-between">
                            <span><strong>2023年01月 ～ 2024年12月</strong>：フルスタックWebエンジニア（受託開発）</span>
                            <span class="text-zinc-500 font-sans">環境: Laravel, Vue.js, Python, MySQL</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <!-- Page 1 Projects (Protrack & SnapPack) -->
                  <div class="space-y-2.5">
                    <div
                      v-for="p in docData.projects.slice(0, 2)"
                      :key="p.id"
                      class="border border-zinc-400 text-[10.5px]"
                    >
                      <div class="bg-zinc-200/90 font-bold p-1 text-[11px] text-zinc-900 border-b border-zinc-400 flex justify-between">
                        <span>{{ p.name }}</span>
                        <span class="text-zinc-600 font-sans text-[10px]">期間: {{ p.period }} / 規模: {{ p.teamSize }}</span>
                      </div>
                      <div class="grid grid-cols-4 p-1 border-b border-zinc-300 bg-zinc-50 text-[10px]">
                        <div class="font-bold text-zinc-700">担当工程:</div>
                        <div class="col-span-3 text-zinc-800">{{ p.phase }}</div>
                        <div class="font-bold text-zinc-700">開発環境:</div>
                        <div class="col-span-3 text-zinc-800 font-mono">{{ p.env }}</div>
                      </div>
                      <div class="p-1.5 border-b border-zinc-200 text-zinc-800 leading-snug">
                        <strong class="text-zinc-900">概要: </strong>{{ p.description }}
                      </div>
                      <div class="p-1.5 bg-zinc-50/50">
                        <strong class="text-zinc-900 block mb-0.5">実績・カイゼン成果:</strong>
                        <ul class="list-disc list-inside space-y-0.5 text-zinc-800 pl-1">
                          <li v-for="ach in p.achievements" :key="ach" class="leading-snug">
                            <strong>{{ ach }}</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <div class="text-center text-[10px] text-zinc-400 mt-2 font-mono">
                  - 1 / 2 -
                </div>
              </div>

              <!-- PAGE 2 (A4 Sheet Canvas) -->
              <div
                v-show="activePage === 'all' || activePage === 2"
                class="a4-sheet bg-white text-zinc-900 shadow-2xl rounded-sm p-7 sm:p-9 relative shrink-0 border border-zinc-300"
              >
                <div class="sheet-watermark-tag hidden sm:block">A4 - PAGE 2 / 2</div>

                <!-- Page 2 Header (Compact) -->
                <div class="flex justify-between items-center text-[11px] text-zinc-600 border-b border-zinc-300 pb-1.5 mb-3 font-mono">
                  <span>職務経歴書 (2/2)</span>
                  <span>{{ docData.header.currentDate }} / 氏名: {{ docData.header.nameKanji }}</span>
                </div>

                <!-- Page 2 Projects (Stokku, ProScan, Finish-Info/QC) -->
                <section class="space-y-2.5 mb-3.5">
                  <div
                    v-for="p in docData.projects.slice(2)"
                    :key="p.id"
                    class="border border-zinc-400 text-[10.5px]"
                  >
                    <div class="bg-zinc-200/90 font-bold p-1 text-[11px] text-zinc-900 border-b border-zinc-400 flex justify-between">
                      <span>{{ p.name }}</span>
                      <span class="text-zinc-600 font-sans text-[10px]">期間: {{ p.period }} / 規模: {{ p.teamSize }}</span>
                    </div>
                    <div class="grid grid-cols-4 p-1 border-b border-zinc-300 bg-zinc-50 text-[10px]">
                      <div class="font-bold text-zinc-700">担当工程:</div>
                      <div class="col-span-3 text-zinc-800">{{ p.phase }}</div>
                      <div class="font-bold text-zinc-700">開発環境:</div>
                      <div class="col-span-3 text-zinc-800 font-mono">{{ p.env }}</div>
                    </div>
                    <div class="p-1.5 border-b border-zinc-200 text-zinc-800 leading-snug">
                      <strong class="text-zinc-900">概要: </strong>{{ p.description }}
                    </div>
                    <div class="p-1.5 bg-zinc-50/50">
                      <strong class="text-zinc-900 block mb-0.5">実績・カイゼン成果:</strong>
                      <ul class="list-disc list-inside space-y-0.5 text-zinc-800 pl-1">
                        <li v-for="ach in p.achievements" :key="ach" class="leading-snug">
                          <strong>{{ ach }}</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <!-- 4. 自己PR (3大コア強み) -->
                <section class="mb-3">
                  <h2 class="text-xs font-bold text-zinc-900 border-b border-zinc-800 pb-0.5 mb-2 font-serif">
                    【4. 自己PR・今後の志望】
                  </h2>
                  <div class="space-y-2 text-[11px]">
                    <div
                      v-for="(pr, pIdx) in docData.selfPr"
                      :key="pr.title"
                      class="border-l-2 border-amber-600 pl-2.5 py-0.5"
                    >
                      <h3 class="font-bold text-zinc-900 mb-0.5 text-[11px]">
                        {{ pIdx + 1 }}. {{ pr.title }}
                      </h3>
                      <p class="text-zinc-800 leading-snug text-justify text-[10.5px]">
                        {{ pr.content }}
                      </p>
                    </div>
                  </div>
                </section>

                <!-- End marker -->
                <div class="text-right text-xs font-bold text-zinc-900 mt-3 font-serif tracking-[0.8em]">
                  以上
                </div>

                <div class="text-center text-[10px] text-zinc-400 mt-2 font-mono">
                  - 2 / 2 -
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Footer Bar -->
          <footer
            class="px-4 sm:px-6 py-2.5 border-t border-zinc-800 bg-zinc-950 flex flex-wrap items-center justify-between text-xs text-zinc-400 font-mono shrink-0"
          >
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>JIS規格 日本語履歴・職務経歴書（A4用紙2枚組・厳守対応）</span>
            </div>
            <div class="flex items-center gap-3">
              <router-link
                to="/keirekisho"
                @click="closeModal"
                class="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <span>全画面で開く (/keirekisho)</span>
                <ExternalLink class="w-3 h-3" />
              </router-link>
            </div>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
/* global defineExpose */
import { ref } from 'vue'
import {
  FileText,
  FileDown,
  Printer,
  Copy,
  Check,
  CheckCircle2,
  X,
  ExternalLink,
} from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { shokumuKeirekishoData as docData } from '@/data/shokumuKeirekisho'
import { exportShokumuKeirekishoToWord } from '@/utils/exportShokumuKeirekishoWord'

const router = useRouter()
const isOpen = ref(false)
const activePage = ref('all') // 'all', 1, 2
const copied = ref(false)
const toastMsg = ref('')

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

const triggerToast = (msg) => {
  toastMsg.value = msg
  setTimeout(() => {
    toastMsg.value = ''
  }, 2500)
}

const downloadWord = () => {
  exportShokumuKeirekishoToWord()
  triggerToast('Word文書 (.doc) をダウンロードしました')
}

const printDocument = () => {
  closeModal()
  router.push({ path: '/keirekisho', query: { autoPrint: '1' } })
}

const copyMarkdown = async () => {
  const md = `# 職務経歴書
${docData.header.currentDate}
氏名: ${docData.header.nameKanji} (${docData.header.nameRomaji})

## 【1. 職務要約】
${docData.summary}

## 【2. 活かせる経験・知識・技術】
${docData.competencies
  .map(
    (c) => `### ${c.category}
${c.skills.map((s) => `- ${s}`).join('\n')}`,
  )
  .join('\n\n')}

## 【3. 職務経歴詳細】
会社名: ${docData.company.name} (${docData.company.period})
事業内容: ${docData.company.businessType} / 所属: ${docData.company.department}

${docData.projects
  .map(
    (p) => `### ■ ${p.name}
- 期間: ${p.period} / 規模: ${p.teamSize} / 担当: ${p.role}
- 担当工程: ${p.phase}
- 開発環境: ${p.env}
- 概要: ${p.description}
- 実績・カイゼン成果:
${p.achievements.map((a) => `  * ${a}`).join('\n')}`,
  )
  .join('\n\n')}

## 【4. 自己PR】
${docData.selfPr.map((pr, i) => `${i + 1}. ${pr.title}\n${pr.content}`).join('\n\n')}

以上
`
  try {
    await navigator.clipboard.writeText(md)
    copied.value = true
    triggerToast('職務経歴書テキストをクリップボードにコピーしました')
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    triggerToast('クリップボードのコピーに失敗しました')
  }
}

defineExpose({
  openModal,
  closeModal,
})
</script>

<style scoped>
/* A4 Dimensions for preview */
.a4-sheet {
  width: 100%;
  max-width: 540px;
  min-height: 760px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  font-family: 'Yu Mincho', 'MS Mincho', 'Hiragino Mincho Pro', 'Yu Gothic', 'Meiryo', serif;
}

@media (min-width: 1024px) {
  .a4-sheet {
    width: 480px;
    min-height: 680px;
  }
}

.sheet-watermark-tag {
  position: absolute;
  top: 6px;
  left: 10px;
  font-size: 8px;
  font-family: monospace;
  color: #aaa;
  letter-spacing: 1px;
}

/* Modal Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.97);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Print Overrides: Strictly format 2 pages */
@media print {
  body * {
    visibility: hidden;
  }
  .print-root,
  .print-root * {
    visibility: visible;
  }
  .print-root {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: transparent !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .a4-sheet {
    box-shadow: none !important;
    border: none !important;
    max-width: 100% !important;
    width: 100% !important;
    min-height: auto !important;
    padding: 12mm 15mm !important;
    page-break-after: always;
  }
  .sheet-watermark-tag {
    display: none !important;
  }
}
</style>
