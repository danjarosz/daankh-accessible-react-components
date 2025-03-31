import { useEffect, useState } from 'react';

export interface IUseGlobalStatesAndProperties {
  'aria-atomic': boolean | undefined;
}

export interface IUseGlobalStatesAndPropertiesProps {
  atomic?: boolean;
}

/**
 * This hook is about properties described here https://www.w3.org/TR/wai-aria-1.2/#global_states
 */

export default function useGlobalStatesAndProperties({
  atomic,
}: IUseGlobalStatesAndPropertiesProps): IUseGlobalStatesAndProperties {
  const [ariaAtomic, setAriaAtomic] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (typeof atomic === 'boolean') {
      setAriaAtomic(atomic);
    } else {
      setAriaAtomic(undefined);
    }
  }, [atomic]);

  return {
    'aria-atomic': ariaAtomic,
  };
}
