import React from 'react';
import { Query, Mutation} from 'react-apollo';

import Feed from '../../../components/Feed'
import FEED_QUERY from '../gql/FeedQuery.graphql';
class GitHunt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { match } = this.props;
        return (
            <div>
            <Query
                query={FEED_QUERY}
                variables={
                    {
                        type: 'TOP',
                        offset: 0,
                        limit: 10,
                    }
                }
                fetchPolicy="cache-and-network"
            >
                {
                    ({loading, data, fetchMore}) => {
                        debugger
                        return (
                            <div>
                                <Feed
                                    entries={data.feed || []}
                                >

                                </Feed>

                            </div>
                        )
                    }
                }
            </Query>
            </div>
        )
    }
}

export default GitHunt;