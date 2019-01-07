import { JinagaServer } from "jinaga";
import { Express } from "express";

export function configureJinaga(app: Express) {
    const pgConnection = process.env.JINAGA_POSTGRESQL ||
        'postgresql://dev:devpw@localhost:5432/myapplication';
    const { handler } = JinagaServer.create({
        pgKeystore: pgConnection,
        pgStore: pgConnection
    });

    app.use('/jinaga', handler);
}