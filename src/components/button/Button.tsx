import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
