"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bellow = void 0;
const mongoose_1 = require("mongoose");
const bellowSchema = new mongoose_1.Schema({
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
const Bellow = (0, mongoose_1.model)('Bellow', bellowSchema);
exports.Bellow = Bellow;
