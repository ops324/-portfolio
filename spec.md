# ポートフォリオサイト 仕様書

| 項目 | 内容 |
|---|---|
| バージョン | 4.4.0 |
| 作成日 | 2026年3月7日 |
| 最終更新 | 2026年8月20日 |
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
| 3.0.7 | 2026-07-04 | 制作実績01「翡翠眼」の説明文を全面改訂。技術スタック中心の記述（Next.js・5つの外部API・障害耐性・Vitest/CI等）から、事業内容（マクロ経済・金融市場の先行きを読み解く情報サイト）とプロダクト特徴（AIが自動で執筆・公開／過去の見通しを検証・学習して精度を高める予測学習／複数情報源による環境変化への強さ）を平易に伝える内容に刷新。2段落構成は維持 |
| 3.1.0 | 2026-07-10 | Works に「領収書仕分けAI」カード追加（07）。撮影業の個人事業主向けに領収書のOCR読み取り〜経費集計〜会計ソフト向けエクスポートを自動化するWebアプリ（アリサ／`ops324/receipt-sorter-ai`）。**Web版が未デプロイで公開URLが無いため、リンクなしの静的カード**として掲載（他カードの `<a href>` ではなく `<div class="work-card">`、`View →` アフォーダンスも省略）。サムネイル（`thumb-arisa.jpg`）は提供されたアプリアイコン（`icon_transparent.png`）を **16:10（1400×875）の生成りグラデ背景（`#f6f3ee`→`#eae5db`）中央に PIL で合成**（中心銘/CHINJU と同系のライトトーン）。`.work-thumb-arisa` を追加。作品一覧7件構成に |
| 3.2.0 | 2026-08-16 | Works に「DIMENSION」カード追加。**唯一の先頭挿入（01）** で、既存7件を **02-08 へ繰り下げ**。0次元の点から6次元超立方体までをスクロールで連続変形させ、ホップ・ファイブレーション／クリフォード・トーラス／多胞体エクスプローラ／パースペクティブの4展示を持つ、高次元構造の可視化サイト（Vite + TypeScript + Three.js / `ops324/dimension`）。実験的ビジュアライゼーションであり他の自作プロダクト（02-05）と性格が異なるため、カテゴリを **"Experimental / Data Art"** として区別。サムネイル（`thumb-dimension.jpg`）は**先方サイトの OGP 画像（`og.jpg` 1200×630）を等倍のまま 1200×750（16:10）中央へレターボックス合成**。上下60pxの帯は単色ではなく**画像端をミラー反射→ぼかし→`#05060f` へフェード**させ継ぎ目を消している（og.jpg の上下端は四隅 `#060610` に対し辺中央 `#161223`/`#11172d` と光が滲むため単色帯では継ぎ目が出る）。等倍のためリサンプリング劣化ゼロで、サムネ実描画幅 約618px（DPR2 で 1236px）に対し 1200px はほぼ 1:1。`.work-thumb-dimension`（背景 `#05060f` ＝先方の `theme-color`）を追加。**先頭挿入により `.work-card:nth-child(odd/even)` の偶奇が全件反転し、誌面スプレッドの左右が既存7件すべてで入れ替わる**（奇偶とも 7カラム/5カラムで幅は同一のためリフローは発生しない。860px以下は偶奇が `auto` に打ち消されるため無影響。`script.js` のスライドイン方向 `i % 2` は同じ序数由来のため自動同期）。`.work-card:first-child`（上罫線なし・上余白 `--sp-2`）が DIMENSION へ移り、翡翠眼に区切り罫が付く。作品一覧8件構成に |
| 4.0.0 | 2026-08-20 | **UI 精度リファイン（組版・演出・素材・実装品位の4段）。** ①**実装の瑕疵**: `.work-card` が `<a>` の中に `<button>`（スライド矢印）を含む仕様違反だったため、カードを `<article>` にし実リンクを題字へ移設。カード全面のクリックは JS で題字リンクへ委譲し、本文のテキスト選択を殺さない（stretched link は選択不能になるため不採用）。`.slide-dot` を `<span>`→`<button>` 化しキーボード操作可能に、`aria-current` と `role=status` のライブリージョンで位置を読み上げ。nav ロゴは `alt=""` の画像のみでリンク名が無かったため sr-only を付与。`--muted-2` を 3.25:1 → AA(4.5:1) へ。サムネ上のコントロールは暗所で沈むため白のフォーカス輪郭。`fx.js` の canvas は `alpha:false` で初描画までクリアカラー（既定=黒）が不透明の黒板として露出していたため、リサイズ後に紙色でクリアし1フレーム即描画。Lenis の `duration` と `lerp` の併記（片方が無効）を lerp へ一本化。②**和文組版**: 散文に `word-break:auto-phrase` / `text-wrap:pretty` / `line-break:strict`（「…イベントの企／画主催。」と語中で割れていた箇所が読点で折り返す）。Noto Sans JP は `palt` を備えるため詰め組み＋`letter-spacing:0.04em` で戻す。**Shippori Mincho B1 は `palt`/`chws`/`halt` を一切持たず `text-spacing-trim` も効かない**（実測で幅が1pxも動かない）ため、句読点のみ `script.js` の `kernPunctuation` が `margin-right:-0.40em` で視覚補正。トラッキングを光学サイズ別にトークン化（hero 0.10em→0.06em / 見出し 0.10em→0.07em / footer名 0.12em→0.08em）。索引・日付を `tabular-nums`。`.about-text` は手で改行を打った塊で、flex の収縮により最長行ぴったりの幅になり約物補正の端数で溢れるため親幅いっぱいに固定。③**演出の語彙を3つに絞る**（①文字のマスク上げ ②面のクリップ展開 ③罫線の伸長）: 見出しの blur→focus と eyebrow のトラッキング収束を撤去しヒーローと同じマスク上げへ統一。work サムネを `clip-path` で下から立ち上げ、4つ目の語彙になる交互スライドインは廃止。イージングを `EASE.enter`/`veil`/`line` の3種に統一し CSS 側にも対を置く。磁気ホバーはナビ・フッターナビから外す（文字が逃げるナビは読みにくい）。④**素材の質**: パレットを **OKLCH の単一色相軸**（紙・墨=85° / タウープ=80°）で組み直し、各 L は「地に対する目標コントラスト比」から解いて決定（旧 sRGB 版は色相が 78〜286° に散り、L の刻みも 2.3〜19.9 と不揃いで `muted`/`muted-2`/`accent-ink` が L 54.8〜54.9 に重なっていた）。**夜の紙**を `light-dark()` で実装し、1トークン1行のまま両モードを保持。トグルは `color-scheme` を固定するだけで全トークンが追従する。OS 追従を既定とし奥付に「紙／夜」を置き localStorage に記憶、初回描画前に `data-theme` を確定させちらつきを防ぐ。紙グレインは夜だと multiply で沈むため screen へ反転。`fx.js` の靄は色を `--paper`/`--accent` から canvas2d 経由で読む（oklch と light-dark をそのまま sRGB へ展開）。nav アイコンが白地の不透明 PNG で夜に白い四角として浮くため透過版 `nav-mark.png` を作成。**誌面の強弱**として先頭1点（DIMENSION）を見開き（全幅 21:9 ＋ 12カラムの情報行）に開く |
| 4.1.0 | 2026-08-20 | **Events セクションを廃止。** Instagram 公式 blockquote 埋め込みは、白いIGカード・別書体・Instagram 自身のUIが紙面の世界観から浮き、`--paper-2` フレームで包んでも異物感が残っていた（v4.0.0 で導入した「夜の紙」では白いカードがさらに際立つ）。`embed.js`（数百KB・`async`）と、その遅延リサイズに追従するための `ResizeObserver`→`ScrollTrigger.refresh()` も不要になる。自前カードへの置き換えを検討したが催しの写真素材が揃わないため、**セクションごと削除**する判断。`#events` とナビ/フッターナビのリンク、`.events-grid` / `.event-card` / `.event-frame` / `.event-cap` の全CSS、900px の専用ブレークポイント、`script.js` の eventsGrid ResizeObserver を撤去。柱・ノンブルの `PAGE_INDEX` を **note 03 / contact 04** へ繰り上げ。セクション構成は Hero → About → Works → Note → Contact の5構成に。併せて**仕様書5章（機能仕様）を実装へ全面追随**させた（Lenis の lerp 一本化、見出し演出のマスク上げ化、works のクリップ展開、磁気ホバーの縮小、イージング3種、WebGL の色取得と初期クリア、スライドドットの button 化とライブリージョン、インタラクティブ要素のネスト解消、フォーカス輪郭、nav-mark.png、および **5.7 配色の切替** の新設）。**hero と meta/JSON-LD の「非日常体験イベントの企画主催」という活動紹介はそのまま残す**（活動自体は継続しており、催しの記録を掲載しないだけのため） |
| 4.2.0 | 2026-08-20 | **WebFont をセルフホスト＋サブセット化。** Google Fonts 直参照では、**レンダーブロッキングの CSS だけで 573KB**（日本語2書体ぶんの unicode-range 定義が約120ブロック）、フォント本体と合わせて **2,258KB / 85リクエスト / 別オリジン2つ**を要していた。ページに実際に出る文字だけを含む woff2 を同一オリジンから配る方式へ変更し、**142KB / 6リクエスト / 1オリジン / ブロッキングCSS 0** に。同一マシンで旧版と新版を並べて配信しキャッシュ空5回の中央値を取ると、`document.fonts.ready` 595ms→172ms、FCP 348ms→132ms。`tools/build-fonts.mjs` が Google Fonts の `css2?text=` API で最適サブセットを取得し、内容ハッシュ付きファイル名で `fonts/` へ書き出したうえで、`style.css` の `@font-face` と `index.html` の `preload` を**マーカー間で自動書き換え**する。既定モードは index.html を実レンダリングして「どの書体・ウェイトでどの文字が組まれているか」を計測するため、明朝の見出しにしか出ない字をゴシック側に含めずに済む（全書体に全文字を入れる `--union` では383KB）。**`text-transform: uppercase` の適用後の文字**で集める点が要（ソースの `about` から集めると描画される `ABOUT` の大文字が丸ごと漏れ、ナビ・eyebrow・work-cat が端末フォントに落ちる。実際に一度踏んだ）。サブセット漏れは見た目が似ていて気付きにくいため、CDP の `CSS.getPlatformFontsForNode` で「実際にどのフォントで描かれたか」を全要素に問い合わせる `tools/verify-fonts.mjs` を用意。この検査で、**`--font-latin` が `'Inter', sans-serif` で和文フォントを含まず、「蠍座」「酉年」がずっと端末のヒラギノで描画されていた既存バグ**も発見し、スタックに Noto Sans JP を挟んで修正。`vercel.json` を新設し `/fonts/*` に `max-age=31536000, immutable` を付与（ファイル名に内容ハッシュが入っているため安全）。未使用だった Inter 300 / Shippori Mincho B1 600 の読み込みも解消 |
| 4.2.1 | 2026-08-20 | note セクションから @minase_ritsu アカウントを削除（3アカウント → 2アカウント構成）。JSON-LD の `sameAs` からも該当 URL を除外。仕様書は 3.5 に「掲載件数」行を新設し、3.5.1 掲載アカウント一覧と 6.1.1 の `sameAs[note×2]` 表記を実装に追随させた |
| 4.3.0 | 2026-08-20 | **配色を夜明け・日没に同期。奥付の「紙／夜」トグルを廃止。** 紙と夜のどちらで読むかを**選ばせる**のではなく、訪問した時刻の空に合わせる。`<head>` のインライン（`@solar` マーカー間）が NOAA の日出没式を素の JS で解き、スタイルシート読み込みより前に `data-theme` を確定させる（初回描画のフラッシュ防止は従来どおり）。**外部 API も位置情報の許可も使わない**。緯度は中緯度（35°）固定、経度は端末のタイムゾーンの時差から起こす（15°=1時間。夏時間の1時間ぶんも東へ寄るため時計どおりの日出没になる）。国立天文台の暦（東京）とは ±3分、標準時子午線で近似するぶん東京では日没の約19分後——市民薄明の内側——で夜へ移る。`script.js` は次の日出没へ `setTimeout` を張るが、端末のスリープでタイマーは飛ぶため**上限6時間**で切り、`visibilitychange` と `pageshow`（bfcache 復帰）でも取り直す。白夜・極夜は境界が無いのでその周期の太陽が地平線の上か下かで決めて6時間後に再判定。`localStorage.theme` は読まなくなり、残骸は起動時に掃除する。`theme-color` は `media` で出し分けた静的な2枚を**単一の meta に畳んで**同期させる（JS が効く環境では `data-theme` が OS 設定を上書きするため、media 版では実際の配色とずれる）。JS 無効時は `data-theme` が付かず、既定の `color-scheme: light dark` で従来どおり OS 設定に追従する。**日出没のずれは目で見て気付けない**（数分ずれても季節で狂っても、見た瞬間の配色はそれらしく出て、間違いは半日後にしか現れない）ため、ブラウザ不要・依存なしの `tools/verify-solar.mjs` を新設し、`index.html` の `@solar` ブロックを取り出して暦との突き合わせ・南中対称性・経度→時刻の換算・白夜/極夜・境界の前後・1年ぶん（6時間刻み1460点）の整合を検算する |
| 4.3.1 | 2026-08-20 | **四隅のトンボ風十字（レジストレーションマーク）を撤去。** v3.0.0 で「印刷物ディテール」として入れた `html::before`（1100px 以上・`--faint` の 11px 十字を四隅へ、8枚の背景グラデーションで描画）を削除。**トンボは断裁と版合わせのための作業用の印であり、刷り上がった紙面には残らない**。画面上では紙の手触りではなく「印刷物らしさの記号」として乗っていたため、紙グレイン・縦書き章題（`.sec-margin`）・柱/ノンブル（`.page-marker`）が担う質感へ一本化する。ビューポート全面に `position: fixed` で敷かれていた固定レイヤー（`z-index: 9997`）も1つ解消。1100px のブレークポイントは縦書き章題の出し分けとして残る |
| 4.4.0 | 2026-08-20 | **イベントに関する文言を撤去。** v4.1.0 で Events セクションを廃止した際、hero と meta/JSON-LD の「非日常体験イベントの企画主催」は**活動自体は継続している**ため残す判断をしたが、催しの記録を載せない以上、**紙面のどこにも裏付けの無い活動紹介だけが残る**状態になっていた。hero 説明文・`meta[name=description]`・`og:description`・`twitter:description`・JSON-LD `Person.description` の5か所から当該句を落とし、「Web開発・自動化フロー・ツール開発。生活を豊かにするアイデアを形にしています。」に統一。contact のリード文も「制作のご相談、催しへのお誘い——」から**「制作のご相談・ご依頼——」**へ改め、催しの語を紙面から一掃した。テキストを変えたため 5.8 の手順どおり `build-fonts` → `verify-fonts` を実行。「非日常体験イベント」「催し」由来の字が抜けて `noto-sans-jp-300` 389→**381字**、`shippori-mincho-b1-400` も再生成され（内容ハッシュが変わるためファイル名も更新）、`fonts/` 合計 142KB→**140KB**。`verify-fonts` は313要素すべて自前の3書体で描画されることを確認。併せて 4.3 の折り返し対象一覧に残っていた `.event-cap`（v4.1.0 で削除済みのクラス）を掃除し、折り返しの実測表には**計測当時の hero 文である**旨を注記した |
| 3.0.6 | 2026-07-03 | 制作実績06「CHINJU CLI」サムネイル（`thumb-chinju.jpg`）を差し替え。旧画像（v2.8.0）は全ページを 4:3（1400×1050）で撮影しており左右見切れは無いものの、**上部ナビ（ロゴ＋「βに申し込む」ボタン）や下部の別セクション見出しが写り込み**、素のスクショ感が強かった。v3.0.5 Lisa と同じ方針で、**ヒーロー主要部（大見出し「ベテランエンジニアの手厚いレビューを。」＋iMacのCLIレビュー画面＋枯山水/盆栽＋信頼バー）を 16:10（1500×937）で切り出して撮影**する方式に刷新。撮影時に上部ナビ（`nav.nav`）・右端ドットナビ（`nav.path-nav`）・ヒーロー以降の全セクション/フッターをCSSで非表示にし、`#demo` に軽い `margin-top` を付与してヒーローを淡い背景の中央に配置。cover の枠比率と一致しPC見切れゼロ、上下の余白は860px以下の `4/3` 枠での左右トリムの安全マージンにもなる。他5件と同じ細罫スクショ枠の一貫性を維持（HTML/CSS変更なし・画像差し替えのみ） |
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

