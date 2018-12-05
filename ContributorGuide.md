# 事前準備  
1. GitHubアカウントの取得  
1. 下記のrepositoryをforkする。  
`https://github.com/MyDataJapan/website`  

# 環境構築手順  
1. Download node.js (10.14.1 LTS)  
https://nodejs.org/en/  

1. Install node.js  

1. ForkされたrepositoryをPCにcloneする。  

1. cd {{clone先}}\website  

1. 下記のコマンドを実行して必要なcomponentsをwebsite配下のmodulesにインストールする。  
`npm install`  


npmのWeb serverをインストールする場合、既存のBrowser経由でもウェブサイトを検証できる。

1. npm install http-server -g  
https://www.npmjs.com/package/http-server  

# ウェブサイトの確認手順  
1. http-server
Default is to look at "public".  

        c:\dev\website>http-server
        Starting up http-server, serving ./public
        Available on:
          http://10.77.41.55:8080
          http://192.168.56.1:8080
          http://127.0.0.1:8080
        Hit CTRL-C to stop the server
        [Wed Dec 05 2018 15:37:11 GMT+0900 (GMT+09:00)]
