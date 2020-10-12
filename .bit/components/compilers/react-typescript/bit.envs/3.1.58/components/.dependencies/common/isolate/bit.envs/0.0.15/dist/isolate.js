"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isolate = exports.DEBUG_FLAG = void 0;
const get_capsule_name_1 = require("./get-capsule-name");
exports.DEBUG_FLAG = 'DEBUG';
function print(msg) {
    process.env[exports.DEBUG_FLAG] && console.log(msg);
}
function isolate(cc, isolateOptions, capsulePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const api = cc.context;
        const targetDir = capsulePath || get_capsule_name_1.getCapsuleName();
        const componentName = api.componentObject.name;
        print(`\n building ${componentName} on directory ${targetDir}`);
        const actualOpts = Object.assign({ targetDir, shouldBuildDependencies: true }, (isolateOptions || {}));
        const res = yield api.isolate(actualOpts);
        return { res, directory: targetDir };
    });
}
exports.isolate = isolate;
