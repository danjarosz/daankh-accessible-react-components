export interface Props {
  disabled?: boolean;
  description?: string;
  label?: string;
}

export interface IUseAccessibleButton {
  'aria-disabled': 'true' | 'false';
  'aria-description'?: string;
  'aria-label'?: string;
}

export default function useAccessibleButton({
  disabled = false,
  description = '',
  label = '',
}: Props): IUseAccessibleButton {
  const result: IUseAccessibleButton = {
    'aria-disabled': disabled ? 'true' : 'false',
  };

  if (description) {
    result['aria-description'] = description;
  }

  if (label) {
    result['aria-label'] = label;
  }

  return result;
}
