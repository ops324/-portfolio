# ポートフォリオサイト 仕様書

| 項目 | 内容 |
|---|---|
| バージョン | 3.0.4 |
| 作成日 | 2026年3月7日 |
| 最終更新 | 2026年7月3日 |
| 作成者 | 滝本 哲也 |
| リポジトリ | github.com/ops324/-portfolio |
| 公開URL | https://takimototetsuya.vercel.app |

---

## 変更履歴

| バージョン | 日付 | 概要 |
|---|---|---|
| 1.0.0 | 2026-03-07 | 初版（ダークテーマ） |
| 1.1.0 | 2026-03-07 | エディトリアル・スプレッドデザインへ全面刷新 |
| 1.2.0 | 2026-03-07 | シンプルミニマルデザインへ全面刷新。名前・職業・コンテンツ整理 |
| 1.3.0 | 2026-03-07 | Hero・About のテキスト統合。活動内容を実態に合わせ更新。趣味 → 楽しみ に変更 |
| 1.4.0 | 2026-03-07 | Hero に非日常体験イベント主催を活動として追加。About に人生哲学の文章を追加。楽しみの内容を復元 |
| 1.5.0 | 2026-03-07 | About に生年月日・蠍座・酉年を追加。「気になった〜」の文を削除。Hero desc を2文に整理 |
| 1.5.1 | 2026-03-07 | 哲学テキストに「指針」ラベルを追加 |
| 1.5.2 | 2026-03-07 | 指針テキストを案Aに修正（繰り返し表現を整理） |
| 1.6.0 | 2026-03-07 | Works に「翡翠眼」カード追加。サムネイル実画像対応・キャッチコピー要素追加・images/ ディレクトリ新設 |
| 1.6.1 | 2026-03-07 | 翡翠眼カードにレポート画面スクリーンショット追加。ホバー時クロスフェード切り替え（CSS only）実装 |
| 1.7.0 | 2026-03-08 | Nagi（凪）worksカード追加。記録画面・カレンダー画面のサムネイル実画像対応・デュアル画像クロスフェード実装 |
| 1.7.1 | 2026-03-08 | Nagiカードのサムネイルをアイコン画像に変更。画像ファイル名を整理 |
| 1.7.2 | 2026-03-08 | Nagiカードに記録1・記録2を追加。4枚自動スライドショー（CSS アニメーション）に変更 |
| 1.7.3 | 2026-03-08 | Nagiサムネイルをアイコン常時表示 + 手動スライド（ドットナビ・タッチスワイプ）に変更。自動アニメーション廃止 |
| 1.7.4 | 2026-03-08 | Nagi説明文を「多角的な視点（次元の上昇）」の概念を軸に書き直し |
| 1.7.5 | 2026-03-08 | Nagiカードを手動スライドから4枚CSSアニメーション自動スライドショーに差し戻し。UIバランス改善 |
| 1.7.6 | 2026-03-08 | 翡翠眼・Nagi を含む全worksカードのサムネイルを手動スライド形式（JS実装）に統一。自動スライドショー廃止 |
| 1.7.7 | 2026-03-08 | スライド矢印ボタンに半透明黒丸背景を追加し視認性を改善。ドットサイズ・shadowも強化 |
| 1.8.0 | 2026-03-08 | Frequency Analyzer（周波数測定器）カード追加。ライト／ダークモード2枚スライド実装 |
| 1.8.1 | 2026-03-08 | Frequency Analyzerカードのサムネイルをスクリーンショット（静止画）から画面収録動画（MP4）に変更。`<video autoplay muted loop playsinline>` 実装 |
| 1.8.2 | 2026-03-08 | freq-video-light.mp4 をクリーン再録画版に差し替え（カーソル・他アプリの映り込みを除去）。静止画参考ファイル（freq-light.jpg / freq-dark.jpg）を削除 |
| 1.8.7 | 2026-03-08 | Vercel プロジェクト名を `takimototetsuya` に変更。公開 URL を `takimototetsuya.vercel.app` に更新 |
| 1.8.8 | 2026-03-08 | 翡翠眼の説明文から「広告なし・会員登録なし」、Frequency Analyzerの説明文から「ブラウザ完結・会員登録不要」を削除 |
| 1.8.9 | 2026-03-08 | Nagiサムネイル（記録１・記録２・カレンダー）をナイトモードからライトモード画像に差し替え |
| 1.9.0 | 2026-03-08 | Nagiスライドを4枚から7枚に拡張（記録３・記録４・記録５を追加）。全6枚ライトモード画像を掲載 |
| 2.0.0 | 2026-03-08 | サイトアイコン（`サイトアイコン.png`）をfaviconに設定。navbarロゴ横に20px・opacity 0.75 でミニマル掲載 |
| 2.1.0 | 2026-03-08 | noteセクション追加（独立タブ・丸型アイコン表示）。@bright_yarrow261・@life_ops の2アカウント掲載 |
| 2.1.2 | 2026-03-26 | @tech_news_ アカウントを削除。noteセクションは2アカウント構成に変更 |
| 2.1.3 | 2026-03-28 | メールアドレスを contact@flowmate.jp に変更。noteセクションに @_minase_ritsu アカウントを追加（3アカウント構成） |
| 2.2.0 | 2026-03-28 | Worksに「中心銘（ちゅうしんめい）」カード追加。和紙調ベージュ背景のサムネイル・1枚スライド実装。作品一覧4件構成 |
| 2.2.1 | 2026-03-28 | 中心銘サムネイル画像（`thumb-chushinmei.png`）配置。Nagiアイコン画像（`Nagi-アイコン.jpeg`）復元 |
| 2.2.2 | 2026-03-28 | 中心銘サムネイルの表示位置を上部基準（`object-position: top center`）に変更 |
| 2.2.3 | 2026-03-28 | ナビバー左側のロゴテキスト（名前）を削除しアイコンのみに変更。モバイルでナビリンクを横スクロール可能に |
| 2.2.4 | 2026-03-28 | Nagi説明文を全面改訂。AIキャラクター「凪」の役割・感情ラベル自動抽出・多面的視点の概念をより具体的に記述 |
| 2.2.5 | 2026-03-30 | OGPメタタグ追加（og:title / og:description / og:image / twitter:card）。専用OGP画像（`ogp.png` 1200×630px）を設置。リンク共有時にプレビュー画像が表示されるよう対応 |
| 2.3.0 | 2026-04-27 | UI全体を上品に刷新。背景色をオフホワイト（#f7f6f3）に変更、ヒーロー名をNoto Serif JPに変更、ナビにbackdrop-blur追加、セクションラベルに左ボーダーアクセント追加。Aboutセクションをシングルカラム中央寄せに変更、生年月日を縦仕切り線付き横並びに、「指針」を両側ライン付きセンター区切りに変更、本文テキスト中央揃え。About本文を文語調に改訂。翡翠眼サムネイルをダークグリーンのヒービジュアルに差し替え（1枚）。スライド画像が1枚の場合は矢印・ドットを非表示に変更 |
| 2.3.1 | 2026-04-27 | 翡翠眼の説明文を全面改訂 |
| 2.3.2 | 2026-04-27 | Nagiの説明文を全面改訂。3段落構成（キャッチ・コンセプト・機能説明）に変更 |
| 2.4.0 | 2026-05-24 | GSAP + ScrollTrigger + Lenis を導入し、シネマティックなスクロール演出へ刷新（ページイントロのオーバーレイ、ヒーロー入場、セクション罫線描画、交互スライドインのリビール、ヒーローのパララックス）。Intersection Observer ベースの reveal を GSAP/ScrollTrigger へ移行 |
| 2.4.1 | 2026-05-24 | カスタムカーソルを廃止 |
| 2.4.2 | 2026-05-24 | Aboutの区切りラベルを「指針」→「軸」に変更 |
| 2.5.2 | 2026-05-26 | モバイル/タブレットのナビゲーションを横スクロールからフル表示に変更。860px以下でgap 22px、540px以下でフォント・gap・paddingを縮小、380px以下の極小幅用保険ルールを追加 |
| 2.5.1 | 2026-05-25 | Events のキャプションから「非日常体験イベント」を削除（出典表記「Instagram」のみに） |
| 2.6.0 | 2026-06-01 | **パフォーマンス・アクセシビリティ・SEO改善。** 画像アセットを13MB→1.0MBに削減（`ogp.png` 6MB→`ogp.jpg` 84KB、`サイトアイコン.png` 1.1MB→`favicon.png` 24KB、works画像をJPG化・長辺1200px縮小、`freq-video-dark.mp4` を720幅・無音で再エンコード 3.0MB→112KB）。全`<img>`に `loading="lazy"`/`decoding="async"`、動画に `preload="metadata"` を付与。GSAP/ScrollTrigger/Lenis/`script.js` を `defer` 化しレンダーブロッキングを低減。CDN障害時のフェイルセーフを追加（`#page-intro` のタイムアウト除去 + `script.js` 側で gsap/Lenis 未読込ガード→ネイティブスクロールにフォールバック）。`--muted` を `#847f77`→`#6f6a60` に暗化し WCAG AA（4.5:1）達成。schema.org Person の JSON-LD と `canonical` を追加。スライドショーにタッチスワイプ、`prefers-reduced-motion` 時の動画停止、hero の `will-change` 解除を実装。`.gitignore` に `.claude`/`.DS_Store` を追加 |
| 2.5.0 | 2026-05-25 | **エディトリアル昇華リデザイン。** 見出し書体を Shippori Mincho B1（格のある明朝）へ更新。タイプ階層を再設計（ベース15px、`--ink/--text/--muted` の3層）。全セクションに「Latin小ラベル＋和文明朝見出し」のヘッダー体系を新設（works=制作 / events=催し / note=言葉 / contact=連絡）。配色を深化（生成り継続・`--paper-2`・タウープ `--accent #a3937a` / 可読版 `--accent-ink #7c6f59`）。Worksカードに索引番号01-04・明朝題字・「View →」アフォーダンス・細罫サムネ枠を追加。EventsのInstagram埋め込みを paper-2 フレーム＋細罫＋figcaption で世界観に統一。About本文を明朝化。Note/Contactを洗練。`prefers-reduced-motion` 対応・`:focus-visible` を追加。Worksタイトルの読み仮名（翡翠眼・中心銘）を省略 |
| 2.7.0 | 2026-06-10 | Works に「Lisa Mizuno」カード追加（05）。DJ・アーティスト Lisa Mizuno のポートフォリオサイト制作実績。カテゴリは他4件の "Web Development" と差別化し **"Web Design / Artist Site"** とした。サムネイル（`thumb-lisa-mizuno.jpg`）は Playwright でライブサイトを撮影しJPG最適化。`.work-thumb-lisa`（モノクローム背景 `#0d0d0d`）を追加。作品一覧5件構成に |
| 2.7.1 | 2026-06-10 | **アクセシビリティ改善（見た目不変）。** 全セクションを `<main>` で囲みスクリーンリーダーのメイン領域ジャンプに対応。About の eyebrow を `<span>`→`<h2>` に変更し見出しアウトラインに追加（クラス・スタイルは据え置きで表示は同一）。タッチ端末（`@media (hover: none)`）でスライド矢印を常時表示。スライドドットに透明 `::after` を重ねタップ範囲を縦25px相当に拡大（WCAG 2.5.8 配慮、見た目は5pxのまま） |
| 2.7.2 | 2026-06-10 | Events グリッドの折り返しを 860px→**900px** に変更。861〜883px 付近で Instagram 埋め込みの `min-width: 326px` と2カラムが競合し約2pxはみ出していた問題を解消（works は 860px のまま分離） |
| 2.8.1 | 2026-07-03 | 制作実績05「Lisa Mizuno」の説明文を、ポートフォリオ掲載文として推敲（見た目・カテゴリ・サムネイルは不変）。①「活動を紹介する」を回避し「活動世界を…構成へ落とし込み」と**制作者視点**の表現に変更（自分のサイト内で他者を「紹介」する語感を解消）、②末尾に `<br><br>デザインから制作まで担当。` を追加し**担当役割を明記**（06 と同じ意図）、③文末を**体言止め**で統一し二重ヲ格を解消。「アーティストポートフォリオサイト」→「ポートフォリオサイト」に簡略化 |
| 2.8.0 | 2026-07-03 | Works に「CHINJU CLI」カード追加（06）。コードの変更箇所だけでなく影響範囲まで横断レビューする確証エンジンのLP案件。**自作プロダクトではなく LP制作・市場調査・方向性整理・PR を担当した案件**のため、カテゴリを **"LP / Branding & PR"** として区別し、説明文にも担当役割を明記（製品説明と役割を `<br><br>` で段落分け）。サムネイル（`thumb-chinju.jpg`）は Playwright でライブサイトを **4:3（1400×1050）** で撮影し、cover 表示での左右見切れを回避。`.work-thumb-chinju`（LPに合わせたライトな微グラデ背景 `#f2efe9`）を追加。作品一覧6件構成に |
| 3.0.5 | 2026-07-03 | 制作実績05「Lisa Mizuno」サムネイル（`thumb-lisa-mizuno.jpg`）を差し替え。旧画像は全ページを **1400×800（比率1.75）** で撮影しており、サムネ枠 `aspect-ratio:16/10`（=1.6）＋`object-fit:cover` に対し横長すぎて**左右が見切れて**いた（左上ロゴ・右上ナビが欠ける。860px以下の `4/3` 枠ではさらに悪化）。対処として、v2.8.0 CHINJU と同じ「枠比率に合わせた撮影」の方針を発展させ、**サイト全体ではなくヒーローの主要ビジュアル（モノクロの人物＋大見出しタイポ＋DJ·ARTIST）を 16:10（1600×1000）で切り出して撮影**する方式に変更。撮影時に上部ナビと右下「scroll」指標（`#hero::after` 疑似要素）を非表示にして余白・ブラウザ的要素を排し作品性を強調。cover の枠比率と完全一致しPC表示で見切れゼロ、他5件と同じ細罫スクショ枠の一貫性も維持（HTML/CSS変更なし・画像差し替えのみ） |
| 3.0.4 | 2026-07-03 | 制作実績02「Nagi（凪）」の説明文を改訂。キャッチ「自己を観る。」は維持し、本文を「書くほどに、視界がひらく自己観察アプリ。」のコンセプト1文＋機能説明1段落の簡潔な2段構成に刷新（AI「凪 -Nagi-」が静かな問いを返す・褒めず諭さず隣で問いかける・多角的に眺め直し視界がひらく、という体験価値を平易に表現）。従来の抽象的な「次元の上昇／多面的視点」表現を平明化 |
| 3.0.3 | 2026-07-03 | 制作実績01「翡翠眼」の説明文を全面改訂。技術スタックと担当範囲を具体的に伝える内容（Next.js製・為替/株価指数/国債/コモディティを5つの外部APIから集約・月次/週次/日次レポートをリサーチ〜執筆〜公開まで自動生成・Promise.allSettled＋多段ISRキャッシュの障害耐性・金融エディトリアルUIとアクセシビリティ・Vitest＋CIによる品質担保・全体を一気通貫で設計実装）に刷新し2段落構成に変更。段落間余白のため `.work-desc + .work-desc { margin-top: 0.9em }` を追加 |
| 3.0.2 | 2026-07-03 | About「軸」本文の薄墨→墨文字色スクロールスクラブ演出を削除（ユーザー確認により不要と判断）。静的表示（アニメーションなし）に変更 |
| 3.0.1 | 2026-07-03 | v3.0.0 の要素整理（ユーザー確認により削除）。**Hero**: 読み仮名「たきもと てつや」・右端縦書き「作品集 — 二〇二六」を削除（スクロール指標・WebGL靄は継続）。**Footer**: 奥付行を「設計・制作 — 滝本 哲也」「書体 — しっぽり明朝 B1 / Noto Sans JP / Inter」を除き `© 2026 Tetsuya Takimoto` のみに簡略化 |
| 3.0.0 | 2026-07-03 | **エディトリアル昇華リデザイン第2弾（静的品質・質感・テキスト演出・WebGLの総合強化）。** ①デザイントークン体系化: インク6階調（`--ink-2` `--muted-2` `--faint` `--line-strong` 追加）、タイポ拡張（`--fs-caption` `--fs-micro`、`--fs-hero` 上限 6rem→7.2rem）、余白リズム統一（`--rhythm` `--gutter` `--sp-1〜6`）。②紙グレイン: `body::after` に SVG feTurbulence の印刷粒子（opacity 0.035・multiply、540px以下は normal に緩和）。③印刷物ディテール: 四隅トンボ風十字（1100px以上）、右下の柱・ノンブル `.page-marker`（スクロール連動、900px未満非表示）、各セクション左端の縦書き章題 `.sec-margin`（1100px以上）。④Works刷新: 均等2カラム→**1作品=1行の12カラム非対称交互スプレッド**（奇数=左サムネ/偶数=右サムネ、16:10サムネ、白抜きゴースト索引番号、罫線区切り。860px以下は従来の4:3縦積み）。⑤Hero刷新: 読み仮名「たきもと てつや」・右端縦書き「作品集 — 二〇二六」・左下スクロール指標（ラインループ）・WebGL用canvas＋CSS滲みフォールバックを追加。⑥Footer奥付化: 明朝名＋Latin併記／ナビ再掲／奥付行／頁首へ。⑦**GSAP 3.13.0化＋SplitText導入**: hero名の文字マスク出現、見出しの字間収束＋blur→focus、about「軸」の薄墨→墨文字スクラブ、work題字の文字出現。全分割は `document.fonts.ready`（上限2.5s）後に初期化（FOUT対策）、**全行1行に収まる場合のみ分割**（CJK禁則保護）、SplitText欠落時は行送りへフォールバック。⑧磁気ホバー: nav/footerナビ/contact/頁首へ（係数0.3・elastic復帰）。⑨**素WebGL1「墨の靄」シェーダ（`fx.js` 新規）**: fbm 3オクターブ・paper→accent 2色・強度上限0.07・DPR上限1.5×0.75解像度・`gsap.ticker` 統一・hero画面外/タブ非表示/860px未満で停止・起動成功時のみCSS滲みをフェード（全環境フォールバック）。⑩ナビ/柱のアクティブ判定を `threshold: 0.4` → **中央帯 `rootMargin: -45%`** に修正（縦長化した works で追従しない問題の解消）。⑪Instagram埋め込みの遅延リサイズに `ResizeObserver`→`ScrollTrigger.refresh()`（debounce 300ms）で追従。⑫カスタムカーソルは実装後のゲート確認で撤去（v2.4.1 の判断を踏襲、磁気ホバーのみ継続） |

