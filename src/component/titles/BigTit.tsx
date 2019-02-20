import * as React from 'react';
import './titles.less';

interface IMidTitProps {
    text: string;
}

class BigTit extends React.Component<IMidTitProps, any> {

    render() {
        return (
            <h2 className="tit-big">{this.props.text}</h2>
        )
    }
}

export default BigTit;