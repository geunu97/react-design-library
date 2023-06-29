import React from "react";

interface CloseIconProps {
  width: string;
  height: string;
}

const CloseIcon = (props: CloseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.5"
    >
      <path d="M18 6 L6 18 M6 6 L18 18"></path>
    </svg>
  );
};

export default CloseIcon;
