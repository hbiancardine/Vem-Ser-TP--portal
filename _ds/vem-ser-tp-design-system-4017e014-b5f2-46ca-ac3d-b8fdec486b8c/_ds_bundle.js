/* @ds-bundle: {"format":3,"namespace":"VemSerTPDesignSystem_4017e0","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"JobCard","sourcePath":"components/data-display/JobCard.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"BackLink","sourcePath":"components/navigation/BackLink.jsx"},{"name":"PortalHeader","sourcePath":"components/navigation/PortalHeader.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"aa853c20e268","components/data-display/Avatar.jsx":"e92b0a9f9506","components/data-display/JobCard.jsx":"0b78eddbe240","components/data-display/Tag.jsx":"da7f2bdd9894","components/forms/Button.jsx":"de67fd641e5c","components/forms/Checkbox.jsx":"5052ef979bda","components/forms/Input.jsx":"6384fbfb02e2","components/forms/Select.jsx":"196942e186cd","components/forms/Toggle.jsx":"ab2cfccb0fe8","components/navigation/BackLink.jsx":"e11797b76e26","components/navigation/PortalHeader.jsx":"149273a71c7b","ui_kits/mobile/MobileHome.jsx":"6e6bebdb9f6e","ui_kits/recruitment-portal/CadastroScreen.jsx":"9bf83f791b45","ui_kits/recruitment-portal/HomeScreen.jsx":"3a9535aeb266","ui_kits/recruitment-portal/VagaDetailScreen.jsx":"df49ad9e0029","ui_kits/recruitment-portal/VagasScreen.jsx":"06ccee0f33aa","ui_kits/recruitment-portal/app.jsx":"496a41f6be16","ui_kits/recruitment-portal/jobs.js":"76eeabcbe415","ui_kits/recruitment-portal/parts.jsx":"b99a3305f136"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VemSerTPDesignSystem_4017e0 = window.VemSerTPDesignSystem_4017e0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — the Teleperformance "TP" mark (the stylized P-arrow). Single-path
 * vector that paints with currentColor; set `color` to recolor it.
 */
