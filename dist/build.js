import { defineComponent as se, useSlots as de, ref as f, computed as u, watch as B, resolveComponent as ne, openBlock as a, createElementBlock as o, normalizeClass as re, unref as c, renderSlot as T, createCommentVNode as s, createBlock as x, resolveDynamicComponent as j, withDirectives as z, vModelText as A, createElementVNode as ve, nextTick as fe } from "vue";
import { generateRandomString as O } from "lkt-string-tools";
import { createLktEvent as y } from "lkt-events";
const i = {
  defaultEmptyValueSlot: "",
  customValueSlots: {},
  customEditSlots: {}
}, ce = ["data-show-ui", "data-labeled"], me = ["for", "innerHTML"], pe = {
  key: 2,
  class: "lkt-field-main"
}, ye = ["value", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], ke = ["value", "name", "id", "disabled", "readonly", "tabindex", "autocomplete"], he = {
  key: 4,
  class: "lkt-field__state"
}, Se = ["title"], _e = ["title"], Ve = ["title"], be = ["title"], ge = ["title"], Me = {
  key: 3,
  class: "lkt-field-textarea__read"
}, Ee = ["innerHTML", "title"], we = {
  key: 3,
  class: "lkt-field__state"
}, Ce = ["title"], Be = /* @__PURE__ */ se({
  __name: "LktFieldTextarea",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: O(16) },
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
    slotData: { default: () => ({}) },
    min: { default: void 0 },
    max: { default: void 0 },
    autoValidation: { type: Boolean, default: !1 },
    validationStack: { default: "default" }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error"],
  setup(d, { expose: r, emit: P }) {
    const v = P, S = de(), l = d, n = O(16), V = f(null), L = f(l.modelValue), t = f(l.modelValue), g = f(!1), M = f(!1), E = f(!1), k = f([]), h = f(!l.readMode), q = u(() => typeof l.valid == "function" ? l.valid() : l.valid), G = u(() => t.value !== L.value), D = u(() => l.reset || l.infoMessage !== "" || l.errorMessage !== ""), F = u(() => {
      let e = 0;
      return l.reset && ++e, l.infoMessage && ++e, e;
    }), J = u(() => l.resetMessage !== "" ? l.resetMessage : ""), K = u(() => l.autocomplete === !0 ? "on" : "off"), Q = u(() => t.value !== ""), X = u(() => {
      const e = ["lkt-field", "lkt-field-textarea"];
      return l.palette && e.push(`lkt-field--${l.palette}`), G.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), g.value && e.push("has-focus"), l.autoValidation && E.value && M.value && (k.value.length > 0 ? e.push("is-invalid") : e.push("is-valid")), F.value > 0 && e.push("has-icons", `has-icons-${F.value}`), e.push(q.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), _ = u(() => typeof t.value == "number" ? t.value.toString() : t.value), Y = u(() => l.label.startsWith("__:") ? __(l.label.substring(3)) : l.label), $ = u(() => l.placeholder.startsWith("__:") ? __(l.placeholder.substring(3)) : l.placeholder), H = () => {
      fe(() => {
        V.value && V.value.focus();
      });
    };
    B(() => l.readMode, (e) => h.value = !e), B(() => l.modelValue, (e) => {
      t.value = e;
    }), B(t, (e) => {
      v("update:modelValue", e), w();
    });
    const w = () => {
      if (!M.value || !E.value)
        return;
      k.value = [];
      let e = Number(l.min);
      e > 0 && t.value.length < e && k.value.push("ko-min-str");
      let m = Number(l.max);
      m > 0 && t.value.length > m && k.value.push("ko-max-str");
    }, C = () => t.value = L.value, Z = () => t.value, I = (e) => {
      w(), v("keyup", e, y(n, { value: t.value }));
    }, N = (e) => v("keydown", e, y(n, { value: t.value })), R = (e) => {
      E.value = !0, (g.value = !0) && v("focus", e, y(n, { value: t.value }));
    }, U = (e) => {
      M.value = !0, w(), (g.value = !1) && v("blur", e, y(n, { value: t.value }));
    }, b = (e) => v("click", e, y(n, { value: t.value })), ee = (e) => v("click-info", e, y(n, { value: t.value })), le = (e) => v("click-error", e, y(n, { value: t.value })), W = (e) => {
      h.value = !h.value, h.value && H();
    };
    r({
      Identifier: n,
      reset: C,
      focus: H,
      value: Z,
      isMandatory: () => l.mandatory
    }), C();
    const te = u(() => t.value === "" ? l.emptyValueSlot !== "" && typeof i.customValueSlots[l.emptyValueSlot] < "u" || i.defaultEmptyValueSlot && typeof i.customValueSlots[i.defaultEmptyValueSlot] < "u" : l.valueSlot !== "" && typeof i.customValueSlots[l.valueSlot] < "u"), ae = u(() => t.value === "" ? i.customValueSlots[l.emptyValueSlot] ?? i.customValueSlots[i.defaultEmptyValueSlot] : i.customValueSlots[l.valueSlot]), oe = u(() => l.editSlot !== "" && typeof i.customEditSlots[l.editSlot] < "u"), ue = u(() => i.customEditSlots[l.editSlot]);
    return (e, m) => {
      const ie = ne("lkt-field-validations");
      return a(), o("div", {
        class: re(X.value),
        "data-show-ui": D.value,
        "data-labeled": !c(S).label
      }, [
        c(S).label ? T(e.$slots, "label", { key: 0 }) : s("", !0),
        c(S).label ? s("", !0) : (a(), o("label", {
          key: 1,
          for: c(n),
          innerHTML: Y.value
        }, null, 8, me)),
        h.value ? (a(), o("div", pe, [
          c(S).edit ? (a(), o("div", {
            key: 0,
            onClick: b
          }, [
            T(e.$slots, "edit", {
              value: t.value,
              title: _.value,
              data: e.slotData
            })
          ])) : oe.value ? (a(), o("div", {
            key: 1,
            onClick: b
          }, [
            (a(), x(j(ue.value), {
              value: t.value,
              title: _.value,
              data: e.slotData
            }, null, 8, ["value", "title", "data"]))
          ])) : $.value ? z((a(), o("textarea", {
            key: 2,
            "onUpdate:modelValue": m[0] || (m[0] = (p) => t.value = p),
            ref: (p) => V.value = p,
            value: t.value,
            name: e.name,
            id: c(n),
            disabled: e.disabled,
            readonly: e.readonly,
            placeholder: $.value,
            tabindex: e.tabindex,
            autocomplete: K.value,
            onKeyup: I,
            onKeydown: N,
            onFocus: R,
            onBlur: U,
            onClick: b
          }, null, 40, ye)), [
            [A, t.value]
          ]) : z((a(), o("textarea", {
            key: 3,
            "onUpdate:modelValue": m[1] || (m[1] = (p) => t.value = p),
            ref: (p) => V.value = p,
            value: t.value,
            name: e.name,
            id: c(n),
            disabled: e.disabled,
            readonly: e.readonly,
            tabindex: e.tabindex,
            autocomplete: K.value,
            onKeyup: I,
            onKeydown: N,
            onFocus: R,
            onBlur: U,
            onClick: b
          }, `\r
                    `, 40, ke)), [
            [A, t.value]
          ]),
          D.value ? (a(), o("div", he, [
            l.errorMessage ? (a(), o("i", {
              key: 0,
              class: "lkt-field__error-icon",
              title: l.errorMessage,
              onClick: le
            }, null, 8, Se)) : s("", !0),
            l.infoMessage ? (a(), o("i", {
              key: 1,
              class: "lkt-field__info-icon",
              title: l.infoMessage,
              onClick: ee
            }, null, 8, _e)) : s("", !0),
            l.reset && Q.value ? (a(), o("i", {
              key: 2,
              class: "lkt-field__reset-icon",
              title: J.value,
              onClick: C
            }, null, 8, Ve)) : s("", !0),
            l.mandatory ? (a(), o("i", {
              key: 3,
              class: "lkt-field__mandatory-icon",
              title: l.mandatoryMessage
            }, null, 8, be)) : s("", !0),
            e.allowReadModeSwitch ? (a(), o("i", {
              key: 4,
              class: "lkt-field__edit-icon",
              title: l.switchEditionMessage,
              onClick: W
            }, null, 8, ge)) : s("", !0)
          ])) : s("", !0)
        ])) : s("", !0),
        h.value ? s("", !0) : (a(), o("div", Me, [
          c(S).value ? T(e.$slots, "value", {
            key: 0,
            value: t.value,
            title: _.value,
            data: e.slotData
          }) : te.value ? (a(), x(j(ae.value), {
            key: 1,
            value: t.value,
            title: _.value
          }, null, 8, ["value", "title"])) : (a(), o("div", {
            key: 2,
            class: "lkt-field-textarea__read-value",
            innerHTML: t.value,
            title: _.value
          }, null, 8, Ee)),
          e.allowReadModeSwitch ? (a(), o("div", we, [
            ve("i", {
              class: "lkt-field__edit-icon",
              title: l.switchEditionMessage,
              onClick: W
            }, null, 8, Ce)
          ])) : s("", !0)
        ])),
        e.autoValidation && k.value.length > 0 ? (a(), x(ie, {
          key: 4,
          items: k.value,
          stack: e.validationStack
        }, null, 8, ["items", "stack"])) : s("", !0)
      ], 10, ce);
    };
  }
}), De = {
  install: (d) => {
    d.component("lkt-field-textarea") === void 0 && d.component("lkt-field-textarea", Be);
  }
}, Fe = (d, r) => {
  i.defaultEmptyValueSlot = d, r && (i.customValueSlots[d] = r);
}, Ke = (d, r) => (i.customValueSlots[d] = r, !0), $e = (d, r) => (i.customEditSlots[d] = r, !0);
export {
  De as default,
  Fe as setDefaultTextareaEmptyValueSlot,
  $e as setTextareaEditSlot,
  Ke as setTextareaValueSlot
};
