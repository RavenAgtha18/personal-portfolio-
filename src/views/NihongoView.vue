<template>
  <div class="relative min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
    <!-- Background Accents -->
    <div class="fixed inset-0 -z-10 gradient-mesh opacity-70"></div>
    <div class="fixed inset-0 -z-10 grid-pattern opacity-30"></div>

    <!-- Top Nav / Back Button -->
    <div class="max-w-7xl mx-auto mb-8 sm:mb-10" data-aos="fade-down">
      <router-link
        to="/work"
        class="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors group text-sm font-medium"
      >
        <ArrowLeft
          class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
        />
        <span>{{ t.backToWork }}</span>
      </router-link>
    </div>

    <!-- Main Container -->
    <article class="max-w-6xl mx-auto">
      <!-- HERO HEADER -->
      <header class="mb-12 sm:mb-16 text-center md:text-left" data-aos="fade-up">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-amber mb-5 sm:mb-6"
        >
          <Languages class="w-4 h-4 text-amber-400" />
          <span
            class="text-xs text-amber-300 font-semibold tracking-wider uppercase font-mono"
            >{{ t.badge }}</span
          >
        </div>
        <h1
          class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 sm:mb-8"
        >
          {{ t.hero.titlePrefix }}
          <span class="gradient-text">{{ t.hero.titleHighlight }}</span>
          <br class="hidden lg:inline" />
          {{ t.hero.titleSuffix }}
        </h1>

        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl glass mt-6 sm:mt-8"
        >
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >{{ t.hero.roleLabel }}</span
            >
            <span class="text-sm font-semibold text-amber-300"
              >{{ t.hero.roleValue }}</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">{{ t.hero.domainLabel }}</span>
            <span class="text-sm font-semibold text-white"
              >{{ t.hero.domainValue }}</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >{{ t.hero.stackLabel }}</span
            >
            <span class="text-sm font-semibold text-white"
              >{{ t.hero.stackValue }}</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">{{ t.hero.impactLabel }}</span>
            <span class="text-sm font-semibold text-green-400"
              >{{ t.hero.impactValue }}</span
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
              {{ t.exec.title }}
            </h2>
            <div class="space-y-4 text-gray-300 leading-relaxed text-base">
              <p>{{ t.exec.p1 }}</p>
              <p>{{ t.exec.p2 }}</p>
              <p>{{ t.exec.p3 }}</p>
            </div>

            <!-- Highlight Stat -->
            <div
              class="mt-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6 flex items-center justify-between"
            >
              <div>
                <span
                  class="text-xs text-amber-400 block font-mono uppercase tracking-wider"
                  >{{ t.exec.statFocus }}</span
                >
                <h3 class="text-xl font-bold text-white mt-1">
                  {{ t.exec.statTitle }}
                </h3>
              </div>
              <div class="text-right">
                <span class="text-2xl md:text-3xl font-extrabold text-amber-400"
                  >{{ t.exec.statHighlight }}</span
                >
                <span class="text-xs text-gray-400 block"
                  >{{ t.exec.statDesc }}</span
                >
              </div>
            </div>
          </section>

          <!-- SECTION 2: TECHNICAL & LOCALIZATION CHALLENGES SOLVED -->
          <section
            id="technical-challenges"
            class="scroll-mt-24"
            data-aos="fade-up"
          >
            <h2
              class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3"
            >
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              {{ t.problems.title }}
            </h2>

            <div class="space-y-6">
              <div
                v-for="(item, idx) in t.problems.items"
                :key="idx"
                class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400"
                >
                  <component :is="idx === 0 ? Languages : Brain" class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">
                    {{ item.title }}
                  </h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 3: DATABASE SCHEMA & MAPPING -->
          <section id="database-schema" class="scroll-mt-24" data-aos="fade-up">
            <h2
              class="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-3"
            >
              <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
              {{ t.schema.title }}
            </h2>
            <p class="text-gray-300 mb-6 font-medium">
              {{ t.schema.intro }}
            </p>

            <!-- Table 1: vocabularies -->
            <div
              class="mb-6 rounded-xl glass border border-white/10 overflow-hidden"
            >
              <div
                class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between"
              >
                <span>{{ t.schema.table1Title }}</span>
                <span class="text-amber-400">{{ t.schema.table1Tag }}</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr
                      class="bg-black/35 text-gray-400 border-b border-white/5"
                    >
                      <th class="px-4 py-2">Column</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Collation / Key</th>
                      <th class="px-4 py-2">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="col in t.schema.table1Cols"
                      :key="col.name"
                      class="border-b border-white/5"
                    >
                      <td class="px-4 py-2 text-amber-300 font-medium">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2" :class="col.key === 'utf8mb4_unicode_ci' ? 'text-amber-300' : 'text-gray-500'">
                        {{ col.key }}
                      </td>
                      <td class="px-4 py-2 text-gray-400">
                        {{ col.purpose }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 2: learning_progress -->
            <div
              class="mb-6 rounded-xl glass border border-white/10 overflow-hidden"
            >
              <div
                class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between"
              >
                <span>{{ t.schema.table2Title }}</span>
                <span class="text-amber-400"
                  >{{ t.schema.table2Tag }}</span
                >
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr
                      class="bg-black/35 text-gray-400 border-b border-white/5"
                    >
                      <th class="px-4 py-2">Column</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Key / Index</th>
                      <th class="px-4 py-2">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="col in t.schema.table2Cols"
                      :key="col.name"
                      class="border-b border-white/5"
                    >
                      <td class="px-4 py-2 text-amber-300 font-medium">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2" :class="col.key.includes('FK') ? 'text-red-400' : col.key === 'INDEX' ? 'text-amber-400' : 'text-gray-500'">
                        {{ col.key }}
                      </td>
                      <td class="px-4 py-2 text-gray-400">
                        {{ col.purpose }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Table 3: drill_logs -->
            <div
              class="mb-6 rounded-xl glass border border-white/10 overflow-hidden"
            >
              <div
                class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between"
              >
                <span>{{ t.schema.table3Title }}</span>
                <span class="text-amber-400">{{ t.schema.table3Tag }}</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr
                      class="bg-black/35 text-gray-400 border-b border-white/5"
                    >
                      <th class="px-4 py-2">Column</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Key</th>
                      <th class="px-4 py-2">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="col in t.schema.table3Cols"
                      :key="col.name"
                      class="border-b border-white/5"
                    >
                      <td class="px-4 py-2 text-amber-300 font-medium">{{ col.name }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.type }}</td>
                      <td class="px-4 py-2 text-gray-500">{{ col.key }}</td>
                      <td class="px-4 py-2 text-gray-400">{{ col.purpose }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- SECTION 4: INTERACTIVE JFT-BASIC A2 DRILL SIMULATOR -->
          <section
            id="simulator"
            class="scroll-mt-24 space-y-8"
            data-aos="fade-up"
          >
            <div>
              <h2
                class="text-2xl font-bold mb-4 flex items-center gap-2 text-white border-b border-white/10 pb-3"
              >
                <span class="w-1.5 h-6 bg-amber-500 rounded"></span>
                {{ t.sim.title }}
              </h2>
              <p class="text-gray-300">
                {{ t.sim.desc }}
              </p>
            </div>

            <!-- Quiz Layout Controller -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <!-- Telemetry Header -->
              <div
                class="flex justify-between items-center mb-6 border-b border-white/5 pb-4"
              >
                <div class="flex items-center gap-6">
                  <div class="flex items-center gap-1.5">
                    <Trophy class="w-4 h-4 text-amber-400" />
                    <span class="text-xs font-mono text-gray-400 uppercase"
                      >{{ t.sim.scoreLabel }}</span
                    >
                    <strong class="text-sm font-mono text-white"
                      >{{ score }} XP</strong
                    >
                  </div>
                  <div class="flex items-center gap-1.5">
                    <Flame class="w-4 h-4 text-orange-500" />
                    <span class="text-xs font-mono text-gray-400 uppercase"
                      >{{ t.sim.streakLabel }}</span
                    >
                    <strong class="text-sm font-mono text-orange-400"
                      >{{ streak }} 🔥</strong
                    >
                  </div>
                </div>

                <button
                  @click="resetQuizSimulator"
                  class="text-amber-400 hover:text-amber-300 text-xs font-mono flex items-center gap-1"
                >
                  <RefreshCw class="w-3.5 h-3.5" />
                  <span>{{ t.sim.btnReset }}</span>
                </button>
              </div>

              <!-- Question Display Screen -->
              <div
                v-if="!quizComplete"
                class="bg-[#0c0c0c] border border-white/5 p-6 rounded-xl mb-6 relative overflow-hidden"
              >
                <div
                  class="absolute top-2 right-2 text-[10px] font-mono text-gray-500"
                >
                  Question {{ currentQuestionIndex + 1 }} /
                  {{ quizQuestions.length }}
                </div>

                <div class="space-y-4">
                  <span
                    class="text-[10px] text-amber-400 font-mono uppercase tracking-wider block"
                    >{{ t.sim.context }}</span
                  >

                  <div class="flex items-center gap-3">
                    <h3
                      class="text-2xl font-bold text-white tracking-wide leading-relaxed"
                    >
                      {{ currentQuestion.prompt }}
                    </h3>
                    <button
                      @click="playMockAudio"
                      class="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-amber-400 transition-all"
                      title="Listen Audio"
                    >
                      <Volume2 class="w-4 h-4" />
                    </button>
                  </div>

                  <p
                    v-if="audioPlaying"
                    class="text-[10px] text-amber-500/80 italic font-mono animate-pulse"
                  >
                    🔊 {{ t.sim.simAudio }} "{{
                      currentQuestion.reading || currentQuestion.prompt
                    }}"
                  </p>
                </div>
              </div>

              <!-- Options Selection Grid -->
              <div
                v-if="!quizComplete"
                class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
              >
                <button
                  v-for="(option, idx) in currentQuestion.options"
                  :key="idx"
                  @click="submitAnswer(idx)"
                  :disabled="answered"
                  :class="[
                    'p-4 rounded-xl text-left text-xs font-medium border transition-all flex justify-between items-center',
                    getOptionClass(idx),
                  ]"
                >
                  <span class="font-mono text-sm">{{ option }}</span>
                  <component
                    :is="getOptionIcon(idx)"
                    v-if="
                      answered &&
                      (idx === currentQuestion.correct ||
                        idx === selectedAnswerIndex)
                    "
                    class="w-4 h-4"
                  />
                </button>
              </div>

              <!-- Feedback Alerts -->
              <div
                v-if="answered && !quizComplete"
                class="space-y-4 animate-fade-in"
              >
                <div
                  class="p-4 rounded-xl text-xs font-mono border flex items-center gap-3"
                  :class="
                    isCorrect
                      ? 'bg-green-500/10 border-green-500/20 text-green-400'
                      : 'bg-red-500/10 border-red-500/20 text-red-400'
                  "
                >
                  <CheckCircle2
                    v-if="isCorrect"
                    class="w-5 h-5 flex-shrink-0"
                  />
                  <XCircle v-else class="w-5 h-5 flex-shrink-0" />
                  <div>
                    <strong class="block font-bold">{{
                      isCorrect
                        ? t.sim.correctFeedback
                        : t.sim.incorrectFeedback
                    }}</strong>
                    <span>{{ currentQuestion.explanation }}</span>
                  </div>
                </div>

                <div class="flex justify-end">
                  <button
                    @click="nextQuestion"
                    class="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-lg text-xs transition-all flex items-center gap-1.5"
                  >
                    <span>{{
                      isLastQuestion ? t.sim.btnSummary : t.sim.btnNext
                    }}</span>
                    <ArrowRight class="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <!-- Quiz Complete State -->
              <div
                v-if="quizComplete"
                class="bg-[#0e0e0e] border border-white/5 p-6 rounded-xl text-center space-y-4 animate-fade-in"
              >
                <Trophy class="w-12 h-12 text-amber-400 mx-auto" />
                <h3
                  class="text-base font-bold text-white uppercase tracking-wider"
                >
                  {{ t.sim.completedTitle }}
                </h3>
                <p class="text-xs text-gray-400 max-w-sm mx-auto">
                  {{ t.sim.completedSummary }}
                  <span class="text-amber-400 font-bold font-mono"
                    >{{ score }} XP</span
                  >
                  {{ t.sim.completedWithPeak }}
                  <span class="text-orange-400 font-bold font-mono">{{
                    peakStreak
                  }}</span>
                  {{ t.sim.completedAnswers }}
                </p>
                <div class="flex justify-center gap-3">
                  <button
                    @click="resetQuizSimulator"
                    class="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/20 rounded-lg text-xs text-white transition-colors"
                  >
                    {{ t.sim.btnRerun }}
                  </button>
                </div>
              </div>
            </div>

            <!-- SPACED REPETITION DATABASE COMMIT LOGS -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <h3
                class="text-sm font-bold text-white mb-4 uppercase tracking-wider font-mono flex items-center gap-2"
              >
                <Database class="w-4 h-4 text-amber-500" /> {{ t.sim.srsLogsTitle }}
              </h3>

              <div
                class="overflow-x-auto rounded-xl bg-[#0e0e0e] border border-white/5"
              >
                <table
                  class="w-full text-left border-collapse text-[11px] font-mono"
                >
                  <thead>
                    <tr
                      class="bg-white/5 text-gray-400 border-b border-white/5"
                    >
                      <th class="p-3">{{ t.sim.thId }}</th>
                      <th class="p-3">{{ t.sim.thJapanese }}</th>
                      <th class="p-3">{{ t.sim.thRomaji }}</th>
                      <th class="p-3">{{ t.sim.thErrors }}</th>
                      <th class="p-3">{{ t.sim.thBox }}</th>
                      <th class="p-3">{{ t.sim.thNext }}</th>
                      <th class="p-3">{{ t.sim.thCollation }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="word in srsLogData"
                      :key="word.id"
                      class="border-b border-white/5 text-gray-300 hover:bg-white/5 transition-colors"
                    >
                      <td class="p-3 text-amber-500 font-bold">
                        #SRS-0{{ word.id }}
                      </td>
                      <td class="p-3 text-white font-bold">
                        {{ word.japanese }}
                      </td>
                      <td class="p-3 text-gray-400">{{ word.romaji }}</td>
                      <td class="p-3">
                        <span
                          :class="
                            word.errors > 0
                              ? 'text-red-400 font-bold'
                              : 'text-gray-500'
                          "
                        >
                          {{ word.errors }}
                        </span>
                      </td>
                      <td class="p-3">
                        <span
                          class="px-2 py-0.5 rounded-full text-[9px] font-bold"
                          :class="getBoxClass(word.box)"
                        >
                          Box {{ word.box }}
                        </span>
                      </td>
                      <td class="p-3 text-gray-400">{{ localizedNextReview(word) }}</td>
                      <td class="p-3 text-gray-500">utf8mb4_unicode_ci</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-[10px] text-gray-500 mt-2 font-mono">
                {{ t.sim.srsNote }}
              </p>
            </div>
          </section>
        </div>

        <!-- RIGHT SIDEBAR (1 Column: Insights & Telemetry) -->
        <div class="space-y-8">
          <!-- Key Achievements -->
          <div
            class="p-6 rounded-2xl glass border border-white/10"
            data-aos="fade-left"
          >
            <h3
              class="text-lg font-bold text-white mb-6 flex items-center gap-2"
            >
              <Sparkles class="w-5 h-5 text-amber-400" /> {{ t.features.title }}
            </h3>

            <ul class="space-y-4">
              <li
                v-for="(feat, fIdx) in t.features.items"
                :key="fIdx"
                class="flex items-start gap-3"
              >
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">
                    {{ feat.title }}
                  </h4>
                  <p class="text-xs text-gray-400 mt-0.5">
                    {{ feat.desc }}
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
            <h3 class="text-lg font-bold text-white mb-4">{{ t.features.telemetryTitle }}</h3>

            <div class="space-y-3 text-xs border-b border-white/5 pb-4 mb-4">
              <div class="flex justify-between">
                <span class="text-gray-400">{{ t.features.backend }}</span>
                <span class="text-white font-mono">Laravel 10 / PHP 8.2</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ t.features.frontend }}</span>
                <span class="text-white font-mono">Vue 3 / Axios / Pinia</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ t.features.charset }}</span>
                <span class="text-white font-mono">utf8mb4_unicode_ci</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">{{ t.features.algorithm }}</span>
                <span class="text-white font-mono">Leitner SRS Box 1-5</span>
              </div>
            </div>

            <a
              href="https://github.com/RavenAgtha18"
              target="_blank"
              class="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors flex items-center justify-center gap-2 text-xs font-semibold"
            >
              <Github class="w-4 h-4" />
              <span>{{ t.features.btnGithub }}</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  ArrowLeft,
  Languages,
  Brain,
  Trophy,
  Flame,
  RefreshCw,
  Volume2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Check,
  Github,
  Database,
} from "lucide-vue-next";
import { useLanguage } from "@/composables/useLanguage";
import { nihongoI18n } from "@/locales/caseStudies/nihongo";

