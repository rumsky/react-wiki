import React from 'react';
import {Query, Mutation} from 'react-apollo';

import Feed from '../../../components/Feed'
import FEED_QUERY from '../gql/FeedQuery.graphql';
import GQ_TEST from '../gql/githunttest.graphql';
import VOTE_MUTATION from '../gql/Vote.graphql';
import './GitHunt.less';
class GitHunt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {match} = this.props;
        return (

            <div>
                <Mutation mutation={VOTE_MUTATION}>
                    {mutate => (
                        <Query
                            query={FEED_QUERY}
                            variables={{
                            type: 'TOP',
                            offset: 0,
                            limit: 10
                        }}
                            fetchPolicy="cache-and-network">
                            {({loading, data, fetchMore}) => {
                                return (
                                    <div>

                                        <Feed
                                            entries={data.feed || []}
                                            onVote={({repoFullName, type}) => mutate({
                                            variables: {
                                                repoFullName,
                                                type
                                            }
                                        })}
                                            onLoadMore={() => {
                                            console.log('loadmore');
                                        }}></Feed>

                                    </div>
                                )
                            }
}
                        </Query>
                    )
}

                </Mutation>
            </div>
        )
    }
}

export default GitHunt;