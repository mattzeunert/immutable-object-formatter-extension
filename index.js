import installDevTools from './immutable-devtools'
installDevTools()

import {isRecord as isRecordForTesting} from "./immutable-devtools/create-formatters"

if (window.__ExposeIsRecordForTesting) {
    window.isRecordForTesting = isRecordForTesting;
}