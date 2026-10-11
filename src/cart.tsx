import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./data";

type CartCtx = {
  items: Record<string, number>;
  count: number;
  add: (p: Product) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});
  const value = useMemo<CartCtx>(
    () => ({
      items,
      count: Object.values(items).reduce((a, b) => a + b, 0),
      add: (p) => setItems((s) => ({ ...s, [p.id]: (s[p.id] ?? 0) + 1 })),
    }),
    [items],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("CartProvider missing");
  return c;
};
