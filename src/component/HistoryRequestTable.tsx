import * as React from 'react';
import TitleSignature from './titles/TitleSignature';
import HistoryRequestTableItem from './HistoryRequestTableItem';
import './historyTable.less';


interface IHistoryProps {

}

interface IHistoryState {
    data: IHistroyReq[]
}

interface IHistroyReq {
    id: number;
    reqKinds: string;
    name: string;
    reqState: string;
    dateTime: any;
}
class HistoryRequestTable extends React.Component<IHistoryProps, IHistoryState> {

    state: IHistoryState = {
        data: [
            {id: 0, reqKinds: "입주신청", name: "이정문", reqState: "신규문의", dateTime: new Date()},
            {id: 1, reqKinds: "견학신청", name: "정미경", reqState: "신규문의", dateTime: new Date()},
            {id: 2, reqKinds: "1:1문의", name: "정미경", reqState: "신규문의", dateTime: new Date()},
            {id: 3, reqKinds: "입주신청", name: "정미경", reqState: "신규문의", dateTime: new Date()},
            {id: 4, reqKinds: "입주신청", name: "정미경", reqState: "신규문의", dateTime: new Date()},
            {id: 5, reqKinds: "1:1문의", name: "이정문", reqState: "신규문의", dateTime: new Date()}
        ]
    }

    renderTable = (): any => {
        const Items = this.state.data.map((item: IHistroyReq, i: number) => {
            return <HistoryRequestTableItem {...item} key={i}/>
        })
        return Items;
    }

    render() {
        return(
        <div className="HistoryRequestTable">
            <div className="inner borderT">
                <TitleSignature/>
            </div>    
            <table> 
                <thead>
                    <tr>
                        <th>문의종류</th>
                        <th>이름</th>
                        <th>문의상태</th>
                        <th>신청일</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTable()}
                </tbody>
            </table>
        </div>
        )
    }
}

export default HistoryRequestTable;