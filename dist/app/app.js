"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const routes_register_1 = require("./modules/routes/routes.register");
const startServer = () => {
    const app = (0, express_1.default)();
    const { PORT } = process.env;
    (0, routes_register_1.RegisterRoutes)(app);
    app.listen(PORT, () => {
        console.log(`Server started listening on PORT : ${PORT}`);
    });
};
exports.startServer = startServer;
//# sourceMappingURL=app.js.map