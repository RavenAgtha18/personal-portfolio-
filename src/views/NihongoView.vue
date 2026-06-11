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
          <Languages class="w-4 h-4 text-amber-400" />
          <span
            class="text-xs text-amber-300 font-semibold tracking-wider uppercase font-mono"
            >Localization Case Study</span
          >
        </div>
        <h1
          class="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8"
        >
          Nihongo-App –
          <span class="gradient-text">Language Localization</span>
          <br class="hidden lg:inline" />
          &amp; JFT-Basic A2 Speed-Run Drill Engine
        </h1>

        <div
          class="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl glass mt-8"
        >
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >Role &amp; Positioning</span
            >
            <span class="text-sm font-semibold text-amber-300"
              >Full-stack Developer / Bridge SE</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Domain Focus</span>
            <span class="text-sm font-semibold text-white"
              >EdTech / Localization / CBT Drills</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1"
              >Core Tech Stack</span
            >
            <span class="text-sm font-semibold text-white"
              >Laravel REST API + Vue 3 SPA</span
            >
          </div>
          <div>
            <span class="text-xs text-gray-400 block mb-1">Key Impact</span>
            <span class="text-sm font-semibold text-green-400"
              >Optimized SRS &amp; Exam Readiness</span
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
                <strong>Nihongo-App</strong> is a specialized localization and
                exam preparation platform designed to accelerate Japanese
                language acquisition up to the JFT-Basic A2 certification
                standard. By coupling multi-script dictionary database indexing
                with an interactive Computer Based Test (CBT) simulator, the app
                helps prospective workers master vocabulary, kanji, and grammar
                patterns efficiently.
              </p>
              <p>
                The platform utilizes a customized
                <strong>Spaced Repetition System (SRS)</strong> that dynamically
                prioritizes words with high mistake rates, tracking user recall
                logs directly at the database layer. This ensures that difficult
                concepts are automatically rescheduled for review, cutting exam
                preparation times significantly.
              </p>
              <p>
                Through precise database schema design supporting full Japanese
                multi-script collations, Nihongo-App ensures data consistency
                across Kanji, Hiragana, Katakana, and Romaji scripts, delivering
                rapid data loads and a native exam-grade experience.
              </p>
            </div>

            <!-- Highlight Stat -->
            <div
              class="mt-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6 flex items-center justify-between"
            >
              <div>
                <span
                  class="text-xs text-amber-400 block font-mono uppercase tracking-wider"
                  >Metrics Achieved</span
                >
                <h3 class="text-xl font-bold text-white mt-1">
                  Study Speed &amp; Accuracy
                </h3>
              </div>
              <div class="text-right">
                <span class="text-3xl md:text-4xl font-extrabold text-amber-400"
                  >40%</span
                >
                <span class="text-xs text-gray-400 block"
                  >Faster vocab retention rate</span
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
              Technical &amp; Localization Challenges
            </h2>

            <div class="space-y-6">
              <!-- Challenge 1 -->
              <div
                class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400"
                >
                  <Languages class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">
                    Multi-Script Indexing Performance
                  </h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Querying dictionary elements across fluid combinations of
                    Kanji, Hiragana, Katakana, and Romaji can result in slow
                    full-table scans. Nihongo-App structures its tables with
                    separate indexed columns for each script, enforcing
                    <code class="text-amber-300">utf8mb4_unicode_ci</code>
                    collations to enable exact and wildcard search matches
                    without query bottlenecks.
                  </p>
                </div>
              </div>

              <!-- Challenge 2 -->
              <div
                class="flex gap-4 p-4 rounded-xl bg-amber-950/10 border border-amber-500/10"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400"
                >
                  <Brain class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">
                    Spaced Repetition &amp; Mistake-Weight Tracking
                  </h4>
                  <p class="text-sm text-gray-400 leading-relaxed">
                    Calculating recall intervals dynamically requires tracking
                    error rates per user and word. Instead of performing
                    expensive subquery calculations for every quiz, the
                    application logs accumulated mistakes directly inside a
                    progress tracker table (<code class="text-amber-300"
                      >learning_progress</code
                    >), updating review intervals during transaction commits.
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
              Database Schema &amp; Character Collations
            </h2>
            <p class="text-gray-300 mb-6 font-medium">
              Because Japanese vocabulary involves Kanji logographs and phonetic
              Kana, all text columns are configured with the
              <code class="text-amber-400">utf8mb4_unicode_ci</code> character
              set to prevent encoding truncation or corruption.
            </p>

            <!-- Table 1: vocabularies -->
            <div
              class="mb-6 rounded-xl glass border border-white/10 overflow-hidden"
            >
              <div
                class="bg-white/5 px-4 py-2.5 font-mono text-xs font-bold text-white border-b border-white/10 flex justify-between"
              >
                <span>1. Table: vocabularies</span>
                <span class="text-amber-400">Multi-Script Dictionary</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left font-mono text-xs">
                  <thead>
                    <tr
                      class="bg-black/35 text-gray-400 border-b border-white/5"
                    >
                      <th class="px-4 py-2">Column</th>
                      <th class="px-4 py-2">Type</th>
                      <th class="px-4 py-2">Collation</th>
                      <th class="px-4 py-2">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-amber-300">id</td>
                      <td class="px-4 py-2 text-gray-400">BIGINT(20)</td>
                      <td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td>
                      <td class="px-4 py-2 text-gray-400">
                        Primary key identifier.
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">kanji</td>
                      <td class="px-4 py-2 text-gray-400">VARCHAR(255)</td>
                      <td class="px-4 py-2 text-amber-300">
                        utf8mb4_unicode_ci
                      </td>
                      <td class="px-4 py-2 text-gray-400">
                        Kanji script representation (e.g. 電話).
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">kana</td>
                      <td class="px-4 py-2 text-gray-400">VARCHAR(255)</td>
                      <td class="px-4 py-2 text-amber-300">
                        utf8mb4_unicode_ci
                      </td>
                      <td class="px-4 py-2 text-gray-400">
                        Phonetic Hiragana/Katakana (e.g. でんわ).
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">romaji</td>
                      <td class="px-4 py-2 text-gray-400">VARCHAR(255)</td>
                      <td class="px-4 py-2 text-gray-500">latin1_swedish_ci</td>
                      <td class="px-4 py-2 text-gray-400">
                        Latin script alphabet reading (e.g. denwa).
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 text-white">meaning</td>
                      <td class="px-4 py-2 text-gray-400">VARCHAR(255)</td>
                      <td class="px-4 py-2 text-amber-300">
                        utf8mb4_unicode_ci
                      </td>
                      <td class="px-4 py-2 text-gray-400">
                        Indonesian equivalent translation.
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
                <span>2. Table: learning_progress</span>
                <span class="text-amber-400"
                  >SRS Mistake Tracker &amp; Schedule</span
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
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-amber-300">id</td>
                      <td class="px-4 py-2 text-gray-400">BIGINT(20)</td>
                      <td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td>
                      <td class="px-4 py-2 text-gray-400">
                        Unique log identifier.
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">user_id</td>
                      <td class="px-4 py-2 text-gray-400">BIGINT(20)</td>
                      <td class="px-4 py-2 text-red-400">MUL (FK users.id)</td>
                      <td class="px-4 py-2 text-gray-400">
                        Links progress to specific student.
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">vocabulary_id</td>
                      <td class="px-4 py-2 text-gray-400">BIGINT(20)</td>
                      <td class="px-4 py-2 text-red-400">MUL (FK vocab.id)</td>
                      <td class="px-4 py-2 text-gray-400">
                        Links to vocabulary row.
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">box_number</td>
                      <td class="px-4 py-2 text-gray-400">INT</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        SRS Box levels 1 (frequent) to 5 (known).
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">error_count</td>
                      <td class="px-4 py-2 text-gray-400">INT</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        Weight counter storing mistake logs.
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 text-white">next_review_at</td>
                      <td class="px-4 py-2 text-gray-400">TIMESTAMP</td>
                      <td class="px-4 py-2 text-amber-400">INDEX</td>
                      <td class="px-4 py-2 text-gray-400">
                        Calculated review date based on SRS logic.
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
                <span>3. Table: drill_logs</span>
                <span class="text-amber-400">Telemetry History Logs</span>
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
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-amber-300">id</td>
                      <td class="px-4 py-2 text-gray-400">BIGINT(20)</td>
                      <td class="px-4 py-2 text-gray-500">PRI AUTO_INC</td>
                      <td class="px-4 py-2 text-gray-400">Unique log ID.</td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">user_id</td>
                      <td class="px-4 py-2 text-gray-400">BIGINT(20)</td>
                      <td class="px-4 py-2 text-gray-500">MUL</td>
                      <td class="px-4 py-2 text-gray-400">
                        Student FK reference.
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">is_correct</td>
                      <td class="px-4 py-2 text-gray-400">TINYINT(1)</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        Whether student answered correctly (1/0).
                      </td>
                    </tr>
                    <tr class="border-b border-white/5">
                      <td class="px-4 py-2 text-white">response_time_ms</td>
                      <td class="px-4 py-2 text-gray-400">INT</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        Student answer speed in milliseconds.
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2 text-white">created_at</td>
                      <td class="px-4 py-2 text-gray-400">TIMESTAMP</td>
                      <td class="px-4 py-2 text-gray-500">--</td>
                      <td class="px-4 py-2 text-gray-400">
                        Date and time stamp of response event.
                      </td>
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
                Interactive JFT-Basic A2 CBT Simulator
              </h2>
              <p class="text-gray-300">
                Test the computer-based vocabulary training simulator. Answer
                the questions based on the A2 requirements. Observe the reactive
                score trackers, correct streaks, and how items get flagged with
                errors to be re-introduced.
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
                      >Score:</span
                    >
                    <strong class="text-sm font-mono text-white"
                      >{{ score }} XP</strong
                    >
                  </div>
                  <div class="flex items-center gap-1.5">
                    <Flame class="w-4 h-4 text-orange-500" />
                    <span class="text-xs font-mono text-gray-400 uppercase"
                      >Streak:</span
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
                  <span>Reset Quiz</span>
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
                  {{ quizQuestionsData.length }}
                </div>

                <div class="space-y-4">
                  <span
                    class="text-[10px] text-amber-400 font-mono uppercase tracking-wider block"
                    >Context: JFT-Basic A2 Drill</span
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
                    🔊 Simulating audio reading: "{{
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
                        ? "Correct Response! +10 XP"
                        : "Incorrect Choice!"
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
                      isLastQuestion ? "View Summary Results" : "Next Question"
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
                  Drill Session Completed!
                </h3>
                <p class="text-xs text-gray-400 max-w-sm mx-auto">
                  You scored
                  <span class="text-amber-400 font-bold font-mono"
                    >{{ score }} XP</span
                  >
                  with a peak streak of
                  <span class="text-orange-400 font-bold font-mono">{{
                    peakStreak
                  }}</span>
                  answers.
                </p>
                <div class="flex justify-center gap-3">
                  <button
                    @click="resetQuizSimulator"
                    class="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/20 rounded-lg text-xs text-white transition-colors"
                  >
                    Re-Run Drills
                  </button>
                </div>
              </div>
            </div>

            <!-- SPACED REPETITION DATABASE COMMIT LOGS -->
            <div class="p-6 rounded-2xl glass border border-white/10">
              <h3
                class="text-sm font-bold text-white mb-4 uppercase tracking-wider font-mono flex items-center gap-2"
              >
                <Database class="w-4 h-4 text-amber-500" /> Live Spaced
                Repetition Telemetry Log
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
                      <th class="p-3">SRS id</th>
                      <th class="p-3">Kanji/Kana</th>
                      <th class="p-3">Romaji Reading</th>
                      <th class="p-3">Errors</th>
                      <th class="p-3">SRS Box</th>
                      <th class="p-3">Next Review In</th>
                      <th class="p-3">Collation Col</th>
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
                      <td class="p-3 text-gray-400">{{ word.nextReview }}</td>
                      <td class="p-3 text-gray-500">utf8mb4_unicode_ci</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-[10px] text-gray-500 mt-2 font-mono">
                * Note: When users answer incorrectly, the system updates the
                `error_count` and demotes the word to Box 1, scheduling it for
                instant re-drills.
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
              <Sparkles class="w-5 h-5 text-amber-400" /> Key Features
            </h3>

            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">
                    Multi-Script Encoding
                  </h4>
                  <p class="text-xs text-gray-400 mt-0.5">
                    Full support for double-byte characters preventing data
                    truncation during Japanese string manipulation.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">
                    Mistake Weighting Engine
                  </h4>
                  <p class="text-xs text-gray-400 mt-0.5">
                    Logically schedules high-error words for review frequency
                    increase to eliminate memory gaps.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 class="text-sm font-semibold text-white">
                    CBT Exam Telemetry
                  </h4>
                  <p class="text-xs text-gray-400 mt-0.5">
                    Tracks response metrics, streak achievements, and logs score
                    events in real-time.
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
                <span class="text-white font-mono">Laravel 10 / PHP 8.2</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Frontend Client</span>
                <span class="text-white font-mono">Vue 3 / Axios / Pinia</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Database Layer</span>
                <span class="text-white font-mono">MySQL / InnoDB</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Character Set</span>
                <span class="text-white font-mono">utf8mb4_unicode_ci</span>
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

