import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'antd';
import gql from 'graphql-tag';
import { propType } from 'graphql-anywhere';

export default function VoteButtons({
  canVote,
  onVote,
  entry: { score, vote },
}) {
  const buttonClasses = classNames('btn', 'btn-score', {
    invisible: !canVote,
  });

  function submitVote(type) {
    const voteValue = {
      UP: 1,
      DOWN: -1,
    }[type];

    onVote(vote.vote_value === voteValue ? 'CANCEL' : type);
  }

  return (
    <span>
      <button
        className={classNames(buttonClasses, { active: vote.vote_value === 1 })}
        onClick={() => submitVote('UP')}
      >
        <Icon type="caret-up" />
      </button>
      <div className="vote-score">{score}</div>
      <button
        className={classNames(buttonClasses, {
          active: vote.vote_value === -1,
        })}
        onClick={() => submitVote('DOWN')}
      >
        <Icon type="caret-down" />
      </button>
      &nbsp;
    </span>
  );
}

VoteButtons.fragments = {
  entry: gql`
    fragment VoteButtons on Entry {
      score
      vote {
        vote_value
      }
    }
  `,
};

VoteButtons.propTypes = {
  canVote: PropTypes.bool.isRequired,
  onVote: PropTypes.func.isRequired,
  entry: propType(VoteButtons.fragments.entry).isRequired,
};
