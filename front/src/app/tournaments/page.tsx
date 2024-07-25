import React, { Suspense } from "react";
import SideBar from "@/components/SideBar/SideBar"
import SearchBar from "@/components/SearchBar/SearchBar";
import Cards from "@/components/Cards/Cards";

const Tournaments: React.FC = () => {
    return (
        <Suspense fallback={<p className="loading">Loading Home Page...</p>}>
        <>
        <div className="bodyContainer">
        <SearchBar />
        <div className="grid grid-cols-[30%_70%]">
        <SideBar />
        <Cards />
        </div>
        </div>
        </>
        </Suspense>
    )
}

export default Tournaments;