const { isJapanese } = useLanguage();
const t = computed(() => (isJapanese.value ? nihongoI18n.ja : nihongoI18n.en));

// LocalStorage Persistence
const STORAGE_KEY = "nihongo_quiz_state";
const loadQuizState = () => {
  try {
    const d = localStorage.getItem(STORAGE_KEY);
    return d ? JSON.parse(d) : null;
  } catch (e) {
    return null;
  }
};
const saveQuizState = () => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        score: score.value,
        streak: streak.value,
        peakStreak: peakStreak.value,
        currentIdx: currentQuestionIndex.value,
        srsLog: srsLogData.value,
      }),
    );
  } catch (e) {
    /* quota exceeded */
  }
};

const persistedQuiz = loadQuizState();

// Dual-Language JFT-Basic A2 Exam Questions Data
const quizQuestionsData = [
  {
    reading: "でんわ",
    promptEn: 'What is the Hiragana reading for the Kanji "電話"?',
    promptJa: '漢字「電話」の正しい読み（ひらがな）はどれですか？',
    optionsEn: [
      "でんしゃ (Train)",
      "でんわ (Telephone)",
      "とけい (Clock)",
      "えき (Station)",
    ],
    optionsJa: [
      "でんしゃ (電車)",
      "でんわ (電話)",
      "とけい (時計)",
      "えき (駅)",
    ],
    correct: 1,
    explanationEn: 'The kanji "電話" is read "でんわ" (denwa) which means telephone. "でんしゃ" means train.',
    explanationJa: '漢字「電話」は「でんわ」と読みます。「でんしゃ」は電車を意味します。',
    srsWordId: 1,
  },
  {
    reading: "に",
    promptEn: "Select the correct particle: 私は日本___行きたいです。",
    promptJa: "適切な助詞を選択してください： 私は日本___行きたいです。",
    optionsEn: ["に (to/direction)", "を (object)", "で (by/at)", "が (subject)"],
    optionsJa: ["に (方向・目的地)", "を (対象)", "で (手段・場所)", "が (主語)"],
    correct: 0,
    explanationEn: 'The particle "に" (ni) is used to indicate destination or direction of travel.',
    explanationJa: '移動の目的地や方向を示す助詞は「に」を使用します。「日本に行きたいです」は日本へ向かう希望を表します。',
    srsWordId: 2,
  },
  {
    reading: "sumimasen",
    promptEn: 'What is the primary meaning of the phrase "すみません"?',
    promptJa: '表現「すみません」の主なニュアンスとして適切なものはどれですか？',
    optionsEn: [
      "Good morning",
      "Thank you very much",
      "Excuse me / I am sorry",
      "Goodbye",
    ],
    optionsJa: [
      "おはようございます (挨拶)",
      "ありがとうございます (感謝)",
      "謝罪 / 呼びかけの合図",
      "さようなら (別れ)",
    ],
    correct: 2,
    explanationEn: '"すみません" (sumimasen) is used to apologize or get someone\'s attention ("Excuse me").',
    explanationJa: '「すみません」は謝罪の意を表すほか、店員や他者に声をかける際の「失礼します」としても広く使用されます。',
    srsWordId: 3,
  },
  {
    reading: "食べる",
    promptEn: 'Select the Kanji corresponding to "たべる" (to eat):',
    promptJa: '動詞「たべる（食べる）」に対応する漢字を選択してください：',
    optionsEn: [
      "飲む (To drink)",
      "見る (To see)",
      "行く (To go)",
      "食べる (To eat)",
    ],
    optionsJa: [
      "飲む (のむ)",
      "見る (みる)",
      "行く (いく)",
      "食べる (たべる)",
    ],
    correct: 3,
    explanationEn: 'The Kanji "食べる" is read as "たべる" (taberu), meaning to eat.',
    explanationJa: '「食べる」は食事をとることを意味する動詞です。',
    srsWordId: 4,
  },
];

