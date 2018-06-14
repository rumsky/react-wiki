/**
 * Created by harry on 2018/4/12.
 */
import React from 'react';
import {ApolloConsumer} from 'react-apollo';
import gql from 'graphql-tag';
const getDogPhoto = gql(
    `
        query dog($breed: String!) {
            dog(breed: $breed){
                id
                displayImage
            }
        
        }
    `
);

class ConsumerFetch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dog: null,
        }
    }

    onDogFetched = dog => this.setState(() => ({dog}));

    render(){
        return (
            <ApolloConsumer>
                {
                    client => (
                        <div>
                            {this.state.dog && <img src={this.state.dog.displayImage} alt=""/>}
                            <button
                                onClick = {
                                    async () => {
                                        const { data } = await client.query({
                                            query: getDogPhoto,
                                            variables: { breed: "bulldog" }
                                        });
                                        this.onDogFetched(data.dog);
                                    }
                                }
                            >Consumer fetch!</button>
                        </div>

                    )
                }
            </ApolloConsumer>
        )
    }
}

export default ConsumerFetch;
