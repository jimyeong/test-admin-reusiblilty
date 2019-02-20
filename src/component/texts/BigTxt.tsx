import * as React from 'react';
import './texts.less';

interface IBigTxtProps {
    text: string;
}

class BigTxt extends React.Component<IBigTxtProps, any> {

    render() {
        return (
            <p className="txt-big">{this.props.text}</p>
        )
    }
}

export default BigTxt;