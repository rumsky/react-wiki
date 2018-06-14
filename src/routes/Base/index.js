import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {Layout} from 'antd'
import CommonHeader from './CommonHeader'


@inject('appStore') @observer
class Base extends Component {
    render() {
        return (
            <Layout>
                基础知识
                <CommonHeader msg="函数组件"/>
            </Layout>
        )
    }
}

export default Base