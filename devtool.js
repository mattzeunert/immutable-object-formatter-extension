function loadDevToolsFormatters(){
    fetch("bundle.js").then(function(response){
        response.text().then(function(text){
            chrome.devtools.inspectedWindow.eval(
              text,
              function(result, isException) { if (isException) {
                console.log("Exception in Immutable formatter extension: ", result)
              }}
            );
        })
    })
}

loadDevToolsFormatters();
// Reload if page is refreshed
chrome.devtools.network.onNavigated.addListener(loadDevToolsFormatters)