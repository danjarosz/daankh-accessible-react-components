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
}
</code-block>

## Props description

- `atomic?: boolean;` - if `atomic` is `boolean`, it will force include `aria-atomic` with a value of `true` or `false`
  into HTML tag. If it is not provided or it is `undefined`, `aria-atomic` is omitted in HTML.

## Result Schema

<code-block>
interface IUseGlobalStatesAndProperties {
  'aria-atomic': boolean | undefined;
}
</code-block>

## Usage

Run hook in the component:

<code-block>
const accessibilityProps = useGlobalStatesAndProperties({
    atomic?: boolean
})
</code-block>

Put received props to the output of your component:

<code-block>
return &lt;button {...accessibilityProps}&gt;Login&lt;/button&gt;
</code-block>

## Recommendations

In most cases, if some of specified `aria=*` attributes should have a default value, the value should be set to
`undefined`, to not include this `aria-*` into DOM. To ensure that, check out W3C Aria Documentation.

## Resources:

- [Global state and properties description](https://www.w3.org/TR/wai-aria-1.2/#global_states)
- [aria-atomic](https://www.w3.org/TR/wai-aria-1.2/#aria-atomic)
- [aria-busy](https://www.w3.org/TR/wai-aria-1.2/#aria-busy)
- [aria-controls](https://www.w3.org/TR/wai-aria-1.2/#aria-controls)