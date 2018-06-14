/**
 * Created by harry on 2018/4/11.
 */
//最简单的client 通过apollo-boost
import ApolloClient from "apollo-boost";
const GraphQLClient = new ApolloClient({
    uri: "https://nx9zvp49q7.lp.gql.zone/graphql"//query
    //uri: "https://8v9r9kpn7q.lp.gql.zone/graphql" //mutation
    //uri: "http://localhost:3010/graphql" //githunt
});

//因为apollo-boost提供的一些功能不充足有时候需要手动集成 apollo boost功能
//需要安装 apollo-client apollo-cache-inmemory 
//apollo-link-http apollo-link-error apollo-link
/* import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const GraphQLClient = new ApolloClient({
    link: ApolloLink.from([
        onError((graphQLErrors, networkError) => {
            if(graphQLErrors){
                graphQLErrors.map(({ message, locations, path}) => 
                console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,)
            );
            }
            if(networkError){
                console.log(`[Network error]: ${networkError}`);
            }
        }),
        new HttpLink({
            uri: 'https://nx9zvp49q7.lp.gql.zone/graphq',
            credentials: 'same-origin'
        })
    ]
    ),
    cache: new InMemoryCache()
}) */


export default GraphQLClient;