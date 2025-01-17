import * as stdlib_ETH from './ETH';
import * as stdlib_ALGO from './ALGO';
import * as stdlib_CFX from './CFX';
import { getConnectorMode, canonicalizeConnectorMode, getConnector } from './ConnectorMode';
import { process, window, updateProcessEnv, } from './shim';
import { doStdlibLoad } from './registry';
export { unsafeAllowMultipleStdlibs } from './registry';
export { getConnectorMode, getConnector };
function extractMode(x) {
    if (!x) {
        return extractMode(process.env);
    }
    if (typeof x === 'string') {
        return extractMode({ REACH_CONNECTOR_MODE: x });
    }
    updateProcessEnv(x);
    var g = process.env['REACH_CONNECTOR_MODE'];
    if (!g) {
        console.log("WARNING: `REACH_CONNECTOR_MODE` defaulting behavior is deprecated as of"
            + " version 0.1.6; please update your code to set this value explicitly.");
        return 'ETH';
    }
    else {
        return g;
    }
}
;
// The connectorMode arg is optional;
// It will use REACH_CONNECTOR_MODE if 0 args.
export function loadStdlib(connectorModeOrEnv) {
    var connectorModeStr = extractMode(connectorModeOrEnv);
    var connectorMode = canonicalizeConnectorMode(connectorModeStr);
    var connector = getConnector(connectorMode);
    // Remember the connector to prevent users from accidentally using multiple stdlibs
    doStdlibLoad(connector);
    var stdlib;
    switch (connector) {
        case 'ETH':
            stdlib = stdlib_ETH;
            break;
        case 'ALGO':
            stdlib = stdlib_ALGO;
            break;
        case 'CFX':
            stdlib = stdlib_CFX;
            break;
        default: throw Error("impossible: unknown connector ".concat(connector));
    }
    // also just inject ourselves into the window for ease of use
    window.reach = stdlib;
    return stdlib;
}
//# sourceMappingURL=loader.js.map