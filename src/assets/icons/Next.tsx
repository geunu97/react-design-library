import React from 'react';

interface NextIconProps {
  width: string;
  height: string;
}

const NextIcon = (props: NextIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};

export default NextIcon;
