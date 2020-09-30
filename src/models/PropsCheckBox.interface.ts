export interface IPropsCheckBox {
  name: string;
  checked: boolean;
  level?: string;
  change: (checked: boolean) => void;
}
