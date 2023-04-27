"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNumber = exports.toBoolean = exports.toDate = exports.trim = exports.toLowerCase = void 0;
function toLowerCase(value) {
    return value.toLowerCase();
}
exports.toLowerCase = toLowerCase;
function trim(value) {
    return value.trim();
}
exports.trim = trim;
function toDate(value) {
    return new Date(value);
}
exports.toDate = toDate;
function toBoolean(value) {
    value = value.toLowerCase();
    return value === 'true' || value === '1' ? true : false;
}
exports.toBoolean = toBoolean;
function toNumber(value, opts = {}) {
    let newValue = Number.parseInt(value || String(opts.default), 10);
    if (Number.isNaN(newValue)) {
        newValue = opts.default;
    }
    if (opts.min) {
        if (newValue < opts.min) {
            newValue = opts.min;
        }
        if (newValue > opts.max) {
            newValue = opts.max;
        }
    }
    return newValue;
}
exports.toNumber = toNumber;
//# sourceMappingURL=cast.helper.js.map