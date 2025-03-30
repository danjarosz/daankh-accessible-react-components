export interface Props {
  disabled?: boolean;
}

export interface IUseAccessibleButton {
  'aria-disabled': 'true' | 'false';
}

export default function useAccessibleButton({
  disabled = false,
}: Props): IUseAccessibleButton {
  const result: IUseAccessibleButton = {
    'aria-disabled': disabled ? 'true' : 'false',
  };

  return result;
}
