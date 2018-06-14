import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import Bundle from '../components/Common/Bundle'
import lazyLogin from 'bundle-loader?lazy!./Login/Login.js'
import lazyMain from 'bundle-loader?lazy!./Main/Main.js'

const Login = () => (
    <Bundle load={lazyLogin}>
        {(Login) => <Login />}
    </Bundle>
)

const Main = () => (
    <Bundle load={lazyMain}>
        {(Main) => <Main />}
    </Bundle>
)

@inject('appStore') @withRouter @observer
class App extends Component {

    componentDidMount() {
        // preloads the rest
        // lazyLogin(() => {})
        // lazyMain(() => {})
    }

    render() {
        /*const {isLogin} = this.props.appStore
        return isLogin ? <Main /> : <Login />*/
        return <Main/>
    }
}

export default App