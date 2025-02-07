'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'vue-mailchimp-email-signup-form',
  props: {
    elementId: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    }
  },
  data: function data() {
    return {};
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "subscribe-container" }, [
    _c("div", { attrs: { id: _vm.elementId + "mc_embed_signup" } }, [
      _c(
        "form",
        {
          staticClass: "validate",
          attrs: {
            action: _vm.url,
            method: "post",
            id: _vm.elementId + "mc-embedded-subscribe-form",
            name: "mc-embedded-subscribe-form",
            target: "_blank"
          }
        },
        [
          _c(
            "div",
            { attrs: { id: _vm.elementId + "mc_embed_signup_scroll" } },
            [
              _c(
                "label",
                {
                  staticClass: "subscribe-container__title",
                  attrs: { htmlFor: "mce-EMAIL" }
                },
                [_vm._v("\n          " + _vm._s(_vm.title) + "\n        ")]
              ),
              _vm._v(" "),
              _vm.subtitle
                ? _c("p", { staticClass: "subscribe-container__subtitle" }, [
                    _vm._v("\n          " + _vm._s(_vm.subtitle) + "\n        ")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("input", {
                staticClass: "subscribe-container__email",
                attrs: {
                  type: "email",
                  name: "EMAIL",
                  id: _vm.elementId + "mce-EMAIL",
                  placeholder: "Your email address",
                  required: ""
                }
              }),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "subscribe-container__submit",
                    attrs: {
                      type: "submit",
                      name: "subscribe",
                      id: _vm.elementId + "mc-embedded-subscribe"
                    }
                  },
                  [_vm._v("\n            Subscribe\n          ")]
                )
              ])
            ]
          )
        ]
      )
    ])
  ])
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticStyle: { position: "absolute", left: "-5000px" },
        attrs: { "aria-hidden": "true" }
      },
      [
        _c("input", {
          attrs: {
            type: "text",
            name: "b_5f0b91c96bbdf35913a136639_ddfba3375e",
            tabIndex: "-1"
          }
        })
      ]
    )
  }
];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VueMailchimpEmailSignupForm = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

// Import vue component

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueMailchimpEmailSignupForm', VueMailchimpEmailSignupForm);
}

var plugin = {
  install: install
}; // To auto-install when vue is found

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component

exports.VueMailchimpEmailSignupForm = VueMailchimpEmailSignupForm;
exports.install = install;
//# sourceMappingURL=react-mailchimp-email-signup-form.js.map
