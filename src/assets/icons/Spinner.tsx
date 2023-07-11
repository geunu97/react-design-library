import React from 'react';

interface SpinnerIconProps {
  width: string;
  height: string;
  duration?: string;
}

const SpinnerIcon = (props: SpinnerIconProps) => {
  return (
    <svg role="presentation" width={props.width} height={props.height} stroke="currentColor" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.343 17.657A8 8 0 1 0 4 12">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur={props.duration ? props.duration : '1s'}
            from="0 12 12"
            to="360 12 12"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
      </g>
    </svg>
  );
};

export default SpinnerIcon;
