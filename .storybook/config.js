import { configure } from '@storybook/vue'
import Vue from 'vue';
import VueMailchimpEmailSignupForm from "../src/vue-mailchimp-email-signup-form/VueMailchimpEmailSignupForm.vue";

Vue.component('vue-mailchimp-email-signup-form', VueMailchimpEmailSignupForm);

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.stories\.js$/),
  ],
  module
);
