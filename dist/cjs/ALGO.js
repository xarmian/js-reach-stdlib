"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
exports.__esModule = true;
exports.connectAccount = exports.transfer = exports.setFaucet = exports.getFaucet = exports.setProviderByName = exports.providerEnvByName = exports.setProviderByEnv = exports.setProvider = exports.getProvider = exports.walletFallback = exports.setWalletFallback = exports.hasRandom = exports.randomUInt = exports.T_Token = exports.T_Struct = exports.T_Digest = exports.T_Address = exports.T_Bytes = exports.T_Data = exports.T_Object = exports.T_Contract = exports.T_Array = exports.T_Tuple = exports.T_UInt = exports.T_Bool = exports.T_Null = exports.digest = exports.tokenEq = exports.addressEq = exports.setValidQueryWindow = exports.getValidQueryWindow = exports.addressFromHex = exports.getQueryLowerBound = exports.setQueryLowerBound = exports.digestEq = exports.bytesEq = exports.lt = exports.le = exports.gt = exports.ge = exports.eq = exports.Array_set = exports.assert = exports.protect = exports.div = exports.mul = exports.mod = exports.sub = exports.add = exports.connector = void 0;
exports.reachStdlib = exports.launchToken = exports.unsafeGetMnemonic = exports.formatAddress = exports.verifyContract = exports.wait = exports.waitUntilSecs = exports.waitUntilTime = exports.getNetworkSecs = exports.getNetworkTime = exports.newAccountFromSecret = exports.newAccountFromMnemonic = exports.getDefaultAccount = exports.formatWithDecimals = exports.formatCurrency = exports.minimumBalance = exports.parseCurrency = exports.atomicUnit = exports.standardUnit = exports.newTestAccounts = exports.newTestAccount = exports.fundFromFaucet = exports.canFundFromFaucet = exports.createAccount = exports.balanceOf = void 0;
exports.connector = 'ALGO';
var algosdk_1 = __importDefault(require("algosdk"));
var ethers_1 = require("ethers");
var await_timeout_1 = __importDefault(require("await-timeout"));
var buffer_1 = __importDefault(require("buffer"));
var Buffer = buffer_1["default"].Buffer;
var version_1 = require("./version");
var shared_impl_1 = require("./shared_impl");
var shared_user_1 = require("./shared_user");
var waitPort_1 = __importDefault(require("./waitPort"));
var ALGO_compiled_1 = require("./ALGO_compiled");
exports.addressFromHex = ALGO_compiled_1.addressFromHex;
var shim_1 = require("./shim");
var js_sha512_1 = require("js-sha512");
exports.add = ALGO_compiled_1.stdlib.add, exports.sub = ALGO_compiled_1.stdlib.sub, exports.mod = ALGO_compiled_1.stdlib.mod, exports.mul = ALGO_compiled_1.stdlib.mul, exports.div = ALGO_compiled_1.stdlib.div, exports.protect = ALGO_compiled_1.stdlib.protect, exports.assert = ALGO_compiled_1.stdlib.assert, exports.Array_set = ALGO_compiled_1.stdlib.Array_set, exports.eq = ALGO_compiled_1.stdlib.eq, exports.ge = ALGO_compiled_1.stdlib.ge, exports.gt = ALGO_compiled_1.stdlib.gt, exports.le = ALGO_compiled_1.stdlib.le, exports.lt = ALGO_compiled_1.stdlib.lt, exports.bytesEq = ALGO_compiled_1.stdlib.bytesEq, exports.digestEq = ALGO_compiled_1.stdlib.digestEq;
__exportStar(require("./shared_user"), exports);
var shared_impl_2 = require("./shared_impl");
exports.setQueryLowerBound = shared_impl_2.setQueryLowerBound;
exports.getQueryLowerBound = shared_impl_2.getQueryLowerBound;
var reachBackendVersion = 7;
var reachAlgoBackendVersion = 8;
// Helpers
// Parse CBR into Public Key
var cbr2algo_addr = function (x) {
    return algosdk_1["default"].encodeAddress(Buffer.from(x.slice(2), 'hex'));
};
var txnFromAddress = function (t) {
    return algosdk_1["default"].encodeAddress(t.from.publicKey);
};
function uint8ArrayToStr(a, enc) {
    if (enc === void 0) { enc = 'utf8'; }
    if (!(a instanceof Uint8Array)) {
        console.log(a);
        throw Error("Expected Uint8Array, got " + a);
    }
    return Buffer.from(a).toString(enc);
}
// TODO: read token from scripts/devnet-algo/algorand_data/algod.token
var rawDefaultToken = 'c87f5580d7a866317b4bfe9e8b8d1dda955636ccebfa88c12b414db208dd9705';
var rawDefaultItoken = 'reach-devnet';
var indexerTxn2RecvTxn = function (txn) {
    var ait = txn['application-transaction'] || {};
    var aargs = ait['application-args'] || [];
    var aidx = ait['application-id'] || 0;
    return {
        'confirmed-round': txn['confirmed-round'],
        'sender': txn['sender'],
        'approval-program': ait['approval-program'],
        'clear-state-program': ait['clear-state-program'],
        'logs': (txn['logs'] || []),
        'application-args': aargs,
        'application-index': aidx,
        'created-application-index': txn['created-application-index'],
        'created-asset-index': txn['created-asset-index']
    };
};
var waitForConfirmation = function (txId) { return __awaiter(void 0, void 0, void 0, function () {
    var doOrDie, dhead, client, checkAlgod, checkIndexer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                doOrDie = function (p) { return __awaiter(void 0, void 0, void 0, function () {
                    var e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, p];
                            case 1: return [2 /*return*/, _a.sent()];
                            case 2:
                                e_1 = _a.sent();
                                return [2 /*return*/, { 'exn': e_1 }];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                dhead = "waitForConfirmation " + txId;
                return [4 /*yield*/, getAlgodClient()];
            case 1:
                client = _a.sent();
                checkAlgod = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var info, cr, l, dtxn, uToS;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, doOrDie(client.pendingTransactionInformation(txId)["do"]())];
                            case 1:
                                info = (_a.sent());
                                (0, shared_impl_1.debug)(dhead, 'info', info);
                                if (!('exn' in info)) return [3 /*break*/, 3];
                                (0, shared_impl_1.debug)(dhead, 'switching to indexer on error');
                                return [4 /*yield*/, checkIndexer()];
                            case 2: return [2 /*return*/, _a.sent()];
                            case 3:
                                cr = info['confirmed-round'];
                                if (!(cr !== undefined && cr > 0)) return [3 /*break*/, 4];
                                l = info['logs'] === undefined ? [] : info['logs'];
                                (0, shared_impl_1.debug)(dhead, 'confirmed');
                                dtxn = algosdk_1["default"].Transaction.from_obj_for_encoding(info['txn']['txn']);
                                (0, shared_impl_1.debug)(dhead, 'confirmed', dtxn);
                                uToS = function (a) { return (a || []).map(function (x) { return uint8ArrayToStr(x, 'base64'); }); };
                                return [2 /*return*/, {
                                        'confirmed-round': cr,
                                        'created-asset-index': info['asset-index'],
                                        // @ts-ignore
                                        'logs': uToS(l),
                                        'created-application-index': info['application-index'],
                                        'sender': txnFromAddress(dtxn),
                                        'application-args': uToS(dtxn.appArgs)
                                    }];
                            case 4:
                                if (!(info['pool-error'] === '')) return [3 /*break*/, 6];
                                (0, shared_impl_1.debug)(dhead, 'still in pool, trying again');
                                return [4 /*yield*/, checkAlgod()];
                            case 5: return [2 /*return*/, _a.sent()];
                            case 6: throw Error("waitForConfirmation: error confirming: " + JSON.stringify(info));
                        }
                    });
                }); };
                checkIndexer = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var indexer, q, res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getIndexer()];
                            case 1:
                                indexer = _a.sent();
                                q = indexer.lookupTransactionByID(txId);
                                return [4 /*yield*/, doQuery_(dhead, q)];
                            case 2:
                                res = (_a.sent());
                                (0, shared_impl_1.debug)(dhead, 'indexer', res);
                                return [2 /*return*/, indexerTxn2RecvTxn(res['transaction'])];
                        }
                    });
                }); };
                return [4 /*yield*/, checkAlgod()];
            case 2: 
            // AlgoExplorer will NOT support this query, but I believe it will fail and
            // then fall back to the Indexer, which does work, so we're keeping it in for
            // optimization on local cases
            return [2 /*return*/, _a.sent()];
        }
    });
}); };
var decodeB64Txn = function (ts) {
    var tb = Buffer.from(ts, 'base64');
    return algosdk_1["default"].decodeUnsignedTransaction(tb);
};
var doSignTxnToB64 = function (t, sk) {
    var sb = Buffer.from(t.signTxn(sk));
    return sb.toString('base64');
};
var doSignTxn = function (ts, sk) {
    return doSignTxnToB64(decodeB64Txn(ts), sk);
};
var signSendAndConfirm = function (acc, txns) { return __awaiter(void 0, void 0, void 0, function () {
    var p, e_2, N, tN, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (acc.sk !== undefined) {
                    txns.forEach(function (t) {
                        // XXX this comparison is probably wrong, because the addresses are the
                        // wrong type
                        if (acc.sk !== undefined && !t.stxn && t.signers !== undefined && t.signers.length === 1 && t.signers[0] === acc.addr) {
                            (0, shared_impl_1.debug)('signSendAndConfirm', 'signing one');
                            t.stxn = doSignTxn(t.txn, acc.sk);
                        }
                    });
                }
                return [4 /*yield*/, (0, exports.getProvider)()];
            case 1:
                p = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, p.signAndPostTxns(txns)];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                e_2 = _a.sent();
                throw { type: 'signAndPost', e: e_2 };
            case 5:
                N = txns.length - 1;
                tN = decodeB64Txn(txns[N].txn);
                _a.label = 6;
            case 6:
                _a.trys.push([6, 8, , 9]);
                return [4 /*yield*/, waitForConfirmation(tN.txID())];
            case 7: return [2 /*return*/, _a.sent()]; // tN.lastRound
            case 8:
                e_3 = _a.sent();
                throw { type: 'waitForConfirmation', e: e_3 };
            case 9: return [2 /*return*/];
        }
    });
}); };
var encodeUnsignedTransaction = function (t) {
    return Buffer.from(algosdk_1["default"].encodeUnsignedTransaction(t)).toString('base64');
};
var toWTxn = function (t) {
    return {
        txn: encodeUnsignedTransaction(t),
        signers: [txnFromAddress(t)]
    };
};
// Backend
var stdWait = function () { return await_timeout_1["default"].set(1000); };
var getTxnParams = function (label) { return __awaiter(void 0, void 0, void 0, function () {
    var dhead, client, params;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dhead = label + " fillTxn";
                (0, shared_impl_1.debug)(dhead, "getting params");
                return [4 /*yield*/, getAlgodClient()];
            case 1:
                client = _a.sent();
                _a.label = 2;
            case 2:
                if (!true) return [3 /*break*/, 5];
                return [4 /*yield*/, client.getTransactionParams()["do"]()];
            case 3:
                params = _a.sent();
                (0, shared_impl_1.debug)(dhead, 'got params:', params);
                if (params.firstRound !== 0) {
                    return [2 /*return*/, params];
                }
                (0, shared_impl_1.debug)(dhead, "...but firstRound is 0, so let's wait and try again.");
                return [4 /*yield*/, stdWait()];
            case 4:
                _a.sent();
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}); };
var sign_and_send_sync = function (label, acc, txn) { return __awaiter(void 0, void 0, void 0, function () {
    var e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, signSendAndConfirm(acc, [txn])];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                e_4 = _a.sent();
                console.log(e_4);
                throw Error(label + " txn failed:\n" + JSON.stringify(txn) + "\nwith:\n" + JSON.stringify(e_4));
            case 3: return [2 /*return*/];
        }
    });
}); };
// XXX I'd use x.replaceAll if I could (not supported in this node version), but it would be better to extend ConnectorInfo so these are functions
var replaceAll = function (orig, what, whatp) {
    var once = orig.replace(what, whatp);
    if (once === orig) {
        return orig;
    }
    else {
        return replaceAll(once, what, whatp);
    }
};
function must_be_supported(bin) {
    var algob = bin._Connectors.ALGO;
    var unsupported = algob.unsupported;
    if (unsupported.length > 0) {
        var reasons = unsupported.map(function (s) { return " * " + s; }).join('\n');
        throw Error("This Reach application is not supported on Algorand for the following reasons:\n" + reasons);
    }
}
// Get these from stdlib
// const MaxTxnLife = 1000;
var MinTxnFee = 1000;
var MaxAppTxnAccounts = 4;
var MinBalance = 100000;
var ui8h = function (x) { return Buffer.from(x).toString('hex'); };
var base64ToUI8A = function (x) { return Uint8Array.from(Buffer.from(x, 'base64')); };
var base64ify = function (x) { return Buffer.from(x).toString('base64'); };
var format_failed_request = function (e) {
    var ep = JSON.parse(JSON.stringify(e));
    var db64 = ep.req ?
        (ep.req.data ? base64ify(ep.req.data) :
            "no data, but " + JSON.stringify(Object.keys(ep.req))) :
        "no req, but " + JSON.stringify(Object.keys(ep));
    var msg = e.text ? JSON.parse(e.text) : e;
    return "\n" + db64 + "\n" + JSON.stringify(msg);
};
function looksLikeAccountingNotInitialized(e) {
    var _a;
    var responseText = ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.text) || null;
    // TODO: trust the response to be json and parse it?
    // const json = JSON.parse(responseText) || {};
    // const msg: string = (json.message || '').toLowerCase();
    var msg = (responseText || '').toLowerCase();
    return msg.includes("accounting not initialized");
}
var doQuery_ = function (dhead, query, howMany) {
    if (howMany === void 0) { howMany = 0; }
    return __awaiter(void 0, void 0, void 0, function () {
        var res, e_5;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    (0, shared_impl_1.debug)(dhead, query.query);
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 7];
                    if (!(howMany > 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, stdWait()];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, query["do"]()];
                case 4:
                    res = _b.sent();
                    (0, shared_impl_1.debug)(dhead, 'RESULT', res);
                    return [2 /*return*/, res];
                case 5:
                    e_5 = _b.sent();
                    if ((e_5 === null || e_5 === void 0 ? void 0 : e_5.errno) === -111 || (e_5 === null || e_5 === void 0 ? void 0 : e_5.code) === "ECONNRESET") {
                        (0, shared_impl_1.debug)(dhead, 'NO CONNECTION');
                    }
                    else if (looksLikeAccountingNotInitialized(e_5)) {
                        (0, shared_impl_1.debug)(dhead, 'ACCOUNTING NOT INITIALIZED');
                    }
                    if ((_a = e_5 === null || e_5 === void 0 ? void 0 : e_5.response) === null || _a === void 0 ? void 0 : _a.text) {
                        e_5 = e_5.response.text;
                    }
                    (0, shared_impl_1.debug)(dhead, 'RETRYING', { e: e_5 });
                    howMany++;
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 1];
                case 7: return [2 /*return*/];
            }
        });
    });
};
function getValidQueryWindow() {
    return true;
}
exports.getValidQueryWindow = getValidQueryWindow;
function setValidQueryWindow(n) {
    if (typeof n === 'number') {
        throw Error("Only setValidQueryWindow(true) is supported on Algorand");
    }
}
exports.setValidQueryWindow = setValidQueryWindow;
var isCreateTxn = function (txn) {
    var at = txn['application-transaction'];
    return at ? at['application-id'] === 0 : false;
};
var emptyOptIn = function (txn) {
    var at = txn['application-transaction'];
    var ataa = at && at['application-args'] || [];
    return at ?
        (at['on-completion'] === 'optin' && ataa.length == 0)
        : false;
};
var newEventQueue = function () {
    var getTxns = function (dhead, initArgs, ctime, howMany) { return __awaiter(void 0, void 0, void 0, function () {
        var ApplicationID, indexer, mtime, query, res, txns, gtime;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ApplicationID = initArgs.ApplicationID;
                    return [4 /*yield*/, getIndexer()];
                case 1:
                    indexer = _a.sent();
                    mtime = (0, shared_user_1.bigNumberToNumber)(ctime) + 1;
                    (0, shared_impl_1.debug)(dhead, { ctime: ctime, mtime: mtime });
                    query = indexer.searchForTransactions()
                        .applicationID(ApplicationID)
                        //.txType('appl')
                        .minRound(mtime);
                    return [4 /*yield*/, doQuery_(dhead, query, howMany)];
                case 2:
                    res = (_a.sent());
                    txns = res.transactions.filter(function (x) { return x['tx-type'] === 'appl'; });
                    gtime = (0, shared_user_1.bigNumberify)(res['current-round']);
                    return [2 /*return*/, { txns: txns, gtime: gtime }];
            }
        });
    }); };
    var getTxnTime = function (x) { return (0, shared_user_1.bigNumberify)(x['confirmed-round']); };
    return (0, shared_impl_1.makeEventQueue)({
        raw2proc: indexerTxn2RecvTxn,
        alwaysIgnored: emptyOptIn,
        getTxns: getTxns,
        getTxnTime: getTxnTime
    });
};
exports.addressEq = ALGO_compiled_1.stdlib.addressEq, exports.tokenEq = ALGO_compiled_1.stdlib.tokenEq, exports.digest = ALGO_compiled_1.stdlib.digest;
exports.T_Null = ALGO_compiled_1.typeDefs.T_Null, exports.T_Bool = ALGO_compiled_1.typeDefs.T_Bool, exports.T_UInt = ALGO_compiled_1.typeDefs.T_UInt, exports.T_Tuple = ALGO_compiled_1.typeDefs.T_Tuple, exports.T_Array = ALGO_compiled_1.typeDefs.T_Array, exports.T_Contract = ALGO_compiled_1.typeDefs.T_Contract, exports.T_Object = ALGO_compiled_1.typeDefs.T_Object, exports.T_Data = ALGO_compiled_1.typeDefs.T_Data, exports.T_Bytes = ALGO_compiled_1.typeDefs.T_Bytes, exports.T_Address = ALGO_compiled_1.typeDefs.T_Address, exports.T_Digest = ALGO_compiled_1.typeDefs.T_Digest, exports.T_Struct = ALGO_compiled_1.typeDefs.T_Struct, exports.T_Token = ALGO_compiled_1.typeDefs.T_Token;
exports.randomUInt = (_a = (0, shared_impl_1.makeRandom)(8), _a.randomUInt), exports.hasRandom = _a.hasRandom;
function waitIndexerFromEnv(env) {
    return __awaiter(this, void 0, void 0, function () {
        var ALGO_INDEXER_SERVER, ALGO_INDEXER_PORT, ALGO_INDEXER_TOKEN;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ALGO_INDEXER_SERVER = env.ALGO_INDEXER_SERVER, ALGO_INDEXER_PORT = env.ALGO_INDEXER_PORT, ALGO_INDEXER_TOKEN = env.ALGO_INDEXER_TOKEN;
                    return [4 /*yield*/, (0, waitPort_1["default"])(ALGO_INDEXER_SERVER, ALGO_INDEXER_PORT)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, new algosdk_1["default"].Indexer(ALGO_INDEXER_TOKEN, ALGO_INDEXER_SERVER, ALGO_INDEXER_PORT)];
            }
        });
    });
}
function waitAlgodClientFromEnv(env) {
    return __awaiter(this, void 0, void 0, function () {
        var ALGO_SERVER, ALGO_PORT, ALGO_TOKEN;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ALGO_SERVER = env.ALGO_SERVER, ALGO_PORT = env.ALGO_PORT, ALGO_TOKEN = env.ALGO_TOKEN;
                    return [4 /*yield*/, (0, waitPort_1["default"])(ALGO_SERVER, ALGO_PORT)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, new algosdk_1["default"].Algodv2(ALGO_TOKEN, ALGO_SERVER, ALGO_PORT)];
            }
        });
    });
}
;
var makeProviderByWallet = function (wallet) { return __awaiter(void 0, void 0, void 0, function () {
    var walletOpts, enabledNetwork, enabledAccounts, enabled, algodClient, indexer, getDefaultAddress, signAndPostTxns, isIsolatedNetwork;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, shared_impl_1.debug)("making provider with wallet");
                walletOpts = { 'network': shim_1.process.env['ALGO_NETWORK'] };
                if (!(wallet.enableNetwork === undefined && wallet.enableAccounts === undefined)) return [3 /*break*/, 2];
                return [4 /*yield*/, wallet.enable(walletOpts)];
            case 1:
                enabled = _a.sent();
                enabledNetwork = enabled;
                enabledAccounts = enabled;
                return [3 /*break*/, 5];
            case 2:
                if (!(wallet.enableNetwork === undefined || wallet.enableAccounts === undefined)) return [3 /*break*/, 3];
                throw new Error('must have enableNetwork AND enableAccounts OR neither');
            case 3: return [4 /*yield*/, wallet.enableNetwork(walletOpts)];
            case 4:
                enabledNetwork = _a.sent();
                _a.label = 5;
            case 5:
                void enabledNetwork;
                return [4 /*yield*/, wallet.getAlgodv2()];
            case 6:
                algodClient = _a.sent();
                return [4 /*yield*/, wallet.getIndexer()];
            case 7:
                indexer = _a.sent();
                getDefaultAddress = function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(enabledAccounts === undefined)) return [3 /*break*/, 2];
                                if (wallet.enableAccounts === undefined) {
                                    throw new Error('impossible: no wallet.enableAccounts');
                                }
                                return [4 /*yield*/, wallet.enableAccounts(walletOpts)];
                            case 1:
                                enabledAccounts = _a.sent();
                                if (enabledAccounts === undefined) {
                                    throw new Error('Could not enable accounts');
                                }
                                _a.label = 2;
                            case 2: return [2 /*return*/, enabledAccounts.accounts[0]];
                        }
                    });
                }); };
                signAndPostTxns = wallet.signAndPostTxns;
                isIsolatedNetwork = (0, shared_impl_1.truthyEnv)(shim_1.process.env['REACH_ISOLATED_NETWORK']);
                return [2 /*return*/, { algodClient: algodClient, indexer: indexer, getDefaultAddress: getDefaultAddress, isIsolatedNetwork: isIsolatedNetwork, signAndPostTxns: signAndPostTxns }];
        }
    });
}); };
var setWalletFallback = function (wf) {
    if (!shim_1.window.algorand) {
        shim_1.window.algorand = wf();
    }
};
exports.setWalletFallback = setWalletFallback;
var doWalletFallback_signOnly = function (opts, getAddr, signTxns) {
    var p = undefined;
    var enableNetwork = function (eopts) { return __awaiter(void 0, void 0, void 0, function () {
        var base, baseEnv;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    void (eopts);
                    base = opts['providerEnv'];
                    baseEnv = shim_1.process.env;
                    if (!base) return [3 /*break*/, 3];
                    if (!(typeof base === 'string')) return [3 /*break*/, 2];
                    return [4 /*yield*/, providerEnvByName(base)];
                case 1:
                    // @ts-ignore
                    baseEnv = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    baseEnv = base;
                    _a.label = 3;
                case 3: return [4 /*yield*/, makeProviderByEnv(baseEnv)];
                case 4:
                    p = _a.sent();
                    return [2 /*return*/, {}];
            }
        });
    }); };
    var enableAccounts = function (eopts) { return __awaiter(void 0, void 0, void 0, function () {
        var addr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    void (eopts);
                    return [4 /*yield*/, getAddr()];
                case 1:
                    addr = _a.sent();
                    return [2 /*return*/, { accounts: [addr] }];
            }
        });
    }); };
    var enable = function (eopts) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, enableNetwork(eopts)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, enableAccounts(eopts)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getAlgodv2 = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!p) {
                throw new Error("must call enable");
            }
            ;
            return [2 /*return*/, p.algodClient];
        });
    }); };
    var getIndexer = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!p) {
                throw new Error("must call enable");
            }
            ;
            return [2 /*return*/, p.indexer];
        });
    }); };
    var signAndPostTxns = function (txns, sopts) { return __awaiter(void 0, void 0, void 0, function () {
        var to_sign, signed, _a, stxns, bs;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!p) {
                        throw new Error("must call enable");
                    }
                    ;
                    void (sopts);
                    (0, shared_impl_1.debug)("fallBack: signAndPostTxns", { txns: txns });
                    to_sign = [];
                    txns.forEach(function (txn) {
                        if (!txn.stxn) {
                            to_sign.push(txn.txn);
                        }
                    });
                    (0, shared_impl_1.debug)("fallBack: signAndPostTxns", { to_sign: to_sign });
                    if (!(to_sign.length == 0)) return [3 /*break*/, 1];
                    _a = [];
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, signTxns(to_sign)];
                case 2:
                    _a = _b.sent();
                    _b.label = 3;
                case 3:
                    signed = _a;
                    (0, shared_impl_1.debug)("fallBack: signAndPostTxns", { signed: signed });
                    stxns = txns.map(function (txn) {
                        if (txn.stxn) {
                            return txn.stxn;
                        }
                        var s = signed.shift();
                        if (!s) {
                            throw new Error("txn not signed");
                        }
                        return s;
                    });
                    bs = stxns.map(function (stxn) { return Buffer.from(stxn, 'base64'); });
                    (0, shared_impl_1.debug)("fallBack: signAndPostTxns", bs);
                    return [4 /*yield*/, p.algodClient.sendRawTransaction(bs)["do"]()];
                case 4:
                    _b.sent();
                    return [2 /*return*/, {}];
            }
        });
    }); };
    return { enable: enable, enableNetwork: enableNetwork, enableAccounts: enableAccounts, getAlgodv2: getAlgodv2, getIndexer: getIndexer, signAndPostTxns: signAndPostTxns };
};
var walletFallback_mnemonic = function (opts) { return function () {
    (0, shared_impl_1.debug)("using mnemonic wallet fallback");
    var getAddr = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, shim_1.window.prompt("Please paste the address of your account:")];
        });
    }); };
    var signTxns = function (txns) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, txns.map(function (ts) {
                    var t = decodeB64Txn(ts);
                    var addr = txnFromAddress(t);
                    var mn = shim_1.window.prompt("Please paste the mnemonic for the address, " + addr + ". It will not be saved.");
                    var acc = algosdk_1["default"].mnemonicToSecretKey(mn);
                    return doSignTxnToB64(t, acc.sk);
                })];
        });
    }); };
    return doWalletFallback_signOnly(opts, getAddr, signTxns);
}; };
var walletFallback_MyAlgoWallet = function (MyAlgoConnect, opts) { return function () {
    (0, shared_impl_1.debug)("using MyAlgoWallet wallet fallback");
    // @ts-ignore
    var mac = new MyAlgoConnect();
    // MyAlgoConnect uses a global popup object for managing, so we need to
    // guarantee there is only one in flight at a time.
    var lock = new shared_impl_1.Lock();
    var getAddr = function () { return __awaiter(void 0, void 0, void 0, function () {
        var accts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lock.runWith(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, mac.connect({ shouldSelectOneAccount: true })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
                case 1:
                    accts = _a.sent();
                    return [2 /*return*/, accts[0].address];
            }
        });
    }); };
    var signTxns = function (txns) { return __awaiter(void 0, void 0, void 0, function () {
        var stxns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, shared_impl_1.debug)("MAW signTransaction ->", txns);
                    return [4 /*yield*/, lock.runWith(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, mac.signTransaction(txns)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                case 1:
                    stxns = _a.sent();
                    (0, shared_impl_1.debug)("MAW signTransaction <-", stxns);
                    return [2 /*return*/, stxns.map(function (sts) { return Buffer.from(sts.blob).toString('base64'); })];
            }
        });
    }); };
    return doWalletFallback_signOnly(opts, getAddr, signTxns);
}; };
var walletFallback_WalletConnect = function (WalletConnect, opts) { return function () {
    (0, shared_impl_1.debug)("using WalletConnect wallet fallback");
    var wc = new WalletConnect();
    return doWalletFallback_signOnly(opts, (function () { return wc.getAddr(); }), (function (ts) { return wc.signTxns(ts); }));
}; };
var walletFallback = function (opts) {
    (0, shared_impl_1.debug)("using wallet fallback with", opts);
    var mac = opts.MyAlgoConnect;
    if (mac) {
        return walletFallback_MyAlgoWallet(mac, opts);
    }
    var wc = opts.WalletConnect;
    if (wc) {
        return walletFallback_WalletConnect(wc, opts);
    }
    // This could be implemented with walletFallback_signOnly and the residue
    // from the old version.
    //  return walletFallback_AlgoSigner(opts);
    return walletFallback_mnemonic(opts);
};
exports.walletFallback = walletFallback;
exports.getProvider = (_b = __read((0, shared_impl_1.replaceableThunk)(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!shim_1.window.algorand) return [3 /*break*/, 2];
                return [4 /*yield*/, makeProviderByWallet(shim_1.window.algorand)];
            case 1: 
            // @ts-ignore
            return [2 /*return*/, _a.sent()];
            case 2:
                (0, shared_impl_1.debug)("making default provider based on process.env");
                return [4 /*yield*/, makeProviderByEnv(shim_1.process.env)];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); }), 2), _b[0]), exports.setProvider = _b[1];
