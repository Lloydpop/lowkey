"use client";
import Image from "next/image";
import brand from "../../assets/img/brand.jpg";
import Link from "next/link";
interface LogoProps {
  size?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = "100" }) => {
  return (
    <Link href={"/"} className={`cursor-pointer w-[${size}px]`}>
      <Image
        alt=""
        className="lg:block hidden"
        src={brand}
        style={{
          width: `${size}px`,
        }}
      />
      <Image
        className="lg:hidden block "
        alt=""
        src={brand}
        style={{
          width: `${size}px`,
        }}
      />
    </Link>
  );
};
