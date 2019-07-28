import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from './routes';

const App = props => {
    return(
        <Provider store={store}>
            <Router>
                <Switch>
                    {
                        routes.map((route, i) => {
                            return(
                                <Route key={i} {...route}/>
                            )
                        })
                    }
                </Switch>
            </Router>
        </Provider>
    )
}

export default App