// Mock JFT-Basic A2 Exam Questions Data
const quizQuestionsData = [
  {
    prompt: 'Apa hiragana dari Kanji "電話"?',
    reading: "でんわ",
    options: [
      "でんしゃ (Kereta)",
      "でんわ (Telepon)",
      "とけい (Jam)",
      "えき (Stasiun)",
    ],
    correct: 1,
    explanation:
      'Kanji "電話" dibaca "でんわ" (denwa) yang berarti Telepon. "でんしゃ" adalah kereta.',
    srsWordId: 1,
  },
  {
    prompt: "Pilih partikel yang tepat: 私は日本___行きたいです。",
    reading: "に",
    options: ["に (ke/di)", "を (objek)", "で (dengan/di)", "が (subjek)"],
    correct: 0,
    explanation:
      'Partikel "に" (ni) digunakan untuk menunjukkan arah pergerakan atau tujuan. "日本に行きたいです" berarti Ingin pergi ke Jepang.',
    srsWordId: 2,
  },
  {
    prompt: 'Apa arti dari ungkapan "すみません"?',
    reading: "sumimasen",
    options: [
      "Selamat pagi",
      "Terima kasih",
      "Maaf / Permisi",
      "Selamat tinggal",
    ],
    correct: 2,
    explanation:
      '"すみません" (sumimasen) digunakan untuk meminta maaf atau permisi saat memanggil seseorang.',
    srsWordId: 3,
  },
  {
    prompt: 'Pilih Kanji dari kata "たべる" (makan):',
    reading: "食べる",
    options: [
      "飲む (Minum)",
      "見る (Melihat)",
      "行く (Pergi)",
      "食べる (Makan)",
    ],
    correct: 3,
    explanation:
      'Kanji "食べる" dibaca "たべる" (taberu) yang memiliki arti makan.',
    srsWordId: 4,
  },
];

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
  return quizQuestionsData[currentQuestionIndex.value];
});

