/* @ds-bundle: {"format":4,"namespace":"VanillaTailwindDesignSystem_1f5ec4","components":[{"name":"Badge","sourcePath":"components/badge/Badge.jsx"},{"name":"Status","sourcePath":"components/badge/Status.jsx"},{"name":"StatusIndicator","sourcePath":"components/badge/Status.jsx"},{"name":"StatusLabel","sourcePath":"components/badge/Status.jsx"},{"name":"Button","sourcePath":"components/button/Button.jsx"},{"name":"Card","sourcePath":"components/card/Card.jsx"},{"name":"CardHeader","sourcePath":"components/card/Card.jsx"},{"name":"CardTitle","sourcePath":"components/card/Card.jsx"},{"name":"CardDescription","sourcePath":"components/card/Card.jsx"},{"name":"CardAction","sourcePath":"components/card/Card.jsx"},{"name":"CardContent","sourcePath":"components/card/Card.jsx"},{"name":"CardFooter","sourcePath":"components/card/Card.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"AvatarImage","sourcePath":"components/data-display/Avatar.jsx"},{"name":"AvatarFallback","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Kbd","sourcePath":"components/data-display/Kbd.jsx"},{"name":"Separator","sourcePath":"components/data-display/Separator.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"TableHeader","sourcePath":"components/data-display/Table.jsx"},{"name":"TableBody","sourcePath":"components/data-display/Table.jsx"},{"name":"TableRow","sourcePath":"components/data-display/Table.jsx"},{"name":"TableHead","sourcePath":"components/data-display/Table.jsx"},{"name":"TableCell","sourcePath":"components/data-display/Table.jsx"},{"name":"TableCaption","sourcePath":"components/data-display/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"AlertTitle","sourcePath":"components/feedback/Alert.jsx"},{"name":"AlertDescription","sourcePath":"components/feedback/Alert.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"FieldDescription","sourcePath":"components/forms/Field.jsx"},{"name":"FieldError","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/badge/Badge.jsx":"4d59a148b5bf","components/badge/Status.jsx":"d6d2c0fbb635","components/button/Button.jsx":"ea71a9319b99","components/card/Card.jsx":"9a51874fe41e","components/data-display/Avatar.jsx":"f9af5e7d361a","components/data-display/Kbd.jsx":"e8a3576b94f4","components/data-display/Separator.jsx":"5822f6a2e628","components/data-display/Table.jsx":"710e66c6f804","components/feedback/Alert.jsx":"ddd908b8472d","components/feedback/Progress.jsx":"5c507c2819a8","components/feedback/Skeleton.jsx":"0e317cd19f90","components/feedback/Spinner.jsx":"bfc238b6cf90","components/forms/Checkbox.jsx":"6a62b54f1483","components/forms/Field.jsx":"f70dbc912ece","components/forms/Input.jsx":"c281989d7d64","components/forms/Label.jsx":"0d3fda6aabac","components/forms/Select.jsx":"0c49decbc7b3","components/forms/Switch.jsx":"133aed821511","ui_kits/widget-studio/app.jsx":"4a16aa3f65e5","ui_kits/widget-studio/icons.jsx":"78a3c12410af"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VanillaTailwindDesignSystem_1f5ec4 = window.VanillaTailwindDesignSystem_1f5ec4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badge/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — compact label for counts, categories and metadata.
 * Variants: primary | secondary | outline | success | warning | error.
 */
function Badge({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-slot": "badge",
    "data-variant": variant,
    className: className
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/badge/Status.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status — pill communicating live state, with a leading indicator dot.
 * Variants: default | primary | success | warning | error.
 */
function Status({
  variant = "default",
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "status",
    "data-variant": variant,
    className: className
  }, props), /*#__PURE__*/React.createElement(StatusIndicator, null), children);
}

/** StatusIndicator — the colored dot; rendered automatically inside Status. */
function StatusIndicator({
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-slot": "status-indicator",
    className: className
  }, props));
}

/** StatusLabel — optional text wrapper for a Status. */
function StatusLabel({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-slot": "status-label",
    className: className
  }, props), children);
}
Object.assign(__ds_scope, { Status, StatusIndicator, StatusLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/Status.jsx", error: String((e && e.message) || e) }); }

// components/card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — surface container. Compose with the sub-parts below. */
function Card({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card",
    className: className
  }, props), children);
}

/** CardHeader — top region; switches to a two-column grid when a CardAction is present. */
function CardHeader({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card-header",
    className: className
  }, props), children);
}

