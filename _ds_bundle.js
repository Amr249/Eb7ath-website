/* @ds-bundle: {"format":3,"namespace":"BahethDesignSystem_c51e92","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"CardMedia","sourcePath":"components/display/Card.jsx"},{"name":"CardBody","sourcePath":"components/display/Card.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icon/Icon.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"bc3337417a5e","components/buttons/IconButton.jsx":"3529c87d5328","components/display/Avatar.jsx":"f390ea885b5c","components/display/Badge.jsx":"e3a46f410b6f","components/display/Card.jsx":"822055d5813c","components/feedback/Accordion.jsx":"45cbfb252a9f","components/forms/Checkbox.jsx":"c3b4a805d525","components/forms/Input.jsx":"e695db69354c","components/forms/Switch.jsx":"c4d1a38731a6","components/icon/Icon.jsx":"a8095e0d7cea","components/navigation/Tabs.jsx":"e712d6f7faff","ui_kits/marketing/FAQFooter.jsx":"2f5ed8fefca8","ui_kits/marketing/Navbar.jsx":"fc58f05b0b32","ui_kits/marketing/SectionsA.jsx":"616892795378","ui_kits/marketing/SectionsB.jsx":"21f1be0127c8","ui_kits/marketing/app.jsx":"2f888113d02d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BahethDesignSystem_c51e92 = window.BahethDesignSystem_c51e92 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: "bh-btn--primary",
  alternate: "bh-btn--alternate",
  secondary: "bh-btn--secondary",
  link: "bh-btn--link",
  ghost: "bh-btn--ghost"
};
const SIZES = {
  sm: "bh-btn--sm",
  md: "",
  lg: "bh-btn--lg"
};

/**
 * Baheth button. Primary = the single saturated Salem-green CTA;
 * `alternate` (white) for dark/image schemes; `secondary` outlined;
 * `link` is a text + chevron affordance. Recolors per scheme.
 */
function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  asChild = false,
  className = "",
  children,
  ...props
}) {
  const cls = ["bh-btn", VARIANTS[variant] || VARIANTS.primary, SIZES[size] || "", className].filter(Boolean).join(" ");
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: [cls, children.props.className].filter(Boolean).join(" "),
      ...props,
      children: /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, children.props.children, iconRight)
    });
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, props), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Round avatar. Pass `src` for a photo, otherwise `initials` render on a
 * soft Salem tint. Sizes sm / md / lg.
 */
function Avatar({
  src,
  alt = "",
  initials,
  size = "md",
  className = "",
  ...props
}) {
  const S = {
    sm: "bh-avatar--sm",
    md: "",
    lg: "bh-avatar--lg"
  };
  const cls = ["bh-avatar", S[size] || "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, props), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("span", null, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / category label. Default is the outlined pill used for
 * research tags; `solid` (green) and `soft` for emphasis. `tag` squares
 * the corners for filter chips.
 */
function Badge({
  variant = "default",
  tag = false,
  className = "",
  children,
  ...props
}) {
  const V = {
    default: "",
    solid: "bh-badge--solid",
    soft: "bh-badge--soft"
  };
  const cls = ["bh-badge", V[variant] || "", tag ? "bh-tag" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Outlined surface — the workhorse container. Flat by default (border
 * only); `transparent` for dark schemes, `elevated` for floating cards.
 * Compose freely; CardMedia + CardBody are thin helpers.
 */
function Card({
  variant = "default",
  className = "",
  children,
  ...props
}) {
  const V = {
    default: "",
    transparent: "bh-card--transparent",
    elevated: "bh-card--elevated"
  };
  const cls = ["bh-card", V[variant] || "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, props), children);
}
function CardMedia({
  src,
  alt = "",
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["bh-card__media", className].filter(Boolean).join(" ")
  }, props), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : children);
}
function CardBody({
  size = "md",
  className = "",
  children,
  ...props
}) {
  const cls = ["bh-card__body", size === "lg" ? "bh-card__body--lg" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, props), children);
}
Object.assign(__ds_scope, { Card, CardMedia, CardBody });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text field. Default is Baheth's underline style; `boxed` gives a
 * 12px-radius outlined box. Optional leading icon node.
 */
function Input({
  icon,
  boxed = false,
  className = "",
  wrapperClassName = "",
  ...props
}) {
  const inputCls = ["bh-input", boxed ? "bh-input--boxed" : "", className].filter(Boolean).join(" ");
  const wrapCls = ["bh-field", icon ? "bh-field--icon" : "", wrapperClassName].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: wrapCls
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "bh-field__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    className: inputCls
  }, props)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch — green when on. Pair with a label for settings rows. */
function Switch({
  label,
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["bh-switch", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: "bh-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bh-switch__thumb"
  })), label || children ? /*#__PURE__*/React.createElement("span", null, label || children) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Curated icon set for Baheth. Outline icons drawn from the Lucide
 * project (ISC license) — a clean 24px / 2px-stroke set substituted
 * for the product's original relume-icons (Material Symbols style).
 * Stroke icons inherit `currentColor`; `star`/`check-circle` can fill.
 */
const PATHS = {
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  "check-circle": '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  menu: '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  microscope: '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
  flask: '<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/>',
  "file-text": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  "graduation-cap": '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "book-open": '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  "bar-chart": '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  quote: '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v1a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v1a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  minus: '<path d="M5 12h14"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  "message-circle": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>'
};
function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  fill = false,
  className,
  style,
  ...props
}) {
  const inner = PATHS[name];
  if (!inner) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      flex: "none",
      ...style
    },
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }, props));
}

