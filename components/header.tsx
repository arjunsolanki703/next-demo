import Image from "next/image";
import React, { useState } from "react";
import menu from "../assets/images/menu.png"
export const Header = ({open,setOpen}:any) => {

    return (
        <>

            {/* <h1 className="text-4xl  font-bold underline center text-sky-400 hover:text-sky-200">
      this is header
    </h1> */}
            <div className="flex flex-col pb-5">
                <div className="h-16 bg-white p-5 rounded-xl flex justify-between">
                    <h2>Header</h2>
                    <button className="md:hidden" onClick={()=>setOpen(!open)}><Image height={10} width={20} src={menu} alt="loading"/></button>
                </div>
            </div>
        </>
    )
}