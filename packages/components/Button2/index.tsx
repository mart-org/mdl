interface Props {
  label?: string;
  text?: string;
}

export function Button({ label, text }: Props) {
  return (
    <button>
      {label}
      {text}
    </button>
  );
}
