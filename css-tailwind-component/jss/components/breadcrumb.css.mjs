export default {
  ".breadcrumb": {
    "display": "flex",
    "alignItems": "center",
    "--color-text": "var(--us-gray1100)",
    "--color-text-active": "var(--us-blue600)",
    "--gap": "4px",
    "columnGap": "var(--gap)"
  },
  ".breadcrumb-item": {
    "display": "flex",
    "cursor": "default",
    "alignItems": "center",
    "gap": "0.25rem",
    "color": "var(--color-text)"
  },
  ".breadcrumb-link": {
    "display": "flex",
    "alignItems": "center",
    "gap": "0.25rem"
  },
  ".breadcrumb-item-active": {
    "color": "var(--color-text-active)"
  },
  ".breadcrumb-item-with-delimiter:not(:last-child):after": {
    "content": "'/'",
    "marginLeft": "var(--gap)"
  },
  ".breadcrumb-link:hover": {
    "textDecorationLine": "underline"
  }
}