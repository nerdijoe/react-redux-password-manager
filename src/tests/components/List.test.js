import React from 'react'
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import List from '../../components/List'
import SearchForm from '../../components/SearchForm'
import SearchResult from '../../components/SearchResult'

describe('<List />', () => {
  it('should render List', () => {
    const wrapper = shallow(<List />)
    expect(wrapper.containsAllMatchingElements([
      <SearchForm />,
      <SearchResult />
    ])).to.be.true
  })
})
