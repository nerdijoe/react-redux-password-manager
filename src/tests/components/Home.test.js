import React from 'react'
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux'

import Home from '../../components/Home'
import store from '../../store/manageStore'
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

  it('should fetch data from DB', () => {
    console.log('hey')
    const wrapper = shallow(<MuiThemeProvider muiTheme={muiTheme}><Provider store={store}><Home /></Provider></MuiThemeProvider>)

  })
})
