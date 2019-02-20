import * as React from 'react';
import './titles.less';


interface ISmTitProps {
    text: string;
}

class SmTit extends React.Component<ISmTitProps, any> {

    render() {
        return (
            <h4 className="tit-sm">{this.props.text}</h4>
        )
    }
}

export default SmTit;