var getAlgodClient = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, (0, exports.getProvider)()];
        case 1: return [2 /*return*/, (_a.sent()).algodClient];
    }
}); }); };
var getIndexer = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, (0, exports.getProvider)()];
        case 1: return [2 /*return*/, (_a.sent()).indexer];
    }
}); }); };
var localhostProviderEnv = {
    ALGO_SERVER: 'http://localhost',
    ALGO_PORT: '4180',
    ALGO_TOKEN: rawDefaultToken,
    ALGO_INDEXER_SERVER: 'http://localhost',
    ALGO_INDEXER_PORT: '8980',
    ALGO_INDEXER_TOKEN: rawDefaultItoken,
    REACH_ISOLATED_NETWORK: 'yes'
};
function envDefaultsALGO(env) {
    var e_6, _a;
    var denv = localhostProviderEnv;
    // @ts-ignore
    var ret = {};
    try {
        for (var _b = __values(['ALGO_SERVER', 'ALGO_PORT', 'ALGO_TOKEN', 'ALGO_INDEXER_SERVER', 'ALGO_INDEXER_PORT', 'ALGO_INDEXER_TOKEN', 'REACH_ISOLATED_NETWORK']), _c = _b.next(); !_c.done; _c = _b.next()) {
            var f = _c.value;
            // @ts-ignore
            ret[f] = (0, shared_impl_1.envDefault)(env[f], denv[f]);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return ret;
}
;
function makeProviderByEnv(env) {
    return __awaiter(this, void 0, void 0, function () {
        var fullEnv, algodClient, indexer, isIsolatedNetwork, lab, getDefaultAddress, signAndPostTxns;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, shared_impl_1.debug)("makeProviderByEnv", env);
                    fullEnv = envDefaultsALGO(env);
                    (0, shared_impl_1.debug)("makeProviderByEnv defaulted", fullEnv);
                    return [4 /*yield*/, waitAlgodClientFromEnv(fullEnv)];
                case 1:
                    algodClient = _a.sent();
                    return [4 /*yield*/, waitIndexerFromEnv(fullEnv)];
                case 2:
                    indexer = _a.sent();
                    isIsolatedNetwork = (0, shared_impl_1.truthyEnv)(fullEnv.REACH_ISOLATED_NETWORK);
                    lab = "Providers created by environment";
                    getDefaultAddress = function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            throw new Error(lab + " do not have default addresses");
                        });
                    }); };
                    signAndPostTxns = function (txns, opts) { return __awaiter(_this, void 0, void 0, function () {
                        var stxns, bs;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    void (opts);
                                    stxns = txns.map(function (txn) {
                                        if (txn.stxn) {
                                            return txn.stxn;
                                        }
                                        throw new Error(lab + " cannot interactively sign");
                                    });
                                    bs = stxns.map(function (stxn) { return Buffer.from(stxn, 'base64'); });
                                    (0, shared_impl_1.debug)("signAndPostTxns", bs);
                                    return [4 /*yield*/, algodClient.sendRawTransaction(bs)["do"]()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    return [2 /*return*/, { algodClient: algodClient, indexer: indexer, isIsolatedNetwork: isIsolatedNetwork, getDefaultAddress: getDefaultAddress, signAndPostTxns: signAndPostTxns }];
            }
        });
    });
}
;
function setProviderByEnv(env) {
    (0, exports.setProvider)(makeProviderByEnv(env));
}
exports.setProviderByEnv = setProviderByEnv;
;
function randlabsProviderEnv(net) {
    var prefix = net === 'MainNet' ? '' : net.toLowerCase() + ".";
    var RANDLABS_BASE = prefix + "algoexplorerapi.io";
    return {
        ALGO_SERVER: "https://" + RANDLABS_BASE,
        ALGO_PORT: '',
        ALGO_TOKEN: '',
        ALGO_INDEXER_SERVER: "https://algoindexer." + RANDLABS_BASE,
        ALGO_INDEXER_PORT: '',
        ALGO_INDEXER_TOKEN: '',
        REACH_ISOLATED_NETWORK: 'no'
    };
}
function providerEnvByName(providerName) {
    switch (providerName) {
        case 'MainNet': return randlabsProviderEnv('MainNet');
        case 'TestNet': return randlabsProviderEnv('TestNet');
        case 'BetaNet': return randlabsProviderEnv('BetaNet');
        case 'randlabs/MainNet': return randlabsProviderEnv('MainNet');
        case 'randlabs/TestNet': return randlabsProviderEnv('TestNet');
        case 'randlabs/BetaNet': return randlabsProviderEnv('BetaNet');
        case 'LocalHost': return localhostProviderEnv;
        default: throw Error("Unrecognized provider name: " + providerName);
    }
}
exports.providerEnvByName = providerEnvByName;
function setProviderByName(providerName) {
    return setProviderByEnv(providerEnvByName(providerName));
}
exports.setProviderByName = setProviderByName;
// eslint-disable-next-line max-len
var rawFaucetDefaultMnemonic = 'frown slush talent visual weather bounce evil teach tower view fossil trip sauce express moment sea garbage pave monkey exercise soap lawn army above dynamic';
exports.getFaucet = (_c = __read((0, shared_impl_1.replaceableThunk)(function () { return __awaiter(void 0, void 0, void 0, function () {
    var FAUCET;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                FAUCET = algosdk_1["default"].mnemonicToSecretKey((0, shared_impl_1.envDefault)(shim_1.process.env.ALGO_FAUCET_PASSPHRASE, rawFaucetDefaultMnemonic));
                return [4 /*yield*/, (0, exports.connectAccount)(FAUCET)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); }), 2), _c[0]), exports.setFaucet = _c[1];
var str2note = function (x) { return new Uint8Array(Buffer.from(x)); };
var NOTE_Reach_str = "Reach " + version_1.VERSION;
var NOTE_Reach = str2note(NOTE_Reach_str);
var NOTE_Reach_tag = function (tag) { return tag ? str2note(NOTE_Reach_str + (" " + tag + ")")) : NOTE_Reach; };
var makeTransferTxn = function (from, to, value, token, ps, closeTo, tag) {
    if (closeTo === void 0) { closeTo = undefined; }
    if (tag === void 0) { tag = undefined; }
    var valuen = (0, shared_impl_1.bigNumberToBigInt)(value);
    var note = NOTE_Reach_tag(tag);
    var txn = token ?
        algosdk_1["default"].makeAssetTransferTxnWithSuggestedParams(from, to, closeTo, undefined, valuen, note, (0, shared_user_1.bigNumberToNumber)(token), ps)
        :
            algosdk_1["default"].makePaymentTxnWithSuggestedParams(from, to, valuen, closeTo, note, ps);
    return txn;
};
var transfer = function (from, to, value, token, tag) {
    if (token === void 0) { token = undefined; }
    if (tag === void 0) { tag = undefined; }
    return __awaiter(void 0, void 0, void 0, function () {
        var sender, receiver, valuebn, ps, txn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sender = from.networkAccount;
                    receiver = (0, ALGO_compiled_1.extractAddr)(to);
                    valuebn = (0, shared_user_1.bigNumberify)(value);
                    return [4 /*yield*/, getTxnParams('transfer')];
                case 1:
                    ps = _a.sent();
                    txn = toWTxn(makeTransferTxn(sender.addr, receiver, valuebn, token, ps, undefined, tag));
                    return [4 /*yield*/, sign_and_send_sync("transfer " + JSON.stringify(from) + " " + JSON.stringify(to) + " " + valuebn, sender, txn)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.transfer = transfer;
;
var makeLogRep = function (evt, tys) {
    var hLen = 4;
    var tyns = tys.map(function (ty) { return ty.netName; });
    var sig = evt + "(" + tyns.join(',') + ")";
    var hp = base64ify((0, js_sha512_1.sha512_256)(sig));
    var trunc = function (x) { return ui8h(base64ToUI8A(x).slice(0, hLen)); };
    var hpb = trunc(hp);
    (0, shared_impl_1.debug)("makeLogRep", { evt: evt, tyns: tyns, sig: sig, hp: hp, hpb: hpb });
    var parse = function (log) {
        if (trunc(log) !== hpb) {
            return undefined;
        }
        // @ts-ignore
        var _a = __read((0, exports.T_Tuple)([(0, exports.T_Bytes)(hLen)].concat(tys)).fromNet(reNetify(log))), logb = _a[0], pd = _a.slice(1);
        (0, shared_impl_1.debug)("parse", { log: log, logb: logb, pd: pd });
        return pd;
    };
    var parse0 = function (txn) {
        if (txn.logs.length == 0) {
            return undefined;
        }
        var log = txn.logs[0];
        return parse(log);
    };
    var parse0b = function (txn) { return parse0(txn) !== undefined; };
    return { parse: parse, parse0: parse0, parse0b: parse0b };
};
var reachEvent = function (i) { return "_reach_e" + i; };
var makeHasLogFor = function (i, tys) {
    (0, shared_impl_1.debug)("hasLogFor", i, tys);
    var lr = makeLogRep(reachEvent(i), tys);
    return lr.parse0b;
};
/** @description base64->hex->arrayify */
var reNetify = function (x) {
    var s = Buffer.from(x, 'base64').toString('hex');
    return ethers_1.ethers.utils.arrayify('0x' + s);
};
var connectAccount = function (networkAccount) { return __awaiter(void 0, void 0, void 0, function () {
    function setDebugLabel(newLabel) {
        label = newLabel;
        // @ts-ignore
        return this;
    }
    var thisAcc, label, pks, selfAddress, iam, contract, me_na, tokenAccepted, tokenAccept, tokenMetadata;
    return __generator(this, function (_a) {
        thisAcc = networkAccount;
        label = thisAcc.addr.substring(2, 6);
        pks = exports.T_Address.canonicalize(thisAcc);
        (0, shared_impl_1.debug)(label, 'connectAccount');
        selfAddress = function () {
            return pks;
        };
        iam = function (some_addr) {
            if (some_addr === pks) {
                return some_addr;
            }
            else {
                throw Error("I should be " + some_addr + ", but am " + pks);
            }
        };
        contract = function (bin, givenInfoP) {
            (0, shared_impl_1.ensureConnectorAvailable)(bin, 'ALGO', reachBackendVersion, reachAlgoBackendVersion);
            must_be_supported(bin);
            var _a = bin._Connectors.ALGO, stateSize = _a.stateSize, stateKeys = _a.stateKeys, mapDataKeys = _a.mapDataKeys, mapDataSize = _a.mapDataSize;
            var hasMaps = mapDataKeys > 0;
            var mapDataTy = bin._getMaps({ reachStdlib: ALGO_compiled_1.stdlib }).mapDataTy;
            var emptyMapDataTy = (0, exports.T_Bytes)(mapDataTy.netSize);
            var emptyMapData = 
            // This is a bunch of Nones
            mapDataTy.fromNet(emptyMapDataTy.toNet(emptyMapDataTy.canonicalize('')));
            (0, shared_impl_1.debug)({ emptyMapData: emptyMapData });
            var makeGetC = function (setupViewArgs, eq) {
                var getInfo = setupViewArgs.getInfo;
                var _theC = undefined;
                return function () { return __awaiter(void 0, void 0, void 0, function () {
                    var ctcInfo, _a, ApplicationID, Deployer, ctcAddr, getLocalState, didOptIn, doOptIn, ensuredOptIn, ensureOptIn, getAppState, getGlobalState, canIWin, isin, isIsolatedNetwork, viewMapRef;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                (0, shared_impl_1.debug)(label, 'getC');
                                if (_theC) {
                                    return [2 /*return*/, _theC];
                                }
                                return [4 /*yield*/, getInfo()];
                            case 1:
                                ctcInfo = _b.sent();
                                return [4 /*yield*/, (0, shared_impl_1.stdVerifyContract)(setupViewArgs, (function () { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, verifyContract_(label, ctcInfo, bin, eq)];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        });
                                    }); }))];
                            case 2:
                                _a = _b.sent(), ApplicationID = _a.ApplicationID, Deployer = _a.Deployer;
                                if (!eq.isInited()) {
                                    eq.init({ ApplicationID: ApplicationID });
                                    eq.pushIgnore(isCreateTxn);
                                }
                                (0, shared_impl_1.debug)(label, 'getC', { ApplicationID: ApplicationID });
                                ctcAddr = algosdk_1["default"].getApplicationAddress(ApplicationID);
                                (0, shared_impl_1.debug)(label, 'getC', { ctcAddr: ctcAddr });
                                getLocalState = function (a) { return __awaiter(void 0, void 0, void 0, function () {
                                    var client, ai, als;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, getAlgodClient()];
                                            case 1:
                                                client = _a.sent();
                                                return [4 /*yield*/, client.accountInformation(a)["do"]()];
                                            case 2:
                                                ai = _a.sent();
                                                (0, shared_impl_1.debug)("getLocalState", ai);
                                                als = ai['apps-local-state'].find(function (x) { return (x.id === ApplicationID); });
                                                (0, shared_impl_1.debug)("getLocalState", als);
                                                return [2 /*return*/, als ? als['key-value'] : undefined];
                                        }
                                    });
                                }); };
                                didOptIn = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, getLocalState(thisAcc.addr)];
                                        case 1: return [2 /*return*/, ((_a.sent()) !== undefined)];
                                    }
                                }); }); };
                                doOptIn = function () { return __awaiter(void 0, void 0, void 0, function () {
                                    var dhead, _a, _b, _c, _d, _e, _f, _g;
                                    return __generator(this, function (_h) {
                                        switch (_h.label) {
                                            case 0:
                                                dhead = 'doOptIn';
                                                (0, shared_impl_1.debug)(dhead);
                                                _a = sign_and_send_sync;
                                                _b = ['ApplicationOptIn',
                                                    thisAcc];
                                                _c = toWTxn;
                                                _e = (_d = algosdk_1["default"]).makeApplicationOptInTxn;
                                                _f = [thisAcc.addr];
                                                return [4 /*yield*/, getTxnParams(dhead)];
                                            case 1: return [4 /*yield*/, _a.apply(void 0, _b.concat([_c.apply(void 0, [_e.apply(_d, _f.concat([_h.sent(), ApplicationID,
                                                            undefined, undefined, undefined, undefined,
                                                            NOTE_Reach]))])]))];
                                            case 2:
                                                _h.sent();
                                                _g = exports.assert;
                                                return [4 /*yield*/, didOptIn()];
                                            case 3:
                                                _g.apply(void 0, [_h.sent(), "didOptIn after doOptIn"]);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); };
                                ensuredOptIn = false;
                                ensureOptIn = function () { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!!ensuredOptIn) return [3 /*break*/, 4];
                                                return [4 /*yield*/, didOptIn()];
                                            case 1:
                                                if (!!(_a.sent())) return [3 /*break*/, 3];
                                                return [4 /*yield*/, doOptIn()];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3:
                                                ensuredOptIn = true;
                                                _a.label = 4;
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                }); };
                                getAppState = function () { return __awaiter(void 0, void 0, void 0, function () {
                                    var lab, client, appInfo, e_7, appSt;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                lab = "getAppState";
                                                return [4 /*yield*/, getAlgodClient()];
                                            case 1:
                                                client = _a.sent();
                                                _a.label = 2;
                                            case 2:
                                                _a.trys.push([2, 4, , 5]);
                                                return [4 /*yield*/, client.getApplicationByID(ApplicationID)["do"]()];
                                            case 3:
                                                appInfo = _a.sent();
                                                return [3 /*break*/, 5];
                                            case 4:
                                                e_7 = _a.sent();
                                                (0, shared_impl_1.debug)(lab, { e: e_7 });
                                                return [2 /*return*/, undefined];
                                            case 5:
                                                appSt = appInfo['params']['global-state'];
                                                (0, shared_impl_1.debug)(lab, { appSt: appSt });
                                                return [2 /*return*/, appSt];
                                        }
                                    });
                                }); };
                                getGlobalState = function (appSt_g) { return __awaiter(void 0, void 0, void 0, function () {
                                    var appSt, _a, gsbs, gty;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                _a = appSt_g;
                                                if (_a) return [3 /*break*/, 2];
                                                return [4 /*yield*/, getAppState()];
                                            case 1:
                                                _a = (_b.sent());
                                                _b.label = 2;
                                            case 2:
                                                appSt = _a;
                                                if (!appSt) {
                                                    return [2 /*return*/, undefined];
                                                }
                                                gsbs = readStateBytes('', [], appSt);
                                                if (!gsbs) {
                                                    return [2 /*return*/, undefined];
                                                }
                                                gty = (0, exports.T_Tuple)([exports.T_UInt, exports.T_UInt, exports.T_Address]);
                                                // @ts-ignore
                                                return [2 /*return*/, gty.fromNet(gsbs)];
                                        }
                                    });
                                }); };
                                canIWin = function (lct) { return __awaiter(void 0, void 0, void 0, function () {
                                    var gs, r;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (lct.eq(0)) {
                                                    return [2 /*return*/, true];
                                                }
                                                return [4 /*yield*/, getGlobalState()];
                                            case 1:
                                                gs = _a.sent();
                                                r = !gs || lct.eq(gs[1]);
                                                (0, shared_impl_1.debug)("canIWin", { lct: lct, gs: gs, r: r });
                                                return [2 /*return*/, r];
                                        }
                                    });
                                }); };
                                return [4 /*yield*/, (0, exports.getProvider)()];
                            case 3:
                                isin = (_b.sent()).isIsolatedNetwork;
                                isIsolatedNetwork = function () { return isin; };
                                viewMapRef = function (mapi, a) { return __awaiter(void 0, void 0, void 0, function () {
                                    var ls, mbs, md, mr;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                (0, shared_impl_1.debug)('viewMapRef', { mapi: mapi, a: a });
                                                return [4 /*yield*/, getLocalState(cbr2algo_addr(a))];
                                            case 1:
                                                ls = _a.sent();
                                                if (ls === undefined) {
                                                    return [2 /*return*/, ['None', null]];
                                                }
                                                (0, shared_impl_1.debug)('viewMapRef', { ls: ls });
                                                mbs = recoverSplitBytes('m', mapDataSize, mapDataKeys, ls);
                                                (0, shared_impl_1.debug)('viewMapRef', { mbs: mbs });
                                                md = mapDataTy.fromNet(mbs);
                                                (0, shared_impl_1.debug)('viewMapRef', { md: md });
                                                mr = md[mapi];
                                                (0, exports.assert)(mr !== undefined, 'viewMapRef mr undefined');
                                                return [2 /*return*/, mr];
                                        }
                                    });
                                }); };
                                return [2 /*return*/, (_theC = { ApplicationID: ApplicationID, ctcAddr: ctcAddr, Deployer: Deployer, getAppState: getAppState, getGlobalState: getGlobalState, ensureOptIn: ensureOptIn, canIWin: canIWin, isIsolatedNetwork: isIsolatedNetwork, viewMapRef: viewMapRef })];
                        }
                    });
                }); };
            };
            var getState_ = function (getC, lookup) { return __awaiter(void 0, void 0, void 0, function () {
                var _a, getAppState, getGlobalState, appSt, gs, vvn, vi, vtys, vty, vvs;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, getC()];
                        case 1:
                            _a = _b.sent(), getAppState = _a.getAppState, getGlobalState = _a.getGlobalState;
                            return [4 /*yield*/, getAppState()];
                        case 2:
                            appSt = _b.sent();
                            if (!appSt) {
                                throw Error("getState: no appSt");
                            }
                            return [4 /*yield*/, getGlobalState(appSt)];
                        case 3:
                            gs = _b.sent();
                            if (!gs) {
                                throw Error("getState: no gs");
                            }
                            vvn = recoverSplitBytes('v', stateSize, stateKeys, appSt);
                            if (vvn === undefined) {
                                throw Error("getState: no vvn");
                            }
                            vi = gs[0];
                            vtys = lookup(vi);
                            vty = (0, exports.T_Tuple)(vtys);
                            vvs = vty.fromNet(vvn);
                            (0, shared_impl_1.debug)("getState_", { vvn: vvn, vvs: vvs });
                            return [2 /*return*/, vvs];
                    }
                });
            }); };
            var _setup = function (setupArgs) {
                var setInfo = setupArgs.setInfo, setTrustedVerifyResult = setupArgs.setTrustedVerifyResult;
                var eq = newEventQueue();
                var getC = makeGetC(setupArgs, eq);
                // Returns address of a Reach contract
                var getContractAddress = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var ctcAddr;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getC()];
                            case 1:
                                ctcAddr = (_a.sent()).ctcAddr;
                                return [2 /*return*/, exports.T_Address.canonicalize(ctcAddr)];
                        }
                    });
                }); };
                var getContractInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var ApplicationID;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getC()];
                            case 1:
                                ApplicationID = (_a.sent()).ApplicationID;
                                return [2 /*return*/, ApplicationID];
                        }
                    });
                }); };
                var getState = function (vibne, vtys) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                (0, shared_impl_1.debug)('getState');
                                return [4 /*yield*/, getState_(getC, function (vibna) {
                                        if (vibne.eq(vibna)) {
                                            return vtys;
                                        }
                                        throw Error("Expected state " + vibne + ", got " + vibna);
                                    })];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); };
                var apiMapRef = function (i, ty) { return function (f) { return __awaiter(void 0, void 0, void 0, function () {
                    var viewMapRef;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                void (ty);
                                return [4 /*yield*/, getC()];
                            case 1:
                                viewMapRef = (_a.sent()).viewMapRef;
                                return [4 /*yield*/, viewMapRef(i, f)];
                            case 2: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); }; };
                var sendrecv = function (srargs) { return __awaiter(void 0, void 0, void 0, function () {
                    var funcNum, evt_cnt, lct, tys, args, pay, out_tys, onlyIf, soloSend, timeoutAt, sim_p, isCtor, doRecv, funcName, dhead, trustedRecv, _a, appApproval, appClear, extraPages, Deployer_1, createRes, _b, _c, _d, _e, _f, _g, ApplicationID_1, ctcInfo, _h, ApplicationID, ctcAddr, Deployer, ensureOptIn, canIWin, isIsolatedNetwork, _j, value, toks, _k, _svs, msg, _l, _svs_tys, msg_tys, fake_res, sim_r, isHalt, mapRefs, _loop_1, state_1;
                    return __generator(this, function (_m) {
                        switch (_m.label) {
                            case 0:
                                funcNum = srargs.funcNum, evt_cnt = srargs.evt_cnt, lct = srargs.lct, tys = srargs.tys, args = srargs.args, pay = srargs.pay, out_tys = srargs.out_tys, onlyIf = srargs.onlyIf, soloSend = srargs.soloSend, timeoutAt = srargs.timeoutAt, sim_p = srargs.sim_p;
                                isCtor = (funcNum === 0);
                                doRecv = function (didSend, waitIfNotPresent) { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!didSend && lct.eq(0)) {
                                                    throw new Error("API call failed");
                                                }
                                                return [4 /*yield*/, recv({ funcNum: funcNum, evt_cnt: evt_cnt, out_tys: out_tys, didSend: didSend, waitIfNotPresent: waitIfNotPresent, timeoutAt: timeoutAt })];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); };
                                funcName = "m" + funcNum;
                                dhead = label + ": sendrecv " + funcName + " " + timeoutAt;
                                if (!!onlyIf) return [3 /*break*/, 2];
                                (0, shared_impl_1.debug)(dhead, "onlyIf false");
                                return [4 /*yield*/, doRecv(false, true)];
                            case 1: return [2 /*return*/, _m.sent()];
                            case 2:
                                trustedRecv = function (txn) { return __awaiter(void 0, void 0, void 0, function () {
                                    var didSend, correctStep;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                didSend = true;
                                                correctStep = makeHasLogFor(funcNum, out_tys);
                                                eq.pushIgnore(function (x) { return correctStep(indexerTxn2RecvTxn(x)); });
                                                return [4 /*yield*/, recvFrom({ dhead: dhead, out_tys: out_tys, didSend: didSend, funcNum: funcNum, txn: txn })];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); };
                                if (!isCtor) return [3 /*break*/, 5];
                                (0, shared_impl_1.debug)(dhead, 'deploy');
                                must_be_supported(bin);
                                _a = bin._Connectors.ALGO, appApproval = _a.appApproval, appClear = _a.appClear, extraPages = _a.extraPages;
                                (0, shared_impl_1.debug)(dhead, "deploy", { extraPages: extraPages });
                                Deployer_1 = thisAcc.addr;
                                _b = sign_and_send_sync;
                                _c = ['ApplicationCreate',
                                    thisAcc];
                                _d = toWTxn;
                                _f = (_e = algosdk_1["default"]).makeApplicationCreateTxn;
                                _g = [Deployer_1];
                                return [4 /*yield*/, getTxnParams(dhead)];
                            case 3: return [4 /*yield*/, _b.apply(void 0, _c.concat([_d.apply(void 0, [_f.apply(_e, _g.concat([_m.sent(), algosdk_1["default"].OnApplicationComplete.NoOpOC,
                                            base64ToUI8A(appApproval),
                                            base64ToUI8A(appClear),
                                            appLocalStateNumUInt, appLocalStateNumBytes + mapDataKeys,
                                            appGlobalStateNumUInt, appGlobalStateNumBytes + stateKeys,
                                            undefined, undefined, undefined, undefined,
                                            NOTE_Reach, undefined, undefined, extraPages]))])]))];
                            case 4:
                                createRes = _m.sent();
                                ApplicationID_1 = createRes['created-application-index'];
                                if (!ApplicationID_1) {
                                    throw Error("No created-application-index in " + JSON.stringify(createRes));
                                }
                                (0, shared_impl_1.debug)(label, "created", { ApplicationID: ApplicationID_1 });
                                ctcInfo = ApplicationID_1;
                                setTrustedVerifyResult({ ApplicationID: ApplicationID_1, Deployer: Deployer_1 });
                                setInfo(ctcInfo);
                                _m.label = 5;
                            case 5: return [4 /*yield*/, getC()];
                            case 6:
                                _h = _m.sent(), ApplicationID = _h.ApplicationID, ctcAddr = _h.ctcAddr, Deployer = _h.Deployer, ensureOptIn = _h.ensureOptIn, canIWin = _h.canIWin, isIsolatedNetwork = _h.isIsolatedNetwork;
                                _j = __read(pay, 2), value = _j[0], toks = _j[1];
                                void (toks); // <-- rely on simulation because of ordering
                                (0, shared_impl_1.debug)(dhead, '--- START');
                                _k = __read((0, shared_impl_1.argsSplit)(args, evt_cnt), 2), _svs = _k[0], msg = _k[1];
                                _l = __read((0, shared_impl_1.argsSplit)(tys, evt_cnt), 2), _svs_tys = _l[0], msg_tys = _l[1];
                                void (_svs);
                                void (_svs_tys);
                                fake_res = {
                                    didSend: true,
                                    didTimeout: false,
                                    data: msg,
                                    time: (0, shared_user_1.bigNumberify)(0),
                                    secs: (0, shared_user_1.bigNumberify)(0),
                                    value: value,
                                    from: pks,
                                    getOutput: (function (o_mode, o_lab, o_ctc, o_val) { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            void (o_mode);
                                            void (o_lab);
                                            void (o_ctc);
                                            return [2 /*return*/, o_val];
                                        });
                                    }); })
                                };
                                return [4 /*yield*/, sim_p(fake_res)];
                            case 7:
                                sim_r = _m.sent();
                                (0, shared_impl_1.debug)(dhead, '--- SIMULATE', sim_r);
                                if (isCtor) {
                                    sim_r.txns.unshift({
                                        kind: 'to',
                                        amt: exports.minimumBalance,
                                        tok: undefined
                                    });
                                }
                                isHalt = sim_r.isHalt;
                                if (!hasMaps) return [3 /*break*/, 9];
                                return [4 /*yield*/, ensureOptIn()];
                            case 8:
                                _m.sent();
                                _m.label = 9;
                            case 9:
                                mapRefs = sim_r.mapRefs;
                                _loop_1 = function () {
                                    var params, _o, _p, _q, mapAccts, recordAccount_, recordAccount, assetsArr, recordAsset, extraFees, howManyMoreFees, txnExtraTxns, sim_i, processSimTxn, mapAcctsVal, assetsVal, actual_args, actual_tys, safe_args, whichAppl, txnAppl, rtxns, wtxns, res, e_8, es, _r, _s;
                                    return __generator(this, function (_t) {
                                        switch (_t.label) {
                                            case 0: return [4 /*yield*/, getTxnParams(dhead)];
                                            case 1:
                                                params = _t.sent();
                                                // We add one, because the firstRound field is actually the current
                                                // round, which we couldn't possibly be in, because it already
                                                // happened.
                                                (0, shared_impl_1.debug)(dhead, '--- TIMECHECK', { params: params, timeoutAt: timeoutAt });
                                                return [4 /*yield*/, (0, shared_impl_1.checkTimeout)(isIsolatedNetwork, getTimeSecs, timeoutAt, params.firstRound + 1)];
                                            case 2:
                                                if (!_t.sent()) return [3 /*break*/, 4];
                                                (0, shared_impl_1.debug)(dhead, '--- FAIL/TIMEOUT');
                                                _o = {};
                                                return [4 /*yield*/, doRecv(false, false)];
                                            case 3: return [2 /*return*/, (_o.value = _t.sent(), _o)];
                                            case 4:
                                                _p = !soloSend;
                                                if (!_p) return [3 /*break*/, 6];
                                                return [4 /*yield*/, canIWin(lct)];
                                            case 5:
                                                _p = !(_t.sent());
                                                _t.label = 6;
                                            case 6:
                                                if (!_p) return [3 /*break*/, 8];
                                                (0, shared_impl_1.debug)(dhead, "CANNOT WIN");
                                                _q = {};
                                                return [4 /*yield*/, doRecv(false, false)];
                                            case 7: return [2 /*return*/, (_q.value = _t.sent(), _q)];
                                            case 8:
                                                (0, shared_impl_1.debug)(dhead, '--- ASSEMBLE w/', params);
                                                mapAccts = [];
                                                recordAccount_ = function (addr) {
                                                    if ((0, exports.addressEq)(thisAcc.addr, addr)) {
                                                        return;
                                                    }
                                                    var addrIdx = mapAccts.findIndex(function (other) { return (0, exports.addressEq)(other, addr); });
                                                    var present = addrIdx !== -1;
                                                    if (present) {
                                                        return;
                                                    }
                                                    mapAccts.push(addr);
                                                };
                                                recordAccount = function (caddr) {
                                                    (0, shared_impl_1.debug)("recordAccount", { caddr: caddr });
                                                    var addr = cbr2algo_addr(caddr);
                                                    (0, shared_impl_1.debug)("recordAccount", { addr: addr });
                                                    recordAccount_(addr);
                                                };
                                                mapRefs.forEach(recordAccount);
                                                assetsArr = [];
                                                recordAsset = function (tok) {
                                                    if (tok) {
                                                        var tokn = (0, shared_user_1.bigNumberToNumber)(tok);
                                                        if (!assetsArr.includes(tokn)) {
                                                            assetsArr.push(tokn);
                                                        }
                                                    }
                                                };
                                                extraFees = 0;
                                                howManyMoreFees = 0;
                                                txnExtraTxns = [];
                                                sim_i = 0;
                                                processSimTxn = function (t) {
                                                    var txn;
                                                    if (t.kind === 'tokenNew') {
                                                        processSimTxn({
                                                            kind: 'to',
                                                            amt: exports.minimumBalance,
                                                            tok: undefined
                                                        });
                                                        howManyMoreFees++;
                                                        return;
                                                    }
                                                    else if (t.kind === 'tokenBurn') {
                                                        // There's no burning on Algorand
                                                        return;
                                                    }
                                                    else if (t.kind === 'tokenDestroy') {
                                                        recordAsset(t.tok);
                                                        howManyMoreFees++;
                                                        return;
                                                    }
                                                    else {
                                                        var tok = t.tok;
                                                        var amt = (0, shared_user_1.bigNumberify)(0);
                                                        var from = ctcAddr;
                                                        var to = ctcAddr;
                                                        var closeTo = undefined;
                                                        if (t.kind === 'from') {
                                                            recordAsset(tok);
                                                            recordAccount(t.to);
                                                            howManyMoreFees++;
                                                            return;
                                                        }
                                                        else if (t.kind === 'init') {
                                                            processSimTxn({
                                                                kind: 'to',
                                                                amt: exports.minimumBalance,
                                                                tok: undefined
                                                            });
                                                            recordAsset(tok);
                                                            howManyMoreFees++;
                                                            return;
                                                        }
                                                        else if (t.kind === 'halt') {
                                                            if (t.tok) {
                                                                recordAsset(t.tok);
                                                            }
                                                            recordAccount_(Deployer);
                                                            howManyMoreFees++;
                                                            return;
                                                        }
                                                        else if (t.kind === 'to') {
                                                            from = thisAcc.addr;
                                                            to = ctcAddr;
                                                            amt = t.amt;
                                                        }
                                                        else {
                                                            (0, exports.assert)(false, 'sim txn kind');
                                                        }
                                                        if (amt.eq(0)) {
                                                            return;
                                                        }
                                                        txn = makeTransferTxn(from, to, amt, tok, params, closeTo, sim_i++);
                                                    }
                                                    extraFees += txn.fee;
                                                    txn.fee = 0;
                                                    txnExtraTxns.push(txn);
                                                };
                                                sim_r.txns.forEach(processSimTxn);
                                                (0, shared_impl_1.debug)(dhead, 'txnExtraTxns', txnExtraTxns);
                                                (0, shared_impl_1.debug)(dhead, { howManyMoreFees: howManyMoreFees, extraFees: extraFees });
                                                extraFees += MinTxnFee * howManyMoreFees;
                                                (0, shared_impl_1.debug)(dhead, { extraFees: extraFees });
                                                (0, shared_impl_1.debug)(dhead, 'MAP', { mapAccts: mapAccts });
                                                if (mapAccts.length > MaxAppTxnAccounts) {
                                                    throw Error("Application references too many local state cells in one step. Reach should catch this problem statically.");
                                                }
                                                mapAcctsVal = (mapAccts.length === 0) ? undefined : mapAccts;
                                                assetsVal = (assetsArr.length === 0) ? undefined : assetsArr;
                                                (0, shared_impl_1.debug)(dhead, { assetsArr: assetsArr, assetsVal: assetsVal });
                                                actual_args = [lct, msg];
                                                actual_tys = [exports.T_UInt, (0, exports.T_Tuple)(msg_tys)];
                                                (0, shared_impl_1.debug)(dhead, '--- ARGS =', actual_args);
                                                safe_args = actual_args.map(
                                                // @ts-ignore
                                                function (m, i) { return actual_tys[i].toNet(m); });
                                                safe_args.unshift(new Uint8Array([funcNum]));
                                                safe_args.forEach(function (x) {
                                                    if (!(x instanceof Uint8Array)) {
                                                        // The types say this is impossible now,
                                                        // but we'll leave it in for a while just in case...
                                                        throw Error("expect safe program argument, got " + JSON.stringify(x));
                                                    }
                                                });
                                                (0, shared_impl_1.debug)(dhead, '--- PREPARE:', safe_args.map(ui8h));
                                                whichAppl = isHalt ?
                                                    // We are treating it like any party can delete the application, but the docs say it may only be possible for the creator. The code appears to not care: https://github.com/algorand/go-algorand/blob/0e9cc6b0c2ddc43c3cfa751d61c1321d8707c0da/ledger/apply/application.go#L589
                                                    algosdk_1["default"].makeApplicationDeleteTxn :
                                                    algosdk_1["default"].makeApplicationNoOpTxn;
                                                txnAppl = whichAppl(thisAcc.addr, params, ApplicationID, safe_args, mapAcctsVal, undefined, assetsVal, NOTE_Reach);
                                                txnAppl.fee += extraFees;
                                                rtxns = __spreadArray(__spreadArray([], __read(txnExtraTxns), false), [txnAppl], false);
                                                (0, shared_impl_1.debug)(dhead, "assigning", { rtxns: rtxns });
                                                algosdk_1["default"].assignGroupID(rtxns);
                                                wtxns = rtxns.map(toWTxn);
                                                (0, shared_impl_1.debug)(dhead, 'signing', { wtxns: wtxns });
                                                res = void 0;
                                                _t.label = 9;
                                            case 9:
                                                _t.trys.push([9, 11, , 14]);
                                                return [4 /*yield*/, signSendAndConfirm(thisAcc, wtxns)];
                                            case 10:
                                                res = _t.sent();
                                                return [3 /*break*/, 14];
                                            case 11:
                                                e_8 = _t.sent();
                                                es = (e_8.type === 'sendRawTransaction') ?
                                                    format_failed_request(e_8 === null || e_8 === void 0 ? void 0 : e_8.e) : e_8;
                                                (0, shared_impl_1.debug)(dhead, '--- FAIL:', es);
                                                if (!!soloSend) return [3 /*break*/, 13];
                                                // If there is no soloSend, then someone else "won", so let's
                                                // listen for their message
                                                (0, shared_impl_1.debug)(dhead, 'LOST');
                                                _r = {};
                                                return [4 /*yield*/, doRecv(false, false)];
                                            case 12: return [2 /*return*/, (_r.value = _t.sent(), _r)];
                                            case 13:
                                                if (timeoutAt) {
                                                    // If there can be a timeout, then keep waiting for it
                                                    (0, shared_impl_1.debug)(dhead, "CONTINUE");
                                                    return [2 /*return*/, "continue"];
                                                }
                                                else {
                                                    // Otherwise, something bad is happening
                                                    throw Error(label + " failed to call " + funcName + ": " + JSON.stringify(es));
                                                }
                                                return [3 /*break*/, 14];
                                            case 14:
                                                (0, shared_impl_1.debug)(dhead, 'SUCCESS', res);
                                                _s = {};
                                                return [4 /*yield*/, trustedRecv(res)];
                                            case 15: return [2 /*return*/, (_s.value = _t.sent(), _s)];
                                        }
                                    });
                                };
                                _m.label = 10;
                            case 10:
                                if (!true) return [3 /*break*/, 12];
                                return [5 /*yield**/, _loop_1()];
                            case 11:
                                state_1 = _m.sent();
                                if (typeof state_1 === "object")
                                    return [2 /*return*/, state_1.value];
                                return [3 /*break*/, 10];
                            case 12: return [2 /*return*/];
                        }
                    });
                }); };
                var recvFrom = function (rfargs) { return __awaiter(void 0, void 0, void 0, function () {
                    var dhead, funcNum, out_tys, didSend, txn, theRound, theSecs, lr, ctc_args, fromAddr, from, getOutput;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                dhead = rfargs.dhead, funcNum = rfargs.funcNum, out_tys = rfargs.out_tys, didSend = rfargs.didSend, txn = rfargs.txn;
                                (0, shared_impl_1.debug)(dhead, 'txn', txn);
                                theRound = txn['confirmed-round'];
                                return [4 /*yield*/, (0, shared_impl_1.retryLoop)([dhead, 'getTimeSecs'], function () { return getTimeSecs((0, shared_user_1.bigNumberify)(theRound - 0)); })];
                            case 1:
                                theSecs = _a.sent();
                                lr = makeLogRep(reachEvent(funcNum), out_tys);
                                ctc_args = lr.parse0(txn);
                                (0, shared_impl_1.debug)(dhead, { ctc_args: ctc_args });
                                if (ctc_args === undefined) {
                                    throw Error("impossible: txn doesn't have right log as first");
                                }
                                fromAddr = txn['sender'];
                                from = exports.T_Address.canonicalize({ addr: fromAddr });
                                (0, shared_impl_1.debug)(dhead, { from: from, fromAddr: fromAddr });
                                getOutput = function (o_mode, o_lab, o_ctc, o_val) { return __awaiter(void 0, void 0, void 0, function () {
                                    var f_ctc, _a, _b, l, lb, ln, ls, ld, o;
                                    var e_9, _c;
                                    return __generator(this, function (_d) {
                                        (0, shared_impl_1.debug)("getOutput", { o_mode: o_mode, o_lab: o_lab, o_ctc: o_ctc, o_val: o_val });
                                        f_ctc = (0, exports.T_Tuple)([exports.T_UInt, o_ctc]);
                                        try {
                                            for (_a = __values(txn['logs']), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                l = _b.value;
                                                lb = reNetify(l);
                                                ln = exports.T_UInt.fromNet(lb);
                                                ls = "v" + ln;
                                                (0, shared_impl_1.debug)("getOutput", { l: l, lb: lb, ln: ln, ls: ls });
                                                if (ls === o_lab) {
                                                    ld = f_ctc.fromNet(lb);
                                                    o = ld[1];
                                                    (0, shared_impl_1.debug)("getOutput", { ld: ld, o: o });
                                                    return [2 /*return*/, o];
                                                }
                                            }
                                        }
                                        catch (e_9_1) { e_9 = { error: e_9_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                                            }
                                            finally { if (e_9) throw e_9.error; }
                                        }
                                        throw Error("no log for " + o_lab);
                                    });
                                }); };
                                return [2 /*return*/, {
                                        didSend: didSend,
                                        didTimeout: false,
                                        data: ctc_args,
                                        time: (0, shared_user_1.bigNumberify)(theRound),
                                        secs: (0, shared_user_1.bigNumberify)(theSecs),
                                        from: from,
                                        getOutput: getOutput
                                    }];
                        }
                    });
                }); };
                var recv = function (rargs) { return __awaiter(void 0, void 0, void 0, function () {
                    var funcNum, out_tys, didSend, timeoutAt, waitIfNotPresent, funcName, dhead, isIsolatedNetwork, didTimeout, res, correctStep, good, txn;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                funcNum = rargs.funcNum, out_tys = rargs.out_tys, didSend = rargs.didSend, timeoutAt = rargs.timeoutAt, waitIfNotPresent = rargs.waitIfNotPresent;
                                funcName = "m" + funcNum;
                                dhead = label + ": recv " + funcName + " " + timeoutAt;
                                (0, shared_impl_1.debug)(dhead, 'start');
                                return [4 /*yield*/, getC()];
                            case 1:
                                isIsolatedNetwork = (_a.sent()).isIsolatedNetwork;
                                didTimeout = function (cr_bn) { return __awaiter(void 0, void 0, void 0, function () {
                                    var cr, crp, r;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                cr = (0, shared_user_1.bigNumberToNumber)(cr_bn);
                                                (0, shared_impl_1.debug)(dhead, 'TIMECHECK', { timeoutAt: timeoutAt, cr_bn: cr_bn, cr: cr });
                                                crp = cr + 1;
                                                return [4 /*yield*/, (0, shared_impl_1.checkTimeout)(isIsolatedNetwork, getTimeSecs, timeoutAt, crp)];
                                            case 1:
                                                r = _a.sent();
                                                (0, shared_impl_1.debug)(dhead, 'TIMECHECK', { r: r, waitIfNotPresent: waitIfNotPresent });
                                                if (!(!r && waitIfNotPresent)) return [3 /*break*/, 3];
                                                return [4 /*yield*/, (0, exports.waitUntilTime)((0, shared_user_1.bigNumberify)(crp))];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3: return [2 /*return*/, r];
                                        }
                                    });
                                }); };
                                return [4 /*yield*/, eq.peq(dhead, didTimeout)];
                            case 2:
                                res = _a.sent();
                                (0, shared_impl_1.debug)(dhead, "res", res);
                                correctStep = makeHasLogFor(funcNum, out_tys);
                                good = (!res.timeout) && correctStep(res.txn);
                                if (!good) return [3 /*break*/, 5];
                                return [4 /*yield*/, eq.deq(dhead)];
                            case 3:
                                _a.sent();
                                txn = res.txn;
                                return [4 /*yield*/, recvFrom({ dhead: dhead, out_tys: out_tys, didSend: didSend, funcNum: funcNum, txn: txn })];
                            case 4: return [2 /*return*/, _a.sent()];
                            case 5:
                                if (timeoutAt) {
                                    (0, shared_impl_1.debug)(dhead, "timeout");
                                    return [2 /*return*/, { didTimeout: true }];
                                }
                                else {
                                    throw Error(dhead + ": impossible: not good, but no timeout");
                                }
                                _a.label = 6;
                            case 6: return [2 /*return*/];
                        }
                    });
                }); };
                var getBalance = function (mtok) {
                    if (mtok === void 0) { mtok = false; }
                    return __awaiter(void 0, void 0, void 0, function () {
                        var ctcAddr, bal, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getC()];
                                case 1:
                                    ctcAddr = (_a.sent()).ctcAddr;
                                    return [4 /*yield*/, (0, exports.balanceOf)({ addr: ctcAddr }, mtok)];
                                case 2:
                                    bal = _a.sent();
                                    result = bal.eq(0) ? bal : bal.sub(exports.minimumBalance);
                                    (0, shared_impl_1.debug)("Balance of contract:", result);
                                    return [2 /*return*/, result];
                            }
                        });
                    });
                };
                return { getContractInfo: getContractInfo, getContractAddress: getContractAddress, getBalance: getBalance, getState: getState, sendrecv: sendrecv, recv: recv, apiMapRef: apiMapRef };
            };
            var readStateBytes = function (prefix, key, src) {
                (0, shared_impl_1.debug)({ prefix: prefix, key: key });
                var ik = base64ify(new Uint8Array(key));
                (0, shared_impl_1.debug)({ ik: ik });
                var ste = src.find(function (x) { return x.key === ik; });
                (0, shared_impl_1.debug)({ ste: ste });
                if (ste === undefined) {
                    return [];
                }
                ;
                var st = ste.value;
                (0, shared_impl_1.debug)({ st: st });
                if (st.bytes === undefined) {
                    return [];
                }
                ;
                var bsi = base64ToUI8A(st.bytes);
                (0, shared_impl_1.debug)({ bsi: bsi });
                return bsi;
            };
            var recoverSplitBytes = function (prefix, size, howMany, src) {
                var bs = new Uint8Array(size);
                var offset = 0;
                for (var i = 0; i < howMany; i++) {
                    var bsi = readStateBytes(prefix, [i], src);
                    if (bsi.length == 0) {
                        return undefined;
                    }
                    bs.set(bsi, offset);
                    offset += bsi.length;
                }
                return bs;
            };
            var setupView = function (setupViewArgs) {
                var eq = newEventQueue();
                var getC = makeGetC(setupViewArgs, eq);
                var viewLib = {
                    viewMapRef: function (mapi, a) { return __awaiter(void 0, void 0, void 0, function () {
                        var viewMapRef;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getC()];
                                case 1:
                                    viewMapRef = (_a.sent()).viewMapRef;
                                    return [4 /*yield*/, viewMapRef(mapi, a)];
                                case 2: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); }
                };
                var getView1 = function (vs, v, k, vim, isSafe) {
                    if (isSafe === void 0) { isSafe = true; }
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return __awaiter(void 0, void 0, void 0, function () {
                            var decode, vi_1, vvs, vres, e_10;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        (0, shared_impl_1.debug)('getView1', v, k, args);
                                        decode = vim.decode;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 4, , 5]);
                                        vi_1 = 0;
                                        return [4 /*yield*/, getState_(getC, function (vibna) {
                                                vi_1 = (0, shared_user_1.bigNumberToNumber)(vibna);
                                                var vtys = vs[vi_1];
                                                if (!vtys) {
                                                    throw Error("no views for state " + vibna);
                                                }
                                                return vtys;
                                            })];
                                    case 2:
                                        vvs = _a.sent();
                                        return [4 /*yield*/, decode(vi_1, vvs, args)];
                                    case 3:
                                        vres = _a.sent();
                                        (0, shared_impl_1.debug)({ vres: vres });
                                        return [2 /*return*/, isSafe ? ['Some', vres] : vres];
                                    case 4:
                                        e_10 = _a.sent();
                                        (0, shared_impl_1.debug)("getView1", v, k, 'error', e_10);
                                        if (isSafe) {
                                            return [2 /*return*/, ['None', null]];
                                        }
                                        else {
                                            throw Error("View " + v + "." + k + " is not set.");
                                        }
                                        return [3 /*break*/, 5];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        });
                    };
                };
                return { getView1: getView1, viewLib: viewLib };
            };
            var setupEvents = function (setupArgs) {
                var createEventStream = function (evt, tys) {
                    var eq = newEventQueue();
                    var getC = makeGetC(setupArgs, eq);
                    var getTxnTime = function (r) { return (0, shared_user_1.bigNumberify)(r['confirmed-round']); };
                    var sync = function () { return __awaiter(void 0, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, getC()];
                                case 1:
                                    _a = _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    var getLogs = function (r) { return r['logs']; };
                    var lr = makeLogRep(evt, tys);
                    var parseLog = lr.parse;
                    return (0, shared_impl_1.makeEventStream)({
                        eq: eq,
                        getTxnTime: getTxnTime,
                        sync: sync,
                        getNetworkTime: exports.getNetworkTime,
                        getLogs: getLogs,
                        parseLog: parseLog
                    });
                };
                return { createEventStream: createEventStream };
            };
            return (0, shared_impl_1.stdContract)({ bin: bin, waitUntilTime: exports.waitUntilTime, waitUntilSecs: exports.waitUntilSecs, selfAddress: selfAddress, iam: iam, stdlib: ALGO_compiled_1.stdlib, setupView: setupView, setupEvents: setupEvents, _setup: _setup, givenInfoP: givenInfoP });
        };
        me_na = { networkAccount: networkAccount };
        tokenAccepted = function (token) { return __awaiter(void 0, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, shared_impl_1.debug)("tokenAccepted", token);
                        return [4 /*yield*/, balanceOfM(me_na, token)];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, (r !== false)];
                }
            });
        }); };
        tokenAccept = function (token) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, tokenAccepted(token)];
                    case 1:
                        if (!!(_a.sent())) return [3 /*break*/, 3];
                        (0, shared_impl_1.debug)("tokenAccept", token);
                        // @ts-ignore
                        return [4 /*yield*/, (0, exports.transfer)(me_na, me_na, 0, token)];
                    case 2:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        tokenMetadata = function (token) { return __awaiter(void 0, void 0, void 0, function () {
            var client, tokenRes, tokenInfo, p_t, p, name, symbol, url, metadata, supply, decimals;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, shared_impl_1.debug)("tokenMetadata", token);
                        return [4 /*yield*/, getAlgodClient()];
                    case 1:
                        client = _a.sent();
                        return [4 /*yield*/, client.getAssetByID((0, shared_user_1.bigNumberToNumber)(token))["do"]()];
                    case 2:
                        tokenRes = _a.sent();
                        (0, shared_impl_1.debug)({ tokenRes: tokenRes });
                        tokenInfo = tokenRes['params'];
                        (0, shared_impl_1.debug)({ tokenInfo: tokenInfo });
                        p_t = function (t, x) {
                            return x ? t.fromNet(reNetify(x)) : undefined;
                        };
                        p = function (n, x) {
                            return p_t((0, exports.T_Bytes)(n), x);
                        };
                        name = p(32, tokenInfo['name-b64']);
                        symbol = p(8, tokenInfo['unit-name-b64']);
                        url = p(96, tokenInfo['url-b64']);
                        metadata = (function () {
                            var mh = tokenInfo['metadata-hash'];
                            try {
                                return p(32, mh);
                            }
                            catch (e) {
                                (0, shared_impl_1.debug)("tokenMetadata metadata-hash", "" + e);
                                return p_t(exports.T_Digest, mh);
                            }
                        })();
                        supply = (0, shared_user_1.bigNumberify)(tokenInfo['total']);
                        decimals = (0, shared_user_1.bigNumberify)(tokenInfo['decimals']);
                        return [2 /*return*/, { name: name, symbol: symbol, url: url, metadata: metadata, supply: supply, decimals: decimals }];
                }
            });
        }); };
        return [2 /*return*/, (0, shared_impl_1.stdAccount)({ networkAccount: networkAccount, getAddress: selfAddress, stdlib: ALGO_compiled_1.stdlib, setDebugLabel: setDebugLabel, tokenAccepted: tokenAccepted, tokenAccept: tokenAccept, tokenMetadata: tokenMetadata, contract: contract })];
    });
}); };
exports.connectAccount = connectAccount;
var balanceOfM = function (acc, token) {
    if (token === void 0) { token = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var addr, client, info, _a, _b, ai;
        var e_11, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    addr = (0, ALGO_compiled_1.extractAddr)(acc);
                    return [4 /*yield*/, getAlgodClient()];
                case 1:
                    client = _d.sent();
                    return [4 /*yield*/, client.accountInformation(addr)["do"]()];
                case 2:
                    info = _d.sent();
                    (0, shared_impl_1.debug)("balanceOf", info);
                    if (!token) {
                        return [2 /*return*/, (0, shared_user_1.bigNumberify)(info.amount)];
                    }
                    else {
                        try {
                            for (_a = __values(info.assets), _b = _a.next(); !_b.done; _b = _a.next()) {
                                ai = _b.value;
                                if ((0, shared_user_1.bigNumberify)(token).eq(ai['asset-id'])) {
                                    return [2 /*return*/, (0, shared_user_1.bigNumberify)(ai['amount'])];
                                }
                            }
                        }
                        catch (e_11_1) { e_11 = { error: e_11_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                            }
                            finally { if (e_11) throw e_11.error; }
                        }
                        return [2 /*return*/, false];
                    }
                    return [2 /*return*/];
            }
        });
    });
};
var balanceOf = function (acc, token) {
    if (token === void 0) { token = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, balanceOfM(acc, token)];
                case 1:
                    r = _a.sent();
                    if (r === false) {
                        return [2 /*return*/, (0, shared_user_1.bigNumberify)(0)];
                    }
                    return [2 /*return*/, r];
            }
        });
    });
};
exports.balanceOf = balanceOf;
var createAccount = function () { return __awaiter(void 0, void 0, void 0, function () {
    var networkAccount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                networkAccount = algosdk_1["default"].generateAccount();
                return [4 /*yield*/, (0, exports.connectAccount)(networkAccount)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createAccount = createAccount;
var canFundFromFaucet = function () { return __awaiter(void 0, void 0, void 0, function () {
    var faucet, dhead, txnParams, act, exp, fbal;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.getFaucet)()];
            case 1:
                faucet = _a.sent();
                dhead = 'canFundFromFaucet';
                (0, shared_impl_1.debug)(dhead, 'check genesis');
                return [4 /*yield*/, getTxnParams(dhead)];
            case 2:
                txnParams = _a.sent();
                act = txnParams.genesisID;
                exp = 'devnet-v1';
                if (act !== exp) {
                    (0, shared_impl_1.debug)(dhead, "expected '" + exp + "' !== actual '" + act + "'");
                    return [2 /*return*/, false];
                }
                (0, shared_impl_1.debug)(dhead, 'check balance');
                return [4 /*yield*/, (0, exports.balanceOf)(faucet)];
            case 3:
                fbal = _a.sent();
                (0, shared_impl_1.debug)(dhead, "faucet balance = " + formatCurrency(fbal, 4) + " " + exports.standardUnit);
                return [2 /*return*/, (0, exports.gt)(fbal, 0)];
        }
    });
}); };
exports.canFundFromFaucet = canFundFromFaucet;
var fundFromFaucet = function (account, value) { return __awaiter(void 0, void 0, void 0, function () {
    var faucet, tag;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.getFaucet)()];
            case 1:
                faucet = _a.sent();
                (0, shared_impl_1.debug)('fundFromFaucet');
                tag = Math.round(Math.random() * (Math.pow(2, 32)));
                return [4 /*yield*/, (0, exports.transfer)(faucet, account, value, undefined, tag)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.fundFromFaucet = fundFromFaucet;
var newTestAccount = function (startingBalance) { return __awaiter(void 0, void 0, void 0, function () {
    var account;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.createAccount)()];
            case 1:
                account = _a.sent();
                return [4 /*yield*/, (0, exports.fundFromFaucet)(account, startingBalance)];
            case 2:
                _a.sent();
                return [2 /*return*/, account];
        }
    });
}); };
exports.newTestAccount = newTestAccount;
exports.newTestAccounts = (0, shared_impl_1.make_newTestAccounts)(exports.newTestAccount).parallel;
/** @description the display name of the standard unit of currency for the network */
exports.standardUnit = 'ALGO';
/** @description the display name of the atomic (smallest) unit of currency for the network */
exports.atomicUnit = 'μALGO';
/**
 * @description  Parse currency by network
 * @param amt  value in the {@link standardUnit} for the token.
 * @returns  the amount in the {@link atomicUnit} of the token.
 * @example  parseCurrency(100).toString() // => '100000000'
 * @example  parseCurrency(100, 3).toString() // => '100000'
 */