/** Names available in the Baheth icon set. */
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square icon-only button. Same visual variants as Button; pass an
 * icon name (Baheth set) or any node as children.
 */
function IconButton({
  variant = "secondary",
  size = "md",
  icon,
  label,
  className = "",
  children,
  ...props
}) {
  const VARIANTS = {
    primary: "bh-btn--primary",
    alternate: "bh-btn--alternate",
    secondary: "bh-btn--secondary",
    ghost: "bh-btn--ghost"
  };
  const cls = ["bh-btn", "bh-btn--icon", VARIANTS[variant] || VARIANTS.secondary, size === "sm" ? "bh-btn--sm" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label
  }, props), typeof icon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 18 : 20
  }) : icon, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
/**
 * FAQ-style accordion. Pass `items` as [{ title, content }]. `type`
 * "single" (default) closes others on open; "multiple" allows many.
 */
function Accordion({
  items = [],
  type = "single",
  defaultOpen = [],
  className = ""
}) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(type === "multiple" ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ["bh-accordion", className].filter(Boolean).join(" ")
  }, items.map((item, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      className: "bh-accordion__item",
      "data-open": isOpen,
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      className: "bh-accordion__trigger",
      "aria-expanded": isOpen,
      onClick: () => toggle(i)
    }, item.title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      className: "bh-accordion__icon",
      name: "chevron-down",
      size: 26
    })), /*#__PURE__*/React.createElement("div", {
      className: "bh-accordion__panel"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "bh-accordion__content"
    }, item.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with the Salem-green checked state. Label optional. */
function Checkbox({
  label,
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["bh-checkbox", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: "bh-checkbox__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 3
  })), label || children ? /*#__PURE__*/React.createElement("span", null, label || children) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Pill segmented tabs. Pass `tabs` as [{ value, label }] and render
 * content via the `value` returned to `onChange`, or use children with
 * the active value. Controlled or uncontrolled.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  className = ""
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.value);
  const active = value ?? internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ["bh-tabs__list", className].filter(Boolean).join(" "),
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    role: "tab",
    "aria-selected": active === t.value,
    "data-active": active === t.value,
    className: "bh-tab",
    onClick: () => select(t.value)
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/FAQFooter.jsx
try { (() => {
/* Baheth marketing — CTA, FAQ, Footer, and the Start dialog */
const {
  Button,
  Card,
  CardBody,
  Accordion,
  Input,
  Checkbox,
  Icon
} = window.BahethDesignSystem_c51e92;
function CTA({
  onStart
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "bk-section scheme-1 logo-alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "baheth-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-cta"
  }, /*#__PURE__*/React.createElement("h2", null, "Ready to start your research?"), /*#__PURE__*/React.createElement("p", {
    className: "bk-lead"
  }, "Join Baheth today and take the first step toward your SCFHS points and career advancement."), /*#__PURE__*/React.createElement("div", {
    className: "bk-btnrow bk-btnrow--center"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "alternate",
    onClick: onStart
  }, "Sign up"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Begin")))));
}
const FAQ_ITEMS = [{
  title: "How does co-authorship work?",
  content: "You join an active research team or develop your own project with our support. We provide statistical analysis, writing review, and publication guidance. Your name appears on the paper because you contributed genuine research work."
}, {
  title: "Will this help my SCFHS points?",
  content: "Yes. Every publication in a Scopus or ISI indexed journal counts toward your SCFHS requirements. We understand the exact standards and timeline you're working within."
}, {
  title: "What if I have no research experience?",
  content: "That's where we start. Our consultants guide you through methodology, statistical analysis, and manuscript preparation. You'll learn as you go, earning your co-authorship genuinely."
}, {
  title: "How long does publication take?",
  content: "Timeline varies by journal and research complexity. We target indexed journals with reasonable review periods and help navigate the submission and revision process efficiently."
}, {
  title: "Can I work while doing this?",
  content: "Absolutely. Most of our doctors are in residency or clinical practice. We structure support around your schedule, not the other way around."
}];
function FAQ() {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "bk-section scheme-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "baheth-container bk-faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-head bk-head--center"
  }, /*#__PURE__*/React.createElement("h2", null, "FAQ"), /*#__PURE__*/React.createElement("p", {
    className: "bk-lead"
  }, "Find answers to questions about joining research teams, earning co-authorship, and meeting SCFHS requirements.")), /*#__PURE__*/React.createElement(Accordion, {
    type: "single",
    defaultOpen: [0],
    items: FAQ_ITEMS
  }), /*#__PURE__*/React.createElement("div", {
    className: "bk-faq__more"
  }, /*#__PURE__*/React.createElement("h4", null, "Have more questions?"), /*#__PURE__*/React.createElement("p", null, "What makes Baheth different?"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Contact"))));
}
function Footer() {
  const links = ["About us", "Services", "Blog", "Contact", "Resources"];
  const legal = ["Privacy policy", "Terms of service", "Cookies settings"];
  return /*#__PURE__*/React.createElement("footer", {
    className: "bk-footer scheme-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "baheth-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-footer__top"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "bk-footer__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo-light.png",
    alt: "Baheth"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "bk-footer__links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "bk-footer__rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bk-footer__bottom"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2025 Baheth. All rights reserved."), /*#__PURE__*/React.createElement("ul", {
    className: "bk-footer__legal"
  }, legal.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, l)))))));
}