/** CardTitle — bold heading line. */
function CardTitle({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card-title",
    className: className
  }, props), children);
}

/** CardDescription — muted supporting copy under the title. */
function CardDescription({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card-description",
    className: className
  }, props), children);
}

/** CardAction — top-right slot (e.g. a menu button); place inside CardHeader. */
function CardAction({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card-action",
    className: className
  }, props), children);
}

/** CardContent — main body region. */
function CardContent({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card-content",
    className: className
  }, props), children);
}

/** CardFooter — bottom region, typically actions. */
function CardFooter({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card-footer",
    className: className
  }, props), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/card/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — rounded user image container. Compose with AvatarImage + AvatarFallback. */
function Avatar({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-slot": "avatar",
    className: className
  }, props), children);
}

/** AvatarImage — the photo. */
function AvatarImage({
  className = "",
  alt = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    "data-slot": "avatar-image",
    alt: alt,
    className: className
  }, props));
}

/** AvatarFallback — shown when no image; typically initials. */
function AvatarFallback({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-slot": "avatar-fallback",
    className: className
  }, props), children);
}
Object.assign(__ds_scope, { Avatar, AvatarImage, AvatarFallback });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Kbd.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Kbd — keyboard key hint, in the mono type family. */
function Kbd({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("kbd", _extends({
    "data-slot": "kbd",
    className: className
  }, props), children);
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Separator — a thin divider line. Orientation: horizontal | vertical. */
function Separator({
  orientation = "horizontal",
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "separator",
    role: "separator",
    "aria-orientation": orientation,
    "data-orientation": orientation,
    className: className
  }, props));
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Separator.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Table — data table. Wraps in a horizontally-scrollable container. */
function Table({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-slot": "table-container"
  }, /*#__PURE__*/React.createElement("table", _extends({
    "data-slot": "table",
    className: className
  }, props), children));
}

/** TableHeader — <thead> wrapper. */
function TableHeader({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("thead", _extends({
    "data-slot": "table-header",
    className: className
  }, props), children);
}

/** TableBody — <tbody> wrapper. */
function TableBody({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("tbody", _extends({
    "data-slot": "table-body",
    className: className
  }, props), children);
}

/** TableRow — <tr>; hover + selected states via data-state="selected". */
function TableRow({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("tr", _extends({
    "data-slot": "table-row",
    className: className
  }, props), children);
}

/** TableHead — header cell <th>. */
function TableHead({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("th", _extends({
    "data-slot": "table-head",
    className: className
  }, props), children);
}

/** TableCell — body cell <td>. */
function TableCell({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("td", _extends({
    "data-slot": "table-cell",
    className: className
  }, props), children);
}

/** TableCaption — caption rendered below the table. */
function TableCaption({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("caption", _extends({
    "data-slot": "table-caption",
    className: className
  }, props), children);
}
Object.assign(__ds_scope, { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Alert — inline message banner. Variant `default` or `destructive`.
 * Pass an SVG/icon as the first child to get the icon layout.
 */
function Alert({
  variant = "default",
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "alert",
    role: "alert",
    "data-variant": variant,
    className: className
  }, props), children);
}

/** AlertTitle — the bold headline line of an Alert. */
function AlertTitle({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "alert-title",
    className: className
  }, props), children);
}

/** AlertDescription — supporting body copy of an Alert. */
function AlertDescription({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "alert-description",
    className: className
  }, props), children);
}
Object.assign(__ds_scope, { Alert, AlertTitle, AlertDescription });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Progress — determinate progress bar. `value` is 0–100. */
function Progress({
  value = 0,
  className = "",
  ...props
}) {
  const v = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "progress",
    role: "progressbar",
    "aria-valuenow": v,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    className: className
  }, props), /*#__PURE__*/React.createElement("div", {
    "data-slot": "progress-indicator",
    style: {
      transform: `translateX(-${100 - v}%)`
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Skeleton — pulsing placeholder for loading content. Size it with style/className. */
function Skeleton({
  className = "",
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "skeleton",
    className: className,
    style: style
  }, props));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Spinner — indeterminate loading indicator.
 * Mirrors the source's LoaderCircle (lucide) spinner: size-4, animate-spin.
 */
function Spinner({
  className = "",
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "data-slot": "spinner",
    role: "status",
    "aria-label": "Loading",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: style
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56"
  }));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary interactive control.
 *
 * Vanilla recreation of @szum-tech/design-system Button. Styling is driven by
 * the `data-slot="button"` + `data-variant` + `data-size` attributes (see
 * components/components.css), so it renders identically under React or Preact
 * with no Tailwind build step.
 */
function Button({
  variant = "default",
  size = "default",
  fullWidth = false,
  loading = false,
  loadingPosition = "start",
  startIcon = null,
  endIcon = null,
  disabled = false,
  type = "button",
  className = "",
  children,
  ...props
}) {
  const isDisabled = disabled || loading;
  const isIcon = typeof size === "string" && size.startsWith("icon");
  const pos = isIcon ? "center" : loadingPosition;
  const start = loading && pos === "start" ? /*#__PURE__*/React.createElement(__ds_scope.Spinner, null) : startIcon;
  const end = loading && pos === "end" ? /*#__PURE__*/React.createElement(__ds_scope.Spinner, null) : endIcon;
  const center = loading && pos === "center";
  return /*#__PURE__*/React.createElement("button", _extends({
    "data-slot": "button",
    "data-variant": variant,
    "data-size": size,
    "data-full-width": fullWidth ? "true" : undefined,
    "data-state": loading ? "loading" : undefined,
    type: type,
    disabled: isDisabled,
    "aria-disabled": isDisabled || undefined,
    className: className
  }, props), start, center ? /*#__PURE__*/React.createElement(__ds_scope.Spinner, null) : children, end);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — native checkbox styled to the system. Controlled or uncontrolled. */
function Checkbox({
  invalid = false,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    "data-slot": "checkbox",
    "aria-invalid": invalid || undefined,
    className: className
  }, props));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — vertical stack wrapping a Label, control and optional description /
 * error. A lightweight take on the source's Field family for form layout.
 */
function Field({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "field",
    className: className,
    style: {
      display: "grid",
      gap: "0.375rem"
    }
  }, props), children);
}

