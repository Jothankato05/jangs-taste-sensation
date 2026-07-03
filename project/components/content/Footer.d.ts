/** Near-black site footer with link columns. */
export interface FooterProps {
  columns?: { title: string; links: string[] }[];
  /** Short light note under the wordmark. */
  note?: string;
  style?: React.CSSProperties;
}
export declare function Footer(props: FooterProps): JSX.Element;
