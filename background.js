// background.js - シンプルなコンテキストメニュー

chrome.runtime.onInstalled.addListener(() => {
  // 画像に右クリックで「Save」を表示
  chrome.contextMenus.create({
    id: "save-image",
    title: "Save",
    contexts: ["image"],
  });
});

// 「Save」がクリックされた時の処理
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "save-image") {
    chrome.tabs.sendMessage(tab.id, {
      action: "saveImage",
      srcUrl: info.srcUrl,
    });
  }
});