**セクション構成（3章）:** 3.1 Nav → 3.2 Hero → 3.3 About → 3.4 Works → 3.5 Note → 3.6 Contact → 3.7 Footer

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
| 活動内容 | Web開発・エンジニアリング・自動化フロー開発・ツール開発。生活を豊かにするアイデアの具現化 |
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
├── vercel.json         # 配信ヘッダ（/fonts/* を immutable キャッシュ）
├── fonts/                          # サブセット済み WebFont（合計140KB・内容ハッシュ付き）
│   ├── inter-400.<hash>.woff2              # 欧文 UI・ラベル（ASCII 印字可能文字を全て含む）
│   ├── inter-500.<hash>.woff2
│   ├── noto-sans-jp-300.<hash>.woff2       # 和文本文（最大・381字）
│   ├── noto-sans-jp-400.<hash>.woff2       # ラベル内の和文（蠍座・酉年 等）
│   ├── shippori-mincho-b1-400.<hash>.woff2 # 明朝・名前/本文/キャッチ
│   └── shippori-mincho-b1-500.<hash>.woff2 # 明朝・見出し/題字
├── tools/                          # ビルド・検査スクリプト（配信対象外）
│   ├── build-fonts.mjs             # サブセット生成＋@font-face/preload の自動書き換え
│   ├── verify-fonts.mjs            # CDP でサブセット漏れを検出
│   └── verify-solar.mjs            # 夜明け・日没同期の検算（依存なし）
├── images/                         # 最適化済みアセット（合計約1.4MB）
│   ├── thumb-dimension.jpg        # DIMENSION OGP画像のレターボックス合成（1枚・16:10・1200×750・ミラー帯／背景 `#05060f`・126KB）
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
│   ├── thumb-chinju.jpg          # CHINJU CLI ヒーロー主要部切り出し（1枚・16:10・1500×937・ライト背景）
│   ├── thumb-arisa.jpg           # 領収書仕分けAI アプリアイコン合成（1枚・16:10・1400×875・生成りグラデ背景）
│   ├── freq-video-light.mp4      # Frequency Analyzer 画面収録・ライトモード（188KB）
│   ├── freq-video-dark.mp4       # Frequency Analyzer 画面収録・ダークモード（112KB・720幅/無音）
│   ├── ogp.jpg                   # OGP画像（1200×630px・リンク共有プレビュー用・84KB）
│   ├── favicon.png               # サイトアイコン（128×128px・24KB）
│   └── nav-mark.png              # navbar 用の透過版（256px。夜の紙で白地が浮くため）
└── .claude/                        # ローカルツール設定（git管理外）
    └── launch.json     # ローカル開発サーバー設定
