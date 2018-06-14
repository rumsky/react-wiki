import React from 'react';
import PropTypes from 'prop-types';
import styles from './Playground.less';

export default class Playground extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div></div>
        )
    }
}

Playground.propTypes = {
    name: PropTypes.string,
}