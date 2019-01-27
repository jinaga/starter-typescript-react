import * as path from "path";
import { Express, static as ExpressStatic } from "express";

export function configureRoutes(app: Express) {
    app.get("/", (req, res, next) => {
        res.sendFile(path.join(__dirname, "./views/index.html"));
    });

    app.use("/scripts", ExpressStatic(path.join(__dirname, "scripts")));
}