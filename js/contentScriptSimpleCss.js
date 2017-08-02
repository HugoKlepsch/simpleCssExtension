function listener(request, sender, sendResponse) {
    console.log("help me please");
    var inserting = browser.tabs.insertCSS( null,
        {
            allFrames: true,
            cssOrigin: "user",
            file: "/css/simplicity.css"
        });
}

document.runtime.onMessage.addListener(listener);
