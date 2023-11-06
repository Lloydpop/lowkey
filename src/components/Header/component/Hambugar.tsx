"use client";
interface HambugarProps {
  onClick?: () => void;
}

export const Hambugar: React.FC<HambugarProps> = ({ onClick }) => {
  return (
    <div
      className="lg:hidden flex-col gap-[4px] cursor-pointer flex"
      onClick={onClick}
    >
      <p className="w-8 h-[3px] bg-primary"></p>
      <p className="w-8 h-[3px] bg-primary"></p>
      <p className="w-8 h-[3px] bg-primary"></p>
    </div>
  );
};
