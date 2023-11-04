import { PropsButton } from "../../interfaces";

export function Button({ text, onClick }: PropsButton) {
  return <button onClick={onClick}>{text}</button>;
}
