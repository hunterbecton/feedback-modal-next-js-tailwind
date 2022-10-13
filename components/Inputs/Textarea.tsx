import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface TextareaProps {
  name: string;
  label: string;
  placeholder: string;
}

export const Textarea: FC<TextareaProps> = ({ name, label, placeholder }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label
        htmlFor={name}
        className='mb-2 block text-left text-paragraph-lg font-bold text-brand-ten'
      >
        {label}
      </label>
      <div>
        <textarea
          rows={4}
          className='block w-full rounded-md border-2 border-brand-two p-4 text-paragraph-base text-brand-ten placeholder:opacity-70 invalid:border-red-six invalid:ring-red-six focus:border-brand-six focus:outline-none'
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
    </div>
  );
};
