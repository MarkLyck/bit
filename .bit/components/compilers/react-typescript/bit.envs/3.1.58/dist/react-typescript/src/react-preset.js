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
exports.reactPreset = void 0;
const generate_types_1 = require("./generate-types");
const tsconfig_1 = require("./tsconfig");
const COMPILED_EXTENSIONS = ['.ts', '.tsx'];
const IGNORED_FILES = ['package.json', 'package-lock.json', 'tsconfig.json'];
exports.reactPreset = {
    getDynamicPackageDependencies() {
        return {
            dependencies: {},
            devDependencies: {},
            peerDependencies: {
                react: '^16.11.0',
                'react-dom': '^16.11.0',
                '@types/react': '16.9.11',
                '@types/react-dom': '16.9.4',
            },
        };
    },
    getDynamicConfig(rawConfig) {
        const config = Object.assign({ compilerArguments: ['--declaration'], compiledFileTypes: COMPILED_EXTENSIONS, configFileName: 'tsconfig.json', tsconfig: {}, development: false, copyPolicy: {} }, (rawConfig || {}));
        const isDev = config.development;
        const defaultConfig = {
            compilerPath: 'typescript/bin/tsc',
            compilerArguments: config.compilerArguments,
            compiledFileTypes: config.compiledFileTypes,
            configFileName: 'tsconfig.json',
            tsconfig: tsconfig_1.getTSConfig(isDev, config.tsconfig),
            development: isDev,
            copyPolicy: {
                ignorePatterns: config.copyPolicy.ignorePatterns || IGNORED_FILES,
                disable: false,
            },
        };
        return defaultConfig;
    },
    preCompile(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield generate_types_1.generateTypes(ctx.directory);
        });
    },
};
