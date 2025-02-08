import { buildModel, User, UserName } from "jinaga";
import { Domain, Visit } from "./visit";

export const model = buildModel(b => b
    .type(User)
    .type(UserName, n => n
        .predecessor("user", User)
        .predecessor("prior", UserName)
    )
    .type(Domain)
    .type(Visit, v => v
        .predecessor("domain", Domain)
        .predecessor("user", User)
    )
)
