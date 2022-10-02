import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Form from './Form.vue';

test('component is imported', () => {
  expect(Form).toBeTruthy();
})

document.body.innerHTML = `<div id="app"></div>`;

test('form is rendered and submitted', async () => {
  // NOTE: to submit form, needs to be attached to body element
  const wrapper = mount(Form, {
    attachTo: document.getElementById('app')
  })
  const username = wrapper.get('input[name="username"]');
  const password = wrapper.get('input[name="password"]');

  // NOTE: to get element's value, access with `{wrapperElement}.element.value`
  expect(username.element.value).toBe('');
  expect(password.element.value).toBe('');

  username.setValue('username');
  password.setValue('password');

  expect(wrapper.find('#submitted').exists()).toBe(false);

  const btn = wrapper.get('button[type="submit"]');
  await btn.trigger('click');
  expect(wrapper.emitted()).toHaveProperty('submit');
  expect(wrapper.find('#submitted').exists()).toBe(true);
})
