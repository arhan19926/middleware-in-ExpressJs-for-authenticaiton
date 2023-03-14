"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const routes_data_1 = require("./routes.data");
const RegisterRoutes = (app) => {
    app.use((0, express_1.json)());
    app.use((0, authorize_1.authorize)(routes_data_1.excludedPaths));
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.ResponseHandler(null, err));
    });
};
exports.RegisterRoutes = RegisterRoutes;
//# sourceMappingURL=routes.register.js.map