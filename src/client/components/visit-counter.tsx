import { User } from "@shared/model/user";
import { Domain, Visit } from "@shared/model/visit";
import { array, field, jinagaContainer, specificationFor } from "jinaga-react";
import * as React from "react";
import { j } from "../jinaga-config";

const visitCounterSpec = specificationFor(Domain, {
    domain: field(d => d),
    visits: array(j.for(Visit.inDomain), {
        hash: field(v => j.hash(v))
    })
});

const visitCounterMapping = visitCounterSpec<{
    user: User
}>(({ domain, visits, user }) => {
    React.useEffect(() => {
        // Record this user's visit.
        j.fact(new Visit(domain, user, new Date()))
            .catch(err => console.error(err));
    }, []);

    return (
        <p>You are visitor number {visits.length}.</p>
    );
});

export const VisitCounter = jinagaContainer(j, visitCounterMapping);