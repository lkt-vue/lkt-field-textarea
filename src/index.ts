import { App } from 'vue';

import { default as textAreaField } from './lib-components/LktFieldTextArea.vue';

const LktFieldTextArea = {
  install: (app: App) => {
    app.component('lkt-field-textarea', textAreaField);
  },
};

export default LktFieldTextArea;
