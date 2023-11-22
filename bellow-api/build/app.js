"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const bellowRoutes_1 = __importDefault(require("./routes/bellowRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:4200", "http://localhost:3001"]
};
const connectionString = "mongodb://127.0.0.1:27017/socialDB";
mongoose_1.default.connect(connectionString).then(() => console.log("database connection successful!"), (err) => console.log("Error connecting to the database", err));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors(corsOptions));
// routes
app.use("/api/bellow", bellowRoutes_1.default);
app.use("/api/users", userRoutes_1.default);
app.use((req, res, next) => {
    res.status(404).end();
});
app.listen(3000);
