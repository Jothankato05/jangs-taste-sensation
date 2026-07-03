/** Kicker + display headline + optional subline — standard section opener. */
export interface SectionHeadingProps {
  /** Wide-tracked fog caps line above the title. */
  kicker?: string;
  title: string;
  subtitle?: string;
  /** @default "center" */
  align?: "center" | "left";
  /** @default "display" */
  size?: "hero" | "display" | "title";
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
