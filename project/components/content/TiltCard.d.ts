/**
 * 3D perspective tilt card — cinematic depth primitive; tilts toward cursor.
 * @startingPoint section="Content" subtitle="3D cursor-tilt card" viewport="700x420"
 */
export interface TiltCardProps {
  /** Max tilt in degrees. @default 7 */
  maxTilt?: number;
  /** translateZ lift on hover. @default true */
  lift?: boolean;
  /** 28px top-right signature corner. @default true */
  signatureCorner?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function TiltCard(props: TiltCardProps): JSX.Element;
