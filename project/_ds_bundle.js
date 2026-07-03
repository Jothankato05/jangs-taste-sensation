/* @ds-bundle: {"format":4,"namespace":"JangSTasteSensationDesignSystem_4dc13a","components":[{"name":"DishCard","sourcePath":"components/content/DishCard.jsx"},{"name":"Footer","sourcePath":"components/content/Footer.jsx"},{"name":"NavBar","sourcePath":"components/content/NavBar.jsx"},{"name":"TiltCard","sourcePath":"components/content/TiltCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/overlay/Tabs.jsx"},{"name":"Toast","sourcePath":"components/overlay/Toast.jsx"}],"sourceHashes":{"components/content/DishCard.jsx":"089383526ca7","components/content/Footer.jsx":"1c61ae3c6610","components/content/NavBar.jsx":"95d5f4e2f18f","components/content/TiltCard.jsx":"2da4e1561fa5","components/core/Badge.jsx":"5c9855925cd1","components/core/Button.jsx":"d270274a3d99","components/core/Divider.jsx":"1898991aec8a","components/core/IconButton.jsx":"8cc91cbe232a","components/core/SectionHeading.jsx":"6a4a16bab42a","components/core/Tag.jsx":"2229cd50c80e","components/core/Wordmark.jsx":"0acb2001b929","components/forms/Checkbox.jsx":"0091935f4583","components/forms/Input.jsx":"ec7b44e6bc8e","components/forms/Radio.jsx":"70b4b2585573","components/forms/Select.jsx":"f1affd50d7f9","components/forms/Switch.jsx":"4786326f2c8a","components/overlay/Dialog.jsx":"b16a8136bb28","components/overlay/Tabs.jsx":"3d8c23bd6713","components/overlay/Toast.jsx":"bf09613aa1d1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JangSTasteSensationDesignSystem_4dc13a = window.JangSTasteSensationDesignSystem_4dc13a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/TiltCard.jsx
try { (() => {
/** 3D perspective tilt card — the brand's cinematic depth primitive.
    Wraps any children; tilts toward the cursor with layered lift. */
