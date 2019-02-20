import * as React from 'react';
import ImgCard from './imgs/ImgCard';
import AddCard from './imgs/AddCard';
import './addRoomInfo.less';

class AddRoomInfo extends React.Component {

    render() {
        return (
            <div className="room-info-outer">
                <div className="card-list row">
                    <ImgCard
                        mainTit="집전체"
                        badgeName="공실"
                        imgSrc="http://sharekim.com/data/thumb/32650a9efcd17ffa49693177a0e2f140.jpg"
                        imgAlt="공실이미지"
                    />
                    <ImgCard
                        mainTit="RoomA"
                        badgeName="공실정보 등록안됨"
                        imgSrc="http://sharekim.com/data/thumb/29060a4f76186f118acdf14aaccbe5d8.jpg"
                        imgAlt="공실이미지"
                    />
                    <ImgCard
                        mainTit="집전체"
                        badgeName="만실"
                        imgSrc="http://sharekim.com/data/thumb/cf57f02c9eb299af06b5ca8e862d71ee.jpg"
                        imgAlt="공실이미지"
                    />

                    <ImgCard
                        mainTit="집전체"
                        badgeName="만실"
                        imgSrc="http://sharekim.com/data/thumb/cf57f02c9eb299af06b5ca8e862d71ee.jpg"
                        imgAlt="공실이미지"
                    />

                    <AddCard
                        mainTit="룸 등록"
                    />      
                </div>
            </div>
        )
    }
}

export default AddRoomInfo;