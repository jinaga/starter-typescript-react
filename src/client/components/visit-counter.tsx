import { Watch } from "jinaga";
import * as React from "react";
import { Domain, Visit } from "../../shared/model/visit";
import { j } from "../jinaga-config";

export interface VisitCounterProps {
    domain: Domain
}

interface VisitCounterState {
    visits: number
}

export class VisitCounter extends React.Component<VisitCounterProps, VisitCounterState> {
    private watch: Watch<Visit, {}>;

    constructor(props) {
        super(props);
        this.state = {
            visits: 0
        };
    }

    componentDidMount() {
        this.watch = j.watch(this.props.domain, j.for(Visit.inDomain),
            visit => this.countVisit());
        j.fact(new Visit(this.props.domain));
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