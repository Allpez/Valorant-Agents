import { useState } from "react";
import { SearchBar } from "./SearchBar.jsx";
import { DropDown } from "./DropDown.jsx";
import valorantLogo from "../src/assets/images/valorant-logo.png";

function Header({ text, handleChangeText, selectedRole, setSelectedRole }) {
    const roles = ["Duelist", "Controller", "Sentinel", "Initiator"];

    return (
        <div className='flex flex-col sm:flex-row sm:justify-between p-10 px-20 bg-black'>
            <div className="flex">
                <img className="img-card w-36" src={valorantLogo} alt='Valorant Logo' />
                <div className="ms-20">
                    <span className='text-3xl text-md font-bold text-red-500 mt-4'>Valorant</span>
                    <h1 className='text-5xl text-white font-bold ps-5'>Agents</h1>
                </div>
            </div>
            <div className="flex gap-2">
                <DropDown selectedRole={selectedRole} setSelectedRole={setSelectedRole} roles={roles} />
                <SearchBar searchText={text} handleChangeText={handleChangeText} />
            </div>
        </div>
    );
}

export default Header;
