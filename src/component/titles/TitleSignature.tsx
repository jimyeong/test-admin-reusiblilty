import * as React from 'react';

import SmTit from '../titles/SmTit';
import Btn from '../btns/Btn';



class TitleSignature extends React.Component<any, any> {
    render() {
        return(
            <div className="title-area">
                <SmTit text="공용공간"/>
                <Btn
                        btnType="button"
                        btnName="관리하기"
                />
            </div>  
        )
    }
}

export default TitleSignature;