export default {
  ".btn": {
    "borderRadius": "0.5rem",
    "--py": "16px",
    "--px": "24px",
    "color": "var(--color-text)",
    "backgroundColor": "var(--color-bg)",
    "padding": "var(--py) var(--px)"
  },
  ".btn-md": {
    "--py": "8px",
    "--px": "16px"
  },
  ".btn-sm": {
    "--py": "4px",
    "--px": "8px"
  },
  ".btn-block": {
    "display": "block",
    "width": "100%"
  },
  ".btn-border": {
    "border": "1px solid var(--color-border)",
    "padding": "calc(var(--py) - 1px) calc(var(--px) - 1px)"
  },
  ".btn-primary": {
    "--color-text": "#fff",
    "--color-bg": "var(--us-blue600)",
    "--color-text-hover": "#fff",
    "--color-bg-hover": "var(--us-blue500)",
    "--color-text-active": "#fff",
    "--color-bg-active": "var(--us-blue700)",
    "--color-text-disabled": "#fff",
    "--color-bg-disabled": "var(--us-blue300)"
  },
  ".btn-primary:is(.btn-border)": {
    "--color-text": "var(--us-blue600)",
    "--color-bg": "transparent",
    "--color-border": "var(--us-blue600)",
    "--color-text-hover": "#fff",
    "--color-bg-hover": "var(--us-blue600)",
    "--color-text-active": "var(--color-text-hover)",
    "--color-bg-active": "var(--color-bg-hover)",
    "--color-text-disabled": "var(--us-blue300)",
    "--color-bg-disabled": "transparent",
    "--color-border-disabled": "var(--us-blue300)"
  },
  ".btn-error": {
    "--color-text": "#fff",
    "--color-bg": "var(--us-red600)",
    "--color-text-hover": "#fff",
    "--color-bg-hover": "var(--us-red500)",
    "--color-text-active": "#fff",
    "--color-bg-active": "var(--us-red700)",
    "--color-text-disabled": "#fff",
    "--color-bg-disabled": "var(--us-red300)"
  },
  ".btn-error:is(.btn-border)": {
    "--color-text": "var(--us-red600)",
    "--color-bg": "transparent",
    "--color-border": "var(--us-red600)",
    "--color-text-hover": "#fff",
    "--color-bg-hover": "var(--us-red600)",
    "--color-text-active": "var(--color-text-hover)",
    "--color-bg-active": "var(--color-bg-hover)",
    "--color-text-disabled": "var(--us-red300)",
    "--color-bg-disabled": "transparent",
    "--color-border-disabled": "var(--us-red300)"
  },
  ".btn-warning": {
    "--color-text": "#fff",
    "--color-bg": "var(--us-orange600)",
    "--color-text-hover": "#fff",
    "--color-bg-hover": "var(--us-orange500)",
    "--color-text-active": "#fff",
    "--color-bg-active": "var(--us-orange700)",
    "--color-text-disabled": "#fff",
    "--color-bg-disabled": "var(--us-orange300)"
  },
  ".btn-warning:is(.btn-border)": {
    "--color-text": "var(--us-orange600)",
    "--color-bg": "transparent",
    "--color-border": "var(--us-orange600)",
    "--color-text-hover": "#fff",
    "--color-bg-hover": "var(--us-orange600)",
    "--color-text-active": "var(--color-text-hover)",
    "--color-bg-active": "var(--color-bg-hover)",
    "--color-text-disabled": "var(--us-orange300)",
    "--color-bg-disabled": "transparent",
    "--color-border-disabled": "var(--us-orange300)"
  },
  ".btn-success": {
    "--color-text": "#fff",
    "--color-bg": "var(--us-green600)",
    "--color-text-hover": "#fff",
    "--color-bg-hover": "var(--us-green500)",
    "--color-text-active": "#fff",
    "--color-bg-active": "var(--us-green700)",
    "--color-text-disabled": "#fff",
    "--color-bg-disabled": "var(--us-green300)"
  },
  ".btn-success:is(.btn-border)": {
    "--color-text": "var(--us-green600)",
    "--color-bg": "transparent",
    "--color-border": "var(--us-green600)",
    "--color-text-hover": "#fff",
    "--color-bg-hover": "var(--us-green600)",
    "--color-text-active": "var(--color-text-hover)",
    "--color-bg-active": "var(--color-bg-hover)",
    "--color-border-disabled": "var(--us-green300)",
    "--color-bg-disabled": "transparent",
    "--color-text-disabled": "var(--us-green300)"
  },
  ".btn-dark": {
    "--color-text": "#fff",
    "--color-bg": "var(--us-gray1100)",
    "--color-text-hover": "#fff",
    "--color-bg-hover": "var(--us-gray900)",
    "--color-text-active": "#fff",
    "--color-bg-active": "var(--us-gray1100)"
  },
  ".btn-light": {
    "--color-text": "#000",
    "--color-bg": "var(--us-gray100)",
    "--color-text-hover": "#000",
    "--color-bg-hover": "#fff",
    "--color-text-active": "#000",
    "--color-bg-active": "var(--us-gray400)"
  },
  ".btn-link": {
    "--color-text": "var(--us-blue600)",
    "--color-bg": "transparent",
    "--color-text-hover": "var(--us-blue500)",
    "--color-bg-hover": "transparent",
    "--color-text-active": "var(--us-blue700)",
    "--color-bg-active": "transparent"
  },
  ".btn-disabled": {
    "cursor": "not-allowed",
    "color": "var(--color-text-disabled)",
    "backgroundColor": "var(--color-bg-disabled)",
    "borderColor": "var(--color-border-disabled)"
  },
  ".btn:hover:not(.btn-disabled)": {
    "color": "var(--color-text-hover)",
    "backgroundColor": "var(--color-bg-hover)"
  },
  ".btn:active:not(.btn-disabled)": {
    "color": "var(--color-text-active)",
    "backgroundColor": "var(--color-bg-active)"
  }
}