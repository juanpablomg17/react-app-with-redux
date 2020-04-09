import React, { Component } from 'react'
import {connect} from 'react-redux';
import Page from './page';

 class Results extends Component {
    render() {
        const {sugestions} = this.props;
        console.log(this.props);
        return (
            <div>
                <Page sugestions={sugestions}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      sugestions: state.sugestions,
      hola: '123',
    };


};
const wrapper = connect(mapStateToProps);
const component = wrapper(Results);

export default component;