# 事前準備  
1. GitHubアカウントの取得する。  
1. 下記のrepositoryをforkする。  
`https://github.com/MyDataJapan/website`  
1. 編集ソフトをインストールする。  
下記のソフト一覧から選択してください。  
    1. [Brackets](http://brackets.io/)  
    お勧め理由：内蔵web server  
    1. [Visual Studio](https://code.visualstudio.com/)  
    1. [Sublime Text 3](https://www.sublimetext.com/3)  
    お勧め理由：markdown viewer + scp plugin can transfer file to linux server  

# 環境構築手順  
1. [Node JS](https://nodejs.org/en/) (10.14.1 LTS)をダウンロードする。    

1. Node JSをインストールする。  

1. ForkされたrepositoryをPCにcloneする。  

1. ウェブサイトのcloneしたフォルダに移動する。  
`cd {{clone先}}\website`  

1. 下記のコマンドを実行して必要なcomponentsをwebsite配下のmodulesにインストールする。  
`npm install`  

# http-serverのインストール手順  
[npmのWeb server](https://www.npmjs.com/package/http-server)をインストールする場合、既存のBrowser経由でもウェブサイトを検証できる。

1. 下記のコマンドでhttp-serverをインストールする。  
`npm install http-server -g`  

1. ウェブサイトのcloneしたフォルダに移動する。  
`cd {{clone先}}\website`  

1. 下記のコマンドを実行してウェブサイトを確認する。  
`http-server`  

        c:\dev\website>http-server ./docs
        Starting up http-server, serving ./docs
        Available on:
          http://10.77.41.55:8080
          http://192.168.56.1:8080
          http://127.0.0.1:8080
        Hit CTRL-C to stop the server
        [Wed Dec 05 2018 15:37:11 GMT+0900 (GMT+09:00)]
