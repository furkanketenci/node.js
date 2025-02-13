import express from 'express';
import { successResponse, errorResponse } from "../lib/Response.js"
import Roles from '../db/models/Roles.js';
import Enum from "../config/Enum.js";
const router = express.Router();

router.get("/", async function (req, res) {
    try {
        let roles = await Roles.find({})
        res.json(successResponse(roles))
    }
    catch {
        res.json(errorResponse(err))
    }
})

router.post('/add', async function (req, res) {
    let body = req.body; // kullanıcıdan gelen veriyi alır. Veri yoksa boş obje döner.
    try {
        if (!body.roleName) throw "roleName is required!";

        let role = new Roles({
            roleName: body.roleName,
            isActive: true,
            createdBy: req.user?.id
        })

        await role.save();

        res.json(successResponse({ success: true }))

        res.send('respond with a resource');
    }
    catch (err) {
        res.status(err.code || Enum.INT_SERVER_ERROR)
        res.json(errorResponse(err))
    }
});

router.post("/update", async (req, res) => {
    let body = req.body;
    try {
        if (!body._id) throw "_id is required!"

        let updates = {};
        if (body.roleName) updates.roleName = body.roleName;
        if (typeof body.isActive === "boolean") updates.isActive = body.isActive;

        await Roles.updateOne({ _id: body._id }, updates)
        res.json(successResponse({ success: true }))
    }
    catch (err) {
        res.status(err.code || Enum.INT_SERVER_ERROR)
        res.json(errorResponse(err))
    }
})

router.post("/delete", async (req, res) => {
    let body = req.body;
    try {
        if (!body._id) throw "_id is required!";
        await Roles.deleteOne({ _id: body._id })
        res.json(successResponse({ success: true }))

    }
    catch (err) {
        res.status(err.code || Enum.INT_SERVER_ERROR)
        res.json(errorResponse(err))
    }
})


export default router;
