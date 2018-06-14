/**
 * Created by harry on 2018/4/11.
 */
import React from 'react';
import {Layout, Tabs} from 'antd'
import GQPlayground from './Playground/index';
import GitHunt from './GitHunt/index';

const TabPane = Tabs.TabPane;

export default class GraphQL extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = () => {}

    render() {

        return (
                <Tabs defaultActiveKey="1" onChange={this.handleChange}>
                    <TabPane tab="Playground" key="1">
                        <GQPlayground/>
                    </TabPane>
                    <TabPane tab="GitHunt" key="2">
                    <div className="" style={{overflow:'auto',width:'100%'}}>
                    {/* <GitHunt/> */}
                    </div>
                    
                    </TabPane>
                </Tabs>

        )
    }
}
