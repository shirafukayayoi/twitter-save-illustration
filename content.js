// content.js - シンプルな保存機能

// バックグラウンドスクリプトからのメッセージを受信
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "saveImage") {
    console.log("保存が要求されました:", request.srcUrl);
    // ここに保存処理を追加していけます
    alert("Save clicked! URL: " + request.srcUrl);
    sendResponse({ status: "success" });
  }
});

console.log("Twitter画像保存拡張機能が読み込まれました");
