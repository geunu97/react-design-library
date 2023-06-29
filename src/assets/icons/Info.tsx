import React from "react";

interface InfoIconProps {
  width: string;
  height: string;
}

const InfoIcon = (props: InfoIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 7v6M12 16h0"></path>
    </svg>
  );
};

export default InfoIcon;
