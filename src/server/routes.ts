import * as path from "path";
import { Express } from "express";

export function configureRoutes(app: Express) {
    app.get("/", (req, res, next) => {
        res.sendFile(path.join(__dirname, "views/index.html"));
    });

    app.get("/scripts/main.js", (req, res, next) => {
        res.sendFile(path.join(__dirname, "scripts/main.js"));
    });
}