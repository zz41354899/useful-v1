export default {
  "*,\r\n::before,\r\n::after": {
    "boxSizing": "border-box",
    "borderWidth": "0",
    "borderStyle": "solid",
    "borderColor": "#e5e7eb"
  },
  "::before,\r\n::after": {
    "--tw-content": "''"
  },
  "html,\r\n:host": {
    "lineHeight": 1.5,
    "WebkitTextSizeAdjust": "100%",
    "MozTabSize": "4",
    "tabSize": 4,
    "fontFamily": "ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "fontFeatureSettings": "normal",
    "fontVariationSettings": "normal",
    "WebkitTapHighlightColor": "transparent"
  },
  "body": {
    "margin": "0",
    "lineHeight": "inherit"
  },
  "hr": {
    "height": "0",
    "color": "inherit",
    "borderTopWidth": "1px"
  },
  "abbr:where([title])": {
    "textDecoration": "underline dotted"
  },
  "h1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6": {
    "fontSize": "inherit",
    "fontWeight": "inherit"
  },
  "a": {
    "color": "inherit",
    "textDecoration": "inherit"
  },
  "b,\r\nstrong": {
    "fontWeight": "bolder"
  },
  "code,\r\nkbd,\r\nsamp,\r\npre": {
    "fontFamily": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    "fontFeatureSettings": "normal",
    "fontVariationSettings": "normal",
    "fontSize": "1em"
  },
  "small": {
    "fontSize": "80%"
  },
  "sub,\r\nsup": {
    "fontSize": "75%",
    "lineHeight": 0,
    "position": "relative",
    "verticalAlign": "baseline"
  },
  "sub": {
    "bottom": "-0.25em"
  },
  "sup": {
    "top": "-0.5em"
  },
  "table": {
    "textIndent": "0",
    "borderColor": "inherit",
    "borderCollapse": "collapse"
  },
  "button,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea": {
    "fontFamily": "inherit",
    "fontFeatureSettings": "inherit",
    "fontVariationSettings": "inherit",
    "fontSize": "100%",
    "fontWeight": "inherit",
    "lineHeight": "inherit",
    "letterSpacing": "inherit",
    "color": "inherit",
    "margin": "0",
    "padding": "0"
  },
  "button,\r\nselect": {
    "textTransform": "none"
  },
  "button,\r\ninput:where([type='button']),\r\ninput:where([type='reset']),\r\ninput:where([type='submit'])": {
    "WebkitAppearance": "button",
    "backgroundColor": "transparent",
    "backgroundImage": "none"
  },
  ":-moz-focusring": {
    "outline": "auto"
  },
  ":-moz-ui-invalid": {
    "boxShadow": "none"
  },
  "progress": {
    "verticalAlign": "baseline"
  },
  "::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button": {
    "height": "auto"
  },
  "[type='search']": {
    "WebkitAppearance": "textfield",
    "outlineOffset": "-2px"
  },
  "::-webkit-search-decoration": {
    "WebkitAppearance": "none"
  },
  "::-webkit-file-upload-button": {
    "WebkitAppearance": "button",
    "font": "inherit"
  },
  "summary": {
    "display": "list-item"
  },
  "blockquote,\r\ndl,\r\ndd,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nhr,\r\nfigure,\r\np,\r\npre": {
    "margin": "0"
  },
  "fieldset": {
    "margin": "0",
    "padding": "0"
  },
  "legend": {
    "padding": "0"
  },
  "ol,\r\nul,\r\nmenu": {
    "listStyle": "none",
    "margin": "0",
    "padding": "0"
  },
  "dialog": {
    "padding": "0"
  },
  "textarea": {
    "resize": "vertical"
  },
  "input::placeholder,\r\ntextarea::placeholder": {
    "opacity": 1,
    "color": "#9ca3af"
  },
  "button,\r\n[role='button']": {
    "cursor": "pointer"
  },
  ":disabled": {
    "cursor": "default"
  },
  "img,\r\nsvg,\r\nvideo,\r\ncanvas,\r\naudio,\r\niframe,\r\nembed,\r\nobject": {
    "display": "block",
    "verticalAlign": "middle"
  },
  "img,\r\nvideo": {
    "maxWidth": "100%",
    "height": "auto"
  },
  "[hidden]": {
    "display": "none"
  }
}