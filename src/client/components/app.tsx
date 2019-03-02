import * as React from "react";
import { Domain } from "@shared/model/visit";
import { VisitCounter } from "./visit-counter";
import { User } from "@shared/model/user";

export const App = ({ user }: { user: User }) => (
    <>
        <p>Welcome!</p>
        <VisitCounter user={user} domain={ new Domain('myapplication') } />
    </>
);