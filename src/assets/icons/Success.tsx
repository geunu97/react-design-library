import React from "react";

interface SuccessIconProps {
  width: string;
  height: string;
}

const SuccessIcon = (props: SuccessIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export default SuccessIcon;
