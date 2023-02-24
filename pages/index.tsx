import { SideBar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Maincontent } from "@/components/maincontent";
import BG from "../public/bg.svg";

import React, { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div style={{
        background: `url(${BG.src}) no-repeat center center fixed`,
        height: '100vh',
        backgroundSize: 'cover',
        display: 'flex',
        padding:"2rem",
        gap:'2rem'
      }} >
        <div className={open ? "max-md:absolute z-10" : "max-md:hidden" } >
          <SideBar />
        </div>
        <div className="w-full">
          <Header open={open} setOpen={setOpen}  />
          <Maincontent />
        </div>
      </div>
    </>
  )
}
