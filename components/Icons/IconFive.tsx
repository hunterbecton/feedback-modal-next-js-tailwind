import { FC } from 'react';

import { IconProps } from './_types';

export const IconFive: FC<IconProps> = ({ color = 'currentColor' }) => {
  return (
    <svg
      aria-labelledby='svg-icon-five'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title className='pointer-events-none' id='svg-icon-five'>
        Five
      </title>
      <path
        d='M18 2V4H9.29999L8.62299 10.445C9.79288 9.73409 11.1574 9.41069 12.5219 9.52092C13.8864 9.63115 15.1813 10.1694 16.2219 11.0589C17.2625 11.9483 17.9957 13.1436 18.317 14.4744C18.6382 15.8051 18.5312 17.2033 18.011 18.4696C17.4909 19.7358 16.5842 20.8056 15.4203 21.5262C14.2564 22.2469 12.8946 22.5817 11.5293 22.4829C10.1639 22.384 8.86455 21.8566 7.81655 20.9759C6.76855 20.0951 6.02537 18.906 5.69299 17.578L7.63299 17.092C7.90154 18.1556 8.54917 19.0845 9.45424 19.7043C10.3593 20.3242 11.4595 20.5922 12.5483 20.4581C13.637 20.324 14.6393 19.7971 15.367 18.9762C16.0946 18.1553 16.4975 17.097 16.5 16C16.5 14.8065 16.0259 13.6619 15.182 12.818C14.3381 11.9741 13.1935 11.5 12 11.5C9.97799 11.5 8.72199 12.139 8.03999 13.03L6.46499 11.848L7.49999 2H18Z'
        fill={color}
      />
    </svg>
  );
};