function TiltCard({
  children,
  maxTilt = 7,
  lift = true,
  signatureCorner = true,
  style
}) {
  const ref = React.useRef(null);
  const [t, setT] = React.useState({
    x: 0,
    y: 0,
    on: false
  });
  const onMove = e => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({
      x: -py * maxTilt * 2,
      y: px * maxTilt * 2,
      on: true
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      perspective: "var(--depth-perspective)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseMove: onMove,
    onMouseLeave: () => setT({
      x: 0,
      y: 0,
      on: false
    }),
    style: {
      transform: `rotateX(${t.x}deg) rotateY(${t.y}deg) ${t.on && lift ? "translateZ(24px)" : ""}`,
      transformStyle: "preserve-3d",
      transition: t.on ? "transform 120ms linear" : "transform var(--duration-slow) var(--ease-cinematic)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: signatureCorner ? "2px 28px 2px 2px" : "2px",
      boxShadow: t.on ? "var(--shadow-float)" : "var(--shadow-card)",
      overflow: "hidden"
    }
  }, children));
}
Object.assign(__ds_scope, { TiltCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TiltCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/** Wide-tracked caps status chip. */
function Badge({
  tone = "fog",
  children,
  style
}) {
  const tones = {
    fog: {
      color: "var(--morning-fog)",
      borderColor: "rgba(204,188,163,0.4)"
    },
    water: {
      color: "var(--lake-water)",
      borderColor: "rgba(174,196,220,0.4)"
    },
    neutral: {
      color: "var(--text-secondary)",
      borderColor: "var(--border-subtle)"
    },
    solid: {
      color: "var(--black)",
      background: "var(--morning-fog)",
      borderColor: "var(--morning-fog)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 26,
      padding: "0 12px",
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      border: "1px solid",
      borderRadius: "2px 10px 2px 2px",
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/DishCard.jsx
try { (() => {
/** Menu dish card: media area (image or CSS atmosphere placeholder), caps name, ingredient line, price. */
function DishCard({
  name,
  description,
  price,
  image,
  badge,
  atmosphere = "warm",
  style
}) {
  const [hover, setHover] = React.useState(false);
  const atmospheres = {
    warm: "radial-gradient(120% 100% at 65% 25%, #4a3a28 0%, #201812 55%, #050505 100%)",
    cool: "radial-gradient(120% 100% at 65% 25%, #3b4a5a 0%, #16202b 55%, #050505 100%)",
    smoke: "radial-gradient(120% 100% at 50% 10%, #3a3a3d 0%, #1a1a1d 55%, #050505 100%)"
  };
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-sans)",
      cursor: "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 3",
      overflow: "hidden",
      borderRadius: "2px 28px 2px 2px",
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: image ? `url(${image}) center/cover` : atmospheres[atmosphere],
      transform: hover ? "scale(1.06)" : "scale(1)",
      filter: hover ? "brightness(1)" : "brightness(0.85)",
      transition: "all var(--duration-slow) var(--ease-cinematic)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-bottom)"
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 16,
      marginTop: 16,
      borderTop: "1px solid var(--border-subtle)",
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: hover ? "var(--morning-fog)" : "var(--text-primary)",
      transition: "color var(--duration-base)"
    }
  }, name), price != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-accent)",
      fontWeight: "var(--weight-medium)"
    }
  }, price)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: 13,
      fontWeight: "var(--weight-light)",
      color: "var(--text-tertiary)",
      lineHeight: 1.5
    }
  }, description));
}
Object.assign(__ds_scope, { DishCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DishCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/** Primary action. Uppercase, wide-tracked, sharp with signature top-right curve. */
function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  disabled,
  onClick,
  style
}) {
  const [h, fs, px] = {
    sm: [38, 11, 18],
    md: [48, 12, 26],
    lg: [58, 13, 34]
  }[size] || [48, 12, 26];
  const variants = {
    primary: {
      background: "var(--action-primary-bg)",
      color: "var(--action-primary-fg)",
      border: "1px solid var(--white)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent"
    },
    accent: {
      background: "var(--morning-fog)",
      color: "var(--black)",
      border: "1px solid var(--morning-fog)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      height: h,
      padding: `0 ${px}px`,
      fontFamily: "var(--font-sans)",
      fontSize: fs,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      cursor: disabled ? "not-allowed" : "pointer",
      borderRadius: "2px 16px 2px 2px",
      transition: "all var(--duration-base) var(--ease-cinematic)",
      opacity: disabled ? 0.35 : 1,
      transform: press ? "scale(0.98)" : "none",
      filter: hover && !disabled ? "brightness(1.1)" : "none",
      ...variants[variant],
      ...(hover && !disabled && variant === "outline" ? {
        borderColor: "var(--morning-fog)",
        color: "var(--morning-fog)"
      } : {}),
      ...(hover && !disabled && variant === "ghost" ? {
        color: "var(--text-primary)"
      } : {}),
      ...style
    }
  }, children, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/** Hairline divider, optionally with a centered caps label or fog accent. */
function Divider({
  label,
  accent,
  style
}) {
  const line = {
    flex: 1,
    height: 1,
    background: accent ? "rgba(204,188,163,0.45)" : "var(--border-subtle)"
  };
  if (!label) return /*#__PURE__*/React.createElement("div", {
    style: {
      ...line,
      flex: "none",
      width: "100%",
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: line
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.42em",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      paddingLeft: "0.42em"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: line
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
/** Square hairline icon button. Pass a Lucide icon node as children. */
function IconButton({
  children,
  size = "md",
  active,
  disabled,
  onClick,
  label,
  style
}) {
  const d = {
    sm: 34,
    md: 44,
    lg: 54
  }[size] || 44;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: active ? "var(--surface-card-hover)" : "transparent",
      color: active ? "var(--morning-fog)" : hover ? "var(--text-primary)" : "var(--text-secondary)",
      border: `1px solid ${hover || active ? "var(--border-strong)" : "var(--border-subtle)"}`,
      borderRadius: "2px 12px 2px 2px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.35 : 1,
      transition: "all var(--duration-base) var(--ease-cinematic)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/** Kicker + display headline + optional subline — the standard section opener. */
function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  size = "display",
  style
}) {
  const fs = size === "hero" ? "var(--text-hero)" : size === "title" ? "var(--text-title)" : "var(--text-display)";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-kicker)",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      paddingLeft: align === "center" ? "0.42em" : 0
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: fs,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-display)",
      lineHeight: "var(--leading-display)",
      textTransform: "uppercase",
      color: "var(--text-primary)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 520,
      fontSize: "var(--text-body)",
      fontWeight: "var(--weight-light)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-secondary)"
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** Selectable filter tag (menu categories, dietary filters). */
function Tag({
  selected,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 34,
      padding: "0 18px",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      cursor: "pointer",
      background: selected ? "var(--white)" : "transparent",
      color: selected ? "var(--black)" : hover ? "var(--text-primary)" : "var(--text-secondary)",
      border: `1px solid ${selected ? "var(--white)" : hover ? "var(--border-strong)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-pill)",
      transition: "all var(--duration-base) var(--ease-cinematic)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
/** Typed brand lockup — Jang's has no drawn logo; this IS the mark. */
function Wordmark({
  size = "md",
  tagline = true,
  style
}) {
  const s = {
    sm: [16, 7],
    md: [26, 9],
    lg: [40, 11]
  }[size] || [26, 9];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: s[0] * 0.3,
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s[0],
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.3em",
      paddingLeft: "0.3em",
      textTransform: "uppercase",
      lineHeight: 1
    }
  }, "Jang's"), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s[1],
      fontWeight: "var(--weight-regular)",
      letterSpacing: "0.5em",
      paddingLeft: "0.5em",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      lineHeight: 1
    }
  }, "Taste \xB7 Sensation"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/content/Footer.jsx
try { (() => {
/** Near-black site footer: wordmark, link columns, hairline dividers, legal line. */
function Footer({
  columns = [],
  note,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-950)",
      padding: "72px var(--gutter) 40px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 48,
      flexWrap: "wrap",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: "md",
    style: {
      textAlign: "left",
      alignItems: "flex-start"
    }
  }), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: "var(--weight-light)",
      color: "var(--text-tertiary)",
      lineHeight: 1.6
    }
  }, note)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 72,
      flexWrap: "wrap"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 13,
      fontWeight: "var(--weight-light)",
      color: "var(--text-secondary)",
      textDecoration: "none",
      letterSpacing: "0.06em"
    }
  }, l)))))), /*#__PURE__*/React.createElement(__ds_scope.Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 22,
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Jang's Taste Sensation"), /*#__PURE__*/React.createElement("span", null, "Seared. Served.")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Footer.jsx", error: String((e && e.message) || e) }); }

// components/content/NavBar.jsx
try { (() => {
/** Fixed glass navigation bar: wordmark left, caps links center, CTA right. */
function NavBar({
  links = [],
  active,
  onNavigate,
  cta = "Reserve",
  onCta,
  fixed = false,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: fixed ? "fixed" : "relative",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--gutter)",
      height: 84,
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))",
      borderBottom: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: "sm",
    tagline: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 38
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      fontSize: 11,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      textDecoration: "none",
      color: active === l ? "var(--morning-fog)" : "var(--text-secondary)",
      borderBottom: `1px solid ${active === l ? "var(--morning-fog)" : "transparent"}`,
      paddingBottom: 4,
      transition: "all var(--duration-base) var(--ease-cinematic)"
    }
  }, l))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "outline",
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Square hairline checkbox with fog check. */
function Checkbox({
  label,
  checked,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: `1px solid ${checked ? "var(--morning-fog)" : "var(--border-strong)"}`,
      background: checked ? "var(--morning-fog)" : "transparent",
      borderRadius: "1px 6px 1px 1px",
      transition: "all var(--duration-fast) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#000",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: "var(--weight-light)",
      color: "var(--text-secondary)",
      letterSpacing: "0.04em"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const fieldLabel = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: 10,
  fontWeight: "var(--weight-medium)",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: "var(--text-secondary)",
  marginBottom: 10
};

/** Underlined text field — hairline that turns Morning Fog on focus. */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: fieldLabel
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      background: "transparent",
      border: "none",
      outline: "none",
      borderBottom: `1px solid ${error ? "#c96d5a" : focus ? "var(--morning-fog)" : "var(--border-subtle)"}`,
      padding: "10px 0 12px",
      color: "var(--text-primary)",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: "var(--weight-light)",
      letterSpacing: "0.04em",
      transition: "border-color var(--duration-base) var(--ease-cinematic)"
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 8,
      fontSize: 12,
      color: "#c96d5a",
      letterSpacing: "0.04em"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Circular radio with fog dot. */
function Radio({
  label,
  checked,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => onChange && onChange(true),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: `1px solid ${checked ? "var(--morning-fog)" : "var(--border-strong)"}`,
      transition: "all var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--morning-fog)",
      transform: checked ? "scale(1)" : "scale(0)",
      transition: "transform var(--duration-fast) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: "var(--weight-light)",
      color: checked ? "var(--text-primary)" : "var(--text-secondary)",
      letterSpacing: "0.04em"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Underlined native select styled to match Input. */
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 10,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      marginBottom: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      appearance: "none",
      background: "transparent",
      border: "none",
      outline: "none",
      borderBottom: `1px solid ${focus ? "var(--morning-fog)" : "var(--border-subtle)"}`,
      padding: "10px 24px 12px 0",
      color: value ? "var(--text-primary)" : "var(--text-tertiary)",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: "var(--weight-light)",
      letterSpacing: "0.04em",
      transition: "border-color var(--duration-base) var(--ease-cinematic)",
      cursor: "pointer"
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    style: {
      color: "#000"
    }
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      color: "#000"
    }
  }, o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 2,
      top: "50%",
      transform: "translateY(-60%)",
      pointerEvents: "none",
      color: "var(--text-secondary)",
      fontSize: 10
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Hairline toggle switch — fog track when on. */
function Switch({
  label,
  checked,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => onChange && onChange(!checked),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 24,
      borderRadius: 999,
      position: "relative",
      background: checked ? "var(--morning-fog)" : "transparent",
      border: `1px solid ${checked ? "var(--morning-fog)" : "var(--border-strong)"}`,
      transition: "all var(--duration-base) var(--ease-cinematic)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 23 : 3,
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: checked ? "var(--black)" : "var(--text-secondary)",
      transition: "all var(--duration-base) var(--ease-cinematic)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: "var(--weight-light)",
      color: "var(--text-secondary)",
      letterSpacing: "0.04em"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
/** Glass modal dialog with kicker + caps title. */
function Dialog({
  open,
  kicker,
  title,
  children,
  onClose,
  width = 480,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 100,
      display: "grid",
      placeItems: "center",
      background: "rgba(0,0,0,0.7)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "calc(100% - 48px)",
      padding: "36px 40px",
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))",
      border: "1px solid var(--border-subtle)",
      borderRadius: "2px 28px 2px 2px",
      boxShadow: "var(--shadow-float)",
      fontFamily: "var(--font-sans)",
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    size: "sm",
    label: "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  })))), kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.42em",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      marginBottom: 12
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 18px",
      fontSize: 24,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      lineHeight: 1.15
    }
  }, title), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tabs.jsx
try { (() => {
/** Hairline caps tabs with fog underline indicator. */
function Tabs({
  tabs = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 34,
      borderBottom: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, tabs.map(t => {
    const on = active === t;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onChange && onChange(t),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 2px 14px",
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: "var(--weight-medium)",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: on ? "var(--text-primary)" : "var(--text-tertiary)",
        boxShadow: on ? "inset 0 -1px 0 var(--morning-fog), 0 1px 0 var(--morning-fog)" : "none",
        transition: "color var(--duration-base) var(--ease-cinematic)"
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Toast.jsx
try { (() => {
/** Bottom-corner glass toast; auto-dismisses. */
function Toast({
  open,
  message,
  detail,
  onClose,
  duration = 4000,
  style
}) {
  React.useEffect(() => {
    if (!open || !duration) return;
    const t = setTimeout(() => onClose && onClose(), duration);
    return () => clearTimeout(t);
  }, [open, duration]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 24,
      bottom: 24,
      zIndex: 120,
      transform: open ? "translateY(0)" : "translateY(16px)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "all var(--duration-base) var(--ease-cinematic)",
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))",
      border: "1px solid var(--border-subtle)",
      borderLeft: "2px solid var(--morning-fog)",
      borderRadius: "2px 16px 2px 2px",
      padding: "16px 22px",
      minWidth: 260,
      fontFamily: "var(--font-sans)",
      boxShadow: "var(--shadow-card)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.22em",
      textTransform: "uppercase"
    }
  }, message), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: "var(--weight-light)",
      color: "var(--text-secondary)",
      marginTop: 5
    }
  }, detail));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Toast.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DishCard = __ds_scope.DishCard;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.TiltCard = __ds_scope.TiltCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toast = __ds_scope.Toast;

})();
