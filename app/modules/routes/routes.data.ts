import { ExcludedPaths } from "../../utility/authorize";
import { AuthRouter } from "../auth/auth.routes";
import { Route, Routes } from "./routes.types";




export const routes: Routes = [
    new Route('/auth',AuthRouter)
]

export const excludedPaths: ExcludedPaths[] = [
    { path: '/auth/login', method: 'POST' }
]