function Logo({
  height = 36,
  color = 'var(--tp-black)',
  title = 'TP',
  style,
  ...rest
}) {
  const ratio = 34 / 36;
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": title,
    width: height * ratio,
    height: height,
    viewBox: "0 0 34 36",
    fill: "none",
    style: {
      color,
      display: 'block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M 6.561 6.783 L 0 6.783 C 0 6.991 0.163 7.148 0.325 7.304 C 2.169 9.078 4.718 11.53 6.561 13.304 C 6.67 13.409 6.833 13.304 6.833 13.2 L 6.833 7.044 C 6.833 6.887 6.724 6.783 6.561 6.783 Z M 21.582 0 L 21.094 0 L 21.094 6.104 C 21.094 6.47 20.769 6.783 20.389 6.783 L 14.478 6.783 C 14.316 6.783 14.207 6.887 14.207 7.044 L 14.207 29.426 C 14.207 29.791 13.882 30.104 13.502 30.104 L 7.646 30.104 C 7.483 30.104 7.375 30.313 7.483 30.417 C 8.785 31.67 11.333 34.122 12.635 35.374 C 12.96 35.687 13.448 36 14.045 36 L 19.684 36 C 20.226 36 20.66 35.583 20.66 35.061 L 20.66 22.435 C 20.66 22.278 20.769 22.174 20.931 22.174 L 21.528 22.174 C 27.872 22.174 34 18.47 34 11.061 C 34 3.652 29.336 0 21.582 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular user marker. Shows an image, initials, or a default
 * user glyph on a black disc (the portal's signed-in avatar).
 */
function Avatar({
  src,
  name,
  size = 40,
  style,
  ...rest
}) {
  const initials = name ? name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() : null;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      background: 'var(--tp-black)',
      color: 'var(--tp-white)',
      overflow: 'hidden',
      flexShrink: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: size * 0.38,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials ? initials : /*#__PURE__*/React.createElement("svg", {
    width: size * 0.55,
    height: size * 0.55,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7",
    fill: "currentColor"
  })));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  presencial: 'var(--tp-purple)',
  remoto: 'var(--tp-magenta)',
  hibrido: 'var(--tp-green-600)',
  neutral: 'var(--tp-gray-600)'
};

/**
 * Tag — outlined pill used for job modality (Presencial / Remoto / Híbrido)
 * and other small labels. Outline style by default; `solid` fills it.
 */
function Tag({
  children,
  tone = 'presencial',
  solid = false,
  style,
  ...rest
}) {
  const color = TONES[tone] || tone;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-2xs)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1.2,
      borderRadius: 'var(--radius-pill)',
      border: `1.5px solid ${color}`,
      color: solid ? 'var(--tp-white)' : color,
      background: solid ? color : 'transparent',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data-display/JobCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JobCard — the portal's signature vacancy card: white, softly rounded,
 * elevated. Title in the display face, a modality Tag, location, a short
 * description, and an opportunities count in magenta.
 */
function JobCard({
  title,
  modality = 'presencial',
  modalityLabel,
  location,
  description,
  opportunities,
  onClick,
  style,
  ...rest
}) {
  const modLabels = {
    presencial: 'Presencial',
    remoto: 'Remoto',
    hibrido: 'Híbrido'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: 265,
      minHeight: 258,
      boxSizing: 'border-box',
      padding: '24px 26px',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform .15s ease, box-shadow .15s ease',
      ...style
    },
    onMouseEnter: e => {
      if (onClick) {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-pop)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'var(--shadow-card)';
    }
  }, rest), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 14px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-title)',
      lineHeight: 1.15,
      letterSpacing: 'var(--ls-display)',
      color: 'var(--tp-black)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: modality
  }, modalityLabel || modLabels[modality] || modality), location && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-2xs)',
      color: 'var(--tp-gray-400)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wide)'
    }
  }, location)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--tp-gray-600)',
      flexGrow: 1
    }
  }, description), opportunities != null && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--color-primary)'
    }
  }, opportunities, " ", opportunities === 1 ? 'Oportunidade' : 'Oportunidades'));
}
Object.assign(__ds_scope, { JobCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/JobCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Vem ser TP primary action control.
 * Pill-shaped, uppercase label, optional trailing circular arrow badge.
 */
function Button({
  children,
  variant = 'solid',
  size = 'md',
  arrow = false,
  block = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 18px',
      height: 34,
      fontSize: 'var(--fs-xs)'
    },
    md: {
      padding: '0 26px',
      height: 44,
      fontSize: 'var(--fs-md)'
    },
    lg: {
      padding: '0 34px',
      height: 54,
      fontSize: 'var(--fs-lg)'
    }
  };
  const variants = {
    solid: {
      background: 'var(--tp-black)',
      color: 'var(--tp-white)',
      border: '1.5px solid var(--tp-black)'
    },
    magenta: {
      background: 'var(--color-primary)',
      color: 'var(--tp-white)',
      border: '1.5px solid var(--color-primary)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--tp-black)',
      border: '1.5px solid var(--tp-black)'
    },
    'outline-invert': {
      background: 'transparent',
      color: 'var(--tp-white)',
      border: '1.5px solid var(--tp-white)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.solid;
  const badgeSize = s.height * 0.62;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--sp-3)',
      height: s.height,
      padding: s.padding,
      width: block ? '100%' : 'auto',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: s.fontSize,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'filter .15s ease, transform .05s ease',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.filter = 'none';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(1.12)';
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: badgeSize,
      height: badgeSize,
      borderRadius: 'var(--radius-full)',
      border: `1.5px solid ${v.color}`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: badgeSize * 0.42,
    height: badgeSize * 0.42,
    viewBox: "0 0 8 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 1L6.5 6L1.5 11",
    stroke: v.color,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Checkbox — square control with a magenta check, matching the portal's
 * consent rows ("Li e aceito o termo de privacidade"). Supports rich label
 * content via children.
 */
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  children,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: id,
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--sp-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--color-text)',
      lineHeight: 'var(--lh-snug)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      width: 18,
      height: 18,
      marginTop: 1,
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--color-border)'}`,
      background: on ? 'var(--color-primary)' : 'var(--color-surface)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all .12s ease'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "9",
    viewBox: "0 0 11 9",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4.5L4 7.5L10 1",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Input — Vem ser TP pill text field with a floating label that
 * notches the top border. Filled variant uses a soft gray fill.
 */
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  type = 'text',
  required = false,
  filled = false,
  error,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const borderColor = error ? 'var(--color-primary)' : focused ? 'var(--tp-gray-700)' : 'var(--color-border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      position: 'absolute',
      left: 18,
      top: -7,
      padding: '0 6px',
      background: filled ? 'var(--color-surface-filled)' : 'var(--color-surface)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-2xs)',
      color: error ? 'var(--color-primary)' : 'var(--tp-gray-400)',
      zIndex: 1,
      pointerEvents: 'none'
    }
  }, label, required ? '*' : ''), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder ? placeholder + (required && !label ? '*' : '') : undefined,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: 44,
      padding: '0 22px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-md)',
      color: 'var(--color-text)',
      background: filled ? 'var(--color-surface-filled)' : 'var(--color-surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-pill)',
      outline: 'none',
      transition: 'border-color .15s ease'
    }
  }, rest)), error && typeof error === 'string' && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      marginLeft: 22,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-2xs)',
      color: 'var(--color-primary)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Select — Vem ser TP pill dropdown with a chevron, matching the
 * "Grau de Escolaridade" control. Cosmetic open state only.
 */