function parseCurrency(amt, decimals) {
    if (decimals === void 0) { decimals = 6; }
    if (!(Number.isInteger(decimals) && 0 <= decimals)) {
        throw Error("Expected decimals to be a nonnegative integer, but got " + decimals + ".");
    }
    // @ts-ignore
    var numericAmt = (0, shared_user_1.isBigNumber)(amt) ? amt.toNumber()
        : typeof amt === 'string' ? parseFloat(amt)
            : typeof amt === 'bigint' ? Number(amt)
                : amt;
    var value = numericAmt * (Math.pow(10, decimals));
    return (0, shared_user_1.bigNumberify)(Math.floor(value));
}
exports.parseCurrency = parseCurrency;
exports.minimumBalance = (0, shared_user_1.bigNumberify)(MinBalance);
// lol I am not importing leftpad for this
/** @example lpad('asdf', '0', 6); // => '00asdf' */
function lpad(str, padChar, nChars) {
    var padding = padChar.repeat(Math.max(nChars - str.length, 0));
    return padding + str;
}
/** @example rdrop('asfdfff', 'f'); // => 'asfd' */
function rdrop(str, char) {
    while (str[str.length - 1] === char) {
        str = str.slice(0, str.length - 1);
    }
    return str;
}
/** @example ldrop('007', '0'); // => '7' */
function ldrop(str, char) {
    while (str[0] === char) {
        str = str.slice(1);
    }
    return str;
}
/**
 * @description  Format currency by network or token
 * @param amt  the amount in the {@link atomicUnit} of the network or token.
 * @param decimals  up to how many decimal places to display in the {@link standardUnit}.
 * @param splitValue  where to split the numeric value.
 *   Trailing zeros will be omitted. Excess decimal places will be truncated (not rounded).
 *   This argument defaults to maximum precision.
 * @returns  a string representation of that amount in the {@link standardUnit} for that network or token.
 * @example  formatCurrency(bigNumberify('100000000')); // => '100'
 * @example  formatCurrency(bigNumberify('9999998799987000')); // => '9999998799.987'
 */
