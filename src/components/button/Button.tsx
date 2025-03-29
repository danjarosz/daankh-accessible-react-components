import React from 'react';
import useAccessibleButton from '../../hooks/useAccessibleButton.js';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  description?: string;
}

export default function Button({ children, description }: IButtonProps) {
  const accessibilityProps = useAccessibleButton({
    description,
  });
  const props: IButtonProps = {};

  if (description) {
    props['description'] = description;
  }

  return (
    <button description={description} {...accessibilityProps} {...props}>
      {children}
    </button>
  );
}
