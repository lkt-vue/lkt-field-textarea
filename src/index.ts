import { App } from 'vue';

import { default as textAreaField } from './lib-components/LktFieldTextarea.vue';

import {Settings} from "./settings/Settings";

const LktFieldTextArea = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-field-textarea') === undefined) app.component('lkt-field-textarea', textAreaField);
  },
};

export default LktFieldTextArea;


export const setDefaultTextareaEmptyValueSlot = (str: string, component?: string|Component) => {
  Settings.defaultEmptyValueSlot = str;

  if (component) Settings.customValueSlots[str] = component;
}

export const setTextareaValueSlot = (resource: string, component: string|Component) => {
  Settings.customValueSlots[resource] = component;
  return true;
}

export const setTextareaEditSlot = (resource: string, component: string|Component) => {
  Settings.customEditSlots[resource] = component;
  return true;
}