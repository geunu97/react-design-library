import React from 'react';

interface PrevIconProps {
  width: string;
  height: string;
}

const PrevIcon = (props: PrevIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
};

export default PrevIcon;
