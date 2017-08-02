function listener(request, sender, sendResponse) {
    document.body.style.border = "5px solid red";
}

browser.runtime.onMessage.addListener(listener);
