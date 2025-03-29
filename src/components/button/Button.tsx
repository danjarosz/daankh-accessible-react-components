import React from 'react';
import useAccessibleButton from '../../hooks/useAccessibleButton.js';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  description?: string;
}

export default function Button(props: IButtonProps) {
  const { children } = props;
  const accessibilityProps = useAccessibleButton({
    disabled: props.disabled,
    description: props.description,
  });

  return (
    <button {...props} {...accessibilityProps}>
      {children}
    </button>
  );
}
