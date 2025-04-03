import React from 'react';
import { useGlobalStatesAndProperties } from '../../hooks/useGlobalStatesAndProperties/index.js';
import { useAccessibleButton } from '../../hooks/useAccessibleButton/index.js';
import type { IUseGlobalStatesAndPropertiesProps } from '../../hooks/useGlobalStatesAndProperties/useGlobalStatesAndProperties.js';

type IBase = IUseGlobalStatesAndPropertiesProps &
  React.HTMLAttributes<HTMLButtonElement>;

export interface IButtonProps extends IBase {
  disabled?: boolean;
}

export default function Button(props: IButtonProps) {
  const { atomic, busy, controls, current, ...restProps } = props;
  const { disabled, children } = restProps;

  const globalAccessibilityProps = useGlobalStatesAndProperties({
    atomic,
    busy,
    controls,
    current,
    describedBy: props.describedBy,
  });
  const accessibilityProps = useAccessibleButton({
    disabled,
  });

  return (
    <button
      {...globalAccessibilityProps}
      {...accessibilityProps}
      {...restProps}
    >
      {children}
    </button>
  );
}
