import { Users } from "../users/user.type";
import { ICredentials } from "./auth.types";
import { usersData } from '../users/user.data';
import { AUTH_ERRORS } from "./auth.responses";
import { createToken } from "../../utility/authorize";

const login = (credentials: ICredentials) => {

    const user = usersData.find(
        (u) => u.username === credentials.username &&
            u.password === credentials.password)
    if (!user) {
        console.log(credentials);
        
        throw AUTH_ERRORS.NOT_FOUND;
    }

    const token = createToken({ id: user.id, role: user.role });

    return {
        token,
        role: user.role,
        id: user.id
    }
};



export default {
    login
}