import { AuthorizationRules, Model } from "jinaga";

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
}

export const authorizeUser = (model: Model)  => (a: AuthorizationRules) => a
    .any(User)
    .type(UserName, name => name.user)
    ;
