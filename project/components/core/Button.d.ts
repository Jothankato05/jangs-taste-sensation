/**
 * Uppercase wide-tracked action button with the signature top-right corner.
 * @startingPoint section="Core" subtitle="Primary / outline / ghost / accent actions" viewport="700x220"
 */
export interface ButtonProps {
  /** @default "primary" */
  variant?: "primary" | "outline" | "ghost" | "accent";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Trailing icon node (e.g. Lucide arrow-right at 16px). */
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
