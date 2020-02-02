import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only'
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import pkg from "./package.json";

const config = {
  input: './src/index.js',
  output: [
    {
      file: pkg.main,
      name: 'VueMailchimpEmailSignupForm',
      exports: 'named',
      globals: {
        'vue': 'Vue'
      },
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      name: 'VueMailchimpEmailSignupForm',
      exports: 'named',
      globals: {
        'vue': 'Vue'
      },
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    vue({
      css: false,
      compileTemplate: true,
    }),
    css({ output: './dist/vue-mailchimp-email-signup-form.css' }),
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      exclude: ["**/*.stories.js"],
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
  ],
  external: ['vue']
};

export default config;
