import de from "lkt-field-validation";
import { defineComponent as ne, useSlots as re, ref as f, computed as u, watch as B, resolveComponent as ve, openBlock as a, createElementBlock as o, normalizeClass as fe, unref as c, renderSlot as T, createCommentVNode as d, createBlock as x, resolveDynamicComponent as j, withDirectives as z, vModelText as A, createElementVNode as ce, nextTick as me } from "vue";
import { generateRandomString as O } from "lkt-string-tools";
import { createLktEvent as y } from "lkt-events";
import { __ as P } from "lkt-i18n";
const i = {
  defaultEmptyValueSlot: "",
  customValueSlots: {},
  customEditSlots: {}
}, pe = ["data-show-ui", "data-labeled"], ke = ["for", "innerHTML"], ye = {
  key: 2,
  class: "lkt-field-main"
}, he = ["value", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], Se = ["value", "name", "id", "disabled", "readonly", "tabindex", "autocomplete"], _e = {
  key: 4,
  class: "lkt-field__state"
}, Ve = ["title"], be = ["title"], ge = ["title"], Me = ["title"], Ee = ["title"], we = {
  key: 3,
  class: "lkt-field-textarea__read"
}, Ce = ["innerHTML", "title"], Be = {
  key: 3,
  class: "lkt-field__state"
}, Te = ["title"], xe = /* @__PURE__ */ ne({
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
  setup(s, { expose: r, emit: q }) {
    const v = q, S = re(), l = s, n = O(16), V = f(null), L = f(l.modelValue), t = f(l.modelValue), g = f(!1), M = f(!1), E = f(!1), m = f([]), h = f(!l.readMode), G = u(() => typeof l.valid == "function" ? l.valid() : l.valid), J = u(() => t.value !== L.value), D = u(() => l.reset || l.infoMessage !== "" || l.errorMessage !== ""), F = u(() => {
      let e = 0;
      return l.reset && ++e, l.infoMessage && ++e, e;
    }), Q = u(() => l.resetMessage !== "" ? l.resetMessage : ""), K = u(() => l.autocomplete === !0 ? "on" : "off"), X = u(() => t.value !== ""), Y = u(() => {
      const e = ["lkt-field", "lkt-field-textarea"];
      return l.palette && e.push(`lkt-field--${l.palette}`), J.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), g.value && e.push("has-focus"), l.autoValidation && E.value && M.value && (m.value.length > 0 ? e.push("is-invalid") : e.push("is-valid")), F.value > 0 && e.push("has-icons", `has-icons-${F.value}`), e.push(G.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), _ = u(() => typeof t.value == "number" ? t.value.toString() : t.value), Z = u(() => l.label.startsWith("__:") ? P(l.label.substring(3)) : l.label), $ = u(() => l.placeholder.startsWith("__:") ? P(l.placeholder.substring(3)) : l.placeholder), H = () => {
      me(() => {
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
      if (m.value = [], l.mandatory && t.value === "")
        m.value.push("ko-empty");
      else {
        let p = Number(l.min);
        p > 0 && t.value.length < p && m.value.push("ko-min-str");
      }
      let e = Number(l.max);
      e > 0 && t.value.length > e && m.value.push("ko-max-str");
    }, C = () => t.value = L.value, ee = () => t.value, I = (e) => {
      w(), v("keyup", e, y(n, { value: t.value }));
    }, N = (e) => v("keydown", e, y(n, { value: t.value })), R = (e) => {
      E.value = !0, (g.value = !0) && v("focus", e, y(n, { value: t.value }));
    }, U = (e) => {
      M.value = !0, w(), (g.value = !1) && v("blur", e, y(n, { value: t.value }));
    }, b = (e) => v("click", e, y(n, { value: t.value })), le = (e) => v("click-info", e, y(n, { value: t.value })), te = (e) => v("click-error", e, y(n, { value: t.value })), W = (e) => {
      h.value = !h.value, h.value && H();
    };
    r({
      Identifier: n,
      reset: C,
      focus: H,
      value: ee,
      isMandatory: () => l.mandatory
    }), C();
    const ae = u(() => t.value === "" ? l.emptyValueSlot !== "" && typeof i.customValueSlots[l.emptyValueSlot] < "u" || i.defaultEmptyValueSlot && typeof i.customValueSlots[i.defaultEmptyValueSlot] < "u" : l.valueSlot !== "" && typeof i.customValueSlots[l.valueSlot] < "u"), oe = u(() => t.value === "" ? i.customValueSlots[l.emptyValueSlot] ?? i.customValueSlots[i.defaultEmptyValueSlot] : i.customValueSlots[l.valueSlot]), ue = u(() => l.editSlot !== "" && typeof i.customEditSlots[l.editSlot] < "u"), ie = u(() => i.customEditSlots[l.editSlot]);
    return (e, p) => {
      const se = ve("lkt-field-validations");
      return a(), o("div", {
        class: fe(Y.value),
        "data-show-ui": D.value,
        "data-labeled": !c(S).label
      }, [
        c(S).label ? T(e.$slots, "label", { key: 0 }) : d("", !0),
        c(S).label ? d("", !0) : (a(), o("label", {
          key: 1,
          for: c(n),
          innerHTML: Z.value
        }, null, 8, ke)),
        h.value ? (a(), o("div", ye, [
          c(S).edit ? (a(), o("div", {
            key: 0,
            onClick: b
          }, [
            T(e.$slots, "edit", {
              value: t.value,
              title: _.value,
              data: e.slotData
            })
          ])) : ue.value ? (a(), o("div", {
            key: 1,
            onClick: b
          }, [
            (a(), x(j(ie.value), {
              value: t.value,
              title: _.value,
              data: e.slotData
            }, null, 8, ["value", "title", "data"]))
          ])) : $.value ? z((a(), o("textarea", {
            key: 2,
            "onUpdate:modelValue": p[0] || (p[0] = (k) => t.value = k),
            ref: (k) => V.value = k,
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
          }, null, 40, he)), [
            [A, t.value]
          ]) : z((a(), o("textarea", {
            key: 3,
            "onUpdate:modelValue": p[1] || (p[1] = (k) => t.value = k),
            ref: (k) => V.value = k,
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
                    `, 40, Se)), [
            [A, t.value]
          ]),
          D.value ? (a(), o("div", _e, [
            l.errorMessage ? (a(), o("i", {
              key: 0,
              class: "lkt-field__error-icon",
              title: l.errorMessage,
              onClick: te
            }, null, 8, Ve)) : d("", !0),
            l.infoMessage ? (a(), o("i", {
              key: 1,
              class: "lkt-field__info-icon",
              title: l.infoMessage,
              onClick: le
            }, null, 8, be)) : d("", !0),
            l.reset && X.value ? (a(), o("i", {
              key: 2,
              class: "lkt-field__reset-icon",
              title: Q.value,
              onClick: C
            }, null, 8, ge)) : d("", !0),
            l.mandatory ? (a(), o("i", {
              key: 3,
              class: "lkt-field__mandatory-icon",
              title: l.mandatoryMessage
            }, null, 8, Me)) : d("", !0),
            e.allowReadModeSwitch ? (a(), o("i", {
              key: 4,
              class: "lkt-field__edit-icon",
              title: l.switchEditionMessage,
              onClick: W
            }, null, 8, Ee)) : d("", !0)
          ])) : d("", !0)
        ])) : d("", !0),
        h.value ? d("", !0) : (a(), o("div", we, [
          c(S).value ? T(e.$slots, "value", {
            key: 0,
            value: t.value,
            title: _.value,
            data: e.slotData
          }) : ae.value ? (a(), x(j(oe.value), {
            key: 1,
            value: t.value,
            title: _.value
          }, null, 8, ["value", "title"])) : (a(), o("div", {
            key: 2,
            class: "lkt-field-textarea__read-value",
            innerHTML: t.value,
            title: _.value
          }, null, 8, Ce)),
          e.allowReadModeSwitch ? (a(), o("div", Be, [
            ce("i", {
              class: "lkt-field__edit-icon",
              title: l.switchEditionMessage,
              onClick: W
            }, null, 8, Te)
          ])) : d("", !0)
        ])),
        e.autoValidation && m.value.length > 0 ? (a(), x(se, {
          key: 4,
          items: m.value,
          stack: e.validationStack
        }, null, 8, ["items", "stack"])) : d("", !0)
      ], 10, pe);
    };
  }
}), He = {
  install: (s) => {
    s.component("lkt-field-textarea") === void 0 && s.component("lkt-field-textarea", xe), s.component("lkt-field-validations") === void 0 && s.use(de);
  }
}, Ie = (s, r) => {
  i.defaultEmptyValueSlot = s, r && (i.customValueSlots[s] = r);
}, Ne = (s, r) => (i.customValueSlots[s] = r, !0), Re = (s, r) => (i.customEditSlots[s] = r, !0);
export {
  He as default,
  Ie as setDefaultTextareaEmptyValueSlot,
  Re as setTextareaEditSlot,
  Ne as setTextareaValueSlot
};