function handleFormat(amt, decimals, splitValue) {
    if (splitValue === void 0) { splitValue = 6; }
    if (!(Number.isInteger(decimals) && 0 <= decimals)) {
        throw Error("Expected decimals to be a nonnegative integer, but got " + decimals + ".");
    }
    if (!(Number.isInteger(splitValue) && 0 <= splitValue)) {
        throw Error("Expected split value to be a nonnegative integer, but got " + decimals + ".");
    }
    var amtStr = (0, shared_user_1.bigNumberify)(amt).toString();
    var splitAt = Math.max(amtStr.length - splitValue, 0);
    var lPredropped = amtStr.slice(0, splitAt);
    var l = ldrop(lPredropped, '0') || '0';
    if (decimals === 0) {
        return l;
    }
    var rPre = lpad(amtStr.slice(splitAt), '0', splitValue);
    var rSliced = rPre.slice(0, decimals);
    var r = rdrop(rSliced, '0');
    return r ? l + "." + r : l;
}
/**
 * @description  Format currency by network
 */
function formatCurrency(amt, decimals) {
    if (decimals === void 0) { decimals = 6; }
    return handleFormat(amt, decimals, 6);
}
exports.formatCurrency = formatCurrency;
/**
 * @description  Format currency based on token decimals
 */
