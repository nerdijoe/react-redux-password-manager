import React from 'react';
import ReactDOM from 'react-dom';
// import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './store/manageStore'
import App from './App';
import Nav from './components/Nav'
import Home from './components/Home'
import List from './components/List'
import EditForm from './components/EditForm'
import Footer from './components/Footer'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {orange500} from 'material-ui/styles/colors'
import {deepOrange500} from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    accent1Color: deepOrange500
  }
})


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

describe('<App />', () => {
  it('should render App', () => {
    const wrapper = shallow(<App />)

    // expect(wrapper.containsAllMatchingElements([
    //   <MuiThemeProvider muiTheme={muiTheme}>,
    //     <Provider store={store}>,
    //       <BrowserRouter>,
    //           <div>,
    //             <Nav />,
    //             <Route exact path="/" component={Home} />,
    //             <Route exact path="/list" component={List} />,
    //             <Route exact path="/edit/:id" component={(props) => <EditForm match={props.match}/>} />,
    //             <Footer />,
    //           </div>,
    //       </BrowserRouter>,
    //     </Provider>,
    //   </MuiThemeProvider>
    // ])).to.be.true

    expect(wrapper.contains(
      <div>
        <Nav />

        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
        <Route exact path="/edit/:id" component={(props) => <EditForm match={props.match}/>} />
        <Footer />
      </div>

    )).toBe(true)



    expect(wrapper).toMatchSnapshot()

  })
})
