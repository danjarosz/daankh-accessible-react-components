import React, { useEffect, useState } from 'react';

export interface Props {
  disabled?: boolean;
}

export interface IUseAccessibleButton {
  'aria-disabled': 'true' | 'false' | undefined;
}

// TODO: checkout usage of @storybook/addon-a11y and how tests via storybook works. Before I removed their config.

export default function useAccessibleButton({
  disabled = false,
}: Props): IUseAccessibleButton {
  const [ariaDisabled, setAriaDisabled] = useState<
    'true' | 'false' | undefined
  >(undefined);

  useEffect(() => {
    setAriaDisabled(disabled ? 'true' : 'false');
  }, [disabled]);

  return {
    'aria-disabled': ariaDisabled,
  };
}
