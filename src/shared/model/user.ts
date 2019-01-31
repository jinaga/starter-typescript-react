import { Jinaga as j, AuthorizationRules } from "jinaga";

export class User {
    static Type = 'Jinaga.User';
    type = User.Type;

    constructor(
        public publicKey: string
    ) { }
}

export class UserName {
    static Type = 'MyApplication.User.Name';
    type = UserName.Type;

    constructor(
        public user: User,
        public value: string,
        public prior: UserName[]
    ) { }

    static user(n: UserName) {
        (<any>n).has('user');
        return j.match(n.user);
    }
}

export function authorizeUser(a: AuthorizationRules) {
    return (a
        .no(User.Type)
        .type(UserName.Type, j.for(UserName.user))
    );
}