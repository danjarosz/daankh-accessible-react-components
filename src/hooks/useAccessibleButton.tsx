export interface Props {
  description?: string;
}

export interface IUseAccessibleButton {
  'aria-description'?: string;
}

export default function useAccessibleButton({
  description = '',
}: Props): IUseAccessibleButton {
  const result: IUseAccessibleButton = {};

  if (description) {
    result['aria-description'] = description;
  }

  return result;
}