const isLastQuestion = computed(() => {
  return currentQuestionIndex.value === quizQuestionsData.length - 1;
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
      nextReview: "In 4 days",
    },
    {
      id: 2,
      japanese: "日本に行きます",
      romaji: "nihon ni ikimasu",
      errors: 0,
      box: 2,
      nextReview: "In 2 days",
    },
    {
      id: 3,
      japanese: "すみません",
      romaji: "sumimasen",
      errors: 0,
      box: 4,
      nextReview: "In 8 days",
    },
    {
      id: 4,
      japanese: "食べる (たべる)",
      romaji: "taberu",
      errors: 0,
      box: 3,
      nextReview: "In 4 days",
    },
  ],
);

const playMockAudio = () => {
  audioPlaying.value = true;
  setTimeout(() => {
    audioPlaying.value = false;
  }, 1800);
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
      srsRecord.nextReview = getIntervalText(srsRecord.box);
    }
    saveQuizState();
  } else {
    streak.value = 0;

    // Demote SRS Box to Box 1 & record error
    if (srsRecord) {
      srsRecord.errors++;
      srsRecord.box = 1;
      srsRecord.nextReview = "In 4 hours (Immediate)";
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

const getIntervalText = (box) => {
  const intervals = {
    1: "In 4 hours",
    2: "In 1 day",
    3: "In 4 days",
    4: "In 8 days",
    5: "In 16 days",
  };
  return intervals[box] || "In 4 hours";
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
      nextReview: "In 4 days",
    },
    {
      id: 2,
      japanese: "日本に行きます",
      romaji: "nihon ni ikimasu",
      errors: 0,
      box: 2,
      nextReview: "In 2 days",
    },
    {
      id: 3,
      japanese: "すみません",
      romaji: "sumimasen",
      errors: 0,
      box: 4,
      nextReview: "In 8 days",
    },
    {
      id: 4,
      japanese: "食べる (たべる)",
      romaji: "taberu",
      errors: 0,
      box: 3,
      nextReview: "In 4 days",
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
