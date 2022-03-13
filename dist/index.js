#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Parser_1 = require("./utils/Parser");
const Renderer_1 = require("./utils/Renderer");
const express = require("express");
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const fileName = String(argv._[0]);
if (fileName.length > 0) {
    if (fileName.includes('.txt')) {
        const app = express();
        const port = 3000;
        app.get("/", (req, res) => {
            res.send((0, Renderer_1.render)(JSON.stringify((0, Parser_1.parse)(fs_1.default.readFileSync(path_1.default.join(fileName), "utf-8").split("\n")), null, 4)));
        });
        app.listen(port, () => {
            console.info(`🌲 SVG Tree available on http://127.0.0.1:${port}`);
        });
    }
    else {
        console.error('[ERROR] Only *.txt files are supported');
    }
}
else {
    console.error('[ERROR] No file specified');
}
