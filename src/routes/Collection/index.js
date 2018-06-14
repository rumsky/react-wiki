import React, {Component} from 'react'
import {Layout} from 'antd'
import {inject, observer} from 'mobx-react';
import Completer from './components/Completer'
@inject('appStore') @observer
class Collection extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.appStore;

        this.state = {
            value: '',
        }
    }

    handleChange = (value) => {
        this.store.getFilterList(this.state.value);
    }

    handleSelectedItem = (value) => {
        this.setState({value:value});
    }

    render() {
        const {filterList} = this.store;
        return (
            <Layout>
                <Completer
                    value={this.state.value}
                    onChange={this.handleChange}
                    filterList={filterList.toJS()}
                    onSelectedItem={this.handleSelectedItem}
                />
            </Layout>
        )
    }
}

export default Collection