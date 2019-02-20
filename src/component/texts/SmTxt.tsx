import * as React from 'react';
import './texts.less';

interface ISmTxtProps {
    text: string;
}

class SmTxt extends React.Component<ISmTxtProps, any> {

    render() {
        return (
            <p className="txt-sm">{this.props.text}</p>
        )
    }
}

export default SmTxt;