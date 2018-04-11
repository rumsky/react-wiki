import {Layout, Menu, Icon} from 'antd'
import {observer, inject} from 'mobx-react'
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {breadConfig} from '../../utils'
import styles from './SiderMenu.less'


const SubMenu = Menu.SubMenu
const {Sider} = Layout


@inject('appStore') @withRouter @observer
class SiderMenu extends Component {


    onSiderClick(e) {
        const {location, history} = this.props
        if (location.pathname === e.key) return
        history.push(e.key)
    }

    render() {

        const {appStore, location} = this.props

        let defaultSelectedKeys = ''
        switch (true) {
            case['/', '/base'].indexOf(location.pathname) !== -1:
                defaultSelectedKeys = '/base'
                break
            case['/hardpoint', '/hardpoint'].indexOf(location.pathname) !== -1:
                defaultSelectedKeys = '/hardpoint'
                break
            case['/performance', '/performance'].indexOf(location.pathname) !== -1:
                defaultSelectedKeys = '/performance'
                break;
            case['/interview', '/interview'].indexOf(location.pathname) !== -1:
                defaultSelectedKeys = '/interview'
                break;
            case['/playground', '/playground'].indexOf(location.pathname) !== -1:
                defaultSelectedKeys = '/playground'
                break;
            case['/graphql', '/graphql'].indexOf(location.pathname) !== -1:
                defaultSelectedKeys = '/graphql'
                break
        }

        return (
            <Sider
                collapsible
                collapsed={appStore.collapsed}
                onCollapse={appStore.onCollapse}
            >
                <div className={styles.logo} style={{visibility: appStore.collapsed ? 'hidden' : 'visible'}}>React
                    Wiki
                </div>
                <Menu
                    theme="dark"
                    mode={appStore.siderMode}
                    defaultSelectedKeys={[defaultSelectedKeys]}
                    selectedKeys={[defaultSelectedKeys]}
                    defaultOpenKeys={['知识积累']}
                    onClick={this.onSiderClick.bind(this)}
                >
                    <SubMenu
                        key="知识积累"
                        title={<span><Icon type="user"/><span className="nav-text">知识积累</span></span>}
                    >
                        <Menu.Item key="/base">基础知识</Menu.Item>
                        <Menu.Item key="/hardpoint">中高级知识</Menu.Item>
                        <Menu.Item key="/performance">性能优化</Menu.Item>
                        <Menu.Item key="/interview">Collection</Menu.Item>
                        <Menu.Item key="/playground">Playground</Menu.Item>
                        <Menu.Item key="/graphql">GraphQL</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

export default SiderMenu