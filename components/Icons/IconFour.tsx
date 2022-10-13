import { FC } from 'react';

import { IconProps } from './_types';

export const IconFour: FC<IconProps> = ({ color = 'currentColor' }) => {
  return (
    <svg
      aria-labelledby='svg-icon-four'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title className='pointer-events-none' id='svg-icon-four'>
        Four
      </title>
      <path
        d='M16 1.5V16H19V18H16V22H14V18H4V16.898L14 1.5H16ZM14 16V5.171L6.968 16H14Z'
        fill={color}
      />
    </svg>
  );
};
