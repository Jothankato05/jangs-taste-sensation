/** Square hairline icon-only button (Lucide icon as children). */
export interface IconButtonProps {
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Highlighted state (Morning Fog icon). */
  active?: boolean;
  disabled?: boolean;
  /** Accessible label. */
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
