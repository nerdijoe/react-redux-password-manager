import React from 'react'
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
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


import ConnectedSearchResult from './SearchResult'
import { SearchResult } from './SearchResult'

import store from '../store/manageStore'
import Style from './SearchResult.style'

// import { FETCH_DATA } from '../actions/constants'
import { actionFetchData, fetchData, deletePassword } from '../actions'

describe('SearchResult', () => {
  it('<SearchResult /> should rendered properly', () => {
    const mockSearchResult = [{
      "id": 1,
      "url": "www.theverge.com",
      "username": "ijo",
      "password": "haha",
      "created_at": "2010-05-26",
      "updated_at": "2010-05-26"
    }];

    const wrapper = mount(
      <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
          <SearchResult search_result={mockSearchResult} />
        </BrowserRouter>
      </MuiThemeProvider>)

    expect(wrapper).toHaveLength(1)
  });

  it('<SearchResult /> should render Table as child', () => {
    const mockSearchResult = [{
      "id": 1,
      "url": "www.theverge.com",
      "username": "ijo",
      "password": "haha",
      "created_at": "2010-05-26",
      "updated_at": "2010-05-26"
    }];

    const wrapper = mount(
      <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
          <SearchResult search_result={mockSearchResult} />
        </BrowserRouter>
      </MuiThemeProvider>)

    expect(wrapper.containsAllMatchingElements([
      <Table />
    ])).toBeTrue
  });

  it('<SearchResult /> should render TableRow as looping data', () => {
    const mockSearchResult = [
      {
        "id": 1,
        "url": "www.theverge.com",
        "username": "ijo",
        "password": "haha",
        "created_at": "2010-05-26",
        "updated_at": "2010-05-26"
      },
      {
        "id": 2,
        "url": "www.espn.com",
        "username": "ijo",
        "password": "haha",
        "created_at": "2010-05-26",
        "updated_at": "2010-05-26"
      },
      {
        "id": 3,
        "url": "www.espn.com",
        "username": "ijo",
        "password": "haha",
        "created_at": "2010-05-26",
        "updated_at": "2010-05-26"
      }
    ];

    const wrapper = mount(
      <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
          <SearchResult search_result={mockSearchResult} />
        </BrowserRouter>
      </MuiThemeProvider>)

    expect(wrapper.find(TableBody).find(TableRow)).toHaveLength(3)
  });

  it('<SearchResult /> should update props when fetch data is dispatched', () => {


    const expectedData = [
      {
        "id": "9c50dc4d-4578-465a-a5ce-df6c12b0f9ba",
        "url": "www.google.com",
        "username": "john",
        "password": "haha",
        "created_at": "2017-05-26T10:53:22.887Z",
        "updated_at": "2017-05-28T10:01:33.525Z"
      },
    ]

    store.dispatch(fetchData(expectedData))

    const wrapper = mount(
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <BrowserRouter>
            <ConnectedSearchResult />
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>)

    const actualData = wrapper.props().children.props.store.getState().passwordReducer.search_result;

    expect(actualData).toEqual(expectedData);
  })

  // Buttons
  it('<SearchResult /> click deleteButton should delete one data', () => {
    const mockSearchResult = [{
      "id": 1,
      "url": "www.theverge.com",
      "username": "ijo",
      "password": "haha",
      "created_at": "2010-05-26",
      "updated_at": "2010-05-26"
    }];

    store.dispatch(fetchData(mockSearchResult))



    const wrapper = mount(
      <MuiThemeProvider muiTheme={muiTheme}>
          <BrowserRouter>
            <SearchResult search_result={mockSearchResult} actionDeletePassword={(id) => {console.log(id)}} />
          </BrowserRouter>
      </MuiThemeProvider>)

    // expect(wrapper.find(TableBody).find(TableRow)).toHaveLength(1)

    const deleteButton = wrapper.find('FlatButton')
    console.log(deleteButton)
    console.log(deleteButton.nodes)
    // console.log(deleteButton.nodes[0].props.onClick())

    // console.log(deleteButton.first().props().onClick)
    // deleteButton.first().props().onClick

    deleteButton.first().simulate('click')
    console.log(wrapper.props().children.props.children.props.actionDeletePassword)

    // console.log(wrapper.instance())
    // expect(wrapper.props().actionDeletePassword()).toBeCalled()
    expect(wrapper.props().children.props.children.props.actionDeletePassword()).toBeCalled()

    // const comp = shallow(<Button onClick={() => {}} />)
    // expect(comp.simulate('click')).toBeCalled()

    // store.dispatch(deletePassword(mockSearchResult[0].id))

    //
    //
    //
    // const currentData = wrapper.props().children.props.store.getState().passwordReducer.data;

    // console.log(currentData)





  });

})

/*
class Button extends React.component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: false
    }
  }
  onClickHandler () {
    this.setState({
      clicked: true
    })
    this.props.deletePassword()
  }
  render () {
    return <button onClick={() => this.onClickHandler()}></button>
  }
}
*/


/*

3 input type
1 tombol save
1 action yg di dispatch
store


passwords: []

wrapper.find(formurl).simulate.change
wrapper.find(formurl).simulate.change

wrapper.find(button).simlate.click
fungsiValidasi ->

1. TRUE -> expect(store.getState)
2. FALSE ->

*/
