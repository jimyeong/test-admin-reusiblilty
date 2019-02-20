import * as React from 'react';
import FormHouses from '../component/FormHouses';
import HouseExposure from '../component/HouseExposure';
import AddRoomInfo from '../component/AddRoomInfo';
import HouseLife from '../component/HouseLife';
import ShareSpace from '../component/ShareSpace';
import HistoryRequestTable from '../component/HistoryRequestTable';
import './dashboard.less';

class Dashboard extends React.Component {

    render() {
        return(
            <div className="dashboard">
                <div className="row dashboard-inner">
                    <FormHouses/>
                    <HouseExposure/> 
                </div>
                <div className="room-info">
                    <AddRoomInfo/>
                    <ShareSpace/>
                    <HouseLife/>
                    <HistoryRequestTable
                        
                    
                    />
                </div>

            </div>
        )

    }
}

export default Dashboard