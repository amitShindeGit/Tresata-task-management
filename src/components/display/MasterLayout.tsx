import type { PropsWithChildren, HTMLAttributes } from "react";

interface MasterLayoutProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

function MasterLayout({
  children,
  ...rest
}: PropsWithChildren<MasterLayoutProps>) {
  const { title } = rest;
  return (
    <>
      <div className="bg-[#034EA2] p-4 text-white">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
          {title}
        </h1>
      </div>
      {children}
    </>
  );
}

export default MasterLayout;
