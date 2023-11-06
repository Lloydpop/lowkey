"use client";
import { Button, Logo, NavLink } from "..";
import React, { useEffect, useState } from "react";
import { Hambugar } from "./component/Hambugar";
import Sidebar from "../Sidebar/Sidebar";

interface HeaderProps {}
const nav = [
  {
    title: "About us",
    to: "/about",
  },
  {
    title: "Products",
    to: "/",
  },
  {
    title: "Billing",
    to: "/billing",
  },
  {
    title: "Documentation",
    to: "/",
  },
  {
    title: "Support",
    to: "/",
  },
];
export const Header: React.FC<HeaderProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className={"lg:py-4"}>
      <Sidebar
        open={open}
        setOpen={() => {
          setOpen(false);
        }}
      >
        <ul className="flex flex-col gap-6">
          {nav.map((item) => (
            <li
              key={item.title}
              onClick={() => {
                setOpen(false);
              }}
            >
              <NavLink to={item.to}>{item.title}</NavLink>
            </li>
          ))}
          <li>
            <Button
              variant="primary2"
              onClick={() => {
                setOpen(false);
              }}
            >
              Book a Demo
            </Button>
          </li>
        </ul>
      </Sidebar>
      <nav className="flex justify-between items-center lg:px-[70px] px-8">
        <div className="flex items-center gap-[3rem]">
          <Logo size={"135.8"} />
          <ul className="lg:flex items-center gap-6 hidden">
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/">Products</NavLink>
            </li>
            <li>
              <NavLink to="/billing">Billing</NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:flex items-center gap-[3rem] hidden">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink to="/">Documentation</NavLink>
            </li>
            <li>
              <NavLink to="/">Support</NavLink>
            </li>
            <li>
              <Button variant="primary2">Book a Demo</Button>
            </li>
          </ul>
        </div>
        <Hambugar
          onClick={() => {
            setOpen(true);
          }}
        />
      </nav>
    </header>
  );
};