function formatWithDecimals(amt, decimals) {
    return handleFormat(amt, decimals, decimals);
}
exports.formatWithDecimals = formatWithDecimals;
function getDefaultAccount() {
    return __awaiter(this, void 0, void 0, function () {
        var addr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, exports.getProvider)()];
                case 1: return [4 /*yield*/, (_a.sent()).getDefaultAddress()];
                case 2:
                    addr = _a.sent();
                    return [4 /*yield*/, (0, exports.connectAccount)({ addr: addr })];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getDefaultAccount = getDefaultAccount;
/**
 * @param mnemonic 25 words, space-separated
 */
var newAccountFromMnemonic = function (mnemonic) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.connectAccount)(algosdk_1["default"].mnemonicToSecretKey(mnemonic))];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.newAccountFromMnemonic = newAccountFromMnemonic;
/**
 * @param secret a Uint8Array, or its hex string representation
 */
var newAccountFromSecret = function (secret) { return __awaiter(void 0, void 0, void 0, function () {
    var sk, mnemonic;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sk = ethers_1.ethers.utils.arrayify(secret);
                mnemonic = algosdk_1["default"].secretKeyToMnemonic(sk);
                return [4 /*yield*/, (0, exports.newAccountFromMnemonic)(mnemonic)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.newAccountFromSecret = newAccountFromSecret;
var getNetworkTime = function () { return __awaiter(void 0, void 0, void 0, function () {
    var indexer, hc;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getIndexer()];
            case 1:
                indexer = _a.sent();
                return [4 /*yield*/, indexer.makeHealthCheck()["do"]()];
            case 2:
                hc = _a.sent();
                return [2 /*return*/, (0, shared_user_1.bigNumberify)(hc['round'])];
        }
    });
}); };
exports.getNetworkTime = getNetworkTime;
var getTimeSecs = function (now_bn) { return __awaiter(void 0, void 0, void 0, function () {
    var now, client, binfo, e_12, indexer, info;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                now = (0, shared_user_1.bigNumberToNumber)(now_bn);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 7]);
                return [4 /*yield*/, getAlgodClient()];
            case 2:
                client = _a.sent();
                return [4 /*yield*/, client.block(now)["do"]()];
            case 3:
                binfo = _a.sent();
                //debug(`getTimeSecs`, `node`, binfo);
                return [2 /*return*/, (0, shared_user_1.bigNumberify)(binfo.block.ts)];
            case 4:
                e_12 = _a.sent();
                (0, shared_impl_1.debug)("getTimeSecs", "node failed", e_12);
                return [4 /*yield*/, getIndexer()];
            case 5:
                indexer = _a.sent();
                return [4 /*yield*/, indexer.lookupBlock(now)["do"]()];
            case 6:
                info = _a.sent();
                (0, shared_impl_1.debug)("getTimeSecs", "indexer", info);
                return [2 /*return*/, (0, shared_user_1.bigNumberify)(info['timestamp'])];
            case 7: return [2 /*return*/];
        }
    });
}); };
var getNetworkSecs = function () { return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
    switch (_b.label) {
        case 0:
            _a = getTimeSecs;
            return [4 /*yield*/, (0, exports.getNetworkTime)()];
        case 1: return [4 /*yield*/, _a.apply(void 0, [_b.sent()])];
        case 2: return [2 /*return*/, _b.sent()];
    }
}); }); };
exports.getNetworkSecs = getNetworkSecs;
var stepTime = function (target) { return __awaiter(void 0, void 0, void 0, function () {
    var now, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!true) return [3 /*break*/, 8];
                return [4 /*yield*/, (0, exports.getNetworkTime)()];
            case 1:
                now = _b.sent();
                (0, shared_impl_1.debug)("stepTime", { target: target, now: now });
                if (target.lte(now)) {
                    return [2 /*return*/, now];
                }
                return [4 /*yield*/, (0, exports.getProvider)()];
            case 2:
                if (!(_b.sent()).isIsolatedNetwork) return [3 /*break*/, 5];
                _a = exports.fundFromFaucet;
                return [4 /*yield*/, (0, exports.getFaucet)()];
            case 3: return [4 /*yield*/, _a.apply(void 0, [_b.sent(), 0])];
            case 4:
                _b.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, stdWait()];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7: return [3 /*break*/, 0];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.waitUntilTime = (0, shared_impl_1.make_waitUntilX)('time', exports.getNetworkTime, stepTime);
var stepSecs = function (target) { return __awaiter(void 0, void 0, void 0, function () {
    var now, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                void (target);
                _a = stepTime;
                return [4 /*yield*/, (0, exports.getNetworkTime)()];
            case 1: return [4 /*yield*/, _a.apply(void 0, [(_b.sent()).add(1)])];
            case 2:
                now = _b.sent();
                return [4 /*yield*/, getTimeSecs(now)];
            case 3: return [2 /*return*/, _b.sent()];
        }
    });
}); };
exports.waitUntilSecs = (0, shared_impl_1.make_waitUntilX)('secs', exports.getNetworkSecs, stepSecs);
var wait = function (delta, onProgress) { return __awaiter(void 0, void 0, void 0, function () {
    var now;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.getNetworkTime)()];
            case 1:
                now = _a.sent();
                return [4 /*yield*/, (0, exports.waitUntilTime)(now.add(delta), onProgress)];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.wait = wait;
var appLocalStateNumUInt = 0;
var appLocalStateNumBytes = 0;
var appGlobalStateNumUInt = 0;
var appGlobalStateNumBytes = 1;
var verifyContract = function (info, bin) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, verifyContract_('', info, bin, newEventQueue())];
    });
}); };
exports.verifyContract = verifyContract;
var verifyContract_ = function (label, info, bin, eq) { return __awaiter(void 0, void 0, void 0, function () {
    var ai_bn, ApplicationID, _a, appApproval, appClear, mapDataKeys, stateKeys, dhead, chk, chkeq, client, appInfo, err, e_13, appInfo_p, Deployer, appInfo_LocalState, appInfo_GlobalState, indexer, ilq, ilr, appInfo_i, allocRound, iat;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                must_be_supported(bin);
                ai_bn = (0, exports.protect)(exports.T_Contract, info);
                ApplicationID = (0, shared_user_1.bigNumberToNumber)(ai_bn);
                _a = bin._Connectors.ALGO, appApproval = _a.appApproval, appClear = _a.appClear, mapDataKeys = _a.mapDataKeys, stateKeys = _a.stateKeys;
                dhead = label + ": verifyContract";
                chk = function (p, msg) {
                    if (!p) {
                        throw Error(dhead + " failed: " + msg);
                    }
                };
                chkeq = function (a, e, msg) {
                    var as = JSON.stringify(a);
                    var es = JSON.stringify(e);
                    chk(as === es, msg + ": expected " + es + ", got " + as);
                };
                return [4 /*yield*/, getAlgodClient()];
            case 1:
                client = _b.sent();
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, client.getApplicationByID(ApplicationID)["do"]()];
            case 3:
                appInfo = _b.sent();
                return [3 /*break*/, 5];
            case 4:
                e_13 = _b.sent();
                err = e_13;
                return [3 /*break*/, 5];
            case 5:
                if (appInfo === undefined) {
                    throw Error(dhead + " failed: failed to lookup application (" + ApplicationID + "): " + JSON.stringify(err));
                }
                appInfo_p = appInfo['params'];
                (0, shared_impl_1.debug)(dhead, { appInfo_p: appInfo_p });
                chk(appInfo_p, "Cannot lookup ApplicationId");
                chkeq(appInfo_p['approval-program'], appApproval, "Approval program does not match Reach backend");
                chkeq(appInfo_p['clear-state-program'], appClear, "ClearState program does not match Reach backend");
                Deployer = appInfo_p['creator'];
                appInfo_LocalState = appInfo_p['local-state-schema'];
                chkeq(appInfo_LocalState['num-byte-slice'], appLocalStateNumBytes + mapDataKeys, "Num of byte-slices in local state schema does not match Reach backend");
                chkeq(appInfo_LocalState['num-uint'], appLocalStateNumUInt, "Num of uints in local state schema does not match Reach backend");
                appInfo_GlobalState = appInfo_p['global-state-schema'];
                chkeq(appInfo_GlobalState['num-byte-slice'], appGlobalStateNumBytes + stateKeys, "Num of byte-slices in global state schema does not match Reach backend");
                chkeq(appInfo_GlobalState['num-uint'], appGlobalStateNumUInt, "Num of uints in global state schema does not match Reach backend");
                return [4 /*yield*/, getIndexer()];
            case 6:
                indexer = _b.sent();
                ilq = indexer.lookupApplications(ApplicationID).includeAll();
                return [4 /*yield*/, doQuery_(dhead + " app lookup", ilq)];
            case 7:
                ilr = _b.sent();
                (0, shared_impl_1.debug)(dhead, { ilr: ilr });
                appInfo_i = ilr.application;
                (0, shared_impl_1.debug)(dhead, { appInfo_i: appInfo_i });
                chkeq(appInfo_i['deleted'], false, "Application must not be deleted");
                allocRound = appInfo_i['created-at-round'];
                eq.init({ ApplicationID: ApplicationID });
                return [4 /*yield*/, eq.deq(dhead)];
            case 8:
                iat = _b.sent();
                (0, shared_impl_1.debug)({ iat: iat });
                chkeq(iat['created-application-index'], ApplicationID, 'app created');
                chkeq(iat['application-index'], 0, 'app created');
                chkeq(iat['confirmed-round'], allocRound, 'created on correct round');
                chkeq(iat['approval-program'], appInfo_p['approval-program'], "ApprovalProgram unchanged since creation");
                chkeq(iat['clear-state-program'], appInfo_p['clear-state-program'], "ClearStateProgram unchanged since creation");
                return [2 /*return*/, { ApplicationID: ApplicationID, Deployer: Deployer }];
        }
    });
}); };
/**
 * Formats an account's address in the way users expect to see it.
 * @param acc Account, NetworkAccount, base32-encoded address, or hex-encoded address
 * @returns the address formatted as a base32-encoded string with checksum
 */
