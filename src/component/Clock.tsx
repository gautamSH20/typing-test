import { useState } from "react";

interface clockInput {
  istrue?: boolean;
}

export function Clock({ istrue }: clockInput) {
  const [clock, setClock] = useState(60);

  if (clock > 0 && istrue) {
    setClock((e) => (e = e - 1));
  }
  return <div>{clock}</div>;
}
