import * as React from "react";
import { Domain } from "../../shared/model/visit";
import { VisitCounter } from "./visit-counter";

export const App = ({}) => (
    <>
        <p>Welcome!</p>
        <VisitCounter domain={ new Domain('myapplication') } />
    </>
);