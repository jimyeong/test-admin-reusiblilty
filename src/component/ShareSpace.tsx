import * as React from 'react';
import SmTit from './titles/SmTit';
import Btn from './btns/Btn';
import ImgOnly from './imgs/ImgOnly';
import "./shareSpace.less"



class ShareSpace extends React.Component<any, any> {

    render() {
        return (
            <div className="share-space">
                <div className="share-space-outer borderT">
                    <div className="title-area">
                        <SmTit text="공용공간"/>
                        <Btn
                                btnType="button"
                                btnName="관리하기"
                        />
                    </div>
                    <div className="share-space-thumb row">
                        <ImgOnly
                            imgSrc="http://sharekim.com/data/thumb/df54957a7c24758da9659835cb65688f.jpg"
                            imgAlt="공용공간 이미지"
                        />
                        <ImgOnly
                            imgSrc="http://sharekim.com/data/thumb/bc959c9ec830054080a9614568d7b6ee.jpg"
                            imgAlt="공용공간 이미지"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ShareSpace;