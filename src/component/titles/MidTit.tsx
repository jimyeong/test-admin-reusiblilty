import * as React from 'react';
import './titles.less';

interface IMidTitProps {
    text: string;
}


class MidTit extends React.Component<IMidTitProps, any> {

    render() {
        return (
            <h4 className="tit-mid">{this.props.text}</h4>
        )
    }
}

export default MidTit;