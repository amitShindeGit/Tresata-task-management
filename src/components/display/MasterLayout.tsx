import type { PropsWithChildren, HTMLAttributes } from "react";
import { BackNavIcon } from "../../utils/assets";
import { Link } from "react-router";

interface MasterLayoutProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  backLink?: string;
}

function MasterLayout({
  children,
  ...rest
}: PropsWithChildren<MasterLayoutProps>) {
  const { title, backLink } = rest;
  return (
    <>
      <div className="flex gap-3 bg-[#034EA2] p-4 text-white">
        {backLink ? (
          <Link to={backLink} className="mt-1 mr-2">
            <BackNavIcon />
          </Link>
        ) : (
          <></>
        )}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
          {title}
        </h1>
      </div>
      {children}
    </>
  );
}

export default MasterLayout;