/** FieldDescription — muted helper text below a control. */
function FieldDescription({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    "data-slot": "field-description",
    className: className,
    style: {
      margin: 0,
      fontSize: "var(--font-size-body-sm)",
      color: "var(--muted-foreground)"
    }
  }, props), children);
}

/** FieldError — error message; rendered in the error color. */
function FieldError({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    "data-slot": "field-error",
    className: className,
    style: {
      margin: 0,
      fontSize: "var(--font-size-body-sm)",
      color: "var(--error)"
    }
  }, props), children);
}
Object.assign(__ds_scope, { Field, FieldDescription, FieldError });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Input — single-line text field. Set `invalid` to show the error ring. */
function Input({
  invalid = false,
  className = "",
  type = "text",
  ...props
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    "data-slot": "input",
    "aria-invalid": props["aria-invalid"] || invalid || undefined,
    className: className
  }, props));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label — accessible form label. Pair via `htmlFor`. */
function Label({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    "data-slot": "label",
    className: className
  }, props), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select — native select styled to match Input. Pass <option> children. */
function Select({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    "data-slot": "select",
    className: className
  }, props), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — on/off toggle. Sizes: default | sm. Renders a native checkbox. */
function Switch({
  size = "default",
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    "data-slot": "switch",
    "data-size": size,
    className: className
  }, props));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/widget-studio/app.jsx
