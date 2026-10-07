export default {
  // Navigation
  nav: {
    home: "ホーム",
    work: "開発実績",
    about: "経歴・技能",
    letsTalk: "お問い合わせ",
    search: "クイック検索",
    searchShortcut: "Ctrl+K",
    menu: "メニュー",
  },

  // Hero Scrollytelling
  hero: {
    statusBadge: "システム開発者 • 製造現場自動化 • 社内SE",
    name: "リキ・アンディ・アルフィヤント",
    headline: "製造実行システム (MES)",
    headlineSub: "工場フロア・システム設計",
    bio: "PT. Harrison And Gil-Javaにて、製造現場向けMES、バーコード工程管理、FEFO倉庫管理システムを一貫開発・運用。",
    exploreSystems: "自社開発システム一覧を見る",
    contactMe: "連絡する",
    resume: "職務経歴書 (CV)",
    journey: "進行状況",
    scrollExplore: "スクロールして詳細を展開 ↓",

    // Scenes
    sceneOverview: "エグゼクティブ・スタジオ",
    sceneMatrix: "CAD設計 & ホログラム",
    sceneTokyo: "東京タワー & カイゼン",

    // Telemetry Box
    telemetryTitle: "工場システム稼働状況",
    telemetryOnline: "正常稼働中",
    telemetryDivision: "2名体制 社内SE (SysDev)",
    telemetryPlant: "HARRISON & GIL-JAVA",
    telemetrySuite: "8つのMES本番モジュール",
    telemetryHardware: "ZEBRA TC26 • USB WEDGE",
    telemetryStandard: "システム停止ゼロ",

    // Phases
    phase00: {
      tab: "メイン",
      tagline: "東京ペントハウス & アーキテクチャ",
      title: "Riki Andi Alfiyanto",
      desc: "システム開発者（社内SE）• 製造実行システム（MES）エンジニアリング",
      tags: ["PT. Harrison And Gil-Java", "2名体制 社内SE", "MES開発・現場運用"],
    },
    phase01: {
      tab: "少数精鋭",
      badge: "01. 現場密着の現実",
      tagline: "高い当事者意識 • 官僚主義ゼロ",
      title: "2名の社内SE体制（SysDev Core）",
      desc: "PT. Harrison And Gil-Javaの木工・組立・物流現場にて、要件定義からDB設計、ハードウェア連携、本番展開まで2名の少数精鋭で一貫開発。無駄な中間伝達を排し、現場オペレーターが毎日安心して使える高信頼システムを構築。",
      tags: ["PT. Harrison And Gil-Java", "2名体制 社内SE", "現場密着・高い当事者意識"],
    },
    phase02: {
      tab: "バーコード & 機器",
      badge: "02. 物理現場連携",
      tagline: "耐環境PDA • タッチ入力インターロック",
      title: "物理とデジタルの確実な連動（ポカヨケ）",
      desc: "紙の工程伝票を廃止し、Zebra TC26 Android PDAおよびUSBバーコードスキャナーを導入。各工程での瞬時スキャンによりポカヨケ（誤投入・誤出荷防止）ゲートを強制し、検査合格前には次工程へ進めない仕組みを徹底。",
      tags: ["Zebra TC26 Android PDA", "USB HIDバーコードスキャナー", "ポカヨケ（誤投入防止）ゲート"],
    },
    phase03: {
      tab: "8大MESモジュール",
      badge: "03. 工場統合基盤",
      tagline: "8つの自社開発MESモジュール",
      title: "8大製造システム統合スイート",
      desc: "工場全体を支える自社システム網：Protrack（仕掛品・滞留日数追跡）、Stokku（FEFO先入先出倉庫管理）、finish-info（生地歩留まり算出）、SnapPack（EUDR輸出梱包証明）、QC（品質欠陥追跡）、ProScan（バーコード棚卸監査）。",
      tags: ["Protrack（仕掛品追跡）", "Stokku（FEFO倉庫）", "SnapPack（EUDR輸出）", "ProScan（棚卸監査）"],
    },
    phase04: {
      tab: "社内SE & カイゼン",
      badge: "04. モノづくりの精神",
      tagline: "現場の信頼 • 日本基準の品質",
      title: "システム停止ゼロ。カイゼン（改善）駆動。",
      desc: "手袋を着用したオペレーターでも直感的に操作できる現場ファースト設計。日本の社内SE基準と基本情報技術者試験（FE）の学習に沿い、無駄の削減とカイゼン（改善）を継続実践。",
      tags: ["社内SE（In-House SE）", "モノづくりの精神", "基本情報技術者（FE）学習中"],
    },
  },

  // Marquee
  marquee: [
    "製造実行システム (MES)",
    "Laravel & Vue.js フルスタック開発",
    "現場バーコードスキャナー & 在庫監査",
    "ACID準拠・正規化リレーショナルDB",
    "電子サイン & ペーパーレス出荷物流",
    "工程ボトルネック・滞留日数検知 (WIP)",
    "RESTful API & 端末ハードウェア連携",
    "多段階検査 & 品質保証 (QA)",
  ],

  // Terminal
  terminal: {
    badge: "開発者シェル環境",
    title: "SysDev インタラクティブ・ターミナル",
    desc: "直接操作コンソール。whoami、projects、sudo hire などを入力してテストできます。",
    welcome: "Riki Andi Alfiyanto の SysDev ターミナルへようこそ（PT. Harrison And Gil-Java）。",
    helpHint: "コマンド一覧は 'help' と入力してください。または: whoami, projects, stats, japan, sudo hire",
  },

  // Systems Catalog Gateway
  gateway: {
    badge: "10件以上の実運用システムを自社開発",
    title: "自社開発システムアーキテクチャを見る",
    desc: "現場の課題を解決した実稼働ケーススタディ：Protrack（工程追跡）、SnapPack（出荷証明）、Stokku（FEFO在庫管理）、ProScan（棚卸）、QC（品質管理）。",
    cta: "完全な開発実績カタログを見る →",
  },

  // About Page
  about: {
    roleBadge: "システム開発者（社内SE）· 2名体制",
    name: "リキ・アンディ・アルフィヤント",
    bioLocation: "インドネシア・スマラン 🇮🇩",
    bioPrefix: "拠点：",
    bioRole: "システム開発者（社内SE）",
    bioCompany: "PT. Harrison And Gil-Java",
    bioDivision: "2名の社内SE体制",
    bioSuffix: "。製造実行システム（MES）、倉庫ライフサイクル管理、輸出証明プラットフォームなど、実際の製造現場で稼働する中核システムを一貫して設計・開発・運用しています。",
    quote: "2名体制の社内SEにおいて、机上の空論や脆弱なソフトウェアの居場所はありません。真のエンジニアリングの価値は製造現場にあります。現場オペレーターのボトルネックを汲み取り、堅牢なDBスキーマに落とし込み、人為的ミス（ポカ）を物理的に防ぐシステムを届けることです。",
    highlights: [
      { title: "製造MESシステム", desc: "PT. Harrison And Gil-Javaの木工・組立・物流現場を支える自社MES" },
      { title: "少数精鋭の社内SE", desc: "現場の課題ヒアリングからスキーマ設計、本番運用まで2名で直接統括" },
      { title: "日本企業・グローバル志向", desc: "JFT-Basic A2取得・モノづくり精神を重んじる社内SEを目指して継続学習中" },
    ],
    competenciesBadge: "アーキテクチャ & 現場対応力",
    competenciesTitle: "技術スタック & 業務対応アーキテクチャ",
    competenciesDesc: "実際の製造工場で検証・実稼働しているハードウェア連携、ミドルウェア設計、要件定義手法。",
    tiers: {
      physical: {
        label: "現場ハードウェア",
        tagline: "実際の製造ラインで検証・連携済みの物理層デバイス",
        items: [
          {
            name: "Android ハンディ端末 / PDA",
            tier: "撮像・入力端末",
            badge: "現場検証済",
            desc: "WebViewやカメラデコーダと連携し、工場フロアの機動的な工程入力や在庫監査を実現するAndroidバーコード端末。",
            specs: ["Android バーコード", "DataWedge / カメラ", "SnapPack & ProScan"],
          },
          {
            name: "USB / 無線 HIDスキャナー",
            tier: "定置型デコーダー",
            badge: "低遅延入力",
            desc: "手動キーボード入力を排し、各作業台PCに直結して工程カードを瞬時に読み取るプラグ＆プレイスキャナー。",
            specs: ["Code 128 / QR", "USB HID エミュレーション", "キー入力ゼロ"],
          },
          {
            name: "業務用サーマルプリンター",
            tier: "ラベル印字",
            badge: "現場直結",
            desc: "梱包伝票、外箱トラッキング、倉庫棚番タグ向けにWebから直接バーコードラベルを発行する印刷連携。",
            specs: ["バーコードラベル", "梱包マニフェスト", "Web直接印刷"],
          },
          {
            name: "タッチ式オペレーター端末",
            tier: "現場操作UI",
            badge: "手袋対応",
            desc: "木工・塗装・組立現場で作業手袋を着用したオペレーターでも確実に操作できる大ボタン・ポカヨケ設計UI。",
            specs: ["手袋対応UI", "ポカヨケ入力", "QC & finish-info"],
          },
        ],
      },
      middleware: {
        label: "連携ミドルウェア",
        tagline: "ビジネスロジックとトランザクション整合性を保証する堅牢な基盤",
        items: [
          {
            name: "Laravel & PHP 8.x",
            tier: "バックエンド基盤",
            badge: "中核エンジン",
            desc: "競合状態（レースコンディション）を排する厳格なACIDトランザクション制御と非同期キューワーカー。",
            specs: ["ACID分離", "Eloquent ORM", "非同期キュー"],
          },
          {
            name: "Python 自動化 & データ解析",
            tier: "スクリプト自動化",
            badge: "運用自動化",
            desc: "出荷PDF解析、画像整合性検証、定期集計バッチ処理を実行する自動化スクリプト群。",
            specs: ["PDF Plumber", "データクレンジング", "自動Cron"],
          },
          {
            name: "Node.js & リアルタイム通信",
            tier: "イベント配信",
            badge: "超低遅延",
            desc: "ライン上の仕掛品（WIP）進行状況を現場アンドン（表示板）に即座にブロードキャストするWebSocketサーバー。",
            specs: ["WebSocket", "リアルタイムテレメトリ", "ライブ配信"],
          },
          {
            name: "RESTful API & Webhook",
            tier: "システム間連携",
            badge: "疎結合設計",
            desc: "現場のAndroid端末とエンタープライズERPデータベースを安全かつステートレスに連携。",
            specs: ["JSONスキーマ", "JWT認証", "レート制限"],
          },
        ],
      },
      database: {
        label: "データベース & 保管",
        tagline: "厳格なACID準拠・マルチテーブル監査証跡を備えたリレーショナル設計",
        items: [
          {
            name: "MariaDB / MySQL クラスタ",
            tier: "主リレーショナルDB",
            badge: "ACID完全準拠",
            desc: "複合インデックス、外部キー制約、厳格な変更履歴監査ログを備えた正規化データベース。",
            specs: ["B-Treeインデックス", "監査ログ", "整合性担保"],
          },
          {
            name: "倉庫ゾーニングエンジン",
            tier: "物流ロジック",
            badge: "在庫先入先出",
            desc: "塗料・接着剤など期限管理が必要な化学原料向けにFIFOおよびFEFO（先使用期限先出）を強制する棚番管理アルゴリズム。",
            specs: ["FIFO / FEFO", "棚番・間口ゾーニング", "Stokku & ProScan"],
          },
          {
            name: "PostgreSQL & 準構造化データ",
            tier: "分析基盤",
            badge: "高信頼性",
            desc: "JSONBカラムを活用した複雑な品質検査ログや歩留まり履歴データの保存と高度集計。",
            specs: ["JSONBテレメトリ", "複合ビュー", "原材料歩留まり"],
          },
        ],
      },
      ba_sdlc: {
        label: "要件定義 & バイリンガル開発",
        tagline: "現場オペレーターの生の声と経営陣のシステム要件を橋渡し",
        items: [
          {
            name: "要件定義書 & 基本設計書策定",
            tier: "要件分析",
            badge: "SysDev分析",
            desc: "現場の曖昧なペインポイントをヒアリングし、厳密な機能要件、ER図、ユースケースに昇華。",
            specs: ["UMLモデリング", "ユースケース", "受入基準"],
          },
          {
            name: "日本語対応 & モノづくりの精神",
            tier: "言語・文化適合",
            badge: "JFT-BASIC A2",
            desc: "日本のモノづくり精神（丁寧な品質・無駄の排除）への深い敬意、カイゼン（改善）の実践、JFT-Basic A2合格。",
            specs: ["JFT-Basic A2", "カイゼン思考", "日本企業志向"],
          },
          {
            name: "ポカヨケ & 誤操作防止UI",
            tier: "エラー防止設計",
            badge: "リーン生産",
            desc: "バーコード認証を通さない限り次工程へ進めない仕組みなど、人為的ミスを物理的に遮断するUI設計。",
            specs: ["ポカヨケ設計", "バーコードゲート", "現場エルゴノミクス"],
          },
        ],
      },
    },
    physicsBadge: "Matter.js 2次元物理シミュレーション",
    physicsTitle: "現場ハードウェア & 技術スタック物理サンドボックス",
    physicsDesc: "実務で使用する全ライブラリ、バーコード端末、データベースをニュートン力学でモデリング。バッジを掴んで投げたり、無重力モードを体感できます。",
    timelineBadge: "実務経歴",
    timelineTitle: "エンジニア経歴タイムライン",
    timelineItems: [
      {
        period: "2025年 - 現在",
        title: "システム開発者（社内SE）",
        desc: "PT. Harrison And Gil-Java（2名体制の社内SE中核部門）にて、要件定義、倉庫在庫管理基盤、リアルタイム現場追跡システムを主導。製造現場オペレーターと基幹DBを直結するシステムを構築・運用。",
      },
      {
        period: "2023年 - 2024年",
        title: "フルスタック・ソフトウェアエンジニア",
        desc: "Laravel、Vue.js、MySQLを用いた商用Webアプリケーションの開発、リレーショナル設計、レスポンシブUI実装を担当。",
      },
    ],
  },

  // Portfolio Page
  portfolio: {
    badge: "プロジェクト一覧 & 開発事例",
    title: "自社開発システム・アーキテクチャ実績",
    desc: "製造実行システム（MES）、倉庫物流、品質管理などの自社開発システムカタログ。",
    viewProjects: "プロジェクト一覧",
    viewMatrix: "技術マトリクス",
    filterAll: "すべて",
    insightsTotal: "総プロジェクト数",
    insightsCaseStudies: "詳細事例",
    insightsMfg: "製造MES領域",
    techUsage: "主要技術スタック使用比率",
    typeDistribution: "プロジェクト種別分布",
    decisionMatrixTitle: "アーキテクチャ採用マトリクス",
    decisionMatrixDesc: "技術 × 適用業務領域の採用実績マトリクス",
    projectsUnit: "件",
    projectUnit: "件",
    moreProjects: "件以上",
  },

  // Common & Footer
  footer: {
    heading: "確かな技術で、現場を支えるシステムを",
    desc: "社内SE、日本企業の開発案件、またはグローバルな開発機会について、お気軽にご連絡ください。",
    copyright: "日本のモノづくり精神と確かな技術で構築 (Vue.js & Tailwind CSS)",
  },
};
