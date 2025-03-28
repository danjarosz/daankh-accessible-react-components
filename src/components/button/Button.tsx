import React from 'react';
import useAccessibleButton from '../../hooks/useAccessibleButton.js';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  description?: string;
}

export default function Button({ children, description }: ButtonProps) {
  const accessibilityProps = useAccessibleButton({
    description,
  });

  return <button {...accessibilityProps}>{children}</button>;
}
