/** Wide-tracked caps status chip (e.g. "Tonight", "Sold out", "New"). */
export interface BadgeProps {
  /** @default "fog" */
  tone?: "fog" | "water" | "neutral" | "solid";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
