/** Glass modal dialog with kicker + caps title. */
export interface DialogProps {
  open: boolean;
  /** Fog caps line above the title. */
  kicker?: string;
  title?: string;
  onClose?: () => void;
  /** @default 480 */
  width?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
