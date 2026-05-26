# ポートフォリオサイト 仕様書

| 項目 | 内容 |
|---|---|
| バージョン | 2.5.2 |
| 作成日 | 2026年3月7日 |
| 最終更新 | 2026年5月26日 |
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
| 2.5.0 | 2026-05-25 | **エディトリアル昇華リデザイン。** 見出し書体を Shippori Mincho B1（格のある明朝）へ更新。タイプ階層を再設計（ベース15px、`--ink/--text/--muted` の3層）。全セクションに「Latin小ラベル＋和文明朝見出し」のヘッダー体系を新設（works=制作 / events=催し / note=言葉 / contact=連絡）。配色を深化（生成り継続・`--paper-2`・タウープ `--accent #a3937a` / 可読版 `--accent-ink #7c6f59`）。Worksカードに索引番号01-04・明朝題字・「View →」アフォーダンス・細罫サムネ枠を追加。EventsのInstagram埋め込みを paper-2 フレーム＋細罫＋figcaption で世界観に統一。About本文を明朝化。Note/Contactを洗練。`prefers-reduced-motion` 対応・`:focus-visible` を追加。Worksタイトルの読み仮名（翡翠眼・中心銘）を省略 |

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
| GSAP 3.12.5 + ScrollTrigger | 入場演出・スクロールリビール・パララックス |
| Lenis 1.1.14 | スムーススクロール |
| Google Fonts | Web フォント配信 |

フレームワーク・ビルドツールは使用しない（静的サイト）。GSAP / ScrollTrigger / Lenis は CDN から読み込み。依存パッケージなし、ビルド手順不要。

### 2.2 ファイル構成

```
-portfolio/
├── index.html          # メインページ（全セクション）
├── style.css           # 全スタイル定義（冒頭に Hallmark スタンプ）
├── script.js           # GSAP/Lenis 演出・スライドショー・アクティブナビ
├── spec.md             # 本仕様書
├── images/
│   ├── thumb-hisuigan.jpg         # 翡翠眼 マーケットデータ画面
│   ├── thumb-hisuigan-report.jpg  # 翡翠眼 レポート画面
│   ├── Nagi-アイコン.jpeg           # Nagi スライド1（アイコン）
│   ├── nagi-記録１.png              # Nagi スライド2（記録画面1・ライトモード）
│   ├── nagi-記録２.png              # Nagi スライド3（記録画面2・ライトモード）
│   ├── nagi-記録３.png              # Nagi スライド4（記録画面3・ライトモード）
│   ├── nagi-記録４.png              # Nagi スライド5（記録画面4・ライトモード）
│   ├── nagi-記録５.png              # Nagi スライド6（記録画面5・ライトモード）
│   ├── Nagi-カレンダー.png          # Nagi スライド7（カレンダー画面・ライトモード）
│   ├── thumb-chushinmei.png        # 中心銘 メイン画面
│   ├── freq-video-light.mp4       # Frequency Analyzer 画面収録・ライトモード（188KB）
│   ├── freq-video-dark.mp4        # Frequency Analyzer 画面収録・ダークモード（3.0MB）
│   ├── ogp.png                      # OGP画像（1200×630px・リンク共有プレビュー用）
│   └── サイトアイコン.png            # サイトアイコン（favicon・navbar掲載）
└── .claude/
    └── launch.json     # ローカル開発サーバー設定
```

### 2.3 外部リソース

