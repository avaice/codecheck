# 01-create-programming-language

以下の仕様を満たす言語を作ってください。

## 仕様

- コードを上から下へ処理する
- リアルタイムに構文の解釈を行うインタプリタ言語
- 「構文一覧」セクションに示す構文に対応する

## 構文一覧

- `""`
  - ダブルクォーテーションで囲まれた文字列
  - 同じように扱われるもの
    - `1234`
      - 何も囲まれていない数値
      - 整数または小数。負の値もありえる
    - `variant`
      - ダブルクォーテーションで囲まれていない文字列が引数で指定された場合、変数として認識し、変数の値を読む。
      - 変数が未宣言ならエラーを出して終了
- `PRINT`
  - 引数で指定した文字列を表示できる
  - 例
    - `PRINT "Hello, World"`
      - Hello, World
    - `PRINT "今日は" "いい天気"`
      - 今日はいい天気
- `SET`
  - 変数を設定する
  - 変数宣言も兼ねる
  - 例
    - `SET text "あいうえお"`
      - text に「あいうえお」が設定される
- `ADD`
  - 加算命令。計算結果は第一引数の変数に加算される。
    - 変数が未定義ならエラーを出して終了
  - 引数の数は最低 16 個まで対応する
  - 引数の型が文字列型であれば、自動的に数値へ変換する。
  - 例
    - `ADD result 2 num`
      - result の値が 1 だったと仮定
      - num の値が 3 だったと仮定
      - result は 6 になる
- `SUB`
  - 減算命令。他は ADD と同じ
  - 例
    - `SUB result 2`
      - result の値が 1 だったと仮定
      - result は-1 になる
- `MUL`
  - 乗算命令。他は ADD と同じ
  - 例
    - `MUL result 2`
      - result の値が 5 だったと仮定
      - result は 10 になる
      -
- `DIV`
  - 除算命令。他は ADD と同じ
  - 例
    - `DIV result 2`
      - result の値が 15 だったと仮定
      - result は 7.5 になる
- `INPUT`
  - ユーザーから文字列型の入力を受け取る
  - 最低 128 文字までの入力に対応する
  - 例
    - `INPUT user_input`
      - user_input にユーザーの入力が入る
      - 入力先の変数が未宣言なら、変数宣言も兼ねる

## サンプルプログラム

### あいさつ

```
PRINT "あなたの名前は？"
INPUT name
PRINT "こんにちは、" name "さん"
```

「たろう」と入力した時の期待値
「こんにちは、たろうさん」

### 計算

```
SET num 10
SET num2 -4
ADD num 10 num2
SUB num 4
MUL num 2 2
DIV num 2
ADD num 0.2
PRINT num
```

期待値:24.2

### 電卓

```
PRINT "左辺の値"
INPUT left

PRINT "右辺の値"
INPUT right

SET sum 0
ADD sum left right
PRINT sum
```

それぞれ 3, 4 と入力した時の期待値: 7
