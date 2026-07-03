/** Menu dish card: media, caps name, lowercase ingredient line, price. */
export interface DishCardProps {
  name: string;
  /** Lowercase ingredient-led line, e.g. "gochujang glaze, smoked leek". */
  description?: string;
  price?: string | number;
  /** Image URL; omit to render a CSS atmosphere placeholder. */
  image?: string;
  /** Placeholder mood when no image. @default "warm" */
  atmosphere?: "warm" | "cool" | "smoke";
  /** Optional Badge text (e.g. "Signature"). */
  badge?: string;
  style?: React.CSSProperties;
}
export declare function DishCard(props: DishCardProps): JSX.Element;
