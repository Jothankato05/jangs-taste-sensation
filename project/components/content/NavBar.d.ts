/** Fixed glass nav: wordmark, wide-tracked caps links, outline CTA. */
export interface NavBarProps {
  links?: string[];
  /** Currently active link (Morning Fog + underline). */
  active?: string;
  onNavigate?: (link: string) => void;
  /** CTA label. @default "Reserve" */
  cta?: string;
  onCta?: () => void;
  /** position: fixed. @default false */
  fixed?: boolean;
  style?: React.CSSProperties;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