| リソース | 配信 | 用途 |
|---|---|---|
| Inter（300 / 400 / 500） | Google Fonts | 英字 UI・ラベル・索引・キャプション |
| Noto Sans JP（300 / 400） | Google Fonts | 日本語本文・説明文 |
| Shippori Mincho B1（400 / 500 / 600） | Google Fonts | 見出し・名前・about本文・work題字（明朝） |
| GSAP 3.12.5 / ScrollTrigger | cdnjs | アニメーション |
| Lenis 1.1.14 | unpkg | スムーススクロール |
| Instagram embed.js | instagram.com | Events 埋め込み |

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
| 左側 | アイコン（`サイトアイコン.png` 22px・opacity 0.8）のみ |
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
| 名前 | 「滝本 哲也」（**Shippori Mincho B1**、`clamp(3.2rem, 7.5vw, 6rem)`、weight 400、`--ink`） |
| 説明文 | Noto Sans JP、`--fs-body`、`var(--text)`、line-height 2.15 |
| 底部ライン | `.hero-line`（ScrollTrigger 連動なし／入場時に `scaleX` 描画） |
| 入場演出 | ページイントロのオーバーレイ（`#page-intro` を `scaleY` で巻き上げ）→ sub→name→desc を `yPercent` で順次スライドイン（GSAP timeline） |
| パララックス | デスクトップのみ：スクロールに応じ name `yPercent:-12` / desc 減衰（`scrub`） |

### 3.3 About セクション

| 要素 | 仕様 |
|---|---|
| レイアウト | シングルカラム中央寄せ（`max-width: 660px`） |
| eyebrow | "about"（`.sec-eyebrow`、中央配置） |
| メタ情報 | 「1993 / 11 / 9 ｜ 蠍座 ｜ 酉年」Inter、縦仕切り線（`--accent`）区切り |
| 区切りラベル | 「軸」両側に罫線が伸びるセンター区切り（Shippori Mincho、`--accent-ink`） |
| 本文1（人生哲学） | 「現世とは心を高めるために与えられた期間であり、魂を磨くための修養の場である。人間の生きる意味と価値は、その錬磨にある。」**Shippori Mincho 明朝・中央寄せ・`--ink`・`--fs-lead`** |
| 本文2（補助） | 「好奇心の向くまま——探索し、鑑賞し、新しい技術と出会う。与え、分かち合う。」Noto Sans JP、`--muted` |
| リビール | eyebrow→meta→divider→本文行（stagger）→補助 の順に GSAP で順次表示 |

### 3.4 Works セクション — グリッド形式

作品を2カラムグリッドで表示する。セクションヘッダーは「works / 制作」。

#### 3.4.1 グリッド構造

```
[ works（eyebrow） ]
[ 制作（明朝見出し） ]

[ サムネイル A ] [ サムネイル B ]
[ 01 · CATEGORY] [ 02 · CATEGORY]
[ タイトル(明朝)] [ タイトル(明朝)]
[ キャッチ(明朝伊)] [ キャッチ(明朝伊)]
[ 説明文        ] [ 説明文        ]
[ View →       ] [ View →       ]
```

#### 3.4.2 作品カード仕様

| 要素 | 仕様 |
|---|---|
| サムネイル | `aspect-ratio: 4/3`、`1px solid var(--line)` の細罫枠、`<img>`/`<video>` 実画像 |
| メタ行 | 索引番号（01-04、`--accent-ink`、Inter）＋ カテゴリ（uppercase、`--muted`） |
| タイトル | **Shippori Mincho B1**、`--fs-work`（`clamp(1.15rem,1.8vw,1.45rem)`）、weight 500、`--ink` |
| キャッチコピー | **Shippori Mincho B1**、0.95rem、italic、`--text` |
| 説明文 | Noto Sans JP、0.8rem、weight 300、`--text` |
| View アフォーダンス | 「View →」（Inter、uppercase、`--muted`）。カードホバーで `--ink` に変色・矢印が `translateX` |
| ホバー | カードが `y:-4` 浮上、サムネ画像が `scale:1.05`（GSAP） |
| スライド矢印 | ホバー時表示。`rgba(26,26,28,0.42)` + `blur(4px)` の丸ボタン（30px）、白シェブロン |
| ドット | 5px 円、`box-shadow` 付き。現在: 白98%・1.15倍 / 非選択: 白50% |
| リンク | カード全体を `<a target="_blank">` で外部サイトへ |

#### 3.4.3 作品一覧（v2.5.0 時点）

