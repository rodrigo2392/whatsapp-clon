export interface TabProp {
  title: string;
  type: string;
  active?: boolean;
  setActive: (type: string) => void;
}
