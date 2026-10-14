<template>
  <div lang="ja" class="relative min-h-screen bg-slate-200/90 dark:bg-[#0e0e0e] text-zinc-900 dark:text-zinc-100 py-8 px-3 sm:px-6 overflow-x-hidden print-screen transition-colors duration-300">
    <!-- Non-Printable Floating Toolbar -->
    <div
      class="no-print max-w-5xl mx-auto mb-4 p-4 rounded-2xl glass border border-slate-300 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 sticky top-4 z-40 shadow-xl"
    >
      <div class="flex items-center gap-3">
        <router-link
          to="/"
          class="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>{{ isJapanese ? 'ホームへ戻る' : 'Back to Portfolio' }}</span>
        </router-link>

        <span class="text-slate-300 dark:text-zinc-700">|</span>

        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-slate-900 dark:text-white font-mono">職務経歴書 (Shokumu Keirekisho)</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-bold">
            JIS標準 A4・2枚厳守
          </span>
        </div>
      </div>

      <div class="flex items-center gap-2.5">
        <!-- Word Download -->
        <button
          @click="downloadWord"
          class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-md transition-all hover:scale-105 active:scale-95"
          title="Microsoft Word (.doc) 形式でダウンロード"
        >
          <FileDown class="w-3.5 h-3.5" />
          <span>Word形式保存 (.doc)</span>
        </button>

        <!-- Print to PDF -->
        <button
          @click="printPdf"
          class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-mono text-xs font-bold shadow-md transition-all hover:scale-105 active:scale-95"
          title="PDF保存・印刷 (ブラウザの印刷画面で「PDFとして保存」を選択)"
        >
          <Printer class="w-3.5 h-3.5" />
          <span>PDF保存 / 印刷 (2ページ)</span>
        </button>

        <!-- Copy Text -->
        <button
          @click="copyText"
          class="p-2 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          :title="copied ? 'コピー完了！' : 'テキストをコピー'"
        >
          <Check v-if="copied" class="w-4 h-4 text-emerald-400" />
          <Copy v-else class="w-4 h-4" />
        </button>
      </div>
    </div>

    <!-- Print Hint Banner -->
    <div
      class="no-print max-w-5xl mx-auto mb-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-900 dark:text-amber-200 flex items-center justify-between gap-3 shadow-sm"
    >
      <div class="flex items-center gap-2">
        <Info class="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
        <span>
          <strong>PDF保存のポイント:</strong> 印刷設定画面で<strong>「ヘッダーとフッター」のチェックを外す</strong>と、ページのURLや日時の印字が消え、企業提出用の完璧なA4・2枚の書類として仕上がります。
        </span>
      </div>
    </div>

    <!-- Notification Toast -->
    <Transition name="fade">
      <div
        v-if="toastMsg"
        class="no-print fixed top-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-emerald-500/90 text-black font-mono text-xs font-bold shadow-lg flex items-center gap-1.5 animate-bounce"
      >
        <CheckCircle2 class="w-4 h-4" />
        <span>{{ toastMsg }}</span>
      </div>
    </Transition>

    <!-- Printable 2-Page A4 Layout -->
    <div class="print-container max-w-4xl mx-auto space-y-10">
      <!-- ================= PAGE 1 ================= -->
      <section lang="ja" class="a4-page page-1 bg-white text-zinc-900 shadow-2xl rounded-sm p-6 sm:p-8 border border-zinc-300 relative flex flex-col justify-between">
        <div>
          <div class="no-print text-right text-[10px] text-zinc-400 font-mono mb-1">
            [ A4用紙 1枚目 / 全2枚 ]
          </div>

          <!-- Date & Name Header -->
          <div class="text-right text-[10.5px] text-zinc-600 mb-0.5 font-sans">
            {{ docData.header.currentDate }}
          </div>
          <div class="text-right text-xs mb-2">
            <div class="text-zinc-500 text-[10px] tracking-widest font-sans">氏名</div>
            <div class="text-base font-bold text-zinc-900 tracking-wide font-serif">
              {{ docData.header.nameKanji }}
            </div>
            <div class="text-[10px] text-zinc-500 font-sans">
              {{ docData.header.nameRomaji }} · 志望: <span class="font-bold text-zinc-800">{{ docData.header.targetRole }}</span>
            </div>
          </div>

          <h1 class="text-lg sm:text-xl font-bold text-center tracking-[0.35em] font-serif border-b-2 border-zinc-900 pb-1 mb-2.5">
            {{ docData.header.title }}
          </h1>

          <!-- 1. 職務要約 -->
          <div class="mb-2.5">
            <h2 class="text-[11px] font-bold text-zinc-900 border-b border-zinc-800 pb-0.5 mb-1 font-serif">
              【1. 職務要約】
            </h2>
            <p class="text-[10.5px] leading-relaxed text-zinc-800 text-justify indent-3">
              {{ docData.summary }}
            </p>
          </div>

          <!-- 2. 活かせる経験・知識・技術 -->
          <div class="mb-2.5">
            <h2 class="text-[11px] font-bold text-zinc-900 border-b border-zinc-800 pb-0.5 mb-1 font-serif">
              【2. 活かせる経験・知識・技術】
            </h2>
            <table class="w-full text-[10px] border-collapse border border-zinc-400 mb-1">
              <tbody>
                <tr v-for="cat in docData.competencies" :key="cat.category">
                  <th class="w-[28%] bg-zinc-100 border border-zinc-400 p-1 text-left font-bold text-[10px] align-top text-zinc-800 leading-snug">
                    {{ cat.category }}
                  </th>
                  <td class="border border-zinc-400 p-1 text-zinc-800 align-top">
                    <ul class="list-disc list-inside space-y-0.5">
                      <li v-for="skill in cat.skills" :key="skill" class="leading-tight">
                        {{ skill }}
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th class="bg-zinc-100 border border-zinc-400 p-1 text-left font-bold text-[10px] align-top text-zinc-800 leading-snug">
                    保有資格・認定
                  </th>
                  <td class="border border-zinc-400 p-1 text-zinc-800 align-top">
                    <ul class="list-disc list-inside space-y-0.5">
                      <li v-for="cert in docData.header.certifications" :key="cert.name" class="leading-tight">
                        <strong>{{ cert.name }}</strong> ({{ cert.date }})
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 3. 職務経歴詳細 (会社概要) -->
          <div class="mb-2">
            <h2 class="text-[11px] font-bold text-zinc-900 border-b border-zinc-800 pb-0.5 mb-1 font-serif">
              【3. 職務経歴詳細】
            </h2>
            <table class="w-full text-[10px] border-collapse border border-zinc-400 mb-2">
              <tbody>
                <tr>
                  <th class="w-1/6 bg-zinc-100 border border-zinc-400 p-0.5 px-1 text-left font-bold text-zinc-800">
                    勤務期間
                  </th>
                  <td class="border border-zinc-400 p-0.5 px-1 text-zinc-800 font-bold">
                    {{ docData.company.period }}（現職）
                  </td>
                  <th class="w-1/6 bg-zinc-100 border border-zinc-400 p-0.5 px-1 text-left font-bold text-zinc-800">
                    会社名
                  </th>
                  <td class="border border-zinc-400 p-0.5 px-1 text-zinc-800 font-bold">
                    {{ docData.company.name }}（{{ docData.company.capital }}）
                  </td>
                </tr>
                <tr>
                  <th class="bg-zinc-100 border border-zinc-400 p-0.5 px-1 text-left font-bold text-zinc-800">
                    所属・職種
                  </th>
                  <td class="border border-zinc-400 p-0.5 px-1 text-zinc-800">
                    {{ docData.company.department }} / {{ docData.company.position }}（{{ docData.company.employmentType }}・2名体制）
                  </td>
                  <th class="bg-zinc-100 border border-zinc-400 p-0.5 px-1 text-left font-bold text-zinc-800">
                    事業内容
                  </th>
                  <td class="border border-zinc-400 p-0.5 px-1 text-zinc-800">
                    {{ docData.company.businessType }}（従業員数 {{ docData.company.employees }}）
                  </td>
                </tr>
                <tr>
                  <th class="bg-zinc-100 border border-zinc-400 p-0.5 px-1 text-left font-bold text-zinc-800">
                    前職・経歴
                  </th>
                  <td colspan="3" class="border border-zinc-400 p-0.5 px-1 text-zinc-800 text-[9.5px]">
                    <div class="flex items-center justify-between">
                      <span><strong>2023年01月 ～ 2024年12月</strong>：フルスタックWebエンジニア（受託開発）</span>
                      <span class="text-zinc-600 font-sans">環境: Laravel, Vue.js, Python, MySQL</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Page 1 Projects (Protrack & SnapPack) -->
            <div class="space-y-2">
              <div
                v-for="p in docData.projects.slice(0, 2)"
                :key="p.id"
                class="border border-zinc-400 text-[10px]"
              >
                <div class="bg-zinc-200/90 font-bold p-1 text-[10.5px] text-zinc-900 border-b border-zinc-400 flex justify-between">
                  <span>{{ p.name }}</span>
                  <span class="text-zinc-600 font-sans text-[9.5px]">期間: {{ p.period }} / 規模: {{ p.teamSize }}</span>
                </div>
                <div class="grid grid-cols-4 p-0.5 px-1 border-b border-zinc-300 bg-zinc-50 text-[9.5px]">
                  <div class="font-bold text-zinc-700">担当工程:</div>
                  <div class="col-span-3 text-zinc-800">{{ p.phase }}</div>
                  <div class="font-bold text-zinc-700">開発環境:</div>
                  <div class="col-span-3 text-zinc-800 font-mono">{{ p.env }}</div>
                </div>
                <div class="p-1 border-b border-zinc-200 text-zinc-800 leading-tight text-[10px]">
                  <strong class="text-zinc-900">概要: </strong>{{ p.description }}
                </div>
                <div class="p-1 bg-zinc-50/50">
                  <strong class="text-zinc-900 block mb-0.5 text-[9.5px]">実績・カイゼン成果:</strong>
                  <ul class="list-disc list-inside space-y-0.5 text-zinc-800 pl-0.5 text-[9.5px]">
                    <li v-for="ach in p.achievements" :key="ach" class="leading-tight">
                      <strong>{{ ach }}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center text-[9.5px] text-zinc-400 mt-1 font-mono">
          - 1 / 2 -
        </div>
      </section>

      <!-- ================= PAGE 2 ================= -->
      <section lang="ja" class="a4-page page-2 bg-white text-zinc-900 shadow-2xl rounded-sm p-6 sm:p-8 border border-zinc-300 relative flex flex-col justify-between">
        <div>
          <div class="no-print text-right text-[10px] text-zinc-400 font-mono mb-1">
            [ A4用紙 2枚目 / 全2枚 ]
          </div>

          <!-- Page 2 Header (Compact) -->
          <div class="flex justify-between items-center text-[10px] text-zinc-600 border-b border-zinc-300 pb-1 mb-2 font-sans">
            <span>職務経歴書 (2/2)</span>
            <span>{{ docData.header.currentDate }} / 氏名: {{ docData.header.nameKanji }}</span>
          </div>

          <!-- Page 2 Projects (Stokku, ProScan, Finish-Info/QC) -->
          <div class="space-y-2 mb-2">
            <div
              v-for="p in docData.projects.slice(2)"
              :key="p.id"
              class="border border-zinc-400 text-[10px]"
            >
              <div class="bg-zinc-200/90 font-bold p-1 text-[10.5px] text-zinc-900 border-b border-zinc-400 flex justify-between">
                <span>{{ p.name }}</span>
                <span class="text-zinc-600 font-sans text-[9.5px]">期間: {{ p.period }} / 規模: {{ p.teamSize }}</span>
              </div>
              <div class="grid grid-cols-4 p-0.5 px-1 border-b border-zinc-300 bg-zinc-50 text-[9.5px]">
                <div class="font-bold text-zinc-700">担当工程:</div>
                <div class="col-span-3 text-zinc-800">{{ p.phase }}</div>
                <div class="font-bold text-zinc-700">開発環境:</div>
                <div class="col-span-3 text-zinc-800 font-mono">{{ p.env }}</div>
              </div>
              <div class="p-1 border-b border-zinc-200 text-zinc-800 leading-tight text-[10px]">
                <strong class="text-zinc-900">概要: </strong>{{ p.description }}
              </div>
              <div class="p-1 bg-zinc-50/50">
                <strong class="text-zinc-900 block mb-0.5 text-[9.5px]">実績・カイゼン成果:</strong>
                <ul class="list-disc list-inside space-y-0.5 text-zinc-800 pl-0.5 text-[9.5px]">
                  <li v-for="ach in p.achievements" :key="ach" class="leading-tight">
                    <strong>{{ ach }}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 4. 自己PR -->
          <div class="mb-2">
            <h2 class="text-[11px] font-bold text-zinc-900 border-b border-zinc-800 pb-0.5 mb-1.5 font-serif">
              【4. 自己PR・今後の志望】
            </h2>
            <div class="space-y-1.5 text-[10px]">
              <div
                v-for="(pr, pIdx) in docData.selfPr"
                :key="pr.title"
                class="border-l-2 border-amber-600 pl-2 py-0.5"
              >
                <h3 class="font-bold text-zinc-900 mb-0.5 text-[10.5px]">
                  {{ pIdx + 1 }}. {{ pr.title }}
                </h3>
                <p class="text-zinc-800 leading-tight text-justify text-[9.5px]">
                  {{ pr.content }}
                </p>
              </div>
            </div>
          </div>

          <div class="text-right text-xs font-bold text-zinc-900 mt-2 font-serif tracking-[0.8em]">
            以上
          </div>
        </div>

        <div class="text-center text-[9.5px] text-zinc-400 mt-1 font-mono">
          - 2 / 2 -
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  ArrowLeft,
  FileDown,
  Printer,
  Copy,
  Check,
  CheckCircle2,
  Info,
} from 'lucide-vue-next'
import { useLanguage } from '@/composables/useLanguage'
import { shokumuKeirekishoData as docData } from '@/data/shokumuKeirekisho'
import { exportShokumuKeirekishoToWord } from '@/utils/exportShokumuKeirekishoWord'