/* ---- Start / sign-up dialog (fake interactive flow) ---- */
function StartDialog({
  open,
  onClose
}) {
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    if (open) setDone(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "bk-modal",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Card, {
    className: "bk-modal__card",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(CardBody, {
    size: "lg"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bk-modal__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 22
  })), done ? /*#__PURE__*/React.createElement("div", {
    className: "bk-modal__done"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-modal__check"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 48
  })), /*#__PURE__*/React.createElement("h3", null, "You're on the list"), /*#__PURE__*/React.createElement("p", null, "We'll match you with research opportunities that fit your specialty and SCFHS timeline."), /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, "Done")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "bh-eyebrow"
  }, "Get started"), /*#__PURE__*/React.createElement("h3", null, "Create your researcher profile"), /*#__PURE__*/React.createElement("p", {
    className: "bk-modal__sub"
  }, "Tell us a little about you and we'll be in touch within two working days."), /*#__PURE__*/React.createElement("div", {
    className: "bk-modal__fields"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Full name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "you@hospital.sa",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Specialty (e.g. Cardiology)"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'm pursuing SCFHS research points",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "bk-modal__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Create profile"), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "secondary",
    onClick: onClose
  }, "Cancel"))))));
}
Object.assign(window, {
  CTA,
  FAQ,
  Footer,
  StartDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FAQFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Navbar.jsx
try { (() => {
/* Baheth marketing site — top navigation (scheme-3, white). */
const {
  Button,
  Icon
} = window.BahethDesignSystem_c51e92;
function Navbar({
  onStart
}) {
  const [open, setOpen] = React.useState(false);
  const [resOpen, setResOpen] = React.useState(false);
  const links = ["About us", "Services", "Blog"];
  return /*#__PURE__*/React.createElement("header", {
    className: "bk-nav scheme-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "bk-nav__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo-light.png",
    alt: "Baheth \u2014 Medical Research"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "bk-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: "bk-nav__link"
  }, l)), /*#__PURE__*/React.createElement("div", {
    className: "bk-nav__res",
    onMouseEnter: () => setResOpen(true),
    onMouseLeave: () => setResOpen(false)
  }, /*#__PURE__*/React.createElement("button", {
    className: "bk-nav__link bk-nav__resbtn"
  }, "Resources", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      transform: resOpen ? "rotate(180deg)" : "none",
      transition: "transform .2s"
    }
  })), resOpen && /*#__PURE__*/React.createElement("div", {
    className: "bk-nav__menu"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Team"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Contact")))), /*#__PURE__*/React.createElement("div", {
    className: "bk-nav__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Login"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onStart
  }, "Start")), /*#__PURE__*/React.createElement("button", {
    className: "bk-nav__burger",
    "aria-label": "Menu",
    onClick: () => setOpen(v => !v)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? "x" : "menu",
    size: 26
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "bk-nav__mobile"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: "bk-nav__link"
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "#faq",
    className: "bk-nav__link"
  }, "FAQ"), /*#__PURE__*/React.createElement("div", {
    className: "bk-nav__mobileactions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Login"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onStart
  }, "Start"))));
}
window.Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SectionsA.jsx
try { (() => {
/* Baheth marketing — Hero, Pathways, About, Stats */
const {
  Button,
  Card,
  CardMedia,
  CardBody,
  Icon
} = window.BahethDesignSystem_c51e92;
const chevR = () => /*#__PURE__*/React.createElement(Icon, {
  name: "chevron-right",
  size: 18
});
function Hero({
  onStart
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "bk-hero scheme-1 logo-alt"
  }, /*#__PURE__*/React.createElement("img", {
    className: "bk-hero__bg",
    src: "../../assets/images/home-hero-header-section.jpg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "bk-hero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "baheth-container bk-hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-hero__head"
  }, /*#__PURE__*/React.createElement("h1", null, "Build your research career with purpose"), /*#__PURE__*/React.createElement("div", {
    className: "bk-btnrow"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "alternate",
    onClick: onStart
  }, "Start"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Learn more"))), /*#__PURE__*/React.createElement("div", {
    className: "bk-hero__sub"
  }, /*#__PURE__*/React.createElement("p", null, "Baheth connects Saudi doctors with active research teams and provides the academic support you need to advance your career. Earn your SCFHS points through genuine collaboration, not shortcuts."))));
}
function Pathways() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bk-section scheme-2 logo-alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "baheth-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-head bk-head--center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bh-eyebrow"
  }, "Pathways"), /*#__PURE__*/React.createElement("h2", null, "Two ways to advance"), /*#__PURE__*/React.createElement("p", {
    className: "bk-lead"
  }, "Choose the path that fits your research journey and career goals")), /*#__PURE__*/React.createElement("div", {
    className: "bk-pathways"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "transparent",
    className: "bk-pathcard"
  }, /*#__PURE__*/React.createElement(CardBody, {
    size: "lg"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bh-eyebrow"
  }, "Collaborate"), /*#__PURE__*/React.createElement("h3", null, "Join active research teams"), /*#__PURE__*/React.createElement("p", null, "Become a co-author on established projects"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: chevR()
  }, "Explore")), /*#__PURE__*/React.createElement(CardMedia, {
    src: "../../assets/images/home-features-list-section-0.jpg",
    alt: "Researchers at work"
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "transparent",
    className: "bk-pathcard bk-pathcard--wide"
  }, /*#__PURE__*/React.createElement(CardBody, {
    size: "lg"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bh-eyebrow"
  }, "Develop your own research"), /*#__PURE__*/React.createElement("h3", null, "Get guidance from start to publication"), /*#__PURE__*/React.createElement("p", null, "From methodology to journal submission, we support every step"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: chevR()
  }, "Explore")), /*#__PURE__*/React.createElement(CardMedia, {
    src: "../../assets/images/home-features-list-section-1.jpg",
    alt: "Microscopy"
  })))));
}
function About() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bk-section scheme-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "baheth-container bk-about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-head bk-head--center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bh-eyebrow"
  }, "Story"), /*#__PURE__*/React.createElement("h2", null, "Baheth was built by doctors for doctors"), /*#__PURE__*/React.createElement("p", {
    className: "bk-lead"
  }, "We started because we saw talented physicians held back by the gap between clinical work and research. We built a bridge. Now we help others cross it."), /*#__PURE__*/React.createElement("div", {
    className: "bk-btnrow bk-btnrow--center"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Learn"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: chevR()
  }, "About"))), /*#__PURE__*/React.createElement("img", {
    className: "bk-about__img",
    src: "../../assets/images/home-about-section.jpg",
    alt: "Researcher with microscope"
  })));
}
const STATS = [{
  n: "500+",
  l: "Doctors supported",
  img: "../../assets/images/home-stats-section-0.jpg"
}, {
  n: "300+",
  l: "Papers published",
  img: null
}, {
  n: "50+",
  l: "Active research teams",
  img: "../../assets/images/home-stats-section-1.jpg"
}];
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bk-section scheme-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "baheth-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-statshead"
  }, /*#__PURE__*/React.createElement("h3", null, "Numbers that speak to our commitment"), /*#__PURE__*/React.createElement("p", null, "Baheth has supported hundreds of Saudi doctors in advancing their research careers, connecting practitioners with meaningful publications and building the academic profiles that matter for promotions and program acceptance.")), /*#__PURE__*/React.createElement("div", {
    className: "bk-stats"
  }, /*#__PURE__*/React.createElement(Card, {
    className: "bk-stat bk-stat--tall"
  }, /*#__PURE__*/React.createElement(CardBody, {
    size: "lg",
    className: "bk-stat__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-stat__num"
  }, STATS[0].n), /*#__PURE__*/React.createElement("h4", null, STATS[0].l))), /*#__PURE__*/React.createElement("div", {
    className: "bk-stat__img"
  }, /*#__PURE__*/React.createElement("img", {
    src: STATS[0].img,
    alt: ""
  })), /*#__PURE__*/React.createElement(Card, {
    className: "bk-stat"
  }, /*#__PURE__*/React.createElement(CardBody, {
    size: "lg",
    className: "bk-stat__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-stat__num"
  }, STATS[1].n), /*#__PURE__*/React.createElement("h4", null, STATS[1].l))), /*#__PURE__*/React.createElement("div", {
    className: "bk-stat__img"
  }, /*#__PURE__*/React.createElement("img", {
    src: STATS[2].img,
    alt: ""
  })), /*#__PURE__*/React.createElement(Card, {
    className: "bk-stat"
  }, /*#__PURE__*/React.createElement(CardBody, {
    size: "lg",
    className: "bk-stat__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-stat__num"
  }, STATS[2].n), /*#__PURE__*/React.createElement("h4", null, STATS[2].l))))));
}
Object.assign(window, {
  Hero,
  Pathways,
  About,
  Stats
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SectionsA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SectionsB.jsx
try { (() => {
/* Baheth marketing — Services, Research opportunities, Testimonials */
const {
  Button,
  Card,
  CardMedia,
  CardBody,
  Badge,
  Avatar,
  Icon
} = window.BahethDesignSystem_c51e92;
const _chevR = () => /*#__PURE__*/React.createElement(Icon, {
  name: "chevron-right",
  size: 18
});
const SERVICES = [{
  icon: "bar-chart",
  tag: "Analysis",
  title: "Statistical analysis using SPSS and R",
  body: "We handle the numbers so you can focus on the science."
}, {
  icon: "file-text",
  tag: "Writing",
  title: "Polish your work with feedback from experienced academics",
  body: "Detailed manuscript review from published Saudi researchers."
}, {
  icon: "message-circle",
  tag: "Consultation",
  title: "One-on-one research consultations",
  body: "Personalized sessions on methodology and project planning."
}, {
  icon: "book-open",
  tag: "Publishing",
  title: "Research team matching for co-authorship",
  body: "Get matched with indexed-journal projects seeking collaborators."
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bk-section scheme-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "baheth-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-head bk-head--center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bh-eyebrow"
  }, "Services"), /*#__PURE__*/React.createElement("h2", null, "What we offer"), /*#__PURE__*/React.createElement("p", {
    className: "bk-lead"
  }, "Four core services to advance your research career")), /*#__PURE__*/React.createElement("div", {
    className: "bk-services"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    className: "bk-service"
  }, /*#__PURE__*/React.createElement(CardBody, {
    size: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-service__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("p", {
    className: "bh-eyebrow"
  }, s.tag), /*#__PURE__*/React.createElement("h4", null, s.title), /*#__PURE__*/React.createElement("p", null, s.body), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: _chevR()
  }, "Learn more")))))));
}
const PROJECTS = [{
  img: "../../assets/images/home-research-0.jpg",
  title: "Diabetes management in Saudi clinics",
  body: "Multi-center study examining treatment protocols and patient outcomes",
  tags: ["Clinical research", "Endocrinology", "Co-authorship"]
}, {
  img: "../../assets/images/home-research-1.jpg",
  title: "Pediatric infection prevention",
  body: "Hospital-based observational study on infection control measures",
  tags: ["Hospital research", "Pediatrics", "Co-authorship"]
}, {
  img: "../../assets/images/home-research-2.jpg",
  title: "Cardiac risk assessment",
  body: "Prospective cohort study evaluating cardiovascular risk factors in adults",
  tags: ["Prospective study", "Cardiology", "Co-authorship"]
}];
function ResearchOpportunities() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bk-section scheme-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "baheth-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-head bk-head--center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bh-eyebrow"
  }, "Opportunities"), /*#__PURE__*/React.createElement("h2", null, "Active research waiting for you"), /*#__PURE__*/React.createElement("p", {
    className: "bk-lead"
  }, "Browse current projects seeking co-authors and collaborators")), /*#__PURE__*/React.createElement("div", {
    className: "bk-projects"
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    className: "bk-project"
  }, /*#__PURE__*/React.createElement(CardMedia, {
    src: p.img,
    alt: ""
  }), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("h5", null, p.title), /*#__PURE__*/React.createElement("p", null, p.body), /*#__PURE__*/React.createElement("div", {
    className: "bk-project__tags"
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t
  }, t))), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: _chevR()
  }, "View project"))))), /*#__PURE__*/React.createElement("div", {
    className: "bk-center"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "View all"))));
}
const VOICES = [{
  q: "They understood exactly what SCFHS needed. No guessing, no wasted effort.",
  name: "Dr. Fatima Al-Otaibi",
  role: "Consultant, Pediatrics",
  initials: "FA"
}, {
  q: "I had the research idea but not the time. Baheth handled the statistics and writing review. I earned my co-authorship.",
  name: "Dr. Mohammed Al-Harbi",
  role: "Fellow, Cardiology",
  initials: "MH"
}, {
  q: "The statistical analysis alone saved me months. I could focus on the clinical insight while they handled SPSS.",
  name: "Dr. Layla Al-Mutairi",
  role: "Fellow, Orthopedic Surgery",
  initials: "LM"
}, {
  q: "They matched me with a team doing work I actually cared about. The co-authorship felt earned, not given.",
  name: "Dr. Hassan Al-Qahtani",
  role: "Consultant, Neurology",
  initials: "HQ"
}];
function Stars() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bk-stars"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    fill: true,
    size: 18
  })));
}
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bk-section scheme-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "baheth-container"
  }, /*#__PURE__*/React.createElement(Card, {
    className: "bk-testi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-testi__intro"
  }, /*#__PURE__*/React.createElement("h2", null, "Real voices"), /*#__PURE__*/React.createElement("p", {
    className: "bk-lead"
  }, "Doctors who found their way"), /*#__PURE__*/React.createElement("div", {
    className: "bk-btnrow"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Explore"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: _chevR()
  }, "Connect"))), /*#__PURE__*/React.createElement("div", {
    className: "bk-testi__grid"
  }, VOICES.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.name,
    className: "bk-voice"
  }, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(Stars, null), /*#__PURE__*/React.createElement("h5", {
    className: "bk-voice__q"
  }, "\"", v.q, "\""), /*#__PURE__*/React.createElement("div", {
    className: "bk-voice__person"
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: v.initials,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "bk-voice__name"
  }, v.name), /*#__PURE__*/React.createElement("p", {
    className: "bk-voice__role"
  }, v.role))))))))));
}
Object.assign(window, {
  Services,
  ResearchOpportunities,
  Testimonials
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SectionsB.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/app.jsx
try { (() => {
/* Compose the full Baheth marketing page */
const {
  Navbar,
  Hero,
  Pathways,
  About,
  Stats,
  Services,
  ResearchOpportunities,
  Testimonials,
  CTA,
  FAQ,
  Footer,
  StartDialog
} = window;
function App() {
  const [startOpen, setStartOpen] = React.useState(false);
  const open = () => setStartOpen(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "bk-page"
  }, /*#__PURE__*/React.createElement(Navbar, {
    onStart: open
  }), /*#__PURE__*/React.createElement(Hero, {
    onStart: open
  }), /*#__PURE__*/React.createElement(Pathways, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(ResearchOpportunities, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(CTA, {
    onStart: open
  }), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(StartDialog, {
    open: startOpen,
    onClose: () => setStartOpen(false)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardMedia = __ds_scope.CardMedia;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
