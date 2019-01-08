import { JinagaServer, AuthorizationRules } from "jinaga";
import { Express } from "express";
import { authorizeVisit } from "../shared/model/visit";

export function configureJinaga(app: Express) {
    const pgConnection = process.env.JINAGA_POSTGRESQL ||
        'postgresql://dev:devpw@localhost:5432/myapplication';
    const { handler } = JinagaServer.create({
        pgKeystore: pgConnection,
        pgStore: pgConnection,
        authorization: configureAuthorization
    });

    app.use('/jinaga', handler);
}

function configureAuthorization(a: AuthorizationRules) {
    return (a
        .with(authorizeVisit)
    );
}