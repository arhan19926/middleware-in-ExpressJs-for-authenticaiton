"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_data_1 = require("../users/user.data");
const auth_responses_1 = require("./auth.responses");
const authorize_1 = require("../../utility/authorize");
const login = (credentials) => {
    const user = user_data_1.usersData.find((u) => u.username === credentials.username &&
        u.password === credentials.password);
    if (!user) {
        console.log(credentials);
        throw auth_responses_1.AUTH_ERRORS.NOT_FOUND;
    }
    const token = (0, authorize_1.createToken)({ id: user.id, role: user.role });
    return {
        token,
        role: user.role,
        id: user.id
    };
};
exports.default = {
    login
};
//# sourceMappingURL=auth.service.js.map