import React from "react";
import "../../styles/button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "black" | "success" | "warning" | "danger";
  weight?: "outlined" | "inline" | "ghost";
  size?: "smallest" | "smaller" | "medium" | "larger" | "largest";
  shape?: "squre" | "circle";
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
}

const Button = ({
  color = "primary",
  weight = "inline",
  size = "medium",
  shape = "circle",
  disabled = false,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={[
        "button",
        `button-color--${color}`,
        `button-weight--${weight}`,
        `button-size--${size}`,
        `button-shape--${shape}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
