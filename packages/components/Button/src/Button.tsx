import { useCount } from "../../../hooks";

interface Props {
  label?: string;
  operation?: "add" | "sudstract";
  num?: number;
}

export function Button({ label = "Count", operation = "add", num = 1 }: Props) {
  const { add, count, sudstract } = useCount();
  const haddleClick = () => {
    operation === "add" && add(num);
    operation === "sudstract" && sudstract(num);
  };

  return (
    <button onClick={haddleClick}>
      {label} {count}
    </button>
  );
}