const quizQuestions = computed(() => {
  return quizQuestionsData.map((q) => ({
    prompt: isJapanese.value ? q.promptJa : q.promptEn,
    reading: q.reading,
    options: isJapanese.value ? q.optionsJa : q.optionsEn,
    correct: q.correct,
    explanation: isJapanese.value ? q.explanationJa : q.explanationEn,
    srsWordId: q.srsWordId,
  }));
});

// Simulator state
const currentQuestionIndex = ref(persistedQuiz?.currentIdx || 0);
const score = ref(persistedQuiz?.score || 0);
const streak = ref(persistedQuiz?.streak || 0);
const peakStreak = ref(persistedQuiz?.peakStreak || 0);
const selectedAnswerIndex = ref(null);
const answered = ref(false);
const isCorrect = ref(false);
const quizComplete = ref(false);
const audioPlaying = ref(false);

const currentQuestion = computed(() => {
  return quizQuestions.value[currentQuestionIndex.value];
});

const isLastQuestion = computed(() => {
  return currentQuestionIndex.value === quizQuestions.value.length - 1;
});

// Spaced Repetition DB State Simulation
const srsLogData = ref(
  persistedQuiz?.srsLog || [
    {
      id: 1,
      japanese: "電話 (でんわ)",
      romaji: "denwa",
      errors: 0,
      box: 3,
    },
    {
      id: 2,
      japanese: "日本に行きます",
      romaji: "nihon ni ikimasu",
      errors: 0,
      box: 2,
    },
    {
      id: 3,
      japanese: "すみません",
      romaji: "sumimasen",
      errors: 0,
      box: 4,
    },
    {
      id: 4,
      japanese: "食べる (たべる)",
      romaji: "taberu",
      errors: 0,
      box: 3,
    },
  ],
);

