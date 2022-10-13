import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { IconOne, IconTwo, IconThree, IconFour, IconFive } from '../Icons';

interface ButtonRateProps {
  name: string;
  text: string;
  number: string;
}

export const ButtonRate: FC<ButtonRateProps> = ({ name, text, number }) => {
  const { register } = useFormContext();

  const handleNumber = () => {
    switch (number) {
      case '1':
        return <IconOne />;
      case '2':
        return <IconTwo />;
      case '3':
        return <IconThree />;
      case '4':
        return <IconFour />;
      case '5':
        return <IconFive />;
      default:
        return <IconOne />;
    }
  };

  return (
    <div className='relative'>
      <input
        type='radio'
        id={number}
        value={number}
        className='peer pointer-events-none absolute h-0 w-0 opacity-0'
        {...register(name)}
      />
      <label
        htmlFor={number}
        className='flex h-[5.625rem] w-[5rem] cursor-pointer flex-col items-center justify-center gap-0.5 rounded-lg bg-brand-one text-paragraph-xs font-bold text-brand-six hover:bg-brand-six hover:text-brand-one peer-checked:bg-brand-six peer-checked:text-brand-one peer-checked:hover:bg-brand-six peer-checked:hover:text-brand-one peer-focus:bg-brand-two peer-focus:outline-none peer-focus:outline-2 peer-focus:outline-offset-2 peer-focus:outline-brand-six peer-focus:hover:bg-brand-six peer-focus:hover:text-brand-one peer-checked:peer-focus:bg-brand-six peer-checked:peer-focus:text-brand-one'
      >
        <>
          {handleNumber()}
          {text}
        </>
      </label>
    </div>
  );
};
