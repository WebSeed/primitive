import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Button } from '..'

describe('Button', () => {
  const setup = testProps => {
    const props = {
      ...testProps,
    }
    return shallow(<Button {...props}>Test button</Button>)
  }

  it('renders matching snapshot', () => {
    const $ = setup()

    expect(toJson($)).toMatchSnapshot()
  })
})