const playMockAudio = () => {
  audioPlaying.value = true;
  setTimeout(() => {
    audioPlaying.value = false;
  }, 1800);
};

const getIntervalText = (box) => {
  if (isJapanese.value) {
    const intervals = {
      1: "4時間後（即時復習）",
      2: "1日後",
      3: "4日後",
      4: "8日後",
      5: "16日後（定着）",
    };
    return intervals[box] || "4時間後";
  }
  const intervals = {
    1: "In 4 hours",
    2: "In 1 day",
    3: "In 4 days",
    4: "In 8 days",
    5: "In 16 days",
  };
  return intervals[box] || "In 4 hours";
};

const localizedNextReview = (word) => {
  return getIntervalText(word.box);
};

const submitAnswer = (idx) => {
  if (answered.value) return;

  selectedAnswerIndex.value = idx;
  answered.value = true;

  const correctIdx = currentQuestion.value.correct;
  isCorrect.value = idx === correctIdx;

  const currentWordId = currentQuestion.value.srsWordId;
  const srsRecord = srsLogData.value.find((w) => w.id === currentWordId);

  if (isCorrect.value) {
    score.value += 10;
    streak.value++;
    if (streak.value > peakStreak.value) {
      peakStreak.value = streak.value;
    }

    // Promote SRS Box
    if (srsRecord && srsRecord.box < 5) {
      srsRecord.box++;
    }
    saveQuizState();
  } else {
    streak.value = 0;

    // Demote SRS Box to Box 1 & record error
    if (srsRecord) {
      srsRecord.errors++;
      srsRecord.box = 1;
    }
    saveQuizState();
  }
};

