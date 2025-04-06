import { useEffect, useState } from 'react';

const ARIA_CURRENT_TOKENS = ['page', 'step', 'location', 'date', 'time'];

type TAriaCurrentToken = 'page' | 'step' | 'location' | 'date' | 'time';

// const ARIA_DROPEFFECT_TOKENS = [
//   'none',
//   'copy',
//   'execute',
//   'link',
//   'move',
//   'popup',
// ];

type TAriaDropeffectToken =
  | 'none'
  | 'copy'
  | 'execute'
  | 'link'
  | 'move'
  | 'popup';

export interface IUseGlobalStatesAndProperties {
  'aria-atomic': boolean | undefined;
  'aria-busy': boolean | undefined;
  'aria-controls': string | undefined;
  'aria-current': TAriaCurrentToken | true | undefined;
  'aria-describedby': string | undefined;
  'aria-details': string | undefined;
  'aria-dropeffect': TAriaDropeffectToken | undefined;
  'aria-flowto': string | undefined;
  'aria-grabbed': boolean | undefined;
}

export interface IUseGlobalStatesAndPropertiesProps {
  atomic?: boolean;
  busy?: boolean;
  controls?: string | string[]; // list of ids
  current?: TAriaCurrentToken | string | boolean;
  describedby?: string | string[]; // list of ids
  details?: string | string[]; // list of ids
  dropeffect?: TAriaDropeffectToken;
  flowto?: string | string[];
  grabbed?: boolean;
}

/**
 * This hook is about properties described here https://www.w3.org/TR/wai-aria-1.2/#global_states
 */

export default function useGlobalStatesAndProperties({
  atomic,
  busy,
  controls,
  current,
  describedby,
  details,
  dropeffect,
  flowto,
  grabbed,
}: IUseGlobalStatesAndPropertiesProps): IUseGlobalStatesAndProperties {
  const [ariaAtomic, setAriaAtomic] = useState<boolean | undefined>(undefined);
  const [ariaBusy, setAriaBusy] = useState<boolean | undefined>(undefined);
  const [ariaControls, setAriaControls] = useState<string | undefined>(
    undefined,
  );
  const [ariaCurrent, setAriaCurrent] = useState<
    TAriaCurrentToken | true | undefined
  >(undefined);
  const [ariaDescribedBy, setAriaDescribedBy] = useState<string | undefined>(
    undefined,
  );
  const [ariaDetails, setAriaDetails] = useState<string | undefined>(undefined);
  const [ariaDropeffect, setAriaDropeffect] = useState<
    TAriaDropeffectToken | undefined
  >(undefined);
  const [ariaFlowTo, setAriaFlowTo] = useState<string | undefined>(undefined);
  const [ariaGrabbed, setAriaGrabbed] = useState<boolean | undefined>(
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

  // aria-current
  useEffect(() => {
    if (typeof current === 'undefined') {
      setAriaCurrent(undefined);
    } else if (typeof current === 'boolean') {
      setAriaCurrent(current || undefined);
    } else {
      if (ARIA_CURRENT_TOKENS.includes(current)) {
        setAriaCurrent(current as TAriaCurrentToken);
      } else if (current.length) {
        setAriaCurrent(true);
      } else {
        setAriaCurrent(undefined);
      }
    }
  }, [current]);

  // aria-describedby
  useEffect(() => {
    if (typeof describedby === 'string') {
      setAriaDescribedBy(describedby);
    } else if (typeof describedby === 'object' && Array.isArray(describedby)) {
      if (!describedby.length) {
        setAriaDescribedBy(undefined);
        return;
      }
      setAriaDescribedBy(describedby.join(' '));
    } else {
      setAriaDescribedBy(undefined);
    }
  }, [describedby]);

  // aria-details
  useEffect(() => {
    if (typeof details === 'string') {
      setAriaDetails(details);
    } else if (typeof details === 'object' && Array.isArray(details)) {
      if (!details.length) {
        setAriaDetails(undefined);
        return;
      }
      setAriaDetails(details.join(' '));
    } else {
      setAriaDetails(undefined);
    }
  }, [details]);

  // aria-dropeffect
  useEffect(() => {
    if (typeof dropeffect === 'string') {
      setAriaDropeffect(dropeffect);
    } else {
      setAriaDropeffect(undefined);
    }
  }, [dropeffect]);

  // aria-flowto
  useEffect(() => {
    if (typeof flowto === 'string') {
      setAriaFlowTo(flowto);
    } else if (typeof flowto === 'object' && Array.isArray(flowto)) {
      if (!flowto.length) {
        setAriaFlowTo(undefined);
        return;
      }
      setAriaFlowTo(flowto.join(' '));
    } else {
      setAriaFlowTo(undefined);
    }
  }, [flowto]);

  // aria-grabbed
  useEffect(() => {
    if (typeof grabbed === 'boolean') {
      setAriaGrabbed(grabbed);
    } else {
      setAriaGrabbed(undefined);
    }
  }, [grabbed]);

  // RETURN
  return {
    'aria-atomic': ariaAtomic,
    'aria-busy': ariaBusy,
    'aria-controls': ariaControls,
    'aria-current': ariaCurrent,
    'aria-describedby': ariaDescribedBy,
    'aria-details': ariaDetails,
    'aria-dropeffect': ariaDropeffect,
    'aria-flowto': ariaFlowTo,
    'aria-grabbed': ariaGrabbed,
  };
}
