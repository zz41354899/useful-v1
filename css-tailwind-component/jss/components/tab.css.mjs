export default {
  ".tab-list": {
    "display": "flex",
    "--color-text": "var(--us-gray600)",
    "--border-width": "2px",
    "--color-border": "var(--us-gray600)",
    "--color-text-active": "var(--us-blue600)",
    "--color-border-active": "var(--us-blue600)",
    "borderBottom": "var(--border-width) solid var(--color-border)"
  },
  ".tab-boxed": {
    "--color-bg": "transparent",
    "--border-width": "0px",
    "--border-radius": "8px",
    "--color-text-active": "#fff",
    "--color-bg-active": "var(--us-blue600)"
  },
  ".tab": {
    "display": "inline-block",
    "flex": "1 1 0%",
    "userSelect": "none",
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    "paddingTop": "1rem",
    "paddingBottom": "1rem",
    "textAlign": "center",
    "color": "var(--color-text)",
    "backgroundColor": "var(--color-bg)",
    "marginBottom": "calc(-1 * var(--border-width))",
    "borderBottom": "var(--border-width) solid transparent",
    "borderRadius": "var(--border-radius)"
  },
  ".tab-active": {
    "color": "var(--color-text-active)",
    "backgroundColor": "var(--color-bg-active)",
    "borderBottom": "var(--border-width) solid var(--color-border-active)"
  }
}