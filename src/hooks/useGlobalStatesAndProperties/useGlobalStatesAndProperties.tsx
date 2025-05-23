import { useEffect, useState } from 'react';

const ARIA_CURRENT_TOKENS = ['page', 'step', 'location', 'date', 'time'];

type TAriaCurrentToken = 'page' | 'step' | 'location' | 'date' | 'time';

type TAriaDropeffectToken =
  | 'none'
  | 'copy'
  | 'execute'
  | 'link'
  | 'move'
  | 'popup';

type TAriaLiveToken = 'assertive' | 'off' | 'polite';

type TAriaRelevantToken =
  | 'additions'
  | 'additions text'
  | 'all'
  | 'removals'
  | 'text';

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
  'aria-hidden': boolean | undefined;
  'aria-keyshortcuts': string | undefined;
  'aria-live': TAriaLiveToken | undefined;
  'aria-owns': string | undefined;
  'aria-relevant': TAriaRelevantToken | undefined;
  'aria-roledescription': string | undefined;
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
  hidden?: boolean;
  keyshortcuts?: string;
  live?: TAriaLiveToken;
  owns?: string | string[];
  relevant?: TAriaRelevantToken;
  roledescription?: string;
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
  hidden,
  keyshortcuts,
  live,
  owns,
  relevant,
  roledescription,
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
  const [ariaHidden, setAriaHidden] = useState<boolean | undefined>(undefined);
  const [ariaKeyshortcuts, setAriaKeyshortcuts] = useState<string | undefined>(
    undefined,
  );
  const [ariaLive, setAriaLive] = useState<TAriaLiveToken | undefined>(
    undefined,
  );
  const [ariaOwns, setAriaOwns] = useState<string | undefined>(undefined);
  const [ariaRelevant, setAriaRelevant] = useState<
    TAriaRelevantToken | undefined
  >(undefined);
  const [ariaRoledescription, setAriaRoleDescription] = useState<
    string | undefined
  >(undefined);

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

  // aria-hidden
  useEffect(() => {
    if (typeof hidden === 'boolean') {
      setAriaHidden(hidden);
    } else {
      setAriaHidden(undefined);
    }
  }, [hidden]);

  // aria-keyshortcuts
  useEffect(() => {
    if (Boolean(keyshortcuts)) {
      setAriaKeyshortcuts(keyshortcuts);
    } else {
      setAriaKeyshortcuts(undefined);
    }
  }, [keyshortcuts]);

  // aria-live
  useEffect(() => {
    if (typeof live === 'string') {
      setAriaLive(live);
    } else {
      setAriaLive(undefined);
    }
  }, [live]);

  // aria-owns
  useEffect(() => {
    if (typeof owns === 'string') {
      setAriaOwns(owns);
    } else if (typeof owns === 'object' && Array.isArray(owns)) {
      if (!owns.length) {
        setAriaOwns(undefined);
        return;
      }
      setAriaOwns(owns.join(' '));
    } else {
      setAriaOwns(undefined);
    }
  }, [owns]);

  // aria-relevant
  useEffect(() => {
    if (typeof relevant === 'string') {
      setAriaRelevant(relevant);
    } else {
      setAriaRelevant(undefined);
    }
  }, [relevant]);

  // aria-roledescription
  useEffect(() => {
    if (
      typeof roledescription === 'string' &&
      Boolean(roledescription.trim())
    ) {
      setAriaRoleDescription(roledescription);
    } else {
      setAriaRoleDescription(undefined);
    }
  }, [roledescription]);

  // TODO check out to not return undefined values at all

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
    'aria-hidden': ariaHidden,
    'aria-keyshortcuts': ariaKeyshortcuts,
    'aria-live': ariaLive,
    'aria-owns': ariaOwns,
    'aria-relevant': ariaRelevant,
    'aria-roledescription': ariaRoledescription,
  };
}
