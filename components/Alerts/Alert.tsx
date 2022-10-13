import { FC } from 'react';
import { IconWarning } from '../Icons';

interface AlertProps {
  text: string | undefined;
}

export const Alert: FC<AlertProps> = ({ text }) => {
  return (
    <div className='mb-8 flex rounded-md bg-red-one p-4 text-left text-red-ten'>
      <span className='mr-2 text-red-nine'>
        <IconWarning />
      </span>
      {text}
    </div>
  );
};