---

## 目次

1. [概要](#1-概要)
2. [技術スタック](#2-技術スタック)
3. [ページ構成・セクション仕様](#3-ページ構成セクション仕様)
4. [デザイン仕様](#4-デザイン仕様)
5. [機能仕様](#5-機能仕様)
6. [デプロイ・運用](#6-デプロイ運用)

**セクション構成（3章）:** 3.1 Nav → 3.2 Hero → 3.3 About → 3.4 Works → 3.5 Events → 3.6 Note → 3.7 Contact → 3.8 Footer

---

## 1. 概要

### 1.1 プロジェクト概要

Builder・滝本哲也のポートフォリオサイト。制作したプロダクト・自己紹介・連絡先を掲載する。採用担当者・クライアント・協業パートナーを主な閲覧対象とし、静かで誠実、文語的で格調ある印象を与えることを目的とする。

v2.5 では、静かで文語的な世界観を保ったまま視覚レイヤーをプロ水準のエディトリアル（雑誌的な版面）へ昇華。設計規律として genre=editorial / macrostructure=Long Document を採用（`style.css` 冒頭に Hallmark スタンプを記載）。

### 1.2 プロフィール

| 項目 | 内容 |
|---|---|
| 氏名 | 滝本 哲也 |
| 職業ラベル | Builder |
| 活動内容 | Web開発・エンジニアリング・自動化フロー開発・ツール開発・非日常体験イベントの企画主催。生活を豊かにするアイデアの具現化 |
| 楽しみ | 探索・エンタメ鑑賞・新技術のキャッチアップ |

### 1.3 ターゲット

| ターゲット | 目的 |
|---|---|
| 採用担当者 | プロダクト志向・姿勢の確認 |
| クライアント | 制作実績・連絡先の取得 |
| 協業パートナー | 価値観・デザイン観の確認 |

---

## 2. 技術スタック

### 2.1 使用技術

| 技術 | 用途 |
|---|---|
| HTML5 | マークアップ・セマンティクス |
| CSS3 | スタイリング・アニメーション・レスポンシブ |
| JavaScript (ES2020) | インタラクション・スライドショー・アクティブナビ |
| GSAP 3.13.0 + ScrollTrigger + SplitText | 入場演出・スクロールリビール・パララックス・文字単位テキスト演出 |
| Lenis 1.1.14 | スムーススクロール |
| WebGL 1（素実装・`fx.js`） | ヒーロー背景「墨の靄」fbmシェーダ |
| Google Fonts | Web フォント配信 |

フレームワーク・ビルドツールは使用しない（静的サイト）。GSAP / ScrollTrigger / SplitText / Lenis は CDN から読み込み（GSAP 3.13 で全プラグインが無償化）。WebGL シェーダは `fx.js` に自己完結で分離。依存パッケージなし、ビルド手順不要。

### 2.2 ファイル構成

```
-portfolio/
├── index.html          # メインページ（全セクション）
├── style.css           # 全スタイル定義（冒頭に Hallmark スタンプ）
├── script.js           # GSAP/Lenis 演出・SplitTextテキスト演出・磁気ホバー・スライドショー・アクティブナビ
├── fx.js               # ヒーロー背景「墨の靄」WebGLシェーダ（自己完結・フォールバック内蔵）
├── spec.md             # 本仕様書
├── images/                         # 最適化済みアセット（合計約1.0MB）
│   ├── thumb-hisuigan.jpg         # 翡翠眼 マーケットデータ画面（1枚）
│   ├── nagi-icon.jpg              # Nagi スライド1（アイコン）
│   ├── nagi-record1.jpg          # Nagi スライド2（記録画面1・ライトモード）
│   ├── nagi-record2.jpg          # Nagi スライド3（記録画面2・ライトモード）
│   ├── nagi-record3.jpg          # Nagi スライド4（記録画面3・ライトモード）
│   ├── nagi-record4.jpg          # Nagi スライド5（記録画面4・ライトモード）
│   ├── nagi-record5.jpg          # Nagi スライド6（記録画面5・ライトモード）
│   ├── nagi-calendar.jpg         # Nagi スライド7（カレンダー画面・ライトモード）
│   ├── thumb-chushinmei.jpg      # 中心銘 メイン画面
│   ├── thumb-lisa-mizuno.jpg     # Lisa Mizuno ヒーロー主要ビジュアル切り出し（1枚・16:10・1600×1000・モノクローム）
│   ├── thumb-chinju.jpg          # CHINJU CLI LP ファーストビュー（1枚・4:3撮影・ライト背景）
│   ├── freq-video-light.mp4      # Frequency Analyzer 画面収録・ライトモード（188KB）
│   ├── freq-video-dark.mp4       # Frequency Analyzer 画面収録・ダークモード（112KB・720幅/無音）
│   ├── ogp.jpg                   # OGP画像（1200×630px・リンク共有プレビュー用・84KB）
│   └── favicon.png               # サイトアイコン（128×128px・favicon/navbar掲載・24KB）
└── .claude/                        # ローカルツール設定（git管理外）
    └── launch.json     # ローカル開発サーバー設定
```

画像は `sips`（リサイズ/JPG変換）と `ffmpeg`（動画再エンコード）で最適化。元の高解像度PNG（3024px幅スクショ・6MB OGP等）はリポジトリから削除済み。`<head>` には schema.org Person の JSON-LD と `canonical` を記載し、外部スクリプトは `defer` でロードする。

### 2.3 外部リソース

| リソース | 配信 | 用途 |
|---|---|---|
| Inter（300 / 400 / 500） | Google Fonts | 英字 UI・ラベル・索引・キャプション |
| Noto Sans JP（300 / 400） | Google Fonts | 日本語本文・説明文 |
| Shippori Mincho B1（400 / 500 / 600） | Google Fonts | 見出し・名前・about本文・work題字（明朝） |
| GSAP 3.13.0 / ScrollTrigger / SplitText | cdnjs | アニメーション・文字分割（`defer`） |
| Lenis 1.1.14 | unpkg | スムーススクロール（`defer`） |
| Instagram embed.js | instagram.com | Events 埋め込み（`async`） |

外部スクリプトは全て `defer`/`async` で非同期化し初回描画をブロックしない。CDN（cdnjs/unpkg）が読み込めない場合でも、`script.js` 側のガードとインラインのタイムアウト処理によりコンテンツを表示する（[5.5 フェイルセーフ](#55-cdnフェイルセーフ) 参照）。

### 2.4 ローカル開発

```bash
npx serve -l 3000 .
```

`.claude/launch.json` に設定済みのため、Claude Code から `preview_start` でも起動可能。

---

## 3. ページ構成・セクション仕様

各セクションは共通のヘッダー体系を持つ：**Latin小ラベル（eyebrow）＋和文明朝見出し（`.sec-title`）を縦積み**（works=制作 / events=催し / note=言葉 / contact=連絡。about は eyebrow を中央配置し、本文の「軸」ステートメントを主役とする）。

### 3.1 ナビゲーション

| 項目 | 仕様 |
|---|---|
| 種別 | 固定（`position: fixed`） |
| 高さ | `--nav-h: 60px` |
| 背景 | `rgba(247,246,243,0.78)` + `backdrop-filter: blur(16px)` |
| スクロール連動（外観） | スクロール量 > 8px で `.scrolled` 付与 → 下罫線出現・背景不透明度を強化 |
| 左側 | アイコン（`favicon.png` 22px・opacity 0.8）のみ |
| 右側 | リンク（about / works / events / note / contact）、大文字表示 |
| モバイル | 全タブを常時表示（横スクロールなし）。860px以下でgap 22px・padding 20px、540px以下でフォント0.62rem・letter-spacing 0.16em・gap 14px・padding 18px、380px以下でフォント0.58rem・letter-spacing 0.12em・gap 11px |
| リンクスタイル | 通常: `var(--muted)` / ホバー・アクティブ: `var(--ink)`。アクティブはタウープ（`--accent-ink`）の下線（`scaleX`） |
| スクロール連動（active） | Intersection Observer でアクティブセクションを検出し `.active` を付与 |

### 3.2 Hero セクション

| 要素 | 仕様 |
|---|---|
| 高さ | `min-height: 100vh` |
| コンテンツ位置 | 縦中央寄せ（`align-items: center`） |
| ラベル | "Builder"（Inter 0.70rem、letter-spacing 0.26em、uppercase、`--accent-ink`） |
| 名前 | 「滝本 哲也」（**Shippori Mincho B1**、`clamp(3.6rem, 9vw, 7.2rem)`、weight 400、`--ink`） |
| 説明文 | Noto Sans JP、`--fs-body`、`var(--text)`、line-height 2.15 |
| スクロール指標 | 左下に "Scroll"（縦書きLatin）＋1px線のscaleYループ（860px未満非表示、reduced-motion時静止） |
| 背景 | `#hero-canvas`（WebGL「墨の靄」、5.5参照）。非対応環境は `#hero::before` の静的radial滲みが残る |
| 底部ライン | `.hero-line`（ScrollTrigger 連動なし／入場時に `scaleX` 描画） |
| 入場演出 | `document.fonts.ready`（上限2.5s）待ち → `#page-intro` を `scaleY` 巻き上げ → sub→**名前を文字単位マスク出現（SplitText `type:'chars'` `mask:'chars'` stagger 0.06）**→desc→スクロール指標→ライン（GSAP timeline）。SplitText欠落時は名前を行送りにフォールバック |
| パララックス | デスクトップのみ：スクロールに応じ name `yPercent:-12` / desc 減衰（`scrub`） |

### 3.3 About セクション

| 要素 | 仕様 |
|---|---|
| レイアウト | シングルカラム中央寄せ（`max-width: 660px`） |
| eyebrow | "about"（`<h2 class="sec-eyebrow about-eyebrow">`、中央配置）。見た目はラベルのままだが、セマンティックには本セクションの見出し（h2）として機能し見出しアウトラインに含まれる |
| メタ情報 | 「1993 / 11 / 9 ｜ 蠍座 ｜ 酉年」Inter、縦仕切り線（`--accent`）区切り |
| 区切りラベル | 「軸」両側に罫線が伸びるセンター区切り（Shippori Mincho、`--accent-ink`） |
| 本文1（人生哲学） | 「現世とは心を高めるために与えられた期間であり、魂を磨くための修養の場である。人間の生きる意味と価値は、その錬磨にある。」**Shippori Mincho 明朝・中央寄せ・`--ink`・`--fs-lead`** |
| 本文2（補助） | 「好奇心の向くまま——探索し、鑑賞し、新しい技術と出会う。与え、分かち合う。」Noto Sans JP、`--muted` |
| リビール | eyebrow→meta→divider→補助 の順に GSAP で順次表示。「軸」本文は静的表示（アニメーションなし） |

### 3.4 Works セクション — 非対称スプレッド形式

作品を**1作品=1行の12カラム非対称交互構成**（誌面スプレッド風）で表示する。セクションヘッダーは「works / 制作」。

#### 3.4.1 スプレッド構造

```
[ works（eyebrow） ]
[ 制作（明朝見出し） ]

── 罫線 ──────────────────────────────
[ サムネイル(16:10)   ]  [ 01(ゴースト索引) ]   ← 奇数: thumb 1/8・info 8/13
                          [ CATEGORY        ]
                          [ タイトル(明朝)   ]
                          [ キャッチ(明朝伊) ]
                          [ 説明文・View →  ]
── 罫線 ──────────────────────────────
[ 02(ゴースト索引) ]   [ サムネイル(16:10)   ]  ← 偶数: ミラー配置（info 1/6・thumb 6/13）
...
```

860px以下は従来どおり1カラム縦積み（thumb→info、サムネ4:3）。

#### 3.4.2 作品カード仕様

| 要素 | 仕様 |
|---|---|
| サムネイル | デスクトップ `aspect-ratio: 16/10` / 860px以下 `4/3`、`1px solid var(--line)` の細罫枠、`<img>`/`<video>` 実画像 |
| ゴースト索引 | 白抜き明朝大数字（01-06、`clamp(3.4rem, 6vw, 5.2rem)`、`-webkit-text-stroke: 1px var(--faint)`、aria-hidden） |
| メタ行 | カテゴリ（uppercase、`--muted`）のみ（小索引番号はゴースト索引へ統合） |
| タイトル | **Shippori Mincho B1**、`--fs-work`（`clamp(1.15rem,1.8vw,1.45rem)`）、weight 500、`--ink` |
| キャッチコピー | **Shippori Mincho B1**、0.95rem、italic、`--text` |
| 説明文 | Noto Sans JP、0.8rem、weight 300、`--text` |
| View アフォーダンス | 「View →」（Inter、uppercase、`--muted`）。カードホバーで `--ink` に変色・矢印が `translateX` |
| ホバー | カードが `y:-4` 浮上、サムネ画像が `scale:1.05`（GSAP） |
| スライド矢印 | ホバー時表示。`rgba(26,26,28,0.42)` + `blur(4px)` の丸ボタン（30px）、白シェブロン。**タッチ端末（`@media (hover: none)`）では opacity 0.85 で常時表示**（1枚のみのカードは JS が `display:none` にするため対象外） |
| ドット | 5px 円、`box-shadow` 付き。現在: 白98%・1.15倍 / 非選択: 白50%。**透明 `::after`（`inset: -10px -2px`）でタップ範囲を縦25px相当に拡大**（見た目は5pxのまま） |
| リンク | カード全体を `<a target="_blank">` で外部サイトへ |

#### 3.4.3 作品一覧（v3.0.0 時点）

| # | カテゴリ | タイトル | リンク | サムネイル |
|---|---|---|---|---|
| 01 | Web Development | 翡翠眼 | https://hisuigan-macro-insight-engine.vercel.app/ | `thumb-hisuigan.jpg`（1枚） |
| 02 | Web Development | Nagi（凪） | https://nagi-xi.vercel.app/ | `nagi-icon.jpg` / `nagi-record1〜5.jpg` / `nagi-calendar.jpg`（7枚手動スライド） |
| 03 | Web Development | 中心銘 | https://chushinmei.vercel.app | `thumb-chushinmei.jpg`（1枚・和紙調ベージュ背景） |
| 04 | Web Development | Frequency Analyzer | https://frequency-analyzer.vercel.app | `freq-video-light.mp4` / `freq-video-dark.mp4`（2枚手動スライド・`<video autoplay muted loop>`） |
| 05 | Web Design / Artist Site | Lisa Mizuno | https://lisa-mizuno.vercel.app/ | `thumb-lisa-mizuno.jpg`（1枚・モノクローム背景 `#0d0d0d`） |
| 06 | LP / Branding & PR | CHINJU CLI | https://service.chinju.org/ | `thumb-chinju.jpg`（1枚・4:3撮影・ライト背景 `#f2efe9`） |

※ タイトルの読み仮名（翡翠眼＝ひすいがん／中心銘＝ちゅうしんめい）は v2.5.0 で省略。
※ 05 Lisa Mizuno は他者（DJ・アーティスト）向けの制作実績であり、カテゴリを "Web Design / Artist Site" として自作プロダクト（01-04）と区別している。
※ 06 CHINJU CLI は自作プロダクトではなく、LP制作・市場調査・方向性整理・PR を担当した案件。カテゴリを "LP / Branding & PR" とし、説明文でも担当役割を明記して制作物（01-05）と区別している。

### 3.5 Events セクション

| 要素 | 仕様 |
|---|---|
| 位置 | Works と Note の間 |
| ヘッダー | 「events / 催し」 |
| レイアウト | 2カラムグリッド（`events-grid`）、gap 48px、max-width 1100px |
| 埋め込み方式 | Instagram 公式 blockquote embed（`embed.js` 非同期ロード） |
| フレーム | 各埋め込みを `.event-frame`（背景 `--paper-2`・`1px solid var(--line)`・padding 22px）で包み、白いIGカードの浮きを解消 |
| キャプション | `<figcaption>`：ソース表記「Instagram」 |
| レスポンシブ | 900px 以下で1カラム（Instagram 埋め込みの `min-width: 326px` との競合回避のため works より早く折り返す） |

#### 3.5.1 掲載イベント一覧

| # | Instagram URL |
|---|---|
| 1 | https://www.instagram.com/p/C5VzL4orpJZ/ |
| 2 | https://www.instagram.com/p/C71jN7USIc2/ |

### 3.6 Note セクション

| 要素 | 仕様 |
|---|---|
| ヘッダー | 「note / 言葉」 |
| レイアウト | 縦積みカードリスト（`flex-direction: column`）、max-width 1100px、上下ヘアライン区切り |
| カード構成 | アバター画像（56px・丸型）＋ ハンドル名（`--accent-ink`）＋ 説明文 ＋ 右端の矢印（→） |
| リンク | カード全体が `<a target="_blank">` でアカウントページへ |
| ホバー | 背景が `--paper-2`、左右パディング拡張、矢印が `--ink` に変色・`translateX` |

#### 3.6.1 掲載アカウント一覧

| # | ハンドル | 説明文 | URL |
|---|---|---|---|
| 1 | @bright_yarrow261 | Claude・AI活用を実践ベースで発信。「使いこなす技術」をテーマに、プロンプト・ワークフロー・ツール活用を体系的にまとめています。 | https://note.com/bright_yarrow261 |
| 2 | @life_ops | 頭が良いとは、どういうことか。構造で考え、本質を見抜き、判断の精度を上げる。地頭は才能ではなく、フォームだ。 | https://note.com/life_ops |
| 3 | @minase_ritsu | 好奇心の多動。ジャンル不問で気になったことを調べて記事にしています。 | https://note.com/minase_ritsu |

### 3.7 Contact セクション

| 要素 | 仕様 |
|---|---|
| レイアウト | シングルカラム（max-width 1100px） |
| ヘッダー | 「contact / 連絡」 |
| リードテキスト | 「制作のご相談、催しへのお誘い——ご連絡をお待ちしております。」（Shippori Mincho、`--text`） |
| リンク | `contact@flowmate.jp`（Inter 0.95rem） |
| リンクホバー | `--ink` に変色 + 下線アニメーション（`scaleX`） |

### 3.8 Footer（奥付）

3段構成の奥付スタイル。上罫線は `--line-strong`。

| 要素 | 仕様 |
|---|---|
| 名前 | 「滝本 哲也」（明朝 1.4rem）＋ "TETSUYA TAKIMOTO"（Inter `--fs-micro`・uppercase） |
| フッターナビ | about〜contact を再掲（`aria-label` 付き `<nav>`、ホバーでタウープ下線） |
| 奥付行 | 「© 2026 Tetsuya Takimoto」（`--fs-micro`・`--muted-2`） |
| 頁首へ | 「頁首へ ↑」（明朝、`href="#hero"`、Lenis スムーススクロール委譲） |

---

## 4. デザイン仕様

### 4.1 デザインコンセプト

genre=editorial / macrostructure=Long Document。生成りの紙面・明朝の見出し・ヘアラインの罫線言語・抑制されたモーションで、静かで文語的な世界観を雑誌的な版面へ昇華する。装飾を足すのではなく、タイプ階層と余白で「格」を立てる。

### 4.2 カラーパレット

| CSS 変数 | 値 | 用途 |
|---|---|---|
| `--paper` | `#f7f6f3` | ページ背景（生成り） |
| `--paper-2` | `#efece6` | フレーム・微カード（Events 等） |
| `--ink` | `#1a1a1c` | 見出し・一次本文（主役） |
| `--ink-2` | `#3c3a36` | 見出し補助 |
| `--text` | `#33312e` | 本文・説明文 |
| `--muted` | `#6f6a60` | ラベル・メタ（WCAG AA: `--paper` 上で約5:1） |
| `--muted-2` | `#8f887b` | キャプション・柱・奥付行（装飾情報） |
| `--faint` | `#c9c3b6` | ゴースト索引・縦書き章題・トンボ（透かし） |
| `--line` | `#e4e0d9` | ヘアライン・罫線 |
| `--line-strong` | `#d5cfc3` | footer上罫・カーソル系の強罫 |
| `--accent` | `#a3937a` | 罫線・装飾（タウープ） |
| `--accent-ink` | `#7c6f59` | eyebrow・索引・ハンドル名（可読タウープ） |

紙の質感: `body::after` に SVG feTurbulence（`baseFrequency 0.9` / `numOctaves 2` / 240pxタイル）の静止グレインを全面固定（`opacity 0.035`・`mix-blend-mode: multiply`・`pointer-events: none`・z-index 9998）。540px以下は合成負荷対策で `normal`・`opacity 0.025` に緩和。

### 4.3 タイポグラフィ

| 用途 | フォント | ウェイト | サイズ |
|---|---|---|---|
| Hero 名前 | Shippori Mincho B1 | 400 | `--fs-hero` `clamp(3.6rem, 9vw, 7.2rem)` |
| セクション見出し | Shippori Mincho B1 | 500 | `--fs-h2` `clamp(1.8rem, 3.6vw, 2.7rem)` |
| about本文 / contactリード | Shippori Mincho B1 | 400 | `--fs-lead` `1.05rem` |
| work題字 | Shippori Mincho B1 | 500 | `--fs-work` `clamp(1.3rem, 2vw, 1.7rem)` |
| キャプション / 柱・奥付 | Noto Sans JP / Inter | 300–500 | `--fs-caption` `0.78rem` / `--fs-micro` `0.6rem` |
| 日本語本文・説明文 | Noto Sans JP | 300 / 400 | `--fs-body` `0.9rem` ほか |
| ラベル・索引・ナビ | Inter | 400 / 500 | `--fs-label` `0.68rem` 〜 |

ベース文字サイズ 15px、和文 line-height 約1.8〜2.5。

### 4.4 CSS 変数一覧（抜粋）

| 変数 | 値 | 用途 |
|---|---|---|
| `--nav-h` | `60px` | ナビゲーション高さ |
| `--max-w` | `1100px` | コンテンツ最大幅 |
| `--rhythm` | `clamp(96px, 14vh, 168px)` | 全セクション縦padding（860px以下 `clamp(84px, 12vh, 120px)`） |
| `--gutter` | `clamp(24px, 5vw, 48px)` | 左右padding（nav/hero/全セクション共通） |
| `--sp-1〜6` | `8/16/24/40/64/104px` | 8pxベースの余白スケール |
| `--font-latin` | `'Inter', sans-serif` | 欧文サンセリフ |
| `--font-ja` | `'Noto Sans JP', sans-serif` | 日本語サンセリフ |
| `--font-serif-ja` | `'Shippori Mincho B1', serif` | 日本語明朝（見出し系） |
| `--font-body` | `'Inter', 'Noto Sans JP', sans-serif` | body 既定（和文フォールバック保証） |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | UI トランジション |

### 4.5 レスポンシブブレークポイント

| ブレークポイント | 変更内容 |
|---|---|
| 1100px 未満 | トンボ風十字・縦書き章題（`.sec-margin`）を非表示 |
| 900px 以下 | events グリッドを1カラム（Instagram 埋め込みの `min-width: 326px` と2カラムの競合で約2pxはみ出すのを防ぐため、works より早く折り返す）。柱・ノンブル（`.page-marker`）非表示 |
| 860px 以下 | works を1カラム縦積み（サムネ4:3復帰・ゴースト索引縮小）、`--rhythm` 縮小、ナビ gap 22px・padding 20px。hero のスクロール指標非表示、WebGL靄停止（CSS滲みへ） |
| 540px 以下 | ナビフォント縮小（0.62rem）・letter-spacing詰め（0.16em）・gap 14px・padding 18px。works gap・about メタ間隔・note アバター/間隔の微調整 |
| 380px 以下 | ナビフォント0.58rem・letter-spacing 0.12em・gap 11px（極小幅の破綻防止） |

横スクロール防止: `html, body { overflow-x: clip }`、画像グリッドは `minmax(0, 1fr)`、見出しは `overflow-wrap: anywhere`。

---

## 5. 機能仕様

### 5.1 スクロール演出（GSAP + Lenis）

| 項目 | 仕様 |
|---|---|
| スムーススクロール | Lenis（`duration: 1.2`）。アンカーリンクは `lenis.scrollTo` に委譲（offset -60） |
| ページイントロ | `document.fonts.ready`（上限2.5s）待ち → `#page-intro` オーバーレイを `scaleY` で巻き上げ → ヒーロー入場へ連結 |
| リビール | `.reveal` 要素を ScrollTrigger（`start: top 88%`, `once`）で `opacity/y` フェードイン（sec-head は下記の専用演出に委譲） |
| セクション見出し | eyebrow の letter-spacing を 0.4em→0.24em に収束＋明朝題字を文字単位で blur(6px)→focus（SplitText chars、stagger 0.09） |
| セクション罫線 | `.section-line` を `scaleX` で描画（`start: top 98%`） |
| About | サブ要素を段階的に stagger 表示。「軸」本文は静的表示（アニメーションなし） |
| Works | カードを左右交互に `x:±16` からスライドイン。題字は単一行時のみ文字出現（stagger 0.05） |
| Note | カードを `stagger` で表示後、ホバー用に inline style をクリア |
| パララックス | デスクトップのみ Hero name/desc を `scrub` で連動 |
| 磁気ホバー | `.nav-links a` / `.footer-nav a` / `.contact-link` / `.footer-top-link` がカーソルに吸着（係数0.3・`gsap.quickTo`・mouseleave で elastic 復帰）。fine pointer かつ非 reduced-motion のみ |
| 柱・ノンブル | `.page-marker` を Intersection Observer（中央帯判定）で更新。hero では非表示 |
| SplitText フェイルセーフ | `splitReady` を個別判定し、欠落時は各演出が従来の行送りへフォールバック。分割はすべて `document.fonts.ready` 後（FOUT対策） |

### 5.1.1 WebGL「墨の靄」（fx.js）

| 項目 | 仕様 |
|---|---|
| 実装 | 素のWebGL1・フルスクリーンクワッド1枚・fbm 3オクターブ（依存ゼロ・約200行） |
| 表現 | `--paper`→`--accent` の2色補間のみ、強度上限 0.07、右上中心のフェード、ポインタでノイズ座標が僅かに偏る（lerp 0.03） |
| 負荷制御 | DPR上限1.5×内部解像度0.75倍、rAFは `gsap.ticker` に一本化、hero画面外・タブ非表示・幅860px未満で停止 |
| 起動 | `requestIdleCallback` / load 後（LCPに影響させない）。起動成功時のみ `#hero.has-webgl` を付与し CSS滲みをフェードアウト |
| フォールバック | 非対応・失敗・停止時は `#hero::before` の静的 radial-gradient 滲みが残る（全環境で必ず淡い滲みがある） |

### 5.2 Works カード 手動スライドショー

| 項目 | 仕様 |
|---|---|
| 対象要素 | `.work-thumb[data-slide]` 内 `.work-thumb-img`（翡翠眼: 1枚 / Nagi: 7枚 / 中心銘: 1枚 / Frequency Analyzer: 2枚 / Lisa Mizuno: 1枚） |
| 操作 | 左右矢印ボタン・ドットナビのクリック、またはタッチスワイプ（横方向40px超かつ縦移動より大きい場合のみ反応し、縦スクロールと誤判定しない） |
| 切り替え | `opacity: 0→1`（CSS transition 0.6s ease） |
| 1枚のみの場合 | 矢印・ドットを非表示（JS制御） |
| 矢印表示 | ホバー時表示。背景 `rgba(26,26,28,0.42)` + `blur(4px)` の丸（30px）、ホバーで `0.66`。タッチ端末（`@media (hover: none)`）では opacity 0.85 で常時表示 |
| ドット | 5px 円、`box-shadow` 付き。現在: 白98%・1.15倍 / 非選択: 白50%。透明 `::after`（`inset: -10px -2px`）でタップ範囲を拡大（見た目不変） |
| 実装 | JavaScript（`addEventListener`、`e.stopPropagation()` でカードリンクへの伝播を抑止）|
| Nagi 表示位置 | 全画像 `object-position: top center`、1枚目（アイコン）のみ `center` |

### 5.3 ナビゲーション アクティブ連動

| 項目 | 仕様 |
|---|---|
| 実装方法 | Intersection Observer API |
| 対象要素 | `section[id]` すべて |
| 判定 | `rootMargin: '-45% 0px -45% 0px'` + `threshold: 0`（ビューポート中央帯との交差）。縦長セクション（works等）でも確実に追従する |
| 挙動 | 中央帯に入ったセクションのナビリンクに `.active` を付与し、柱・ノンブル（`.page-marker`）の表記を更新 |

### 5.4 アクセシビリティ

| 項目 | 仕様 |
|---|---|
| `prefers-reduced-motion: reduce` | JS分岐で入場・リビール・パララックスを無効化し最終状態を即時表示。CSS の `@media` で全 transition/animation を実質無効化。Lenis の `duration` も 0 に。autoplay 動画も `video.pause()` で停止 |
| フォーカス可視化 | `:focus-visible` に `--accent-ink` の 2px リング（瞬時表示） |
| コントラスト | 主役テキストを `--ink`、本文を `--text`、メタ/ラベルを `--muted`（`#6f6a60`・`--paper` 上で約5:1）とし、本文サイズで WCAG AA（4.5:1）を満たす |
| 画像代替 | 全 `<img>` に `alt`、装飾要素に `aria-hidden`、スライド矢印に `aria-label` |
| ランドマーク | `<nav>` / `<main>`（hero〜contact を内包）/ `<footer>` を明示。スクリーンリーダーの領域ジャンプに対応 |
| 見出し構造 | h1（氏名）→ 各セクション h2（about / 制作 / 催し / 言葉 / 連絡）→ 作品名 h3。飛び級なし。About はラベル "about" を `<h2>` 化して見出しアウトラインに含める |
| タップ標的 | スライドドットは透明 `::after` でタップ範囲を縦25px相当に拡大。タッチ端末では矢印（30px）を常時表示（WCAG 2.5.8 配慮） |

### 5.5 CDNフェイルセーフ

GSAP/ScrollTrigger/SplitText/Lenis を CDN から読み込むため、CDN障害・ネットワーク遮断時に演出が初期化されず `#page-intro` オーバーレイが画面を覆ったまま白画面になるリスクがある。これを多層で防ぐ。

| 層 | 仕様 |
|---|---|
| `script.js` ガード | `gsap`/`Lenis` が `undefined` の場合は演出を一切初期化せず、`#page-intro` を非表示にし `.reveal`/`.work-card`/`.note-card`/hero新要素 等を最終表示状態へ。ナビ・スライドショー・アクティブ連動・柱ノンブルは gsap 非依存で常時動作 |
| `SplitText` 個別ガード | gsap は居るが SplitText のみ欠落した場合、`splitReady=false` で文字分割演出だけを従来の行送りにフォールバック |
| `fx.js` ガード | gsap 不在・WebGL 取得失敗・シェーダコンパイル失敗のいずれでも起動せず、CSSの静的滲みが残る |
| インライン保険 | `<head>` 内の小スクリプトが `load` 後 2.5秒で `gsap` 未定義を検知した場合、同様にオーバーレイ除去とコンテンツ表示を行う |

gsap/Lenis 不在時はアンカーリンクもネイティブスクロールにフォールバックする（v3.0.0 で CDN 全断時の全文表示・スライドショー動作を実測検証済み）。

### 5.6 画像・アセット最適化

| 項目 | 仕様 |
|---|---|
| 遅延読み込み | 全 `<img>` に `loading="lazy"` + `decoding="async"`、動画に `preload="metadata"` |
| レイアウトシフト対策 | `.work-thumb` は `aspect-ratio`（16/10・860px以下4/3）で領域確保、`favicon`/`note-avatar` に `width`/`height` 明示 |
| 画像変換 | スクリーンショットは長辺1200px・JPG（quality 80-82）。OGPは1200幅JPG。faviconは128px PNG |
| 動画 | `freq-video-dark.mp4` は720幅・無音・H.264（CRF30）で再エンコード（3.0MB→112KB） |
| 合計 | `images/` 約1.0MB（最適化前 約13MB） |

---

## 6. デプロイ・運用

### 6.1 OGP（Open Graph Protocol）

| 項目 | 値 |
|---|---|
| og:title | 滝本 哲也 |
| og:description | Web開発・自動化フロー・ツール開発と、非日常体験イベントの企画主催。生活を豊かにするアイデアを形にしています。 |
| og:type | website |
| og:url | https://takimototetsuya.vercel.app |
| og:image | `images/ogp.jpg`（1200×630px・84KB） |
| og:site_name | 滝本 哲也 |
| twitter:card | summary_large_image |

### 6.1.1 SEO（構造化データ）

| 項目 | 値 |
|---|---|
| canonical | `https://takimototetsuya.vercel.app/` |
| JSON-LD | schema.org `Person`（name / alternateName / url / image / jobTitle / description / email / sameAs[note×3]） |

### 6.2 デプロイ情報

| 項目 | 内容 |
|---|---|
| ホスティング | Vercel |
| ブランチ | `main` |
| ソース | リポジトリルート `/ (root)` |
| ビルド | 不要（静的ファイルをそのまま配信） |
| 公開 URL | https://takimototetsuya.vercel.app |

### 6.3 更新手順

```bash
git add <変更ファイル>
git commit -m "Update: <変更内容>"
git push origin main
```

Vercel の Git 連携により `main` への push で自動デプロイ。

### 6.4 主な変更箇所の対応表

| 作業内容 | 変更ファイル |
|---|---|
| テキスト・リンクの変更 | `index.html` |
| スタイル・レイアウトの変更 | `style.css` |
| インタラクション・演出の変更 | `script.js` |
| 作品追加 | `index.html`（`.work-card` ブロックを追加） |
| サムネイル差し替え | `images/` に画像を配置し `index.html` の `<img>` src を更新、または `style.css`（`.work-thumb-*`）で背景定義 |
| 仕様変更 | `spec.md` |
