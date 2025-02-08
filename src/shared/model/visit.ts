import { AuthorizationRules, Model } from "jinaga";
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

    constructor(
        public domain: Domain,
        public user: User,
        public time: Date | string
    ) { }
}

export const authorizeVisit = (model: Model) => (a: AuthorizationRules) => a
    .any(Domain)
    .type(Visit, visit => visit.user)
    ;
