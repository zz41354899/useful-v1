export default {
  ".sidebar-container": {
    "display": "flex",
    "flexDirection": "column",
    "rowGap": "1.5rem",
    "padding": "1.5rem"
  },
  ".sidebar-begin": {
    "display": "flex",
    "alignItems": "center"
  },
  ".sidebar-end": {
    "marginTop": "auto",
    "display": "flex",
    "flexDirection": "column"
  },
  ".sidebar-list": {
    "display": "flex",
    "flex": "1 1 0%",
    "flexDirection": "column",
    "overflowY": "auto",
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity))"
  },
  ".sidebar-item": {
    "display": "flex",
    "alignItems": "center",
    "columnGap": "1rem",
    "borderRadius": "0.5rem",
    "padding": "1rem",
    "fontWeight": 400,
    "fontSize": "14px"
  },
  ".sidebar-item-active": {
    "backgroundColor": "var(--us-blue600)",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity))"
  },
  ".sidebar-icons": {
    "width": "fit-content"
  },
  ".sidebar-icons .sidebar-item-content": {
    "display": "none"
  },
  ".sidebar-icons .sidebar-begin": {
    "justifyContent": "center"
  },
  ".sidebar-icons .sidebar-item": {
    "display": "flex",
    "justifyContent": "center",
    "borderRadius": "9999px"
  }
}