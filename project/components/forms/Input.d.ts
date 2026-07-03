/** Underlined text field; hairline turns Morning Fog on focus. */
export interface InputProps {
  /** Wide-tracked caps label above the field. */
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** @default "text" */
  type?: string;
  /** Error message; tints the underline. */
  error?: string;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
