import { FC } from 'react';

import { IconProps } from './_types';

export const IconWarning: FC<IconProps> = ({ color = 'currentColor' }) => {
  return (
    <svg
      aria-labelledby='svg-icon-warning'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title className='pointer-events-none' id='svg-icon-warning'>
        Warning
      </title>
      <path
        d='M12 7V13M12 17.01L12.01 16.999M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
