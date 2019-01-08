import { Jinaga as j, AuthorizationRules } from "jinaga";

export class Domain {
    static Type = 'MyApplication.Domain';
    type = Domain.Type;

    constructor(
        public identifier: string
    ) { }
}

export class Visit {
    static Type = 'MyApplication.Visit';
    type = Visit.Type;
    time = new Date();

    constructor(
        public domain: Domain
    ) { }

    static inDomain(d: Domain) {
        return j.match(<Visit>{
            type: Visit.Type,
            domain: d
        });
    }
}

export function authorizeVisit(a: AuthorizationRules) {
    return (a
        .any(Domain.Type)
        .any(Visit.Type)
    );
}