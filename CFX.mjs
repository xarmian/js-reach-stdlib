import * as cfxImpl from './CFX_impl.mjs';
import { makeEthLike } from './ETH_like.mjs';
export * from './CFX_compiled.mjs';
export var connector = 'CFX';
var ethLike = makeEthLike(cfxImpl);
// The following should be identical to ETH.ts
export var getQueryLowerBound = ethLike.getQueryLowerBound,
  setQueryLowerBound = ethLike.setQueryLowerBound,
  getValidQueryWindow = ethLike.getValidQueryWindow,
  setValidQueryWindow = ethLike.setValidQueryWindow,
  getProvider = ethLike.getProvider,
  setProvider = ethLike.setProvider,
  randomUInt = ethLike.randomUInt,
  hasRandom = ethLike.hasRandom,
  setProviderByEnv = ethLike.setProviderByEnv,
  setProviderByName = ethLike.setProviderByName,
  providerEnvByName = ethLike.providerEnvByName,
  setWalletFallback = ethLike.setWalletFallback,
  walletFallback = ethLike.walletFallback,
  balanceOf = ethLike.balanceOf,
  transfer = ethLike.transfer,
  connectAccount = ethLike.connectAccount,
  newAccountFromSecret = ethLike.newAccountFromSecret,
  newAccountFromMnemonic = ethLike.newAccountFromMnemonic,
  getDefaultAccount = ethLike.getDefaultAccount,
  getFaucet = ethLike.getFaucet,
  setFaucet = ethLike.setFaucet,
  createAccount = ethLike.createAccount,
  canFundFromFaucet = ethLike.canFundFromFaucet,
  fundFromFaucet = ethLike.fundFromFaucet,
  newTestAccount = ethLike.newTestAccount,
  newTestAccounts = ethLike.newTestAccounts,
  getNetworkTime = ethLike.getNetworkTime,
  waitUntilTime = ethLike.waitUntilTime,
  wait = ethLike.wait,
  getNetworkSecs = ethLike.getNetworkSecs,
  waitUntilSecs = ethLike.waitUntilSecs,
  verifyContract = ethLike.verifyContract,
  standardUnit = ethLike.standardUnit,
  atomicUnit = ethLike.atomicUnit,
  parseCurrency = ethLike.parseCurrency,
  minimumBalance = ethLike.minimumBalance,
  formatCurrency = ethLike.formatCurrency,
  formatAddress = ethLike.formatAddress,
  unsafeGetMnemonic = ethLike.unsafeGetMnemonic,
  launchToken = ethLike.launchToken,
  reachStdlib = ethLike.reachStdlib;
export var add = reachStdlib.add,
  sub = reachStdlib.sub,
  mod = reachStdlib.mod,
  mul = reachStdlib.mul,
  div = reachStdlib.div,
  protect = reachStdlib.protect,
  assert = reachStdlib.assert,
  Array_set = reachStdlib.Array_set,
  eq = reachStdlib.eq,
  ge = reachStdlib.ge,
  gt = reachStdlib.gt,
  le = reachStdlib.le,
  lt = reachStdlib.lt,
  bytesEq = reachStdlib.bytesEq,
  digestEq = reachStdlib.digestEq;
export * from './shared_user.mjs';
//# sourceMappingURL=CFX.js.map