function Select({
  label,
  placeholder = 'Selecione',
  options = [],
  value,
  required = false,
  filled = false,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      position: 'absolute',
      left: 18,
      top: -7,
      padding: '0 6px',
      background: filled ? 'var(--color-surface-filled)' : 'var(--color-surface)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-2xs)',
      color: 'var(--tp-gray-400)',
      zIndex: 1,
      pointerEvents: 'none'
    }
  }, label, required ? '*' : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: 44,
      padding: '0 48px 0 22px',
      boxSizing: 'border-box',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-md)',
      color: value ? 'var(--color-text)' : 'var(--tp-gray-400)',
      background: filled ? 'var(--color-surface-filled)' : 'var(--color-surface)',
      border: `1px solid ${focused ? 'var(--tp-gray-700)' : 'var(--color-border)'}`,
      borderRadius: 'var(--radius-pill)',
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color .15s ease'
    }
  }, rest), !value && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder), options.map(opt => {
    const o = typeof opt === 'string' ? {
      value: opt,
      label: opt
    } : opt;
    return /*#__PURE__*/React.createElement("option", {
      key: o.value,
      value: o.value
    }, o.label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 20,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "9",
    viewBox: "0 0 14 9",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1.5L7 7.5L13 1.5",
    stroke: "var(--tp-gray-700)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Toggle — pill switch that turns magenta when on. Cosmetic; wire `onChange`
 * for behavior. Used for opt-in preferences in the portal.
 */
function Toggle({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  const track = /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    style: {
      position: 'relative',
      width: 46,
      height: 26,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--color-primary)' : 'var(--tp-gray-250)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background .18s ease',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-full)',
      background: 'var(--tp-white)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
      transition: 'left .18s ease'
    }
  }));
  if (!label) return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), track);
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--color-text)',
      ...style
    }
  }, rest), track, /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BackLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BackLink — the magenta "Voltar" link with a circular chevron, used at the
 * top of detail & form screens.
 */
function BackLink({
  children = 'Voltar',
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-lg)',
      color: 'var(--color-primary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
      borderRadius: 'var(--radius-full)',
      border: '1.5px solid var(--color-primary)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "12",
    viewBox: "0 0 8 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 1L1.5 6L6.5 11",
    stroke: "var(--color-primary)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { BackLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BackLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PortalHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function WhatsApp({
  size = 30,
  color = 'var(--tp-black)'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    "aria-hidden": "true",
    style: {
      color
    }
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.6.7.7-3.5-.2-.4c-1-1.6-1.6-3.4-1.6-5.3 0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10.1-10.2 10.1zm5.5-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
  }));
}

/**
 * PortalHeader — the fixed white top bar of the Vem ser TP portal.
 * Logo at left; right side shows the recruiter contact + WhatsApp and either
 * an ENTRAR button (guest) or a greeting + Avatar (signed in).
 */
