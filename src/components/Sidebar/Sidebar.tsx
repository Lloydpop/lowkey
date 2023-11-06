import { XMarkIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  open = false,
  setOpen,
  children,
}) => {
  return (
    <>
      {open && (
        <div
          className="w-full h-full bg-[#00000067] fixed left-0 top-0 z-10"
          onClick={() => {
            setOpen(false);
          }}
        />
      )}
      <div
        className={`fixed z-[1000] duration-[0.7s] p-8  ${
          open ? "right-0" : "-right-[250px]"
        } top-0 bg-white w-[230px] h-[auto] border shadow-lg lg:hidden block`}
      >
        <div className=" absolute right-4 top-[20px] flex items-center justify-center cursor-pointer ">
          <XMarkIcon
            onClick={() => {
              setOpen(false);
            }}
            className="w-8 h-8 text-primary"
          />
        </div>

        <div>{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
