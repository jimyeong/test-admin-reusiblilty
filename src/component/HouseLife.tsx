import * as React from 'react';
import SmTit from './titles/SmTit';
import Btn from './btns/Btn';
import ImgOnly from './imgs/ImgOnly';
import "./houselife.less"



class HouseLife extends React.Component<any, any> {

    render() {
        return (
            <div className="house-life">
                <div className="house-life-outer borderT">
                    <div className="title-area">
                        <SmTit text="하우스 라이프"/>
                        <Btn
                                btnType="button"
                                btnName="관리하기"
                        />
                    </div>
                    <div className="house-life-thumb row">
                        <ImgOnly
                            imgSrc="http://sharekim.com/data/thumb/850f1c9b2df867040d2686a8d76a75d7.jpg"
                            imgAlt="하우스 라이프 이미지"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default HouseLife;