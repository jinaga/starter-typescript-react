import * as React from "react";
import * as ReactDOM from "react-dom";
import { User, UserName } from "@shared/model/user";
import { App } from "./components/app";
import { j } from "./jinaga-config";

(async () => {
    const { userFact: user, profile } = await j.login<User>();

    // Query for the user's current name.
    const names = await j.query(user, j.for(UserName.forUser));
    if (names.length !== 1 || names[0].value != profile.displayName) {
        // Set their name if it is not set, in conflict, or different.
        await j.fact(new UserName(user, profile.displayName, names));
    }
    ReactDOM.render(
        <App user={user} />,
        document.getElementById('application-host'));
})().catch(err => console.error(err));
