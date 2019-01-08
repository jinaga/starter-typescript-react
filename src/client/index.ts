import { JinagaBrowser } from "jinaga";
import { Visit, Domain } from "../shared/model/visit";

const j = JinagaBrowser.create({
    httpEndpoint: '/jinaga'
});

(async () => {
    const domain = new Domain('myapplication');
    await j.fact(new Visit(domain));
    const visits = await j.query(domain, j.for(Visit.inDomain));

    const message = `You are visitor number ${visits.length}.`;
    const paragraph = document.createElement('p');
    paragraph.innerText = message;
    document.body.appendChild(paragraph);
})();