```

画像は `sips`（リサイズ/JPG変換）と `ffmpeg`（動画再エンコード）で最適化。元の高解像度PNG（3024px幅スクショ・6MB OGP等）はリポジトリから削除済み。`<head>` には schema.org Person の JSON-LD と `canonical` を記載し、外部スクリプトは `defer` でロードする。

### 2.3 外部リソース

| リソース | 配信 | 用途 |
|---|---|---|
| Inter（400 / 500） | **セルフホスト** `fonts/` | 英字 UI・ラベル・索引・キャプション |
| Noto Sans JP（300 / 400） | **セルフホスト** `fonts/` | 日本語本文・説明文 |
| Shippori Mincho B1（400 / 500） | **セルフホスト** `fonts/` | 見出し・名前・about本文・work題字（明朝） |
| GSAP 3.13.0 / ScrollTrigger / SplitText | cdnjs | アニメーション・文字分割（`defer`） |
| Lenis 1.1.14 | unpkg | スムーススクロール（`defer`） |

WebFont は v4.2.0 で Google Fonts 直参照からセルフホストへ移した（5.8 参照）。外部スクリプトは全て `defer`/`async` で非同期化し初回描画をブロックしない。CDN（cdnjs/unpkg）が読み込めない場合でも、`script.js` 側のガードとインラインのタイムアウト処理によりコンテンツを表示する（[5.5 フェイルセーフ](#55-cdnフェイルセーフ) 参照）。

### 2.4 ローカル開発

```bash
npx serve -l 3000 .
```

`.claude/launch.json` に設定済みのため、Claude Code から `preview_start` でも起動可能。

---

## 3. ページ構成・セクション仕様

各セクションは共通のヘッダー体系を持つ：**Latin小ラベル（eyebrow）＋和文明朝見出し（`.sec-title`）を縦積み**（works=制作 / note=言葉 / contact=連絡。about は eyebrow を中央配置し、本文の「軸」ステートメントを主役とする）。

### 3.1 ナビゲーション

| 項目 | 仕様 |
|---|---|
| 種別 | 固定（`position: fixed`） |
| 高さ | `--nav-h: 60px` |
| 背景 | `rgba(247,246,243,0.78)` + `backdrop-filter: blur(16px)` |
| スクロール連動（外観） | スクロール量 > 8px で `.scrolled` 付与 → 下罫線出現・背景不透明度を強化 |
| 左側 | アイコン（`favicon.png` 22px・opacity 0.8）のみ |
| 右側 | リンク（about / works / note / contact）、大文字表示 |
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
| ゴースト索引 | 白抜き明朝大数字（01-08、`clamp(3.4rem, 6vw, 5.2rem)`、`-webkit-text-stroke: 1px var(--faint)`、aria-hidden） |
| メタ行 | カテゴリ（uppercase、`--muted`）のみ（小索引番号はゴースト索引へ統合） |
| タイトル | **Shippori Mincho B1**、`--fs-work`（`clamp(1.15rem,1.8vw,1.45rem)`）、weight 500、`--ink` |
| キャッチコピー | **Shippori Mincho B1**、0.95rem、italic、`--text` |
| 説明文 | Noto Sans JP、0.8rem、weight 300、`--text` |
| View アフォーダンス | 「View →」（Inter、uppercase、`--muted`）。カードホバーで `--ink` に変色・矢印が `translateX` |
| ホバー | カードが `y:-4` 浮上、サムネ画像が `scale:1.05`（GSAP） |
| スライド矢印 | ホバー時表示。`rgba(26,26,28,0.42)` + `blur(4px)` の丸ボタン（30px）、白シェブロン。**タッチ端末（`@media (hover: none)`）では opacity 0.85 で常時表示**（1枚のみのカードは JS が `display:none` にするため対象外） |
| ドット | 5px 円、`box-shadow` 付き。現在: 白98%・1.15倍 / 非選択: 白50%。**透明 `::after`（`inset: -10px -2px`）でタップ範囲を縦25px相当に拡大**（見た目は5pxのまま） |
| リンク | カード全体を `<a target="_blank" rel="noopener">` で外部サイトへ。**唯一の例外は 08 領収書仕分けAI**（公開URLが無く `<div class="work-card">` のリンクなし静的カード。`View →` も省略） |

#### 3.4.3 作品一覧

| # | カテゴリ | タイトル | リンク | サムネイル |
|---|---|---|---|---|
| 01 | Experimental / Data Art | DIMENSION | https://dimension-vert.vercel.app/ | `thumb-dimension.jpg`（1枚・OGP画像のレターボックス合成・暗背景 `#05060f`） |
| 02 | Web Development | 翡翠眼 | https://hisuigan-macro-insight-engine.vercel.app/ | `thumb-hisuigan.jpg`（1枚） |
| 03 | Web Development | Nagi（凪） | https://nagi-xi.vercel.app/ | `nagi-icon.jpg` / `nagi-record1〜5.jpg` / `nagi-calendar.jpg`（7枚手動スライド） |
| 04 | Web Development | 中心銘 | https://chushinmei.vercel.app | `thumb-chushinmei.jpg`（1枚・和紙調ベージュ背景） |
| 05 | Web Development | Frequency Analyzer | https://frequency-analyzer.vercel.app | `freq-video-light.mp4` / `freq-video-dark.mp4`（2枚手動スライド・`<video autoplay muted loop>`） |
| 06 | Web Design / Artist Site | Lisa Mizuno | https://lisa-mizuno.vercel.app/ | `thumb-lisa-mizuno.jpg`（1枚・モノクローム背景 `#0d0d0d`） |
| 07 | LP / Branding & PR | CHINJU CLI | https://service.chinju.org/ | `thumb-chinju.jpg`（1枚・4:3撮影・ライト背景 `#f2efe9`） |
| 08 | Web Development | 領収書仕分けAI | なし（未デプロイ・静的カード） | `thumb-arisa.jpg`（1枚・アプリアイコン合成・生成りグラデ背景 `#f2efe9`） |

