import installDevTools from 'immutable-devtools'
import Immutable from 'immutable'

if (!window.__ImmutableJSDevToolsFormattersInstalled === true) {
    installDevTools(Immutable)
    window.__ImmutableJSDevToolsFormattersInstalled = true;
}