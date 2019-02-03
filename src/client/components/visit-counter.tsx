import { Watch } from "jinaga";
import * as React from "react";
import { Domain, Visit } from "../../shared/model/visit";
import { j } from "../jinaga-config";
import { User, UserName } from "../../shared/model/user";

export interface VisitCounterProps {
    user: User,
    domain: Domain
}

interface VisitCounterState {
    visits: number
}

export class VisitCounter extends React.Component<VisitCounterProps, VisitCounterState> {
    private watch: Watch<Visit, {}>;

    constructor(props: VisitCounterProps) {
        super(props);
        this.state = {
            visits: 0
        };
    }

    componentDidMount() {
        (async () => {
            // Record this user's visit.
            await j.fact(new Visit(this.props.domain, this.props.user));
        })().catch(err => {
            console.error(err);
        });
        this.watch = j.watch(this.props.domain, j.for(Visit.inDomain),
            visit => this.countVisit());
    }

    componentWillUnmount() {
        this.watch.stop();
    }

    render() {
        return (this.state.visits
            ? <p>You are visitor number {this.state.visits}.</p>
            : null
        );
    }

    countVisit() {
        this.setState({
            ...this.state,
            visits: this.state.visits + 1
        });
    }
}