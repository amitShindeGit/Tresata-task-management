import type { ReactNode } from "react";

export const RenderConditional = ({
  check,
  children,
}: {
  readonly check: boolean;
  readonly children: ReactNode;
}) => {
  if (!check) return <></>;

  return <>{children}</>;
};
