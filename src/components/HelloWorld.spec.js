// import { findProp } from "@vue/compiler-core";
import { test, expec, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HelloWorld from './HelloWorld.vue'

test('component is be used', () => {
  expect(HelloWorld).toBeTruthy()
})

test('component has message', () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Hello world!!!'
    }
  })
  expect(wrapper.text()).toContain('Hello world!!!');
})

test('counter is increased when btn clicked', async () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: null,
    },
  });

  const button = wrapper.get('button')
  expect(button.text()).toContain('count is 0')

  await button.trigger('click')
  expect(button.text()).toContain('count is 1')
})
