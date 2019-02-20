import * as React from 'react';
import SmTit from './titles/SmTit';
import MidTit from './titles/MidTit';
import BigTxt from './texts/BigTxt';
import Btn from './btns/Btn';
import './form/form.less';
import './houseExposure.less'


class HouseExposure extends React.Component {

    render() {
        return (
            <div className="col-sm-4 houseExposure">
                <div className="houseExposure-outer borderT">
                    <div className="title-area clearfix">
                        <SmTit
                            text="하우스 노출정보"
                        />
                    </div>
                    <div className="house-inner">
                        <SmTit
                            text="하우스 노출여부"
                        />
                        <div className="row">
                            <Btn
                                btnType="button"
                                btnName="노출"
                            />
                            <Btn
                                btnType="button"
                                btnName="비노출"
                            />
                        </div>
                        <div className="house-notice-box">
                            <SmTit
                                text="하우스 프로모션"
                            />
                            <div className="house-notice-message">
                                <MidTit text="하우스 프로모션 혜택"/>
                                <BigTxt text="1. 다른 일반 하우스들 보다 위에 노출됩니다."/>
                                <BigTxt text='2. 하우스 목록에 "공실"로 홍보할 수 있습니다.'/>
                                <BigTxt text="3. 입주문의, 견학문의 등 사용자와 소통할 수 있는 채널이 열립니다."/>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default HouseExposure;