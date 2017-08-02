document.addEventListener("click", (e) => {
    if (e.target.classList.contains("simplecss")) {

        var isOn = e.target.textContent;

        /*
        browser.tabs.executeScript(null, {
            file: "../js/contentScriptSimpleCss.js"
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
        */
        if (isOn == "On") {
            var inserting = browser.tabs.insertCSS(null,
                {
                    allFrames: true,
                    cssOrigin: "user",
                    file: "/css/simplicity.css"
                });
            inserting.then( function(value) {
            }, function(reason) {
            });
        } else if (isOn == "Off") {
            var removing = browser.tabs.removeCSS(null,
                {
                    allFrames: true,
                    file: "/css/simplicity.css"
                });
            removing.then(function(value) {
            }, function(reason) {
            });
        }
    }
});