※ タイトルの読み仮名（翡翠眼＝ひすいがん／中心銘＝ちゅうしんめい）は v2.5.0 で省略。
※ 01 DIMENSION は自作だが「使うためのプロダクト」ではなく高次元構造の可視化そのものを目的とした実験作のため、実務向けの自作プロダクト（02-05）とはカテゴリを分け "Experimental / Data Art" としている。
※ 06 Lisa Mizuno は他者（DJ・アーティスト）向けの制作実績であり、カテゴリを "Web Design / Artist Site" として自作プロダクト（01-05）と区別している。
※ 07 CHINJU CLI は自作プロダクトではなく、LP制作・市場調査・方向性整理・PR を担当した案件。カテゴリを "LP / Branding & PR" とし、説明文でも担当役割を明記して制作物（01-06）と区別している。
※ 08 領収書仕分けAI は Web版が未デプロイで公開URLが無いため、唯一 `<a href>` ではなく `<div class="work-card">` の**リンクなし静的カード**（`View →` も省略）。他カードのアンカー前提の挙動には依存しない（`.work-card` に cursor/hover のアンカー依存なし、reveal/GSAP は class セレクタで拾う）。
※ 作品の**掲載順＝DOM順**であり、`.work-card:nth-child(odd/even)` がサムネの左右を決める。**先頭や中間へのカード挿入は以降すべてのカードの左右を反転させる**（幅は奇偶とも同一のためリフローは起きず、860px以下では偶奇指定が `auto` に打ち消されるため無影響）。ゴースト索引は自動採番ではなく**各カードにハードコード**しているため、挿入時は全件の振り直しが必要。

### 3.5 Note セクション

| 要素 | 仕様 |
|---|---|
| ヘッダー | 「note / 言葉」 |
| 掲載件数 | 2アカウント（3.5.1 参照） |
| レイアウト | 縦積みカードリスト（`flex-direction: column`）、max-width 1100px、上下ヘアライン区切り |
| カード構成 | アバター画像（56px・丸型）＋ ハンドル名（`--accent-ink`）＋ 説明文 ＋ 右端の矢印（→） |
| リンク | カード全体が `<a target="_blank">` でアカウントページへ |
| ホバー | 背景が `--paper-2`、左右パディング拡張、矢印が `--ink` に変色・`translateX` |

#### 3.5.1 掲載アカウント一覧

| # | ハンドル | 説明文 | URL |
|---|---|---|---|
| 1 | @bright_yarrow261 | Claude・AI活用を実践ベースで発信。「使いこなす技術」をテーマに、プロンプト・ワークフロー・ツール活用を体系的にまとめています。 | https://note.com/bright_yarrow261 |
| 2 | @life_ops | 頭が良いとは、どういうことか。構造で考え、本質を見抜き、判断の精度を上げる。地頭は才能ではなく、フォームだ。 | https://note.com/life_ops |

### 3.6 Contact セクション

| 要素 | 仕様 |
|---|---|
| レイアウト | シングルカラム（max-width 1100px） |
| ヘッダー | 「contact / 連絡」 |
| リードテキスト | 「制作のご相談・ご依頼——ご連絡をお待ちしております。」（Shippori Mincho、`--text`） |
| リンク | `contact@flowmate.jp`（Inter 0.95rem） |
| リンクホバー | `--ink` に変色 + 下線アニメーション（`scaleX`） |

### 3.7 Footer（奥付）

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

### 4.2 カラーパレット（v4.0.0 — OKLCH 単一色相軸）

色相は **紙・墨 = 85° / タウープ = 80°** に統一し、各トークンの明度(L)は「地に対する目標コントラスト比」から逆算して決めている。`light-dark()` により1トークン1行で紙・夜の両値を持つ。

