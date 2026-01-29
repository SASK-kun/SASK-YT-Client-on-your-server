# SASK-YT-Client-on-your-server
あなたのサーバー環境下でYTクライアントを実行できます!

# ・起動方法
①Terminalにて下記を実行。
<br>
sudo apt update && sudo apt upgrade -y
<br>
↓
<br>
sudo apt install nodejs git -y
<br>
↓
<br>
sudo apt install cloudflared
<br>
↓
<br>
mkdir sask && git clone https://github.com/SASK-kun/SASK-YT-Client-on-your-server.git
<br>
↓
<br>
cd && cd sask/sask-yt-home && npm install && node server.js
<br>
↓
<br>
cloudflared tunnel --url http://localhost:3000
<br>

ログ内に出てくる〇〇〇〇〇〇〇〇.trycloudflare.comのリンクを探してコピーする。
