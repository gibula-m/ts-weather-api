"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
exports.errorHandler = function (err, res) {
    res.status(err.statusCode).json(err);
};
