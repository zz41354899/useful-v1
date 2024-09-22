export default {
  ".pagination": {
    "--color-text": "#000",
    "--color-bg": "transparent",
    "--color-border": "transparent",
    "--radius": "8px",
    "--color-text-active": "#fff",
    "--color-bg-active": "var(--us-blue600)",
    "--color-border-active": "transparent",
    "display": "flex",
    "justifyItems": "center",
    "columnGap": "8px"
  },
  ".page": {
    "color": "var(--color-text)",
    "backgroundColor": "var(--color-bg)",
    "border": "1px solid var(--color-border)",
    "width": "40px",
    "height": "40px",
    "borderRadius": "var(--radius)",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".pagination-outline": {
    "--color-text-active": "#000",
    "--color-bg-active": "var(--us-blue100)",
    "--color-border-active": "var(--us-blue600)"
  },
  ".pagination-circle": {
    "--radius": "9999px"
  },
  ".page-active": {
    "color": "var(--color-text-active)",
    "backgroundColor": "var(--color-bg-active)",
    "borderColor": "var(--color-border-active)"
  }
}