import * as React from 'react';
import MidTit from '../titles/MidTit';

interface IAddCardProps {
    mainTit: string;

}

class AddCard extends React.Component<IAddCardProps, any> {
    render() {
        return(
            <div className="add-card-item">
                <div className="add-card-item-inner">
                    <span className="card-icon">
                        <i className="cui-circle-x z cui-icon"/>
                    </span>
                    <MidTit 
                        text={this.props.mainTit}
                    />
                </div>
            </div>
        )
    }
}

export default AddCard;