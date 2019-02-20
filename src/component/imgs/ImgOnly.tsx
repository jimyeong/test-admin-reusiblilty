import * as React from 'react';


interface IImgOnlyProps {
    imgSrc: string;
    imgAlt: string;
}

class ImgOnly extends React.Component<IImgOnlyProps, any> {
    render() {
        return(
            <div className="thumb-item">
                <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
            </div>
        )
    }
}

export default ImgOnly;