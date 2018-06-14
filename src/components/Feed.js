
import React from 'react';
import PropTypes from 'prop-types';
import {propType} from 'graphql-anywhere';

import FeedEntry from './FeedEntry';


const Feed = ({ entries = [], onVote, onLoadMore }) => {
    return (
        <div>
            {
                entries.map(entry => (
                <FeedEntry entry={entry} onVote={onVote} key={entry.id}/>
                ))
            }
            <button onClick={onLoadMore}>Load More</button>
        </div>
    )
};

export default Feed;