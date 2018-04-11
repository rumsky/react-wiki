import React from 'react';
import {Layout} from 'antd'
import PropTypes from 'prop-types';

export default class GraphQL extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div>GraphQL</div>
            </Layout>
        )
    }
}

GraphQL.propTypes = {
    name: PropTypes.string,
}