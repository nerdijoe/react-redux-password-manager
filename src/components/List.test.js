import React from 'react'
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import List from './List'
import SearchForm from './SearchForm'
import SearchResult from './SearchResult'

describe('<List />', () => {
  it('should render List', () => {
    const wrapper = shallow(<List />)
    expect(wrapper.containsAllMatchingElements([
      <SearchForm />,
      <SearchResult />
    ])).to.be.true
  })
})
