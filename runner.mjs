var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
  return new(P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = (this && this.__generator) || function(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] },
    f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;

  function verb(n) { return function(v) { return step([n, v]); }; }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
          if (op[0] === 6 && _.label < t[1]) { _.label = t[1];
            t = op; break; }
          if (t && _.label < t[2]) { _.label = t[2];
            _.ops.push(op); break; }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) { op = [6, e];
      y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray = (this && this.__spreadArray) || function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
import { loadStdlib } from './loader.mjs';
import { envDefault } from './shared_impl.mjs';
var mountDir = envDefault(process.env.REACH_RUNNER_MOUNT_DIR, '.');
export function run(file) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  return __awaiter(this, void 0, void 0, function() {
    var m, stdlib;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (!file) {
            throw Error('Run requires an argument.');
          }
          return [4 /*yield*/ , import(mountDir + "/" + file)];
        case 1:
          m = _a.sent();
          return [4 /*yield*/ , loadStdlib()];
        case 2:
          stdlib = _a.sent();
          m.main.apply(m, __spreadArray([stdlib], args, false));
          return [2 /*return*/ ];
      }
    });
  });
}
export function main() {
  // slice off $(which node) and runner file
  var _a = process.argv.slice(2),
    file = _a[0],
    args = _a.slice(1);
  run.apply(void 0, __spreadArray([file], args, false));
}
// TODO: only run main if running as script?
main();
//# sourceMappingURL=runner.js.map
