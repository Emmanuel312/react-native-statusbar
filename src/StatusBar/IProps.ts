export enum BarStyleOptions {
  default = "default",
  lightContent = "light-content",
  darkContent = "dark-content",
}

export interface Props {
  backgroundColor: string;
  barStyle:
    | BarStyleOptions.darkContent
    | BarStyleOptions.default
    | BarStyleOptions.lightContent
    | undefined;
  hidden?: boolean;
  translucent?: boolean;
  animated?: boolean;
  networkActivityIndicatorVisible?: boolean;
}