try { (() => {
const S = window.VanillaTailwindDesignSystem_1f5ec4;
const {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Status,
  Input,
  Select,
  Switch,
  Checkbox,
  Label,
  Field,
  FieldDescription,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Separator,
  Avatar,
  AvatarFallback
} = S;
const Ic = window.Icons;
const WIDGETS = [{
  id: 1,
  name: "Free Shipping Bar",
  type: "Announcement bar",
  icon: "Truck",
  status: "success",
  statusLabel: "Live",
  impressions: "48.2k",
  enabled: true
}, {
  id: 2,
  name: "Gift With Purchase",
  type: "Cart upsell",
  icon: "Gift",
  status: "success",
  statusLabel: "Live",
  impressions: "31.7k",
  enabled: true
}, {
  id: 3,
  name: "Product Reviews",
  type: "Product page",
  icon: "Star",
  status: "warning",
  statusLabel: "Low traffic",
  impressions: "12.0k",
  enabled: true
}, {
  id: 4,
  name: "Countdown Timer",
  type: "Announcement bar",
  icon: "Timer",
  status: "default",
  statusLabel: "Draft",
  impressions: "—",
  enabled: false
}];
function Stat({
  label,
  value,
  delta,
  positive
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardDescription, null, label), /*#__PURE__*/React.createElement(CardTitle, null, /*#__PURE__*/React.createElement("span", {
    className: "stat-val"
  }, value))), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement("span", {
    className: "stat-delta",
    style: {
      color: positive ? "var(--success)" : "var(--muted-foreground)"
    }
  }, delta)));
}
function Editor({
  widget,
  open,
  onClose,
  onSave
}) {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("bar");
  const [enabled, setEnabled] = React.useState(true);
  React.useEffect(() => {
    if (widget) {
      setName(widget.name);
      setEnabled(widget.enabled);
    } else {
      setName("");
      setEnabled(true);
    }
  }, [widget, open]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    "data-open": open,
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: "panel",
    "data-open": open,
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, widget ? "Edit widget" : "New widget"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--muted-foreground)"
    }
  }, "Configure how it appears on your storefront.")), /*#__PURE__*/React.createElement("button", {
    className: "x",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Ic.X, null))), /*#__PURE__*/React.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "wn"
  }, "Widget name"), /*#__PURE__*/React.createElement(Input, {
    id: "wn",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "e.g. Free Shipping Bar"
  })), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "wt"
  }, "Placement"), /*#__PURE__*/React.createElement(Select, {
    id: "wt",
    value: type,
    onChange: e => setType(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "bar"
  }, "Announcement bar"), /*#__PURE__*/React.createElement("option", {
    value: "cart"
  }, "Cart upsell"), /*#__PURE__*/React.createElement("option", {
    value: "product"
  }, "Product page"), /*#__PURE__*/React.createElement("option", {
    value: "popup"
  }, "Popup")), /*#__PURE__*/React.createElement(FieldDescription, null, "Where this theme app extension renders.")), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "msg"
  }, "Message"), /*#__PURE__*/React.createElement(Input, {
    id: "msg",
    defaultValue: "Free shipping on orders over $75"
  })), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
    className: "toggle-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, "Show on storefront"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted-foreground)"
    }
  }, "Publish immediately after saving.")), /*#__PURE__*/React.createElement(Switch, {
    checked: enabled,
    onChange: e => setEnabled(e.target.checked)
  })), /*#__PURE__*/React.createElement("label", {
    className: "toggle-row",
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, "Mobile only"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted-foreground)"
    }
  }, "Restrict to small viewports.")), /*#__PURE__*/React.createElement(Checkbox, null))), /*#__PURE__*/React.createElement("div", {
    className: "panel-foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onSave({
      name,
      enabled
    })
  }, widget ? "Save changes" : "Create widget"))));
}
function App() {
  const [widgets, setWidgets] = React.useState(WIDGETS);
  const [nav, setNav] = React.useState("Dashboard");
  const [editing, setEditing] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const toggle = id => setWidgets(ws => ws.map(w => w.id === id ? {
    ...w,
    enabled: !w.enabled,
    status: !w.enabled ? "success" : "default",
    statusLabel: !w.enabled ? "Live" : "Draft"
  } : w));
  const openNew = () => {
    setEditing(null);
    setOpen(true);
  };
  const openEdit = w => {
    setEditing(w);
    setOpen(true);
  };
  const save = data => {
    if (editing) setWidgets(ws => ws.map(w => w.id === editing.id ? {
      ...w,
      name: data.name,
      enabled: data.enabled
    } : w));else setWidgets(ws => [...ws, {
      id: Date.now(),
      name: data.name || "Untitled widget",
      type: "Announcement bar",
      icon: "Layers",
      status: data.enabled ? "success" : "default",
      statusLabel: data.enabled ? "Live" : "Draft",
      impressions: "0",
      enabled: data.enabled
    }]);
    setOpen(false);
  };
  const filtered = widgets.filter(w => w.name.toLowerCase().includes(query.toLowerCase()));
  const NavItem = ({
    id,
    icon: Icon,
    label
  }) => /*#__PURE__*/React.createElement("button", {
    className: "nav-item",
    "data-active": nav === id,
    onClick: () => setNav(id)
  }, /*#__PURE__*/React.createElement(Icon, null), " ", label);
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-mark"
  }, "W"), /*#__PURE__*/React.createElement("div", {
    className: "brand-name"
  }, "Widget Studio")), /*#__PURE__*/React.createElement("div", {
    className: "nav"
  }, /*#__PURE__*/React.createElement(NavItem, {
    id: "Dashboard",
    icon: Ic.Grid,
    label: "Dashboard"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "Widgets",
    icon: Ic.Layers,
    label: "Widgets"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "Analytics",
    icon: Ic.Chart,
    label: "Analytics"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "Settings",
    icon: Ic.Settings,
    label: "Settings"
  })), /*#__PURE__*/React.createElement("div", {
    className: "side-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "store"
  }, /*#__PURE__*/React.createElement(Avatar, null, /*#__PURE__*/React.createElement(AvatarFallback, null, "BM")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "store-name"
  }, "Bass Mafia"), /*#__PURE__*/React.createElement("div", {
    className: "store-plan"
  }, "Shopify \xB7 Advanced"))))), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("h1", null, nav), /*#__PURE__*/React.createElement("div", {
    className: "search"
  }, /*#__PURE__*/React.createElement(Ic.Search, null), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search widgets…",
    value: query,
    onChange: e => setQuery(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    startIcon: /*#__PURE__*/React.createElement(Ic.Plus, null),
    onClick: openNew
  }, "New widget")), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stats"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Active widgets",
    value: String(widgets.filter(w => w.enabled).length),
    delta: "↑ 1 this week",
    positive: true
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Impressions (30d)",
    value: "92.1k",
    delta: "↑ 12.4% vs prev",
    positive: true
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Assisted revenue",
    value: "$8,240",
    delta: "↑ 6.1% vs prev",
    positive: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Your widgets"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Manage theme")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Widget"), /*#__PURE__*/React.createElement(TableHead, null, "Placement"), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, {
    className: "right"
  }, "Impressions"), /*#__PURE__*/React.createElement(TableHead, {
    className: "right"
  }, "Enabled"), /*#__PURE__*/React.createElement(TableHead, null))), /*#__PURE__*/React.createElement(TableBody, null, filtered.map(w => {
    const WIcon = Ic[w.icon] || Ic.Layers;
    return /*#__PURE__*/React.createElement(TableRow, {
      key: w.id
    }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("div", {
      className: "cellrow"
    }, /*#__PURE__*/React.createElement(Avatar, {
      style: {
        background: "var(--secondary)"
      }
    }, /*#__PURE__*/React.createElement(AvatarFallback, {
      style: {
        background: "transparent",
        color: "var(--secondary-foreground)"
      }
    }, /*#__PURE__*/React.createElement(WIcon, {
      width: 16,
      height: 16
    }))), /*#__PURE__*/React.createElement("span", {
      className: "wname"
    }, w.name))), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
      className: "wtype"
    }, w.type)), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Status, {
      variant: w.status
    }, w.statusLabel)), /*#__PURE__*/React.createElement(TableCell, {
      className: "right"
    }, w.impressions), /*#__PURE__*/React.createElement(TableCell, {
      className: "right"
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: w.enabled,
      onChange: () => toggle(w.id)
    })), /*#__PURE__*/React.createElement(TableCell, {
      className: "right"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => openEdit(w)
    }, "Edit")));
  }))))))), /*#__PURE__*/React.createElement(Editor, {
    widget: editing,
    open: open,
    onClose: () => setOpen(false),
    onSave: save
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/widget-studio/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/widget-studio/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Minimal inline icon set (Lucide path data — the icon library this DS documents).
const I = paths => props => /*#__PURE__*/React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props), paths);
window.Icons = {
  Grid: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }))),
  Layers: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
  }))),
  Chart: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 17V9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 17V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 17v-3"
  }))),
  Settings: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }))),
  Search: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))),
  Plus: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5v14"
  }))),
  X: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))),
  Truck: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 18H9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "2"
  }))),
  Gift: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
  }))),
  Star: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11.5 2.8 8.6 8.7l-6.5.9 4.7 4.6-1.1 6.5 5.8-3 5.8 3-1.1-6.5 4.7-4.6-6.5-.9z"
  }))),
  Timer: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 2h4M12 14l3-3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "8"
  })))
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/widget-studio/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Status = __ds_scope.Status;

__ds_ns.StatusIndicator = __ds_scope.StatusIndicator;

__ds_ns.StatusLabel = __ds_scope.StatusLabel;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardAction = __ds_scope.CardAction;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarImage = __ds_scope.AvatarImage;

__ds_ns.AvatarFallback = __ds_scope.AvatarFallback;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.TableHeader = __ds_scope.TableHeader;

__ds_ns.TableBody = __ds_scope.TableBody;

__ds_ns.TableRow = __ds_scope.TableRow;

__ds_ns.TableHead = __ds_scope.TableHead;

__ds_ns.TableCell = __ds_scope.TableCell;

__ds_ns.TableCaption = __ds_scope.TableCaption;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.AlertTitle = __ds_scope.AlertTitle;

__ds_ns.AlertDescription = __ds_scope.AlertDescription;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.FieldDescription = __ds_scope.FieldDescription;

__ds_ns.FieldError = __ds_scope.FieldError;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
