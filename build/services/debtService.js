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
const debt_1 = __importDefault(require("../models/debt"));
const getAllDebts = () => __awaiter(void 0, void 0, void 0, function* () {
    const debts = yield debt_1.default.find({});
    return debts;
});
const createDebt = (newDebt) => __awaiter(void 0, void 0, void 0, function* () {
    const debtObject = new debt_1.default(Object.assign({}, newDebt));
    const saved = yield debtObject.save();
    return saved;
});
const updateDebt = (id) => {
    //const debt = debts.find(d => d.id === id)
    // change string to MongoDB id
    console.log(id);
    return null;
};
exports.default = {
    getAllDebts,
    createDebt,
    updateDebt,
};
