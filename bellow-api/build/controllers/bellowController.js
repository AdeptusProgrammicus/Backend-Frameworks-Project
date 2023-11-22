"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBellow = exports.editBellow = exports.addBellow = exports.getOneBellow = exports.getAllBellows = void 0;
const bellow_1 = require("../models/bellow");
const auth_1 = require("../services/auth");
const getAllBellows = async (req, res, next) => {
    let bellowList = await bellow_1.Bellow.find();
    res.status(200).json(bellowList);
};
exports.getAllBellows = getAllBellows;
const getOneBellow = async (req, res, next) => {
    let itemId = req.params.id;
    let bellow = await bellow_1.Bellow.findById(itemId);
    res.status(200).json(bellow);
};
exports.getOneBellow = getOneBellow;
const addBellow = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    const newBellow = new bellow_1.Bellow({
        message: req.body.message,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    });
    try {
        await newBellow.save();
        res.status(201).json(newBellow);
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.addBellow = addBellow;
const editBellow = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let itemId = req.params.id;
    const updatedBellow = new bellow_1.Bellow({
        _id: itemId,
        message: req.body.message,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    });
    await bellow_1.Bellow.findByIdAndUpdate(itemId, { $set: updatedBellow });
    res.status(200).json(updatedBellow);
};
exports.editBellow = editBellow;
const deleteBellow = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let itemId = req.params.id;
    let result = await bellow_1.Bellow.findByIdAndDelete(itemId);
    res.status(200).json(result);
};
exports.deleteBellow = deleteBellow;
