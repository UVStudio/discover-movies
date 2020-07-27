"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yearsRange = void 0;
exports.yearsRange = [];
var year = new Date().getFullYear();
var yearsArray = function () {
    if (year === 1900) {
        exports.yearsRange.push(1900);
        return;
    }
    else {
        exports.yearsRange.push(year);
        year = year - 1;
        yearsArray();
    }
};
yearsArray();
