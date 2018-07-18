console.log("enter: chrome-extension-tabs-executescript-add-button-demo")

chrome.tabs.executeScript({
    file: "add-button.js"
}, function() {
    console.log("add-button.js injected")
})