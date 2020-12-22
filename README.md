## ウェブサイト更新手順  
### 概要  
詳しい環境構築手順は[こちら](ContributorGuide.md)を参照してください。　　

テンプレートエンジンはEJSを用いて、Gulpでビルドしています。　　
CSSフレームワークはBulmaを用いて、webpackでビルドしています。　　

`$ npm run gulp`  

でHTMLが生成され  

`$ npm run build`  

でCSSが生成されます。  

`docs` フォルダ内に生成されるため、`docs` フォルダの内容をそのままコミットすれば、反映完了します。  

### 更新手順  
1. `_page` フォルダにHTMLの元ファイル（.ejs）があるので、更新したいファイルを更新  
1. `$ npm run gulp` を実行  
1. スタイル変更も行いたい場合は、`_style/mystyles.scss` を更新  
1. `$ npm run build` を実行  
1. `$ http-server ./docs`を実行してブラウザで確認  
1. `docs` フォルダの内容が更新されていることを確認  
1. 変更をプルリクをしていただけたら、確認後反映いたします。  

> GitHub pageを使用するため、プルリク承認後、自動的にウェブサイトに反映されます。

### TODO  WHAT YOU WANT
- [ ] ビルドを一本化したい
- [ ] プルリクマージで本番反映したい
- [ ] テンプレートを絶対参照できるようにしたい
- [ ] ちゃんとCMS化する
To translate the above Readme.md , click here -> https://translate.google.co.in/
Thank you!
