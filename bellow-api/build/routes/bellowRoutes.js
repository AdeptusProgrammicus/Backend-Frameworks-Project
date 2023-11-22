"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bellowController_1 = require("../controllers/bellowController");
const router = (0, express_1.Router)();
router.get('/', bellowController_1.getAllBellows);
router.get('/:id', bellowController_1.getOneBellow);
router.post('/', bellowController_1.addBellow);
router.put('/:id', bellowController_1.editBellow);
router.delete('/:id', bellowController_1.deleteBellow);
exports.default = router;