/**
 * Typed brand lockup for Jang's Taste Sensation. No drawn logo exists — always use this.
 * @startingPoint section="Brand" subtitle="Typed brand lockup" viewport="700x190"
 */
export interface WordmarkProps {
  /** Lockup scale. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Show the TASTE · SENSATION tagline line. @default true */
  tagline?: boolean;
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
