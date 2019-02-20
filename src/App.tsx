import * as React from 'react';
import { Router } from 'react-router';
import {createBrowserHistory} from 'history';
import Dashboard from './pages/Dashboard';


const history = createBrowserHistory();

class App extends React.Component<any> {

    componentDidMount() {

    }


    public render() {

        return(
            <Router history={ history }>
                <React.Fragment>
                    <Dashboard/>
                </React.Fragment>
            </Router>
        )
    }
}

export default App;