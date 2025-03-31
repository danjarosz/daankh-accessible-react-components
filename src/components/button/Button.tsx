import React from 'react';
import { useGlobalStatesAndProperties } from '../../hooks/useGlobalStatesAndProperties/index.js';
import { useAccessibleButton } from '../../hooks/useAccessibleButton/index.js';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  atomic?: boolean;
}

export default function Button(props: IButtonProps) {
  const { children, disabled, atomic } = props;
  const globalAccessibilityProps = useGlobalStatesAndProperties({
    atomic,
  });
  const accessibilityProps = useAccessibleButton({
    disabled,
  });

  return (
    <button {...globalAccessibilityProps} {...accessibilityProps} {...props}>
      {children}
    </button>
  );
}