function PortalHeader({
  user,
  onLogin,
  onLogoClick,
  contactLabel = 'Fale com um\nrecrutador',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 'var(--header-h)',
      padding: '0 var(--gutter)',
      background: 'var(--color-surface)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: onLogoClick ? 'pointer' : 'default'
    },
    onClick: onLogoClick
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 36
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--tp-gray-700)',
      textAlign: 'right',
      lineHeight: 1.1,
      whiteSpace: 'pre-line'
    }
  }, contactLabel), /*#__PURE__*/React.createElement(WhatsApp, {
    size: 30
  })), user ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--tp-gray-800)'
    }
  }, "Ol\xE1, ", user.name), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: user.name,
    src: user.avatar,
    size: 38
  })) : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "solid",
    size: "sm",
    onClick: onLogin
  }, "Entrar")));
}
Object.assign(__ds_scope, { PortalHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PortalHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/MobileHome.jsx
try { (() => {
// Mobile portal home — phone-width single-column recreation.
const {
  JobCard,
  Tag,
  Logo,
  Button
} = window.VemSerTPDesignSystem_4017e0;
function MobileTopBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--tp-gray-700)',
      lineHeight: 1.05,
      textAlign: 'right'
    }
  }, "Fale com um", /*#__PURE__*/React.createElement("br", null), "recrutador"), /*#__PURE__*/React.createElement(Logo, {
    height: 30
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#000',
      color: '#fff',
      borderRadius: 100,
      padding: '8px 20px',
      fontSize: 12,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Entrar"));
}
function MobileHome() {
  const [profile, setProfile] = React.useState('iniciante');
  const jobs = window.TP_JOBS.filter(j => j.profile === profile);
  const shown = jobs.length ? jobs : window.TP_JOBS.slice(0, 5);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)',
      minHeight: '100%',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(MobileTopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 300,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-banner.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.45))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '28px 22px',
      color: '#fff',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.05
    }
  }, "Seu futuro come\xE7a ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: '#FFE14D'
    }
  }, "aqui!")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: 14,
      fontWeight: 300
    }
  }, "Queremos te ver aqui fazendo carreira e hist\xF3ria conosco."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "solid"
  }, "Cadastre-se")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 22px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 22px',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 26,
      lineHeight: 1.15,
      letterSpacing: '.01em',
      color: '#000'
    }
  }, "Temos vagas para todo tipo de perfil. Qual o seu?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      overflowX: 'auto',
      paddingBottom: 6,
      borderBottom: '1px solid var(--tp-gray-200)'
    }
  }, window.TP_PROFILES.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => setProfile(p.id),
    style: {
      flexShrink: 0,
      background: 'none',
      border: 'none',
      padding: '0 0 8px',
      cursor: 'pointer',
      fontSize: 13,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      fontWeight: profile === p.id ? 700 : 400,
      color: profile === p.id ? '#000' : 'var(--tp-gray-600)',
      borderBottom: profile === p.id ? '2px solid var(--tp-magenta)' : '2px solid transparent',
      marginBottom: -7
    }
  }, p.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      padding: '24px 22px 36px'
    }
  }, shown.map(j => /*#__PURE__*/React.createElement(JobCard, {
    key: j.id,
    title: j.title,
    modality: j.modality,
    location: j.location,
    description: j.description,
    opportunities: j.opportunities,
    onClick: () => {},
    style: {
      width: '100%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(100deg, var(--tp-purple), var(--tp-magenta))',
      padding: '22px',
      textAlign: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.4,
      fontWeight: 500
    }
  }, "Se liga no ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#FFE14D'
    }
  }, "canal exclusivo para voc\xEA"), ", candidato, para tirar todas as suas d\xFAvidas com um de nossos recrutadores.")));
}
window.MobileHome = MobileHome;
ReactDOM.createRoot(document.getElementById('screen')).render(/*#__PURE__*/React.createElement(MobileHome, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/MobileHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruitment-portal/CadastroScreen.jsx
try { (() => {
// Cadastro — registration form in a large rounded panel.
const {
  PortalHeader,
  BackLink,
  Button,
  Input,
  Select,
  Checkbox
} = window.VemSerTPDesignSystem_4017e0;
function CadastroScreen({
  onLogin,
  onBack,
  onSubmit
}) {
  const [pcd, setPcd] = React.useState(false);
  const [terms, setTerms] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(PortalHeader, {
    onLogin: onLogin
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(BackLink, {
    onClick: onBack
  }, "Voltar para Home")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      padding: '36px var(--gutter) 72px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 0',
      maxWidth: 440,
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 28px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-display)',
      letterSpacing: 'var(--ls-display)',
      lineHeight: 1.15,
      color: 'var(--tp-black)'
    }
  }, "Preencha corretamente todos os dados e clique em avan\xE7ar."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-h2)',
      lineHeight: 1.2,
      color: 'var(--tp-gray-800)'
    }
  }, "Voc\xEA est\xE1 dando os primeiros passos no seu caminho ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--tp-black)'
    }
  }, "#ParaSerTP"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 0',
      maxWidth: 640,
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-soft)',
      padding: '40px 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Nome Completo",
    required: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: false,
    onChange: () => {}
  }, "Nome Social"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "CPF",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Data de Nascimento",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Celular",
    required: true,
    style: {
      maxWidth: 300
    }
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Grau de Escolaridade",
    options: ['Ensino Médio', 'Técnico', 'Graduação', 'Pós-graduação']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "CEP",
    style: {
      maxWidth: 300
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Endere\xE7o",
    filled: true,
    defaultValue: "Av. Paulista, 1000"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Complemento",
    filled: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Cidade/Estado",
    filled: true,
    defaultValue: "S\xE3o Paulo / SP"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Senha",
    type: "password",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Confirma\xE7\xE3o de Senha",
    type: "password",
    required: true
  })), /*#__PURE__*/React.createElement(Checkbox, {
    checked: pcd,
    onChange: setPcd
  }, "Declaro que sou pessoa com defici\xEAncia"), /*#__PURE__*/React.createElement(Checkbox, null, "Gostaria de receber mensagens da TP com a divulga\xE7\xE3o de novas oportunidades de trabalho"), /*#__PURE__*/React.createElement(Checkbox, {
    checked: terms,
    onChange: setTerms
  }, "Li e aceito o ", /*#__PURE__*/React.createElement("strong", null, "termo de privacidade.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    arrow: true,
    onClick: onSubmit
  }, "Avan\xE7ar"))))));
}
window.CadastroScreen = CadastroScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruitment-portal/CadastroScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruitment-portal/HomeScreen.jsx
try { (() => {
// Home screen — hero, headline, profile tabs, job grid, recruiter footer.
const {
  PortalHeader,
  JobCard
} = window.VemSerTPDesignSystem_4017e0;
function HomeScreen({
  user,
  onLogin,
  onCadastro,
  onOpenJob
}) {
  const [profile, setProfile] = React.useState('iniciante');
  const jobs = window.TP_JOBS.filter(j => j.profile === profile);
  const shown = jobs.length ? jobs : window.TP_JOBS.slice(0, 6);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(PortalHeader, {
    user: user,
    onLogin: onLogin
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 420,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-banner.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      padding: '0 var(--gutter)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-display)',
      lineHeight: 1.05
    }
  }, "Seu futuro come\xE7a ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "aqui"), "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-lg)',
      fontWeight: 'var(--fw-light)',
      lineHeight: 'var(--lh-snug)'
    }
  }, "Queremos te ver aqui fazendo carreira e hist\xF3ria conosco.")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      maxWidth: 280,
      fontSize: 'var(--fs-lg)',
      lineHeight: 'var(--lh-snug)'
    }
  }, "A gente nunca para de evoluir. E se voc\xEA \xE9 desse time, ent\xE3o s\xF3 vem \u2014 tem uma vaga na medida te esperando. ", /*#__PURE__*/React.createElement("strong", null, "#VemSerTP")), /*#__PURE__*/React.createElement(UploadCard, {
    onCadastro: onCadastro
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 36px',
      maxWidth: 760,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-hero)',
      lineHeight: 1.1,
      letterSpacing: 'var(--ls-display)',
      color: 'var(--tp-black)'
    }
  }, "Temos vagas para todo tipo de perfil. Qual o seu?"), /*#__PURE__*/React.createElement(ProfileTabs, {
    active: profile,
    onChange: setProfile
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px var(--gutter) 64px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 265px)',
      gap: 32,
      justifyContent: 'start'
    }
  }, shown.map(j => /*#__PURE__*/React.createElement(JobCard, {
    key: j.id,
    title: j.title,
    modality: j.modality,
    location: j.location,
    description: j.description,
    opportunities: j.opportunities,
    onClick: () => onOpenJob(j)
  }))), /*#__PURE__*/React.createElement(RecruiterFooter, null));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruitment-portal/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruitment-portal/VagaDetailScreen.jsx