| CSS 変数 | 紙（light） | 夜（dark） | 対地コントラスト（紙 / 夜） | 用途 |
|---|---|---|---|---|
| `--paper` | `oklch(97.3% 0.004 85)` | `oklch(18.0% 0.006 85)` | — | ページ背景（生成り／墨色の紙） |
| `--paper-2` | `oklch(94.7% 0.008 85)` | `oklch(23.3% 0.008 85)` | 1.08 / 1.13 | フレーム・微カード |
| `--line` | `oklch(91.2% 0.010 85)` | `oklch(28.2% 0.012 85)` | 1.20 / 1.30 | ヘアライン・罫線 |
| `--line-strong` | `oklch(87.5% 0.016 85)` | `oklch(32.3% 0.018 85)` | 1.35 / 1.50 | footer上罫・強罫 |
| `--faint` | `oklch(81.9% 0.019 85)` | `oklch(38.3% 0.022 85)` | 1.62 / 1.90 | **装飾専用**（ゴースト索引・縦書き章題） |
| `--accent` | `oklch(66.8% 0.042 80)` | `oklch(49.0% 0.045 80)` | 2.80 / 3.00 | 罫線・装飾（タウープ） |
| `--accent-ink` | `oklch(54.5% 0.038 80)` | `oklch(60.0% 0.040 80)` | 4.60 / 4.80 | eyebrow・ハンドル名（可読タウープ） |
| `--muted-2` | `oklch(54.9% 0.014 85)` | `oklch(58.7% 0.016 85)` | 4.51 / 4.53 | キャプション・柱・奥付（**AA下限**） |
| `--muted` | `oklch(48.2% 0.012 85)` | `oklch(65.4% 0.014 85)` | 6.00 / 6.00 | ラベル・メタ |
| `--ink-2` | `oklch(36.1% 0.010 85)` | `oklch(76.2% 0.012 85)` | 10.0 / 9.00 | 見出し補助 |
| `--text` | `oklch(31.4% 0.008 85)` | `oklch(82.0% 0.010 85)` | 12.0 / 11.0 | 本文・説明文 |
| `--ink` | `oklch(22.0% 0.005 264)` | `oklch(90.4% 0.006 86)` | 16.0 / 14.5 | 見出し・一次本文（**印刷インキの青み黒**。C が極小なので色味は出ない） |

半透明の面は `--paper-veil` / `--paper-veil-2`（`color-mix(in oklab, var(--paper) 80%/92%, transparent)`）。ナビの磨りガラスに使用。

**配色:** `:root { color-scheme: light dark }` を既定に置き、JS が `:root[data-theme]` を立てて `color-scheme: only light|dark` を固定する。これだけで `light-dark()` の全トークンが一括で切り替わる（値の二重定義なし）。**立てる値は訪問した時刻の空——夜明けで紙、日没で夜——から決まる**（→ 5.7）。手で選ぶ切替は持たない。`<head>` のインラインが**スタイル適用前に** `data-theme` を確定させるため初回描画のちらつきは起きず、JS 無効時は属性が付かないまま OS 設定に従う。

紙の質感: `body::after` に SVG feTurbulence（`baseFrequency 0.9` / `numOctaves 2` / 240pxタイル）の静止グレインを全面固定（`opacity 0.035`・`mix-blend-mode: multiply`・`pointer-events: none`・z-index 9998）。540px以下は合成負荷対策で `normal`・`opacity 0.025` に緩和。**夜は multiply だと粒が沈んで消えるため `screen` / `opacity 0.05` へ反転する。**

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

#### 和文組版の規則（v4.0.0）

**トラッキング（光学サイズ補正）** — 大きい活字ほど字間を詰め、小さい活字ほど開ける。

| トークン | 値 | 適用 |
|---|---|---|
| `--track-hero` | `0.06em` | Hero 名前（〜7.2rem） |
| `--track-display` | `0.07em` | セクション見出し（〜2.7rem） |
| `--track-title` | `0.045em` | work 題字（〜1.7rem） |
| `--track-lead` | `0.03em` | about本文・contactリード（〜1.05rem） |
| `--track-label` / `--track-micro` | `0.18em` / `0.26em` | 小ラベル・極小ラベル |

**折り返し** — 散文ブロック（`.hero-desc` `.about-text` `.work-catchcopy` `.work-desc` `.note-card-desc` `.contact-lead` ほか）に以下を適用。

```css
word-break: auto-phrase;   /* 文節で改行（Chromium） */
text-wrap: pretty;         /* 行末の孤立を避ける */
line-break: strict;        /* 禁則を厳格に */
```

`auto-phrase` と `pretty` は Chromium のみ有効で、他ブラウザは従来の折り返しへ穏当に退く。両者の併用が最良で、実測では次のとおり。

| 設定 | 計測当時の hero 文「Web開発・自動化フロー・ツール開発と、非日常体験イベントの企画主催。」の折り返し |
|---|---|
| 従来 | `…イベントの企` / `画主催。` ← **語中で分断** |
| `auto-phrase` のみ | `…イベントの` / `企画主催。` |
| `auto-phrase` + `pretty` | `Web開発…開発と、` / `非日常体験イベントの企画主催。` ← **読点で改行** |

**詰め組み** — Noto Sans JP は `palt` を備えるため詰め組みにし、`letter-spacing: 0.04em` で字送りを戻す（ベタ組みの「穴あき」が消え、面としての濃度が均一になる）。

**約物の視覚補正** — **Shippori Mincho B1 は `palt` / `chws` / `halt` を一切持たず、`text-spacing-trim`（font 側の `halt` に依存）も効かない**（実測: 64px の「「制作」、および（催し）。」が全設定で 832px から1pxも動かない）。そのため明朝で組む短文に限り、`script.js` の `kernPunctuation` が句読点（`、` `。`）を `<span class="kern-pull">` で包み `margin-right: -0.40em` を与えて空きを回収する。対象は `.work-catchcopy` / `.about-text-line` / `.contact-lead`。SplitText 対象の見出し・題字は約物を含まないため干渉しない。本文（Noto Sans JP）は `palt` が効くので対象外。

**数字** — 索引・日付・奥付は `font-variant-numeric: tabular-nums lining-nums`。

