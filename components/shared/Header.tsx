import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "../ui/button";

import {  } from "@clerk/nextjs";

const Nav = async() => {

  return (
    <div className="w-full p-5 border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/favicon.png"
            width={20}
            height={30}
            alt="logo"
          />
        </Link>
        {/* <SignedOut>
          <Button asChild className="rounded-xl" size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn> */}

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            {/* <NavItems /> */}
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            {/* <MobileNav /> */}
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Nav;