| # | カテゴリ | タイトル | リンク | サムネイル |
|---|---|---|---|---|
| 01 | Web Development | 翡翠眼 | https://hisuigan-macro-insight-engine.vercel.app/ | `thumb-hisuigan.jpg`（1枚） |
| 02 | Web Development | Nagi（凪） | https://nagi-xi.vercel.app/ | `Nagi-アイコン.jpeg` / `nagi-記録１〜５.png` / `Nagi-カレンダー.png`（7枚手動スライド） |
| 03 | Web Development | 中心銘 | https://chushinmei.vercel.app | `thumb-chushinmei.png`（1枚・和紙調ベージュ背景） |
| 04 | Web Development | Frequency Analyzer | https://frequency-analyzer.vercel.app | `freq-video-light.mp4` / `freq-video-dark.mp4`（2枚手動スライド・`<video autoplay muted loop>`） |

※ タイトルの読み仮名（翡翠眼＝ひすいがん／中心銘＝ちゅうしんめい）は v2.5.0 で省略。

### 3.5 Events セクション

| 要素 | 仕様 |
|---|---|
| 位置 | Works と Note の間 |
| ヘッダー | 「events / 催し」 |
| レイアウト | 2カラムグリッド（`events-grid`）、gap 48px、max-width 1100px |
| 埋め込み方式 | Instagram 公式 blockquote embed（`embed.js` 非同期ロード） |
| フレーム | 各埋め込みを `.event-frame`（背景 `--paper-2`・`1px solid var(--line)`・padding 22px）で包み、白いIGカードの浮きを解消 |
| キャプション | `<figcaption>`：ソース表記「Instagram」 |
| レスポンシブ | 860px 以下で1カラム |

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

### 3.8 Footer

著作権表示のみ（`© 2026 滝本 哲也`）。上罫線・Inter・`--muted`。

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
| `--text` | `#33312e` | 本文・説明文 |
| `--muted` | `#847f77` | ラベル・メタ |
| `--line` | `#e4e0d9` | ヘアライン・罫線 |
| `--accent` | `#a3937a` | 罫線・装飾（タウープ） |
| `--accent-ink` | `#7c6f59` | eyebrow・索引・ハンドル名（可読タウープ） |

### 4.3 タイポグラフィ

| 用途 | フォント | ウェイト | サイズ |
|---|---|---|---|
| Hero 名前 | Shippori Mincho B1 | 400 | `--fs-hero` `clamp(3.2rem, 7.5vw, 6rem)` |
| セクション見出し | Shippori Mincho B1 | 500 | `--fs-h2` `clamp(1.7rem, 3.6vw, 2.6rem)` |
| about本文 / contactリード | Shippori Mincho B1 | 400 | `--fs-lead` `1.05rem` |
| work題字 | Shippori Mincho B1 | 500 | `--fs-work` `clamp(1.15rem, 1.8vw, 1.45rem)` |
| 日本語本文・説明文 | Noto Sans JP | 300 / 400 | `--fs-body` `0.9rem` ほか |
| ラベル・索引・ナビ | Inter | 400 / 500 | `--fs-label` `0.68rem` 〜 |

ベース文字サイズ 15px、和文 line-height 約1.8〜2.5。

### 4.4 CSS 変数一覧（抜粋）

| 変数 | 値 | 用途 |
|---|---|---|
| `--nav-h` | `60px` | ナビゲーション高さ |
| `--max-w` | `1100px` | コンテンツ最大幅 |
| `--font-latin` | `'Inter', sans-serif` | 欧文サンセリフ |
| `--font-ja` | `'Noto Sans JP', sans-serif` | 日本語サンセリフ |
| `--font-serif-ja` | `'Shippori Mincho B1', serif` | 日本語明朝（見出し系） |
| `--font-body` | `'Inter', 'Noto Sans JP', sans-serif` | body 既定（和文フォールバック保証） |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | UI トランジション |

### 4.5 レスポンシブブレークポイント

