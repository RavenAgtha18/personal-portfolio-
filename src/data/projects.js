/**
 * Single Source of Truth (SSOT) for all portfolio projects.
 *
 * Both HomeView and PortfolioView import from this module.
 * - HomeView displays items where isCaseStudy === true
 * - PortfolioView displays all items and uses `tech` + `category` for analytics
 *
 * Case Study 4-Pillar Schema:
 *   problem       / problemJa       - The operational/business bottleneck
 *   requirements  / requirementsJa  - Stakeholders, floor discovery, technical needs
 *   solution      / solutionJa      - Architecture, stack reasoning, database design
 *   result        / resultJa        - Real measurable impact with quantitative metrics
 */

export const projects = [
  {
    id: 10,
    name: "SnapPack",
    nameJa: "SnapPack 出荷梱包証明システム",
    imageUrl: "snappack",
    status:
      "Digitizing shipping documentation and chain of custody for luxury furniture manufacturing (PT. Harrison And Gil-Java). Eliminates manual photo handoffs, embeds digital signatures, and establishes audit-ready export packing records supporting EUDR traceability standards.",
    statusJa:
      "高級家具製造（PT. Harrison And Gil-Java）における出荷梱包伝票と証跡チェーンのデジタル化。手作業の写真受け渡しを撤廃し、電子サインを組み込み、EUDR（欧州森林破壊防止規則）トレーサビリティ基準に準拠した監査対応の出荷記録を確立。",
    tech: "Laravel, Vue.js, MySQL, Tailwind CSS",
    tags: ["Laravel", "Vue.js", "MySQL", "Supply Chain", "EUDR Traceability", "Digital Signature"],
    tagsJa: ["Laravel", "Vue.js", "MySQL", "サプライチェーン", "EUDRトレーサビリティ", "電子サイン"],
    github: "null",
    demo: "/portfolio/snappack",
    isCaseStudy: true,
    isSimpleShowcase: false,
    category: "Full-stack Manufacturing Systems",
    categoryJa: "製造実行システム (MES)",
    problem:
      "Shipping packaging verification relied on physical camera SD card handoffs transported manually across 5 departments. High risk of damaged or lost memory cards resulted in zero verifiable chain-of-custody for export damage disputes.",
    problemJa:
      "出荷梱包の品質証明写真がSDカードの手渡しに依存し、工場5部門間で紛失・カード破損が頻発。欧米向け高額家具の輸出時に破損クレームが発生しても、出荷時の無傷を証明する確実な証跡がありませんでした。",
    requirements:
      "Eliminate physical media transit; implement direct camera/mobile-to-server batch uploads; enforce digital signature capture on HTML5 canvas with IT staff sign-off; ensure immutable audit logs compliant with EUDR timber traceability.",
    requirementsJa:
      "物理メディアの持ち運び全廃、モバイル・端末からの直接バッチアップロード、HTML5 Canvas電子サインによる荷主・IT承認者の二重署名、EUDR（欧州森林破壊防止規則）に準拠した改ざん不能な証跡の保存。",
    solution:
      "Decoupled Laravue architecture (Laravel REST API + Vue 3 SPA) deployed on floor tablets, featuring Base64 digital signature storage, relational indexed manifests, and automated departmental transfer analytics.",
    solutionJa:
      "現場端末向けLaravueアーキテクチャ（Laravel REST API + Vue 3 SPA）。Base64署名保存、複合インデックス付き転送ログ、部門別転送実績ダッシュボードを自社設計。",
    result:
      "Slashed shipping photo archiving time from 45–60 minutes down to under 3 minutes per export container. Successfully archives 150–200 HD inspection photos per container across 5 departments with 100% elimination of missing photo proof disputes with overseas buyers.",
    resultJa:
      "コンテナ1本あたりの写真保管作業時間を45〜60分から3分未満へ短縮。5部門にわたりコンテナ毎150〜200枚の高解像度写真を確実に管理し、海外バイヤーとの荷傷み責任論争・証拠写真紛失を100%（ゼロ件）防止。",
  },
  {
    id: 0,
    name: "Smart Money Intelligence Dashboard",
    nameJa: "スマートマネー・インテリジェンス",
    imageUrl: "SM",
    status:
      "AI-powered dashboard for IDX stock analysis detecting foreign accumulation patterns with real-time signal recommendations.",
    statusJa:
      "インドネシア証券取引所（IDX）の株式分析向けAIダッシュボード。外国人投資家の買い集めパターンを検知し、リアルタイムで投資シグナルを提供。",
    tech: "Python, Streamlit, Gemini AI, Firebase",
    tags: ["Python", "Streamlit", "Gemini AI", "Firebase", "FinTech"],
    tagsJa: ["Python", "Streamlit", "Gemini AI", "Firebase", "FinTech"],
    github: "https://github.com/RavenAgtha18/Smart-Money-Intelligence",
    demo: "https://huggingface.co/spaces/ravenagtha18/smart-money-tracker",
    isCaseStudy: false,
    isSimpleShowcase: true,
    category: "FinTech Intelligence",
    categoryJa: "FinTech・投資分析",
    problem:
      "Retail equity investors lack real-time visibility into institutional foreign flow accumulation patterns across 800+ IDX tickers, leading to delayed entry and high whipsaw risk.",
    problemJa:
      "個人投資家はインドネシア証券取引所（IDX）800銘柄以上の外国人投資家（スマートマネー）の買い集め動向をリアルタイムで把握できず、売買判断の遅れと損失リスクを抱えていました。",
    requirements:
      "Automated daily EOD transaction ingestion; Net Foreign Flow algorithms; Google Gemini AI synthesis for real-time technical commentary.",
    requirementsJa:
      "日次出来高・売買データの自動取得、外国人純買付（Net Foreign Flow）算出アルゴリズム、Gemini AIによるリアルタイム投資シグナル解説。",
    solution:
      "Python Streamlit reactive engine backed by Firebase Firestore cache and Google Gemini 1.5 Flash API for low-latency sentiment and accumulation clustering.",
    solutionJa:
      "Python StreamlitとFirebase Firestoreを組み合わせ、Gemini 1.5 Flash APIを統合した高速AIデータ分析エンジン。",
    result:
      "Ingests transaction logs across 800+ tickers in under 15 seconds. Delivers foreign accumulation pattern detection with 90%+ directional accuracy for active traders.",
    resultJa:
      "800銘柄以上の取引データを15秒以内に一括集計。外国人買い集めパターンの検出精度90%以上を達成し、意思決定速度を大幅に向上。",
  },
  {
    id: 15,
    name: "ISP Semarang Portal & Financial Tools",
    nameJa: "ISPスマラン投資ポータル & 財務ツール",
    imageUrl: "isp",
    status:
      "Official web platform and financial calculation portal for Komunitas Investor Saham Pemula Semarang (est. 2014). Integrates interactive investment calculators (CAGR, Dividend Yield, DCA simulation), community event tracking, and high-performance SEO architecture.",
    statusJa:
      "スマラン初心者株式投資家コミュニティ（2014年設立）の公式Webプラットフォーム。CAGR、配当利回り、積立シミュレーション等の対話型計算ツールとイベント管理を統合。",
    tech: "Tailwind CSS, JavaScript, HTML5, Financial Tools",
    tags: ["Tailwind CSS", "JavaScript", "HTML5", "FinTech", "SEO"],
    tagsJa: ["Tailwind CSS", "JavaScript", "HTML5", "FinTech", "SEO"],
    github: "https://github.com/RavenAgtha18/ispsemarang.git",
    demo: "https://www.ispsemarang.my.id",
    isCaseStudy: false,
    isSimpleShowcase: true,
    category: "FinTech Intelligence",
    categoryJa: "FinTech・Webツール",
    problem:
      "Community members relied on fragmented spreadsheets for calculating financial metrics (CAGR, Dividend Yield, DCA), causing calculation errors and repetitive community mentor queries.",
    problemJa:
      "初心者投資家コミュニティにおいて、CAGRや配当利回り、積立計算を個別の表計算で行っていたため計算ミスや同一質問へのメンター対応が頻発。",
    requirements:
      "Client-side interactive financial calculation engines; mobile-first responsive UX; community event registration integration.",
    requirementsJa:
      "ブラウザ上で即座に結果が出る対話型財務計算ツール群、モバイル最適化UI、イベント申込連携。",
    solution:
      "Zero-dependency pure JavaScript financial mathematics modules wrapped in modern Tailwind CSS glassmorphic components with dynamic SVG visualizations.",
    solutionJa:
      "外部依存のない純粋なJavaScript計算モジュール群とTailwind CSSによるグラスモーフィズムUI設計。",
    result:
      "Serves 1,200+ active retail investors with sub-50ms calculation response times, reducing recurring beginner calculation queries to community mentors by 40%.",
    resultJa:
      "1,200名超のコミュニティメンバーに50ms未満の即時計算を提供。メンターへの初心者からの初歩的な計算質問を40%削減。",
  },
  {
    id: 1,
    name: "Protrack System",
    nameJa: "Protrack 工程追跡システム",
    imageUrl: "protrack",
    status:
      "Shop-floor production tracking engine developed for PT. Harrison And Gil-Java. Replaces manual paper travelers with barcode route cards and dynamic aging day calculations to detect work-center stagnation before target ship dates slip.",
    statusJa:
      "PT. Harrison And Gil-Java向けに自社開発した製造現場の工程追跡エンジン。紙の工程伝票をバーコード工程カードに置き換え、動的な滞留日数計算により目標出荷日遅延を未然に防止。",
    tech: "Laravel 5, jQuery, Bootstrap 3, DataTables, MySQL",
    tags: ["Laravel 5", "jQuery", "Bootstrap 3", "MySQL", "MES", "Dynamic Aging", "WIP Tracking"],
    tagsJa: ["Laravel 5", "jQuery", "Bootstrap 3", "MySQL", "MES", "滞留日数追跡", "仕掛品WIP"],
    github: "null",
    demo: "/portfolio/protrack",
    isCaseStudy: true,
    isSimpleShowcase: false,
    category: "Full-stack Manufacturing Systems",
    categoryJa: "製造実行システム (MES)",
    problem:
      "Factory management operated in a 'black box' where WIP batch status between machinery and final packaging lagged by 24–48 hours, causing missed shipping targets and undetected station bottlenecks.",
    problemJa:
      "機械加工から完成品梱包までの仕掛品（WIP）状況が紙の工程伝票と週次集計に依存していたため、進捗把握が24〜48時間遅延し、ボトルネックが不可視化されて納期遅延が頻発。",
    requirements:
      "Barcode scanner workstation checkpoints across 8 production departments; sub-second transactional logging; automated Dynamic Aging Day alert engine.",
    requirementsJa:
      "工場8大製造部門へのバーコードスキャナー配備、1秒未満のトランザクション記録、滞留日数を自動算出する動的アラートエンジンの構築。",
    solution:
      "Normalized MySQL schema (route_cards, trans_track) with composite indexing, coupled with a Laravel backend and rugged tablet UI calculating dynamic aging days against current server time.",
    solutionJa:
      "複合インデックス付き正規化MySQL設計（route_cards, trans_track）とLaravelバックエンド。現場タブレット端末と連動し現在時刻との差分から滞留日数を動的算出。",
    result:
      "Slashed WIP reporting latency from 24–48 hours to real-time (< 1s transaction commit). Reduced workstation bottleneck dwell time from 2–3 days down to same-day resolution (< 4 hours) across 8 departments, actively tracking 1,500+ daily route cards handled by 40+ floor operators.",
    resultJa:
      "WIP仕掛品進捗の把握遅延を24〜48時間からリアルタイム（1秒未満）に短縮。動的滞留日数（Aging Days）アラートにより組立工程の停滞を従来の2〜3日から当日中（数時間以内）へ大幅短縮し、8部門40名以上の作業者が1日1,500件超の工程カードを円滑追跡。",
  },
  {
    id: 14,
    name: "Toolin",
    nameJa: "Toolin 治工具・備品貸出管理",
    imageUrl: "toolin",
    status:
      "Factory equipment and tool requisition tracking for PT. Harrison And Gil-Java. Manages asset allocation, multi-tier departmental approvals, employee borrowing logs, and return status tracking.",
    statusJa:
      "PT. Harrison And Gil-Java向けの工場治工具・備品貸出管理システム。資産配分、部門別多段階承認、従業員の持出ログ、返却状況を一元管理。",
    tech: "Laravel 12, Livewire Flux, Filament 3.3, MySQL",
    tags: ["Laravel 12", "Livewire", "Filament 3", "Asset Tracking", "Requisition Workflow"],
    tagsJa: ["Laravel 12", "Livewire", "Filament 3", "資産管理", "承認ワークフロー"],
    github: "null",
    demo: "null",
    isCaseStudy: false,
    isSimpleShowcase: true,
    category: "Full-stack Manufacturing Systems",
    categoryJa: "製造実行システム (MES)",
    problem:
      "Factory equipment, drill bits, and specialized machinery accessories were borrowed informally using paper logbooks, leading to lost tools, unaccounted inventory, and shift startup delays.",
    problemJa:
      "工場の高価な特殊治工具や切削ビットが紙のノートで手書き貸出されていたため、返却漏れや紛失、始業時の工具捜索による作業遅延が日常化。",
    requirements:
      "Digital equipment checkout with employee barcode scanning; multi-tier departmental approval workflow; return condition auditing.",
    requirementsJa:
      "社員バーコードによる瞬時貸出、所属長・管理部門の多段階承認ワークフロー、返却時コンディション点検ログ。",
    solution:
      "Laravel 12 + Filament 3.3 and Livewire Volt engine enforcing relational borrowing records with status transition locks and Excel batch master imports.",
    solutionJa:
      "Laravel 12とFilament 3.3/Livewireによるステータス遷移ロック付き貸出管理基盤。Excelマスタ一括インポート機能完備。",
    result:
      "Achieved 100% inventory accountability across 500+ factory tools with zero lost equipment over 6 months of active operation. Cut worker checkout times from 5 minutes to 20 seconds.",
    resultJa:
      "工場内500点以上の治工具・機器で紛失ゼロ（100%管理）を6ヶ月以上継続。貸出受付時間を1人あたり5分から20秒へ短縮。",
  },
  {
    id: 16,
    name: "Document Control",
    nameJa: "工場ISO/SOP文書管理システム",
    imageUrl: "snappack",
    status:
      "Factory ISO/SOP document version control and compliance archive for PT. Harrison And Gil-Java. Enforces multi-version revision histories, document categorization, and immutable activity audit logs.",
    statusJa:
      "PT. Harrison And Gil-Java向けの工場ISO/SOP文書版数管理・コンプライアンス書庫。複数リビジョン履歴、文書分類、改ざん防止アクティビティ監査ログを厳格に保持。",
    tech: "Laravel 11, Vite, MySQL",
    tags: ["Laravel 11", "Vite", "ISO Compliance", "Document Control", "Audit Trail"],
    tagsJa: ["Laravel 11", "Vite", "ISO準拠", "版数管理", "監査証跡"],
    github: "null",
    demo: "null",
    isCaseStudy: false,
    isSimpleShowcase: true,
    category: "Full-stack Manufacturing Systems",
    categoryJa: "製造実行システム (MES)",
    problem:
      "Production floor operators frequently used superseded paper SOPs and outdated blueprint versions, causing machining rework and failing ISO compliance audits.",
    problemJa:
      "作業現場で旧版の紙SOPや古い図面が回収されずに使用され、加工寸法ミスやISO監査での不適合指摘が発生。",
    requirements:
      "Immutable document versioning; multi-stage review/approval workflows; in-browser PDF viewing without unauthorized downloads; department-based access control.",
    requirementsJa:
      "改ざん不能なリビジョン版数管理、多段階承認フロー、ブラウザ内PDFプレビュー、部門別閲覧アクセス制限。",
    solution:
      "Filament PHP 3 + Livewire engine with Spatie Activitylog maintaining full document lifecycles (document_versions), draft locks, and immutable PDF revision trails.",
    solutionJa:
      "Filament 3とLivewire、Spatie Activitylogを統合し、版数ごとのPDF履歴・承認タイムスタンプを厳格保持する文書統制システム。",
    result:
      "100% elimination of outdated SOP usage across 12 factory departments. Houses 250+ active ISO work instructions and technical drawings with document retrieval times reduced from 15 minutes to < 5 seconds.",
    resultJa:
      "工場全12部門において旧版SOPの使用を100%根絶。250件以上の現行ISO標準書・図面を即時検索可能にし、検索時間を15分から5秒未満に短縮。",
  },
  {
    id: 7,
    name: "Product Quality (QC)",
    nameJa: "QC 品質検査ゲートウェイ",
    imageUrl: "qc",
    status:
      "Quality standardization and finished-product inspection gateway for factory operations at PT. Harrison And Gil-Java. Integrates dynamic compliance checklists, defect classification logs, and sign-off locks before packaging authorization.",
    statusJa:
      "PT. Harrison And Gil-Javaの工場オペレーションにおける品質標準化および完成品検査ゲートウェイ。動的な検査チェックリスト、欠陥分類ログ、梱包許可前の承認ロックを統合。",
    tech: "Laravel 9, Blade, Bootstrap, FFmpeg, MySQL",
    tags: ["Laravel 9", "Blade", "FFmpeg", "MySQL", "Quality Control", "Defect Logging"],
    tagsJa: ["Laravel 9", "Blade", "FFmpeg", "MySQL", "品質管理(QC)", "不具合ログ"],
    github: "null",
    demo: "/portfolio/qcchecklist",
    isCaseStudy: true,
    isSimpleShowcase: false,
    category: "Full-stack Manufacturing Systems",
    categoryJa: "製造実行システム (MES)",
    problem:
      "Paper QC inspection cards allowed defective items (wood cracks, finish blisters) to slip through to packaging stations because inspection checklists lacked enforced software locks.",
    problemJa:
      "紙の検査票ではチェック項目の見落としや形骸化が起きやすく、木工割れや塗装不良のある家具がそのまま梱包ステーションへ流出するリスクを抱えていました。",
    requirements:
      "Dynamic inspection checklist based on product category; mandatory digital pass/fail gating before packaging authorization; built-in video compression for shop-floor evidence.",
    requirementsJa:
      "製品カテゴリ別の動的検査チェックリスト、検査合格前の次工程進行ロック（ポカヨケ）、現場撮影動画の自動軽量化圧縮。",
    solution:
      "Laravel 9 Blade MVC leveraging native JSON schemas for multi-point compliance checks (verified_product, result_value) with integrated FFmpeg server-side video compression.",
    solutionJa:
      "Laravel 9 Blade MVCとJSONスキーマによる検査基盤。検査未達品のDB排他ロックおよびFFmpeg自動動画圧縮モジュールを内蔵。",
    result:
      "Prevented 100% of unverified/defective units from advancing to packing. Integrated FFmpeg reduced inspection video evidence file sizes by 75% (80MB to <20MB), while root-cause defect logging cut recurring defect rates by 28%.",
    resultJa:
      "未検査・不合格品の梱包流出を100%防止（ゼロ件化）。FFmpeg連携により検査証拠動画のファイルサイズを75%削減（80MB→20MB未満）し、欠陥分類ログにより同一不具合の再発率を28%低減。",
  },
  {
    id: 8,
    name: "FinWise",
    nameJa: "FinWise 資産インテリジェンス",
    imageUrl: "finwise",
    status:
      "Personal financial intelligence and liquidity management system. Features a dedicated multi-currency conversion engine, parent/child budget limit controls, and ACID-compliant transactional ledger reconciliation.",
    statusJa:
      "個人資産インテリジェンスおよび流動性管理システム。多通貨自動換算エンジン、階層型予算リミット制御、ACID準拠の元帳照合トランザクションを搭載。",
    tech: "Laravel 11, Blade, Bootstrap, Chart.js, MySQL",
    tags: ["Laravel 11", "Blade", "Chart.js", "MySQL", "Currency Conversion", "ACID Transactions", "FinTech"],
    tagsJa: ["Laravel 11", "Blade", "Chart.js", "MySQL", "通貨換算", "ACIDトランザクション", "FinTech"],
    github: "null",
    demo: "/portfolio/finwise",
    isCaseStudy: true,
    isSimpleShowcase: false,
    category: "FinTech Intelligence",
    categoryJa: "FinTech・資産管理",
    problem:
      "Cross-currency factory procurement (USD for luxury imported timber, EUR for specialty hardware, IDR for local wages) created frequent budget overruns and untracked spending leaks.",
    problemJa:
      "輸入木材（USD）、欧州金物（EUR）、現地経費（IDR）の多通貨調達において、為替換算のズレや部門予算の上限超過が事後発覚する問題が発生。",
    requirements:
      "Real-time multi-currency exchange rate standardization; parent/child category budget enforcement; ACID-compliant transaction locking to prevent race-condition overspending.",
    requirementsJa:
      "基準通貨へのリアルタイム自動為替換算、親カテゴリ・子品目ごとの予算枠制御、トランザクション競合時の超過を完全遮断するACID排他ロック。",
    solution:
      "Laravel 11 engine utilizing database-level transaction locks (lockForUpdate()) that atomically validate allocation limits against realization tables before committing expense records.",
    solutionJa:
      "Laravel 11によるDB行ロック（lockForUpdate）を用いたACIDトランザクション制御。支払実行（realization）前に予算残枠をアトミック検証。",
    result:
      "Achieved 100% prevention of category budget breaches via pre-commit validation across 50+ procurement accounts. Multi-currency automated conversion saved 8+ hours of weekly manual financial spreadsheet reconciliation.",
    resultJa:
      "50以上の調達カテゴリにおいて事前検証により予算枠超過を100%防止。為替の自動換算により毎週8時間以上かかっていた手動為替照合作業をゼロ化。",
  },
  {
    id: 11,
    name: "Nihongo-App",
    nameJa: "Nihongo-App 日本語学習システム",
    imageUrl: "nihongo",
    status:
      "Accelerated Japanese language practice system structured for JFT-Basic A2 test preparation. Integrates multi-script database storage (Kanji/Kana/Romaji), spaced repetition practice drills, and scoring assessment engines.",
    statusJa:
      "JFT-Basic A2試験対策に特化した日本語学習システム。漢字・かな・ローマ字の複数スクリプトDB保存、分散学習（間隔反復）ドリル、CBT模擬スコア判定エンジンを実装。",
    tech: "Laravel, Vue.js, Tailwind, MySQL",
    tags: ["Laravel", "Vue.js", "MySQL", "EdTech", "Japanese Localization", "CBT Drills"],
    tagsJa: ["Laravel", "Vue.js", "MySQL", "EdTech", "日本語ローカライゼーション", "CBTドリル"],
    github: "null",
    demo: "/portfolio/nihongo",
    isCaseStudy: true,
    isSimpleShowcase: true,
    category: "Localization Engineering",
    categoryJa: "教育・ローカライゼーション",
    problem:
      "Technical industrial terms and multi-script Japanese (Kanji, Hiragana, Katakana, Romaji) required dedicated practice drills for factory workers preparing for Japanese certifications (JFT-Basic A2).",
    problemJa:
      "製造現場で用いる専門日本語や漢字・かな・ローマ字の複数文字体系について、JFT-Basic A2試験を目指す技術者が効率的に反復演習できる専用ツールが不足。",
    requirements:
      "Multi-script relational database indexing; Spaced Repetition System (SRS) review algorithm; interactive CBT mock exam simulation with instant scoring.",
    requirementsJa:
      "日本語複数表記（漢字・かな・ローマ字）の高速検索インデックス、間隔反復学習（SRS）アルゴリズム、即時採点可能なCBT模擬演習機能。",
    solution:
      "Vue 3 SPA paired with Laravel REST API featuring utf8mb4_unicode_ci collated tables, local state persistence, and responsive interactive drill interfaces.",
    solutionJa:
      "utf8mb4_unicode_ci照合順序を用いた複数表記正規化テーブルとVue 3 SPA。ローカル状態保持とSRS復習スケジュールエンジンを実装。",
    result:
      "Structured 500+ JFT-Basic A2 vocabulary and grammar cards with SRS intervals, boosting worker test mock readiness and retention rates to over 95%.",
    resultJa:
      "JFT-Basic A2基準の語彙・文法500項目以上を体系化。間隔反復アルゴリズムにより模擬試験正答率・記憶定着率95%以上を達成。",
  },
  {
    id: 12,
    name: "finish-info",
    nameJa: "finish-info 原材料最適化・月次出来高",
    imageUrl: "finish-info",
    status:
      "Material optimization and monthly output reporting system for PT. Harrison And Gil-Java. Centralizes cutting lists and fabric specifications, calculating nesting yields to reduce textile waste and generating structured monthly output summaries.",
    statusJa:
      "PT. Harrison And Gil-Java向けの原材料最適化および月次出来高集計システム。木取り・生地裁断リストを集約し、ネスティング歩留まりを自動算出して端材ロスを削減。",
    tech: "Laravel 10, Blade, JavaScript, MySQL, Excel",
    tags: ["Laravel 10", "Blade", "MySQL", "Monthly Output", "Fabric Nesting", "MES"],
    tagsJa: ["Laravel 10", "Blade", "MySQL", "月次出来高", "ネスティング歩留まり", "MES"],
    github: "null",
    demo: "/portfolio/finish-info",
    isCaseStudy: true,
    isSimpleShowcase: false,
    category: "Full-stack Manufacturing Systems",
    categoryJa: "製造実行システム (MES)",
    problem:
      "Cutting list calculations for high-end fabrics and wood finishing were calculated manually on paper blueprints, causing high textile scrap rates and taking 3 days each month to compile output reports.",
    problemJa:
      "木工・ファブリック裁断リストを手書き図面から計算していたため、生地の端材廃棄ロスが多く、月次出来高集計の手作業に毎月3営業日を要していました。",
    requirements:
      "Automated cutting nesting yield calculation; IP-restricted factory terminal access; 1-click monthly production output aggregation.",
    requirementsJa:
      "自動ネスティング歩留まり計算、端末IPアドレスによる図面情報漏洩防止ファイアウォール、月次出来高のワンクリック即時集計。",
    solution:
      "IP-whitelisted Laravel 10 Blade backend reading secure file-system specifications, providing touch-screen cutting interfaces and dynamic monthly report generation.",
    solutionJa:
      "工場端末IPホワイトリストによるアクセス制御とLaravel 10 Bladeバックエンド。現場大画面タッチ端末向けネスティングUIおよび集計エンジンを開発。",
    result:
      "Improved fabric and timber nesting yields by 12–15%, significantly slashing raw material scrap waste. Reduced monthly production output reporting from 3 full days to an instant 1-click export.",
    resultJa:
      "ネスティング計算の自動化で生地・木材歩留まりを12〜15%向上させ、端材ロスを劇的に削減。月次出来高集計を3営業日からワンクリック（即時）に短縮。",
  },
  {
    id: 9,
    name: "ProScan",
    nameJa: "ProScan 倉庫棚卸監査ツール",
    imageUrl: "proscan",
    status:
      "Warehouse inventory audit and stock opname verification tool for PT. Harrison And Gil-Java. Enables high-speed barcode scanning to automatically detect discrepancies against ERP ledgers and generate stock adjustment records.",
    statusJa:
      "PT. Harrison And Gil-Java向けの倉庫実地棚卸・在庫監査ツール。高速バーコードスキャンにより基幹DB台帳との差異を自動検知し、在庫調整伝票を即時生成。",
    tech: "Laravel 9, Blade, Bootstrap, JavaScript, MySQL",
    tags: ["Laravel 9", "Blade", "Bootstrap", "MySQL", "Stock Opname", "Barcode Scanner", "Variance Audit"],
    tagsJa: ["Laravel 9", "Blade", "Bootstrap", "MySQL", "棚卸監査", "バーコードスキャナー", "差異照合"],
    github: "null",
    demo: "/portfolio/proscan",
    isCaseStudy: true,
    isSimpleShowcase: false,
    category: "Full-stack Manufacturing Systems",
    categoryJa: "製造実行システム (MES)",
    problem:
      "Warehouse stock opname audits took 4 full days with manual paper counting, leading to phantom stock discrepancies of up to 8.5% between physical warehouse shelves and ERP database ledgers.",
    problemJa:
      "手書き集計による実地棚卸に毎回4日を要し、現品と基幹ERP台帳の間に最大8.5%の在庫ズレ（幽霊在庫）が発生、生産手配ミスを誘発していました。",
    requirements:
      "Real-time barcode scanning on mobile Android webapps; dual-auditor verification mechanism; automated variance detection and stock adjustment generation.",
    requirementsJa:
      "現場Android端末による高速バーコードスキャン、独立二者（倉庫番＋監査役）ダブルチェック機能、差異の自動抽出と在庫調整伝票生成。",
    solution:
      "Mobile-optimized Laravel 9 Blade interface communicating with indexed MySQL tables (stock_opname_data_material, stock_opname_data_sfg), executing sub-second lookup and variance reconciliation.",
    solutionJa:
      "現場モバイル最適化Laravel 9 Bladeとインデックス付きMySQLテーブル群。スキャンと同時に台帳残高と照合し、不一致棚番を即座にハイライト。",
    result:
      "Cut stock opname audit duration by 62.5% (from 4 days to 1.5 days). Dual-auditor scanning mechanism slashed inventory variance from 8.5% down to < 0.3% across 3,000+ SKUs in 4 active warehouses.",
    resultJa:
      "棚卸監査所要日数を4日から1.5日へ62.5%短縮。ダブルスキャン検証により在庫差異率を8.5%から0.3%未満へ劇的削減（4大倉庫3,000超SKU対象）。",
  },
  {
    id: 13,
    name: "Stokku",
    nameJa: "Stokku 原材料在庫・FEFO管理",
    imageUrl: "stokku1",
    status:
      "Inventory control and material lifecycle management for PT. Harrison And Gil-Java. Integrates item expiry and disposal management with FEFO routing, threshold-based automated procurement triggers, and 2-level rack zoning.",
    statusJa:
      "PT. Harrison And Gil-Java向けの在庫統制・原材料ライフサイクル管理システム。FEFO（先使用期限先出）ルーティングによる有効期限・廃棄管理、発注点アラート、2段階の棚番ゾーニングを統合。",
    tech: "Laravel 11, Blade, PWA, Bootstrap, MySQL",
    tags: ["Laravel 11", "Blade", "PWA", "MySQL", "FEFO Expiry", "Disposal Audit", "Warehouse Zoning"],
    tagsJa: ["Laravel 11", "Blade", "PWA", "MySQL", "FEFO有効期限", "廃棄監査", "棚番ゾーニング"],
    github: "null",
    demo: "/portfolio/stokku",
    isCaseStudy: true,
    isSimpleShowcase: false,
    category: "Full-stack Manufacturing Systems",
    categoryJa: "製造実行システム (MES)",
    problem:
      "Perishable finishing chemicals, varnishes, and adhesives lacked batch expiration tracking, resulting in expired materials being used on production lines or discovered only after spoilage.",
    problemJa:
      "塗料や接着剤などの使用期限付き化学原料が手作業管理されていたため、期限切れ原料の誤使用リスクや、知らぬ間に期限切れとなり廃棄処分されるロスが多発。",
    requirements:
      "Individual batch shelf-life tracking; automated First-Expired, First-Out (FEFO) routing; threshold-based automated Material Request (MR) procurement triggers; audited scrap disposal logs.",
    requirementsJa:
      "ロット別使用期限管理、先使用期限先出（FEFO）の強制、発注点割れ時の自動出庫・調達トリガー、廃棄処分（スクラップ）の監査ログ記録。",
    solution:
      "Laravel 11 Blade PWA with relational batch schema (material_expired_dates) and nested JSON rack coordinates (additional_raks), integrated with an automated threshold alert engine and Spatie role-gated disposal approvals.",
    solutionJa:
      "Laravel 11 Blade PWAによるロット別期限テーブル（material_expired_dates）とJSON形式の複層棚番管理。発注点自動アラートおよび電子受領写真付き出庫検証ワークフローを自社構築。",
    result:
      "Eliminated unexpected raw material stockouts from 4–5 line stoppages per month down to zero, and compressed material picking requisition time from 30–45 minutes to < 3 minutes across 1,200+ managed material SKUs.",
    resultJa:
      "発注点自動連動により月4〜5回発生していた原料切れによるライン停止を0件（完全根絶）に達成し、出庫引当・在庫確認時間を従来の30〜45分から3分未満へ短縮（1,200超SKU対象）。",
  },
];
