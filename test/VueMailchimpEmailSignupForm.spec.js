import { shallowMount } from '@vue/test-utils'
import VueMailchimpEmailSignupForm from '@/vue-mailchimp-email-signup-form/VueMailchimpEmailSignupForm.vue'

describe('VueMailchimpEmailSignupForm.vue', () => {
  it('Sets props correctly', async () => {
    expect(true).toBe(true)
    let initialPropsData = {
      elementId: "first-email-signup-form",
      url: "https://XX.us4.list-manage.com/subscribe/post?u=XXXXXXXXXXXXXX",
      title: "Subscribe to the Newsletter",
      subtitle: "We take privacy seriously and we will never spam or sell your information."
    }

    const wrapper = shallowMount(VueMailchimpEmailSignupForm, {
      propsData: {
        elementId: initialPropsData.elementId,
        url: initialPropsData.url,
        title: initialPropsData.title,
        subtitle: initialPropsData.subtitle
      }
    })

    expect(wrapper.vm.elementId).toBe(initialPropsData.elementId)
    expect(wrapper.vm.url).toBe(initialPropsData.url)
    expect(wrapper.vm.title).toBe(initialPropsData.title)
    expect(wrapper.vm.subtitle).toBe(initialPropsData.subtitle)
  })
})
