import { FC } from 'react';

interface ButtonProps {
  style?: string;
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ style, text, disabled, onClick }) => {
  switch (style) {
    case 'dark':
      return (
        <button
          type='button'
          className='rounded-md bg-brand-six px-5 py-3 text-button-sm text-neutral-one hover:bg-brand-seven focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-six disabled:opacity-70'
          onClick={onClick}
          disabled={disabled}
        >
          {text}
        </button>
      );
    case 'light':
      return (
        <button
          type='button'
          className='rounded-md bg-brand-one px-5 py-3 text-button-sm text-brand-six hover:bg-brand-two focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-six disabled:opacity-70'
          onClick={onClick}
          disabled={disabled}
        >
          {text}
        </button>
      );
    default:
      return (
        <button
          type='button'
          className='rounded-md bg-brand-six px-5 py-3 text-button-sm text-neutral-one hover:bg-brand-seven focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-six disabled:opacity-70'
          onClick={onClick}
          disabled={disabled}
        >
          {text}
        </button>
      );
  }
};
