"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const debts_1 = __importDefault(require("./routes/debts"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default()); // eslint-disable-line
app.use(express_1.default.static('build'));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : '';
const url = (_b = process.env.MONGODB_URI) !== null && _b !== void 0 ? _b : '';
console.log('connecting to MongoDB Atlas');
mongoose_1.default
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((_result) => {
    console.log('connected to MongoDB');
})
    .catch((error) => {
    console.log('error connecting to MongoDB: ' + error);
});
app.get('/', (_req, res) => {
    res.send('hello');
});
// API routes
app.use('/api/debts', debts_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
