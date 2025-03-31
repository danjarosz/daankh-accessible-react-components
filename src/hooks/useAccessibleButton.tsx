import { useEffect, useState } from 'react';

export interface Props {
  disabled?: boolean;
}

export interface IUseAccessibleButton {
  'aria-disabled': 'true' | 'false' | undefined;
}

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
