import * as React from 'react';
import './texts.less';

interface IMidTxtProps {
    text: string;
}

class MidTxt extends React.Component<IMidTxtProps, any> {

    render() {
        return (
            <p className="txt-mid">{this.props.text}</p>
        )
    }
}

export default MidTxt;