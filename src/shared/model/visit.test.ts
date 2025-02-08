import { Jinaga, JinagaTest } from "jinaga";
import { User } from "./user";
import { Domain, Visit } from "./visit";
import { model } from "./model";

var j: Jinaga;

beforeEach(() => {
    j = JinagaTest.create({
        user: new User("publicKey"),
    });
});

const visitsInDomain = model.given(Domain).match(domain =>
    domain.successors(Visit, visit => visit.domain).select(visit => Jinaga.hash(visit))
);

test("Visit count is initially zero", async () => {
    const domain = new Domain('myapplication');
    const visits = await j.query(visitsInDomain, domain);
    expect(visits.length).toBe(0);
});

test("Visit count increments to 1", async () => {
    const { userFact: user } = await j.login<User>();
    const domain = new Domain('myapplication');
    await j.fact(new Visit(domain, user, new Date()));
    const visits = await j.query(visitsInDomain, domain);
    expect(visits.length).toBe(1);
});