const route = useRoute()
const { isJapanese } = useLanguage()
const copied = ref(false)
const toastMsg = ref('')

onMounted(() => {
  if (route.query.autoPrint === '1') {
    setTimeout(() => {
      window.print()
    }, 400)
  }
})

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

const printPdf = () => {
  window.print()
}

const copyText = async () => {
  const md = `# 職務経歴書
${docData.header.currentDate}
氏名: ${docData.header.nameKanji} (${docData.header.nameRomaji})
志望: ${docData.header.targetRole}

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
事業内容: ${docData.company.businessType} / 所属: ${docData.company.department} (${docData.company.position})
前職・経歴: ${docData.company.previousExperience}

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
</script>

<style scoped>
.a4-page {
  width: 100%;
  max-width: 820px;
  min-height: 1060px;
  font-family: 'Yu Mincho', 'MS Mincho', 'Hiragino Mincho Pro', 'Yu Gothic', 'Meiryo', serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Print CSS Rules for Strict 2-Page A4 output */
@media print {
  @page {
    size: A4 portrait;
    margin: 8mm 10mm;
  }
  html,
  body {
    background: #ffffff !important;
    color: #000000 !important;
    margin: 0 !important;
    padding: 0 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  .no-print {
    display: none !important;
  }
  .print-screen {
    background: transparent !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .print-container {
    max-width: 100% !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    gap: 0 !important;
    space-y: 0 !important;
  }
  .a4-page {
    box-shadow: none !important;
    border: none !important;
    max-width: 100% !important;
    width: 100% !important;
    height: 278mm !important;
    max-height: 278mm !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden !important;
    box-sizing: border-box !important;
  }
  .page-1 {
    page-break-after: always !important;
    break-after: page !important;
  }
  .page-2 {
    page-break-after: avoid !important;
    break-after: avoid !important;
  }
}
</style>
