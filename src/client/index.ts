import { JinagaBrowser } from "jinaga";

const j = JinagaBrowser.create({
    httpEndpoint: '/jinaga'
});

function visitsInDomain(d) {
    return j.match({
        type: 'Visit',
        domain: d
    });
}

const domain = {
    type: 'Application',
    name: 'My Application'
};
j.fact({
    type: 'Visit',
    time: new Date(),
    domain
}).then(visit => {
    return j.query(domain, j.for(visitsInDomain));
}).then(visits => {
    const message = `You are visitor number ${visits.length}.`;
    const paragraph = document.createElement('p');
    paragraph.innerText = message;
    document.body.appendChild(paragraph);
});