function formatAddress(acc) {
    return (0, ALGO_compiled_1.addressFromHex)(exports.T_Address.canonicalize(acc));
}
exports.formatAddress = formatAddress;
function unsafeGetMnemonic(acc) {
    // @ts-ignore
    var networkAccount = acc.networkAccount || acc;
    if (!networkAccount.sk) {
        throw Error("unsafeGetMnemonic: Secret key not accessible for account");
    }
    return algosdk_1["default"].secretKeyToMnemonic(networkAccount.sk);
}
exports.unsafeGetMnemonic = unsafeGetMnemonic;
function launchToken(accCreator, name, sym, opts) {
    if (opts === void 0) { opts = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var addr, caddr, zaddr, client, dotxn, supply, decimals, ctxn_p, idn, id, mint, optOut;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, shared_impl_1.debug)("Launching token, " + name + " (" + sym + ")");
                    addr = function (acc) { return acc.networkAccount.addr; };
                    caddr = addr(accCreator);
                    zaddr = caddr;
                    return [4 /*yield*/, getAlgodClient()];
                case 1:
                    client = _a.sent();
                    dotxn = function (mktxn, acc) {
                        if (acc === void 0) { acc = accCreator; }
                        return __awaiter(_this, void 0, void 0, function () {
                            var sk, params, t, s, r;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        sk = acc.networkAccount.sk;
                                        if (!sk) {
                                            throw new Error("can only launchToken with account with secret key");
                                        }
                                        return [4 /*yield*/, getTxnParams('launchToken')];
                                    case 1:
                                        params = _a.sent();
                                        t = mktxn(params);
                                        s = t.signTxn(sk);
                                        return [4 /*yield*/, client.sendRawTransaction(s)["do"]()];
                                    case 2:
                                        r = (_a.sent());
                                        return [4 /*yield*/, waitForConfirmation(r.txId)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        });
                    };
                    supply = (opts.supply && (0, shared_user_1.bigNumberify)(opts.supply)) || (0, shared_user_1.bigNumberify)(2).pow(64).sub(1);
                    decimals = opts.decimals !== undefined ? opts.decimals : 6;
                    return [4 /*yield*/, dotxn(function (params) {
                            return algosdk_1["default"].makeAssetCreateTxnWithSuggestedParams(caddr, undefined, (0, shared_impl_1.bigNumberToBigInt)(supply), decimals, false, zaddr, zaddr, zaddr, zaddr, sym, name, '', '', params);
                        })];
                case 2:
                    ctxn_p = _a.sent();
                    idn = ctxn_p['created-asset-index'];
                    if (!idn) {
                        throw Error(sym + " no asset-index!");
                    }
                    id = (0, shared_user_1.bigNumberify)(idn);
                    (0, shared_impl_1.debug)(sym + ": asset is " + id);
                    mint = function (accTo, amt) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    (0, shared_impl_1.debug)(sym + ": transferring " + amt + " " + sym + " for " + addr(accTo));
                                    return [4 /*yield*/, (0, exports.transfer)(accCreator, accTo, amt, id)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    optOut = function (accFrom, accTo) {
                        if (accTo === void 0) { accTo = accCreator; }
                        return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, dotxn(function (params) {
                                            return algosdk_1["default"].makeAssetTransferTxnWithSuggestedParams(addr(accFrom), addr(accTo), addr(accTo), undefined, 0, undefined, idn, params);
                                        }, accFrom)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    };
                    return [2 /*return*/, { name: name, sym: sym, id: id, mint: mint, optOut: optOut }];
            }
        });
    });
}
exports.launchToken = launchToken;
;
exports.reachStdlib = ALGO_compiled_1.stdlib;
//# sourceMappingURL=ALGO.js.map