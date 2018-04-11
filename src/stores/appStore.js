import {observable, action, computed, runInAction} from "mobx"

import {login,requestFilterList} from '../services/app'
import {getBreadInfo} from '../utils'

class appStore {

    @observable administratorInfo
    @observable isLogin
    @observable siderMode
    @observable collapsed
    @observable loading
    @observable tabBarList
    @observable filterList

    constructor() {
        this.administratorInfo = {
            name: 'harry',
            level: 3
        }
        this.isLogin = false
        this.collapsed = false
        this.siderMode = 'inline'
        this.loading = false
        this.filterList = []
        this.tabBarList = [{
            pathname: window.location.pathname === '/' ? '/base' : window.location.pathname,
            active: true,
            title: getBreadInfo(window.location.pathname).reverse()[0]
        }]
    }

    @action.bound addTab(tab) {
        this.tabBarList.map(item => item.active = false)
        this.tabBarList.push(tab)
    }

    @action.bound activeTabChanged(pathname) {
        this.tabBarList.map(item => item.active = item.pathname === pathname)
    }

    @action.bound removeTab(pathname) {
        const removeKey = this.tabBarList.findIndex((item, index) => pathname === item.pathname)
        this.tabBarList.splice(removeKey, 1)
        this.tabBarList[this.tabBarList.length - 1].active = true
    }

    @action.bound onCollapse(collapsed) {
        this.collapsed = !this.collapsed
        this.siderMode = collapsed ? 'vertical' : 'inline'
    }

    @action loginSubmit = async values => {
        try {
            const data = await login(values)
            runInAction(() => {
                this.isLogin = true
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    @action getFilterList = async values => {
        try {
            const data = await requestFilterList(values)
            runInAction(() => {
                this.filterList = data.list;
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    @action.bound logout() {
        this.isLogin = false
    }

    @action showLoading() {
        this.loading = true
    }

    @action hideLoading() {
        this.loading = false
    }

}

export default new appStore()