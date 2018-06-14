import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import {Layout} from 'antd'
import DropOption from '../../components/Layout/DropOption.js'
import OperationBar from '../../components/Layout/OperationBar.js'

const {Content} = Layout


@inject('appStore') @withRouter @observer
class Performance extends Component {

    onMenuClick(id) {
        this.props.history.push('/performanceEdit')
    }

    render() {

        return (
            <Layout>
                性能优化
            </Layout>
        )
    }
}

export default Performance