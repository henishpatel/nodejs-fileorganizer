#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let organizeObj = require("./commands/organize");
let treeObj = require("./commands/tree");

let command = inputArr[0];



switch (command) {
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organiseKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("🙏 Please Enter Right Command");
}