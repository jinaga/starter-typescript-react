import { collection, field, useJinaga } from "jinaga-react";
import * as React from "react";
import { User } from "../../shared/model/user";
import { Domain, Visit } from "../../shared/model/visit";
import { j } from "../jinaga-config";

export interface VisitCounterProps {
    user: User;
    domain: Domain;
}

interface VisitViewModel {
    key: string;
}

interface VisitCounterState {
    visits: VisitViewModel[];
}

export const VisitCounter = ({ user, domain }: VisitCounterProps) => {
    const state = useJinaga<Domain, VisitCounterState>(j, domain, [
        collection('visits', j.for(Visit.inDomain), v => v.key, [
            field('key', v => j.hash(v))
        ])
    ]);

    React.useEffect(() => {
        // Record this user's visit.
        j.fact(new Visit(domain, user))
            .catch(err => console.error(err));
    }, []);

    return (state.visits.length > 0
        ? <p>You are visitor number {state.visits.length}.</p>
        : null
    );
};