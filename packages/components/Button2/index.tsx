interface Props {
  label?: string;
  text?: string;
}

export function Button2({ label, text }: Props) {
  return (
    <button>
      {label}
      {text}
    </button>
  );
}
