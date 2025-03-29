export interface Props {
  disabled?: boolean;
  description?: string;
}

export interface IUseAccessibleButton {
  'aria-disabled': 'true' | 'false';
  'aria-description'?: string;
}

export default function useAccessibleButton({
  disabled = false,
  description = '',
}: Props): IUseAccessibleButton {
  const result: IUseAccessibleButton = {
    'aria-disabled': disabled ? 'true' : 'false',
  };

  if (description) {
    result['aria-description'] = description;
  }

  return result;
}
