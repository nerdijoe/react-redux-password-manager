import React from 'react'
// import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Nav from './Nav'
import Style from './Nav.style'

describe('<Nav />', () => {

  it('should render Nav', () => {
    const wrapper = shallow(<Nav />)

    // expect(wrapper.containsAllMatchingElements([
    //   <AppBar/>,
    //   <Drawer>,
    //     <Link ><MenuItem>Home</MenuItem></Link>,
    //     <Link ><MenuItem>List</MenuItem></Link>,
    //   </Drawer>
    // ])).to.be.true

    // console.log(wrapper.instance());



    // expect(wrapper.contains(
    //   <div>
    //
    //     <AppBar
    //     />
    //
    //     <Drawer
    //     >
    //       <Link to="/" style={Style.link}><MenuItem>Home</MenuItem></Link>
    //       <Link to="/list" style={Style.link}><MenuItem>List</MenuItem></Link>
    //     </Drawer>
    //
    //   </div>
    // )).toBe(true)

    expect(wrapper).toMatchSnapshot();

  })


})

describe( '<Nav /> state', () => {
  it('should have state open:false in the beginning', () => {
    const wrapper = shallow(<Nav />)
    expect(wrapper.state('open')).toBe(false)
  })
})
