import { Jinaga as j, AuthorizationRules } from "jinaga";
import { User } from "./user";

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
        public domain: Domain,
        public user: User
    ) { }

    static inDomain(d: Domain) {
        return j.match(<Visit>{
            type: Visit.Type,
            domain: d
        });
    }

    static user(v: Visit) {
        (<any>v).has('user');
        return j.match(v.user);
    }
}

export function authorizeVisit(a: AuthorizationRules) {
    return (a
        .any(Domain.Type)
        .type(Visit.Type, j.for(Visit.user))
    );
}