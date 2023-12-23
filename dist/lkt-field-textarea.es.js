import { defineComponent as G, useSlots as J, ref as v, computed as d, watch as b, openBlock as o, createElementBlock as i, normalizeClass as Q, unref as y, renderSlot as W, createCommentVNode as s, withDirectives as K, vModelText as F, createElementVNode as H, nextTick as X } from "vue";
import { generateRandomString as I } from "lkt-string-tools";
import { createLktEvent as c } from "lkt-events";
const Y = ["data-show-ui", "data-labeled"], Z = ["for", "innerHTML"], ee = {
  key: 2,
  class: "lkt-field-text__main"
}, le = ["value", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], te = ["value", "name", "id", "disabled", "readonly", "tabindex", "autocomplete"], ae = {
  key: 2,
  class: "lkt-field__state"
}, oe = ["title"], ie = ["title"], ne = ["title"], se = ["title"], de = ["title"], ue = {
  key: 3,
  class: "lkt-field-textarea__read"
}, re = ["innerHTML", "title"], ce = {
  key: 0,
  class: "lkt-field__state"
}, fe = ["title"], ve = { name: "LktFieldTextArea", inheritAttrs: !1 }, ye = /* @__PURE__ */ G({
  ...ve,
  props: {
    modelValue: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: I(16) },
    valid: { type: Boolean, default: !1 },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { type: Number, default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { type: String, default: "" },
    mandatoryMessage: { type: String, default: "" },
    infoMessage: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
    showPasswordMessage: { type: String, default: "" },
    switchEditionMessage: { type: String, default: "" }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error"],
  setup(a, { expose: N, emit: R }) {
    const u = R, h = J(), l = a, n = I(16), m = v(null), M = v(l.modelValue), t = v(l.modelValue);
    v(!1);
    const p = v(!1), f = v(!l.readMode), U = d(() => typeof l.valid == "function" ? l.valid() : l.valid), $ = d(() => t.value !== M.value), _ = d(() => l.reset || l.infoMessage !== "" || l.errorMessage !== ""), w = d(() => {
      let e = 0;
      return l.reset && ++e, l.infoMessage && ++e, e;
    }), A = d(() => l.resetMessage !== "" ? l.resetMessage : ""), x = d(() => l.autocomplete === !0 ? "on" : "off"), D = d(() => t.value !== ""), P = d(() => {
      const e = ["lkt-field", "lkt-field-textarea"];
      return l.palette && e.push(`lkt-field--${l.palette}`), $.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), p.value && e.push("has-focus"), w.value > 0 && e.push("has-icons", `has-icons-${w.value}`), e.push(U.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), j = d(() => typeof t.value == "number" ? t.value.toString() : t.value), S = () => {
      X(() => {
        m.value && m.value.focus();
      });
    };
    b(() => l.readMode, (e) => f.value = !e), b(() => l.modelValue, (e) => {
      t.value = e;
    }), b(t, (e) => u("update:modelValue", e));
    const g = () => t.value = M.value, z = () => t.value, V = (e) => u("keyup", e, c(n, { value: t.value })), B = (e) => u("keydown", e, c(n, { value: t.value })), C = (e) => (p.value = !0) && u("focus", e, c(n, { value: t.value })), T = (e) => (p.value = !1) && u("blur", e, c(n, { value: t.value })), E = (e) => u("click", e, c(n, { value: t.value })), O = (e) => u("click-info", e, c(n, { value: t.value })), q = (e) => u("click-error", e, c(n, { value: t.value })), L = (e) => {
      f.value = !f.value, f.value && S();
    };
    return N({
      Identifier: n,
      reset: g,
      focus: S,
      value: z,
      isMandatory: () => l.mandatory
    }), g(), (e, k) => (o(), i("div", {
      class: Q(P.value),
      "data-show-ui": _.value,
      "data-labeled": !y(h).label
    }, [
      y(h).label ? W(e.$slots, "label", { key: 0 }) : s("", !0),
      y(h).label ? s("", !0) : (o(), i("label", {
        key: 1,
        for: y(n),
        innerHTML: a.label
      }, null, 8, Z)),
      f.value ? (o(), i("div", ee, [
        a.placeholder ? K((o(), i("textarea", {
          key: 0,
          "onUpdate:modelValue": k[0] || (k[0] = (r) => t.value = r),
          ref: (r) => m.value = r,
          value: t.value,
          name: a.name,
          id: y(n),
          disabled: a.disabled,
          readonly: a.readonly,
          placeholder: a.placeholder,
          tabindex: a.tabindex,
          autocomplete: x.value,
          onKeyup: V,
          onKeydown: B,
          onFocus: C,
          onBlur: T,
          onClick: E
        }, null, 40, le)), [
          [F, t.value]
        ]) : K((o(), i("textarea", {
          key: 1,
          "onUpdate:modelValue": k[1] || (k[1] = (r) => t.value = r),
          ref: (r) => m.value = r,
          value: t.value,
          name: a.name,
          id: y(n),
          disabled: a.disabled,
          readonly: a.readonly,
          tabindex: a.tabindex,
          autocomplete: x.value,
          onKeyup: V,
          onKeydown: B,
          onFocus: C,
          onBlur: T,
          onClick: E
        }, `\r
                    `, 40, te)), [
          [F, t.value]
        ]),
        _.value ? (o(), i("div", ae, [
          l.errorMessage ? (o(), i("i", {
            key: 0,
            class: "lkt-field__error-icon",
            title: l.errorMessage,
            onClick: q
          }, null, 8, oe)) : s("", !0),
          l.infoMessage ? (o(), i("i", {
            key: 1,
            class: "lkt-field__info-icon",
            title: l.infoMessage,
            onClick: O
          }, null, 8, ie)) : s("", !0),
          l.reset && D.value ? (o(), i("i", {
            key: 2,
            class: "lkt-field__reset-icon",
            title: A.value,
            onClick: g
          }, null, 8, ne)) : s("", !0),
          l.mandatory ? (o(), i("i", {
            key: 3,
            class: "lkt-field__mandatory-icon",
            title: l.mandatoryMessage
          }, null, 8, se)) : s("", !0),
          a.allowReadModeSwitch ? (o(), i("i", {
            key: 4,
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: L
          }, null, 8, de)) : s("", !0)
        ])) : s("", !0)
      ])) : s("", !0),
      f.value ? s("", !0) : (o(), i("div", ue, [
        H("div", {
          class: "lkt-field-textarea__read-value",
          innerHTML: t.value,
          title: j.value
        }, null, 8, re),
        a.allowReadModeSwitch ? (o(), i("div", ce, [
          H("i", {
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: L
          }, null, 8, fe)
        ])) : s("", !0)
      ]))
    ], 10, Y));
  }
}), pe = {
  install: (a) => {
    a.component("lkt-field-textarea", ye);
  }
};
export {
  pe as default
};
