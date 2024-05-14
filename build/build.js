import { defineComponent as ee, useSlots as le, ref as S, computed as s, watch as g, openBlock as a, createElementBlock as o, normalizeClass as te, unref as c, renderSlot as E, createCommentVNode as n, createBlock as H, resolveDynamicComponent as I, withDirectives as R, vModelText as U, createElementVNode as ae, nextTick as oe } from "vue";
import { generateRandomString as N } from "lkt-string-tools";
import { createLktEvent as m } from "lkt-events";
const u = {
  defaultEmptyValueSlot: "",
  customValueSlots: {},
  customEditSlots: {}
}, ue = ["data-show-ui", "data-labeled"], se = ["for", "innerHTML"], ie = {
  key: 2,
  class: "lkt-field-text__main"
}, de = ["value", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], ne = ["value", "name", "id", "disabled", "readonly", "tabindex", "autocomplete"], re = {
  key: 4,
  class: "lkt-field__state"
}, fe = ["title"], ce = ["title"], ve = ["title"], me = ["title"], pe = ["title"], ye = {
  key: 3,
  class: "lkt-field-textarea__read"
}, ke = ["innerHTML", "title"], Se = {
  key: 3,
  class: "lkt-field__state"
}, he = ["title"], Ve = /* @__PURE__ */ ee({
  __name: "LktFieldTextarea",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: N(16) },
    valid: { type: Boolean, default: !1 },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { default: "" },
    mandatoryMessage: { default: "" },
    infoMessage: { default: "" },
    errorMessage: { default: "" },
    switchEditionMessage: { default: "" },
    emptyValueSlot: { default: "" },
    valueSlot: { default: "" },
    editSlot: { default: "" },
    slotData: { default: () => ({}) }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error"],
  setup(i, { expose: r, emit: j }) {
    const f = j, y = le(), l = i, d = N(16), h = S(null), w = S(l.modelValue), t = S(l.modelValue), M = S(!1), p = S(!l.readMode), z = s(() => typeof l.valid == "function" ? l.valid() : l.valid), A = s(() => t.value !== w.value), C = s(() => l.reset || l.infoMessage !== "" || l.errorMessage !== ""), T = s(() => {
      let e = 0;
      return l.reset && ++e, l.infoMessage && ++e, e;
    }), O = s(() => l.resetMessage !== "" ? l.resetMessage : ""), B = s(() => l.autocomplete === !0 ? "on" : "off"), q = s(() => t.value !== ""), G = s(() => {
      const e = ["lkt-field", "lkt-field-textarea"];
      return l.palette && e.push(`lkt-field--${l.palette}`), A.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), M.value && e.push("has-focus"), T.value > 0 && e.push("has-icons", `has-icons-${T.value}`), e.push(z.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), k = s(() => typeof t.value == "number" ? t.value.toString() : t.value), x = () => {
      oe(() => {
        h.value && h.value.focus();
      });
    };
    g(() => l.readMode, (e) => p.value = !e), g(() => l.modelValue, (e) => {
      t.value = e;
    }), g(t, (e) => f("update:modelValue", e));
    const b = () => t.value = w.value, J = () => t.value, D = (e) => f("keyup", e, m(d, { value: t.value })), L = (e) => f("keydown", e, m(d, { value: t.value })), K = (e) => (M.value = !0) && f("focus", e, m(d, { value: t.value })), $ = (e) => (M.value = !1) && f("blur", e, m(d, { value: t.value })), V = (e) => f("click", e, m(d, { value: t.value })), P = (e) => f("click-info", e, m(d, { value: t.value })), Q = (e) => f("click-error", e, m(d, { value: t.value })), F = (e) => {
      p.value = !p.value, p.value && x();
    };
    r({
      Identifier: d,
      reset: b,
      focus: x,
      value: J,
      isMandatory: () => l.mandatory
    }), b();
    const W = s(() => t.value === "" ? l.emptyValueSlot !== "" && typeof u.customValueSlots[l.emptyValueSlot] < "u" || u.defaultEmptyValueSlot && typeof u.customValueSlots[u.defaultEmptyValueSlot] < "u" : l.valueSlot !== "" && typeof u.customValueSlots[l.valueSlot] < "u"), X = s(() => t.value === "" ? u.customValueSlots[l.emptyValueSlot] ?? u.customValueSlots[u.defaultEmptyValueSlot] : u.customValueSlots[l.valueSlot]), Y = s(() => l.editSlot !== "" && typeof u.customEditSlots[l.editSlot] < "u"), Z = s(() => u.customEditSlots[l.editSlot]);
    return (e, _) => (a(), o("div", {
      class: te(G.value),
      "data-show-ui": C.value,
      "data-labeled": !c(y).label
    }, [
      c(y).label ? E(e.$slots, "label", { key: 0 }) : n("", !0),
      c(y).label ? n("", !0) : (a(), o("label", {
        key: 1,
        for: c(d),
        innerHTML: e.label
      }, null, 8, se)),
      p.value ? (a(), o("div", ie, [
        c(y).edit ? (a(), o("div", {
          key: 0,
          onClick: V
        }, [
          E(e.$slots, "edit", {
            value: t.value,
            title: k.value,
            data: e.slotData
          })
        ])) : Y.value ? (a(), o("div", {
          key: 1,
          onClick: V
        }, [
          (a(), H(I(Z.value), {
            value: t.value,
            title: k.value,
            data: e.slotData
          }, null, 8, ["value", "title", "data"]))
        ])) : e.placeholder ? R((a(), o("textarea", {
          key: 2,
          "onUpdate:modelValue": _[0] || (_[0] = (v) => t.value = v),
          ref: (v) => h.value = v,
          value: t.value,
          name: e.name,
          id: c(d),
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          tabindex: e.tabindex,
          autocomplete: B.value,
          onKeyup: D,
          onKeydown: L,
          onFocus: K,
          onBlur: $,
          onClick: V
        }, null, 40, de)), [
          [U, t.value]
        ]) : R((a(), o("textarea", {
          key: 3,
          "onUpdate:modelValue": _[1] || (_[1] = (v) => t.value = v),
          ref: (v) => h.value = v,
          value: t.value,
          name: e.name,
          id: c(d),
          disabled: e.disabled,
          readonly: e.readonly,
          tabindex: e.tabindex,
          autocomplete: B.value,
          onKeyup: D,
          onKeydown: L,
          onFocus: K,
          onBlur: $,
          onClick: V
        }, `\r
                    `, 40, ne)), [
          [U, t.value]
        ]),
        C.value ? (a(), o("div", re, [
          l.errorMessage ? (a(), o("i", {
            key: 0,
            class: "lkt-field__error-icon",
            title: l.errorMessage,
            onClick: Q
          }, null, 8, fe)) : n("", !0),
          l.infoMessage ? (a(), o("i", {
            key: 1,
            class: "lkt-field__info-icon",
            title: l.infoMessage,
            onClick: P
          }, null, 8, ce)) : n("", !0),
          l.reset && q.value ? (a(), o("i", {
            key: 2,
            class: "lkt-field__reset-icon",
            title: O.value,
            onClick: b
          }, null, 8, ve)) : n("", !0),
          l.mandatory ? (a(), o("i", {
            key: 3,
            class: "lkt-field__mandatory-icon",
            title: l.mandatoryMessage
          }, null, 8, me)) : n("", !0),
          e.allowReadModeSwitch ? (a(), o("i", {
            key: 4,
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: F
          }, null, 8, pe)) : n("", !0)
        ])) : n("", !0)
      ])) : n("", !0),
      p.value ? n("", !0) : (a(), o("div", ye, [
        c(y).value ? E(e.$slots, "value", {
          key: 0,
          value: t.value,
          title: k.value,
          data: e.slotData
        }) : W.value ? (a(), H(I(X.value), {
          key: 1,
          value: t.value,
          title: k.value
        }, null, 8, ["value", "title"])) : (a(), o("div", {
          key: 2,
          class: "lkt-field-textarea__read-value",
          innerHTML: t.value,
          title: k.value
        }, null, 8, ke)),
        e.allowReadModeSwitch ? (a(), o("div", Se, [
          ae("i", {
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: F
          }, null, 8, he)
        ])) : n("", !0)
      ]))
    ], 10, ue));
  }
}), ge = {
  install: (i) => {
    i.component("lkt-field-textarea") === void 0 && i.component("lkt-field-textarea", Ve);
  }
}, Ee = (i, r) => {
  u.defaultEmptyValueSlot = i, r && (u.customValueSlots[i] = r);
}, we = (i, r) => (u.customValueSlots[i] = r, !0), Ce = (i, r) => (u.customEditSlots[i] = r, !0);
export {
  ge as default,
  Ee as setDefaultTextareaEmptyValueSlot,
  Ce as setTextareaEditSlot,
  we as setTextareaValueSlot
};
