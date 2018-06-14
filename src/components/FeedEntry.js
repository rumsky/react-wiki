import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import {withApollo} from 'react-apollo';
import gql from 'graphql-tag';
import {filter, propTypes} from 'graphql-anywhere';
import VoteButtons from './VoteButtons';

const FeedEntry = ({entry, client, onVote}) => {

    const {
        commentCount,
        repository: {
            full_name,
            html_url,
            owner: {
                avatar_url
            },
            description
        }
    } = entry;

    const repoLink = `/${full_name}`;

    return (
        <div className="media">
            <div className="media-vote">
                <VoteButtons
                    canVote={true}
                    entry={filter(VoteButtons.fragments.entry, entry)}
                    onVote={type => onVote({repoFullName: full_name, type})}/>
            </div>
            <div className="media-left">
                <button>
                    <img
                        className="media-object"
                        style={{
                        width: '64px',
                        height: '64px'
                    }}
                        src={avatar_url}
                        role="presentation"
                        alt={avatar_url}/>
                </button>
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    <a href={html_url} className="">{full_name}</a>
                </h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default FeedEntry;