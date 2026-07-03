/** Circular radio with Morning Fog dot. */
export interface RadioProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
