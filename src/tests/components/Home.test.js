import React from 'react'
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux'

import connectedHome, {Home, mapDispatchToProps} from '../../components/Home'
import store from '../../store/manageStore'
import SearchForm from '../../components/SearchForm'
import SearchResult from '../../components/SearchResult'
import PasswordForm from '../../components/PasswordForm'
import '../../components/Home.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'
import IconClear from 'material-ui/svg-icons/content/clear'
import IconCreate from 'material-ui/svg-icons/content/create'
import {orange500} from 'material-ui/styles/colors'
import {deepOrange500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    accent1Color: deepOrange500
  }
})

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


describe('Home', () => {

  let wrapper
  beforeEach( () => {
    // wrapper = shallow(<MuiThemeProvider muiTheme={muiTheme}><Provider store={store}><Home /></Provider></MuiThemeProvider>)

    wrapper = shallow(<Home />)

  })

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render Tabs, SwipeableViews, SearchForm, SearchResult, PasswordForm', () => {

    expect(wrapper.contains(
      <Tabs />,
      <SwipeableViews />,
      <SearchForm />,
      <SearchResult />,
      <PasswordForm />
    )).toBeDefined()

  })

  it('should have initial state slideIndex=0', () => {
    expect(wrapper.state('slideIndex')).toEqual(0)

  })

  it('should handleChange when Tabs is changed', () => {
    const tabs = wrapper.find(Tabs)
    // console.log(tabs.props())
    const onChange = tabs.props().onChange
    expect(onChange).toBeInstanceOf(Function)

    // const tab1 = wrapper.find(Tab).first()
    // console.log(tab1.props());
    // console.log(wrapper.state())
    expect(wrapper.state('slideIndex')).toEqual(0)
    onChange(1)
    // console.log(wrapper.state())
    expect(wrapper.state('slideIndex')).toEqual(1)

  })

})

describe('Home Connected', () => {
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<MuiThemeProvider muiTheme={muiTheme}><Provider store={store}><Home /></Provider></MuiThemeProvider>)
  })

  it('should have props data that is empty', () => {
    const data = wrapper.props().store.getState().passwordReducer.data
    // console.log(data)

    expect(data).toEqual([])

  })

  it('should have props function actionFetchData', () => {
    // const data = wrapper.props()
    // console.log(data)

    const mockDispatch = jest.fn()
    const actionProps = mapDispatchToProps(mockDispatch)
    // console.log(actionProps)

    actionProps.actionFetchData()
    // const data = wrapper.props().store.getState().passwordReducer.data
    // console.log(data)
    console.log(mockDispatch.mock.calls[0][0])
    expect(mockDispatch.mock.calls[0][0]).toBeInstanceOf(Function)

  })



})
