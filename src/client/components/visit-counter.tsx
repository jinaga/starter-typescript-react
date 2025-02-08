import { model } from "@shared/model/model";
import { User } from "@shared/model/user";
import { Domain, Visit } from "@shared/model/visit";
import { useSpecification } from "jinaga-react";
import * as React from "react";
import { j } from "../jinaga-config";

const visitsInDomain = model.given(Domain).match(domain =>
    domain.successors(Visit, visit => visit.domain).select(visit => j.hash(visit))
)

interface VisitCounterProps {
    user: User;
    userDisplayName: string;
    domain: Domain;
}

export const VisitCounter = ({user, userDisplayName, domain}: VisitCounterProps) => {
    const visits = useSpecification(j, visitsInDomain, domain);

    React.useEffect(() => {
        // Record this user's visit.
        j.fact(new Visit(domain, user, new Date()))
            .catch(err => console.error(err));
    }, []);

    return visits.data ? (
        <p>Welcome, {userDisplayName}. You are visitor number {visits.data.length}.</p>
    ) : (
        <p>Loading...</p>
    );
}
