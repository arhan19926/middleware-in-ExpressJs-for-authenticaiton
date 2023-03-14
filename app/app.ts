import express from "express";
import { RegisterRoutes } from "./modules/routes/routes.register";



export const startServer = () => {

    const app = express();

    const { PORT } = process.env;

    RegisterRoutes(app)

    app.listen(PORT, () => {
        console.log(`Server started listening on PORT : ${PORT}`);

    })
}