| ブレークポイント | 変更内容 |
|---|---|
| 860px 以下 | works/events グリッドを1カラム、左右パディング 28px、ナビ gap 22px・padding 20px |
| 540px 以下 | ナビフォント縮小（0.62rem）・letter-spacing詰め（0.16em）・gap 14px・padding 18px。works gap・about メタ間隔・note アバター/間隔の微調整 |
| 380px 以下 | ナビフォント0.58rem・letter-spacing 0.12em・gap 11px（極小幅の破綻防止） |

横スクロール防止: `html, body { overflow-x: clip }`、画像グリッドは `minmax(0, 1fr)`、見出しは `overflow-wrap: anywhere`。

---

## 5. 機能仕様

### 5.1 スクロール演出（GSAP + Lenis）

| 項目 | 仕様 |
|---|---|
| スムーススクロール | Lenis（`duration: 1.2`）。アンカーリンクは `lenis.scrollTo` に委譲（offset -60） |
| ページイントロ | `#page-intro` オーバーレイを `scaleY` で巻き上げ → ヒーロー入場へ連結 |
| リビール | `.reveal` 要素を ScrollTrigger（`start: top 88%`, `once`）で `opacity/y` フェードイン |
| セクション罫線 | `.section-line` を `scaleX` で描画（`start: top 98%`） |
| About | サブ要素を段階的に stagger 表示 |
| Works | カードを左右交互に `x:±24` からスライドイン |
| Note | カードを `stagger` で表示後、ホバー用に inline style をクリア |
| パララックス | デスクトップのみ Hero name/desc を `scrub` で連動 |

### 5.2 Works カード 手動スライドショー

| 項目 | 仕様 |
|---|---|
| 対象要素 | `.work-thumb[data-slide]` 内 `.work-thumb-img`（翡翠眼: 1枚 / Nagi: 7枚 / 中心銘: 1枚 / Frequency Analyzer: 2枚） |
| 操作 | 左右矢印ボタンまたはドットナビをクリック |
| 切り替え | `opacity: 0→1`（CSS transition 0.6s ease） |
| 1枚のみの場合 | 矢印・ドットを非表示（JS制御） |
| 矢印表示 | ホバー時表示。背景 `rgba(26,26,28,0.42)` + `blur(4px)` の丸（30px）、ホバーで `0.66` |
| ドット | 5px 円、`box-shadow` 付き。現在: 白98%・1.15倍 / 非選択: 白50% |
| 実装 | JavaScript（`addEventListener`、`e.stopPropagation()` でカードリンクへの伝播を抑止）|
| Nagi 表示位置 | 全画像 `object-position: top center`、1枚目（アイコン）のみ `center` |

### 5.3 ナビゲーション アクティブ連動

| 項目 | 仕様 |
|---|---|
| 実装方法 | Intersection Observer API |
| 対象要素 | `section[id]` すべて |
| 閾値 | `threshold: 0.4` |
| 挙動 | ビューポート内に 40% 以上入ったセクションのナビリンクに `.active` を付与 |

### 5.4 アクセシビリティ

| 項目 | 仕様 |
|---|---|
| `prefers-reduced-motion: reduce` | JS分岐で入場・リビール・パララックスを無効化し最終状態を即時表示。CSS の `@media` で全 transition/animation を実質無効化。Lenis の `duration` も 0 に |
| フォーカス可視化 | `:focus-visible` に `--accent-ink` の 2px リング（瞬時表示） |
| コントラスト | 主役テキストを `--ink`、本文を `--text` とし washed-out を回避 |

---

## 6. デプロイ・運用

### 6.1 OGP（Open Graph Protocol）

| 項目 | 値 |
|---|---|
| og:title | 滝本 哲也 |
| og:description | Web開発・自動化フロー・ツール開発と、非日常体験イベントの企画主催。生活を豊かにするアイデアを形にしています。 |
| og:type | website |
| og:url | https://takimototetsuya.vercel.app |
| og:image | `images/ogp.png`（1200×630px） |
| og:site_name | 滝本 哲也 |
| twitter:card | summary_large_image |

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
