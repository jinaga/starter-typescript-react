import { JinagaBrowser } from "jinaga";
import { User } from "../shared/model/user";
import { Domain, Visit } from "../shared/model/visit";

const j = JinagaBrowser.create({
    httpEndpoint: '/jinaga'
});

(async () => {
    const { userFact: user, profile } = await j.login<User>();

    const domain = new Domain('myapplication');
    await j.fact(new Visit(domain, user));
    const visits = await j.query(domain, j.for(Visit.inDomain));

    const message = `You are visitor number ${visits.length}.`;
    const paragraph = document.createElement('p');
    paragraph.innerText = message;
    document.body.appendChild(paragraph);
})();