"use client";

import Link from "next/link";

import { Logotype } from "@/components/logotype";
import { ModeToggle } from "@/components/mode-toggle";

export const Header = () => (
  <header className="h-16 flex align-center w-full">
    <div className="flex items-center justify-between w-full">
      <Logotype />
      <nav className="ml-auto text-sm font-medium space-x-4 flex align-center">
        <Link href="/about">About</Link>
        <ModeToggle />
      </nav>
    </div>
  </header>
);
