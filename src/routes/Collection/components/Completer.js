/**
 * Created by harry on 2018/3/23.
 */
import React from 'react';
import './Complete.less'
class Completer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultValue: '',
            value: props.value
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});

        this
            .props
            .onChange(e.target.value);
    }

    handleClickItem(value) {
        this
            .props
            .onSelectedItem(value);
        this.setState({value: value});

    }

    getRequestList = () => {
        return this
            .props
            .filterList
            .map((item, index) => {
                return <li
                    key={`item-${index}`}
                    onClick={this
                    .handleClickItem
                    .bind(this, item)}>{item}</li>
            });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <ul
                    className={this.state.value === ''
                    ? 'menu-hide'
                    : 'menu menu-show'}>
                    {this.getRequestList()}
                </ul>
            </div>
        )
    }
}

export default Completer;
