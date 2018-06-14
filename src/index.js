import React from 'react'
import ReactDOM from 'react-dom'
import {useStrict} from 'mobx'
import {Provider} from 'mobx-react'
import {BrowserRouter as Router} from 'react-router-dom'
import {ApolloProvider} from 'react-apollo';

import App from './routes/App'
import GraphQLClient from './graphql/apolloClient';
import appStore from './stores/appStore'

const stores = {appStore}

useStrict(true)




ReactDOM.render(
    <ApolloProvider client={GraphQLClient}>
        <Provider {...stores}>
            <Router basename="/">
                <App />
            </Router>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
)