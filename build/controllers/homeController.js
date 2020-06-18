"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postIndex = exports.getIndex = void 0;
var HttpError_1 = require("../class/HttpError");
exports.getIndex = function (req, res, next) {
    res.status(200).end();
};
exports.postIndex = function (req, res, next) {
    var incomingData = req.body;
    if (!incomingData.id) {
        throw new HttpError_1.HttpError(400, "Payment ID is necessery");
    }
    var response = {
        status: 200,
        message: "Great!",
        incomingData: incomingData
    };
    res.send(response);
};
