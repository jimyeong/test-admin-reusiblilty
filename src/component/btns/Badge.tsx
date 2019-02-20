import * as React from 'react';

interface IBadgeProps {
    badgeName: string;
}
class Btn extends React.Component<IBadgeProps, any> {

    render() {
        return (
            <span className="badge badge-primary">
                {this.props.badgeName}
            </span>
        )
    }
}

export default Btn;