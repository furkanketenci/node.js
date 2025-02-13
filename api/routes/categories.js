import express from 'express';
import { successResponse, errorResponse } from '../lib/Response.js';
import CustomError from "../lib/Error.js";
import Enum from "../config/Enum.js";
import Categories from '../db/models/Categories.js';


const router = express.Router();

router.get('/', async function (req, res, next) {
    try {
        // Select sorgusu
        let categories = await Categories.find({})
        res.json(successResponse(categories))
    } catch (err) {
        res.json(errorResponse(err))
    }
});

router.post("/add", async (req, res) => {
    let body = req.body;

    try {
        if (!body.name) throw CustomError(Enum.BAD_REQUEST, "Name field must be filled!")

        let category = new Categories({
            name: body.name,
            isActive: true,
            createdBy: req.user?.id
        })

        await category.save()

        res.json(successResponse({ success: true }))

    }
    catch (err) {
        res.status(err.code || Enum.INT_SERVER_ERROR)
        res.json(errorResponse(err))
    }
})

router.post("/update", async (req, res) => {
    let body = req.body;
    try {
        if (!body._id) throw CustomError(Enum.BAD_REQUEST, "_id must be!");

        let updates = {};
        if (body.name) updates.name = body.name;
        if (typeof body.isActive === "boolean") updates.isActive = body.isActive;

        await Categories.updateOne({ _id: body._id }, updates)
        res.json(successResponse({ success: true }))
    } catch (err) {
        res.status(err.code || Enum.INT_SERVER_ERROR)
        res.json(errorResponse(err))
    }
})


router.post("/delete", async (req, res) => {
    let body = req.body;
    try {
        if (!body._id) throw CustomError(Enum.BAD_REQUEST, "_id must be!");

        await Categories.deleteOne({ _id: body._id })
        res.json(successResponse({ success: true }))
    } catch (err) {
        res.status(err.code || Enum.INT_SERVER_ERROR)
        res.json(errorResponse(err))
    }
})

export default router;