try { (() => {
// Vaga detail — job overview, Bem-Estar TP section, related-jobs rail with CTA card.
const {
  PortalHeader,
  JobCard,
  Tag,
  BackLink,
  Button
} = window.VemSerTPDesignSystem_4017e0;
function LocationPin({
  size = 22
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z",
    fill: "var(--tp-magenta)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.6",
    fill: "#fff"
  }));
}
function VagaDetailScreen({
  job,
  user,
  onLogin,
  onBack,
  onCadastro,
  onOpenJob
}) {
  const j = job || window.TP_JOBS[0];
  const modLabels = {
    presencial: 'Presencial',
    remoto: 'Remoto',
    hibrido: 'Híbrido'
  };
  const related = window.TP_JOBS.filter(x => x.id !== j.id).slice(0, 2);
  const tasks = ['Gerenciar, desenvolver e motivar a equipe de supervisores através de feedback;', 'Client Face responsável por apresentar resultados e reuniões com o cliente;', 'Atuar como trusted advisor quando necessário;', 'Gerenciar conflitos e eventuais mudanças, inovar e liderar a equipe com iniciativa;', 'Controlar relatórios e indicadores para alcançar/manter/melhorar resultados operacionais;', 'Apresentar resultados em Português/Inglês.'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(PortalHeader, {
    user: user,
    onLogin: onLogin
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(BackLink, {
    onClick: onBack
  }, "Voltar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      padding: '20px var(--gutter) 64px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 18px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--tp-black)'
    }
  }, j.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(LocationPin, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-lg)',
      color: 'var(--tp-black)'
    }
  }, j.location)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 36px',
      color: 'var(--tp-purple)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)'
    }
  }, modLabels[j.modality]), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-h3)',
      color: 'var(--tp-black)'
    }
  }, "Overview"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--tp-gray-800)'
    }
  }, "Voc\xEA que j\xE1 atuou nessa \xE1rea e possui viv\xEAncia com vendas e gest\xE3o de pessoas, queremos te conhecer! Suas atividades principais ser\xE3o:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '0 0 40px',
      paddingLeft: 20,
      color: 'var(--tp-gray-800)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, tasks.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      marginBottom: 8
    }
  }, t))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-h3)',
      color: 'var(--tp-purple)'
    }
  }, "Bem-Estar TP"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--tp-purple-500)'
    }
  }, "Aqui cuidamos dos nossos colaboradores dos p\xE9s \xE0 cabe\xE7a, com iniciativas voltadas para sa\xFAde f\xEDsica e mental, promovendo um ambiente que fortalece o equil\xEDbrio entre vida pessoal e profissional \u2014 apoio psicol\xF3gico, semana do Bem-estar, Copa TP, grupos de corrida e parcerias com academias, pilates e yoga.")), /*#__PURE__*/React.createElement("aside", {
    style: {
      flex: '0 0 300px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-h2)',
      color: 'var(--tp-black)',
      lineHeight: 1.1
    }
  }, "Outras vagas que combinam com voc\xEA"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tp-black)',
      color: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: '28px 26px',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 18px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      lineHeight: 1.1
    }
  }, "Gostou dessa vaga?"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-invert",
    arrow: true,
    onClick: onCadastro
  }, "Cadastre-se")), related.map(r => /*#__PURE__*/React.createElement(JobCard, {
    key: r.id,
    title: r.title,
    modality: r.modality,
    location: r.location,
    description: r.description,
    opportunities: r.opportunities,
    onClick: () => onOpenJob(r),
    style: {
      width: '100%'
    }
  })))), /*#__PURE__*/React.createElement(RecruiterFooter, null));
}
window.VagaDetailScreen = VagaDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruitment-portal/VagaDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruitment-portal/VagasScreen.jsx
try { (() => {
// Vagas listing — search + filters rail and job grid.
const {
  PortalHeader,
  JobCard,
  Input,
  Select,
  Tag
} = window.VemSerTPDesignSystem_4017e0;
function VagasScreen({
  user,
  onLogin,
  onOpenJob
}) {
  const [q, setQ] = React.useState('');
  const [mod, setMod] = React.useState('');
  const jobs = window.TP_JOBS.filter(j => (!q || j.title.toLowerCase().includes(q.toLowerCase())) && (!mod || j.modality === mod));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(PortalHeader, {
    user: user,
    onLogin: onLogin
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--tp-black)'
    }
  }, "Encontre a sua vaga"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      alignItems: 'center',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar por cargo",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 230
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Modalidade",
    value: mod,
    onChange: e => setMod(e.target.value),
    options: [{
      value: '',
      label: 'Todas as modalidades'
    }, {
      value: 'presencial',
      label: 'Presencial'
    }, {
      value: 'remoto',
      label: 'Remoto'
    }, {
      value: 'hibrido',
      label: 'Híbrido'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--tp-gray-600)'
    }
  }, jobs.length, " vagas encontradas"), mod && /*#__PURE__*/React.createElement(Tag, {
    tone: mod
  }, mod))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px var(--gutter) 64px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 265px)',
      gap: 32,
      justifyContent: 'start'
    }
  }, jobs.map(j => /*#__PURE__*/React.createElement(JobCard, {
    key: j.id,
    title: j.title,
    modality: j.modality,
    location: j.location,
    description: j.description,
    opportunities: j.opportunities,
    onClick: () => onOpenJob(j)
  }))), /*#__PURE__*/React.createElement(RecruiterFooter, null));
}
window.VagasScreen = VagasScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruitment-portal/VagasScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruitment-portal/app.jsx
try { (() => {
// Orchestrator: routes between Home, Vagas, Vaga detail, Cadastro.
const USER = {
  name: 'Henrique Motta'
};
function App() {
  const [route, setRoute] = React.useState({
    name: 'home'
  });
  const [signedIn, setSignedIn] = React.useState(false);
  const user = signedIn ? USER : undefined;
  const go = (name, params = {}) => {
    window.scrollTo(0, 0);
    setRoute({
      name,
      ...params
    });
  };
  let screen;
  if (route.name === 'home') {
    screen = /*#__PURE__*/React.createElement(HomeScreen, {
      user: user,
      onLogin: () => setSignedIn(true),
      onCadastro: () => go('cadastro'),
      onOpenJob: j => go('vaga', {
        job: j
      })
    });
  } else if (route.name === 'vagas') {
    screen = /*#__PURE__*/React.createElement(VagasScreen, {
      user: user,
      onLogin: () => setSignedIn(true),
      onOpenJob: j => go('vaga', {
        job: j
      })
    });
  } else if (route.name === 'vaga') {
    screen = /*#__PURE__*/React.createElement(VagaDetailScreen, {
      job: route.job,
      user: user,
      onLogin: () => setSignedIn(true),
      onBack: () => go('vagas'),
      onCadastro: () => go('cadastro'),
      onOpenJob: j => go('vaga', {
        job: j
      })
    });
  } else if (route.name === 'cadastro') {
    screen = /*#__PURE__*/React.createElement(CadastroScreen, {
      onLogin: () => setSignedIn(true),
      onBack: () => go('home'),
      onSubmit: () => {
        setSignedIn(true);
        go('vagas');
      }
    });
  }
  const tabs = [['home', 'Home'], ['vagas', 'Vagas'], ['cadastro', 'Cadastro']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, screen, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 18,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 4,
      padding: 4,
      background: 'rgba(0,0,0,0.82)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-pop)',
      zIndex: 50,
      backdropFilter: 'blur(6px)'
    }
  }, tabs.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => go(id),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '7px 18px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      background: route.name === id || id === 'vagas' && route.name === 'vaga' ? '#fff' : 'transparent',
      color: route.name === id || id === 'vagas' && route.name === 'vaga' ? '#000' : '#fff'
    }
  }, label))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruitment-portal/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/recruitment-portal/jobs.js
