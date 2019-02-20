import * as React from 'react';

interface IPropsFromCtrl {
    labelName: string;
    inputType: string;
    placeHolder: string;
    labelClass: string;
}
class FormCtrl extends React.Component<IPropsFromCtrl, any> {

    render() {
        return (
            <div>
                <label 
                    className={this.props.labelClass}
                    htmlFor="basic-url">{this.props.labelName}</label>
                <div className="input-group mb-3">
                    <input 
                    type={this.props.inputType} 
                    className="form-control" 
                    placeholder={this.props.placeHolder}
                    aria-describedby="basic-addon3"/>
                </div>
            </div>
        )
    }
}

export default FormCtrl;