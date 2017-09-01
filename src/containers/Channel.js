import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchChannelInfo } from '../actions/channelAction'

@connect(
  state =>{ return {channel: state.channel}},
  dispatch => ( bindActionCreators({
    fetchChannelInfo
  },dispatch))
)
class Channel extends Component{

  fetchData(props){
     const { fetchChannelInfo, match: { params: {id}} } = props;
             fetchChannelInfo(id);
  }

  componentWillMount(){
    this.fetchData(this.props);
  }

  componentWillReceiveProps(newProps){
    this.fetchData(newProps);
  }

  render() {
    return (
      <div className="container">
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default Channel;