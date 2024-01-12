import { App } from 'vue';

import { default as textAreaField } from './lib-components/LktFieldTextArea.vue';

import "./../lkt-field-textarea.css";

const LktFieldTextArea = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-field-textarea') === undefined) app.component('lkt-field-textarea', textAreaField);
  },
};

export default LktFieldTextArea;
