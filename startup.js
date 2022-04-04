chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.executeScript({
        'file': 'blocking.js'
    })
});