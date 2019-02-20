import * as React from 'react';
import Badge from "../component/btns/Badge";

interface HistoryRequestTableItemProps{
    id: number;
    reqKinds: string;
    name: string;
    reqState: string;
    dateTime: any;
    key: number;
}

class HistoryRequestTableItem extends React.Component<HistoryRequestTableItemProps, any> {

    constructor(props: HistoryRequestTableItemProps) {
        super(props)
    }

    render() {
        console.log('this.props', this.props)
        return(
            <React.Fragment>
                <tr>
                    <td>
                        <Badge badgeName={this.props.reqKinds} />
                    </td>
                    <td>{this.props.name}</td>
                    <td>{this.props.reqState}</td>
                    <td>{this.props.dateTime.toLocaleTimeString().toString()}</td>
                </tr>
            </React.Fragment>
        )
    }

}

export default HistoryRequestTableItem