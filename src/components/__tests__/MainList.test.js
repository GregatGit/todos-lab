import React from 'react'
import Mainlist from '../MainList'
import { mount } from 'enzyme'
import Root from '../../Root'

let wrapped
beforeEach(() => {
  wrapped = mount(<Root><Mainlist /></Root>)
})

afterEach(() => {
  wrapped.unmount()
})

it('renders', () => {
  expect(wrapped.find('h5').length).toEqual(1)
  console.log(wrapped.debug())
})