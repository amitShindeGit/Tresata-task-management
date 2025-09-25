import type { ButtonProps } from "../utils/types";

interface Props extends ButtonProps {
  variant?: ButtonProps["variant"];
}

function Button({ label, onClick, disabled, variant = "primary" }: Props) {
  let style = {};

  switch (variant) {
    case "primary":
      style = {
        background: "#034EA2",
        color: "white",
        border: "2px solid #034EA2",
        borderRadius: "8px",
        padding: "8px 36px",
        cursor: "pointer",
      };
      break;
    case "secondary":
      style = {
        background: "white",
        color: "#034EA2",
        border: "2px solid #034EA2",
        borderRadius: "8px",
        padding: "8px 36px",
        cursor: "pointer",
      };
      break;
    default:
      break;
  }

  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
