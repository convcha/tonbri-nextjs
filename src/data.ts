// noinspection HtmlUnknownAttribute
export const articles = {
  markdown: `---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::
`,
  shiwasu: `## とある師走のWeb制作会社

社長「お〜い、やめ太郎くん」

ワイ「なんでっか」

社長「ちょっと作ってほしい画面があんねん」

![](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/295452/ce33fe80-5e90-8bad-1ee2-5bbb9c2474c6.png)

社長「↑**こんなん**を作ってほしいねん」

ワイ「おお、**SNSの設定画面**とかによくあるやつでんな」
ワイ「簡単ですわ、任しといてください」

社長「おお、ありがとう」
社長「フレームワークは**Vue.js**で頼むわ」
社長「ほな、よろしく〜」

## 作り始めてみる

ワイ「ええと、この**トグルスイッチ**みたいなんはいくつ必要なんや」
ワイ「3つやな」
ワイ「ほな、このトグルスイッチは**コンポーネント**として作っとこか」
ワイ「そしたら3回**使い回せる**からな」
ワイ「イメージとしては、**ToggleSwitch**っていうコンポーネントを作って・・・」

\`\`\`vue
<ul class="switch-list">
  <li>通知 <ToggleSwitch /></li>
  <li>検索フィルター <ToggleSwitch /></li>
  <li>ダークモード <ToggleSwitch /></li>
</ul>
\`\`\`

ワイ「↑こんな感じで使うんや」
ワイ「ほな、その**ToggleSwitch**コンポーネントを作っていこか」

## コンポーネント作り開始

ワイ「ええと」

![スクリーンショット 2019-11-21 15.27.35.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/295452/a0b6ca60-63eb-b1d8-18b3-8b94a7c42ddc.png)

ワイ「↑これを作るんやから」
ワイ「構成要素は、**枠の部分**と、**中の丸いやつ**」
ワイ「その2つやな」
ワイ「ほな、div2つで作れそうやな」

\`\`\`vue:ToggleSwitch.vue
<template>
  <div class="frame">
    <div class="button" />
  </div>
</template>
\`\`\`

ワイ「↑こうやな」
ワイ「ほんで、**ON/OFF**の状態は、このコンポーネントの**data**の中で管理するんや」
ワイ「ほな、**data**の中に**value**ってプロパティを作って管理していこか」
ワイ「初期値は\`false\`や」

\`\`\`js:ToggleSwitch.vue
data() {
  return {
    value: false
  }
}
\`\`\`

ワイ「↑こうやな」
ワイ「ほんで、スイッチが**ON**の時だけ・・・つまり**value**が\`true\`の時だけ」
ワイ「div要素に\`frame--on\`っていうクラスを付けたいから」

\`\`\`vue:ToggleSwitch.vue
<div :class="{ 'frame--on': value }" class="frame">
  <div class="button" />
</div>
\`\`\`

ワイ「↑こうやな」
ワイ「ほんで、\`frame--on\`っていうクラスが付いてる場合は」
ワイ「背景が緑色になって、スイッチは右側に行くんや」
ワイ「そういうCSSを書くで」

\`\`\`css
.frame--on {
  text-align: right;
  background-color: #42ff42;
  border-color: transparent;
}
\`\`\`

ワイ「↑こんな感じや」
ワイ「試しに**value**を\`true\`にしてみよか」

\`\`\`js:ToggleSwitch.vue
data() {
  return {
    value: true
  }
}
\`\`\`

ワイ「どれどれ・・・」

![スクリーンショット 2019-11-21 15.50.34.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/295452/b07955d8-6302-97f2-60a9-a0c38c4c3375.png)


ワイ「おお、ちゃんと**ON**になったで」
ワイ「これでCSSはいい感じやな」

## 次は、イベントに応じた動きを実装

ワイ「ほんで、クリックしたら**ON/OFF**が切り替わるようにしたいんや」
ワイ「せやから、クリックしたら\`toggle\`っちゅう関数を実行することにしよか」

\`\`\`vue:ToggleSwitch.vue
<div @click="toggle" :class="{ 'frame--on': value }" class="frame">
  <div class="button" />
</div>
\`\`\`

ワイ「↑こうやな」
ワイ「ほな、\`toggle\`っていう関数を作っていくで」
ワイ「関数は**methods**の中に書くんや」

\`\`\`js:ToggleSwitch.vue
methods: {
  toggle() {
    this.value = !this.value
  }
}
\`\`\`

ワイ「これでええな」
ワイ「トグルボタンをクリックすると、\`toggle\`関数が実行されて」
ワイ「**value**の値、つまり\`true\`と\`false\`が切り替わる、と」

## 何かが足りない
ワイ「ありゃ、そういえば・・・」

> スイッチが**ON**になったよ！

ワイ「っていうことを親コンポーネントにも**伝えんといかん**よな」
ワイ「最終的には親コンポーネントで値をまとめて、**Submit**なり**APIに送信**なりするはずやもんな」

ワイ「ほな\`$emit\`を使って、親コンポーネントにも**変更後の値を伝える**で」

\`\`\`js:ToggleSwitch.vue
methods: {
  toggle() {
    this.value = !this.value
    this.$emit('input', this.value)
  }
}
\`\`\`

ワイ「↑こうやな」
ワイ「親コンポーネントに\`input\`っていうイベントを送ってやるんや」

ワイ「よっしゃ、**ToggleSwitch**コンポーネント完成や！」

**ハスケル子「なんか、微妙な気がします・・・」**

ワイ「何がやねん」
ワイ「ハスケル子ちゃんは、Vue.jsよく知らんやろ」
ワイ「大丈夫やから、見といて！」

## 実際にコンポーネントを使ってみる
ワイ「ほな、今作った**ToggleSwitch**コンポーネントを使って・・・」

![](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/295452/ce33fe80-5e90-8bad-1ee2-5bbb9c2474c6.png)

ワイ「↑この画面を作っていくで！」

\`\`\`vue:page/setting.vue
<ul class="switch-list">
  <li>
    <span>通知</span>
    <ToggleSwitch />
  </li>
  <li>
    <span>検索フィルター</span>
    <ToggleSwitch />
  </li>
  <li>
    <span>ダークモード</span>
    <ToggleSwitch />
  </li>
</ul>
\`\`\`

ワイ「テンプレート部分はこんな感じやな」

ハスケル子「んー、やっぱり何か」
ハスケル子「ToggleSwitchコンポーネントが**微妙**な気がします・・・」

ワイ「ええ・・・何で・・・？」

ハスケル子「子コンポーネントに状態を持たせない方がいいです」
ハスケル子「状態はページ側で保持するようにして」
ハスケル子「子コンポーネントには、それを**props**で渡すようにしないと」
ハスケル子「あとで、**初期値に戻すボタン**が実装しにくくなると思います・・・」

ワイ「いやいや、大丈夫やろ」
ワイ「**初期値に戻すボタン**を押したら、全部OFFにすんねやろ」
ワイ「今のやり方で実現できるって」

**ワイ「ワイには全て見えとる！！！」**

## 見ていろ、ハスケル子ちゃん

ワイ「まず、コンポーネントを呼び出しとるページの方にも**data**を用意するやろ？」

\`\`\`js:page/setting.vue
data() {
  return {
    notice: false,
    searchFilter: false,
    darkMode: false
  }
},
\`\`\`

ワイ「↑こうや」
ワイ「ほんで、ToggleSwitchコンポーネントをクリックしたら」
ワイ「つまり\`input\`っていうイベントが伝わってきたら・・・」
ワイ「ページの方の**data**も更新されるようにする」

\`\`\`vue:page/setting.vue
<ul class="switch-list">
  <li>
    <span>通知</span>
    <ToggleSwitch @input="notice = $event" />
  </li>
  <li>
    <span>検索フィルター</span>
    <ToggleSwitch @input="searchFilter = $event" />
  </li>
  <li>
    <span>ダークモード</span>
    <ToggleSwitch @input="darkMode = $event" />
  </li>
</ul>
\`\`\`

ワイ「よっしゃ」
ワイ「これで、トグルスイッチをクリックしたら・・・」
ワイ「それと連動して、ページの**data**も変わるようになったで！」
ワイ「大丈夫や〜ん」

ハスケル子「じゃあ、**初期値に戻すボタン**作ってみてください・・・」

**ワイ「おう、任しとき！」**

\`\`\`vue:page/setting.vue
<button @click="reset">初期値に戻す</button>
\`\`\`

ワイ「↑こうやな」
ワイ「クリックしたら**\`reset\`**っていうメソッドが実行されるんや」
ワイ「ほな、次はその**\`reset\`**メソッドを作るで」

\`\`\`js:page/setting.vue
methods: {
  reset() {
    this.notice = false
    this.searchFilter = false
    this.darkMode = false
  }
}
\`\`\`

ワイ「↑こうや」
ワイ「**data**の中のプロパティ達を全部\`false\`にしたるんや」

## できた・・・！？

ワイ「ほな、ハスケル子ちゃん」
ワイ「**初期値に戻すボタン**、押すで・・・！？」

**ワイ「ホンマに押すで・・・！？」**

ハスケル子「いいから押せばいいじゃないですか」

#### **・・・ポチッ！**

## 結果
![](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/295452/5ff11b45-b1dd-0c40-6687-0194a70032e1.png)

**ワイ「戻らへんのかい！！！」**

ハスケル子「そりゃそうですよ」
ハスケル子「だって、このコンポーネント、**propsが1つもない**んですもん」
ハスケル子「コンポーネントっていうのは、propsの渡し方で操作するものなんですから」

ワイ「Oh...」

ワイ「じゃ、じゃあハスケル子ちゃん」
ワイ「ちょっと**インターンの課題の一環**として」
ワイ「これを直してみせてや・・・」

ハスケル子「はぁ・・・」

## 親からpropsを受け取るようにする

ハスケル子「まず**ToggleSwitch**コンポーネントを修正して」
ハスケル子「親から**props**を受け取れるようにしましょう」


\`\`\`js:ToggleSwitch.vue
props: {
  value: {
    type: Boolean,
    default: false
  }
},
\`\`\`

ハスケル子「↑こうですね」
ハスケル子「このコンポーネントはvalueっていう真偽値を親から受け取りますよ、ってことです」
ハスケル子「代わりに**data**は消しました」

ハスケル子「そして、**methods**の中の\`toggle\`関数も変えます」

\`\`\`js:ToggleSwitch.vue
methods: {
  toggle() {
    this.$emit('input', !this.value)
  }
}
\`\`\`

ハスケル子「↑こうですね」
ハスケル子「**data**をいじる部分がなくなりました」
ハスケル子「親コンポーネントに\`input\`という**イベント**と真偽値を受け渡す」
ハスケル子「それだけになりました」

## ページの方も修正していく

ハスケル子「じゃあ、コンポーネントを呼び出しているページ側も修正していきます」
ハスケル子「ToggleSwitchコンポーネントに**value**という**props**を渡してあげます」

\`\`\`vue:page/setting.vue
<ul class="switch-list">
  <li>
    <span>通知</span>
    <ToggleSwitch :value="notice" @input="notice = $event" />
  </li>
  <li>
    <span>検索フィルター</span>
    <ToggleSwitch :value="searchFilter" @input="searchFilter = $event" />
  </li>
  <li>
    <span>ダークモード</span>
    <ToggleSwitch :value="darkMode" @input="darkMode = $event" />
  </li>
</ul>
<button @click="reset">初期値に戻す</button>
\`\`\`

ハスケル子「↑こうですね」
ハスケル子「でも\`:value\`と\`@input\`は」
ハスケル子「まとめて\`v-model\`にしちゃいましょう」[^1]

\`\`\`vue:page/setting.vue
<ul class="switch-list">
  <li>
    <span>通知</span>
    <ToggleSwitch v-model="notice" />
  </li>
  <li>
    <span>検索フィルター</span>
    <ToggleSwitch v-model="searchFilter" />
  </li>
  <li>
    <span>ダークモード</span>
    <ToggleSwitch v-model="darkMode" />
  </li>
</ul>
<button @click="reset">初期値に戻す</button>
\`\`\`

ハスケル子「このほうがスッキリしますね」

## 修正完了

ハスケル子「じゃあ、**初期値に戻すボタン**押しますよ」

#### **・・・ポチッ！**

![スクリーンショット 2019-11-21 17.24.30.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/295452/d86e2d1a-268c-25d3-4d68-c78ba2edcf8f.png)

ワイ「おお、ちゃんと戻った・・・」

## ハスケル子による解説

ハスケル子「子コンポーネントは、親から受け取った状態を映し出す**単なるディスプレイ**として作りましょう」
ハスケル子「下手に**記憶装置**を持たせると、親コンポーネントからリセットしたい時とかに」
ハスケル子「わざわざ[**$refs**](https://qiita.com/1994spagetian/items/5f372fc68122ec207c78)とかで、子コンポーネントの状態を**変えて回らないといけない**ですし」

ワイ「なるほどなぁ・・・」

ハスケル子「親コンポーネントの**data**を変えたら子コンポーネントも**自動で反応！**」
ハスケル子「ってできるのがVueのメリットなのに」
ハスケル子「いちいち\`$refs\`で状態を変えて回ってたら、全然**リアクティブじゃない**ですよね」

ワイ「むむぅ・・・」
ワイ「でも、その**\`$refs\`**いうのを使えば、できることはできるんやろ？」

ハスケル子「できなくはないですけど、コンポーネントの**階層が深くなったとき**とかに**面倒**ですよ・・・」
ハスケル子「\`this.$refs.xxx\`の\`$refs.yyy\`の\`$refs.zzz\`の\`reset\`メソッドを実行・・・みたいな」

ワイ「そうかぁ・・・」

## ワイはただ、直感的に考えたかっただけなんや

ワイ「でもな、例えば現実世界ではそれぞれの生き物が脳を持ってて」
ワイ「それぞれ**自分の脳に情報を溜めていく**やん？」
ワイ「だから、それぞれのコンポーネントが状態を保持してた方が」
ワイ「**現実世界っぽくて想像しやすい**んや」
ワイ「**直感的**なんや」

ハスケル子「現実世界っぽくて理解しやすい・・・」
ハスケル子「それはそうなんですが、あまり現実世界に似せることにこだわると」
ハスケル子「**現実世界のデメリットまで模倣してしまう**ことになるんです」
ハスケル子「たとえば、人間は一人一人が意思や意見を持っているから」
ハスケル子「みんなに関係があるような重大な決定をするときには」
ハスケル子「わざわざ選挙をして、みんなの意見を集計しなければいけませんよね？」
ハスケル子「でも、もしみんなの意思があらかじめ**一括管理**されていれば、集計なんて一瞬のはずです」
ハスケル子「そんなSF映画みたいな話、現実にはあり得ませんけどね」
ハスケル子「でも、そんな現実世界にはあり得ないような便利なものを作りたいから、プログラミングをするんですよね？」

ワイ「た、確かに・・・」

## 話を戻すと
ハスケル子「**初期値に戻すボタン**を作るときの話でしたね」
ハスケル子「ページ側から、**全部スイッチOFF！**ってしたいときは」
ハスケル子「やっぱり**props**で渡したいじゃないですか」

ワイ「せやな・・・」
ワイ「\`$refs\`を使って」

> スイッチA君、値をリセットしてね。
> スイッチB君も値をリセットしてね。
> スイッチC君も値をリセットしてね。

ワイ「ってやるよりも」
ワイ「ページ側のdataを変えたら、**それと連動して自動的に変わってほしい**よな・・・」

ハスケル子「はい」
ハスケル子「コンポーネントって使い回すために作るわけですから」
ハスケル子「親からの使いやすさを意識したいですもんね」

ワイ「ほんまやな・・・」

## だがしかし

ワイ「せやけどハスケル子ちゃん！」
ワイ「子コンポーネントで**props**を受け取らんくても」
ワイ「**Vuex**を使えば出来るんちゃうか！」
ワイ「ToggleSwitchコンポーネントから、**Vuexストア**の状態を書き換えて」
ワイ「そしたらページの方も、Vuexストアの情報と連動して状態が変わる・・・」
ワイ「確か、そんなことできたよな！」

ハスケル子「はい」
ハスケル子「でも、ToggleSwitchコンポーネントは1つなのに」
ハスケル子「ストアの中の**どの状態を変えるか**を、どうやってコントロールするんですか？」
ハスケル子「今回の例で言えば、**通知**の状態を変えるのか」
ハスケル子「**検索フィルター**の状態を変えるのか、それとも**ダークモード**を変えるのか」
ハスケル子「それをどうコントロールするんですか・・・？」

ワイ「そ、それは・・・」
ワイ「ToggleSwitchコンポーネントを呼び出すときに**props**を渡して・・・」
ワイ「あ・・・結局**props**が必要になってもうた・・・」

ハスケル子「ですよね」
ハスケル子「しかも、特定のVuexストアを意識したコンポーネントにしてしまうと」
ハスケル子「今回のプロジェクトと**密結合**というか」　
ハスケル子「そのVuexストアとセットじゃないと成り立たないコンポーネントになってしまって」
ハスケル子「**他の案件で再利用しづらい**コンポーネントになっちゃいます」

ワイ「ほんまや。。。」

## まとめ
- ページ側から操作したいような状態を、子コンポーネントのdataに持たせない。
- 親コンポーネントから**props**を通じて操作できるように子コンポーネントを作る。
- 子コンポーネントは、親から受け取った情報を映し出す、UI付きの**単なるディスプレイ**。
- 子コンポーネントに**記憶装置（data）は不要**なケースも多い。

ハスケル子「って感じですね」
ハスケル子「でも、間違ってたらすみません・・・」
ハスケル子「何しろ、**今日初めてVue.jsを触った**ので・・・」

ワイ「・・・」
**ワイ「すご過ぎか！！！」**

![37B19176-319C-4D7C-8FC0-3CDCE999C8D4.jpeg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/295452/4b7a16a0-3898-5ab2-3919-ba50bf878550.jpeg)


**〜おしまい〜**


## 明日の記事
ゆめみアドベントカレンダー2日目は@su_mi1228さんが登場や。
ためになる記事やから要チェックやで！

[**フロントエンドエンジニア１年目はコードレビューでどんな指摘を受けるのか**](https://qiita.com/su_mi1228/items/c56e7ab2aa88eea8d116)



[^1]: 参考URL：[コンポーネントで v-model を使う](https://jp.vuejs.org/v2/guide/components.html#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%A7-v-model-%E3%82%92%E4%BD%BF%E3%81%86)
`
};
