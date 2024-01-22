export interface CustomSvgProps {
  width?: number;
  height?: number;
  className?: string;
}

export interface IndustryData {
  id: number;
  title: string;
  icon: React.FunctionComponent<CustomSvgProps>;
}
