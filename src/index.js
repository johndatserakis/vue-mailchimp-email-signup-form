// Import vue component
import VueMailchimpEmailSignupForm from './vue-mailchimp-email-signup-form/VueMailchimpEmailSignupForm.vue';

// install function executed by Vue.use()
export function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component('VueMailchimpEmailSignupForm', VueMailchimpEmailSignupForm);
}VueMailchimpEmailSignupForm

// Create module definition for Vue.use()
const plugin = {
	install,
};

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export { VueMailchimpEmailSignupForm };
