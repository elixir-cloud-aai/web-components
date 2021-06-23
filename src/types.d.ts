interface indexType {
  display: string;
  subIndexes: { display: string; url: string }[];
}

interface componentProps {
  name: string;
  type: string;
  default?: string;
}

export { indexType, componentProps };
