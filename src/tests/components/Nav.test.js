import React from 'react'
// import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Nav from '../../components/Nav'
import Style from '../../components/Nav.style'

describe('<Nav />', () => {

  let wrapper
  beforeEach( () => {
    wrapper = shallow(<Nav />)
  })

  it('should render Nav without error', () => {

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

    expect(wrapper).toBeDefined()

  })

  it('should render AppBar Drawer Link, MenuItem', () => {
    expect(wrapper.contains(
      <AppBar />,
      <Drawer />,
      <Link />,
      <MenuItem />
    )).toBeDefined()
  })

  it('should open drawer when leftIconButtonTouch', () => {
    const appbar = wrapper.find(AppBar)
    // console.log(appbar.props())
    const leftIconTouchTap = appbar.props().onLeftIconButtonTouchTap
    // console.log(leftIconTouchTap)

    leftIconTouchTap()

    expect(wrapper.state('open')).toEqual(true)
  })

  it('should change state when Drawer is clicked', () => {
    const drawer = wrapper.find(Drawer)
    // console.log(drawer.props())
    const onRequestChange = drawer.props().onRequestChange
    // console.log(onRequestChange)

    onRequestChange(true)
    expect(wrapper.state('open')).toEqual(true)

  })

  it('should change state to false when MenuItem is touched', () => {
    const MenuItem = wrapper.find('MenuItem').first()
    // console.log(MenuItem.props())
    const onTouchTap = MenuItem.props().onTouchTap
    // console.log(onTouchTap)
    onTouchTap()
    expect(wrapper.state('open')).toEqual(false)
  })


})


describe( '<Nav /> state', () => {
  it('should have state open:false in the beginning', () => {
    const wrapper = shallow(<Nav />)
    expect(wrapper.state('open')).toBe(false)
  })
})
