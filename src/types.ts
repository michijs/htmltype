import { Properties } from "csstype";

export type CSSProperties = Properties & {
  [k in `--${string}`]?: string | number;
};

export type DataGlobalAttributes = {
  /**
   * The data-* global attributes form a class of attributes called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation by scripts.
   */
  [k in `data-${string}`]: string;
};
