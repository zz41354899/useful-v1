export default {
  ".badge": {
    "display": "inline-block",
    "alignSelf": "center",
    "borderRadius": "9999px",
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "0px",
    "paddingBottom": "0px",
    "fontSize": "14px",
    "lineHeight": "24px"
  },
  ".badge-sm": {
    "paddingLeft": "9px",
    "paddingRight": "9px",
    "paddingTop": "0px",
    "paddingBottom": "0px",
    "fontSize": "12px",
    "lineHeight": "18px"
  },
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
  },
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
  },
  ".card": {
    "display": "flex",
    "flexDirection": "column",
    "overflow": "hidden",
    "borderRadius": "0.5rem",
    "boxShadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.14)"
  },
  ".card-img": {
    "width": "100%",
    "objectFit": "contain",
    "objectPosition": "center"
  },
  ".card-body": {
    "display": "flex",
    "flexDirection": "column",
    "rowGap": "1rem",
    "paddingLeft": "1.25rem",
    "paddingRight": "1.25rem",
    "paddingTop": "1.25rem",
    "paddingBottom": "1.5rem"
  },
  ".card-title": {
    "fontWeight": 600,
    "fontSize": "24px",
    "lineHeight": "36px",
    "color": "#222"
  },
  ".card-description": {
    "fontWeight": 600,
    "fontSize": "16px",
    "lineHeight": "24px",
    "color": "#b0b0b0"
  },
  ".card-actions": {
    "marginTop": "1rem",
    "display": "flex",
    "alignItems": "center",
    "columnGap": "1rem"
  },
  ".navbar": {
    "display": "flex",
    "minHeight": "4rem",
    "width": "100%",
    "alignItems": "center",
    "gap": "1.5rem",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "1.5rem",
    "paddingBottom": "1.5rem",
    "borderRadius": "0.5rem"
  },
  ".navbar-begin": {
    "flex": "none",
    "justifySelf": "start"
  },
  ".navbar-items": {
    "display": "flex",
    "flex": "1 1 0%",
    "alignItems": "center",
    "columnGap": "1.5rem"
  },
  ".navbar-end": {
    "flex": "none",
    "justifySelf": "end"
  },
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
  },
  ".progressBar-primary": {
    "height": "1.25rem",
    "width": "100%",
    "backgroundColor": "var(--us-blue600)"
  },
  ".progressBar-error": {
    "height": "1.25rem",
    "width": "100%",
    "backgroundColor": "var(--us-red600)"
  },
  ".progressBar-warning": {
    "height": "1.25rem",
    "width": "100%",
    "backgroundColor": "var(--us-orange600)"
  },
  ".progressBar-success": {
    "height": "1.25rem",
    "width": "100%",
    "backgroundColor": "var(--us-green600)"
  },
  ".progressBar-rounded": {
    "borderRadius": "9999px"
  },
  ".rating": {
    "display": "flex",
    "flexDirection": "column",
    "gap": "0.5rem",
    "--item-size-base": "24px",
    "--item-size-sm": "16px",
    "--item-size-lg": "36px"
  },
  ".rating-items-primary": {
    "display": "flex",
    "--color-rating": "var(--us-gray500)",
    "--color-rating-disabled": "var(--us-gray300)",
    "--color-rating-hover": "var(--us-gray600)",
    "--color-rating-active": "var(--us-blue600)",
    "--color-rating-active-disabled": "var(--us-blue400)",
    "--color-rating-active-hover": "var(--us-blue700)"
  },
  ".rating-items-base": {
    "gap": "0.5rem",
    "--width": "24px",
    "--height": "24px"
  },
  ".rating-items-sm": {
    "gap": "1rem",
    "--width": "16px",
    "--height": "16px"
  },
  ".rating-items-lg": {
    "gap": "2.5rem",
    "--width": "36px",
    "--height": "36px"
  },
  ".rating-item": {
    "cursor": "pointer",
    "color": "var(--color-rating)",
    "width": "var(--width)",
    "height": "var(--height)",
    "fontSize": "var(--width)",
    "&:hover": {
      "color": "var(--color-rating-hover)"
    },
    "&.rating-item-disabled": {
      "cursor": "default",
      "color": "var(--color-rating-disabled)"
    }
  },
  ".rating-item-active": {
    "cursor": "pointer",
    "color": "var(--color-rating-active)",
    "width": "var(--width)",
    "height": "var(--height)",
    "fontSize": "var(--width)",
    "&:hover": {
      "color": "var(--color-rating-active-hover)"
    },
    "&.rating-item-disabled": {
      "cursor": "default",
      "color": "var(--color-rating-active-disabled)"
    }
  },
  ".rating-item-half": {
    "position": "relative",
    "width": "var(--width)",
    "height": "var(--height)",
    "& > *:first-child": {
      "position": "absolute",
      "clipPath": "inset(0 50% 0 0)"
    }
  },
  ".rating-feedback": {
    "fontWeight": 400,
    "fontSize": "14px",
    "lineHeight": "21px"
  },
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
  },
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