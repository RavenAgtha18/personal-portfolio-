/**
 * Export Shokumu Keirekisho (職務経歴書) to Microsoft Word (.doc)
 * Generates an official Japanese JIS-standard 2-page Word document.
 */
import { shokumuKeirekishoData as data } from '@/data/shokumuKeirekisho'

export function exportShokumuKeirekishoToWord() {
  const p1 = data.projects.slice(0, 2)
  const p2 = data.projects.slice(2)

  const docContent = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${data.header.title}_${data.header.nameKanji}</title>
<style>
  @page Section1 {
    size: 595.3pt 841.9pt; /* A4 */
    margin: 15mm 15mm 15mm 15mm;
    mso-header-margin: 35.4pt;
    mso-footer-margin: 35.4pt;
    mso-paper-source: 0;
  }
  div.Section1 { page: Section1; }
  body {
    font-family: 'Yu Mincho', 'MS Mincho', 'Hiragino Mincho Pro', 'Times New Roman', serif;
    font-size: 9.2pt;
    line-height: 1.45;
    color: #111111;
  }
  .doc-header {
    text-align: right;
    font-size: 8.5pt;
    color: #333333;
    margin-bottom: 2pt;
  }
  .main-title {
    text-align: center;
    font-size: 15pt;
    font-weight: bold;
    letter-spacing: 5pt;
    margin-top: 2pt;
    margin-bottom: 8pt;
  }
  .name-block {
    text-align: right;
    font-size: 9.5pt;
    margin-bottom: 10pt;
  }
  .name-block strong {
    font-size: 11pt;
  }
  h2.sec-title {
    font-size: 10pt;
    font-weight: bold;
    border-bottom: 1.5pt solid #222222;
    padding-bottom: 2pt;
    margin-top: 9pt;
    margin-bottom: 4pt;
    color: #111111;
  }
  p.summary-text {
    text-align: justify;
    text-indent: 1em;
    font-size: 9pt;
    line-height: 1.5;
    margin-bottom: 6pt;
  }
  table.skills-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 6pt;
    font-size: 8.5pt;
  }
  table.skills-table th, table.skills-table td {
    border: 0.5pt solid #555555;
    padding: 3.5pt 5pt;
    vertical-align: top;
  }
  table.skills-table th {
    background-color: #f2f2f2;
    width: 25%;
    font-weight: bold;
  }
  table.company-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 6pt;
    font-size: 8.5pt;
  }
  table.company-table th, table.company-table td {
    border: 0.5pt solid #555555;
    padding: 3.5pt 5pt;
    vertical-align: top;
  }
  table.company-table th {
    background-color: #f2f2f2;
    width: 20%;
    font-weight: bold;
  }
  table.proj-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 8pt;
    font-size: 8.5pt;
  }
  table.proj-table th, table.proj-table td {
    border: 0.5pt solid #555555;
    padding: 3.5pt 5pt;
    vertical-align: top;
  }
  table.proj-table th {
    background-color: #f5f5f5;
    font-weight: bold;
  }
  .proj-header {
    background-color: #e8e8e8;
    font-weight: bold;
    font-size: 9pt;
  }
  .badge-tag {
    display: inline-block;
    padding: 1pt 3pt;
    background: #eee;
    font-size: 7.5pt;
    margin-right: 2pt;
    border: 0.25pt solid #ccc;
  }
  .page-break {
    page-break-before: always;
    mso-special-character: line-break;
  }
  .footer-end {
    text-align: right;
    font-size: 9.5pt;
    margin-top: 8pt;
    font-weight: bold;
  }
