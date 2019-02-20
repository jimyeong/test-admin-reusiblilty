import * as React from 'react';
import InputHouseName from './form/FormCtrl';
import InputHouseLocation from './form/FormCtrl';
import FormTextArea from './form/FormTextArea';
import ImgMainHouse from './imgs/ImgOnly';
import SmTit from './titles/SmTit';
import Btn from './btns/Btn';
import './form/form.less';
import './formHouse.less'


class FormHouses extends React.Component {

    render() {
        return (
            <div className="col-sm-8 houseForm">
                <div className="house-outer borderT">
                    <div className="title-area">
                        <SmTit
                            text="하우스 정보"
                        />
                        <Btn
                            btnType="button"
                            btnName="수정"
                        />
                    </div>
                    <div className="house-inner row">
                        <div className="column-left col-7">
                            <InputHouseName 
                                labelName='하우스 이름'
                                labelClass='house-label'
                                placeHolder='houseName'
                                inputType='text'
                            />
                            <InputHouseLocation
                                labelName='하우스 소재지'
                                labelClass='house-label'
                                placeHolder='houseLocation'
                                inputType='text'
                            />
                            <FormTextArea
                                label='하우스 소개'
                                labelClass='house-label'
                                cols={3}
                                rows={3}
                            />
                        </div>
                        <div className="column-right col-5">
                            <SmTit
                                text="대표 이미지"
                            />
                            <ImgMainHouse
                                imgSrc="http://sharekim.com/data/image/c53b6b7f80d8e969f1b236bf1058e1af.jpg"
                                imgAlt="하우스 메인이미지"
                            />
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default FormHouses;