**注意** — `.about-text` は `.about-text-line` で手で改行を打った塊。flex の収縮で「最長行ぴったり」の幅になると約物補正の端数で1行が溢れるため、`width: 100%` で親幅いっぱいに固定している。

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
| `--ease-out` / `--ease-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | UI トランジション・要素の出現（同値。`--ease-out` は旧名を温存） |
| `--ease-veil` | `cubic-bezier(0.22, 1, 0.36, 1)` | 面の展開・退出（②の語彙） |
| `--ease-line` | `cubic-bezier(0.19, 1, 0.22, 1)` | 罫線の伸長（③の語彙） |
| `--track-hero` 〜 `--track-micro` | 4.3 参照 | 光学サイズ別トラッキング |
| `--paper-veil` / `--paper-veil-2` | `color-mix(in oklab, var(--paper) 80%/92%, transparent)` | ナビの磨りガラス |

### 4.5 レスポンシブブレークポイント

| ブレークポイント | 変更内容 |
|---|---|
| 1100px 未満 | 縦書き章題（`.sec-margin`）を非表示 |
| 900px 以下 | 柱・ノンブル（`.page-marker`）非表示 |
| 860px 以下 | works を1カラム縦積み（サムネ4:3復帰・ゴースト索引縮小）、`--rhythm` 縮小、ナビ gap 22px・padding 20px。hero のスクロール指標非表示、WebGL靄停止（CSS滲みへ） |
| 540px 以下 | ナビフォント縮小（0.62rem）・letter-spacing詰め（0.16em）・gap 14px・padding 18px。works gap・about メタ間隔・note アバター/間隔の微調整 |
| 380px 以下 | ナビフォント0.58rem・letter-spacing 0.12em・gap 11px（極小幅の破綻防止） |

横スクロール防止: `html, body { overflow-x: clip }`、画像グリッドは `minmax(0, 1fr)`、見出しは `overflow-wrap: anywhere`。

---

### 4.6 モーションの語彙（v4.0.0）

演出は**3つの語彙だけ**で構成する。語彙を増やすことは既視感と散漫さに直結するため、新しい動きを足す前に既存の3つで表現できないかを必ず検討する。

| # | 語彙 | 実装 | イージング |
|---|---|---|---|
| ① | 文字のマスク上げ | SplitText `mask: 'chars'` → `yPercent: 110 → 0` | `EASE.enter` = `power3.out` |
| ② | 面のクリップ展開 | `clip-path: inset(100% 0 0 0) → inset(0)`（CSS transition） | `--ease-veil` = `cubic-bezier(0.22, 1, 0.36, 1)` |
| ③ | 罫線の伸長 | `scaleX: 0 → 1` / `scaleY: 0 → 1` | `EASE.line` = `expo.out` |

**撤去したもの:** 見出しの blur→focus（既視感が強い）、eyebrow のトラッキング収束、works の交互スライドイン（4つ目の語彙になる）、ナビ・フッターナビの磁気ホバー（文字が逃げると読みにくい）。磁気ホバーは大きな単独ターゲット（`.contact-link` / `.footer-top-link`）にのみ残す。

**カスタムカーソルは 2度のゲート確認で不採用（v2.4.1 / v3.0.0）。今後提案しない。**

---

## 5. 機能仕様

### 5.1 スクロール演出（GSAP + Lenis）

| 項目 | 仕様 |
|---|---|
| スムーススクロール | Lenis（`lerp: 0.1`）。**`duration` と `lerp` は排他**で、両方渡すと lerp が優先され `duration`/`easing` は無視されるため lerp に一本化している。reduced-motion 時は `lerp: 1`（追従なし＝即時）。アンカーリンクは `lenis.scrollTo` に委譲（offset -60） |
| ページイントロ | `document.fonts.ready`（上限2.5s）待ち → `#page-intro` オーバーレイを `scaleY` で巻き上げ → ヒーロー入場へ連結 |
| リビール | `.reveal` 要素を ScrollTrigger（`start: top 88%`, `once`）で `opacity/y` フェードイン（sec-head は下記の専用演出に委譲） |
| セクション見出し | eyebrow は素の淡出、明朝題字は**文字のマスク上げ**（SplitText `mask: 'chars'`、`yPercent: 110→0`、stagger 0.07）。v4.0.0 で blur→focus とトラッキング収束を撤去し、ヒーローの名前と同じ語彙へ統一 |
| セクション罫線 | `.section-line` を `scaleX` で描画（`start: top 98%`） |
| About | サブ要素を段階的に stagger 表示。「軸」本文は静的表示（アニメーションなし） |
| Works | サムネを **`clip-path` で下から立ち上げ**（`.is-veiled` を JS が付け、交差時に外す。CSS transition 1.1s `--ease-veil`）。情報側は `opacity/y` で追随（delay 0.15）。題字は単一行時のみマスク上げ（stagger 0.05、delay 0.3）。v4.0.0 で交互スライドインを廃止（4つ目の語彙になるため） |
| Note | カードを `stagger` で表示後、ホバー用に inline style をクリア |
| パララックス | デスクトップのみ Hero name/desc を `scrub` で連動 |
| 磁気ホバー | `.contact-link` / `.footer-top-link` のみカーソルに吸着（係数0.3・`gsap.quickTo`・mouseleave で elastic 復帰）。fine pointer かつ非 reduced-motion のみ。**ナビ・フッターナビからは v4.0.0 で撤去**（文字が逃げるナビは読みにくく、ホバーで下線が静かに伸びるほうが上品なため） |
| 柱・ノンブル | `.page-marker` を Intersection Observer（中央帯判定）で更新。hero では非表示 |
| イージング | `EASE.enter`(power3.out) / `EASE.veil`(power2.inOut) / `EASE.line`(expo.out) の**3種のみ**。CSS 側の `--ease-enter` / `--ease-veil` / `--ease-line` と対になる（[4.6 モーションの語彙](#46-モーションの語彙v400) 参照） |
| SplitText フェイルセーフ | `splitReady` を個別判定し、欠落時は各演出が従来の行送りへフォールバック。分割はすべて `document.fonts.ready` 後（FOUT対策） |

### 5.1.1 WebGL「墨の靄」（fx.js）

| 項目 | 仕様 |
|---|---|
| 実装 | 素のWebGL1・フルスクリーンクワッド1枚・fbm 3オクターブ（依存ゼロ・約200行） |
| 表現 | `--paper`→`--accent` の2色補間のみ、右上中心のフェード、ポインタでノイズ座標が僅かに偏る（lerp 0.03）。強度は**紙 0.07 / 夜 0.13**（夜は地が暗く同じ強度では靄が沈むため） |
| 負荷制御 | DPR上限1.5×内部解像度0.75倍、rAFは `gsap.ticker` に一本化、hero画面外・タブ非表示・幅860px未満で停止 |
| 色の取得 | シェーダの2色はハードコードせず `--paper` / `--accent` から読む。カスタムプロパティは `getComputedStyle` で解決されないため、プローブ要素の実プロパティへ一度乗せ、canvas2d に sRGB へ展開させる（`oklch()` と `light-dark()` をそのまま扱える）。`themechange` イベントで再取得し即再描画 |
| **初期クリア** | `alpha: false` のため、初描画までクリアカラー（既定=黒）が**不透明の黒板として露出する**。描画バッファのリサイズ後に紙色で `clearColor`+`clear` し、さらに1フレーム即 `render()` してから運転判定へ渡す（バックグラウンドタブで初期化された場合に復帰時へ黒が差すのを防ぐ） |
| 起動 | `requestIdleCallback` / load 後（LCPに影響させない）。起動成功時のみ `#hero.has-webgl` を付与し CSS滲みをフェードアウト |
| フォールバック | 非対応・失敗・停止時は `#hero::before` の静的 radial-gradient 滲みが残る（全環境で必ず淡い滲みがある） |

### 5.2 Works カード 手動スライドショー

| 項目 | 仕様 |
|---|---|
| 対象要素 | `.work-thumb[data-slide]` 内 `.work-thumb-img`（DIMENSION: 1枚 / 翡翠眼: 1枚 / Nagi: 7枚 / 中心銘: 1枚 / Frequency Analyzer: 2枚 / Lisa Mizuno: 1枚 / CHINJU CLI: 1枚 / 領収書仕分けAI: 1枚） |
| **必須マークアップ** | 画像が1枚のカードでも `data-slide` / `.slide-prev` / `.slide-next` / `.slide-dots` の4点をすべて記述すること。初期化は `imgs.length <= 1` の分岐でこれらへ無条件アクセスするため、欠けると `TypeError` が `forEach` の外へ抜けて**ループが中断し、以降のカードのスライドショーがすべて初期化されない**（`<head>` のCDNフェイルセーフは `gsap === undefined` にしか反応せず救済できない） |
| 操作 | 左右矢印ボタン・ドットナビのクリック、またはタッチスワイプ（横方向40px超かつ縦移動より大きい場合のみ反応し、縦スクロールと誤判定しない） |
| 切り替え | `opacity: 0→1`（CSS transition 0.6s ease） |
| 1枚のみの場合 | 矢印・ドットを非表示（JS制御） |
| 矢印表示 | ホバー時**および `:focus-visible` 時**に表示。背景 `rgba(26,26,28,0.42)` + `blur(4px)` の丸（30px）、ホバーで `0.66`。タッチ端末（`@media (hover: none)`）では opacity 0.85 で常時表示 |
| ドット | **`<button>`**（v4.0.0 で `<span>` から変更。旧実装はキーボードで操作できなかった）。5px 円、`box-shadow` 付き。現在: 白98%・1.15倍 / 非選択: 白50%。透明 `::after`（`inset: -10px -2px`）でタップ範囲を拡大（見た目不変）。`aria-label`（「N枚目を表示」）と `aria-current` を持つ |
| 読み上げ | 各サムネに `role="status" aria-live="polite"` の sr-only 要素を持ち、切替時に「4 / 7」を通知。1枚のみのカードでは JS が要素ごと削除する |
| 実装 | JavaScript（`addEventListener`、`e.stopPropagation()` でカード側のクリック委譲への伝播を抑止）|
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
| フォーカス可視化 | `:focus-visible` に `--accent-ink` の 2px リング（瞬時表示）。**サムネ上のコントロール**（矢印・ドット）は下地が暗くタウープでは沈むため、白の 2px 輪郭に切り替える |
| コントラスト | 全インクトークンの明度を「地に対する目標コントラスト比」から逆算して決めている（[4.2](#42-カラーパレットv400--oklch-単一色相軸) 参照）。テキストに使う最も淡い `--muted-2` が **AA 下限 4.5:1**（紙 4.50 / 夜 4.53）。`--faint`（1.62 / 1.90）は**装飾専用**でテキストには使わない |
| 画像代替 | 全 `<img>` に `alt`、装飾要素に `aria-hidden`、スライド矢印・ドットに `aria-label` |
| リンク名 | nav ロゴは `alt=""` の画像のみでリンク名が存在しなかったため、sr-only の「頁首へ」を内包する（v4.0.0） |
| **インタラクティブ要素のネスト** | `.work-card` は v4.0.0 以前 `<a>` で、その中にスライド矢印の `<button>` を含む**仕様違反**だった。カードを `<article>` にし実リンクを題字（`.work-link`）へ移設。カード全面のクリックは JS が題字リンクへ委譲する（`e.target.closest('a, button')` と選択テキストの有無で抑止）。**stretched link（`::after` の全面オーバーレイ）は本文のテキスト選択を殺すため採らない** |
| ランドマーク | `<nav>` / `<main>`（hero〜contact を内包）/ `<footer>` を明示。スクリーンリーダーの領域ジャンプに対応 |
| 見出し構造 | h1（氏名）→ 各セクション h2（about / 制作 / 言葉 / 連絡）→ 作品名 h3。飛び級なし。About はラベル "about" を `<h2>` 化して見出しアウトラインに含める |
| タップ標的 | スライドドットは透明 `::after` でタップ範囲を縦25px相当に拡大。タッチ端末では矢印（30px）を常時表示（WCAG 2.5.8 配慮） |

### 5.5 CDNフェイルセーフ

GSAP/ScrollTrigger/SplitText/Lenis を CDN から読み込むため、CDN障害・ネットワーク遮断時に演出が初期化されず `#page-intro` オーバーレイが画面を覆ったまま白画面になるリスクがある。これを多層で防ぐ。

| 層 | 仕様 |
|---|---|
| `script.js` ガード | `gsap`/`Lenis` が `undefined` の場合は演出を一切初期化せず、`#page-intro` を非表示にし `.reveal`/`.work-card`/`.work-info`/`.note-card`/hero新要素 等を最終表示状態へ（`.work-thumb.is-veiled` も外す）。ナビ・スライドショー・アクティブ連動・柱ノンブルは gsap 非依存で常時動作 |
| `SplitText` 個別ガード | gsap は居るが SplitText のみ欠落した場合、`splitReady=false` で文字分割演出だけを従来の行送りにフォールバック |
| `fx.js` ガード | gsap 不在・WebGL 取得失敗・シェーダコンパイル失敗のいずれでも起動せず、CSSの静的滲みが残る |
| インライン保険 | `<head>` 内の小スクリプトが `load` 後 2.5秒で `gsap` 未定義を検知した場合、同様にオーバーレイ除去とコンテンツ表示を行う（`.work-info` と `.is-veiled` にも追随） |

gsap/Lenis 不在時はアンカーリンクもネイティブスクロールにフォールバックする（v3.0.0 で CDN 全断時の全文表示・スライドショー動作を実測検証済み）。

### 5.6 画像・アセット最適化

| 項目 | 仕様 |
|---|---|
| 遅延読み込み | 全 `<img>` に `loading="lazy"` + `decoding="async"`、動画に `preload="metadata"` |
| レイアウトシフト対策 | `.work-thumb` は `aspect-ratio`（16/10・860px以下4/3）で領域確保、`favicon`/`note-avatar` に `width`/`height` 明示 |
| 画像変換 | スクリーンショットは長辺1200px・JPG（quality 80-82）。OGPは1200幅JPG。faviconは128px PNG。**nav アイコンは別ファイル `nav-mark.png`**（256px・透過）— favicon は白地の不透明PNGで、夜の紙では白い四角として浮くため、白地からの距離をアルファ化（ノイズ床28・径方向の窓）した透過版を用意している |
| 動画 | `freq-video-dark.mp4` は720幅・無音・H.264（CRF30）で再エンコード（3.0MB→112KB） |
| WebFont | `fonts/` 合計 140KB（サブセット済み woff2 × 6。5.8 参照） |
| 合計 | `images/` 約1.0MB（最適化前 約13MB） |

### 5.7 配色の同期（夜明け／日没）

紙と夜のどちらで読むかは選ばせない。**訪問した時刻の空に合わせる**。

| 項目 | 仕様 |
|---|---|
| 決め方 | 端末の時計と太陽の位置。**夜明けで紙・日没で夜**。手動の切替は持たない |
| 太陽の計算 | `<head>` のインライン（`/* @solar start */`〜`/* @solar end */`）。NOAA の日出没式（中心差3項）を素の JS で解く。**外部 API も位置情報の許可も使わない** |
| 日出没の定義 | 太陽高度 **−0.833°**（大気差 34′ ＋ 太陽の視半径 16′）を跨いだ瞬間 |
| 場所の推定 | 緯度は端末から得られないため**中緯度 35° 固定**。経度は**タイムゾーンの時差**から起こす（15° = 1時間）。夏時間の1時間ぶんも東へ寄るので、時計どおりの日出没になる |
| 精度 | 国立天文台の暦（東京）と **±3分**。経度を標準時子午線（東経135°）で近似するため東京では日没の**約19分後**に夜へ移る（市民薄明の内側で、体感とはむしろ合う） |
| ちらつき防止 | スタイルシートの読み込みより前のインラインが `data-theme` を確定させる。初回描画で紙→夜のフラッシュが起きない |
| 境界での差し替え | `script.js` の `solarTheme` が次の日出没へ `setTimeout` を張る。端末のスリープでタイマーは飛ぶため**上限6時間**で切り、`visibilitychange`（タブ復帰）と `pageshow`（bfcache 復帰）でも取り直す |
| 白夜・極夜 | 日出没が存在しない緯度では、その周期の太陽が地平線の上か下かで配色を決め、6時間後に再判定する |
| 追従の仕組み | 全カラートークンが `light-dark(紙の値, 夜の値)` で定義されているため、`color-scheme` を固定するだけで**一括で切り替わる**。トークン値の二重定義もクラス総当たりの上書きも不要 |
| 連動 | **変わった時だけ** `themechange` を発火する（同じ配色を当て直しても飛ばない）。`fx.js` がこれを受けてシェーダの色を取り直し即再描画する |
| 併せて切り替わるもの | 紙グレインの合成モード（紙 `multiply` 0.035 / 夜 `screen` 0.05）、`theme-color` メタ、WebGL 靄の強度（0.07 / 0.13） |
| `theme-color` | JS が効く環境では `data-theme` が OS 設定を上書きするため、`media` で出し分けた静的な2枚を**単一の meta に畳んで**配色に同期させる。JS 無効時はその2枚がそのまま効く |
| JS 無効時 | `data-theme` が付かず、既定の `color-scheme: light dark` で **OS 設定に追従**する（従来の挙動） |
| 記憶 | 持たない。`localStorage.theme`（旧トグルの記憶）は読まず、起動時に残骸を削除する |

**手放したもの:** 時刻を OS 設定より優先するため、「昼でも夜の紙で読みたい」という希望は通らなくなった。紙・夜のどちらもインクのコントラストは AA（最も淡い `--muted-2` で 4.50 / 4.53）を満たしており、読めなくなる配色は無いこと、このサイトの配色は情報ではなく**時刻の表現**であることから、選択肢より一貫性を採る。

#### 5.7.1 検算（`tools/verify-solar.mjs`）

```bash
node tools/verify-solar.mjs        # 依存なし・ブラウザ不要
```

日出没のずれは**目で見て気付けない**。数分ずれても季節で狂っても、見た瞬間の配色はそれらしく出てしまい、間違いは半日後にしか現れない。`index.html` の `@solar` ブロックをそのまま取り出して実行し、次を検算する。

| 検査 | 内容 |
|---|---|
| 暦との突き合わせ | 東京の夏至 04:25 / 19:00、冬至 06:47 / 16:32（±3分） |
| 性質 | 春分の昼の長さ ≈ 12時間05分、日出没が南中を挟んで対称、夏至と冬至の昼の差 > 4時間 |
| 経度→時刻 | 経度を15°東へ振ると日出没がちょうど1時間早まる |
| 極地 | トロムソの夏至＝白夜で紙、冬至＝極夜で夜 |
| 境界 | 日出没の前後1分で配色が入れ替わる。「次の切替」が当日の日没／日の出と一致する |
| 通年 | 1年を6時間刻み（1460点）で、配色が確定し・次の切替が未来かつ25時間以内・その時刻をまたぐと必ず反転する |
| 端末側 | `place()` が時差から経度を起こす、`apply()` が `data-theme` と `theme-color` を立て**同じ値では再通知しない** |
| 取りこぼし | `index.html` に旧トグル（`theme-switch` / `data-theme-set` / `localStorage.getItem('theme')`）が残っていない |

**配色まわりを直したら必ず回すこと。**

### 5.8 WebFont のサブセット・セルフホスト

Google Fonts の直参照は、**レンダーブロッキングの CSS だけで 573KB** あった（日本語2書体ぶんの `unicode-range` 定義が約120ブロック）。フォント本体と合わせて 2,258KB / 85リクエスト / 別オリジン2つを要し、しかも HTML → googleapis（CSS・ブロッキング）→ gstatic（本体）と直列に往復していた。

| | 旧 v4.1 | 新 v4.2 |
|---|---|---|
| リクエスト | 85 | **6** |
| 転送量 | 2,258 KB | **142 KB** |
| うちレンダーブロッキング CSS | 573 KB | **0 KB** |
| オリジン | 2（外部） | **1（自サイト）** |
| `document.fonts.ready` 中央値 | 595 ms | **172 ms** |
| FCP 中央値 | 348 ms | **132 ms** |

計測条件: 同一マシン・同一回線で旧版（`a2bf8bc`）と新版をローカルに並べて配信し、毎回キャッシュ空のコンテキストで5回、その中央値。旧版のフォントは Google Fonts の実 CDN から取るため、この差にはクロスオリジンの往復も含む（それが直参照の実コストであり、意図した比較）。

#### 生成（`tools/build-fonts.mjs`）

```bash
node tools/build-fonts.mjs           # 書体ごとに必要な文字だけを含める（既定・要 playwright + Chrome）
node tools/build-fonts.mjs --union   # 全書体に全文字（ブラウザ不要・383KB）
```

Google Fonts の `css2?family=…&text=…` API が最適サブセットの woff2 を返すため、ローカルに fonttools 等のツールチェーンを置かずに生成できる。生成物は**内容ハッシュ付きのファイル名**で `fonts/` に置き、`style.css` の `@font-face` と `index.html` の `preload` を**マーカー間で自動書き換え**する（`@generated:fonts start` 〜 `end`。この範囲は手で編集しない）。

既定モードは index.html を実際にレンダリングし、「どの書体・ウェイトでどの文字が組まれているか」を計測して書体別の文字集合を作る。明朝の見出しにしか出ない字をゴシック側に含めずに済むため `--union` の 1/3 になる。

**⚠ `text-transform` の適用後の文字で集めること。** ソースの `about` から集めると、実際に描画される `ABOUT` の大文字が丸ごと subset から漏れ、ナビ・eyebrow・work-cat が端末のフォントに落ちる。Inter は欧文のみで軽いため ASCII 印字可能文字を丸ごと含めて保険にしてあるが、和文2書体は高価なので厳密に絞っている。

#### 検証（`tools/verify-fonts.mjs`）

```bash
node tools/verify-fonts.mjs [url]    # 既定 http://localhost:3000
```

サブセット漏れは見た目が似ていて気付きにくい。CDP の `CSS.getPlatformFontsForNode` で「実際にどのフォントで描かれたか」を全要素に問い合わせ、自前の3書体以外が使われていたら失敗する。**テキストを変更したら `build-fonts` → `verify-fonts` の順に回すこと。**

この検査で、`--font-latin` が `'Inter', sans-serif` と和文フォントを含まず、**「蠍座」「酉年」がずっと端末のヒラギノで描画されていた**既存バグを発見した（v4.2.0 でスタックに Noto Sans JP を挟んで修正）。

#### 配信

`vercel.json` で `/fonts/*` に `Cache-Control: public, max-age=31536000, immutable` を付与。ファイル名に内容ハッシュが入っているため、再生成すれば URL が変わり、古いキャッシュを掴み続けることはない。

---

## 6. デプロイ・運用

### 6.1 OGP（Open Graph Protocol）

| 項目 | 値 |
|---|---|
| og:title | 滝本 哲也 |
| og:description | Web開発・自動化フロー・ツール開発。生活を豊かにするアイデアを形にしています。 |
| og:type | website |
| og:url | https://takimototetsuya.vercel.app |
| og:image | `images/ogp.jpg`（1200×630px・84KB） |
| og:site_name | 滝本 哲也 |
| twitter:card | summary_large_image |

### 6.1.1 SEO（構造化データ）

| 項目 | 値 |
|---|---|
| canonical | `https://takimototetsuya.vercel.app/` |
| JSON-LD | schema.org `Person`（name / alternateName / url / image / jobTitle / description / email / sameAs[note×2]） |

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
| **テキストの変更（重要）** | `index.html` を直したら **必ず `node tools/build-fonts.mjs` → `node tools/verify-fonts.mjs`**。サブセットに無い字は端末のフォントで描画され、その字だけ書体が変わる |
| **配色ロジックの変更（重要）** | `index.html` の `@solar` ブロックまたは `script.js` の `solarTheme` を直したら **必ず `node tools/verify-solar.mjs`**。日出没のずれは見た目で気付けず、半日後に現れる |
| 書体・ウェイトの追加 | `tools/build-fonts.mjs` の `FACES` に足してから再生成（`@font-face` は自動で書かれる） |
| 仕様変更 | `spec.md` |
