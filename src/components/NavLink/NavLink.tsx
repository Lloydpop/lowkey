import Link from "next/link";
import { ReactNode } from "react";
interface NavLinkProps {
  children: ReactNode;
  to: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, to }) => {
  return (
    <Link className="font-lato text-[15px]" href={to}>
      {children}
    </Link>
  );
};
