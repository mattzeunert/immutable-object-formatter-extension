import installDevTools from './immutable-devtools'
import runTests from "./test"
installDevTools()

if (window.__ExposeImmutableJSDevToolsFormatterTests) {
    window.runTests = runTests;
}