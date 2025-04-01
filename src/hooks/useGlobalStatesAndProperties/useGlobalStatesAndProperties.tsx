import { useEffect, useState } from 'react';

export interface IUseGlobalStatesAndProperties {
  'aria-atomic': boolean | undefined;
  'aria-busy': boolean | undefined;
  'aria-controls': string | undefined;
}

export interface IUseGlobalStatesAndPropertiesProps {
  atomic?: boolean;
  busy?: boolean;
  controls?: string | string[]; // list of ids
}

/**
 * This hook is about properties described here https://www.w3.org/TR/wai-aria-1.2/#global_states
 */

export default function useGlobalStatesAndProperties({
  atomic,
  busy,
  controls,
}: IUseGlobalStatesAndPropertiesProps): IUseGlobalStatesAndProperties {
  const [ariaAtomic, setAriaAtomic] = useState<boolean | undefined>(undefined);
  const [ariaBusy, setAriaBusy] = useState<boolean | undefined>(undefined);
  const [ariaControls, setAriaControls] = useState<string | undefined>(
    undefined,
  );

  // aria-atomic
  useEffect(() => {
    if (typeof atomic === 'boolean') {
      setAriaAtomic(atomic);
    } else {
      setAriaAtomic(undefined);
    }
  }, [atomic]);

  // aria-busy
  useEffect(() => {
    if (typeof busy === 'boolean') {
      setAriaBusy(busy);
    } else {
      setAriaBusy(undefined);
    }
  }, [busy]);

  // aria-controls
  useEffect(() => {
    if (typeof controls === 'string') {
      setAriaControls(controls);
    } else if (typeof controls === 'object' && Array.isArray(controls)) {
      if (!controls.length) {
        setAriaControls(undefined);
        return;
      }
      setAriaControls(controls.join(' '));
    } else {
      setAriaControls(undefined);
    }
  }, [controls]);

  // RETURN
  return {
    'aria-atomic': ariaAtomic,
    'aria-busy': ariaBusy,
    'aria-controls': ariaControls,
  };
}
