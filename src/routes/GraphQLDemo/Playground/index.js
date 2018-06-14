/**
 * Created by harry on 2018/4/11.
 */
import React from 'react';
import {Layout} from 'antd';
import gql from 'graphql-tag';
import {Query} from "react-apollo";

import DogPhoto from './query/DogPhoto';
import ConsumerFetch from './query/ConsumerFetch';
import AddTodo from './mutation/AddTodo';
import queryDogs from '../gql/dogs.graphql';

export default class GQPlayground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDog: null
        }

    }

    onDogSelected = (e) => {
        let selectedDog = e.target.value;
        this.setState(() => ({selectedDog}))
    }
    // Fetch GraphQL data with a Query component
    getGraphQLData = () => {
        return (
            <Query query={queryDogs}>
                {({loading, error, data}) => {
                    if (loading) 
                        return <p>正在通过 GraphQL 获取数据...</p>;
                    if (error) 
                        return <p>Error :(</p>;
                    if (data.dogs && data.dogs.length > 0) {
                        return (
                            <select name="dog" onChange={this.onDogSelected}>
                                {data
                                    .dogs
                                    .map(({id, breed}) => {
                                        return (
                                            <option key={id} value={breed}>
                                                {breed}
                                            </option>
                                        )
                                    })}
                            </select>
                        );
                    } else 
                        return <p>暂未获取到数据</p>;
                    }}
            </Query>
        )
    }

    render() {

        return (
            <Layout>
                <h3>Query Component</h3>
                {this.getGraphQLData()}
                <div>
                    <DogPhoto breed={this.state.selectedDog}/>
                </div>
                <div>
                    <ConsumerFetch/>
                </div>
                {/* <h3>Mutaiton Component</h3>
                <div>
                    <AddTodo/>
                </div> */}

            </Layout>
        )
    }
}
