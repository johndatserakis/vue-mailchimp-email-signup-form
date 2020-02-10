 // On how to use knobs with Vue props
 // https://github.com/storybookjs/storybook/issues/4947#issuecomment-467096578

import { withKnobs, text } from "@storybook/addon-knobs";
import VueMailchimpEmailSignupForm from "./VueMailchimpEmailSignupForm.vue";

export default {
  title: "VueMailchimpEmailSignupForm",
  decorators: [withKnobs]
};

export const Base = () => ({
  components: { VueMailchimpEmailSignupForm },
  props: {
    elementId: {
      type: String,
      default: text("elementId", "first-email-signup-form")
    },
    url: {
      type: String,
      default: text("url", "https://XX.us4.list-manage.com/subscribe/post?u=XXXXXXXXXXXXXX")
    },
    title: {
      type: String,
      default: text("title", "Subscribe to the Newsletter")
    },
    subtitle: {
      type: String,
      default: text("subtitle", "We take privacy seriously and we will never spam or sell your information.")
    }
  },
  template: `
    <div>
      <vue-mailchimp-email-signup-form
        :elementId="elementId"
        :url="url"
        :title="title"
        :subtitle="subtitle"
      />

      <p>
        Link to this component's <a href="https://github.com/johndatserakis/vue-mailchimp-email-signup-form" target="_blank" rel="noopener noreferrer">github.</a>
      </p>
    </div>
  `
});
