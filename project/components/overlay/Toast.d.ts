/** Bottom-right glass toast; auto-dismisses. */
export interface ToastProps {
  open: boolean;
  /** Caps headline. */
  message: string;
  detail?: string;
  onClose?: () => void;
  /** ms before auto-dismiss; 0 disables. @default 4000 */
  duration?: number;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
