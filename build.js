var fs = require("fs")

var template = fs.readFileSync("./content-script-template.js").toString()
var bundle = fs.readFileSync("./dist/bundle.js").toString()

var contentScript = template.replace("/* SCRIPT_TEXT_CONTENT */", "decodeURI(\"" + encodeURI(bundle) + "\")")

fs.writeFileSync("./extension/content-script.js", contentScript)
console.log("build.js done")