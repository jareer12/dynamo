"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function main(length, toUpperCase, charSet) {
    var result = [];
    length = length || 12;
    charSet =
        charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    while (length--) {
        result.push(charSet.charAt(Math.floor(Math.random() * charSet.length)));
    }
    if (toUpperCase) {
        return result.join("").toUpperCase();
    }
    else {
        return result.join("");
    }
}
exports.default = main;
