import { RequestHandler } from "express";
import { Bellow, IBellow } from "../models/bellow";
import { IUser } from "../models/user";
import { verifyUser } from "../services/auth";


export const getAllBellows: RequestHandler = async (req, res, next) => {
    let bellowList = await Bellow.find();
    res.status(200).json(bellowList);
}

export const getOneBellow: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let bellow = await Bellow.findById(itemId);
    res.status(200).json(bellow);
}

export const addBellow: RequestHandler = async (req, res, next) => {
    let user: IUser | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    const newBellow: IBellow = new Bellow({
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
}

export const editBellow: RequestHandler = async (req, res, next) => {
    let user: IUser | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    let itemId = req.params.id;
    const updatedBellow: IBellow = new Bellow({
        _id: itemId,
        message: req.body.message,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    });

    await Bellow.findByIdAndUpdate(itemId, { $set: updatedBellow })

    res.status(200).json(updatedBellow);
}

export const deleteBellow: RequestHandler = async (req, res, next) => {
    let user: IUser | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    let itemId = req.params.id;
    let result = await Bellow.findByIdAndDelete(itemId);
    res.status(200).json(result);
}