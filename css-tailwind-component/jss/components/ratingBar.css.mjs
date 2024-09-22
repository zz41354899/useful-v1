export default {
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
  }
}