try { (() => {
// Shared sample data for the Vem ser TP portal UI kit.
window.TP_JOBS = [{
  id: 1,
  title: 'Coordenador de operações bilíngue',
  modality: 'presencial',
  location: 'SÃO PAULO - SP',
  description: 'Gerenciar, desenvolver e motivar a equipe de supervisores através de feedback, a fim de garantir o cumprimento de métricas e procedimentos.',
  opportunities: 1,
  profile: 'experiente'
}, {
  id: 2,
  title: 'Supervisor de atendimento',
  modality: 'remoto',
  location: 'REMOTO',
  description: 'Responsável direto pelo desenvolvimento da equipe de Experts em Interação, contribuindo de forma efetiva para que alcancem e excedam a qualidade.',
  opportunities: 15,
  profile: 'iniciante'
}, {
  id: 3,
  title: 'Coordenador de operações',
  modality: 'remoto',
  location: 'REMOTO',
  description: 'Responsável pela gestão, resultados e execução de metodologia da TOPS e Best.',
  opportunities: 4,
  profile: 'experiente'
}, {
  id: 4,
  title: 'Expert em interação — Customer Care',
  modality: 'hibrido',
  location: 'RECIFE - PE',
  description: 'Atendimento humanizado ao cliente por voz e chat, com foco em resolução no primeiro contato e excelência na experiência.',
  opportunities: 120,
  profile: 'iniciante'
}, {
  id: 5,
  title: 'Analista de Workforce (WFM)',
  modality: 'remoto',
  location: 'REMOTO',
  description: 'Dimensionamento, escalas e forecast das operações, garantindo o equilíbrio entre nível de serviço e produtividade.',
  opportunities: 3,
  profile: 'experiente'
}, {
  id: 6,
  title: 'Jovem Aprendiz — Atendimento',
  modality: 'presencial',
  location: 'SÃO PAULO - SP',
  description: 'Primeiro emprego com trilha de formação TP: você aprende, cresce e constrói carreira com a gente. #VemSerTP',
  opportunities: 40,
  profile: 'estudante'
}, {
  id: 7,
  title: 'Especialista de Acessibilidade Digital',
  modality: 'hibrido',
  location: 'SÃO PAULO - SP',
  description: 'Vaga afirmativa para pessoas com deficiência, atuando na qualidade e acessibilidade dos nossos produtos digitais.',
  opportunities: 2,
  profile: 'pcd'
}, {
  id: 8,
  title: 'Supervisor de Qualidade',
  modality: 'presencial',
  location: 'BELO HORIZONTE - MG',
  description: 'Monitorar indicadores de qualidade, conduzir calibragens e desenvolver planos de ação junto às operações.',
  opportunities: 6,
  profile: 'experiente'
}, {
  id: 9,
  title: 'Estágio em People & Culture',
  modality: 'remoto',
  location: 'REMOTO',
  description: 'Apoie os times de recrutamento, employer branding e cultura em uma das maiores empregadoras do país.',
  opportunities: 5,
  profile: 'estudante'
}];
window.TP_PROFILES = [{
  id: 'iniciante',
  label: 'Iniciante'
}, {
  id: 'experiente',
  label: 'Experiente'
}, {
  id: 'estudante',
  label: 'Estudante'
}, {
  id: 'pcd',
  label: 'Pessoa com deficiência'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruitment-portal/jobs.js", error: String((e && e.message) || e) }); }

// ui_kits/recruitment-portal/parts.jsx
try { (() => {
// Shared portal parts: hero upload card, profile tabs, recruiter footer.
const {
  Button,
  Input
} = window.VemSerTPDesignSystem_4017e0;
function WhatsAppGlyph({
  size = 34,
  color = '#fff'
}) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    fill: 'none',
    'aria-hidden': true,
    style: {
      color
    }
  }, React.createElement('path', {
    fill: 'currentColor',
    d: 'M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.6.7.7-3.5-.2-.4c-1-1.6-1.6-3.4-1.6-5.3 0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10.1-10.2 10.1zm5.5-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z'
  }));
}

// Dark→light upload-CV card floating over the hero.
function UploadCard({
  onCadastro
}) {
  return React.createElement('div', {
    style: {
      width: 420,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-pop)',
      background: 'var(--color-surface)'
    }
  }, React.createElement('div', {
    style: {
      background: 'var(--tp-ink)',
      color: 'var(--tp-white)',
      textAlign: 'center',
      padding: '16px 24px',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase'
    }
  }, 'Temos vagas perfeitas para o seu perfil'), React.createElement('div', {
    style: {
      padding: '28px 30px 32px',
      textAlign: 'center'
    }
  }, React.createElement('p', {
    style: {
      margin: '0 0 16px',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--tp-gray-600)',
      fontWeight: 'var(--fw-medium)'
    }
  }, 'Faça o upload do seu currículo aqui'), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-pill)',
      padding: 4,
      marginBottom: 20
    }
  }, React.createElement('span', {
    style: {
      background: 'var(--tp-black)',
      color: '#fff',
      borderRadius: 'var(--radius-pill)',
      padding: '9px 18px',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      cursor: 'pointer'
    }
  }, 'Escolher arquivo'), React.createElement('span', {
    style: {
      color: 'var(--tp-gray-400)',
      fontSize: 'var(--fs-2xs)',
      marginLeft: 14
    }
  }, 'Nenhum arquivo selecionado')), React.createElement('p', {
    style: {
      margin: '0 0 18px',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--tp-gray-600)',
      fontWeight: 'var(--fw-medium)'
    }
  }, 'Ou faça o seu cadastro na nossa plataforma'), React.createElement(Button, {
    variant: 'solid',
    onClick: onCadastro
  }, 'Cadastre-se')));
}
function ProfileTabs({
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 36,
      flexWrap: 'wrap'
    }
  }, window.TP_PROFILES.map(p => React.createElement('button', {
    key: p.id,
    onClick: () => onChange(p.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 8px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-md)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      fontWeight: active === p.id ? 'var(--fw-bold)' : 'var(--fw-regular)',
      color: active === p.id ? 'var(--tp-black)' : 'var(--tp-gray-600)',
      borderBottom: active === p.id ? '2px solid var(--tp-magenta)' : '2px solid transparent'
    }
  }, p.label)));
}
function RecruiterFooter() {
  return React.createElement('div', {
    style: {
      background: 'linear-gradient(100deg, var(--tp-purple) 0%, var(--tp-magenta) 60%, var(--tp-magenta-600) 100%)',
      padding: '26px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      justifyContent: 'center'
    }
  }, React.createElement(WhatsAppGlyph, {
    size: 40
  }), React.createElement('p', {
    style: {
      margin: 0,
      maxWidth: 760,
      color: '#fff',
      fontSize: 'var(--fs-md)',
      lineHeight: 'var(--lh-snug)',
      fontWeight: 'var(--fw-medium)'
    }
  }, 'Se liga no ', React.createElement('strong', {
    style: {
      color: '#FFE14D'
    }
  }, 'canal exclusivo para você'), ', candidato, tratar e tirar todas as suas dúvidas sobre seu processo seletivo com um de nossos recrutadores.'));
}
Object.assign(window, {
  WhatsAppGlyph,
  UploadCard,
  ProfileTabs,
  RecruiterFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/recruitment-portal/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.JobCard = __ds_scope.JobCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.BackLink = __ds_scope.BackLink;

__ds_ns.PortalHeader = __ds_scope.PortalHeader;

})();