const nextQuestion = () => {
  if (isLastQuestion.value) {
    quizComplete.value = true;
    answered.value = false;
  } else {
    currentQuestionIndex.value++;
    answered.value = false;
    selectedAnswerIndex.value = null;
  }
};

const getOptionClass = (idx) => {
  if (!answered.value) {
    return "bg-white/5 border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5 text-gray-300";
  }

  const correctIdx = currentQuestion.value.correct;
  if (idx === correctIdx) {
    return "bg-green-500/10 border-green-500/40 text-green-400 font-semibold";
  }
  if (idx === selectedAnswerIndex.value) {
    return "bg-red-500/10 border-red-500/40 text-red-400";
  }
  return "bg-white/5 border-white/5 text-gray-500 opacity-60";
};

const getOptionIcon = (idx) => {
  const correctIdx = currentQuestion.value.correct;
  if (idx === correctIdx) return CheckCircle2;
  if (idx === selectedAnswerIndex.value) return XCircle;
  return null;
};

const getBoxClass = (box) => {
  const classes = {
    1: "bg-red-500/10 text-red-400 border border-red-500/20",
    2: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    3: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    4: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    5: "bg-green-500/10 text-green-400 border border-green-500/20",
  };
  return classes[box] || classes[1];
};

const resetQuizSimulator = () => {
  currentQuestionIndex.value = 0;
  score.value = 0;
  streak.value = 0;
  peakStreak.value = 0;
  selectedAnswerIndex.value = null;
  answered.value = false;
  isCorrect.value = false;
  quizComplete.value = false;
  srsLogData.value = [
    {
      id: 1,
      japanese: "電話 (でんわ)",
      romaji: "denwa",
      errors: 0,
      box: 3,
    },
    {
      id: 2,
      japanese: "日本に行きます",
      romaji: "nihon ni ikimasu",
      errors: 0,
      box: 2,
    },
    {
      id: 3,
      japanese: "すみません",
      romaji: "sumimasen",
      errors: 0,
      box: 4,
    },
    {
      id: 4,
      japanese: "食べる (たべる)",
      romaji: "taberu",
      errors: 0,
      box: 3,
    },
  ];
  localStorage.removeItem(STORAGE_KEY);
};
</script>

<style scoped>
/* Gradient meshes and visual patterns */
.gradient-mesh {
  background: radial-gradient(
      at 20% 30%,
      rgba(245, 158, 11, 0.07) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 80%, rgba(217, 119, 6, 0.05) 0px, transparent 50%),
    radial-gradient(at 50% 10%, rgba(251, 191, 36, 0.05) 0px, transparent 50%);
}

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
</style>
