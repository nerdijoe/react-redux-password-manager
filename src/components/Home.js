import React from 'react'
import { connect } from 'react-redux'

import { actionFetchData } from '../actions'

import PasswordForm from './PasswordForm'
import SearchForm from './SearchForm'
import SearchResult from './SearchResult'

import './Home.css';

// import TestMui from './TestMui'

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};


class Home extends React.Component {

  state = {
    slideIndex: 0,
  };

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  componentDidMount() {
    console.log("componentDidMount")
    this.props.actionFetchData()

  }



  render() {
    return (
      <div>

        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Create New Password" value={0} />
          <Tab label="List" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <PasswordForm />
          </div>
          <div style={styles.slide}>
            <SearchForm />
            <br/><br/>
            <SearchResult />
          </div>
        </SwipeableViews>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.passwordReducer.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionFetchData: () => { dispatch(actionFetchData())}
  }
}

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)
export default connectedHome
