"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import dotenv from 'dotenv'
const debtService_1 = __importDefault(require("../services/debtService"));
/* eslint @typescript-eslint/no-unsafe-assignment: 0 */
/* eslint @typescript-eslint/restrict-plus-operands: 0 */
const router = express_1.default.Router();
//const password = process.env.PASSWORD ?? ''
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const debts = yield debtService_1.default.getAllDebts();
    res.send(debts);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // add password check here req.body.password
    try {
        const { date_origin, date_paid, debtor, receiver, debt_item, comment, } = req.body;
        const savedDebt = yield debtService_1.default.createDebt({
            date_origin,
            date_paid,
            debtor,
            receiver,
            debt_item,
            comment,
        });
        res.status(201).send(savedDebt);
    }
    catch (error) {
        res.json('Error: ' + error);
    }
}));
exports.default = router;
