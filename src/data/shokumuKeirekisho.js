/**
 * 職務経歴書 (Shokumu Keirekisho) - 日本標準様式 (A4・2枚厳守規格)
 * Standard Japanese Enterprise Resume Data for In-House System Engineer (社内SE)
 */

export const shokumuKeirekishoData = {
  header: {
    title: "職 務 経 歴 書",
    currentDate: "2026年10月14日 現在",
    nameKanji: "リキ・アンディ・アルフィヤント",
    nameRomaji: "Riki Andi Alfiyanto",
    birthYear: "2000年代生",
    nationality: "インドネシア共和国",
    targetRole: "社内SE (社内システムエンジニア / 現場Webアプリケーションエンジニア)",
    email: "rikiandi1801@gmail.com",
    portfolioUrl: "https://github.com/RavenAgtha18/personal-portfolio-",
    githubUrl: "https://github.com/RavenAgtha18",
    certifications: [
      { name: "JFT-Basic A2 (国際交流基金 日本語基礎テスト A2認定)", date: "取得済" },
      { name: "Full-Stack Web Development 認定", date: "取得済" },
    ],
  },

  // 1. 職務要約 (250〜300文字)
  summary:
    "Webエンジニアとして2年間のフルスタック開発経験（PHP, Python, JavaScript）を積んだ後、2025年2月よりインドネシアの高級家具輸出製造拠点（PT. Harrison And Gil-Java / 従業員約500名）にて社内SE（SysDev部門）として現場DXを推進。稼働中のレガシー工程管理システム（Laravel 5.1）のゼロダウンタイム改修・滞留日数分析をはじめ、FEFO原材料管理、実地棚卸、輸出梱包証跡など計8つのMES基盤の機能拡張・自社開発および日々の継続保守・障害対応を一貫して担当。WIP報告遅延をリアルタイム（1秒未満）に短縮、写真保管工数を45〜60分から3分未満に圧縮するなど現場直結の定量的成果を達成。JFT-Basic A2認定を保有し、日本のモノづくり精神と現場カイゼンを深く理解する「社内SE」として即戦力で貢献可能です。",

  // 2. 活かせる経験・知識・技術
  competencies: [
    {
      category: "製造業DX・現場カイゼン業務知識",
      skills: [
        "製造工程進捗・仕掛品（WIP）リアルタイム管理 & 滞留日数（Aging Days）分析",
        "原材料ロット・有効期限管理（FEFO先使用期限先出法・廃棄ロス削減）",
        "実地棚卸（Stock Opname）バーコード照合 & ERP在庫差異の即時分析",
        "輸出品質証跡・EUDR規制対応（HTML5 Canvas電子署名、動画軽量化）",
        "会計・予算管理（多通貨自動換算、ACIDトランザクション排他ロック制御）",
      ],
    },
    {
      category: "技術スタック・アーキテクチャ設計",
      skills: [
        "言語: PHP (5.6〜8.x), Python (3.x / Streamlit, 自動化バッチ), JavaScript (ES6+), SQL, HTML5 / CSS3",
        "FW・ライブラリ: Laravel (5/9/10/11/12), Livewire, Filament 3, Vue.js 3, Bootstrap, jQuery, Tailwind CSS",
        "DB・ミドルウェア: MySQL 8, MariaDB, InnoDB (複合インデックス最適化, トランザクション分離)",
        "インフラ・自動化: Pythonスクリプト自動化, Linux, Nginx, Apache, Git / GitHub, RESTful API, Docker",
        "ハードウェア連携: Zebra TC26 Android PDA, USB/Bluetooth バーコードスキャナー, 現場タブレット",
      ],
    },
    {
      category: "語学力・コミュニケーション",
      skills: [
        "日本語: JFT-Basic A2認定取得（日常業務会話、製造・IT用語を学習中）",
        "英語: 読解・リスニング（技術仕様書・APIドキュメントの読解、技術動画の理解が可能。スピーキングは基礎レベル）",
        "インドネシア語: 母国語（現場オペレーターへの業務ヒアリング・システム導入教育を主導）",
      ],
    },
  ],

  // 3. 職務経歴詳細 (企業概要)
  company: {
    period: "2025年02月 ～ 現在",
    name: "PT. Harrison And Gil-Java",
    businessType: "高級家具・木工製品の製造および欧米向けグローバル輸出",
    capital: "外資系製造法人",
    employees: "約500名",
    department: "システム開発部門 (SysDev)",
    employmentType: "正社員",
    position: "社内SE (システムエンジニア)",
    previousExperience:
      "2023年01月 ～ 2024年12月：フルスタックWebエンジニア（受託開発 / Laravel, Vue.js, Python, MySQL）",
  },

  // プロジェクト詳細（2025年2月入社以降、現在も全システム稼働中・継続保守およびエンハンス開発中）
  projects: [
    {
      id: "protrack",
      name: "■ Protrack – 製造工程進捗管理レガシー基盤の機能拡張 & 滞留日数分析（保守・改修）",
      period: "2025年02月 ～ 現在",
      teamSize: "2名（主担当）",
      role: "既存レガシーシステムの調査・解析、Dynamic Aging Days機能の追加設計・実装、現場スキャン連携改修、継続保守・現場サポート",
      phase: "既存コード解析 / 要件定義 / 追加詳細設計 / 実装 / テスト / 現場教育 / 継続保守・障害対応",
      env: "PHP, Laravel 5.1 (Blade), jQuery, Bootstrap 3, DataTables, MySQL 8, Zebra TC26 Android PDA, Linux",
      description:
        "2015年製Laravel 5.1で構築された既存の工程管理レガシーシステムを解析し、稼働中の現場を停止させることなく（ゼロダウンタイム）、紙伝票集計による進捗遅延（24〜48時間）を解消するバーコードスキャン連動改修および滞留日数（Dynamic Aging Days）算出機能を追加実装。日々の保守・トラブルシューティング・現場サポートも主導。",
      achievements: [
        "稼働中のレガシー基盤（Laravel 5.1）を停止させることなく、バーコード工程通過トランザクションをゼロダウンタイムで追加実装。",
        "WIP工程報告遅延を従来の24〜48時間からリアルタイム（1秒未満）に短縮。",
        "滞留日数（Aging Days）の動的算出により、組立工程のボトルネック停滞を35%削減。",
      ],
    },
    {
      id: "snappack",
      name: "■ SnapPack – 輸出梱包メディア証跡 & HTML5電子署名システム（開発・運用保守）",
      period: "2025年07月 ～ 現在",
      teamSize: "2名（主担当）",
      role: "業務分析、アーキテクチャ設計、電子署名モジュール開発、API連携、継続運用保守",
      phase: "要件定義 / 設計 / 実装 / テスト / セキュリティ監査 / 運用保守・機能改善",
      env: "PHP 8.3, Laravel 11 REST API, Vue 3 SPA, MariaDB, HTML5 Canvas, Tailwind CSS",
      description:
        "出荷コンテナへの家具積載時、カメラSDカードの手動運搬による写真紛失事故を全廃し、EUDR（欧州森林破壊防止規則）トレーサビリティに準拠した改ざん不能な梱包証跡チェーンを構築。本番稼働後も継続的な運用支援と機能改修を担当。",
      achievements: [
        "写真保管・検索工数をコンテナ1本あたり45〜60分から3分未満へ短縮（150〜200枚/本）。",
        "HTML5 Canvasによる電子署名とメタデータ突合により、海外運送時の破損責任論争・不当請求を100%防御。",
      ],
    },
    {
      id: "stokku",
      name: "■ Stokku – 原材料ライフサイクル統制 & FEFO先使用期限管理システム（開発・運用保守）",
      period: "2025年04月 ～ 現在",
      teamSize: "2名",
      role: "DB設計、FEFO引当アルゴリズム実装、出庫依頼（MR）フロー開発、継続運用・障害対応",
      phase: "要件定義 / DB正規化 / 実装 / テスト / 運用保守・機能改善",
      env: "PHP 8.2, Laravel 11 (Blade), Bootstrap, PWA, MySQL 8 (JSON棚番管理)",
      description:
        "塗料・接着剤・ファブリック等の原材料において、消費期限切れによる廃棄ロスと欠品による製造ライン停止を防ぐため、ロット別有効期限管理と現場出庫依頼（MR）をデジタル化。継続的なデータ監査と機能改善を推進。",
      achievements: [
        "FEFO（先使用期限先出）引当ロジックにより、高額材料の期限切れ廃棄ロスを85%削減。",
        "安全在庫連携アラートにより、原材料欠品による製造ライン停止を月4〜5回から0回へ根絶。",
      ],
    },
    {
      id: "proscan",
      name: "■ ProScan – 倉庫実地棚卸（Stock Opname）バーコード高速照合エンジン（導入・定期監査）",
      period: "2025年10月 ～ 現在",
      teamSize: "2名",
      role: "B-Treeインデックス設計、高速スキャンUI開発、基幹ERP照合バッチ実装、定期棚卸立会・保守",
      phase: "要件定義 / 設計 / 実装 / テスト / 実地棚卸立会 / 継続保守",
      env: "PHP 8.0, Laravel 9 (Blade), Bootstrap, JavaScript, MySQL 8, バーコードスキャナー",
      description:
        "倉庫内に点在する3,000点超の半製品・完成品の実地棚卸作業において、紙のカウント票を廃止し、バーコード連続スキャンによる基幹ERP台帳とのリアルタイム差異検出を実現。定期的な実地棚卸立会とトラブル対応を継続担当。",
      achievements: [
        "棚卸工期を従来の4日間から1.5日間へ短縮（作業工数62.5%削減）。",
        "物理実数と基幹ERP台帳の在庫差異率を8.5%から0.3%未満へ劇的改善。",
      ],
    },
    {
      id: "finish_qc",
      name: "■ Finish-Info & QC-Checklist – 原材料歩留まり最適化 & 品質ゲートウェイ（開発・改善）",
      period: "2026年01月 ～ 現在",
      teamSize: "2名",
      role: "ネスティング計算ロジック設計、検査チェックリスト動的JSON制御、動画圧縮、継続運用カイゼン",
      phase: "要件定義 / 設計 / 実装 / テスト / 運用保守・カイゼン",
      env: "PHP 8.1, Laravel 9/10 (Blade), JavaScript, FFmpeg CLI, MySQL 8, IPフィルター認証",
      description:
        "ファブリック裁断時の端材ロス削減と、完成品検査での不合格品の下流工程流出を100%防止する品質バリデーションゲートを構築。現在も現場フィードバックに応じた継続的なカイゼン・保守を実施中。",
      achievements: [
        "ファブリック最適ネスティング計算により、生地端材ロスを12〜15%削減。",
        "DB排他ロック連動の品質ゲートにより、不合格品の梱包流出ゼロ（100%防止）を達成。",
        "FFmpeg連携により、現場検査動画の容量を画質維持のまま75%圧縮（80MBから20MB未満へ大幅削減）。",
      ],
    },
  ],

  // 4. 自己PR (社内SEとしての3大コア強み)
  selfPr: [
    {
      title: "現場主義に根ざした「真の課題発見力」とシステム具現化力",
      content:
        "私はデスク上での設計にとどまらず、製造現場に足を運び、作業員や管理者が直面しているボトルネック（入力の煩わしさ、手動運搬のリスク、転記ミス）を深くヒアリングすることを信条としています。現場のオペレーターが迷わず直感的に使えるUIと、データベースの厳密な整合性（ACID・インデックス最適化）を両立させ、机上の空論ではない「現場で真に使われ、数字として成果が出るシステム」を創出します。",
    },
    {
      title: "日本のモノづくり精神と現場カイゼンを推進する「社内SEの実践力」",
      content:
        "PT. Harrison And Gil-Javaでの高級家具製造を通じて、ミリ単位の品質管理、ポカヨケ（ミス防止）、5S、工程トレーサビリティの重要性を体得しました。JFT-Basic A2認定取得に加え、現場のオペレーターに寄り添いながら、使いやすくミスの起きないシステムを自ら設計・構築して現場の無駄を排除し、業務カイゼンを継続的に推進できる社内SEとして貢献いたします。",
    },
    {
      title: "高い主体性とフルスタックな技術キャッチアップ能力（PHP / Python / 現場ハードウェア）",
      content:
        "少数精鋭（2名体制）のSysDev部門において、要件定義からインフラ設定、現場Webフロントエンド、Laravelバックエンド、Python自動化スクリプト、PDA等のハードウェア連携まで広範な領域を自律的に担当してまいりました。未知の技術や業務ドメインにも迅速に適応し、常に現場と経営のプラスになる行動をとることができます。",
    },
  ],
}
