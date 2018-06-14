import React from 'react'
import {Query} from "react-apollo";
import gql from 'graphql-tag';

/**
 * Created by harry on 2018/4/11.
 */
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
const DogPhoto = ({breed}) => {

    if (!breed)
        return null;

    console.log('child', breed);
    return (
        <Query
            query={getDogPhoto}
            variables={{breed}}
            notifyOnNetworkStatusChange
            pollInterval={10000}
        >
            {
                ({loading, error, data, refetch, networkStatus, client}) => {
                    console.log(client)
                    if (networkStatus === 4) return <p>Refetching!</p>;
                    if (loading) return <p>加载中</p>;
                    if (error) return <p>获取信息出错</p>;
                    console.log(data);
                    return (
                        <div>
                            <img
                                src={data.dog.displayImage}
                                alt=""
                                style={{height: '200px', width: '200px'}}
                            />

                            <div>
                                <button onClick={() => refetch()}>Refetch!</button>
                            </div>
                        </div>
                    )

                }
            }

        </Query>

    )
}

export default DogPhoto;
