document.addEventListener("click", (e) => {
    if (e.target.classList.contains("simplecss")) {

        console.log("on click side");

        var isOn = e.target.textContent;

        browser.tabs.executeScript(null, {
            file: "js/contentScriptSimpleCss.js"
        });

        var gettingActiveTab = browser.tabs.query({
            active: true,
            currentWindow: true
        });

        gettingActiveTab.then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, {
                isOn: isOn
            });
        });
    }
});

