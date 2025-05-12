const blockedSites = [
  "*://www.youtube.com/*",
  "*://www.instagram.com/*",
  "*://www.reddit.com/*"
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { redirectUrl: chrome.runtime.getURL("blocked.html") };
  },
  { urls: blockedSites },
  ["blocking"]
);