</style>
</head>
<body>
<div class='Section1'>

  <!-- PAGE 1 HEADER -->
  <div class='doc-header'>${data.header.currentDate}</div>
  <div class='name-block'>
    氏 名: <strong>${data.header.nameKanji}</strong><br>
    <span style='font-size:8pt;color:#555;'>(${data.header.nameRomaji} / ${data.header.targetRole})</span>
  </div>

  <div class='main-title'>${data.header.title}</div>

  <!-- 1. 職務要約 -->
  <h2 class='sec-title'>【1. 職務要約】</h2>
  <p class='summary-text'>${data.summary}</p>

  <!-- 2. 活かせる経験・知識・技術 -->
  <h2 class='sec-title'>【2. 活かせる経験・知識・技術】</h2>
  <table class='skills-table'>
    ${data.competencies
      .map(
        (c) => `
      <tr>
        <th>${c.category}</th>
        <td>
          <ul style='margin: 0; padding-left: 14pt;'>
            ${c.skills.map((s) => `<li>${s}</li>`).join('')}
          </ul>
        </td>
      </tr>
    `,
      )
      .join('')}
    <tr>
      <th>保有資格・語学認定</th>
      <td>
        <ul style='margin: 0; padding-left: 14pt;'>
          ${data.header.certifications
            .map((cert) => `<li><strong>${cert.name}</strong>（${cert.date}）</li>`)
            .join('')}
        </ul>
      </td>
    </tr>
  </table>

  <!-- 3. 職務経歴詳細 (会社概要) -->
  <h2 class='sec-title'>【3. 職務経歴詳細】</h2>
  <table class='company-table'>
    <tr>
      <th>勤務期間</th>
      <td><strong>${data.company.period}（現職）</strong></td>
      <th>会社名</th>
      <td><strong>${data.company.name}</strong>（${data.company.capital}）</td>
    </tr>
    <tr>
      <th>所属・職種</th>
      <td>${data.company.department} / ${data.company.position}（${data.company.employmentType}）</td>
      <th>事業内容</th>
      <td>${data.company.businessType}（従業員数 ${data.company.employees}）</td>
    </tr>
    <tr>
      <th rowspan='3'>前職・職歴</th>
      <td colspan='3'>
        <strong>2024年05月 ～ 2025年01月</strong>: 個人事業・ゲーム受託開発 &amp; 大学（経営学専攻）・日本語学習（JFT-Basic A2準備）
      </td>
    </tr>
    <tr>
      <td colspan='3'>
        <strong>2023年09月 ～ 2024年04月</strong>: <strong>PT Solusi Teknologi Sejati</strong>（フルスタックWebエンジニア） - QRIS決済連携、キャッシュ標準化（エラー90%削減・月間$5,000コスト削減）
      </td>
    </tr>
    <tr>
      <td colspan='3'>
        <strong>2022年11月 ～ 2023年06月</strong>: <strong>Eduwork</strong>（フルスタック開発アプレンティス） - POS小売・図書管理システム開発、API統合、Pusherリアルタイム通信
      </td>
    </tr>
  </table>

  <!-- PAGE 1 PROJECTS -->
  ${p1
    .map(
      (p) => `
    <table class='proj-table'>
      <tr>
        <td colspan='4' class='proj-header'>
          ${p.name}（期間: ${p.period} / 規模: ${p.teamSize} / 担当: ${p.role}）
        </td>
      </tr>
      <tr>
        <th style='width: 15%;'>担当工程</th>
        <td style='width: 35%;'>${p.phase}</td>
        <th style='width: 15%;'>開発環境</th>
        <td style='width: 35%;'>${p.env}</td>
      </tr>
      <tr>
        <th>プロジェクト概要</th>
        <td colspan='3'>${p.description}</td>
      </tr>
      <tr>
        <th>成果・実績</th>
        <td colspan='3'>
          <ul style='margin: 0; padding-left: 14pt;'>
            ${p.achievements.map((a) => `<li><strong>${a}</strong></li>`).join('')}
          </ul>
        </td>
      </tr>
    </table>
  `,
    )
    .join('')}

  <!-- PAGE BREAK (STRICT 2-PAGE JIFFY) -->
  <div class='page-break'></div>

  <!-- PAGE 2 HEADER (Compact) -->
  <div class='doc-header'>${data.header.currentDate} / 職務経歴書 (2/2) / 氏名: ${data.header.nameKanji}</div>

  <!-- PAGE 2 PROJECTS -->
  ${p2
    .map(
      (p) => `
    <table class='proj-table'>
      <tr>
        <td colspan='4' class='proj-header'>
          ${p.name}（期間: ${p.period} / 規模: ${p.teamSize} / 担当: ${p.role}）
        </td>
      </tr>
      <tr>
        <th style='width: 15%;'>担当工程</th>
        <td style='width: 35%;'>${p.phase}</td>
        <th style='width: 15%;'>開発環境</th>
        <td style='width: 35%;'>${p.env}</td>
      </tr>
      <tr>
        <th>プロジェクト概要</th>
        <td colspan='3'>${p.description}</td>
      </tr>
      <tr>
        <th>成果・実績</th>
        <td colspan='3'>
          <ul style='margin: 0; padding-left: 14pt;'>
            ${p.achievements.map((a) => `<li><strong>${a}</strong></li>`).join('')}
          </ul>
        </td>
      </tr>
    </table>
  `,
    )
    .join('')}

  <!-- 4. 自己PR -->
  <h2 class='sec-title'>【4. 自己PR】</h2>
  <div style='margin-top: 4pt;'>
    ${data.selfPr
      .map(
        (sp, idx) => `
      <div style='margin-bottom: 6pt;'>
        <div style='font-weight: bold; font-size: 9pt; color: #111; margin-bottom: 1.5pt;'>
          ${idx + 1}. ${sp.title}
        </div>
        <p style='text-align: justify; margin: 0; font-size: 8.8pt; line-height: 1.48; text-indent: 1em;'>
          ${sp.content}
        </p>
      </div>
    `,
      )
      .join('')}
  </div>

  <div class='footer-end' style='letter-spacing: 0.8em;'>以上</div>

</div>
</body>
</html>
`

  const blob = new Blob(['\ufeff' + docContent], {
    type: 'application/msword;charset=utf-8',
  })

  const filename = `職務経歴書_${data.header.nameKanji.replace(/・/g, '_')}.doc`
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(link.href)
}
