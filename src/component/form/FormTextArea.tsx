import * as React from 'react';

interface IPropsFromTextArea {
    cols: number;
    rows: number;
    label: string;
    labelClass: string;
}
class FormTextArea extends React.Component<IPropsFromTextArea, any> {

    render() {
        return(
            
        <div className="form-group">
            <label className={this.props.labelClass} htmlFor="exampleFormControlTextarea1">{this.props.label}</label>
            <textarea className="form-control custom-txt-area" cols={this.props.cols} rows={this.props.rows}/>
        </div>
        )

    }
}

export default FormTextArea;