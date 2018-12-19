# Website更新手順  
Websiteの管理者は下記の手順を実施してwebsiteを更新する。  

1. 下記のURLにアクセス  
`https://aws.amazon.com/console/`  
1. "Sign In to the Console"ボタンをクリック  
1. 下記のログイン情報を記入し"Sign In"ボタンをクリック  
    1. Account ID or alias  
    1. IAM user name  
    1. Password  
1. 初回の方はAWS services配下のFind servicesに"S3"を記入し選択  
1. Bucket一覧から"mydatajapan.org"をクリック  
1. 変更したファイルをupload  
1. ファイルをupload完了後、左上の"aws"アイコンをクリック  
1. 初回の方はAWS services配下のFind servicesに"CloudFront"を記入し選択  
1. CloudFront Distributions一覧の項目をクリック  
1. 詳細画面が表示しましたら、"Invalidations"タブをクリック  
1. 一覧の一番上の項目にチェックを入れて、"Copy"ボタンをクリック  
1. "Object Paths"にuploadしたファイルの相対ファイルpathを記入  
1. "Invalidate"ボタンをクリック  
1. Statusが"Completed"まで待ち  
