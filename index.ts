#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { parse } from "./utils/Parser";
import { render } from "./utils/Renderer";
const express = require("express");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { port, p } = argv;
const config = {
    port: p || port || 3000,
};

const fileName = String(argv._[0]);
if (fileName.length > 0) {
    if (fileName.includes(".txt")) {
        const app = express();
        app.get("/", (req: any, res: any) => {
            res.send(
                render(
                    JSON.stringify(
                        parse(
                            fs
                                .readFileSync(path.join(fileName), "utf-8")
                                .split("\n")
                        ),
                        null,
                        4
                    )
                )
            );
        });
        app.listen(config.port, () => {
            console.info(
                `🌲 SVG Tree available on http://127.0.0.1:${config.port}`
            );
        });
    } else {
        console.error("[ERROR] Only *.txt files are supported");
    }
} else {
    console.error("[ERROR] No file specified");
}
