import { useEffect, useState } from 'react';

export interface IUseGlobalStatesAndProperties {
  'aria-atomic': boolean | undefined;
  'aria-busy': boolean | undefined;
}

export interface IUseGlobalStatesAndPropertiesProps {
  atomic?: boolean;
  busy?: boolean;
}

/**
 * This hook is about properties described here https://www.w3.org/TR/wai-aria-1.2/#global_states
 */

export default function useGlobalStatesAndProperties({
  atomic,
  busy,
}: IUseGlobalStatesAndPropertiesProps): IUseGlobalStatesAndProperties {
  const [ariaAtomic, setAriaAtomic] = useState<boolean | undefined>(undefined);
  const [ariaBusy, setAriaBusy] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (typeof atomic === 'boolean') {
      setAriaAtomic(atomic);
    } else {
      setAriaAtomic(undefined);
    }
  }, [atomic]);

  useEffect(() => {
    if (typeof busy === 'boolean') {
      setAriaBusy(busy);
    } else {
      setAriaBusy(undefined);
    }
  }, [busy]);

  return {
    'aria-atomic': ariaAtomic,
    'aria-busy': ariaBusy,
  };
}
