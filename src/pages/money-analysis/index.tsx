import { PlaceholderH } from "@/components/placeholder/placeholder-h";

import { Analysis } from "./analysis";
import { Ctx, useCtxInit } from "./ctx";
import { Desc } from "./desc";
import { List } from "./list";

export default function MoneyCounterPage() {
  const ctx = useCtxInit();

  return (
    <Ctx.Provider value={ctx}>
      <Desc />
      <List />
      <Analysis />
      <PlaceholderH />
    </Ctx.Provider>
  );
}
