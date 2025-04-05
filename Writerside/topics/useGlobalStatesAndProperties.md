# useGlobalStatesAndProperties

## Introduction

According to [W3C](https://www.w3.org/TR/wai-aria-1.2/#global_states):

_Some states and properties are applicable to all host language elements regardless of whether a role is applied. The
following global states and properties are supported by all roles and by all base markup elements unless otherwise
prohibited. If a role prohibits use of any global states or properties, those states or properties are listed as
prohibited in the characteristics table included in the section that defines the role._

Because of that, **useGlobalStatesAndProperties** hook can be used for each HTML tag. It is used in the background of
all provided Accessible Components. If you create your own components, feel free to provide all props it provides for
them.

## Props Schema

<code-block>
IUseGlobalStatesAndPropertiesProps {
  atomic?: boolean;
  busy?: boolean;
  controls?: string | string[];
  current?: 'page' | 'step' | 'location' | 'date' | 'time' | string | boolean;
  describedby?: string | string[];
  dropeffect?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
  flowto?: string | string[];
}
</code-block>

## Props description

- `atomic?: boolean` - if `atomic` is `boolean`, it will force include `aria-atomic` with a value of `true` or `false`
  into HTML tag. If it is not provided or it is `undefined`, `aria-atomic` is omitted in HTML.
- `busy?: boolean` - if `busy` is `boolean`, it will force include `aria-busy` with a value of `true` or `false`
  into HTML tag. If it is not provided or it is `undefined`, `aria-atomic` is omitted in HTML.
- `controls?: string | string[]` - list of ids, what elements are controlled by this HTML element. It returns
  space-seperated list of ids.
- `current?: 'page' | 'step' | 'location' | 'date' | 'time' | string | boolean` - it is strongly recommended to use
  these values `'page' | 'step' | 'location' | 'date' | 'time'`, because they have semantic meaning.
- `describedby?: string | string[]` - list of ids, what elements describes given element. E.x., useful if the
  description of the element is located in a tooltip.
- dropeffect?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'; - list of tokens. They describe the way how
  dropeffect works.
- flowto?: string | string[]; - list of ids, that indicates to what element or elements leads the element, that contains
  property of aria-flowto

## Result Schema

<code-block>
interface IUseGlobalStatesAndProperties {
  'aria-atomic': boolean | undefined;
  'aria-busy': boolean | undefined;
  'aria-controls': string | undefined;
  'aria-current': "page" | "location" | "location" | "date" | "time" | true | undefined;
  'aria-describedby': string | undefined;
  'aria-dropeffect': 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup' |undefined;
  'aria-flowto': string | undefined;
}
</code-block>

## Usage

Run hook in the component with wanted values:

<code-block>
const accessibilityProps = useGlobalStatesAndProperties({
    atomic: true
})
</code-block>

Put received props to the output of your component:

<code-block>
return &lt;button {...accessibilityProps}&gt;Login&lt;/button&gt;
</code-block>

## Recommendations

In most cases, if some of specified `aria=*` attributes should have a default value, the value should be set to
`undefined`, to not attach this `aria-*` into DOM. As for the specific `aria-*` property, check out W3C Aria
Documentation.

## Resources:

- [Global state and properties description](https://www.w3.org/TR/wai-aria-1.2/#global_states)
- [aria-atomic](https://www.w3.org/TR/wai-aria-1.2/#aria-atomic)
- [aria-busy](https://www.w3.org/TR/wai-aria-1.2/#aria-busy)
- [aria-controls](https://www.w3.org/TR/wai-aria-1.2/#aria-controls)
- [aria-current](https://www.w3.org/TR/wai-aria-1.2/#aria-current)
- [aria-describedby](https://www.w3.org/TR/wai-aria-1.2/#aria-controls)
- [aria-details](https://www.w3.org/TR/wai-aria-1.2/#aria-details)
- [aria-dropeffect](https://www.w3.org/TR/wai-aria-1.2/#aria-dropeffect)
- [aria-flowto](https://www.w3.org/TR/wai-aria-1.2/#aria-flowto)
