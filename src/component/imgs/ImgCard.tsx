import * as React from 'react';
import MidTit from '../titles/MidTit';
import Badge from '../btns/Badge';
import './img.less';


interface IImageCardProps {
    imgSrc: string;
    imgAlt: string;
    mainTit: string;
    badgeName: string;
}

class ImgCard extends React.Component<IImageCardProps, any> {

    render() {
        return (
            <div className="card-item">
                <div className="card-inner">
                    <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
                    <div className="card-screen"/>
                </div>
                <div className="card-outer">
                    <MidTit 
                        text={this.props.mainTit}
                    />
                    <Badge
                        badgeName={this.props.badgeName}
                    /> 
                </div>
            </div>
        )
    }
}

export default ImgCard;